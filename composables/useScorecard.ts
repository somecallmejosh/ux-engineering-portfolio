// ─── Types ───────────────────────────────────────────────────────────────────

export interface ChecklistItem {
  id: string
  label: string
}

export interface ChecklistSection {
  id: string
  title: string
  max: number
  items: ChecklistItem[]
}

export type Rating = 0 | 1 | 2
export type SectionStatus = 'strong' | 'needs-attention' | 'critical'
export type TotalStatus = 'healthy' | 'functional' | 'investment'
export type RecommendationType = 'audit' | 'workflow' | 'healthy'

export interface ServiceRecommendation {
  type: 'audit' | 'workflow'
  label: string
  tagline: string
  why: string
  strongSections: Array<{ title: string; score: number; max: number }>
  weakSections: Array<{
    title: string
    score: number
    max: number
    status: SectionStatus
  }>
  secondaryRecommendation?: {
    label: string
    sectionNames: string[]
    link: string
  }
  price: string
  link: string
}

export type RecommendationPayload =
  | ServiceRecommendation
  | { type: 'healthy' }
  | null

export interface ScorecardMeta {
  design_system_recommendation: string
  design_system_label: string
  design_system_score_total: number
  design_system_lowest_section: string
  design_system_per_section_scores: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const SECTIONS: ChecklistSection[] = [
  {
    id: 's1',
    title: 'Component consistency',
    max: 12,
    items: [
      {
        id: 's1-1',
        label:
          'Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.',
      },
      {
        id: 's1-2',
        label:
          'Component APIs (props, slots, events) follow a consistent naming convention across the library.',
      },
      {
        id: 's1-3',
        label:
          'Visual decisions (spacing, color, border radius) reference tokens, not hardcoded values inside components.',
      },
      {
        id: 's1-4',
        label:
          'Components render consistently across the browsers and viewports your product supports.',
      },
      {
        id: 's1-5',
        label:
          'No one-off components solve the same problem as an existing shared component in a different way.',
      },
      {
        id: 's1-6',
        label:
          'Deprecated components have a documented migration path and are not mixed with current components in production.',
      },
    ],
  },
  {
    id: 's2',
    title: 'Accessibility',
    max: 16,
    items: [
      {
        id: 's2-1',
        label:
          'Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.',
      },
      {
        id: 's2-2',
        label:
          'All form inputs have visible, programmatically associated labels.',
      },
      {
        id: 's2-3',
        label:
          'Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.',
      },
      {
        id: 's2-4',
        label:
          'Color is never used as the only means of conveying information (errors, statuses, required fields).',
      },
      {
        id: 's2-5',
        label:
          'Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.',
      },
      {
        id: 's2-6',
        label:
          'Images, icons, and decorative elements have appropriate alt text or are hidden from assistive technology.',
      },
      {
        id: 's2-7',
        label:
          'Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).',
      },
      {
        id: 's2-8',
        label:
          'Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.',
      },
    ],
  },
  {
    id: 's3',
    title: 'Token architecture',
    max: 12,
    items: [
      {
        id: 's3-1',
        label:
          'Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.',
      },
      {
        id: 's3-2',
        label:
          'Token names follow a consistent, predictable pattern (for example: category/property/variant) with no abbreviations or ambiguity.',
      },
      {
        id: 's3-3',
        label:
          'Semantic tokens (for example: color.text.primary) reference primitive tokens (for example: color.gray.900), not raw values.',
      },
      {
        id: 's3-4',
        label:
          'Token names describe intent, not value. For example, color.brand-primary rather than color.blue.',
      },
      {
        id: 's3-5',
        label:
          'Tokens cover every design decision that varies across themes, modes, or brands.',
      },
      {
        id: 's3-6',
        label:
          'No component redefines a token value instead of referencing it.',
      },
    ],
  },
  {
    id: 's4',
    title: 'Documentation',
    max: 12,
    items: [
      {
        id: 's4-1',
        label:
          'Every component has a working example showing its most common use case.',
      },
      {
        id: 's4-2',
        label:
          'Props, slots, and events are documented with types and plain-language descriptions.',
      },
      {
        id: 's4-3',
        label:
          "Components with common misuse patterns or non-obvious behavior have explicit do/don't guidance.",
      },
      {
        id: 's4-4',
        label:
          'Documentation is updated as part of the development workflow, not added retroactively.',
      },
      {
        id: 's4-5',
        label:
          'A getting-started guide lets a new developer install and use the library without asking anyone for help.',
      },
      {
        id: 's4-6',
        label:
          'Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.',
      },
    ],
  },
  {
    id: 's5',
    title: 'Handoff process',
    max: 12,
    items: [
      {
        id: 's5-1',
        label:
          "Design files use components from the shared library, not custom one-offs that don't exist in code.",
      },
      {
        id: 's5-2',
        label:
          'Designers and developers use the same token names to describe design decisions.',
      },
      {
        id: 's5-3',
        label:
          'New components follow a documented process from design to code.',
      },
      {
        id: 's5-4',
        label:
          'Developers do not regularly rebuild components that already exist in the library.',
      },
      {
        id: 's5-5',
        label:
          'There is a clear owner (team or individual) responsible for maintaining and evolving the design system.',
      },
      {
        id: 's5-6',
        label:
          'The design system has a versioning and changelog process so consumers know what changed between releases.',
      },
    ],
  },
]

export const TOTAL_ITEMS = SECTIONS.reduce((n, s) => n + s.items.length, 0)
export const TOTAL_MAX = SECTIONS.reduce((sum, s) => sum + s.max, 0)

export interface RatingOption {
  value: Rating
  label: string
  title: string
  icon: string
}

export const RATING_OPTIONS: RatingOption[] = [
  {
    value: 0,
    label: 'None',
    title: 'Not addressed (0 points)',
    icon: 'ph:x-circle',
  },
  {
    value: 1,
    label: 'Partial',
    title: 'Partially in place (1 point)',
    icon: 'ph:minus-circle',
  },
  {
    value: 2,
    label: 'Done',
    title: 'Working well (2 points)',
    icon: 'ph:check-circle',
  },
]

// ─── URL param helpers ────────────────────────────────────────────────────────

export const VALID_PARAM_RE = new RegExp(`^[012]{${TOTAL_ITEMS}}$`)

export function encodeRatings(ratings: Record<string, Rating | null>): string {
  return SECTIONS.flatMap((s) =>
    s.items.map((item) => String(ratings[item.id] ?? 0)),
  ).join('')
}

export function decodeRatings(param: string): Record<string, Rating | null> {
  const result: Record<string, Rating | null> = {}
  let i = 0
  for (const section of SECTIONS) {
    for (const item of section.items) {
      result[item.id] = parseInt(param[i++]) as Rating
    }
  }
  return result
}

export function emptyRatings(): Record<string, Rating | null> {
  return Object.fromEntries(
    SECTIONS.flatMap((s) => s.items.map((i) => [i.id, null])),
  )
}

// ─── Class maps (no dynamic string concatenation — required for Tailwind 4) ──

export const RATING_BTN_ACTIVE: Record<number, string> = {
  0: 'bg-red-50 text-red-700 border-red-200',
  1: 'bg-amber-50 text-amber-700 border-amber-200',
  2: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export const RATING_BTN_ICON_ACTIVE: Record<number, string> = {
  0: 'text-red-500',
  1: 'text-amber-500',
  2: 'text-emerald-500',
}

export const STATUS_BADGE: Record<string, string> = {
  strong: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'needs-attention': 'bg-amber-50 text-amber-700 border-amber-200',
  critical: 'bg-red-50 text-red-700 border-red-200',
  healthy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  functional: 'bg-amber-50 text-amber-700 border-amber-200',
  investment: 'bg-red-50 text-red-700 border-red-200',
}

export const STATUS_BAR: Record<string, string> = {
  strong: 'bg-emerald-500',
  'needs-attention': 'bg-amber-400',
  critical: 'bg-red-400',
}

export const STATUS_LABEL: Record<string, string> = {
  strong: 'Strong',
  'needs-attention': 'Needs attention',
  critical: 'Critical gap',
}

export const TOTAL_STATUS_CARD: Record<string, string> = {
  healthy: 'border-emerald-200 bg-emerald-50/40',
  functional: 'border-amber-200 bg-amber-50/40',
  investment: 'border-red-200 bg-red-50/40',
}

export const TOTAL_STATUS_LABEL: Record<string, string> = {
  healthy: 'Healthy',
  functional: 'Functional but inconsistent',
  investment: 'Significant investment needed',
}

export const TOTAL_STATUS_BAR: Record<string, string> = {
  healthy: 'bg-emerald-500',
  functional: 'bg-amber-400',
  investment: 'bg-red-400',
}

// ─── Factory ─────────────────────────────────────────────────────────────────

export function useScorecard(ratings: Record<string, Rating | null>) {
  // ── Per-section helpers ──────────────────────────────────────────────────

  function sectionScore(section: ChecklistSection): number {
    return section.items.reduce((sum, item) => sum + (ratings[item.id] ?? 0), 0)
  }

  function sectionComplete(section: ChecklistSection): boolean {
    return section.items.every((item) => ratings[item.id] !== null)
  }

  function sectionPercent(section: ChecklistSection): number {
    return Math.round((sectionScore(section) / section.max) * 100)
  }

  function sectionStatus(section: ChecklistSection): SectionStatus | null {
    if (!sectionComplete(section)) return null
    const pct = sectionScore(section) / section.max
    if (pct >= 10 / 12) return 'strong'
    if (pct >= 6 / 12) return 'needs-attention'
    return 'critical'
  }

  // ── Aggregate computed ────────────────────────────────────────────────────

  const answeredCount = computed(
    () => Object.values(ratings).filter((v) => v !== null).length,
  )

  const allAnswered = computed(() => answeredCount.value === TOTAL_ITEMS)

  const totalScore = computed(() =>
    SECTIONS.reduce((sum, s) => sum + sectionScore(s), 0),
  )

  const totalPercent = computed(() =>
    Math.round((totalScore.value / TOTAL_MAX) * 100),
  )

  const totalStatus = computed((): TotalStatus | null => {
    if (!allAnswered.value) return null
    if (totalScore.value >= 52) return 'healthy'
    if (totalScore.value >= 32) return 'functional'
    return 'investment'
  })

  const weakestSection = computed(() =>
    SECTIONS.reduce((weakest, section) => {
      const ratio = sectionScore(section) / section.max
      const weakestRatio = sectionScore(weakest) / weakest.max
      return ratio < weakestRatio ? section : weakest
    }),
  )

  const criticalSections = computed(() =>
    SECTIONS.filter((s) => sectionStatus(s) === 'critical'),
  )

  const recommendationType = computed((): RecommendationType | null => {
    if (!totalStatus.value) return null
    if (criticalSections.value.length > 0) return 'audit'
    if (totalStatus.value === 'healthy') return 'healthy'
    if (totalStatus.value === 'investment') return 'audit'
    return weakestSection.value.id === 's5' ? 'workflow' : 'audit'
  })

  // ── Enriched recommendation ───────────────────────────────────────────────

  const recommendation = computed((): RecommendationPayload => {
    if (!recommendationType.value) return null
    if (recommendationType.value === 'healthy') return { type: 'healthy' }

    // Build section analysis for dynamic copy
    const strong = SECTIONS.filter((s) => sectionStatus(s) === 'strong')
      .sort((a, b) => sectionScore(b) / b.max - sectionScore(a) / a.max)
      .map((s) => ({ title: s.title, score: sectionScore(s), max: s.max }))

    const weak = SECTIONS.filter((s) => {
      const st = sectionStatus(s)
      return st === 'needs-attention' || st === 'critical'
    })
      .sort((a, b) => sectionScore(a) / a.max - sectionScore(b) / b.max)
      .map((s) => ({
        title: s.title,
        score: sectionScore(s),
        max: s.max,
        status: sectionStatus(s) as SectionStatus,
      }))

    if (recommendationType.value === 'workflow') {
      const s5 = SECTIONS.find((s) => s.id === 's5')!
      const s5Score = sectionScore(s5)

      // Dynamic why copy referencing actual strong sections
      const strongNonHandoff = strong.filter(
        (s) => s.title !== 'Handoff process',
      )
      let why: string
      if (strongNonHandoff.length === 0) {
        why = `Your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`
      } else if (strongNonHandoff.length === 1) {
        why = `Your ${strongNonHandoff[0].title.toLowerCase()} is a solid foundation. But your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`
      } else {
        const titles = strongNonHandoff.map((s) => s.title.toLowerCase())
        const last = titles.pop()
        why = `Your ${titles.join(', ')} and ${last} are solid foundations. But your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`
      }

      // Secondary recommendation if non-handoff sections are also weak
      const secondarySections = SECTIONS.filter((s) => {
        if (s.id === 's5') return false
        const st = sectionStatus(s)
        return st === 'needs-attention' || st === 'critical'
      })

      return {
        type: 'workflow',
        label: 'Design-to-Code Workflow',
        tagline:
          'Reduce handoff friction and rework. Fix the process once so your team stops losing time to it every sprint.',
        why,
        strongSections: strong,
        weakSections: weak,
        secondaryRecommendation:
          secondarySections.length > 0
            ? {
                label: 'Design System Audit',
                sectionNames: secondarySections.map((s) => s.title),
                link: '/services/audit/',
              }
            : undefined,
        price: '$2,500',
        link: '/services/workflow/',
      }
    }

    // Audit recommendation
    let why: string
    if (totalStatus.value === 'investment') {
      why =
        'With critical gaps across multiple dimensions, the Audit gives you a prioritized roadmap before you invest in rebuilding.'
    } else if (criticalSections.value.length > 0) {
      const names = criticalSections.value.map((s) => s.title.toLowerCase())
      const last = names.pop()
      const joined =
        names.length > 0 ? `${names.join(', ')} and ${last}` : last!
      why = `Your ${joined} ${criticalSections.value.length === 1 ? 'has' : 'have'} a critical gap that needs expert analysis before it compounds into a larger problem.`
    } else {
      const weakNames = weak.map((s) => s.title.toLowerCase())
      const last = weakNames.pop()
      const joined =
        weakNames.length > 0 ? `${weakNames.join(', ')} and ${last}` : last!
      why = `Your ${joined} ${weak.length === 1 ? 'shows' : 'show'} structural gaps that need expert analysis before you invest in fixing them.`
    }

    return {
      type: 'audit',
      label: 'Design System Audit',
      tagline:
        "Before you build anything new, you need to understand what's actually broken.",
      why,
      strongSections: strong,
      weakSections: weak,
      price: '$2,000',
      link: '/services/audit/',
    }
  })

  // ── Chart data ────────────────────────────────────────────────────────────

  const chartSections = computed(() =>
    SECTIONS.map((s) => ({
      title: s.title,
      score: sectionScore(s),
      max: s.max,
    })),
  )

  return {
    answeredCount,
    allAnswered,
    sectionScore,
    sectionComplete,
    sectionPercent,
    sectionStatus,
    totalScore,
    totalPercent,
    totalStatus,
    weakestSection,
    criticalSections,
    recommendationType,
    recommendation,
    chartSections,
  }
}
