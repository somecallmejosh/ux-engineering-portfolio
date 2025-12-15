export type SearchDoc = {
  id: string
  collection: 'blog' | 'projects' | 'dev_notes' | 'experiments'
  slug: string
  title: string
  description: string
  tags?: string[]
  image?: string
  image_alt?: string
  route: string
}

function normalizeCollectionName(name: string) {
  if (name === 'dev_notes') return 'dev-notes'
  return name
}

async function fetchAllDocs(): Promise<SearchDoc[]> {
  const collections = ['blog', 'projects', 'dev_notes', 'experiments'] as const
  const results: SearchDoc[] = []
  for (const c of collections) {
    const posts = await queryCollection(c).all()
    for (const post of posts) {
      results.push({
        id: `${c}:${post.slug}`,
        collection: c,
        slug: post.slug,
        title: post.title,
        description: post.description,
        tags: post.tags,
        image: post.image,
        image_alt: post?.meta?.image_alt,
        route: `/${normalizeCollectionName(c)}/${post.slug}/`,
      })
    }
  }
  return results
}

function scoreDoc(doc: SearchDoc, q: string): number {
  const query = q.toLowerCase().trim()
  if (!query) return 0
  let score = 0
  const boost = {
    title: 3,
    description: 2,
    tags: 2,
    slug: 1,
  }
  const titleMatch = doc.title?.toLowerCase().includes(query)
  const descMatch = doc.description?.toLowerCase().includes(query)
  const slugMatch = doc.slug?.toLowerCase().includes(query)
  const tagsMatch = (doc.tags || []).some(t => t.toLowerCase().includes(query))
  if (titleMatch) score += boost.title
  if (descMatch) score += boost.description
  if (slugMatch) score += boost.slug
  if (tagsMatch) score += boost.tags
  return score
}

let indexCache: SearchDoc[] | null = null

export function useSearch() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const docs = ref<SearchDoc[]>(indexCache || [])

  const ensureIndex = async () => {
    if (docs.value.length) return
    loading.value = true
    try {
      const all = await fetchAllDocs()
      docs.value = all
      indexCache = all
    } catch (e: any) {
      error.value = e?.message || 'Failed to build search index'
    } finally {
      loading.value = false
    }
  }

  const search = async (q: string, limit = 10) => {
    await ensureIndex()
    const scored = docs.value
      .map(d => ({ d, s: scoreDoc(d, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)
      .map(x => x.d)
    return scored
  }

  return { loading, error, search }
}
