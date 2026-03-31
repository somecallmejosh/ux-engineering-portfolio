<script setup lang="ts">
import {
  SECTIONS,
  TOTAL_MAX,
  VALID_PARAM_RE,
  STATUS_BADGE,
  STATUS_BAR,
  STATUS_LABEL,
  TOTAL_STATUS_CARD,
  TOTAL_STATUS_LABEL,
  TOTAL_STATUS_BAR,
  encodeRatings,
  decodeRatings,
  emptyRatings,
  useScorecard,
  type Rating,
  type ScorecardMeta,
} from '~/composables/useScorecard'

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

useSeoMeta({
  title: 'Your Scorecard Results | Josh Briley',
  description: 'Your personalized design system scorecard results, with a recommendation based on your scores.',
})

// ─── Hydrate ratings from URL param ──────────────────────────────────────────

const route = useRoute()
const requestUrl = useRequestURL()

const rawParam = computed(() => {
  const q = route.query.r
  return typeof q === 'string' ? q : undefined
})

const isValidParam = computed(() => rawParam.value !== undefined && VALID_PARAM_RE.test(rawParam.value))

// Redirect to assessment if param is missing or invalid
if (!isValidParam.value) {
  await navigateTo('/scorecard/', { replace: true })
}

const ratings = reactive<Record<string, Rating | null>>(
  isValidParam.value ? decodeRatings(rawParam.value!) : emptyRatings()
)

// Re-hydrate if param changes (e.g. user edits URL)
watch(rawParam, (param) => {
  if (param && VALID_PARAM_RE.test(param)) {
    const decoded = decodeRatings(param)
    for (const key in decoded) {
      ratings[key] = decoded[key]
    }
  }
}, { immediate: false })

// ─── Scoring ─────────────────────────────────────────────────────────────────

const {
  sectionScore,
  sectionStatus,
  sectionPercent,
  totalScore,
  totalPercent,
  totalStatus,
  weakestSection,
  recommendation,
  chartSections,
} = useScorecard(ratings)

// ─── Scorecard metadata for form submission ───────────────────────────────────

const scorecardMeta = computed((): ScorecardMeta => ({
  design_system_recommendation:
    recommendation.value && recommendation.value.type !== 'healthy'
      ? recommendation.value.label
      : recommendation.value?.type === 'healthy' ? 'Healthy — no service recommended' : '',
  design_system_label: totalStatus.value ? TOTAL_STATUS_LABEL[totalStatus.value] : '',
  design_system_score_total: totalScore.value,
  design_system_lowest_section: weakestSection.value.title,
  design_system_per_section_scores: SECTIONS.map(
    (s) => `${s.title}: ${sectionScore(s)}/${s.max}`
  ).join('; '),
}))

// ─── Share / retake ───────────────────────────────────────────────────────────

const { copy: copyShareUrl, copied: shareUrlCopied } = useClipboard({
  source: computed(() => requestUrl.href),
})

</script>

<template>
  <PageWrapper>
    <PageHero :content="{
      pill: 'Tools',
      pillIcon: 'ph:presentation-chart',
      title: 'Design System Scorecard',
      description: 'Your personalized results based on the five dimensions of a healthy design system.'
    }" />

    <div class="md:grid md:grid-cols-[1fr_400px] md:items-start md:gap-6">
      <!-- Left: Radar chart -->
      <div class="bg-white border border-neutral-200 rounded-2xl p-2 lg:p-6">
        <ScorecardRadarChart :sections="chartSections" :status="totalStatus" />
        <!-- Recommendation -->
        <CtaScorecardRecommendation :recommendation="recommendation" :scorecard-meta="scorecardMeta" />
      </div>

      <!-- Right: Score card + recommendation -->
      <div class="mt-4 md:mt-0 space-y-4">
        <!-- Score card -->
        <div class="rounded-2xl border-2 p-6 space-y-5 transition-colors duration-500"
          :class="totalStatus ? TOTAL_STATUS_CARD[totalStatus] : 'border-neutral-200 bg-neutral-50'">
          <div>
            <p class="font-medium mb-1">Total score</p>
            <div class="flex items-baseline gap-2">
              <span class="text-5xl" style="font-family: 'DM Serif Text', serif" aria-hidden="true">
                {{ totalScore }}
              </span>
              <span class="text-lg" aria-hidden="true">/{{ TOTAL_MAX }}</span>
              <span class="sr-only">Total score: {{ totalScore }} out of {{ TOTAL_MAX }}</span>
            </div>
            <div class="mt-2 min-h-[2rem]">
              <span v-if="totalStatus" class="inline-block px-3 py-1 rounded-full border font-medium text-sm bg-white"
                :class="STATUS_BADGE[totalStatus]">
                {{ TOTAL_STATUS_LABEL[totalStatus] }}
              </span>
            </div>
          </div>

          <!-- Total progress bar -->
          <div class="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500"
              :class="totalStatus ? TOTAL_STATUS_BAR[totalStatus] : 'bg-neutral-400'"
              :style="{ width: `${totalPercent}%` }" />
          </div>

          <!-- Per-section breakdown -->
          <ul class="space-y-2 divide-y divide-neutral-200" role="list">
            <li v-for="section in SECTIONS" :key="section.id" class="flex flex-col gap-1 pb-1">
              <span class="text-sm font-medium leading-snug">{{ section.title }}</span>
              <div class="flex items-center gap-2">
                <span class="tabular-nums text-sm">
                  <span class="sr-only">Score: </span>
                  <span class="font-medium">{{ sectionScore(section) }}</span>/{{ section.max }} pts
                </span>
                <span v-if="sectionStatus(section)"
                  class="px-2 py-0.5 rounded-full border text-xs font-medium shrink-0 ml-auto"
                  :class="STATUS_BADGE[sectionStatus(section)!]">
                  {{ STATUS_LABEL[sectionStatus(section)!] }}
                </span>
              </div>
              <!-- Mini progress bar -->
              <div class="h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500"
                  :class="STATUS_BAR[sectionStatus(section)!] ?? 'bg-neutral-400'"
                  :style="{ width: `${sectionPercent(section)}%` }" />
              </div>
            </li>
          </ul>

          <!-- Start here guidance -->
          <p v-if="totalStatus && totalStatus !== 'healthy'" class="border-t border-neutral-200/60 pt-4 text-sm">
            <strong>Start here.</strong> Your lowest-scoring area is your highest-impact fix.
            In your case, that's <strong>{{ weakestSection.title }}</strong>.
            That's where you'll see the fastest improvement.
          </p>
          <p v-else-if="totalStatus === 'healthy'" class="border-t border-neutral-200/60 pt-4 text-sm">
            <strong>Excellent work.</strong> Your design system is performing well across every dimension. Keep it up.
          </p>

          <!-- Share + retake actions -->
          <div class="flex flex-col gap-3 border-t border-neutral-200/60 pt-4">
            <ButtonLink to="#" type="button" @click.prevent="copyShareUrl()">
              <Icon :name="shareUrlCopied ? 'ph:check' : 'ph:link'" size="1rem" aria-hidden="true" />
              <span>{{ shareUrlCopied ? 'Link copied' : 'Share these results' }}</span>
            </ButtonLink>
            <ButtonLink variant="inverse" to="/scorecard/" replace>
              <Icon name="ph:arrow-counter-clockwise" size="1rem" aria-hidden="true" />
              <span>Retake</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>

  </PageWrapper>
</template>
