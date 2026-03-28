<script setup lang="ts">
import {
  SECTIONS,
  TOTAL_ITEMS,
  RATING_OPTIONS,
  STATUS_BADGE,
  STATUS_BAR,
  STATUS_LABEL,
  TOTAL_STATUS_CARD,
  TOTAL_STATUS_LABEL,
  TOTAL_STATUS_BAR,
  RATING_BTN_ACTIVE,
  RATING_BTN_ICON_ACTIVE,
  VALID_PARAM_RE,
  decodeRatings,
  emptyRatings,
  encodeRatings,
  useScorecard,
  type Rating,
} from '~/composables/useScorecard'

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

useSeoMeta({
  title: 'Design System Scorecard | Josh Briley',
  description: 'A self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process.',
})

// ─── State ───────────────────────────────────────────────────────────────────

const ratings = reactive<Record<string, Rating | null>>(emptyRatings())

function setRating(itemId: string, value: Rating) {
  ratings[itemId] = value
}

function resetAll() {
  for (const key in ratings) {
    ratings[key] = null
  }
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

const {
  answeredCount,
  allAnswered,
  sectionScore,
  sectionPercent,
  sectionStatus,
  totalScore,
  totalPercent,
  totalStatus,
  weakestSection,
} = useScorecard(ratings)

// ─── Pre-fill from URL param (retake flow) ────────────────────────────────────

const route = useRoute()

watch(() => route.query.r, (param) => {
  if (typeof param === 'string' && VALID_PARAM_RE.test(param)) {
    const decoded = decodeRatings(param)
    for (const key in decoded) {
      ratings[key] = decoded[key]
    }
  }
}, { immediate: true })

// ─── Results interstitial ─────────────────────────────────────────────────────

const showInterstitial = ref(false)

const resultsUrl = computed(() => `/scorecard/results/?r=${encodeRatings(ratings)}`)

function openInterstitial() {
  showInterstitial.value = true
}

function cancelInterstitial() {
  showInterstitial.value = false
}
</script>

<template>
  <PageWrapper>
    <PageHero :content="{
      pill: 'Tools',
      pillIcon: 'ph:presentation-chart',
      title: 'Design System Scorecard',
      description: 'An interactive self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process.'
    }" />

    <div class="space-y-6">
      <!-- Rating legend + progress -->
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
        <div class="flex flex-wrap gap-3 flex-1">
          <div class="flex items-center gap-1.5">
            <Icon name="ph:x-circle" size="1.1rem" class="text-red-400" aria-hidden="true" />
            <span><strong>None:</strong> not addressed</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="ph:minus-circle" size="1.1rem" class="text-amber-400" aria-hidden="true" />
            <span><strong>Partial:</strong> partially in place</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="ph:check-circle" size="1.1rem" class="text-emerald-500" aria-hidden="true" />
            <span><strong>Done:</strong> working well</span>
          </div>
        </div>
        <div class="flex items-center gap-3 shrink-0 justify-between">
          <span class="tabular-nums">{{ answeredCount }}/{{ TOTAL_ITEMS }}</span>
          <div class="w-24 h-1.5 bg-neutral-200 rounded-full overflow-hidden flex-1">
            <div class="h-full bg-neutral-700 rounded-full transition-all duration-300"
              :style="{ width: `${Math.round((answeredCount / TOTAL_ITEMS) * 100)}%` }" />
          </div>
          <button type="button" :disabled="answeredCount === 0" aria-label="Reset all ratings" @click="resetAll"
            class="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed not-prose no-underline border font-medium rounded-full px-4 py-0.5 justify-center hover:gap-2 disabled:hover:gap-1 border-neutral-900 hover:bg-neutral-100 focus:ring-blue-400 flex items-center gap-1 transition-all">
            <Icon name="ph:arrow-counter-clockwise" size="1rem" />
            Reset
          </button>
        </div>
      </div>

      <!-- Two-column layout -->
      <div class="2xl:grid 2xl:grid-cols-[1fr_400px] 2xl:items-start 2xl:gap-6">

        <!-- Left: section cards -->
        <div class="space-y-4">
          <section v-for="(section, si) in SECTIONS" :key="section.id" :aria-labelledby="`title-${section.id}`"
            class="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
            <!-- Section header -->
            <div class="flex items-center justify-between gap-4 px-5 py-4 border-b border-neutral-100">
              <div class="flex items-center gap-3">
                <span class="font-medium font-mono tabular-nums" aria-hidden="true">
                  {{ String(si + 1).padStart(2, '0') }}
                </span>
                <h2 :id="`title-${section.id}`" class="text-base font-medium">
                  {{ section.title }}
                </h2>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="tabular-nums" aria-hidden="true">
                  <span class="font-medium">{{ sectionScore(section) }}</span>/{{ section.max }}
                </span>
                <span class="sr-only">Score: {{ sectionScore(section) }} out of {{ section.max }}</span>
                <!-- aria-live container must always exist for announcements to fire -->
                <div aria-live="polite" aria-atomic="true">
                  <Transition name="badge">
                    <span v-if="sectionStatus(section)"
                      class="px-2 py-0.5 rounded-full border font-medium animate-entry"
                      :class="STATUS_BADGE[sectionStatus(section)!]">
                      {{ STATUS_LABEL[sectionStatus(section)!] }}
                    </span>
                  </Transition>
                </div>
              </div>
            </div>
            <!-- Items -->
            <ul role="list" class="divide-y divide-neutral-50">
              <li v-for="item in section.items" :key="item.id"
                class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-5 py-4">
                <p class="flex-1">{{ item.label }}</p>
                <!-- Rating toggle -->
                <div role="group" :aria-label="`Rating for: ${item.label}`"
                  class="flex shrink-0 rounded-lg border border-neutral-200">
                  <button v-for="opt in RATING_OPTIONS" :key="opt.value" type="button"
                    :aria-pressed="ratings[item.id] === opt.value" :title="opt.title"
                    @click="setRating(item.id, opt.value)"
                    class="relative flex flex-1 items-center gap-0.5 pr-2 pl-1 lg:gap-1.5 lg:pl-2 lg:pr-3 py-1.5 text-sm lg:text-base font-medium border-r last:border-r-0 border-neutral-200 transition-colors duration-150 cursor-pointer first:rounded-l-[7px] last:rounded-r-[7px] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-1 justify-center"
                    :class="ratings[item.id] === opt.value
                      ? RATING_BTN_ACTIVE[opt.value]
                      : 'bg-white hover:bg-neutral-50 hover:'">
                    <Icon :name="opt.icon" size="1rem" aria-hidden="true" :class="ratings[item.id] === opt.value
                      ? RATING_BTN_ICON_ACTIVE[opt.value]
                      : 'text-neutral-300'" />
                    <span>{{ opt.label }}</span>
                  </button>
                </div>
              </li>
            </ul>
            <!-- Section score bar -->
            <div class="px-5 py-3 bg-neutral-50 border-t border-neutral-100">
              <div class="h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500"
                  :class="STATUS_BAR[sectionStatus(section)!] ?? 'bg-neutral-400'"
                  :style="{ width: `${sectionPercent(section)}%` }" />
              </div>
            </div>
          </section>
        </div>

        <!-- Right: score card -->
        <div class="mt-4 2xl:mt-0 2xl:sticky 2xl:top-6 space-y-4">
          <div class="rounded-2xl border-2 p-6 space-y-5 transition-colors duration-500"
            :class="totalStatus ? TOTAL_STATUS_CARD[totalStatus] : 'border-neutral-200 bg-neutral-50'">
            <div>
              <p class="font-medium mb-1">Total score</p>
              <div class="flex items-baseline gap-2">
                <span class="text-5xl" style="font-family: 'DM Serif Text', serif" aria-hidden="true">
                  {{ totalScore }}
                </span>
                <span class="text-lg" aria-hidden="true">/64</span>
                <span class="sr-only">Total score: {{ totalScore }} out of 64</span>
              </div>
              <!-- aria-live container must always exist for announcements to fire -->
              <div aria-live="polite" aria-atomic="true" class="mt-2 min-h-[2rem]">
                <Transition name="badge">
                  <span v-if="totalStatus"
                    class="inline-block px-3 py-1 rounded-full border font-medium text-sm animate-entry bg-white"
                    :class="STATUS_BADGE[totalStatus]">
                    {{ TOTAL_STATUS_LABEL[totalStatus] }}
                  </span>
                </Transition>
              </div>
            </div>
            <!-- Total progress bar -->
            <div>
              <div class="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500"
                  :class="totalStatus ? TOTAL_STATUS_BAR[totalStatus] : 'bg-neutral-400'"
                  :style="{ width: `${totalPercent}%` }" />
              </div>
            </div>
            <!-- Per-section breakdown -->
            <ul class="space-y-2 divide-y divide-neutral-200" role="list">
              <li v-for="section in SECTIONS" :key="section.id" class="flex flex-col gap-1 pb-1">
                <span class="text-sm font-medium leading-snug">{{ section.title }}</span>
                <div class="flex items-center gap-2">
                  <span class="tabular-nums text-sm">
                    <span class="sr-only">Score: </span><span class="font-medium text-neutral-800">{{
                      sectionScore(section) }}</span>/{{ section.max }} pts
                  </span>
                  <span v-if="sectionStatus(section)"
                    class="px-2 py-0.5 rounded-full border text-xs font-medium shrink-0 animate-entry ml-auto"
                    :class="STATUS_BADGE[sectionStatus(section)!]">
                    {{ STATUS_LABEL[sectionStatus(section)!] }}
                  </span>
                  <span v-else class="text-xs tabular-nums whitespace-nowrap">
                    {{section.items.filter(i => ratings[i.id] !== null).length}}/{{ section.items.length }} answered
                  </span>
                </div>
              </li>
            </ul>

            <!-- Guidance + CTA once complete -->
            <!-- aria-live container must always exist for announcements to fire -->
            <div aria-live="polite" aria-atomic="true">
              <Transition name="badge">
                <div v-if="allAnswered" class="animate-entry border-t border-neutral-200/60 pt-4 space-y-4">
                  <div v-if="totalStatus !== 'healthy'" class="space-y-4">
                    <p>
                      <strong>Start here.</strong> Your lowest-scoring area is your highest-leverage fix.
                      In your case, that's <strong>{{ weakestSection.title }}</strong>.
                      That's where you'll see the fastest improvement.
                    </p>

                    <ButtonLink to="" type="button"
                      class="cursor-pointer not-prose no-underline border font-medium rounded-full px-5 py-1.5 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors flex items-center gap-1.5 w-full justify-center"
                      @click.prevent="openInterstitial">
                      See your recommendations
                    </ButtonLink>
                  </div>
                  <div v-else class="space-y-4">
                    <p>
                      <strong>Excellent work.</strong> Your design system is performing well across every dimension. Keep it up.
                    </p>
                    <div class="not-prose">
                      <ButtonLink variant="inverse" @click.prevent="resetAll" to="" replace class="cursor-pointer">
                        <Icon name="ph:arrow-counter-clockwise" size="1rem" aria-hidden="true" />
                        Retake the assessment
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Results interstitial -->
    <Teleport to="body">
      <ScorecardResultsInterstitial v-if="showInterstitial" :results-url="resultsUrl" @cancel="cancelInterstitial" />
    </Teleport>

  </PageWrapper>
</template>

<style scoped>
.badge-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.badge-enter-from {
  opacity: 0;
  transform: scale(0.85);
}
</style>
