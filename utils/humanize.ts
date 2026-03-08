const acronyms: Record<string, string> = {
  html: 'HTML',
  css: 'CSS',
  js: 'JS',
  api: 'API',
  url: 'URL',
  cli: 'CLI',
  sql: 'SQL',
  aws: 'AWS',
  npm: 'NPM',
}

export function humanize(str: string): string {
  if (!str) return ''
  return str
    .replace(/[_-]+/g, ' ')
    .split(' ')
    .map((word) => {
      const lower = word.toLowerCase()
      return acronyms[lower] ?? word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
    .trim()
}
