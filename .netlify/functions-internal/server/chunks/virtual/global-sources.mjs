const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v3:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "Parsing the following collections: "
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/blog"
            },
            {
                "loc": "/blog/tags"
            },
            {
                "loc": "/about"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/contact"
            },
            {
                "loc": "/projects"
            },
            {
                "loc": "/services"
            },
            {
                "loc": "/dev-notes"
            },
            {
                "loc": "/dev-notes/tags"
            },
            {
                "loc": "/experiments"
            },
            {
                "loc": "/testimonials"
            },
            {
                "loc": "/checklist"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/checklist/"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            "/checklist/",
            {
                "loc": "/checklist/"
            },
            {
                "loc": "/__nuxt_content/experiments/sql_dump"
            },
            {
                "loc": "/__nuxt_content/checklist/sql_dump"
            },
            {
                "loc": "/__nuxt_content/dev_notes/sql_dump"
            },
            {
                "loc": "/__nuxt_content/services/sql_dump"
            },
            {
                "loc": "/__nuxt_content/blog/sql_dump"
            },
            {
                "loc": "/__nuxt_content/projects/sql_dump"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
