<script setup lang="ts">
useSeoMeta({
  title: 'Fieldstone Analytics — Design System Audit | Example Report',
  description: 'A minimal-findings example audit report from Briley Creative. Four low-severity findings in a mature, well-maintained design system.',
})
</script>

<template>
  <div class="space-y-6 pb-16">

    <!-- Cover -->
    <header class="rounded-2xl bg-neutral-50 border border-neutral-200 px-8 py-10 lg:px-12 lg:py-14">
      <p class="text-body text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-8">
        Briley Creative LLC &mdash; Example Audit Report
      </p>
      <h1 class="text-4xl lg:text-5xl text-neutral-900 mb-3">Fieldstone Analytics</h1>
      <p class="text-body text-lg text-neutral-600 mb-10">Design System Audit &mdash; Minimal findings scenario</p>
      <dl class="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 border-t border-neutral-200 pt-8">
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Client</dt>
          <dd class="text-body text-sm text-neutral-800">Fieldstone Analytics</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Product</dt>
          <dd class="text-body text-sm text-neutral-800">Fieldstone Data Platform</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Audit dates</dt>
          <dd class="text-body text-sm text-neutral-800">February 3&ndash;7, 2026</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Report date</dt>
          <dd class="text-body text-sm text-neutral-800">February 10, 2026</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Prepared by</dt>
          <dd class="text-body text-sm text-neutral-800">Joshua Briley, Briley Creative LLC</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">WCAG target</dt>
          <dd class="text-body text-sm text-neutral-800">WCAG 2.1 Level AA</dd>
        </div>
      </dl>
    </header>

    <!-- Severity summary -->
    <div
      class="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200"
      role="region" aria-label="Finding severity summary">
      <span class="text-body text-sm font-semibold text-neutral-600">Findings</span>
      <div class="flex flex-wrap gap-2">
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">0
          Critical</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">0
          High</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">2
          Medium</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">2
          Low</span>
      </div>
    </div>

    <!-- Report body -->
    <div class="space-y-12">

      <!-- 1. Executive summary -->
      <section aria-labelledby="s1-title">
        <h2 id="s1-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          1. Executive summary
        </h2>
        <div class="space-y-4 text-body text-neutral-700 leading-relaxed mb-6">
          <p>Fieldstone's design system is in strong condition. The component library is well-structured, token usage is
            consistent across all reviewed components, and Storybook coverage is thorough and current. Accessibility
            compliance is solid, with only minor gaps in ARIA labeling for two icon-only controls.</p>
          <p>The system reflects a mature, actively maintained codebase. The four findings in this report are low-stakes
            items that represent normal incremental improvement work, not structural problems.</p>
        </div>
        <dl
          class="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 rounded-xl overflow-hidden border border-neutral-200">
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Critical</dt>
            <dd class="text-3xl font-bold tabular-nums text-neutral-300">0</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">High</dt>
            <dd class="text-3xl font-bold tabular-nums text-neutral-300">0</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Medium</dt>
            <dd class="text-3xl font-bold tabular-nums text-amber-600">2</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Low</dt>
            <dd class="text-3xl font-bold tabular-nums text-neutral-500">2</dd>
          </div>
        </dl>
      </section>

      <!-- 2. What is working well -->
      <section aria-labelledby="s2-title">
        <h2 id="s2-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          2. What is working well
        </h2>
        <ul class="space-y-3" role="list">
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">Token coverage is comprehensive. Every component
              reviewed references the token system for color, spacing, and typography. No hard-coded values were found
              in the components sampled.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">Storybook is current and thorough. Every component has
              stories for all major variants and interactive states, and the documented behavior matches the live
              product.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">Keyboard navigation is clean throughout the
              application. Focus order is logical, focus indicators are visible in all three browsers tested, and no
              keyboard traps were found.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">Component naming in both Figma and the repository is
              consistent and predictable. A new developer could orient themselves in the library without asking for
              help.</p>
          </li>
        </ul>
      </section>

      <!-- 3. Findings -->
      <section aria-labelledby="s3-title">
        <h2 id="s3-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          3. Findings
        </h2>
        <div class="space-y-10">

          <!-- 3a — Accessibility -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3a &mdash; Accessibility
            </h3>
            <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
              aria-labelledby="acc-01-title">
              <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                <span
                  class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-01</span>
                <h4 id="acc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                  Icon-only toolbar buttons lack accessible labels</h4>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
              </div>
              <dl class="divide-y divide-neutral-100">
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                  </dt>
                  <dd class="text-body text-sm text-neutral-700">DataTable toolbar &mdash;
                    <code>actions/DataTableToolbar.tsx</code>
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Description
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">The Export, Filter, and Column
                    Visibility buttons in the DataTable toolbar render as icon-only controls with no
                    <code>aria-label</code> or visually hidden text. VoiceOver announces these as unlabeled buttons.
                    Keyboard users navigating the toolbar cannot determine the purpose of each control without
                    activating it.
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Remediation
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add <code>aria-label</code> attributes
                    to each icon button: <code>aria-label="Export data"</code>, <code>aria-label="Filter rows"</code>,
                    <code>aria-label="Show or hide columns"</code>. Alternatively, add a visually hidden
                    <code>&lt;span&gt;</code> inside each button using the existing <code>sr-only</code> utility class.
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          <!-- 3b — Component consistency -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3b &mdash; Component consistency
            </h3>
            <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
              aria-labelledby="con-01-title">
              <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                <span
                  class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-01</span>
                <h4 id="con-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Card
                  component border radius inconsistent between Figma and live product</h4>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
              </div>
              <dl class="divide-y divide-neutral-100">
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                  </dt>
                  <dd class="text-body text-sm text-neutral-700">Card component &mdash; Figma library page 2 vs.
                    <code>/dashboard</code> and <code>/reports</code>
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Description
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">The Card component in Figma specifies a
                    border radius of 8px. The rendered card in the live product applies 6px, matching the
                    <code>border-radius-md</code> token. The Figma component has not been updated to reflect the token
                    value adopted during the Q3 2025 token consolidation. This creates a minor but consistent mismatch
                    during design handoff.
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Remediation
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">Update the Figma Card component's
                    corner radius to 6px to match the <code>border-radius-md</code> token
                    (<code>--radius-md: 6px</code>). No code change required.</dd>
                </div>
              </dl>
            </article>
          </div>

          <!-- 3d — Documentation -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3c &mdash; Documentation
            </h3>
            <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
              aria-labelledby="doc-01-title">
              <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                <span
                  class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">DOC-01</span>
                <h4 id="doc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Toast
                  component does not document the auto-dismiss timing behavior</h4>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
              </div>
              <dl class="divide-y divide-neutral-100">
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                  </dt>
                  <dd class="text-body text-sm text-neutral-700">Toast &mdash; Storybook docs tab</dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Description
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">The Toast component auto-dismisses
                    after 5 seconds by default and accepts a <code>duration</code> prop for overrides. Neither the
                    default value nor the prop is documented in Storybook. A developer implementing toasts for the first
                    time would discover this only by reading the source or testing in the browser.</dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Remediation
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add a props table to the Toast
                    Storybook story documenting the <code>duration</code> prop, its type (number, milliseconds), its
                    default value (5000), and a note that passing <code>0</code> disables auto-dismiss.</dd>
                </div>
              </dl>
            </article>
          </div>

          <!-- 3e — Handoff process -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3d &mdash; Handoff process
            </h3>
            <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
              aria-labelledby="hnd-01-title">
              <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                <span
                  class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-01</span>
                <h4 id="hnd-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                  versioning or changelog process exists for the component library</h4>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
              </div>
              <dl class="divide-y divide-neutral-100">
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                  </dt>
                  <dd class="text-body text-sm text-neutral-700"><code>github.com/fieldstone/ui</code> &mdash;
                    <code>package.json</code>, repository root
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Description
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">The component library package version
                    has not been incremented in six months despite several component updates merged during that period.
                    There is no <code>CHANGELOG.md</code> or release notes process. Consuming application teams have no
                    way to know what changed between the version they are running and the current main branch without
                    reading git history.</dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Remediation
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">Adopt a changelog convention, such as
                    the Keep a Changelog format. Increment the npm package version on every merge to main using semantic
                    versioning: patch for fixes, minor for new components or non-breaking changes, major for breaking
                    changes. Consider automating this with a tool such as <code>semantic-release</code> or
                    <code>changesets</code>.
                  </dd>
                </div>
              </dl>
            </article>
          </div>

        </div>
      </section>

      <!-- 4. Remediation roadmap -->
      <section aria-labelledby="s4-title">
        <h2 id="s4-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          4. Remediation roadmap
        </h2>
        <div class="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
          <table class="w-full text-sm bg-white">
            <caption class="sr-only">Remediation roadmap: severity, finding ID, description, and recommended timeline
              for each finding</caption>
            <thead>
              <tr class="bg-neutral-50 border-b border-neutral-200">
                <th scope="col"
                  class="text-body px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide w-28">
                  Severity</th>
                <th scope="col"
                  class="text-body px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide w-20">
                  ID</th>
                <th scope="col"
                  class="text-body px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  Finding</th>
                <th scope="col"
                  class="text-body px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide w-36">
                  Timeline</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-100">
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Icon-only toolbar buttons lack accessible labels</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Card border radius mismatch between Figma and live
                  product</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">DOC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Toast auto-dismiss behavior undocumented</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">No versioning or changelog process for the component
                  library</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Scope and methodology -->
      <section aria-labelledby="s5-title">
        <h2 id="s5-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          5. Scope and methodology
        </h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-body text-sm font-semibold text-neutral-700 mb-3">Inputs reviewed</h3>
            <ul class="space-y-2" role="list">
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Figma</span><span
                  class="text-neutral-600">Fieldstone Design System v4 (shared library)</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Repository</span><span
                  class="text-neutral-600"><code>github.com/fieldstone/ui</code> &mdash;
                  <code>/packages/components</code></span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Storybook</span><span
                  class="text-neutral-600">storybook.fieldstone.internal</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">Live
                  product</span><span class="text-neutral-600">app.fieldstone.io (production)</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-body text-sm font-semibold text-neutral-700 mb-3">Accessibility testing tools and browsers
            </h3>
            <ul class="space-y-2" role="list">
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">axe
                  DevTools</span><span class="text-neutral-600">Chrome, Firefox, Edge</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">axe
                  Linter</span><span class="text-neutral-600">Component source</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">VoiceOver</span><span
                  class="text-neutral-600">macOS, Chrome and Safari</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Keyboard nav</span><span
                  class="text-neutral-600">Chrome, Firefox, Edge</span></li>
            </ul>
          </div>
          <div class="rounded-xl p-5 bg-blue-50 border border-blue-200" role="note">
            <p class="text-body text-sm font-semibold text-blue-900 mb-2">Automated tool coverage</p>
            <p class="text-body text-sm text-blue-800 leading-relaxed">Automated tools detect approximately 30 to 40
              percent of real accessibility issues. All findings reflect both automated scan results and manual review.
              ACC-01 was identified through VoiceOver testing and confirmed manually.</p>
          </div>
        </div>
      </section>

    </div>

    <!-- CTA strip -->
    <div class="rounded-2xl bg-neutral-50 border border-neutral-200 px-8 py-10 lg:px-12 lg:py-14">
      <h2 class="text-2xl text-neutral-900 mb-3">What comes after an audit?</h2>
      <p class="text-body text-neutral-600 mb-8">Depending on what your system needs most, the next engagement is
        typically one of these.</p>
      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <a href="/services/starter/"
          class="group flex flex-col gap-2 p-5 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors">
          <span class="text-sm font-semibold text-neutral-900">Component Library Starter</span>
          <span
            class="text-body text-xs text-neutral-600 leading-relaxed group-hover:text-neutral-800 transition-colors">20
            accessible, documented components built to your design tokens.</span>
        </a>
        <a href="/services/workflow/"
          class="group flex flex-col gap-2 p-5 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors">
          <span class="text-sm font-semibold text-neutral-900">Design-to-Code Workflow</span>
          <span
            class="text-body text-xs text-neutral-600 leading-relaxed group-hover:text-neutral-800 transition-colors">Fix
            the handoff process once so your team stops losing time to it every sprint.</span>
        </a>
      </div>
      <p class="text-body text-xs text-neutral-600 leading-relaxed">Prefer ongoing oversight? Ask me about a monthly
        retainer covering accessibility review, token checks, and ad hoc guidance for your team.</p>
    </div>

    <p class="text-body text-sm text-neutral-600 leading-relaxed">
      This is an example report. All company names, product names, and repository paths are fictional.
      Any resemblance to real businesses is coincidental and unintended.
    </p>

    <ButtonLink to="/services/audit/">Back to design system audits</ButtonLink>

  </div>
</template>

<style scoped>
code {
  font-family: 'IBM Plex Mono', monospace;
  background-color: var(--color-blue-50);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: 500;
  color: var(--color-neutral-900);
}

article {
  background: white;
}
</style>
