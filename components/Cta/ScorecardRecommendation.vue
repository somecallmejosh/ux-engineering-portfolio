<script setup lang="ts">
import type { RecommendationPayload, ServiceRecommendation } from '~/composables/useScorecard'

defineProps<{
  recommendation: RecommendationPayload
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
  <div aria-live="polite" aria-atomic="true">
    <Transition name="recommendation">
      <div v-if="recommendation" :key="recommendation.type" class="rounded-2xl border-2 p-6 space-y-6 animate-entry"
        :class="CARD_STYLE[recommendation.type]">
        <!-- Service recommendation -->
        <template v-if="recommendation.type !== 'healthy'">
          <div class="prose">
            <Pill pill="Recommendation" pill-icon="ph:presentation-chart" />

            <!-- Tagline -->
            <p class="mt-3 mb-0 text-neutral-500 text-sm not-prose">
              {{ (recommendation as ServiceRecommendation).tagline }}
            </p>

            <!-- Service label -->
            <h2 class="mt-2">{{ (recommendation as ServiceRecommendation).label }}</h2>

            <!-- Dynamic why copy -->
            <p>{{ (recommendation as ServiceRecommendation).why }}</p>

            <!-- Consequence bullets (workflow only) -->
            <template v-if="recommendation.type === 'workflow'">
              <p class="mb-1">That leads to:</p>
              <ul>
                <li>Rework on every sprint</li>
                <li>UI inconsistency that slips through review</li>
                <li>Repeated design and dev conversations about the same decisions</li>
              </ul>
            </template>
          </div>

          <!-- What's working + why this is the highest-leverage fix -->
          <div v-if="(recommendation as ServiceRecommendation).strongSections.length > 0"
            class="border-t border-blue-200/60 pt-5 space-y-3">
            <p class="text-sm font-medium text-neutral-700">Why this is your highest-leverage fix</p>
            <div class="space-y-1.5">
              <p class="text-sm text-neutral-600">
                <span class="font-medium">What's working:</span>
                {{(recommendation as ServiceRecommendation).strongSections.map(s => `${s.title}
                (${s.score}/${s.max})`).join(',')}}
              </p>
              <p class="text-sm text-neutral-600">
                <template v-if="recommendation.type === 'workflow'">
                  Fixing your workflow will reduce friction without rebuilding anything. It's the fastest path to
                  improvement when the system structure is sound.
                </template>
                <template v-else>
                  Addressing these gaps with expert analysis gives you a prioritised roadmap — so you invest in the
                  right fixes, in the right order.
                </template>
              </p>
            </div>
          </div>

          <!-- Dual CTAs -->
          <div class="flex flex-col gap-3 xl:flex-row border-t border-blue-200/60 pt-5">
            <div>
              <ButtonLink :to="CALENDLY_URL" target="_blank" rel="nofollow noopener noreferrer">
                Book a call to fix this
              </ButtonLink>
            </div>
            <div>
              <ButtonLink variant="inverse" :to="(recommendation as ServiceRecommendation).link">
                See how this works
              </ButtonLink>
            </div>

          </div>

          <!-- Secondary recommendation -->
          <div v-if="(recommendation as ServiceRecommendation).secondaryRecommendation"
            class="border-t border-blue-200/60 pt-5 space-y-3">
            <p class="text-sm font-medium text-neutral-700">Not sure this is the only issue?</p>
            <p class="text-sm text-neutral-600">
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
              If you want a full system-level view before making changes:
            </p>
            <ButtonLink :to="(recommendation as ServiceRecommendation).secondaryRecommendation!.link" variant="inverse">
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
              Keep using this scorecard to stay honest as your system evolves —
              and if you know a team that could benefit, feel free to share it.
            </p>
          </div>
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
</style>
