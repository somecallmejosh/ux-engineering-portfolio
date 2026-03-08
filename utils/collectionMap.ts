export const COLLECTION_MAP: Record<string, string> = {
  blog: 'blog',
  projects: 'projects',
  dev_notes: 'dev-notes',
  experiments: 'experiments',
}

export function collectionPath(name: string): string {
  return COLLECTION_MAP[name] ?? name
}
