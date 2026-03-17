export async function useContentDetail(collection: string) {
  const route = useRoute()
  const slug = route.params.slug as string
  const path = collectionPath(collection)

  const { data: post } = await useAsyncData(`${path}-${slug}`, () =>
    queryCollection(collection as any).path(`/${path}/${slug}`).first()
  )

  const siteUrl = useRuntimeConfig().public.siteUrl
  const ogImage = computed(() => {
    const img = (post.value as any)?.image
    if (!img) return undefined
    return img.startsWith('http') ? img : `${siteUrl}${img}`
  })

  useSeoMeta({
    title: (post.value as any)?.title,
    ogTitle: (post.value as any)?.title,
    description: (post.value as any)?.description,
    ogDescription: (post.value as any)?.description,
    ogImage: ogImage.value,
  })

  return { post, slug }
}
