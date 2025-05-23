export function humanize(str) {
  if (!str) return ''
  return str
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()
}
