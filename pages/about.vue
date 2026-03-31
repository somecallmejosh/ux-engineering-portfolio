<script setup lang="ts">
const title = "About Josh Briley | Design Systems Engineer & Frontend Consultant"
const description = "20 years of experience building component libraries and design systems for product teams at Travelers, Berkshire Hathaway Specialty Insurance, and America's Test Kitchen."
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp'
})
</script>

<template>
  <PageWrapper>
    <section class="prose">
      <NuxtImg src="/images/josh-biz-cazsh.jpg" alt="Joshua Briley, UX Engineer" height="300" width="300"
        class="w-full h-auto lg:w-48 lg:h-48 rounded-2xl lg:rounded-full lg:mx-auto mb-6 lg:float-right lg:ml-12 lg:mb-0 object-cover object-top" />

      <PageHero :content="{
        title: 'About Joshua Briley',
        description: 'I\'ve been building user interfaces for 20 years. That\'s long enough to have strong opinions about what makes a component library actually work, what makes one fail quietly, and why the same problems keep appearing in design systems regardless of how much the tooling has changed.'
      }" />
      <p>
        I spent most of that time in the space where design and engineering meet, not fully in either camp, but
        responsible to both. At Berkshire Hathaway Specialty Insurance, I built a component library using Vue.js and
        Nuxt.js from the ground up, establishing front-end standards across an enterprise product. At America's Test
        Kitchen, I built a shared component system in React and Next.js that served multiple editorial brands from a
        single architectural foundation. At Travelers, I build and maintain an accessible component library that powers
        applications used across the US and UK.
      </p>

      <p>
        The thread running through all of it is the same: how do you build a system that makes the right output the
        natural result of using it, rather than the result of individual developers making the right decisions at the
        right time?
      </p>

      <p>
        That's the question design systems are supposed to answer. Most of them don't answer it completely, not because
        the people building them aren't capable, but because the structural decisions that determine a library's
        long-term
        maintainability are easy to defer and expensive to reverse.
      </p>

      <h2>What 20 years actually teaches you</h2>

      <p>Early in my career, I learned to build things. That part is foundational.</p>

      <p>
        What took longer to learn was how to see a system clearly: to distinguish between a library that works because
        the people on the team know its quirks, and a library that works because it's structured to produce consistent
        output regardless of who's using it. Those two things look similar from the outside until the team changes, the
        product scales, or an accessibility audit arrives.
      </p>

      <p>
        I've worked in both kinds of systems. I've built both kinds of systems, in the early years. The experience of
        inheriting a brittle foundation and spending months working around it rather than building on it is a
        significant
        part of why I work the way I do now.
      </p>

      <p>
        The other thing that accumulates over 20 years is pattern recognition. When a team tells me they keep having
        the same handoff conversation every sprint, I know what to look for in the Figma file. When a design system
        audit
        finds accessibility violations scattered across an otherwise functional library, I know which architectural
        conditions produce them. When a component library is being worked around rather than used, I can usually
        identify
        whether the problem is in the API design, the token architecture, the documentation, or the governance model,
        before reading a line of code.
      </p>

      <p>
        That pattern recognition is what a consultant brings that a new hire doesn't. Not just the ability to do the
        work,
        but the ability to identify quickly which work matters.
      </p>

      <h2>How I approach the work</h2>

      <p>
        I don't treat accessibility as a compliance requirement. I treat it as an architectural constraint, one that
        shapes component API design, token structure, and documentation from the start rather than being addressed in
        remediation after the fact. The distinction matters because accessibility built into the component layer is
        structural and durable. Accessibility added as a retrofit is fragile and expensive.
      </p>

      <p>
        I don't treat documentation as a deliverable that happens at the end of a project. A component that isn't
        documented accurately isn't fully built. Documentation that describes the component as it was intended to work
        rather than how it actually behaves is worse than no documentation, because it produces incorrect
        implementations
        with confidence.
      </p>

      <p>
        I'm direct about what I find. If an audit surfaces problems that are more significant than expected, I say so
        and
        explain why. If a team is considering a rebuild when targeted remediation would accomplish the same thing, I'll
        make that case. The goal is for you to have an accurate picture of your system and a clear path forward, not a
        report that validates decisions already made.
      </p>

      <h2>Staying current as a professional discipline</h2>

      <p>
        The front-end landscape changes faster than any individual can fully track. Frameworks cycle. Build tools
        evolve.
        Specifications that were drafts when I first read them are now the baseline.
      </p>

      <p>
        What I've found is that staying current requires treating it as a discipline rather than a side effect of doing
        the work. I follow the specifications that matter (the WAI-ARIA authoring practices, the Design Tokens
        Community
        Group format, the CSS working group drafts) rather than just the frameworks that implement them. When you
        understand the underlying standards, framework changes are context rather than disruption.
      </p>

      <p>
        I also build things for myself. Rudiment UI, my open-source component library, exists partly as a reference
        implementation and partly as a place to work through architectural decisions without the constraints of a client
        engagement. Building something you intend to publish forces a different standard of care than building something
        for internal use.
      </p>

      <h2>Working together</h2>

      <p>
        I take a limited number of consulting engagements at a time. That's not a scarcity tactic. It's the practical
        limit of doing this work with the attention it requires.
      </p>

      <p>
        If you're trying to get a clear picture of where your design system stands before deciding what to do next, the
        <NuxtLink to="/scorecard/">Design System Scorecard</NuxtLink> covers the five dimensions that determine library
        health in about ten
        minutes. If you're ready to talk about a specific engagement, the <NuxtLink to="/services/">services page
        </NuxtLink> describes the
        three ways I work with teams, and the <NuxtLink to="/contact/">contact page</NuxtLink> is the fastest way to
        start a conversation.
      </p>

      <p>
        I respond to every message and I'm direct about whether I'm the right fit. If I'm not, I'll tell you that too.
      </p>
    </section>


    <TestimonialList class="grid lg:grid-cols-2 gap-6" />




    <CtaCallAndScoreboard />
  </PageWrapper>
</template>
