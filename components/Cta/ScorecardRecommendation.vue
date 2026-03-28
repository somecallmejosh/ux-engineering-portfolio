<script setup lang="ts">
import type { RecommendationPayload, ScorecardMeta, ServiceRecommendation } from '~/composables/useScorecard'

defineProps<{
  recommendation: RecommendationPayload
  scorecardMeta: ScorecardMeta
}>()

const CALENDLY_URL = 'https://calendly.com/josh-thebrileys/30min/'

// Tailwind class maps — no dynamic string concatenation (required for Tailwind 4)
const CARD_STYLE: Record<string, string> = {
  audit: 'border-blue-200 bg-blue-50/40',
  workflow: 'border-blue-200 bg-blue-50/40',
  healthy: 'border-emerald-200 bg-emerald-50/40',
}

</script>

<template>
  <div class="space-y-6">
    <div aria-live="polite" aria-atomic="true">
      <Transition name="recommendation">
        <div v-if="recommendation" :key="recommendation.type" class="rounded-2xl border-2 p-6 space-y-6 animate-entry"
          :class="CARD_STYLE[recommendation.type]">
          <!-- Service recommendation -->
          <template v-if="recommendation.type !== 'healthy'">
            <div class="prose">
              <Pill :pill="(recommendation as ServiceRecommendation).label" pill-icon="ph:presentation-chart" />
              <!-- Tagline -->
              <h2 class="mt-4 text-balance">
                {{ (recommendation as ServiceRecommendation).tagline }}
              </h2>
              <!-- Dynamic why copy -->
              <p>{{ (recommendation as ServiceRecommendation).why }}</p>
              <p v-if="recommendation"><strong>Recommendation</strong>: <NuxtLink
                  :to="(recommendation as ServiceRecommendation).link">{{ (recommendation as
                    ServiceRecommendation).label }}</NuxtLink>
              </p>
              <!-- Consequence bullets (workflow only) -->
              <template v-if="recommendation.type === 'workflow'">
                <h4>These patterns lead to:</h4>
                <ul class="not-prose grid grid-cols-3 gap-2 text-sm">
                  <li class="bg-white rounded-lg p-4">Rework on every sprint</li>
                  <li class="bg-white rounded-lg p-4">UI inconsistency that slips through review</li>
                  <li class="bg-white rounded-lg p-4">Repeated design and development conversations about the same
                    decisions</li>
                </ul>
              </template>
            </div>
            <!-- What's working + why this is the highest-leverage fix -->
            <div v-if="(recommendation as ServiceRecommendation).strongSections.length > 0"
              class="border-t border-blue-200/60 pt-5 space-y-3 prose">
              <h3>Why this is your most impactful fix</h3>
              <div class="space-y-1.5">
                <p class="text-sm">
                  <span class="font-medium">What's working:</span>
                  {{(recommendation as ServiceRecommendation)
                    .strongSections.map(s => `${s.title} (${s.score}/${s.max})`).join(', ')}}
                </p>
                <p class="text-sm">
                  <template v-if="recommendation.type === 'workflow'">
                    Fixing your workflow reduces friction without rebuilding anything. It's the fastest path to
                    improvement when the system structure is sound.
                  </template>
                  <template v-else>
                    Addressing these gaps with expert analysis gives you a prioritized roadmap, so you invest in the
                    right fixes, in the right order.
                  </template>
                </p>
              </div>
            </div>
            <!-- Dual CTAs -->
            <div class="flex flex-col gap-3 xl:flex-row border-t border-blue-200/60 pt-5">
              <div>
                <ButtonLink :to="CALENDLY_URL" target="_blank" rel="nofollow noopener noreferrer">
                  Book a 30-minute call
                </ButtonLink>
              </div>
              <div>
                <ButtonLink variant="inverse" :to="(recommendation as ServiceRecommendation).link">
                  See the service details
                </ButtonLink>
              </div>
            </div>
            <!-- Secondary recommendation -->
            <div v-if="(recommendation as ServiceRecommendation).secondaryRecommendation"
              class="border-t border-blue-200/60 pt-5 prose">
              <h2>Other sections show gaps too</h2>
              <p class="text-sm">
                Your
                <template
                  v-for="(name, i) in (recommendation as ServiceRecommendation).secondaryRecommendation!.sectionNames"
                  :key="name">
                  <strong>{{ name }}</strong><template
                    v-if="i < (recommendation as ServiceRecommendation).secondaryRecommendation!.sectionNames.length - 1">,
                  </template>
                </template>
                {{ (recommendation as ServiceRecommendation)
                  .secondaryRecommendation!.sectionNames.length === 1 ?
                  'score also shows' : 'scores also show' }} gaps.
                For a complete view of your system before making changes:
              </p>
              <ButtonLink :to="(recommendation as ServiceRecommendation).secondaryRecommendation!.link"
                variant="inverse">
                Start with a Design System Audit
              </ButtonLink>
            </div>
          </template>
          <!-- Healthy / congratulatory -->
          <template v-else>
            <div class="prose">
              <h2 class="mt-0">Your system is in good shape.</h2>
              <p>
                Your scores across all five dimensions suggest a system that's working.
                Keep using this scorecard to stay honest as your system evolves.
                If you know a team that could benefit, share it with them.
              </p>
            </div>
          </template>
        </div>
      </Transition>
    </div>
    <FormScorecard :scorecard-meta="scorecardMeta" />
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
</style>
