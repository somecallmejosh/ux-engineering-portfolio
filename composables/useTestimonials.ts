export type TestimonialCategory =
  | 'design-systems'
  | 'component-library'
  | 'design-to-code'
  | 'accessibility'
  | 'ui-engineering'

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  linkedIn: string
  image: string
  snippet: string
  testimonial: string
  categories: TestimonialCategory[]
}

const testimonials: Testimonial[] = [
  {
    id: 'rebecca-cachia',
    name: 'Rebecca Cachia, PMP',
    title: 'Web Product & Project Manager',
    company: 'Publicis Sapient',
    linkedIn:
      'https://www.linkedin.com/in/rebeccacachia?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: '/images/rebecca-cachia.jpeg',
    snippet:
      'His ability to foresee challenges and simplify implementation was invaluable. He has a talent for creating seamless, user-friendly designs while ensuring performance and accessibility are top-notch.',
    testimonial:
      "<p>I worked with Josh at America's Test Kitchen, where I was a Product Manager and he was a Senior Software Engineer. Working with Josh was an absolute privilege and pleasure. He's an exceptional team player, whose strategic approach and focus on upstream requirement definition made our projects smoother and more efficient. His ability to foresee challenges and simplify implementation was invaluable.</p><p>Beyond his technical skills, Josh's humor and positive energy made him such fun to work with, even during the most challenging projects. He has a talent for creating seamless, user-friendly designs while ensuring performance and accessibility are top-notch.</p><p>I highly recommend Josh to any team. His blend of technical expertise and experience, strategic thinking, and collaborative spirit makes him a great asset and a super person to work with.</p>",
    categories: ['accessibility', 'design-systems', 'design-to-code'],
  },
  {
    id: 'gabriel-bressi',
    name: 'Gabriel Bressi',
    title: 'QA Lead',
    company: 'Kopius, Inc.',
    linkedIn:
      'https://www.linkedin.com/in/gabriel-bressi-29804074?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: '/images/gabriel-bressi.jpeg',
    snippet:
      'Josh delivered his assignments as planned, and the quality of his work consistently left him with bandwidth to take on more.',
    testimonial:
      "<p>I had the pleasure of working as a QA lead and Scrum Master alongside Josh throughout his tenure at Berxi. Josh has always communicated his daily updates efficiently, pointing out what's he working on as well as the blockers he had, if any.</p><p>Josh participated in the different Scrum ceremonies and gave constructive feedback in retrospective meetings so we could become a more efficient team. As a Scrum Master, I always appreciated his detailed explanations of the approaches he was taking and the issues he faced.</p><p>Josh used to deliver his assignments as planned, and given the good quality of his work, from time to time, he had some bandwidth to take some additional work assigned to the next Iteration, which was appreciated by the team.</p><p>I hope we get a chance to work together in the future to keep building great products.</p>",
    categories: ['component-library', 'design-to-code'],
  },
  {
    id: 'kevin-fecteau',
    name: 'Kevin Fecteau',
    title: 'Senior Rails Developer',
    company: 'Sincere Corporation',
    linkedIn:
      'https://media.licdn.com/dms/image/v2/D4E35AQG9iwxONMmZqQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729661660272?e=1747231200&v=beta&t=HTVkgegVSh6VwJ434vxt3i0R7MsvoOC-2PuRYH1N3RU',
    image: '/images/kevin-fecteau.jpeg',
    snippet:
      'Josh creates truly amazing UI designs and has the passion to ensure they are not compromised. He excels at HTML, CSS, and utilizes frameworks like Tailwind to perfection.',
    testimonial:
      "<p>I had the absolute pleasure of working with Josh twice, once during his time at America's Test Kitchen and also at Sports Technologies. He was an irreplaceable part of both teams and brought so much expertise to the table. Josh creates truly amazing UI designs and has the passion to ensure they are not compromised. He excels at HTML, CSS and utilizes frameworks like Tailwind and Alpine.js to perfection.</p><p>On top of his technical skills, Josh is a fantastic team player. He's approachable, collaborative, and always knows how to lighten the mood with his great sense of humor. We've stayed in touch since working together, which says a lot about the kind of supportive and genuine colleague he is.</p><p>I can't recommend Josh highly enough. Any team would be lucky to have someone as talented, innovative, and all-around great as he is. He's not just a professional asset—he's a joy to work with!</p>",
    categories: ['ui-engineering', 'component-library'],
  },
  {
    id: 'drew-dipasquale',
    name: 'Drew DiPasquale',
    title: 'Principal Researcher',
    company: 'HubSpot',
    linkedIn:
      'https://www.linkedin.com/in/drew-dipasquale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: '/images/drew-dipasquale.jpeg',
    snippet:
      'Josh always worked hard to ensure accessibility across our experience—and that was usually him doing extra work to make it happen.',
    testimonial:
      '<p>Josh was always a great design and research partner. He was willing to work with me on projects to ensure customer and dev needs were met and fulfilled. Josh always worked hard to ensure accessibility across our experience and that was usually him doing extra work to make that happen. Josh was also a brilliant ideation partner bringing things out of others and working towards a great solution.</p>',
    categories: ['accessibility', 'design-to-code'],
  },
  {
    id: 'john-miller',
    name: 'John Miller',
    title: 'CEO',
    company: 'Logatot, Inc.',
    linkedIn: 'https://www.linkedin.com/in/johnmaxmiller/',
    image: '/images/john-miller.jpeg',
    snippet:
      'His depth of knowledge was rock-solid, and he brought a thoughtful, disciplined approach to every project. Even with a high bar set for timelines and quality, Josh met or exceeded expectations every time.',
    testimonial:
      '<p>Josh Brirley served as a System Designer at Logatot and consistently delivered exceptional work. His depth of knowledge was rock-solid, and he brought a thoughtful, disciplined approach to every project. Even with a high bar set for timelines and quality, Josh met or exceeded expectations every time. He is reliable, highly capable, and a true professional to work with.</p>',
    categories: ['design-systems', 'component-library'],
  },
  {
    id: 'hugh-ferguson',
    name: 'Hugh Ferguson',
    title: 'Developer',
    company: 'Berkshire Hathaway Specialty Insurance',
    linkedIn:
      'https://www.linkedin.com/in/hughferg?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: '/images/hugh-ferguson.jpeg',
    snippet:
      'He owns projects and becomes a knowledge resource in any part of his work—truly passionate and responsible. Incredibly talented at learning fast and getting tools up and running for the team.',
    testimonial:
      '<p>I worked with Josh for several years and it was always a pleasure. He owns projects and becomes a knowledge resource in any part of his projects, truly passionate and responsible towards his work. Was an authority on our front end and was able to own his domain while multiplying it with the rest of the stack. Incredibly talented at learning fast and getting tools up and running for the team. Great attitude and person to work with.</p>',
    categories: ['ui-engineering', 'component-library'],
  },
  {
    id: 'welling-lagrone',
    name: 'Welling LaGrone',
    title: 'Vice President',
    company: 'Triverus Consulting',
    linkedIn:
      'https://www.linkedin.com/in/wlagrone?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: '/images/welling-lagrone.jpeg',
    snippet:
      'Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional, and accessible front ends.',
    testimonial:
      '<p>Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. I am fortunate to have been in a position to have him join two teams that I was responsible for and would not hesitate to ask him to join another.</p>',
    categories: ['accessibility', 'ui-engineering', 'design-systems'],
  },
  {
    id: 'ethan-brown',
    name: 'Ethan Brown',
    title: 'Chief Architect',
    company: 'Domino Data Lab',
    linkedIn:
      'https://www.linkedin.com/in/ethanjbrown?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: '/images/ethan-brown.jpeg',
    snippet:
      'Josh was always ahead of schedule, which allowed him to tackle additional challenges wherever he saw a need for improvement.',
    testimonial:
      '<p>Josh is a highly productive and well-organized front end designer. He was hired at East Point Systems to head up user interface design and implementation for an AngularJS based web application. </p><p>Josh was always ahead of schedule with the implementation of his responsibilities, so this allowed him to tackle other marketing duties where he saw a need for improvement. He personally interviewed staff to develop a benefits-based picture of product offerings, and he used this to simplify and relaunch a fresh design for the company website.</p>',
    categories: ['ui-engineering', 'design-systems'],
  },
  {
    id: 'jack-gillete',
    name: 'Jack Gillete',
    title: 'Senior UX Engineer',
    company: 'Berkshire Hathaway Specialty Insurance',
    linkedIn:
      'https://www.linkedin.com/in/jack-gillette?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: '/images/jack-gillete.jpeg',
    snippet:
      'I could hand Josh basic requirements and he would take full ownership of a new frontend repo with very little oversight.',
    testimonial:
      '<p>I was working on a team that had a lot of UI work to complete in a short amount of time, so we brought Josh in to accelerate our work, and I was tasked with overseeing him directly. Josh was able to hit the ground running and immediately start contributing to the project. After a few weeks I was able to give Josh basic requirements and he was able to take ownership of the development of a new frontend repo with very little oversight. After the main scope of that project was completed, Josh was very willing to jump in and help out wherever he could. I would definitely recommend Josh to anyone who needs an experienced and professional developer who can deliver high quality user interfaces.</p>',
    categories: ['ui-engineering', 'component-library'],
  },
  {
    id: 'owen-snyder',
    name: 'Owen Snyder',
    title: 'Full Stack Software Engineer',
    company: "America's Test Kitchen",
    linkedIn:
      'https://www.linkedin.com/in/owen-snyder?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: '/images/owen-snyder.jpeg',
    snippet:
      "What stands out about Josh is his ability to quickly learn and master new technologies, regardless of how complex or unfamiliar they might be.",
    testimonial:
      "<p>I had the pleasure of working with Josh for a year at America's Test Kitchen, and I can confidently say he is one of the most talented and adaptable front-end engineers I've ever collaborated with. What stands out about Josh is his ability to quickly learn and master new technologies, regardless of how complex or unfamiliar they might be.</p><p>Josh worked on projects involving a range of front-end frameworks and tools, from React.js to HTMX, and in addition to diving into a full-stack Ruby on Rails project. His ability to shift between these different technologies with ease is something that's rare and highly valuable in today's fast-paced development environment. Whether it was creating dynamic, component-driven UIs in React or implementing server-side rendered pages with HTMX, Josh was always able to pick up the right tool for the job and make it work seamlessly.</p><p>In addition to Josh's technical expertise, he was an excellent friend and teammate—someone I still keep in touch with even after our time at ATK. I highly recommend Josh for any position, from front-end UI/UX design to back-end development.</p>",
    categories: ['ui-engineering', 'component-library'],
  },
  {
    id: 'michael-pertiore',
    name: 'Michael Pertiore',
    title: 'Application Architect/Developer',
    company: 'Apple',
    linkedIn:
      'https://www.linkedin.com/in/mikeperitore?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D',
    image: '/images/michael-peritore.jpeg',
    snippet:
      "After ten years of working side by side, I can confidently say he's the teammate you want on your roster.",
    testimonial:
      "<p>I've had the privilege of working with Josh for over a decade across multiple companies: America's Test Kitchen, Sports Technologies, and Logatot. Every project we've tackled together has been a masterclass in efficiency and collaboration. At America's Test Kitchen, we tag-teamed Rails projects with maximum efficiency, where his expertise on the front end perfectly complemented my backend work. He takes ownership of the UI and design details, ensuring stellar performance and accessibility while still shipping features at lightning speed.</p><p>At Sports Technologies, he was the driving force behind the front end of our Fantasy Sports games, and I handled the backend and DevOps. His ability to seamlessly integrate a highly performant, intuitive user interface made our product shine. It's also worth noting that he's never limited to just the front end&mdash;whenever there's a snag on the back end, he's always the first to jump in and help troubleshoot.</p><p>Our most recent collaboration at Logatot was no different. Together, as the only two developers, we built a large-scale Child Care Management System for home-based healthcare providers. Once again, his commitment to performance, accessibility, and overall user experience was unmatched. He tackled the front-end challenges with creativity and precision, while also lending a hand whenever I needed extra support on the Rails side.</p><p>After ten years of working side by side, I can confidently say he's the teammate you want on your roster. His blend of speed, technical skill, and willingness to collaborate and problem-solve makes him an invaluable asset to any development team.</p>",
    categories: ['accessibility', 'design-systems', 'component-library'],
  },
  {
    id: 'nicholas-dos-santos',
    name: 'Nicholas Dos Santos',
    title: 'Software Engineer',
    company: "America's Test Kitchen",
    linkedIn:
      'https://www.linkedin.com/in/nicholasjdossantos?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: '/images/nicholas-dos-santos.jpeg',
    snippet:
      'Josh is an expert in accessibility and UI design, with deep knowledge of HTML, CSS, and Tailwind. His contributions significantly improved our website\'s accessibility standards and overall user experience.',
    testimonial:
      "<p>I had the pleasure of working with Josh during his time at America's Test Kitchen, where he was an invaluable member of our team. Josh is an expert in accessibility and UI design, with deep knowledge of HTML, CSS, and Tailwind. His contributions significantly improved our website's accessibility standards and overall user experience.</p><p>Josh is also a fantastic team player, always approachable, collaborative, and quick with a joke to lighten the mood. We've still been able to maintain a great relationship, which speaks volumes about his character and commitment to his colleagues.</p><p>I highly recommend Josh to any team looking for a skilled, innovative, and dedicated professional. He's a joy to work with and an incredible asset to any organization.</p>",
    categories: ['accessibility', 'ui-engineering'],
  },
  {
    id: 'ryan-dunlavey',
    name: 'Ryan Dunlavey',
    title: 'Senior Product Designer',
    company: 'Berkshire Hathaway Specialty Insurance',
    linkedIn: 'https://www.linkedin.com/in/ryandunlavey/',
    image: '/images/ryan-dunlavey.jpeg',
    snippet:
      'Josh is a rare UX Engineer who truly builds for everyone. His ability to architect design systems that are both technically rigorous and deeply human makes him an invaluable asset to any product team.',
    testimonial:
      '<p>Josh is a rare UX Engineer who truly builds for everyone. At Berxi, we partnered to turn the complexity of small business insurance into a seamless, accessible, and responsive reality. His ability to architect design systems that are both technically rigorous and deeply human makes him an invaluable asset to any product team.',
    categories: ['design-systems', 'accessibility', 'design-to-code'],
  },
  {
    id: 'adam-czerepinksi',
    name: 'Adam Czerepinksi',
    title: 'Senior Software Engineer',
    company: 'Evidation Health',
    linkedIn:
      'https://www.linkedin.com/in/adamcz?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D',
    image: '/images/adam-czerepinsky.jpeg',
    snippet:
      "He's still the gold standard to me for building UIs with a focus on all of the diverse users who will interact with it. He's the type of leader who multiplies everyone else's effectiveness.",
    testimonial:
      "<p>It's been a few years since I worked with Josh, but he's still the gold standard to me for building UIs with a focus on all of the diverse users who will interact with it. Through code review and conversations, I learned a lot about semantic html, accessibility, font and image optimizations, different ways to architect a large css codebase, etc. He's the type of leader who multiplies everyone else's effectiveness.</p>",
    categories: ['accessibility', 'ui-engineering', 'design-systems'],
  },
  {
    id: 'chris-griffin',
    name: 'Chris Griffin',
    title: 'Web Development Manager',
    company: 'Burt Process Equipment, Inc',
    linkedIn:
      'https://www.linkedin.com/in/christophergriffin?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: '/images/chris-griffin.jpeg',
    snippet:
      'Joshua is highly skilled and always looking to expand his capabilities and grow professionally. He would be a great addition to any development team.',
    testimonial:
      '<p>Joshua is highly skilled and always looking to expand his capabilities and grow professionally. He is highly intelligent and very adaptable. He would be a great addition to any development team.</p>',
    categories: ['ui-engineering'],
  },
  {
    id: 'david-merkt',
    name: 'David Merkt',
    title: 'Quality Assurance Engineer',
    company: 'WEX Benefits',
    linkedIn:
      'https://www.linkedin.com/in/david-merkt-193a556?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: '/images/dave-merkt.jpeg',
    snippet:
      'Josh has a fantastic eye for elegant design, with the ability to distill complicated interface requirements into incredibly friendly user experiences.',
    testimonial:
      '<p>Josh has a fantastic eye for elegant design, with the ability to distill complicated interface requirements into incredibly friendly user experiences. Once given project goals, he asks intelligent questions to verify goals, and produces a great product. He is a valuable member of any team.</p>',
    categories: ['ui-engineering', 'design-to-code'],
  },
  {
    id: 'fred-johanns',
    name: 'Fred Johanns III',
    title: 'VP of Software Engineering',
    company: 'Chubb Insurance',
    linkedIn:
      'https://www.linkedin.com/in/fredj?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: '/images/fred-johanns.jpeg',
    snippet:
      'Josh has a great eye for simple design—his websites are clean yet comprehensive. Beyond this, Josh is a self-starter in every sense of the term.',
    testimonial:
      '<p>Josh has a great eye for simple design. His web sites are clean yet comprehensive. Beyond this, Josh is a self-starter in every sense of the term. He consumed design and marketing tasks in short order while the rest of us tried to keep up. This left him opportunities to start branching out into development work and left me impressed with his ambition.</p>',
    categories: ['ui-engineering'],
  },
  {
    id: 'ephraim-corky-mower',
    name: 'Ephraim "Corky" Mower',
    title: 'Software Engineer & Architect',
    company: 'ZSuite Technologies',
    linkedIn:
      'https://www.linkedin.com/in/ephraim-corky-mower-69a8478?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D',
    image: '/images/ephraim-mower.jpeg',
    snippet:
      'He is very pragmatic and takes the time to really understand what a business offers and how to best represent that digitally.',
    testimonial:
      '<p>Josh was a pleasure to work with. Not only does he have a grasp on UI and UX concerns and best practices, he is very pragmatic and takes the time to really understand what a business offers and how to best represent that digitally. In addition, his skill with the technology stack was great and he was always pushing to learn more.</p>',
    categories: ['design-systems', 'design-to-code'],
  },
]

export function useTestimonials() {
  return { testimonials }
}

export function getRandomTestimonials(max = 2): Testimonial[] {
  return [...testimonials].sort(() => Math.random() - 0.5).slice(0, max)
}

export function getRandomTestimonialsByCategory(
  category: TestimonialCategory,
  max = 2,
): Testimonial[] {
  const filtered = testimonials.filter(t => t.categories.includes(category))
  return [...filtered].sort(() => Math.random() - 0.5).slice(0, max)
}
