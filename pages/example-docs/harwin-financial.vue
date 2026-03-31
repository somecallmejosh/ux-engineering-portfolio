<script setup lang="ts">
useSeoMeta({
  title: 'Harwin Financial — Design System Audit | Example Report',
  description: 'A severe-findings example audit report from Briley Creative. Nineteen findings including three Critical accessibility issues requiring immediate action.',
})
</script>

<template>
  <div class="space-y-6 pb-16">

    <!-- Cover -->
    <header class="rounded-2xl bg-neutral-50 border border-neutral-200 px-8 py-10 lg:px-12 lg:py-14">
      <p class="text-body text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-8">
        Briley Creative LLC &mdash; Example Audit Report
      </p>
      <h1 class="text-4xl lg:text-5xl text-neutral-900 mb-3">Harwin Financial</h1>
      <p class="text-body text-lg text-neutral-600 mb-10">Design System Audit &mdash; Severe findings scenario</p>
      <dl class="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 border-t border-neutral-200 pt-8">
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Client</dt>
          <dd class="text-body text-sm text-neutral-800">Harwin Financial Services</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Product</dt>
          <dd class="text-body text-sm text-neutral-800">Harwin Advisor Portal</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Audit dates</dt>
          <dd class="text-body text-sm text-neutral-800">March 2&ndash;6, 2026</dd>
        </div>
        <div>
          <dt class="text-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Report date</dt>
          <dd class="text-body text-sm text-neutral-800">March 11, 2026</dd>
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
    <div class="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 rounded-xl bg-red-50 border border-red-200"
      role="region" aria-label="Finding severity summary">
      <span class="text-body text-sm font-semibold text-red-800">3 Critical findings</span>
      <div class="flex flex-wrap gap-2">
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700">3
          Critical</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">6
          High</span>
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">7
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
        <div class="rounded-xl p-5 bg-red-50 border border-red-200 mb-6" role="alert">
          <p class="text-body text-sm font-semibold text-red-900 mb-2">Immediate action required</p>
          <p class="text-body text-sm text-red-800 leading-relaxed">Three Critical findings require resolution before
            the next production release. Two block keyboard users from completing core advisor tasks. The third makes
            the session timeout warning invisible to screen reader users in a financial application.</p>
        </div>
        <div class="space-y-4 text-body text-neutral-700 leading-relaxed mb-6">
          <p>Harwin's Advisor Portal design system is under significant structural stress. What began as a shared
            component library has fragmented into at least three parallel implementations maintained by separate teams,
            with no central governance or token system. The result is a product that is visually inconsistent, partially
            inaccessible, and increasingly difficult to maintain.</p>
          <p>The system is not a candidate for targeted remediation alone. The token architecture does not exist in any
            meaningful sense; components use hard-coded values almost exclusively. A remediation plan that
            addresses individual findings without also establishing a token foundation and governance process will
            produce the same fragmentation in twelve months.</p>
        </div>
        <dl
          class="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200 rounded-xl overflow-hidden border border-neutral-200">
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Critical</dt>
            <dd class="text-3xl font-bold tabular-nums text-red-600">3</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">High</dt>
            <dd class="text-3xl font-bold tabular-nums text-orange-600">6</dd>
          </div>
          <div class="flex flex-col items-center py-5 bg-white">
            <dt class="text-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Medium</dt>
            <dd class="text-3xl font-bold tabular-nums text-amber-600">7</dd>
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
            <p class="text-body text-neutral-700 leading-relaxed">The core Button component in the primary design system
              package (ds-core) is well-implemented, accessible, and consistent between Figma and code. It is one of the
              few components that has not been duplicated in the parallel implementations.</p>
          </li>
          <li class="flex gap-3">
            <span class="text-emerald-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
            <p class="text-body text-neutral-700 leading-relaxed">The Figma library maintained by the design team is
              internally consistent and would serve as a reliable source of truth for a future token extraction effort.
              The structure is sound even if the coded implementation has diverged from it.</p>
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

              <!-- ACC-01 Critical -->
              <article class="rounded-xl border border-red-200 border-l-4 border-l-red-600 overflow-hidden"
                aria-labelledby="acc-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-red-50 border-b border-red-100">
                  <span
                    class="font-mono text-xs font-medium text-red-700 bg-white border border-red-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-01</span>
                  <h4 id="acc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Custom data grid is not keyboard accessible and has no ARIA semantics</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700 shrink-0">Critical</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>AdvisorGrid</code> &mdash;
                      <code>/portfolio</code>, <code>/clients</code>, <code>/transactions</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The AdvisorGrid is a custom-built
                      table used on every major page of the application. It is implemented as a series of
                      <code>div</code> elements with no ARIA roles. It cannot be navigated by keyboard. Tab skips over
                      the grid entirely &mdash; keyboard users cannot access any data within it. Screen readers announce
                      the grid as an undifferentiated block of text. This fails WCAG 2.1 Success Criteria 1.3.1, 2.1.1,
                      and 4.1.2.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Rebuild AdvisorGrid with proper table
                      semantics using <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>,
                      <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th scope="col"&gt;</code>, and
                      <code>&lt;td&gt;</code> elements, or implement the ARIA grid pattern if a native table cannot be
                      used. Add full keyboard interaction: arrow key navigation, Tab to move focus in and out, Enter or
                      Space to activate interactive cells. Schedule a spike to estimate the effort before committing to
                      a sprint.
                    </dd>
                  </div>
                </dl>
              </article>

              <!-- ACC-02 Critical -->
              <article class="rounded-xl border border-red-200 border-l-4 border-l-red-600 overflow-hidden"
                aria-labelledby="acc-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-red-50 border-b border-red-100">
                  <span
                    class="font-mono text-xs font-medium text-red-700 bg-white border border-red-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-02</span>
                  <h4 id="acc-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Date
                    picker is mouse-only; keyboard users cannot select a date</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700 shrink-0">Critical</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>DatePickerInput</code> &mdash;
                      <code>/reports/generate</code>, <code>/transactions/filter</code>, <code>/clients/add</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The DatePickerInput opens a calendar
                      popover on click but the calendar is not keyboard operable. Pressing Enter or Space on the input
                      field does not open the popover. Arrow keys do not navigate between dates. There is no way to
                      close the popover with Escape. This blocks keyboard users from generating reports and filtering
                      transactions &mdash; both core advisor tasks.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Replace the current implementation
                      with an accessible alternative such as the React Aria <code>useDatePicker</code> hook or
                      <code>react-day-picker</code> with appropriate ARIA attributes. Do not patch the current
                      implementation. The interaction model must be rebuilt from the keyboard up.
                    </dd>
                  </div>
                </dl>
              </article>

              <!-- ACC-03 Critical -->
              <article class="rounded-xl border border-red-200 border-l-4 border-l-red-600 overflow-hidden"
                aria-labelledby="acc-03-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-red-50 border-b border-red-100">
                  <span
                    class="font-mono text-xs font-medium text-red-700 bg-white border border-red-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-03</span>
                  <h4 id="acc-03-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Session timeout warning dialog is not announced to screen reader users</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700 shrink-0">Critical</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>SessionTimeoutModal</code> &mdash; global</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The session timeout warning appears
                      after 14 minutes of inactivity and gives users 60 seconds to extend their session. The modal has
                      no <code>role="dialog"</code>, no <code>aria-modal="true"</code>, and no
                      <code>aria-labelledby</code>. A screen reader user will be logged out without warning. In a
                      financial application, an unexpected logout mid-task can result in unsaved client data loss.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Add <code>role="dialog"</code>,
                      <code>aria-modal="true"</code>, and <code>aria-labelledby</code> pointing to the modal heading.
                      Add <code>aria-live="assertive"</code> to the countdown timer element. Implement focus trapping
                      within the modal. On open, move focus to the modal heading or the primary action button. Test with
                      VoiceOver in both Chrome and Safari.
                    </dd>
                  </div>
                </dl>
              </article>

              <!-- ACC-04 High -->
              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-04-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-04</span>
                  <h4 id="acc-04-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">All
                    form error messages lack programmatic association with their fields</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">All forms &mdash; <code>/clients/add</code>,
                      <code>/transactions/new</code>, <code>/reports/generate</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Form validation errors appear
                      visually but are not associated with their fields via <code>aria-describedby</code>. This affects
                      every form in the application. VoiceOver users completing any form cannot hear error messages when
                      navigating between fields.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Implement a shared
                      <code>FormField</code> component with built-in <code>aria-describedby</code> wiring. The error
                      element must be present in the DOM when active. Migrate all existing forms to use the shared
                      component.
                    </dd>
                  </div>
                </dl>
              </article>

              <!-- ACC-05 High -->
              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-05-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-05</span>
                  <h4 id="acc-05-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Navigation sidebar active state and badge counts fail contrast requirements</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>AppSidebar</code>,
                      <code>NotificationBadge</code> &mdash; global
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The active sidebar item uses white
                      text on <code>#3B82F6</code> at a contrast ratio of 3.1:1. Notification badges use white on
                      <code>#EF4444</code> at 3.6:1. Both fail the WCAG 2.1 Level AA minimum of 4.5:1 for normal text.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Update the active sidebar background
                      to <code>#1D4ED8</code> (contrast 5.2:1 with white). Update the notification badge to
                      <code>#B91C1C</code> (contrast 5.8:1). Define both as semantic tokens.
                    </dd>
                  </div>
                </dl>
              </article>

              <!-- ACC-06 High -->
              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="acc-06-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">ACC-06</span>
                  <h4 id="acc-06-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Focus
                    indicators are absent in Firefox and Edge</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">All interactive elements &mdash; global stylesheet
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">The global stylesheet includes
                      <code>:focus { outline: none; }</code> with no replacement focus style. Firefox and Edge respect
                      the rule fully and render no focus indicator on any interactive element. Keyboard users in these
                      browsers cannot determine where focus is.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Remove the global
                      <code>outline: none</code> rule. Replace with a custom <code>:focus-visible</code> style &mdash;
                      for example, <code>outline: 2px solid #1A3A5C; outline-offset: 2px;</code>. Test in Chrome,
                      Firefox, and Edge. Apply the focus style as a design token.
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

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="con-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-01</span>
                  <h4 id="con-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Three
                    parallel component implementations exist with no shared foundation</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>ds-core</code>, <code>ds-advisor</code>,
                      <code>ds-legacy</code> &mdash; <code>github.com/harwin</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Three separate component packages
                      exist in the repository. Components are duplicated across all three. Button alone has three
                      implementations with different props interfaces. There is no shared token system between them.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Establish a single canonical package.
                      Identify the most complete and accessible implementation of each component and treat it as the
                      source of record. Deprecate the others with a clear migration timeline. Schedule a consolidation
                      spike before the next quarter's planning.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="con-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-02</span>
                  <h4 id="con-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Typography scale is inconsistent across the three packages</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>Heading</code>, <code>BodyText</code>,
                      <code>Label</code> &mdash; all three packages
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed"><code>ds-core</code> uses a 4-step
                      scale. <code>ds-advisor</code> uses a 5-step scale. <code>ds-legacy</code> uses arbitrary sizes
                      not tied to a scale. The live product reflects all three, resulting in visible typographic
                      inconsistency between sections.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Define a single type scale as part of
                      the token consolidation work. The Figma design team's scale (12/14/16/20/24/32px) is the closest
                      to a coherent system and should be used as the reference.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="con-03-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">CON-03</span>
                  <h4 id="con-03-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Button disabled state is implemented differently across all three packages</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Button &mdash; <code>ds-core</code>,
                      <code>ds-advisor</code>, <code>ds-legacy</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed"><code>ds-core</code> uses
                      <code>opacity: 0.5</code> with the disabled HTML attribute. <code>ds-advisor</code> uses a custom
                      disabled class with no HTML disabled attribute &mdash; keyboard users can still activate the
                      button. <code>ds-legacy</code> uses only <code>pointer-events: none</code> with no visual or
                      semantic indication of disabled state.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Standardize on the
                      <code>ds-core</code> approach as part of the package consolidation: apply the HTML
                      <code>disabled</code> attribute to native buttons, use <code>aria-disabled="true"</code> for
                      non-native interactive elements, and pair with consistent visual treatment.
                    </dd>
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

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="tok-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">TOK-01</span>
                  <h4 id="tok-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                    token system exists; all three packages use hard-coded values throughout</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">All component source &mdash; <code>ds-core</code>,
                      <code>ds-advisor</code>, <code>ds-legacy</code>
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">No token definition file exists
                      across any package. Every color, spacing value, border radius, and shadow is hard-coded directly
                      in component styles. Changing the primary brand color would require manual updates across an
                      estimated 80 to 100 component files.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Establish a token system before
                      addressing individual component findings. Extract the Figma design team's local styles into a
                      Style Dictionary configuration. Generate CSS custom properties as the primary output. Migrate
                      components incrementally, starting with Button, Input, and Card as a proof of concept.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
                aria-labelledby="tok-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">TOK-02</span>
                  <h4 id="tok-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">Figma
                    local styles are not structured as a token hierarchy</h4>
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
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Figma local styles use flat,
                      presentation-named styles (<code>Blue 500</code>, <code>Gray 200</code>, <code>Red 400</code>)
                      rather than a semantic token hierarchy. This makes it difficult to extract a token system from
                      Figma or to change the brand without manually re-mapping every style.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Restructure Figma local styles into a
                      two-tier token hierarchy: primitive tokens (raw values) and semantic tokens (role-based
                      references). This should happen in parallel with the coded token system work in TOK-01.</dd>
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
            <article class="rounded-xl border border-neutral-200 border-l-4 border-l-amber-400 overflow-hidden"
              aria-labelledby="doc-01-title">
              <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                <span
                  class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">DOC-01</span>
                <h4 id="doc-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                  Storybook instance exists for ds-advisor or ds-legacy</h4>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Medium</span>
              </div>
              <dl class="divide-y divide-neutral-100">
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                  </dt>
                  <dd class="text-body text-sm text-neutral-700"><code>github.com/harwin/ds-advisor</code>,
                    <code>github.com/harwin/ds-legacy</code>
                  </dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Description
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">Only <code>ds-core</code> has a
                    Storybook instance. Developers working in the other packages have no reference for available
                    components. This is a primary driver of the duplication found in this audit &mdash; developers build
                    new components because they cannot discover existing ones.</dd>
                </div>
                <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                  <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Remediation
                  </dt>
                  <dd class="text-body text-sm text-neutral-700 leading-relaxed">As part of the package consolidation in
                    CON-01, ensure the canonical package has comprehensive Storybook coverage before the deprecated
                    packages are retired. Do not invest in documenting <code>ds-advisor</code> or <code>ds-legacy</code>
                    &mdash; direct that effort toward the canonical library.</dd>
                </div>
              </dl>
            </article>
          </div>

          <!-- 3e — Handoff process -->
          <div>
            <h3 class="text-body text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
              3e &mdash; Handoff process
            </h3>
            <div class="space-y-4">

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="hnd-01-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-01</span>
                  <h4 id="hnd-01-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                    identifiable system owner across any of the three packages</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>github.com/harwin</code> &mdash; all three
                      repositories
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">No individual or team is identified
                      as responsible for maintaining or governing the design system across any of the three packages.
                      Decisions about deprecation, versioning, and new component acceptance default to informal
                      consensus. The three-package fragmentation found in CON-01 is a direct consequence of this
                      governance gap: the <code>ds-advisor</code> fork was created without a review or approval
                      process because no such process existed.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Designate a named owner for the
                      canonical package before the consolidation work begins. Define what ownership means: who approves
                      new components, who manages the deprecation timeline, and who is responsible for the changelog.
                      Document this in a <code>CODEOWNERS</code> file and in the repository <code>README</code>.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-orange-200 border-l-4 border-l-orange-500 overflow-hidden"
                aria-labelledby="hnd-02-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-orange-50 border-b border-orange-100">
                  <span
                    class="font-mono text-xs font-medium text-orange-700 bg-white border border-orange-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-02</span>
                  <h4 id="hnd-02-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">
                    Design files contain heavily detached Figma components across all product areas</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200 shrink-0">High</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700">Figma &mdash; Advisor Portal product file, all pages
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">A review of the Advisor Portal Figma
                      product file found that a significant majority of component instances across client, transaction,
                      and reporting pages are detached from the shared library. Detached components do not update when
                      the library updates, cannot be inspected for token names, and cannot be relied upon as
                      specifications during development handoff. Developers cannot trust the Figma files as an accurate
                      representation of how a component should behave.</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Audit all Figma product file pages
                      for detached instances using the Figma plugin Detach Radar or equivalent. Prioritize reattachment
                      on the highest-traffic pages first. Add a pre-handoff checklist item requiring designers to verify
                      zero detached instances before marking any spec as ready for development.</dd>
                  </div>
                </dl>
              </article>

              <article class="rounded-xl border border-neutral-200 border-l-4 border-l-neutral-300 overflow-hidden"
                aria-labelledby="hnd-03-title">
                <div class="flex flex-wrap items-start gap-3 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                  <span
                    class="font-mono text-xs font-medium text-neutral-500 bg-white border border-neutral-200 rounded px-2 py-0.5 shrink-0 mt-0.5">HND-03</span>
                  <h4 id="hnd-03-title" class="flex-1 text-base font-medium text-neutral-900 leading-snug min-w-0">No
                    contribution guidelines exist across any of the three packages</h4>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">Low</span>
                </div>
                <dl class="divide-y divide-neutral-100">
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">Location
                    </dt>
                    <dd class="text-body text-sm text-neutral-700"><code>github.com/harwin</code> &mdash; all three
                      repos</dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Description</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">None of the three packages has a
                      <code>CONTRIBUTING.md</code> or equivalent. There is no documented process for proposing new
                      components, reviewing additions, or deprecating existing ones. The absence of a contribution
                      process is one of the structural reasons the three-package situation developed.
                    </dd>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4">
                    <dt class="text-body text-sm font-semibold text-neutral-500 sm:w-28 sm:shrink-0 sm:pt-0.5">
                      Remediation</dt>
                    <dd class="text-body text-sm text-neutral-700 leading-relaxed">Write a contribution guide for the
                      canonical package covering: how to propose a new component, the review and approval process,
                      accessibility requirements for acceptance, and how to deprecate a component with a migration path.
                    </dd>
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
                  class="text-body px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide w-40">
                  Timeline</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-100">
              <tr class="bg-red-50/40">
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700">Critical</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Data grid has no keyboard access or ARIA semantics</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Before next release</td>
              </tr>
              <tr class="bg-red-50/40">
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700">Critical</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Date picker is mouse-only</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Before next release</td>
              </tr>
              <tr class="bg-red-50/40">
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-700">Critical</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-03</td>
                <td class="px-4 py-3 text-body text-neutral-700">Session timeout not announced to screen readers</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Before next release</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">TOK-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">No token system &mdash; all values are hard-coded</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-04</td>
                <td class="px-4 py-3 text-body text-neutral-700">All form errors lack aria-describedby association</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-05</td>
                <td class="px-4 py-3 text-body text-neutral-700">Sidebar and badge contrast fails WCAG 2.1 AA</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">ACC-06</td>
                <td class="px-4 py-3 text-body text-neutral-700">Focus indicators absent in Firefox and Edge</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">Three parallel packages with no shared foundation</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint (spike)</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">No identifiable system owner</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">High</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Figma product files heavily detached from library</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Current sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">TOK-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Figma local styles not structured as a token hierarchy
                </td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next sprint</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-02</td>
                <td class="px-4 py-3 text-body text-neutral-700">Typography scale inconsistent across packages</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">CON-03</td>
                <td class="px-4 py-3 text-body text-neutral-700">Button disabled state differs across all three packages
                </td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">Medium</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">DOC-01</td>
                <td class="px-4 py-3 text-body text-neutral-700">No Storybook for ds-advisor or ds-legacy</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Next 1&ndash;2 sprints</td>
              </tr>
              <tr>
                <td class="px-4 py-3"><span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">Low</span>
                </td>
                <td class="px-4 py-3 font-mono text-xs text-neutral-500">HND-03</td>
                <td class="px-4 py-3 text-body text-neutral-700">No contribution guidelines across any package</td>
                <td class="px-4 py-3 text-body text-xs text-neutral-500">Backlog</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Recommended next steps -->
      <section aria-labelledby="s5-title">
        <h2 id="s5-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          5. Recommended next steps
        </h2>
        <p class="text-body text-neutral-700 leading-relaxed mb-6">The volume and severity of findings in this report
          reflect systemic problems, not isolated component issues. Addressing individual findings without resolving the
          structural causes will produce diminishing returns. I recommend a follow-on stabilization engagement
          structured in three phases:</p>
        <ol class="space-y-4 mb-6" role="list">
          <li class="flex gap-4">
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold text-body"
              aria-hidden="true">1</span>
            <div>
              <p class="text-body font-semibold text-neutral-900 mb-1">Phase 1 &mdash; Critical accessibility
                remediation <span class="font-normal text-neutral-500">(2 weeks)</span></p>
              <p class="text-body text-sm text-neutral-600 leading-relaxed">Address ACC-01 through ACC-06. These are the
                legal and user-impact risk items that cannot wait for structural work to complete.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold text-body"
              aria-hidden="true">2</span>
            <div>
              <p class="text-body font-semibold text-neutral-900 mb-1">Phase 2 &mdash; Token foundation and package
                consolidation <span class="font-normal text-neutral-500">(4&ndash;6 weeks)</span></p>
              <p class="text-body text-sm text-neutral-600 leading-relaxed">Establish the token system, consolidate the
                three packages into one canonical library, and migrate the highest-traffic components first.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span
              class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold text-body"
              aria-hidden="true">3</span>
            <div>
              <p class="text-body font-semibold text-neutral-900 mb-1">Phase 3 &mdash; Consistency and documentation
                <span class="font-normal text-neutral-500">(ongoing)</span>
              </p>
              <p class="text-body text-sm text-neutral-600 leading-relaxed">Address remaining Medium and Low findings,
                establish contribution guidelines, and implement linter rules that prevent regression.</p>
            </div>
          </li>
        </ol>
        <div class="rounded-xl p-5 bg-blue-50 border border-blue-200" role="note">
          <p class="text-body text-sm font-semibold text-blue-900 mb-2">Retainer option</p>
          <p class="text-body text-sm text-blue-800 leading-relaxed">A monthly retainer for design system oversight may
            be more cost-effective than a series of individual engagements. This would include accessibility review of
            new components before they ship, quarterly token and consistency checks, and ad hoc guidance for the
            internal team.</p>
        </div>
      </section>

      <!-- 6. Scope and methodology -->
      <section aria-labelledby="s6-title">
        <h2 id="s6-title" class="text-2xl text-neutral-950 mb-5 pb-3 border-b border-neutral-100">
          6. Scope and methodology
        </h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-body text-sm font-semibold text-neutral-700 mb-3">Inputs reviewed</h3>
            <ul class="space-y-2" role="list">
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Figma</span><span class="text-neutral-600">Harwin
                  DS (shared library) + Advisor Portal product file</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Repositories</span><span
                  class="text-neutral-600"><code>github.com/harwin/ds-core</code>, <code>/ds-advisor</code>,
                  <code>/ds-legacy</code></span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Storybook</span><span
                  class="text-neutral-600">storybook.harwin.internal (ds-core only)</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">Live
                  product</span><span class="text-neutral-600">advisor.harwin.com (staging)</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-body text-sm font-semibold text-neutral-700 mb-3">Accessibility testing tools and browsers
            </h3>
            <ul class="space-y-2" role="list">
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">axe
                  DevTools</span><span class="text-neutral-600">Chrome, Firefox, Edge</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">axe
                  Linter</span><span class="text-neutral-600">ds-core and ds-advisor source</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">VoiceOver</span><span
                  class="text-neutral-600">macOS, Chrome and Safari</span></li>
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">Keyboard nav</span><span
                  class="text-neutral-600">Chrome, Firefox, Edge</span></li>
            </ul>
          </div>
          <div>
            <h3 class="text-body text-sm font-semibold text-neutral-700 mb-3">What was not reviewed</h3>
            <ul class="space-y-2" role="list">
              <li class="flex gap-3 text-body text-sm"><span
                  class="font-semibold text-neutral-700 w-28 shrink-0">ds-legacy</span><span
                  class="text-neutral-600">Inventoried but not fully audited. Components being deprecated as part of
                  CON-01 do not require individual remediation.</span></li>
              <li class="flex gap-3 text-body text-sm"><span class="font-semibold text-neutral-700 w-28 shrink-0">Mobile
                  app</span><span class="text-neutral-600">Out of scope for this engagement.</span></li>
            </ul>
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
