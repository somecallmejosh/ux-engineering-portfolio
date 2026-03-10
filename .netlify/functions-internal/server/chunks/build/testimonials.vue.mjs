import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { u as useHead, b as _sfc_main$1, h as __nuxt_component_0$1 } from './server.mjs';
import { withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'better-sqlite3';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'unhead/scripts';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main = {
  __name: "testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Testimonials",
      meta: [
        { property: "og:title", content: "Testimonials" },
        { name: "description", content: "Testimonials from clients and colleagues I've worked with over the years." },
        { property: "og:description", content: "Testimonials from clients and colleagues I've worked with over the years." },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1747754360/josh-portfolio/assets_task_01jvq4ak6yfmma0mxqxrmvr922_1747754314_img_0.webp" }
      ]
    });
    const testimonials = [
      {
        name: "Rebecca Cachia, PMP",
        title: "Web Product & Project Manager",
        company: "Publicis Sapient",
        linkedIn: "https://www.linkedin.com/in/rebeccacachia?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D",
        image: "/images/rebecca-cachia.jpeg",
        testimonial: "<p>I worked with Josh at America's Test Kitchen, where I was a Product Manager and he was a Senior Software Engineer. Working with Josh was an absolute privilege and pleasure. He's an exceptional team player, whose strategic approach and focus on upstream requirement definition made our projects smoother and more efficient. His ability to foresee challenges and simplify implementation was invaluable.</p><p>Beyond his technical skills, Josh's humor and positive energy made him such fun to work with, even during the most challenging projects. He has a talent for creating seamless, user-friendly designs while ensuring performance and accessibility are top-notch.</p><p>I highly recommend Josh to any team. His blend of technical expertise and experience, strategic thinking, and collaborative spirit makes him a great asset and a super person to work with.</p>"
      },
      {
        name: "Michael Pertiore",
        title: "Application Architect/Developer",
        company: "Apple",
        linkedIn: "https://www.linkedin.com/in/mikeperitore?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D",
        image: "/images/michael-peritore.jpeg",
        testimonial: "<p>I've had the privilege of working with Josh for over a decade across multiple companies: America's Test Kitchen, Sports Technologies, and Logatot. Every project we've tackled together has been a masterclass in efficiency and collaboration. At America's Test Kitchen, we tag-teamed Rails projects with maximum efficiency, where his expertise on the front end perfectly complemented my backend work. He takes ownership of the UI and design details, ensuring stellar performance and accessibility while still shipping features at lightning speed.</p><p>At Sports Technologies, he was the driving force behind the front end of our Fantasy Sports games, and I handled the backend and DevOps. His ability to seamlessly integrate a highly performant, intuitive user interface made our product shine. It's also worth noting that he's never limited to just the front end&mdash;whenever there's a snag on the back end, he's always the first to jump in and help troubleshoot.</p><p>Our most recent collaboration at Logatot was no different. Together, as the only two developers, we built a large-scale Child Care Management System for home-based healthcare providers. Once again, his commitment to performance, accessibility, and overall user experience was unmatched. He tackled the front-end challenges with creativity and precision, while also lending a hand whenever I needed extra support on the Rails side.</p><p>After ten years of working side by side, I can confidently say he's the teammate you want on your roster. His blend of speed, technical skill, and willingness to collaborate and problem-solve makes him an invaluable asset to any development team.</p>"
      },
      {
        name: "Kevin Fecteau",
        title: "Senior Rails Developer",
        company: "Sincere Corporation",
        linkedIn: "https://media.licdn.com/dms/image/v2/D4E35AQG9iwxONMmZqQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729661660272?e=1747231200&v=beta&t=HTVkgegVSh6VwJ434vxt3i0R7MsvoOC-2PuRYH1N3RU",
        image: "/images/kevin-fecteau.jpeg",
        testimonial: "<p>I had the absolute pleasure of working with Josh twice, once during his time at America's Test Kitchen and also at Sports Technologies. He was an irreplaceable part of both teams and brought so much expertise to the table. Josh creates truly amazing UI designs and has the passion to ensure they are not compromised. He excels at HTML, CSS and utilizes frameworks like Tailwind and Alpine.js to perfection.</p><p>On top of his technical skills, Josh is a fantastic team player. He's approachable, collaborative, and always knows how to lighten the mood with his great sense of humor. We've stayed in touch since working together, which says a lot about the kind of supportive and genuine colleague he is.</p><p>I can't recommend Josh highly enough. Any team would be lucky to have someone as talented, innovative, and all-around great as he is. He's not just a professional asset—he's a joy to work with!</p>"
      },
      {
        name: "Gabriel Bressi",
        title: "QA Lead",
        company: "Kopius, Inc.",
        linkedIn: "https://www.linkedin.com/in/gabriel-bressi-29804074?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D",
        image: "/images/gabriel-bressi.jpeg",
        testimonial: "<p>I had the pleasure of working as a QA lead and Scrum Master alongside Josh throughout his tenure at Berxi. Josh has always communicated his daily updates efficiently, pointing out what's he working on as well as the blockers he had, if any.</p><p>Josh participated in the different Scrum ceremonies and gave constructive feedback in retrospective meetings so we could become a more efficient team. As a Scrum Master, I always appreciated his detailed explanations of the approaches he was taking and the issues he faced.</p><p>Josh used to deliver his assignments as planned, and given the good quality of his work, from time to time, he had some bandwidth to take some additional work assigned to the next Iteration, which was appreciated by the team.</p><p>I hope we get a chance to work together in the future to keep building great products.</p>"
      },
      {
        name: "Welling LaGrone",
        title: "Vice President",
        company: "Triverus Consulting",
        linkedIn: "https://www.linkedin.com/in/wlagrone?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D",
        image: "/images/welling-lagrone.jpeg",
        testimonial: "<p>Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. I am fortunate to have been in a position to have him join two teams that I was responsible for and would not hesitate to ask him to join another.</p>"
      },
      {
        name: "Jack Gillete",
        title: "Senior UX Engineer",
        company: "Berkshire Hathaway Specialty Insurance",
        linkedIn: "https://www.linkedin.com/in/jack-gillette?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BwUWHui%2F1Tv%2BtCMpUiYya0w%3D%3D",
        image: "/images/jack-gillete.jpeg",
        testimonial: "<p>I was working on a team that had a lot of UI work to complete in a short amount of time, so we brought Josh in to accelerate our work, and I was tasked with overseeing him directly. Josh was able to hit the ground running and immediately start contributing to the project. After a few weeks I was able to give Josh basic requirements and he was able to take ownership of the development of a new frontend repo with very little oversight. After the main scope of that project was completed, Josh was very willing to jump in and help out wherever he could. I would definitely recommend Josh to anyone who needs an experienced and professional developer who can deliver high quality user interfaces.</p>"
      },
      {
        name: "Hugh Ferguson",
        title: "Developer",
        company: "Berkshire Hathaway Specialty Insurance",
        linkedIn: "https://www.linkedin.com/in/hughferg?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D",
        image: "/images/hugh-ferguson.jpeg",
        testimonial: "<p>I worked with Josh for several years and it was always a pleasure. He owns projects and becomes a knowledge resource in any part of his projects, truly passionate and responsible towards his work. Was an authority on our front end and was able to own his domain while multiplying it with the rest of the stack. Incredibly talented at learning fast and getting tools up and running for the team. Great attitude and person to work with.</p>"
      },
      {
        name: "Adam Czerepinksi",
        title: "Senior Software Engineer",
        company: "Evidation Health",
        linkedIn: "https://www.linkedin.com/in/adamcz?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D",
        image: "/images/adam-czerepinsky.jpeg",
        testimonial: "<p>It's been a few years since I worked with Josh, but he's still the gold standard to me for building UIs with a focus on all of the diverse users who will interact with it. Through code review and conversations, I learned a lot about semantic html, accessibility, font and image optimizations, different ways to architect a large css codebase, etc. He's the type of leader who multiplies everyone else's effectiveness.</p>"
      },
      {
        name: "Drew DiPasquale",
        title: "Principal Researcher",
        company: "HubSpot",
        linkedIn: "https://www.linkedin.com/in/drew-dipasquale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D",
        image: "/images/drew-dipasquale.jpeg",
        testimonial: "<p>Josh was always a great design and research partner. He was willing to work with me on projects to ensure customer and dev needs were met and fulfilled. Josh always worked hard to ensure accessibility across our experience and that was usually him doing extra work to make that happen. Josh was also a brilliant ideation partner bringing things out of others and working towards a great solution.</p>"
      },
      {
        name: "Nicholas Dos Santos",
        title: "Software Engineer",
        company: "America's Test Kitchen",
        linkedIn: "https://www.linkedin.com/in/nicholasjdossantos?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D",
        image: "/images/nicholas-dos-santos.jpeg",
        testimonial: "<p>I had the pleasure of working with Josh during his time at America's Test Kitchen, where he was an invaluable member of our team. Josh is an expert in accessibility and UI design, with deep knowledge of HTML, CSS, and Tailwind. His contributions significantly improved our website's accessibility standards and overall user experience.</p><p>Josh is also a fantastic team player, always approachable, collaborative, and quick with a joke to lighten the mood. We've still been able to maintain a great relationship, which speaks volumes about his character and commitment to his colleagues.</p><p>I highly recommend Josh to any team looking for a skilled, innovative, and dedicated professional. He's a joy to work with and an incredible asset to any organization.</p>"
      },
      {
        name: "Owen Snyder",
        title: "Full Stack Software Engineer",
        company: "America's Test Kitchen",
        linkedIn: "https://www.linkedin.com/in/owen-snyder?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BoLJj4Tr2RnKaiFGsvFGWEg%3D%3D",
        image: "/images/owen-snyder.jpeg",
        testimonial: "<p>I had the pleasure of working with Josh for a year at America's Test Kitchen, and I can confidently say he is one of the most talented and adaptable front-end engineers I've ever collaborated with. What stands out about Josh is his ability to quickly learn and master new technologies, regardless of how complex or unfamiliar they might be.</p><p>Josh worked on projects involving a range of front-end frameworks and tools, from React.js to HTMX, and in addition to diving into a full-stack Ruby on Rails project. His ability to shift between these different technologies with ease is something that's rare and highly valuable in today's fast-paced development environment. Whether it was creating dynamic, component-driven UIs in React or implementing server-side rendered pages with HTMX, Josh was always able to pick up the right tool for the job and make it work seamlessly.</p><p>In addition to Josh's technical expertise, he was an excellent friend and teammate—someone I still keep in touch with even after our time at ATK. I highly recommend Josh for any position, from front-end UI/UX design to back-end development.</p>"
      },
      {
        name: "Chris Griffin",
        title: "Web Development Manager",
        linkedIn: "https://www.linkedin.com/in/christophergriffin?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D",
        company: "Burt Process Equipment, Inc",
        image: "/images/chris-griffin.jpeg",
        testimonial: "<p>Joshua is highly skilled and always looking to expand his capabilities and grow professionally. He is highly intelligent and very adaptable. He would be a great addition to any development team.</p>"
      },
      {
        name: "Ethan Brown",
        title: "Chief Architect",
        company: "Domino Data Lab",
        linkedIn: "https://www.linkedin.com/in/ethanjbrown?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D",
        image: "/images/ethan-brown.jpeg",
        testimonial: "<p>Josh is a highly productive and well-organized front end designer. He was hired at East Point Systems to head up user interface design and implementation for an AngularJS based web application. </p><p>Josh was always ahead of schedule with the implementation of his responsibilities, so this allowed him to tackle other marketing duties where he saw a need for improvement. He personally interviewed staff to develop a benefits-based picture of product offerings, and he used this to simplify and relaunch a fresh design for the company website.</p>"
      },
      {
        name: "David Merkt",
        title: "Quality Assurance Engineer",
        company: "WEX Benefits",
        linkedIn: "https://www.linkedin.com/in/david-merkt-193a556?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D",
        image: "/images/dave-merkt.jpeg",
        testimonial: "<p>Josh has a fantastic eye for elegant design, with the ability to distill complicated interface requirements into incredibly friendly user experiences. Once given project goals, he asks intelligent questions to verify goals, and produces a great product. He is a valuable member of any team.</p>"
      },
      {
        name: "Fred Johanns III",
        title: "VP of Software Engineering",
        company: "Chubb Insurance",
        linkedIn: "https://www.linkedin.com/in/fredj?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D",
        image: "/images/fred-johanns.jpeg",
        testimonial: "<p>Josh has a great eye for simple design. His web sites are clean yet comprehensive. Beyond this, Josh is a self-starter in every sense of the term. He consumed design and marketing tasks in short order while the rest of us tried to keep up. This left him opportunities to start branching out into development work and left me impressed with his ambition.</p>"
      },
      {
        name: 'Ephraim "Corky" Mower',
        title: "Software Engineer & Architect",
        company: "ZSuite Technologies",
        linkedIn: "https://www.linkedin.com/in/ephraim-corky-mower-69a8478?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BovWiiXA7TBawpd4biQe%2FfQ%3D%3D",
        image: "/images/ephraim-mower.jpeg",
        testimonial: "<p>Josh was a pleasure to work with. Not only does he have a grasp on UI and UX concerns and best practices, he is very pragmatic and takes the time to really understand what a business offers and how to best represent that digitally. In addition, his skill with the technology stack was great and he was always pushing to learn more.</p>"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section aria-labelledby="page-header" class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, {
              pill: "Testimonials",
              pillIcon: "ph:chats"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` What clients and colleagues say `);
                } else {
                  return [
                    createTextVNode(" What clients and colleagues say ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}> These testimonials come from clients and colleagues I&#39;ve had the pleasure of working with. Their words reflect what I care about most: collaboration, accessibility, and work that holds up over time. </p></section><section aria-label="Testimonials" class="md:columns-2 lg:columns-3 gap-8 space-y-12"${_scopeId}><!--[-->`);
            ssrRenderList(testimonials, (item, index) => {
              _push2(`<ul${_scopeId}><li class="flex gap-4 group hover:bg-blue-50 relative -m-2 p-2 rounded-lg transition-colors duration-150 ease-in-out"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="w-16 h-16 rounded-full shrink-0" width="64" height="64" loading="lazy"${_scopeId}><div${_scopeId}><h2${_scopeId}>${ssrInterpolate(item.name)}</h2><div${_scopeId}><small class="flex items-center gap-1 text-sm text-pretty font-semibold"${_scopeId}>${ssrInterpolate(item.title)}</small><small class="block text-sm text-pretty"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "skill-icons:linkedin",
                size: "0.75em",
                class: "grayscale opacity-50"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(item.company)}</small></div></div><a class="absolute inset-0 group ring-blue-100 outline-0 focus:ring-2 focus:ring-offset-2 rounded-lg"${ssrRenderAttr("href", item.linkedIn)} target="_blank" rel="noopener noreferrer"${_scopeId}><div class="sr-only"${_scopeId}>View ${ssrInterpolate(item.name)}&#39;s LinkedIn Profile</div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:arrow-square-out-fill",
                size: "1em",
                class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 ease-in-out text-blue-600"
              }, null, _parent2, _scopeId));
              _push2(`</a></li><div class="pl-8"${_scopeId}><div class="border-l-4 border-neutral-100 pl-4 mt-6 relative"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:quotes-fill",
                size: "10em",
                class: "text-neutral-100 absolute -top-12 right-0"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="prose relative"${_scopeId}>${item.testimonial ?? ""}</div></div></div></ul>`);
            });
            _push2(`<!--]--></section>`);
          } else {
            return [
              createVNode("section", {
                "aria-labelledby": "page-header",
                class: "prose"
              }, [
                createVNode(_component_PageHeader, {
                  pill: "Testimonials",
                  pillIcon: "ph:chats"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" What clients and colleagues say ")
                  ]),
                  _: 1
                }),
                createVNode("p", null, " These testimonials come from clients and colleagues I've had the pleasure of working with. Their words reflect what I care about most: collaboration, accessibility, and work that holds up over time. ")
              ]),
              createVNode("section", {
                "aria-label": "Testimonials",
                class: "md:columns-2 lg:columns-3 gap-8 space-y-12"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(testimonials, (item, index) => {
                  return createVNode("ul", { key: index }, [
                    createVNode("li", { class: "flex gap-4 group hover:bg-blue-50 relative -m-2 p-2 rounded-lg transition-colors duration-150 ease-in-out" }, [
                      createVNode("img", {
                        src: item.image,
                        alt: item.name,
                        class: "w-16 h-16 rounded-full shrink-0",
                        width: "64",
                        height: "64",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", null, [
                        createVNode("h2", null, toDisplayString(item.name), 1),
                        createVNode("div", null, [
                          createVNode("small", { class: "flex items-center gap-1 text-sm text-pretty font-semibold" }, toDisplayString(item.title), 1),
                          createVNode("small", { class: "block text-sm text-pretty" }, [
                            createVNode(_component_Icon, {
                              name: "skill-icons:linkedin",
                              size: "0.75em",
                              class: "grayscale opacity-50"
                            }),
                            createTextVNode(" " + toDisplayString(item.company), 1)
                          ])
                        ])
                      ]),
                      createVNode("a", {
                        class: "absolute inset-0 group ring-blue-100 outline-0 focus:ring-2 focus:ring-offset-2 rounded-lg",
                        href: item.linkedIn,
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }, [
                        createVNode("div", { class: "sr-only" }, "View " + toDisplayString(item.name) + "'s LinkedIn Profile", 1),
                        createVNode(_component_Icon, {
                          name: "ph:arrow-square-out-fill",
                          size: "1em",
                          class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 ease-in-out text-blue-600"
                        })
                      ], 8, ["href"])
                    ]),
                    createVNode("div", { class: "pl-8" }, [
                      createVNode("div", { class: "border-l-4 border-neutral-100 pl-4 mt-6 relative" }, [
                        createVNode("div", null, [
                          createVNode(_component_Icon, {
                            name: "ph:quotes-fill",
                            size: "10em",
                            class: "text-neutral-100 absolute -top-12 right-0"
                          })
                        ]),
                        createVNode("div", {
                          class: "prose relative",
                          innerHTML: item.testimonial
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=testimonials.vue.mjs.map
