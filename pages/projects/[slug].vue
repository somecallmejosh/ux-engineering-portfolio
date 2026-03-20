<script setup>
const { post } = await useContentDetail('projects')
</script>

<template>
  <PageWrapper v-if="post">
    <Breadcrumbs :items="[{ label: 'Projects', to: '/projects/' }, { label: post.title }]" />
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:justify-between">
      <div class="prose">
        <PageHeader class="" pill="Project" pillIcon="ph:projector-screen-chart">{{ post.title }}</PageHeader>
        <AnimateImage :src="post.image" :alt="post.meta.image_alt" :scaleY="0.75" />

        <article class="prose">
          <TableOfContents :links="post.body.toc.links" />
          <ContentRenderer :value="post" />
        </article>
      </div>
      <aside v-if="post.businessUrl" class="lg:flex-1 shrink-0">
        <div class="lg:sticky lg:top-16">
          <div class="flex items-center gap-2 mb-6 lg:mt-20">
            <span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"></span>
            <CardHeader>{{ post.businessName }}</CardHeader>
            <span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"></span>
          </div>
          <div style="overflow: scroll">
            <div>
              <div
                class="relative mx-auto border-neutral-200 dark:border-neutral-200 bg-neutral-200 border-[14px] rounded-[2.5rem] h-[682px]  w-full">
                <div
                  class="h-[32px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[72px] rounded-s-lg">
                </div>
                <div
                  class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[124px] rounded-s-lg">
                </div>
                <div
                  class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[178px] rounded-s-lg">
                </div>
                <div
                  class="h-[64px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -end-[17px] top-[142px] rounded-e-lg">
                </div>
                <div class="rounded-[2rem] overflow-hidden h-[426px] h-[654px] bg-white dark:bg-neutral-200">
                  <iframe loading="lazy" :title="`${post.businessName} website`" class="w-full h-full "
                    :src="post.businessUrl" frameborder="0"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-6">
            <span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"></span>
            <a :href="post.businessUrl" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1  font-medium hover:underline block shrink-0">
              <span>Visit {{ post.businessName }}</span>
              <Icon name="ph:arrow-square-out" class="size-4" />
            </a>
            <span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"></span>
          </div>
        </div>
      </aside>
    </div>
  </PageWrapper>
</template>
