// One-time migration: replace Cloudinary image URLs in front-matter with local paths.
// Run: node scripts/update-image-frontmatter.mjs

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = new URL('..', import.meta.url).pathname

// Mapping of slug → local image path (extension determined by what was downloaded)
const BLOG_IMAGES = {
  'a-shift-to-precision-work': '/images/blog/a-shift-to-precision-work.webp',
  'amelie-poulain-ux-engineer': '/images/blog/amelie-poulain-ux-engineer.webp',
  'component-library-build-or-buy': '/images/blog/component-library-build-or-buy.png',
  'component-library-for-multi-framework-teams': '/images/blog/component-library-for-multi-framework-teams.png',
  'component-library-requirements': '/images/blog/component-library-requirements.png',
  'cross-functional-team-collaboration': '/images/blog/cross-functional-team-collaboration.webp',
  'design-system-audit': '/images/blog/design-system-audit.png',
  'design-system-tokens': '/images/blog/design-system-tokens.png',
  'design-systems-are-easy-until-you-ship-one': '/images/blog/design-systems-are-easy-until-you-ship-one.png',
  'design-systems-for-the-rest-of-us': '/images/blog/design-systems-for-the-rest-of-us.webp',
  'dwight-schrute-ux-engineer': '/images/blog/dwight-schrute-ux-engineer.webp',
  'figma-to-code-workflow': '/images/blog/figma-to-code-workflow.png',
  'forrest-gump-ux-engineer': '/images/blog/forrest-gump-ux-engineer.webp',
  'front-end-carpentry': '/images/blog/front-end-carpentry.webp',
  'how-to-assess-ux-engineering-outcomes': '/images/blog/how-to-assess-ux-engineering-outcomes.webp',
  'invisible-work': '/images/blog/invisible-work.webp',
  'making-accessibility-feel-less-like-a-buzzword': '/images/blog/making-accessibility-feel-less-like-a-buzzword.webp',
  'ron-swanson-ux-engineer': '/images/blog/ron-swanson-ux-engineer.webp',
  'student-mindset': '/images/blog/student-mindset.webp',
  'ted-lasso-ux-engineer': '/images/blog/ted-lasso-ux-engineer.webp',
  'the-ghosts-of-codes-past': '/images/blog/the-ghosts-of-codes-past.webp',
  'the-luckiest-guy-in-tech': '/images/blog/the-luckiest-guy-in-tech.webp',
  'the-reality-of-working-in-ui-ux-right-now': '/images/blog/the-reality-of-working-in-ui-ux-right-now.webp',
  'they-beat-the-care-out-of-me': '/images/blog/they-beat-the-care-out-of-me.webp',
  'twenty-years-of-front-end-mayhem': '/images/blog/twenty-years-of-front-end-mayhem.webp',
  'what-is-a-ux-engineer': '/images/blog/what-is-a-ux-engineer.webp',
}

const NOTES_IMAGES = {
  'accessibility-audit-cheatsheet': '/images/dev-notes/accessibility-audit-cheatsheet.png',
  'aria-pattern-cheatsheet': '/images/dev-notes/aria-pattern-cheatsheet.webp',
  'common-string-methods-i-use': '/images/dev-notes/common-string-methods-i-use.webp',
  'css-cheat-sheet': '/images/dev-notes/css-cheat-sheet.webp',
  'how-to-archive-multiple-github-repos': '/images/dev-notes/how-to-archive-multiple-github-repos.png',
  'javascript-cheat-sheet': '/images/dev-notes/javascript-cheat-sheet.webp',
  'javascript-dates': '/images/dev-notes/javascript-dates.webp',
  'netlify-nuxt-form-troubleshooting': '/images/dev-notes/netlify-nuxt-form-troubleshooting.webp',
  'stencil-cheat-sheet': '/images/dev-notes/stencil-cheat-sheet.webp',
}

function updateFile(filePath, imageMap) {
  const content = readFileSync(filePath, 'utf8')

  // Extract slug from front-matter
  const slugMatch = content.match(/^slug:\s*['"]?([^'"\n]+)['"]?\s*$/m)
  if (!slugMatch) {
    console.log(`  SKIP  ${filePath} (no slug found)`)
    return
  }
  const slug = slugMatch[1].trim()

  const localPath = imageMap[slug]
  if (!localPath) {
    console.log(`  SKIP  ${filePath} (slug "${slug}" not in map)`)
    return
  }

  // Replace the image: line — handles both quoted and unquoted values
  const updated = content.replace(
    /^image:\s*['"]?https:\/\/res\.cloudinary\.com\/[^\n'"]+['"]?\s*$/m,
    `image: "${localPath}"`
  )

  if (updated === content) {
    // Image may already be local, or different cloudinary domain
    if (content.includes(localPath)) {
      console.log(`  SKIP  ${filePath} (already using local path)`)
    } else {
      console.log(`  WARN  ${filePath} (image line not matched for slug "${slug}")`)
    }
    return
  }

  writeFileSync(filePath, updated, 'utf8')
  console.log(`  OK    ${filePath}`)
}

function processDir(dir, imageMap) {
  const files = readdirSync(dir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    updateFile(join(dir, file), imageMap)
  }
}

const PROJECTS_IMAGES = {
  'americas-test-kitchen': '/images/projects/americas-test-kitchen.webp',
  'berxi-insurance': '/images/projects/berxi-insurance.webp',
  'ivfcryo': '/images/projects/ivfcryo.webp',
}

console.log('=== Updating blog front-matter ===')
processDir(join(ROOT, 'content/blog'), BLOG_IMAGES)

console.log('\n=== Updating dev-notes front-matter ===')
processDir(join(ROOT, 'content/dev-notes'), NOTES_IMAGES)

console.log('\n=== Updating projects front-matter ===')
processDir(join(ROOT, 'content/projects'), PROJECTS_IMAGES)

console.log('\nDone.')
