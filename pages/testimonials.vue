<script setup>
import { motion } from 'motion-v'
useSeoMeta({
  title: 'Testimonials',
  ogTitle: 'Testimonials',
  description: 'Shout outs from clients and colleagues.',
  ogDescription: 'Shout outs from clients and colleagues.',
})

const testimonials = [
  {
    name: 'Rebecca Cachia, PMP',
    title: 'Web Product & Project Manager',
    company: 'Publicis Sapient',
    linkedIn: 'https://www.linkedin.com/in/rebeccacachia?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQGvdcy0gGr4kg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1610664780867?e=1751500800&v=beta&t=X1GTQAz1lynsgqcmXyCVsTSam3iPdXCGzMRQ4kSTes0',
    testimonial: "<p>I worked with Josh at America's Test Kitchen, where I was a Product Manager and he was a Senior Software Engineer. Working with Josh was an absolute privilege and pleasure. He's an exceptional team player, whose strategic approach and focus on upstream requirement definition made our projects smoother and more efficient. His ability to foresee challenges and simplify implementation was invaluable.</p><p>Beyond his technical skills, Josh's humor and positive energy made him such fun to work with, even during the most challenging projects. He has a talent for creating seamless, user-friendly designs while ensuring performance and accessibility are top-notch.</p><p>I highly recommend Josh to any team. His blend of technical expertise and experience, strategic thinking, and collaborative spirit makes him a great asset and a super person to work with.</p>"
  },
  {
    name: 'Michael Pertiore',
    title: 'Application Architect/Developer',
    company: 'Apple',
    linkedIn: 'https://www.linkedin.com/in/mikeperitore?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHsfxkLJYugAQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517760392248?e=1751500800&v=beta&t=PZ24sc_OtlQLAgWbWpK91TavWzAsFv6WabMT9xY6TVM',
    testimonial: "<p>I've had the privilege of working with Josh for over a decade across multiple companies&mdash;America's Test Kitchen, Sports Technologies, and Logatot&mdash;and every project we've tackled together has been a masterclass in efficiency and collaboration. At America's Test Kitchen, we tag-teamed Rails projects with maximum efficiency, where his expertise on the front end perfectly complemented my backend work. He takes ownership of the UI and design details, ensuring stellar performance and accessibility while still shipping features at lightning speed.</p><p>At Sports Technologies, he was the driving force behind the front end of our Fantasy Sports games, and I handled the backend and DevOps. His ability to seamlessly integrate a highly performant, intuitive user interface made our product shine. It's also worth noting that he's never limited to just the front end&mdash;whenever there's a snag on the back end, he's always the first to jump in and help troubleshoot.</p><p>Our most recent collaboration at Logatot was no different. Together, as the only two developers, we built a large-scale Child Care Management System for home-based healthcare providers. Once again, his commitment to performance, accessibility, and overall user experience was unmatched. He tackled the front-end challenges with creativity and precision, while also lending a hand whenever I needed extra support on the Rails side.</p><p>After ten years of working side by side, I can confidently say he's the teammate you want on your roster. His blend of speed, technical skill, and willingness to collaborate and problem-solve makes him an invaluable asset to any development team.</p>"
  },
  {
    name: 'Kevin Fecteau',
    title: 'Senior Rails Developer',
    company: 'Sincere Corporation',
    linkedIn: 'https://www.linkedin.com/in/kevin-fecteau?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQG9iwxONMmZqQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729661660272?e=1746622800&v=beta&t=_IcfiZNp-32BkNnYp7JkHMUYRStPPPKIejXL_zT178I',
    testimonial: "<p>I had the absolute pleasure of working with Josh twice, once during his time at America's Test Kitchen and also at Sports Technologies. He was an irreplaceable part of both teams and brought so much expertise to the table. Josh creates truly amazing UI designs and has the passion to ensure they are not compromised. He excels at HTML, CSS and utilizes frameworks like Tailwind and Alpine.js to perfection.</p><p>On top of his technical skills, Josh is a fantastic team player. He’s approachable, collaborative, and always knows how to lighten the mood with his great sense of humor. We’ve stayed in touch since working together, which says a lot about the kind of supportive and genuine colleague he is.</p><p>I can’t recommend Josh highly enough. Any team would be lucky to have someone as talented, innovative, and all-around great as he is. He’s not just a professional asset—he’s a joy to work with!</p>"
  },
  {
    name: 'Gabriel Bressi',
    title: 'QA Lead',
    company: 'Kopius, Inc.',
    linkedIn: 'https://www.linkedin.com/in/gabriel-bressi-29804074?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQFS4QgyGpPFKQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1574426346768?e=1751500800&v=beta&t=blJ2z5S-WLqDNFn-dJJnGWo21zcB_ttYOspNivJPQR8',
    testimonial: "<p>I had the pleasure of working as a QA lead and Scrum Master alongside Josh throughout his tenure at Berxi. Josh has always communicated his daily updates efficiently, pointing out what's he working on as well as the blockers he had, if any.</p><p>Josh participated in the different Scrum ceremonies and gave constructive feedback in retrospective meetings so we could become a more efficient team. As a Scrum Master, I always appreciated his detailed explanations of the approaches he was taking and the issues he faced.</p><p>Josh used to deliver his assignments as planned, and given the good quality of his work, from time to time, he had some bandwidth to take some additional work assigned to the next Iteration, which was appreciated by the team.</p><p>I hope we get a chance to work together in the future to keep building great products.</p>"
  },
  {
    name: 'Welling LaGrone',
    title: 'Vice President',
    company: 'Triverus Consulting',
    linkedIn: 'https://www.linkedin.com/in/wlagrone?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQEhs15oherh9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516232246170?e=1751500800&v=beta&t=IccTKQoqQULlahTWIlg5tUsBhx02VxAv0v_sRxa7L7g',
    testimonial: "<p>Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. I am fortunate to have been in a position to have him join two teams that I was responsible for and would not hesitate to ask him to join another.</p>"
  },
  {
    name: 'Jack Gillete',
    title: 'Senior UX Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    linkedIn: 'https://www.linkedin.com/in/jack-gillette?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQERlbbbQyM6Zg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1640188269145?e=1751500800&v=beta&t=wBiwoFX-72MZ3Uv2hrx2Bj25l8wfb5wfl5rvfsVGrCI',
    testimonial: "<p>I was working on a team that had a lot of UI work to complete in a short amount of time, so we brought Josh in to accelerate our work, and I was tasked with overseeing him directly. Josh was able to hit the ground running and immediately start contributing to the project. After a few weeks I was able to give Josh basic requirements and he was able to take ownership of the development of a new frontend repo with very little oversight. After the main scope of that project was completed, Josh was very willing to jump in and help out wherever he could. I would definitely recommend Josh to anyone who needs an experienced and professional developer who can deliver high quality user interfaces.</p>"
  },
  {
    name: 'Hugh Ferguson',
    title: 'Developer',
    company: 'Berkshire Hathaway Specialty Insurance',
    linkedIn: 'https://www.linkedin.com/in/hughferg?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQGABPcOSGBJaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1533605973199?e=1751500800&v=beta&t=PkLq7cx9Ro4laaQwjh3tUlJ6cyIP0PbANLCbah3yVxI',
    testimonial: "<p>I worked with Josh for several years and it was always a pleasure. He owns projects and becomes a knowledge resource in any part of his projects, truly passionate and responsible towards his work. Was an authority on our front end and was able to own his domain while multiplying it with the rest of the stack. Incredibly talented at learning fast and getting tools up and running for the team. Great attitude and person to work with.</p>"
  },
  {
    name: 'Adam Czerepinksi',
    title: 'Senior Software Engineer',
    company: 'Evidation Health',
    linkedIn: 'https://www.linkedin.com/in/adamcz?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQF5KUjOKJYnIg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1652984459946?e=1751500800&v=beta&t=dHI0JhXeG1c7_G-zApqnpCfW1wnTYSV-PDhCPVWz8CQ',
    testimonial: "<p>It's been a few years since I worked with Josh, but he's still the gold standard to me for building UIs with a focus on all of the diverse users who will interact with it. Through code review and conversations, I learned a lot about semantic html, accessibility, font and image optimizations, different ways to architect a large css codebase, etc. He's the type of leader who multiplies everyone else's effectiveness.</p>"
  },
  {
    name: 'Drew DiPasquale',
    title: 'Principal Researcher',
    company: 'HubSpot',
    linkedIn: 'https://www.linkedin.com/in/drew-dipasquale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEJdKz07QneUg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1633551158957?e=1751500800&v=beta&t=Pz_sdNSKIj_Szw3vAY-qzKeOmnMTLC9yRGLHMkBYHkQ',
    testimonial: "<p>Josh was always a great design and research partner. He was willing to work with me on projects to ensure customer and dev needs were met and fulfilled. Josh always worked hard to ensure accessibility across our experience and that was usually him doing extra work to make that happen. Josh was also a brilliant ideation partner bringing things out of others and working towards a great solution.</p>"
  },
  {
    name: 'Nicholas Dos Santos',
    title: 'Software Engineer',
    company: 'America’s Test Kitchen',
    linkedIn: 'https://www.linkedin.com/in/nicholasjdossantos?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQHvsC1A1QNNRg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721694243731?e=1751500800&v=beta&t=2krvP_9n1enoKANZNrH5fazG5krFVJ3CzG-Noz4ppMg',
    testimonial: "<p>I had the pleasure of working with Josh during his time at America's Test Kitchen, where he was an invaluable member of our team. Josh is an expert in accessibility and UI design, with deep knowledge of HTML, CSS, and Tailwind. His contributions significantly improved our website's accessibility standards and overall user experience.</p><p>Josh is also a fantastic team player, always approachable, collaborative, and quick with a joke to lighten the mood. We’ve still been able to maintain a great relationship, which speaks volumes about his character and commitment to his colleagues.</p><p>I highly recommend Josh to any team looking for a skilled, innovative, and dedicated professional. He’s a joy to work with and an incredible asset to any organization.</p>"
  },
  {
    name: 'Owen Snyder',
    title: 'Full Stack Software Engineer',
    company: 'America’s Test Kitchen',
    linkedIn: 'https://www.linkedin.com/in/owen-snyder?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEOJihSsidW-g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718307424961?e=1751500800&v=beta&t=UifhY36sXt-zg9XVsJ1LSRVyc72hN1tkyWgwcAsxIGk',
    testimonial: "<p>I had the pleasure of working with Josh for a year at America's Test Kitchen, and I can confidently say he is one of the most talented and adaptable front-end engineers I’ve ever collaborated with. What stands out about Josh is his ability to quickly learn and master new technologies, regardless of how complex or unfamiliar they might be.</p><p>Josh worked on projects involving a range of front-end frameworks and tools, from React.js to HTMX, and in addition to diving into a full-stack Ruby on Rails project. His ability to shift between these different technologies with ease is something that’s rare and highly valuable in today’s fast-paced development environment. Whether it was creating dynamic, component-driven UIs in React or implementing server-side rendered pages with HTMX, Josh was always able to pick up the right tool for the job and make it work seamlessly.</p><p>In addition to Josh's technical expertise, he was an excellent friend and teammate—someone I still keep in touch with even after our time at ATK. I highly recommend Josh for any position, from front-end UI/UX design to back-end development.</p>"
  },
  {
    name: 'Chris Griffin',
    title: 'Web Development Manager',
    linkedIn: 'https://www.linkedin.com/in/christophergriffin?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    company: 'Burt Process Equipment, Inc',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQF8nBYY6c1WMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517745756980?e=1752105600&v=beta&t=z2vlsZzfjSZgioVGENKNybrw0vwLi4QVPWXToYTqk48',
    testimonial: "<p>Joshua is highly skilled and always looking to expand his capabilities and grow professionally. He is highly intelligent and very adaptable. He would be a great addition to any development team.</p>"
  },
  {
    name: 'Ethan Brown',
    title: 'Chief Architect',
    company: 'Domino Data Lab',
    linkedIn: 'https://www.linkedin.com/in/ethanjbrown?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQHS5zzvJI-mCQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1534223584206?e=1752105600&v=beta&t=bFV8VHl2_2_Gm0ItDX516kxtT2xcCPF7jBs3VZcWynE',
    testimonial: '<p>Josh is a highly productive and well-organized front end designer. He was hired at East Point Systems to head up user interface design and implementation for an AngularJS based web application. </p><p>Josh was always ahead of schedule with the implementation of his responsibilities, so this allowed him to tackle other marketing duties where he saw a need for improvement. He personally interviewed staff to develop a benefits-based picture of product offerings, and he used this to simplify and relaunch a fresh design for the company website.</p>'
  },
  {
    name: 'David Merkt',
    title: 'Quality Assurance Engineer',
    company: 'WEX Benefits',
    linkedIn: 'https://www.linkedin.com/in/david-merkt-193a556?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEEOKkmKukfqA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725242965750?e=1752105600&v=beta&t=obs_cNYnYA_518ZGVQIwEJyaGtx3IxM-r8grFfe2BPM',
    testimonial: '<p>Josh has a fantastic eye for elegant design, with the ability to distill complicated interface requirements into incredibly friendly user experiences. Once given project goals, he asks intelligent questions to verify goals, and produces a great product. He is a valuable member of any team.</p>'
  },
  {
    name: 'Fred Johanns III',
    title: 'VP of Software Engineering',
    company: 'Chubb Insurance',
    linkedIn: 'https://www.linkedin.com/in/fredj?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQG0yaFYD4S-gw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517254154078?e=1752105600&v=beta&t=T4KPd5Ee4ErNB_whYPlA4PNqsVC4eqvaW8RgNsxnulA',
    testimonial: '<p>Josh has a great eye for simple design. His web sites are clean yet comprehensive. Beyond this, Josh is a self-starter in every sense of the term. He consumed design and marketing tasks in short order while the rest of us tried to keep up. This left him opportunities to start branching out into development work and left me impressed with his ambition.</p>'
  },
  {
    name: 'Ephraim "Corky" Mower',
    title: 'Software Engineer & Architect',
    company: 'ZSuite Technologies',
    linkedIn: 'https://www.linkedin.com/in/ephraim-corky-mower-69a8478?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFk9B_KjsrFag/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682788864056?e=1752105600&v=beta&t=_LKNc6fBmYh34EnAjtG8a875cCZfSozztBsh-lvc0DI',
    testimonial: '<p>Josh was a pleasure to work with. Not only does he have a grasp on UI and UX concerns and best practices, he is very pragmatic and takes the time to really understand what a business offers and how to best represent that digitally. In addition, his skill with the technology stack was great and he was always pushing to learn more.</p>'
  },

]
</script>

<template>
  <PageWrapper>
    <div class="prose">
      <PageHeader pill="Testimonials">
        Supportive Words from Clients and Colleagues
      </PageHeader>
      <p>
        I am grateful for the kind words and support from clients and colleagues who have worked with me over the years. Their testimonials reflect the collaborative spirit and dedication I strive to bring to every project.
      </p>
    </div>
    <section class="md:columns-2 lg:columns-3 gap-8 space-y-12">
      <div v-for="(item, index) in testimonials" :key="index">
        <motion.div
          :initial="{ y: 20, opacity: 0.25 }"
          :whileInView="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5 }"
           class="flex gap-4 group hover:bg-blue-50 relative -m-2 p-2 rounded-lg transition-colors duration-150 ease-in-out">
          <img :src="item.image" alt="Profile picture of {{ item.name }}" class="w-16 h-16 rounded-full shrink-0" />
          <div>
            <h2>{{ item.name }}</h2>
            <div>
              <small class="flex items-center gap-1 text-sm text-pretty font-semibold">{{ item.title }}</small>
              <small class="block text-sm text-pretty"><Icon name="skill-icons:linkedin" size="0.75em" class="grayscale opacity-50" /> {{ item.company }}</small>
            </div>
          </div>

          <a class="absolute inset-0 group ring-blue-100 outline-0 focus:ring-2 focus:ring-offset-2 rounded-lg" :href="item.linkedIn" target="_blank" rel="noopener noreferrer">
            <div class="sr-only">View {{ item.name }}'s' LinkedIn Profile</div>
            <Icon name="ph:arrow-square-out-fill" size="1em" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 ease-in-out text-blue-600" />
          </a>
        </motion.div>
        <div class="pl-8">
          <div class="border-l-4 border-neutral-100 pl-4 mt-6 relative">
            <motion.div
            :initial="{ y: 40, opacity: 0.25 }"
            :whileInView="{ y: 0, opacity: 1 }"
            :transition="{ duration: 1.5 }"
            >
              <Icon name="ph:quotes-fill" size="10em" class="text-neutral-100 absolute -top-12 right-0" />
            </motion.div>
            <div class="prose relative" v-html="item.testimonial"></div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
</template>
