// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Joshua Briley',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/styles.css'],
  runtimeConfig: {
    public: {
      sqlPath: process.env.SQL_ALLOW_PATH,
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    'motion-v/nuxt',
    '@vueuse/nuxt',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxt/content',
  ],
  icon: {
    serverBundle: {
      collections: ['ph', 'skill-icons']
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 4,
        }
      }
    }
  },
  robots: {
    blockNonSeoBots: true
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Josh Briley',
      url: process.env.NUXT_SITE_URL,
      image: `${process.env.NUXT_SITE_URL}/images/josh-mug-shot.jpg`,
      sameAs: [
        'https://www.linkedin.com/in/somecallmejosh/',
        'https://x.com/joshuabriley',
        'https://github.com/somecallmejosh'
      ]
    })
  },
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-2Z540WCTFV'
      }
    }
  },
  site: {
    url: process.env.NUXT_SITE_URL,
    name: process.env.NUXT_SITE_NAME,
    trailingSlash: true
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // https://stackoverflow.com/questions/74902697/error-the-request-url-is-outside-of-vite-serving-allow-list-after-git-init
      fs: {
        allow: [
          '/Users/joshuabriley/Documents/personal/nuxt-apps/josh-dev-blog',
        ],
      },
    },
  },
})
