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
    services: defineCollection({
      source: 'services/*.md',
      type: 'page',
      schema: z.object({
        slug: z.string(),
        label: z.string(),
        price: z.string().optional(),
        timeline: z.string().optional(),
        deliveredAs: z.string().optional(),
        isFree: z.boolean().optional(),
        isComingSoon: z.boolean().optional(),
        isAnchor: z.boolean().optional(),
        order: z.number().optional(),
        description: z.string(),
        audience: z.string().optional(),
        audienceDetail: z.string().optional(),
        outcome: z.string().optional(),
        outcomeFull: z.string().optional(),
        includes: z.array(z.string()).optional(),
        includesFull: z.array(z.string()).optional(),
        tagline: z.string().optional(),
        insight: z.string().optional(),
        process: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
        testimonialCategory: z.string().optional(),
      }),
    }),
    scorecard: defineCollection({
      source: 'scorecard/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
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
        tags: z.array(z.string()).optional(),
      }),
    }),
    guides: defineCollection({
      source: 'guides/*.md',
      type: 'page',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        publishedAt: z.date(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
    }),
    guide_chapters: defineCollection({
      source: 'guides/*/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number(),
      }),
    }),
  },
})
