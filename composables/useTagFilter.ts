export async function useTagFilter(collection: string) {
  const route = useRoute()
  const slug = route.params.slug as string

  const allPosts = (await queryCollection(collection as any)
    .order('publishedAt', 'DESC')
    .all()).filter((post: any) => Array.isArray(post.tags) && post.tags.includes(slug))

  onMounted(() => {
    if (!allPosts || allPosts.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
        message: 'This category does not exist.',
      })
    }
  })

  return { allPosts, slug, postCount: allPosts.length }
}
