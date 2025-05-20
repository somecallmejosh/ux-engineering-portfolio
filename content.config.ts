import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        description: z.string(),
        image: z.string(),
        publishedAt: z.date(),
        slug: z.string(),
        tags: z.array(z.string()),
        title: z.string(),
      }),
    }),
    projects: defineCollection({
      source: 'projects/*.md',
      type: 'page',
      schema: z.object({
        businessName: z.string(),
        businessUrl: z.string(),
        description: z.string(),
        image: z.string(),
        publishedAt: z.date(),
        slug: z.string(),
        tags: z.array(z.string()),
        title: z.string(),
      }),
    }),
    experiments: defineCollection({
      source: 'experiments/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        publishedAt: z.date(),
        slug: z.string(),
        tags: z.array(z.string()).optional(),
        image_alt: z.string().optional(),
      }),
    }),
    dev_notes: defineCollection({
      source: 'dev-notes/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        image_alt: z.string().optional(),
        description: z.string(),
        publishedAt: z.date(),
        slug: z.string(),
      }),
    }),
  },
})
