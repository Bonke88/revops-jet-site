export default {
  // Site configuration
  site: {
    name: 'RevOps Jet',
    domain: 'revopsjet.com',
    niche: 'revops', // revops or gtm
    contentDir: 'src/content/guides'
  },

  // SEObot.ai configuration
  seobot: {
    apiKey: process.env.SEOBOT_API_KEY,
    projectId: process.env.SEOBOT_PROJECT_ID,
    contentType: 'blog-post',
    autoPublish: true,
    settings: {
      wordCount: { min: 1500, max: 2500 },
      tone: 'professional',
      includeImages: false,
      includeFAQ: true,
      includeTableOfContents: true
    }
  },

  // Outrank.so configuration (optional)
  outrank: {
    apiKey: process.env.OUTRANK_API_KEY,
    workflow: 'seo-article',
    qualityScore: 80, // Minimum quality threshold
    autoOptimize: true,
    settings: {
      depth: 'comprehensive',
      researchLevel: 'medium'
    }
  },

  // Content ingestion settings
  ingestion: {
    checkInterval: '0 0 * * *', // Daily at midnight
    batchSize: 5, // Process 5 articles at a time
    reviewRequired: false, // Auto-publish without review
    minQualityScore: 75
  },

  // Keyword targeting for RevOps niche
  keywords: [
    { keyword: 'n8n workflow automation', difficulty: 45, priority: 'high' },
    { keyword: 'zapier revops automation', difficulty: 42, priority: 'high' },
    { keyword: 'make.com integration', difficulty: 38, priority: 'medium' },
    { keyword: 'clay data enrichment', difficulty: 35, priority: 'medium' },
    { keyword: 'revenue operations automation', difficulty: 50, priority: 'high' },
    { keyword: 'crm workflow automation', difficulty: 40, priority: 'medium' },
    { keyword: 'data pipeline automation', difficulty: 45, priority: 'medium' },
    { keyword: 'revops stack integration', difficulty: 42, priority: 'high' }
  ]
};
