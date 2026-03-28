<script setup lang="ts">
useSeoMeta({
  title: 'Design-to-Code Workflow | Josh Briley',
  description: "Stop losing time every sprint to design-to-code friction. Fix the gaps between design and development so your team stops rebuilding, rechecking, and second-guessing UI decisions.",
})
</script>

<template>
  <PageWrapper>
    <Breadcrumbs class="mb-0"
      :items="[{ label: 'Services', to: '/services/' }, { label: 'Design-to-Code Workflow' }]" />

    <PageHero :content="{
      pill: 'Design-to-Code Workflow',
      pillIcon: 'ph:arrow-u-up-right',
      title: 'Stop losing time every sprint to design-to-code friction',
      description: 'Fix the gaps between design and development so your team stops rebuilding, rechecking, and second-guessing UI decisions. If designers and developers are having the same conversations over and over, the problem isn\'t the people — it\'s the process.'
    }">
      <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
        Book an intro call
      </ButtonLink>
    </PageHero>

    <SplitContent>
      <template #primary>
        <section class="prose">
          <h2>This is for you if:</h2>
          <ul class="not-prose space-y-3">
            <li v-for="item in [
              'Figma-to-code handoff is a constant source of friction',
              'Designs don\'t match what gets built',
              'Tokens exist, but aren\'t used consistently',
              'Designers and developers are out of sync',
              'The same UI questions come up every sprint',
            ]" :key="item" class="flex items-start gap-3">
              <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <p class="font-semibold">Most teams start here.</p>
        </section>
      </template>
      <template #secondary>
        <Callout>
          <p><strong>Most teams try to fix handoff problems with more detail.</strong></p>
          <p>More annotations. More specs. More comments. That doesn't solve the problem.</p>
          <p>Because the issue isn't missing information; it's a lack of a shared workflow. Without that, designers
            prepare things differently, developers interpret things differently, and every handoff becomes a
            negotiation.
            That cost shows up every sprint.</p>
        </Callout>
      </template>
    </SplitContent>

    <section class="space-y-6">
      <div class="prose">
        <h2>At the end of this engagement, you'll have:</h2>
      </div>
      <ul class="not-prose grid lg:grid-cols-2 gap-3 list-none font-medium">
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A clear view of where your current
          workflow breaks down</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A custom design-to-code workflow
          tailored to your team</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">Defined expectations for designers
          and developers</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A process your team can follow
          sprint after sprint</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">A shared understanding of what
          "done" looks like</li>
        <li class="p-3 bg-neutral-50 border-l-4 border-neutral-200 rounded-lg">
          <p>A live implementation session so your team can apply the workflow immediately.</p>
        </li>
      </ul>
    </section>

    <SplitContent>
      <template #primary>
        <h2>What's included</h2>
        <ul class="not-prose space-y-3">
          <li v-for="item in [
            'Audit of your current design-to-code process',
            'Figma file structure review (components, naming, tokens)',
            'Identification of breakdown points in handoff',
            'Code Connect setup and configuration (if applicable)',
            'Custom workflow guide tailored to your tools and team',
            '60-minute implementation session',
          ]" :key="item" class="flex items-start gap-3">
            <Icon name="ph:check-circle-fill" class="text-blue-200 size-5 shrink-0 mt-1.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </template>
      <template #secondary>
        <h2>How it works</h2>
        <ol>
          <li><strong>Kickoff</strong> — You walk me through your current workflow, tools, and pain points.</li>
          <li><strong>Audit</strong> — I review your Figma files, components, and handoff artifacts to identify where
            things break down.</li>
          <li><strong>Workflow guide</strong> — You get a clear, written workflow your team can follow immediately.</li>
          <li><strong>Implementation session</strong> — We walk through it together so your team can start using it
            right away.</li>
        </ol>
      </template>
    </SplitContent>

    <div class="grid xl:grid-cols-3 gap-6 not-prose py-12 border-y border-neutral-200">
      <h2 class="text-3xl text-balance">Handoff friction is one of the most expensive invisible costs in product
        development.</h2>
      <p class="text-pretty">It doesn't show up as a single problem. It shows up every sprint: duplicated work,
        mismatched UI, unnecessary conversations.</p>
      <p class="text-pretty"><strong>Fixing the workflow once removes a recurring drain on your team's time</strong>,
        making every future sprint a little faster.</p>
    </div>

    <SplitContent>
      <template #primary>
        <section class="not-prose bg-neutral-50 border-l-4 border-neutral-200 rounded-lg p-6 lg:p-8 space-y-3">
          <small class="font-semibold">Starting at $2,500</small>
          <h2 class="text-2xl lg:text-3xl text-balance mt-2">Design-to-code workflow pricing</h2>
          <p class="text-pretty">Most teams lose more than this in a single sprint to rework and
            misalignment. Fixing the workflow once is significantly cheaper than continuing to absorb that cost.</p>
        </section>
      </template>

      <template #secondary>
        <section class="space-y-6">
          <div class="prose">
            <h2>Where this fits</h2>
            <p>Most teams pair the workflow fix with deeper system work. From there, we:</p>
          </div>
          <ul class="not-prose space-y-2 divide-y divide-neutral-200">
            <li class="pb-2">
              <div class="prose xl:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Find what's broken first</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/audit/">Design System
                  Audit.</NuxtLink>
              </div>
            </li>
            <li class="pb-2">
              <div class="prose lg:flex gap-2 items-baseline">
                <p class="font-semibold mb-0">Fix the component foundation</p>
                <span class="hidden lg:inline-flex">
                  <Icon name="ph:arrow-right" size="0.9rem" />
                </span>
                <NuxtLink class="underline hover:no-underline lg:ml-auto" to="/services/starter/">Component Library
                  Starter.</NuxtLink>
              </div>
            </li>
          </ul>
        </section>
      </template>
    </SplitContent>

    <TestimonialList class="grid gap-6 lg:grid-cols-2" />

    <Callout>
      <h2>If your team is stuck in the same handoff problems every sprint, it's time to fix the process.</h2>
      <p>Book a short intro call. We'll look at your current workflow and identify where things are breaking down.</p>
      <div class="flex flex-col lg:block">
        <ButtonLink to="https://calendly.com/josh-thebrileys/30min/" target="_blank" rel="nofollow">
          Book an intro call
        </ButtonLink>
      </div>
    </Callout>

  </PageWrapper>
</template>
