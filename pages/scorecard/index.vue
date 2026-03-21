<script setup lang="ts">
useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

useSeoMeta({
  title: 'Design System Health Check | Josh Briley',
  description: 'A self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process.',
})

// ─── Data ────────────────────────────────────────────────────────────────────

interface ChecklistItem {
  id: string
  label: string
}

interface ChecklistSection {
  id: string
  title: string
  max: number
  items: ChecklistItem[]
}

type Rating = 0 | 1 | 2

const SECTIONS: ChecklistSection[] = [
  {
    id: 's1',
    title: 'Component consistency',
    max: 12,
    items: [
      { id: 's1-1', label: 'Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.' },
      { id: 's1-2', label: 'Component APIs (props, slots, events) follow a consistent naming convention across the library.' },
      { id: 's1-3', label: 'Visual decisions (spacing, color, border radius) reference tokens — not hardcoded values inside components.' },
      { id: 's1-4', label: 'Components render consistently across the browsers and viewports your product supports.' },
      { id: 's1-5', label: 'There are no one-off components that solve the same problem differently from an existing one.' },
      { id: 's1-6', label: 'Deprecated components have a documented migration path and are not mixed with current components in production.' },
    ],
  },
  {
    id: 's2',
    title: 'Accessibility',
    max: 16,
    items: [
      { id: 's2-1', label: 'Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.' },
      { id: 's2-2', label: 'All form inputs have visible, programmatically associated labels.' },
      { id: 's2-3', label: 'Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.' },
      { id: 's2-4', label: 'Color is never used as the only means of conveying information (errors, statuses, required fields).' },
      { id: 's2-5', label: 'Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.' },
      { id: 's2-6', label: 'Images, icons, and decorative elements have appropriate alt text or are hidden from assistive technology.' },
      { id: 's2-7', label: 'Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).' },
      { id: 's2-8', label: 'Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.' },
    ],
  },
  {
    id: 's3',
    title: 'Token architecture',
    max: 12,
    items: [
      { id: 's3-1', label: 'Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.' },
      { id: 's3-2', label: 'Token names follow a consistent, predictable pattern (for example: category/property/variant) with no abbreviations or ambiguity.' },
      { id: 's3-3', label: 'Semantic tokens (for example: color.text.primary) reference primitive tokens (for example: color.gray.900), not raw values.' },
      { id: 's3-4', label: 'Token names describe intent, not value — color.brand-primary rather than color.blue.' },
      { id: 's3-5', label: 'Tokens cover every design decision that varies across themes, modes, or brands.' },
      { id: 's3-6', label: 'There is no place in the codebase where a token value is redefined inside a component rather than referenced.' },
    ],
  },
  {
    id: 's4',
    title: 'Documentation',
    max: 12,
    items: [
      { id: 's4-1', label: 'Every component has a working example showing its most common use case.' },
      { id: 's4-2', label: 'Props, slots, and events are documented with types and plain-language descriptions.' },
      { id: 's4-3', label: "Do/don't guidance exists for components that are commonly misused or have non-obvious behavior." },
      { id: 's4-4', label: 'Documentation is updated as part of the development workflow — not added retroactively after the fact.' },
      { id: 's4-5', label: 'A getting-started guide lets a new developer install and use the library without asking anyone for help.' },
      { id: 's4-6', label: 'Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.' },
    ],
  },
  {
    id: 's5',
    title: 'Handoff process',
    max: 12,
    items: [
      { id: 's5-1', label: "Design files use components from the shared library — not custom one-offs that don't exist in code." },
      { id: 's5-2', label: 'Designers and developers use the same token names to describe design decisions.' },
      { id: 's5-3', label: 'There is a documented process for how new components move from design to code.' },
      { id: 's5-4', label: 'Developers do not regularly rebuild components that already exist in the library.' },
      { id: 's5-5', label: 'There is a clear owner (team or individual) responsible for maintaining and evolving the design system.' },
      { id: 's5-6', label: 'The design system has a versioning and changelog process so consumers know what changed between releases.' },
    ],
  },
]

const TOTAL_ITEMS = SECTIONS.reduce((n, s) => n + s.items.length, 0)
const TOTAL_MAX = SECTIONS.reduce((sum, s) => sum + s.max, 0)

interface RatingOption {
  value: Rating
  label: string
  title: string
  icon: string
}

const RATING_OPTIONS: RatingOption[] = [
  { value: 0, label: 'None', title: 'Not addressed (0 points)', icon: 'ph:x-circle' },
  { value: 1, label: 'Partial', title: 'Partially in place (1 point)', icon: 'ph:minus-circle' },
  { value: 2, label: 'Done', title: 'Working well (2 points)', icon: 'ph:check-circle' },
]

// ─── State ───────────────────────────────────────────────────────────────────

const ratings = reactive<Record<string, Rating | null>>(
  Object.fromEntries(SECTIONS.flatMap(s => s.items.map(i => [i.id, null])))
)

function setRating(itemId: string, value: Rating) {
  ratings[itemId] = value
}

function resetAll() {
  for (const key in ratings) {
    ratings[key] = null
  }
}

// ─── Derived values ───────────────────────────────────────────────────────────

const answeredCount = computed(() =>
  Object.values(ratings).filter(v => v !== null).length
)

const allAnswered = computed(() => answeredCount.value === TOTAL_ITEMS)

function sectionScore(section: ChecklistSection): number {
  return section.items.reduce((sum, item) => sum + (ratings[item.id] ?? 0), 0)
}

function sectionComplete(section: ChecklistSection): boolean {
  return section.items.every(item => ratings[item.id] !== null)
}

function sectionPercent(section: ChecklistSection): number {
  return Math.round((sectionScore(section) / section.max) * 100)
}

type SectionStatus = 'strong' | 'needs-attention' | 'critical'
type TotalStatus = 'healthy' | 'functional' | 'investment'

function sectionStatus(section: ChecklistSection): SectionStatus | null {
  if (!sectionComplete(section)) return null
  const pct = sectionScore(section) / section.max
  if (pct >= 10 / 12) return 'strong'
  if (pct >= 6 / 12) return 'needs-attention'
  return 'critical'
}

const totalScore = computed(() => SECTIONS.reduce((sum, s) => sum + sectionScore(s), 0))

const totalPercent = computed(() => Math.round((totalScore.value / TOTAL_MAX) * 100))

const totalStatus = computed((): TotalStatus | null => {
  if (!allAnswered.value) return null
  if (totalScore.value >= 52) return 'healthy'
  if (totalScore.value >= 32) return 'functional'
  return 'investment'
})

// ─── Class maps (no dynamic string concatenation — required for Tailwind 4) ──

const RATING_BTN_ACTIVE: Record<number, string> = {
  0: 'bg-red-50 text-red-700 border-red-200',
  1: 'bg-amber-50 text-amber-700 border-amber-200',
  2: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const RATING_BTN_ICON_ACTIVE: Record<number, string> = {
  0: 'text-red-500',
  1: 'text-amber-500',
  2: 'text-emerald-500',
}

const STATUS_BADGE: Record<string, string> = {
  'strong': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'needs-attention': 'bg-amber-50 text-amber-700 border-amber-200',
  'critical': 'bg-red-50 text-red-700 border-red-200',
}

const STATUS_BAR: Record<string, string> = {
  'strong': 'bg-emerald-500',
  'needs-attention': 'bg-amber-400',
  'critical': 'bg-red-400',
}

const STATUS_LABEL: Record<string, string> = {
  'strong': 'Strong',
  'needs-attention': 'Needs attention',
  'critical': 'Critical gap',
}

const TOTAL_STATUS_CARD: Record<string, string> = {
  'healthy': 'border-emerald-200 bg-emerald-50/40',
  'functional': 'border-amber-200 bg-amber-50/40',
  'investment': 'border-red-200 bg-red-50/40',
}

const TOTAL_STATUS_LABEL: Record<string, string> = {
  'healthy': 'Healthy',
  'functional': 'Functional but inconsistent',
  'investment': 'Significant investment needed',
}

const TOTAL_STATUS_BAR: Record<string, string> = {
  'healthy': 'bg-emerald-500',
  'functional': 'bg-amber-400',
  'investment': 'bg-red-400',
}
</script>

<template>
  <PageWrapper>
    <PageHero :content="{
      pill: 'Design System Health Check',
      pillIcon: 'ph:check-square-offset',
      title: 'Design System Health Check',
      description: 'An interactive self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process.'
    }" />

    <div class="space-y-6">
      <!-- Rating legend + progress -->
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
        <div class="flex flex-wrap gap-3  flex-1">
          <div class="flex items-center gap-1.5">
            <Icon name="ph:x-circle" size="1.1rem" class="text-red-400" aria-hidden="true" />
            <span>None — not addressed</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="ph:minus-circle" size="1.1rem" class="text-amber-400" aria-hidden="true" />
            <span>Partial — partially in place</span>
          </div>
          <div class="flex items-center gap-1.5">
            <Icon name="ph:check-circle" size="1.1rem" class="text-emerald-500" aria-hidden="true" />
            <span>Done — working well</span>
          </div>
        </div>
        <div class="flex items-center gap-3 sm:shrink-0">
          <span class="tabular-nums">{{ answeredCount }}/{{ TOTAL_ITEMS }}</span>
          <div class="w-24 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div class="h-full bg-neutral-700 rounded-full transition-all duration-300"
              :style="{ width: `${Math.round((answeredCount / TOTAL_ITEMS) * 100)}%` }" />
          </div>
          <button type="button" :disabled="answeredCount === 0" aria-label="Reset all ratings" @click="resetAll"
            class="disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer">
            Reset
          </button>
        </div>
      </div>
      <!-- Section cards -->
      <div class="space-y-4">
        <section v-for="(section, si) in SECTIONS" :key="section.id" :aria-labelledby="`title-${section.id}`"
          class="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <!-- Section header -->
          <div class="flex items-center justify-between gap-4 px-5 py-4 border-b border-neutral-100">
            <div class="flex items-center gap-3">
              <span class=" font-medium font-mono tabular-nums" aria-hidden="true">
                {{ String(si + 1).padStart(2, '0') }}
              </span>
              <h2 :id="`title-${section.id}`" class="text-base font-medium">
                {{ section.title }}
              </h2>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class=" tabular-nums" aria-hidden="true">
                <span class="font-medium">{{ sectionScore(section) }}</span>/{{ section.max }}
              </span>
              <span class="sr-only">Score: {{ sectionScore(section) }} out of {{ section.max }}</span>
              <!-- aria-live container must always exist for announcements to fire -->
              <div aria-live="polite" aria-atomic="true">
                <Transition name="badge">
                  <span v-if="sectionStatus(section)" class=" px-2 py-0.5 rounded-full border font-medium animate-entry"
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
              <p class="flex-1 ">{{ item.label }}</p>
              <!-- Rating toggle -->
              <div role="group" :aria-label="`Rating for: ${item.label}`"
                class="flex shrink-0 rounded-lg border border-neutral-200">
                <button v-for="opt in RATING_OPTIONS" :key="opt.value" type="button"
                  :aria-pressed="ratings[item.id] === opt.value" :title="opt.title"
                  @click="setRating(item.id, opt.value)"
                  class="relative flex flex-1 items-center gap-1.5 pl-2 pr-3 py-1.5  font-medium border-r last:border-r-0 border-neutral-200 transition-colors duration-150 cursor-pointer first:rounded-l-[7px] last:rounded-r-[7px] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-1 justify-center"
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
      <!-- Total score card -->
      <div class="rounded-2xl border-2 p-6 space-y-5 transition-colors duration-500"
        :class="totalStatus ? TOTAL_STATUS_CARD[totalStatus] : 'border-neutral-200 bg-neutral-50'">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class=" font-medium   mb-1">Total score</p>
            <div class="flex items-baseline gap-2">
              <span class="text-5xl " style="font-family: 'DM Serif Text', serif" aria-hidden="true">
                {{ totalScore }}
              </span>
              <span class="text-lg " aria-hidden="true">/{{ TOTAL_MAX }}</span>
              <span class="sr-only">Total score: {{ totalScore }} out of {{ TOTAL_MAX }}</span>
            </div>
          </div>
          <!-- aria-live container must always exist for announcements to fire -->
          <div aria-live="polite" aria-atomic="true">
            <Transition name="badge">
              <span v-if="totalStatus"
                class=" px-3 py-1 rounded-full border font-medium text-base animate-entry bg-white"
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
        <ul class="space-y-2" role="list">
          <li v-for="section in SECTIONS" :key="section.id" class="flex items-center gap-3 ">
            <span class="flex-1 truncate">{{ section.title }}</span>
            <span class="tabular-nums ">
              <span class="font-medium ">{{ sectionScore(section) }}</span>/{{ section.max }}
            </span>
            <span v-if="sectionStatus(section)"
              class=" px-2 py-0.5 rounded-full border font-medium shrink-0 animate-entry"
              :class="STATUS_BADGE[sectionStatus(section)!]">
              {{ STATUS_LABEL[sectionStatus(section)!] }}
            </span>
            <span v-else class=" text-right tabular-nums whitespace-nowrap">
              {{section.items.filter(i => ratings[i.id] !== null).length}}/{{ section.items.length }} <span
                class="sr-only">answered</span>
            </span>
          </li>
        </ul>
        <!-- Guidance once complete -->
        <!-- aria-live container must always exist for announcements to fire -->
        <div aria-live="polite" aria-atomic="true">
          <Transition name="badge">
            <p v-if="allAnswered" class="  animate-entry border-t border-neutral-200/60 pt-4">
              Look at your lowest-scoring section first — that's your highest-leverage place to start.
              If accessibility is a weak point, prioritize it: it carries legal risk and affects real users today.
            </p>
          </Transition>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <Callout>
      <h2>Want a deeper analysis?</h2>
      <p>
        The paid <NuxtLink to="/services/audit/">Design System Audit</NuxtLink> covers the same five dimensions with
        expert analysis, a written report, and a prioritized remediation roadmap delivered in five business days.
      </p>
      <ButtonLink to="/contact/">Get in touch</ButtonLink>
    </Callout>

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
