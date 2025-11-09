import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify access token
  const authHeader = req.headers.authorization;
  const expectedToken = process.env.OUTRANKWEBHOOKTOKEN;

  if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { event_type, data } = req.body;

    // Validate payload structure
    if (event_type !== 'publish_articles' || !data?.articles) {
      return res.status(400).json({ error: 'Invalid payload structure' });
    }

    // Initialize GitHub API
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'Bonke88';
    const repo = 'revops-jet-site';
    const branch = 'main';

    const results = [];

    // Process each article
    for (const article of data.articles) {
      try {
        const {
          id,
          title,
          content_markdown,
          meta_description,
          slug: articleSlug,
          tags,
          created_at
        } = article;

        if (!content_markdown || !title) {
          results.push({ id, status: 'skipped', reason: 'Missing content or title' });
          continue;
        }

        // Use provided slug or generate from title
        const slug = articleSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const fileName = `${slug}.md`;
        const filePath = `src/content/guides/${fileName}`;

        // Extract metadata from tags or use defaults
        const tool = tags?.find(t => ['salesforce', 'hubspot', 'zapier', 'make', 'n8n', 'clay'].includes(t.toLowerCase())) || 'zapier';
        const useCase = tags?.find(t => ['lead-generation', 'sales-automation', 'data-enrichment'].includes(t.toLowerCase())) || 'sales-automation';
        const difficulty = tags?.find(t => ['beginner', 'intermediate', 'advanced'].includes(t.toLowerCase())) || 'intermediate';

        // Estimate read time (words / 200 words per minute)
        const wordCount = content_markdown.split(/\s+/).length;
        const timeToImplement = Math.max(5, Math.round(wordCount / 200));

        // Format dates
        const publishDate = created_at ? new Date(created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

        // Ensure description is max 160 chars
        const description = meta_description?.slice(0, 160) || title.slice(0, 160);

        // Create frontmatter
        const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
tool: "${tool}"
useCase: "${useCase}"
difficulty: "${difficulty}"
timeToImplement: ${timeToImplement}
publishDate: ${publishDate}
lastUpdated: ${publishDate}
aiGenerated: true
source: "outrank"
outrankId: "${id}"
---

${content_markdown}
`;

        // Check if file already exists
        let sha;
        try {
          const { data: fileData } = await octokit.repos.getContent({
            owner,
            repo,
            path: filePath,
            ref: branch
          });
          sha = fileData.sha;
        } catch (error) {
          // File doesn't exist, that's okay
        }

        // Create or update the file
        await octokit.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: filePath,
          message: `Add AI-generated guide: ${title} [Outrank]`,
          content: Buffer.from(frontmatter).toString('base64'),
          branch,
          ...(sha && { sha })
        });

        results.push({
          id,
          status: 'success',
          slug,
          url: `https://revopsjet.com/blog/${slug}`
        });

      } catch (articleError) {
        console.error(`Error processing article ${article.id}:`, articleError);
        results.push({
          id: article.id,
          status: 'error',
          error: articleError.message
        });
      }
    }

    return res.status(200).json({
      message: 'Webhook processed successfully',
      processed: results.length,
      results
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Failed to process webhook',
      details: error.message
    });
  }
}
