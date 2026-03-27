export interface Step {
  phase: string
  title: string
  description: string
  link: string
  cta: string
}

const engagementSteps: Step[] = [
  {
    phase: 'Phase 1',
    title: 'Audit',
    link: '/services/audit/',
    cta: 'How the audit can help',
    description:
      "Before you build anything new, you need to understand what's actually broken.",
  },
  {
    phase: 'Phase 2',
    title: 'Build',
    link: '/services/starter/',
    cta: 'How the starter kit can help',
    description:
      'Stabilize and scale your UI system with a foundation built to last, not patched to survive.',
  },
  {
    phase: 'Phase 3',
    title: 'Align',
    link: '/services/workflow/',
    cta: 'How the workflow can help',
    description:
      'Reduce handoff friction and rework. Fix the process once so your team stops losing time to it every sprint.',
  },
]

export const useEngagementSteps = () => engagementSteps
