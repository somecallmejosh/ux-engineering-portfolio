<script setup lang="ts">
useSeoMeta({
  title: 'Component gallery',
  robots: 'noindex, nofollow',
})

const mockCard = {
  title: 'Example card title for a blog post',
  description: 'A short description of this content item, shown below the title and kept to two lines.',
  slug: 'example-slug',
}

const mockCardWithHeadline = {
  title: 'Example card with a headline pill',
  description: 'When a headline prop is provided, a Pill badge renders above the card title.',
  slug: 'example-slug-pill',
  headline: 'Blog',
}

const mockTags = ['accessibility', 'css', 'design-systems', 'nuxt', 'vue']

const mockBreadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog/' },
  { label: 'Current page' },
]
</script>

<template>
  <PageWrapper>
    <section aria-labelledby="page-header">
      <PageHeader pill="Internal" pill-icon="ph:paint-brush">
        Component gallery
      </PageHeader>
      <p class="prose  mt-4">
        Internal reference page. Not indexed. Shows every component in its known states.
      </p>
    </section>

    <!-- ButtonLink -->
    <section aria-labelledby="section-buttonlink" class="space-y-4">
      <h2 id="section-buttonlink" class="font-mono    ">ButtonLink</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <ButtonLink to="/blog/">Base variant</ButtonLink>
        <ButtonLink to="/blog/" variant="inverse">Inverse variant</ButtonLink>
      </div>
    </section>

    <!-- Pill -->
    <section aria-labelledby="section-pill" class="space-y-4">
      <h2 id="section-pill" class="font-mono    ">Pill</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Pill pill="Label only" />
        <Pill pill="Blog" pill-icon="ph:article-ny-times" />
        <Pill pill="Projects" pill-icon="ph:projector-screen-chart" />
        <Pill pill="Dev notes" pill-icon="ph:notepad" />
        <Pill pill="Experiments" pill-icon="ph:microscope" />
      </div>
    </section>

    <!-- Breadcrumbs -->
    <section aria-labelledby="section-breadcrumbs" class="space-y-4">
      <h2 id="section-breadcrumbs" class="font-mono    ">Breadcrumbs</h2>
      <Breadcrumbs :items="mockBreadcrumbs" />
    </section>

    <!-- PageHeader -->
    <section aria-labelledby="section-pageheader" class="space-y-6">
      <h2 id="section-pageheader" class="font-mono    ">PageHeader</h2>
      <div class="space-y-8 border border-neutral-100 rounded-lg p-6">
        <div>
          <p class="  mb-3">Plain</p>
          <PageHeader>Page title with no pill</PageHeader>
        </div>
        <hr class="border-neutral-100" />
        <div>
          <p class="  mb-3">With pill + icon</p>
          <PageHeader pill="Blog" pill-icon="ph:article-ny-times">Page title with a pill badge</PageHeader>
        </div>
        <hr class="border-neutral-100" />
        <div>
          <p class="  mb-3">With published date</p>
          <PageHeader published-at="2026-01-15T00:00:00.000Z">Page title with a published date</PageHeader>
        </div>
      </div>
    </section>

    <!-- Callout -->
    <section aria-labelledby="section-callout" class="space-y-4">
      <h2 id="section-callout" class="font-mono    ">Callout</h2>
      <Callout>
        <h3 class="text-lg">Callout heading</h3>
        <p>Use this for prominent in-page CTAs or highlighted announcements. Slot accepts any prose content.</p>
        <ButtonLink to="/blog/">Follow the link</ButtonLink>
      </Callout>
    </section>

    <!-- Tooltip -->
    <section aria-labelledby="section-tooltip" class="space-y-4">
      <h2 id="section-tooltip" class="font-mono    ">Tooltip</h2>
      <p>Hover or focus the icon buttons below. Tooltip appears above the trigger.</p>
      <div class="flex gap-6 items-center">
        <Tooltip id="design-tip-1" text="Figma">
          <Icon name="skill-icons:figma-light" size="2em" aria-hidden="true" />
        </Tooltip>
        <Tooltip id="design-tip-2" text="Vue.js">
          <Icon name="skill-icons:vuejs-light" size="2em" aria-hidden="true" />
        </Tooltip>
        <Tooltip id="design-tip-3" text="Tailwind CSS">
          <Icon name="skill-icons:tailwindcss-light" size="2em" aria-hidden="true" />
        </Tooltip>
      </div>
    </section>

    <!-- Skills -->
    <section aria-labelledby="section-skills" class="space-y-4">
      <h2 id="section-skills" class="font-mono    ">Skills</h2>
      <Skills />
    </section>

    <!-- CardListItem -->
    <section aria-labelledby="section-card" class="space-y-4">
      <h2 id="section-card" class="font-mono    ">CardListItem</h2>
      <ul class="grid md:grid-cols-2 gap-12">
        <CardListItem :item="mockCard" to="/blog/" />
        <CardListItem :item="mockCardWithHeadline" to="/blog/" />
      </ul>
    </section>

    <!-- TagLinks -->
    <section aria-labelledby="section-taglinks" class="space-y-4">
      <h2 id="section-taglinks" class="font-mono    ">TagLinks</h2>
      <TagLinks title="Tags" tag="blog" :collection="mockTags" />
    </section>

  </PageWrapper>
</template>
