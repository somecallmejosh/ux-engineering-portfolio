<script setup lang="ts">
const props = defineProps<{
  sections: Array<{ title: string; score: number; max: number }>
  status: 'healthy' | 'functional' | 'investment' | null
}>()

const SHORT_LABELS: Record<string, string> = {
  'Component consistency': 'Consistency',
  'Accessibility': 'Accessibility',
  'Token architecture': 'Tokens',
  'Documentation': 'Docs',
  'Handoff process': 'Handoff',
}

const STATUS_COLORS: Record<string, string> = {
  healthy: '#10b981',
  functional: '#f59e0b',
  investment: '#f87171',
}

// Wider than tall to give horizontal labels room without shrinking the chart
const W = 420
const H = 280
const CX = W / 2
const CY = H / 2
const R = 88
const LABEL_R = R + 26
const GRID = [0.25, 0.5, 0.75, 1]

function angle(i: number): number {
  return (Math.PI * 2 * i) / props.sections.length - Math.PI / 2
}

function pt(r: number, i: number): { x: number; y: number } {
  return { x: CX + r * Math.cos(angle(i)), y: CY + r * Math.sin(angle(i)) }
}

const viewBox = `0 0 ${W} ${H}`

function gridPoints(level: number): string {
  return props.sections.map((_, i) => {
    const p = pt(R * level, i)
    return `${p.x},${p.y}`
  }).join(' ')
}

const dataPolygon = computed(() =>
  props.sections.map((s, i) => {
    const p = pt((s.max > 0 ? s.score / s.max : 0) * R, i)
    return `${p.x},${p.y}`
  }).join(' ')
)

const dataPoints = computed(() =>
  props.sections.map((s, i) => pt((s.max > 0 ? s.score / s.max : 0) * R, i))
)

const strokeColor = computed(() =>
  props.status ? (STATUS_COLORS[props.status] ?? '#6366f1') : '#6366f1'
)

function textAnchor(i: number): string {
  const x = Math.cos(angle(i))
  return x > 0.2 ? 'start' : x < -0.2 ? 'end' : 'middle'
}

function dominantBaseline(i: number): string {
  const y = Math.sin(angle(i))
  return y > 0.2 ? 'hanging' : y < -0.2 ? 'auto' : 'middle'
}
</script>

<template>
  <svg :viewBox="viewBox" class="w-full" aria-hidden="true">
    <!-- Grid pentagons -->
    <polygon
      v-for="level in GRID"
      :key="level"
      :points="gridPoints(level)"
      fill="none"
      stroke="#e5e7eb"
      stroke-width="1"
    />
    <!-- Axes -->
    <line
      v-for="(_, i) in sections"
      :key="i"
      :x1="CX"
      :y1="CY"
      :x2="pt(R, i).x"
      :y2="pt(R, i).y"
      stroke="#e5e7eb"
      stroke-width="1"
    />
    <!-- Data polygon -->
    <polygon
      :points="dataPolygon"
      :fill="strokeColor"
      fill-opacity="0.12"
      :stroke="strokeColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <!-- Data points -->
    <circle
      v-for="(p, i) in dataPoints"
      :key="i"
      :cx="p.x"
      :cy="p.y"
      r="4"
      :fill="strokeColor"
    />
    <!-- Labels -->
    <text
      v-for="(section, i) in sections"
      :key="i"
      :x="pt(LABEL_R, i).x"
      :y="pt(LABEL_R, i).y"
      :text-anchor="textAnchor(i)"
      :dominant-baseline="dominantBaseline(i)"
      fill="#6b7280"
      style="font-size: 11px; font-weight: 500; font-family: inherit"
    >
      {{ SHORT_LABELS[section.title] ?? section.title }}
    </text>
  </svg>
</template>
