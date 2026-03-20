export async function useContentDetail(collection: string) {
  const route = useRoute()
  const slug = route.params.slug as string
  const path = collectionPath(collection)
  const siteUrl = useRuntimeConfig().public.siteUrl

  // Destructure synchronously so useSeoMeta can reference the ref before we await
  const asyncData = useAsyncData(`${path}-${slug}`, () =>
    queryCollection(collection as any)
      .where('slug', '=', slug)
      .first(),
  )
  const { data: post } = asyncData

  const ogImage = computed(() => {
    const img = (post.value as any)?.image
    if (!img) return undefined
    return img.startsWith('http') ? img : `${siteUrl}${img}`
  })

  useSeoMeta({
    title: computed(() => (post.value as any)?.title),
    ogTitle: computed(() => (post.value as any)?.title),
    description: computed(() => (post.value as any)?.description),
    ogDescription: computed(() => (post.value as any)?.description),
    ogImage,
  })

  await asyncData

  return { post, slug }
}
