export async function useCollectionPagination(collection: string, page: number, perPage = 9) {
  const route = useRoute()
  const basePath = `/${collectionPath(collection)}/`
  const siteUrl = useRuntimeConfig().public.siteUrl

  // Redirect /page/1/ to the base path
  if (page === 1 && route.path.includes('/page/1')) {
    await navigateTo(basePath, { redirectCode: 301 })
  }

  // Validate page number
  if (!Number.isInteger(page) || page < 1) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  const asyncData = useAsyncData(
    `${collection}-page-${page}`,
    async () => {
      const [items, total] = await Promise.all([
        queryCollection(collection as any)
          .order('publishedAt', 'DESC')
          .limit(perPage)
          .skip((page - 1) * perPage)
          .all(),
        queryCollection(collection as any).count(),
      ])
      return { items, total }
    },
  )
  const { data } = asyncData

  // Compute pagination from reactive data (before await)
  const totalPages = computed(() => Math.ceil((data.value?.total ?? 0) / perPage))
  const items = computed(() => data.value?.items ?? [])

  function pageUrl(p: number): string {
    return p === 1 ? basePath : `${basePath}page/${p}/`
  }

  // SEO: rel prev/next (registered before await so SSR renders them)
  useHead({
    link: computed(() => {
      const links: { rel: string; href: string }[] = []
      if (page > 1) links.push({ rel: 'prev', href: `${siteUrl}${pageUrl(page - 1)}` })
      if (page < (totalPages.value ?? 0)) links.push({ rel: 'next', href: `${siteUrl}${pageUrl(page + 1)}` })
      return links
    }),
  })

  // Now await the data
  await asyncData

  // 404 if page exceeds total pages (but allow page 1 on empty collections)
  if (page > totalPages.value && page > 1) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }

  return {
    items: items.value,
    currentPage: page,
    totalPages: totalPages.value,
    basePath,
  }
}
