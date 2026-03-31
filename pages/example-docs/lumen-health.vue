<script setup lang="ts">
useSeoMeta({
  title: 'Lumen Health — Design System Audit | Example Report',
  description: 'A moderate-findings example audit report from Briley Creative. Eleven findings across accessibility, component consistency, tokens, documentation, and handoff process.',
})
</script>

<template>
  <div class="space-y-6 pb-16">

    <!-- Cover -->
    <header class="rounded-2xl bg-neutral-50 border border-neutral-200 px-8 py-10 lg:px-12 lg:py-14">
      <p class="text-body text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-8">
        Briley Creative LLC &mdash; Example Audit Report
      </p>
      <h1 class="text-4xl lg:text-5xl text-neutral-900 mb-3">Lumen Health</h1>
      <p class="text-body text-lg text-neutral-600 mb-10">Design System Audit &mdash; Moderate findings scenario</p>
      <dl class="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 border-t border-neutral-200 pt-8">
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Client</dt>
          <dd class="text-body text-sm text-neutral-800">Lumen Health</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Product</dt>
          <dd class="text-body text-sm text-neutral-800">Lumen Patient Portal</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Audit dates</dt>
          <dd class="text-body text-sm text-neutral-800">January 12&ndash;16, 2026</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Report date</dt>
          <dd class="text-body text-sm text-neutral-800">January 20, 2026</dd>
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
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">3
          High</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">5
          Medium</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">3
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
          <p>Lumen Health's design system shows clear signs of organic growth without consistent governance. The
            component library began with a coherent structure, but two years of parallel development across three
            product teams has introduced significant drift. The token system exists but is partially implemented.
            Roughly 40 percent of components reviewed still reference hard-coded color values.</p>
          <p>The most significant concerns are in accessibility. Three High findings affect core patient-facing flows:
            form validation, focus management in modal dialogs, and color contrast in the appointment status indicator.
            In a healthcare application, these carry both legal and patient safety implications.</p>
          <p>The system is recoverable without a full rebuild. The remediation roadmap is sequenced to address risk
            first, then structural debt, then documentation gaps.</p>
        </div>
        <dl
          class="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 rounded-xl overflow-hidden border border-neutral-200">
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Critical</dt>
            <dd class="text-3xl font-bold tabular-nums text-neutral-300">0</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">High</dt>
            <dd class="text-3xl font-bold tabular-nums text-orange-600">3</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Medium</dt>
            <dd class="text-3xl font-bold tabular-nums text-amber-600">5</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Low</dt>
            <dd class="text-3xl font-bold tabular-nums text-neutral-500">3</dd>
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
            <p class="text-body text-neutral-700 leading-relaxed">The core component set &mdash; Button, Input, Select,
              and Checkbox &mdash; is well-implemented and consistent across Figma and code. These foundational
              components are solid and do not require remediation.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">Typography tokens are comprehensive and correctly
              applied throughout the product. No hard-coded font values were found.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">The Storybook getting-started guide is clear and would
              orient a new developer without additional help.</p>
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
            <div class="space-y-4">

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-01</span>
                  <h4 id="acc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Form
                    validation errors are not programmatically associated with their fields</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>AppointmentBookingForm</code>,
                      <code>InsuranceUpdateForm</code> &mdash; <code>/appointments/book</code>,
                      <code>/account/insurance</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Inline validation errors appear
                      visually adjacent to form fields but are not linked using <code>aria-describedby</code>. When a
                      field fails validation, VoiceOver announces the field label without the error message. A screen
                      reader user completing the appointment booking form cannot determine what went wrong or how to
                      correct it without navigating away from the field.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add <code>aria-describedby</code> to
                      each input that points to the <code>id</code> of its error message element. Conditionally render
                      the error element in the DOM only when the error is active &mdash; do not use CSS visibility
                      toggling, which leaves hidden elements in the accessibility tree.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-02</span>
                  <h4 id="acc-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Modal
                    dialogs do not trap focus or restore focus on close</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>ConfirmDialog</code>,
                      <code>AppointmentCancelModal</code> &mdash; global
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">When a modal opens, keyboard focus
                      remains in the document behind it. A keyboard user tabbing through the interface after a modal
                      opens will reach interactive elements in the background rather than elements inside the modal.
                      When a modal closes, focus is not returned to the element that triggered it. This fails WCAG 2.1
                      Success Criteria 2.1.2 (No Keyboard Trap) and 2.4.3 (Focus Order).</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Implement a focus trap on modal open
                      using a library such as <code>focus-trap-react</code>, or write a custom implementation that
                      constrains Tab and Shift+Tab within the modal container. On modal close, use a ref to return focus
                      to the triggering element.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-03-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-03</span>
                  <h4 id="acc-03-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Appointment status badges fail color contrast requirements</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>AppointmentCard</code> &mdash;
                      <code>/appointments/upcoming</code>, <code>/appointments/history</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The Confirmed status badge uses white
                      text (<code>#FFFFFF</code>) on a green background (<code>#4ADE80</code>). The measured contrast
                      ratio is 2.3:1, below the WCAG 2.1 Level AA minimum of 4.5:1 for normal text. The Cancelled badge
                      (white on <code>#F87171</code>) measures 3.1:1. Both fail.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Update the Confirmed badge to use
                      <code>#166534</code> text on a <code>#DCFCE7</code> background (contrast 7.2:1). Update the
                      Cancelled badge to use <code>#991B1B</code> text on <code>#FEE2E2</code> (contrast 6.9:1). Update
                      the corresponding token values in the feedback color palette.
                    </dd>
                  </div>
                </dl>
              </article>

            </div>
          </div>

          <!-- 3b — Component consistency -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3b &mdash; Component consistency
            </h3>
            <div class="space-y-4">

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="con-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-01</span>
                  <h4 id="con-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Button component has four divergent implementations across product teams</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Primary button &mdash; <code>/appointments</code>,
                      <code>/messaging</code>, <code>/account</code>, <code>/billing</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The primary button exists in four
                      versions across the product. Font weight varies between 500 and 700. Padding is inconsistent
                      across the four areas. Border radius is 4px in three areas and 6px in billing. None of these match
                      the Figma specification.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Audit all Button usages across the
                      four product areas. Replace non-library instances with the canonical Button component from the
                      design system package. Update the Figma component to match the coded specification before handoff
                      on any future work.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="con-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-02</span>
                  <h4 id="con-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Dropdown menu animation timing is inconsistent</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>NavigationDropdown</code>,
                      <code>FilterDropdown</code>, <code>UserMenu</code> &mdash; global header,
                      <code>/appointments</code>, top nav
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Three dropdown implementations use
                      different transition durations: 150ms, 250ms, and no transition. The discrepancy is noticeable
                      when using the application.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Define a
                      <code>transition-duration-fast</code> token (150ms) and apply it to all dropdown open and close
                      transitions. Add a motion usage note to the design system documentation.
                    </dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="con-03-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-03</span>
                  <h4 id="con-03-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Loading state is handled with three different patterns</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>AppointmentList</code>,
                      <code>LabResultsTable</code>, <code>MessagesInbox</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Appointments use a skeleton screen.
                      Lab results use a spinner. Messages use a full-page loading overlay. No documented pattern
                      explains when to use each approach and no shared loading component exists.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Define a loading pattern policy:
                      skeleton screens for content-heavy lists, spinners for single-component fetches, overlays only for
                      blocking operations. Create shared <code>Skeleton</code> and <code>Spinner</code> components.
                      Replace divergent implementations.</dd>
                  </div>
                </dl>
              </article>

            </div>
          </div>

          <!-- 3c — Design tokens -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3c &mdash; Design tokens
            </h3>
            <div class="space-y-4">

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="tok-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">TOK-01</span>
                  <h4 id="tok-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Approximately 40 percent of components reference hard-coded color values</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Multiple components &mdash; component source</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">A grep of the component source found
                      hard-coded colors in 14 of 35 components reviewed. The most common cases are border colors
                      (<code>#E5E7EB</code>), disabled state backgrounds (<code>#F3F4F6</code>), and shadow values. The
                      token system defines equivalents for all of these but they are not consistently used.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add a linter rule (for example,
                      <code>stylelint-no-hard-coded-colors</code>) to flag raw values. Replace each instance with the
                      appropriate token reference. Add the rule to CI to prevent regression.
                    </dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
                aria-labelledby="tok-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">TOK-02</span>
                  <h4 id="tok-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Spacing tokens are defined but not applied in component source</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">All components &mdash; component source</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The token system defines a spacing
                      scale but components apply margin and padding using arbitrary pixel values rather than token
                      references. The scale is used correctly in Figma but was not adopted in the coded implementation.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Audit component spacing values and
                      map each to the nearest token on the scale. Begin with the most frequently used components.
                      Enforce token use for spacing in new components via a linter rule.</dd>
                  </div>
                </dl>
              </article>

            </div>
          </div>

          <!-- 3d — Documentation -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3d &mdash; Documentation
            </h3>
            <div class="space-y-4">

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
                aria-labelledby="doc-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">DOC-01</span>
                  <h4 id="doc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                    documented guidance on when to use Modal vs. Drawer vs. inline expansion</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Design system documentation &mdash; pattern library
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The system includes a Modal, a
                      Drawer, and several components that expand inline. No documentation explains when to use each.
                      Product teams have applied them inconsistently as a result.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Write a pattern decision guide
                      covering the use case for each, recommended content types, and product examples. Publish it in
                      Storybook under a Patterns section.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
                aria-labelledby="doc-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">DOC-02</span>
                  <h4 id="doc-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    FormField component does not document accessibility requirements for implementers</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>FormField</code> &mdash; Storybook docs tab
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Storybook documents the visual
                      variants but does not explain that error elements must be rendered in the DOM (not toggled with
                      CSS) for screen readers to announce them, or that <code>aria-describedby</code> must link the
                      input to the error element.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add an Accessibility tab to the
                      FormField Storybook story that explains the <code>aria-describedby</code> pattern, documents the
                      DOM requirement for error elements, and includes a correct code example.</dd>
                  </div>
                </dl>
              </article>

            </div>
          </div>

          <!-- 3e — Handoff process -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3e &mdash; Handoff process
            </h3>
            <div class="space-y-4">

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="hnd-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-01</span>
                  <h4 id="hnd-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Figma
                    local styles use presentation names that do not match coded token names</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Figma library &mdash; local styles panel</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Figma local styles are named by
                      appearance (<code>Blue 500</code>, <code>Red 400</code>) while the coded token system uses
                      semantic names (<code>color.brand.primary</code>, <code>color.feedback.error</code>). Designers
                      and developers do not share a common vocabulary for design decisions. Every handoff requires
                      manual translation.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Rename Figma local styles to match
                      the semantic token names in code. Alternatively, migrate from local styles to Figma Variables with
                      a two-tier structure: primitive collections (raw values) and semantic collections (role-based
                      references). Align variable names exactly with the coded token names.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
                aria-labelledby="hnd-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-02</span>
                  <h4 id="hnd-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                    documented process for proposing or reviewing new components</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>github.com/lumenhealth/design-system</code>
                      &mdash;
                      repository root</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">There is no
                      <code>CONTRIBUTING.md</code>, RFC template, or equivalent process for proposing new components.
                      This is a primary structural cause of the three loading state patterns found in CON-03 &mdash;
                      developers built new components because there was no process for discovering or contributing to
                      existing ones.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Write a contribution guide covering
                      how to propose a new component, the review and approval process, accessibility requirements for
                      acceptance, and how to deprecate a component with a migration path.</dd>
                  </div>
                </dl>
              </article>

            </div>
          </div>

        </div>
      </section>

      <!-- 4. Remediation roadmap -->
      <section aria-labelledby="s4-title">
        <h2 id="s4-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          4. Remediation roadmap
        </h2>
        <div class="overflow-x-auto rounded-xl border border-neutral-200">
          <table class="w-full text-sm">
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
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Form validation errors not linked via aria-describedby
                </td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Modal dialogs do not trap or restore focus</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-03</td>
                <td class="px-4 py-3 text-body text-neutral-700">Appointment status badge contrast fails WCAG 2.1 AA
                </td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">TOK-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Approximately 40% of components use hard-coded color
                  values</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Button has four divergent implementations</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Figma style names do not match coded token names</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Dropdown animation timing inconsistent</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-03</td>
                <td class="px-4 py-3 text-body text-neutral-700">Three different loading state patterns in use</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">TOK-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Spacing tokens defined but not applied in source</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">DOC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">No pattern guidance for overlay components</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">DOC-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">FormField does not document accessibility requirements
                </td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">No contribution or component proposal process</td>
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
                  class="font-semibold text-neutral-700 w-28 shrink-0">Figma</span><span class="text-neutral-600">Lumen
                  Health DS (shared library) + Product file &mdash; Patient Portal</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Repository</span><span
                  class="text-neutral-600">g<code>ithub.com/lumenhealth/design-system</code> &mdash;
                  <code>/src/components</code></span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Storybook</span><span
                  class="text-neutral-600">ds.lumenhealth.com</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">Live
                  product</span><span class="text-neutral-600">app.lumenhealth.com (staging)</span></li>
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
          <div class="rounded-xl p-5 bg-amber-50 border border-amber-200" role="note">
            <p class="text-body text-sm font-semibold text-amber-900 mb-2">Note on healthcare accessibility risk</p>
            <p class="text-body text-sm text-amber-800 leading-relaxed">WCAG 2.1 Level AA compliance is increasingly
              required under the Americans with Disabilities Act for healthcare providers. The three High accessibility
              findings &mdash; particularly ACC-01 and ACC-02 &mdash; directly affect a patient's ability to complete
              core tasks in the portal. These should be treated as legal risk items, not routine polish.</p>
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
