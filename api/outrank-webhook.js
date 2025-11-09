import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify access token
  const authHeader = req.headers.authorization;
  const expectedToken = process.env.OUTRANK_WEBHOOK_TOKEN;

  if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { article, keyword, metadata } = req.body;

    if (!article || !keyword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize GitHub API
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'Bonke88';
    const repo = 'revops-jet-site';
    const branch = 'main';

    // Generate slug from keyword
    const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const fileName = `${slug}.md`;
    const filePath = `src/content/guides/${fileName}`;

    // Create frontmatter
    const publishDate = new Date().toISOString().split('T')[0];
    const frontmatter = `---
title: "${metadata?.title || article.title}"
description: "${metadata?.description || article.excerpt}"
tool: "${metadata?.tool || 'zapier'}"
useCase: "${metadata?.useCase || 'sales-automation'}"
difficulty: "${metadata?.difficulty || 'intermediate'}"
timeToImplement: ${metadata?.readTime || 15}
publishDate: ${publishDate}
lastUpdated: ${publishDate}
aiGenerated: true
source: "outrank"
targetKeyword: "${keyword}"
---

${article.content}
`;

    // Check if file already exists
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: filePath,
        ref: branch
      });
      sha = data.sha;
    } catch (error) {
      // File doesn't exist, that's okay
    }

    // Create or update the file
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: `Add AI-generated guide: ${metadata?.title || article.title}`,
      content: Buffer.from(frontmatter).toString('base64'),
      branch,
      ...(sha && { sha })
    });

    return res.status(200).json({
      success: true,
      message: 'Article published successfully',
      slug
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Failed to process webhook',
      details: error.message
    });
  }
}
