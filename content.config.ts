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
  },
})
