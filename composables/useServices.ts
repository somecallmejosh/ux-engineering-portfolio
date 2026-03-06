export interface Service {
  id: string
  label: string
  price: string
  timeline: string
  format: string
  audience: string
  audienceDetail: string
  outcome: string
  outcomeFull: string
  includes: string[]
  includesFull: string[]
  insight: string
  deliveredAs: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

const services: Service[] = [
  {
    id: 'audit',
    label: 'Design System Audit',
    price: '$1,500',
    timeline: '5 business days',
    format: 'PDF report + 60-min debrief call',
    audience: 'Teams with a component library that has grown inconsistent, hard to maintain, or without a clear architecture.',
    audienceDetail: 'If your designers and developers are making different decisions about the same UI patterns, this is where to start.',
    outcome: 'A written report covering component consistency, accessibility gaps (WCAG 2.1 AA), token structure, documentation quality, and a prioritized remediation roadmap.',
    outcomeFull: 'A structured written report covering every dimension of your current system, with a prioritized remediation roadmap you can act on right away.',
    includes: [
      'Component consistency review (visual and code)',
      'Accessibility audit with WCAG 2.1 AA criteria',
      'Design token structure analysis',
      'Documentation quality assessment',
      'Prioritized remediation roadmap with actionable recommendations',
    ],
    includesFull: [
      'Component consistency (visual and code-level)',
      'Accessibility gaps against WCAG 2.1 AA criteria',
      'Design token structure and naming conventions',
      'Documentation quality and coverage',
      'Prioritized remediation roadmap with specific, actionable recommendations',
    ],
    insight: 'Accessibility violations carry real legal risk. WCAG compliance is increasingly mandated and actively litigated. Inconsistent component libraries slow every sprint. The audit pays for itself if it prevents one accessibility incident or one week of rework.',
    deliveredAs: 'PDF report and 60-minute debrief call.',
  },
  {
    id: 'starter',
    label: 'Component Library Starter',
    price: '$3,500',
    timeline: '2–3 weeks',
    format: 'React + your styling solution',
    audience: 'Startups or small teams starting from scratch, or teams whose existing library needs a clean foundation rather than more patches.',
    audienceDetail: 'If you\'re spending more time working around your component library than building with it, it\'s time for a reset.',
    outcome: '20 core components built to your design tokens — accessible out of the box (WCAG 2.1 AA), documented with usage guidelines, and ready to extend.',
    outcomeFull: '20 core components built to your design tokens. Accessible out of the box (WCAG 2.1 AA), documented with usage guidelines, and ready to extend as your product grows.',
    includes: [
      'Design token architecture (color, spacing, typography, radius)',
      'Buttons, inputs, modals, cards, navigation, alerts, and more',
      'Keyboard navigation and ARIA attributes throughout',
      'Storybook documentation with usage examples',
      'One round of revisions',
    ],
    includesFull: [
      'Design token architecture (color, spacing, typography, border radius)',
      '20 components: buttons, inputs, modals, cards, navigation, alerts, badges, and more',
      'Keyboard navigation and ARIA attributes built in throughout',
      'Storybook documentation with usage examples and variant coverage',
      'One round of revisions',
    ],
    insight: 'A well-architected component library compounds over time. Every new feature gets faster to ship. Every new developer gets faster to onboard. Starting with a solid foundation is significantly cheaper than rebuilding a broken one six months later.',
    deliveredAs: 'React and your preferred styling solution (Tailwind, CSS Modules, Sass, or styled-components).',
  },
  {
    id: 'workflow',
    label: 'Design-to-Code Workflow',
    price: '$2,000',
    timeline: '1 week',
    format: 'Audit + workflow guide + implementation session',
    audience: 'Teams where the Figma-to-code handoff is a constant source of friction — mismatched specs, missing tokens, designer/developer miscommunication.',
    audienceDetail: 'If your designers and developers are having the same conversations sprint after sprint, the process needs fixing, not the people.',
    outcome: 'An audit of your handoff process, Figma file structure review, Code Connect setup where applicable, and a workflow guide your team can follow right away.',
    outcomeFull: 'An end-to-end audit of your current handoff process, plus a custom workflow guide your team can follow right away.',
    includes: [
      'Audit of current design-to-code process and handoff quality',
      'Review of Figma file structure and design token setup',
      'Code Connect setup and configuration (if applicable)',
      'Custom workflow guide tailored to your team\'s needs',
    ],
    includesFull: [
      'Audit of your current design-to-code process and where it breaks down',
      'Figma file structure review: component organization, naming, and token usage',
      'Code Connect setup and configuration where applicable',
      'Custom workflow guide tailored to your team\'s tools and practices',
      'Implementation session to walk your team through the new workflow',
    ],
    insight: 'Handoff friction is one of the most expensive invisible costs in product development. It rarely shows up in a retrospective, but it\'s in every sprint. Fixing the workflow once eliminates a recurring cost on your team\'s time.',
    deliveredAs: 'Written process audit, workflow guide, and 60-minute implementation session.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote: 'Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional, and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience.',
    author: 'Welling LaGrone',
    role: 'Vice President, Triverus Consulting',
  },
  {
    quote: 'He\'s still the gold standard to me for building UIs with a focus on all of the diverse users who will interact with it. He\'s the type of leader who multiplies everyone else\'s effectiveness.',
    author: 'Adam Czerepinsky',
    role: 'Senior Software Engineer, Evidation Health',
  },
  {
    quote: 'Working with Josh was an absolute privilege and pleasure. His strategic approach and focus on upstream requirement definition made our projects smoother and more efficient. His ability to foresee challenges and simplify implementation was invaluable.',
    author: 'Rebecca Cachia, PMP',
    role: 'Web Product & Project Manager, Publicis Sapient',
  },
]

export const useServices = () => ({ services, testimonials })
