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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/checklist/'],
    },
    routeRules: {
      '/blog/categories/**': { redirect: { to: '/blog/tags/**/', statusCode: 301 } },
      '/dev-notes/categories/**': { redirect: { to: '/dev-notes/tags/**/', statusCode: 301 } },
      '/checklist/': { sitemap: false },
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/styles.css'],
  runtimeConfig: {
    resendKey: process.env.RESEND_KEY,
    resendFrom: process.env.RESEND_FROM,
    public: {
      sqlPath: process.env.SQL_ALLOW_PATH,
      siteUrl: process.env.NUXT_SITE_URL ?? 'http://localhost:3000',
    },
  },
  image: {
    provider: 'none',
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
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
    // Keep non-SEO bots blocked, but ensure a valid group exists
    blockNonSeoBots: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    sitemap: `${process.env.NUXT_SITE_URL}/sitemap.xml`,
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
  linkChecker: {
    excludeLinks: ['^#'],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router'],
          }
        }
      }
    },
    server: {
      // https://stackoverflow.com/questions/74902697/error-the-request-url-is-outside-of-vite-serving-allow-list-after-git-init
      fs: {
        allow: [process.cwd()],
      },
    },
  },
})
