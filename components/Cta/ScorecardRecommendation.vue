<script setup lang="ts">
interface ServiceRecommendation {
  type: 'audit' | 'workflow'
  label: string
  why: string
  price: string
  link: string
}

type RecommendationPayload = ServiceRecommendation | { type: 'healthy' } | null

const props = defineProps<{
  allAnswered: boolean
  recommendation: RecommendationPayload
  shareUrl?: string
}>()

const { copy, copied } = useClipboard({
  source: computed(() => props.shareUrl || 'https://joshbriley.com/scorecard/'),
})

const CARD_STYLE: Record<string, string> = {
  audit: 'border-blue-200 bg-blue-50/40',
  workflow: 'border-blue-200 bg-blue-50/40',
  healthy: 'border-emerald-200 bg-emerald-50/40',
}
</script>

<template>
  <div aria-live="polite" aria-atomic="true">
    <Transition name="recommendation">
      <div v-if="allAnswered && recommendation" :key="recommendation.type"
        class="rounded-2xl border-2 p-6 space-y-5 animate-entry" :class="CARD_STYLE[recommendation.type]">
        <!-- Service recommendation -->
        <template v-if="recommendation.type !== 'healthy'">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div class="prose">
              <Pill pill="Recommendation" pill-icon="ph:presentation-chart" />
              <h2 class="mt-2">{{ (recommendation as ServiceRecommendation).label }}</h2>
              <p>
                {{ (recommendation as ServiceRecommendation).why }}
              </p>
              <ButtonLink :to="(recommendation as ServiceRecommendation).link">
                {{ (recommendation as ServiceRecommendation).label }}
              </ButtonLink>
            </div>
          </div>
        </template>

        <!-- Healthy / congratulatory -->
        <template v-else>
          <div class="prose">
            <h2 class="mt-0">Your system is in good shape.</h2>
            <p>
              Your scores across all five dimensions suggest a system that's working.
              Keep using this scorecard to stay honest as your system evolves —
              and if you know a team that could benefit, feel free to share it.
            </p>
          </div>
          <button type="button"
            class="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            @click="copy()">
            <Icon :name="copied ? 'ph:check' : 'ph:link'" size="1rem" aria-hidden="true" />
            <span>{{ copied ? 'Link copied!' : 'Copy link to this scorecard' }}</span>
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.recommendation-enter-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.recommendation-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.price {
  font-family: 'DM Serif Text', serif;
}
</style>
