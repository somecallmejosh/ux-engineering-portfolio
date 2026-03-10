import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_2 } from './SplitContent.vue.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, b as _sfc_main$1 } from './server.mjs';
import { _ as _sfc_main$2 } from './CardHeader.vue2.mjs';
import { _ as _sfc_main$3 } from './buttonLink.vue2.mjs';
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

const title = "About Josh Briley | Design Systems Engineer & Frontend Consultant";
const description = "20 years of experience building component libraries and design systems for product teams at Travelers, Berkshire Hathaway Specialty Insurance, and America's Test Kitchen.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title,
      meta: [
        { property: "og:title", content: title },
        { name: "description", content: description },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp" }
      ]
    });
    const resumeItems = [
      {
        title: "Software Engineer",
        company: "Travelers",
        date: "2025 - Present",
        description: "Building and maintaining an accessible component library that powers applications used across the US and UK. Focused on scalable, reusable UI components and documentation that helps designers and developers deliver consistent experiences at scale."
      },
      {
        title: "Senior UI Developer",
        company: "Logatot, Inc.",
        date: "2023 - 2024",
        description: "Built the component library powering their core application using Ruby on Rails ViewComponents. Accessible, responsive, and consistent across devices."
      },
      {
        title: "Senior Software Engineer",
        company: "America's Test Kitchen",
        date: "2022 - 2023",
        description: "Built and documented UI components using React, Next.js, and Storybook, giving the team a toolkit that let them ship new features quickly and consistently across multiple products."
      },
      {
        title: "Principal Design Engineer",
        company: "Berkshire Hathaway Specialty Insurance",
        date: "2018 - 2022",
        description: "Led the creation of a custom UI component library in Vue.js and Nuxt.js, setting the front-end development standard for the organization and significantly accelerating feature delivery."
      },
      {
        title: "Lead UI Developer",
        company: "America's Test Kitchen",
        date: "2016 - 2018",
        description: "Designed and built a utility styling system that reduced repetitive work and helped the team move faster without sacrificing consistency."
      },
      {
        title: "UI Designer & Front End Developer",
        company: "Sports Technologies, Inc.",
        date: "2013 - 2016",
        description: "Led UI for Ruby on Rails and Angular applications used by the NFL, NASCAR, NHL, MLS, and PGA."
      },
      {
        title: "Freelance UI Developer",
        company: "Self-Employed",
        date: "2010 - Present",
        description: "Ongoing consulting work across a range of clients and industries, focused on accessible, performant web application development."
      },
      {
        title: "Web Designer & Front End Developer",
        company: "ImageWorks, LLC",
        date: "2009 - 2013",
        description: "Built web experiences across industries, including work for Aetna Insurance. An early foundation in user-centered design across diverse client needs."
      },
      {
        title: "Owner, Web Designer and Front End Developer",
        company: "Para-Diddle Design, LLC",
        date: "2005 - 2009",
        description: "Ran my own design and development company. Responsible for the work, the clients, the vision, and the books. It gave me a real appreciation for all the moving parts of a business."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_split_content = __nuxt_component_2;
      const _component_CardHeader = _sfc_main$2;
      const _component_Callout = __nuxt_component_3;
      const _component_ButtonLink = _sfc_main$3;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="prose"${_scopeId}><img src="https://res.cloudinary.com/dwjulenau/image/upload/c_crop,dpr_auto,e_camera,f_auto,fl_progressive,g_face,q_auto,w_800,z_1.7/v1758508471/josh-portfolio/josh-biz-cazsh.png" alt="Josh Briley, UX Engineer" width="800" height="800" loading="eager" class="w-full h-auto lg:w-48 lg:h-48 rounded-2xl lg:rounded-full lg:mx-auto mb-6 lg:float-right lg:ml-12 lg:mb-0 object-cover object-top"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` About me `);
                } else {
                  return [
                    createTextVNode(" About me ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}> I work with product teams on design system audits, component library builds, and design-to-code workflow optimization. Fixed scope, fixed price. I&#39;ve spent 20 years building the component libraries and design systems that product teams depend on. Now I help other teams do the same. <strong${_scopeId}>I&#39;m currently available for consulting engagements.</strong></p></section><section aria-labelledby="bio" class="prose max-w-full lg:mb-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_split_content, null, {
              primary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 id="bio"${_scopeId2}>Bio</h2><p${_scopeId2}> I&#39;m a UI/UX engineer who loves the place where design meets code: where a well-built component library makes a whole team faster, and where accessibility is a foundation, not an afterthought. For over twenty years I&#39;ve been behind the buttons you tap, the forms you fill out, and the UI details that make a product feel considered rather than cobbled together. I&#39;ve built design systems for insurance companies, component libraries for media brands, and UI frameworks for professional sports organizations. The scale changes. The craft doesn&#39;t. </p><p${_scopeId2}> I&#39;m happiest when I&#39;m deep in the details but still part of the bigger conversation about what we&#39;re making and why it matters. </p>`);
                } else {
                  return [
                    createVNode("h2", { id: "bio" }, "Bio"),
                    createVNode("p", null, " I'm a UI/UX engineer who loves the place where design meets code: where a well-built component library makes a whole team faster, and where accessibility is a foundation, not an afterthought. For over twenty years I've been behind the buttons you tap, the forms you fill out, and the UI details that make a product feel considered rather than cobbled together. I've built design systems for insurance companies, component libraries for media brands, and UI frameworks for professional sports organizations. The scale changes. The craft doesn't. "),
                    createVNode("p", null, " I'm happiest when I'm deep in the details but still part of the bigger conversation about what we're making and why it matters. ")
                  ];
                }
              }),
              secondary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>What I do best</h2><p${_scopeId2}> I help teams build front ends that feel solid, accessible, and easy to maintain. In practice, that usually means: </p><ul${_scopeId2}><li${_scopeId2}><strong${_scopeId2}>Design systems and component libraries</strong> — architected to scale, documented so your whole team can use them confidently</li><li${_scopeId2}><strong${_scopeId2}>Accessibility compliance</strong> — WCAG 2.1 AA built in from the start, not bolted on at the end </li><li${_scopeId2}><strong${_scopeId2}>Design-to-code workflows</strong> — reducing the handoff friction that costs hours every sprint </li></ul><p${_scopeId2}> Good communication beats good guesswork every time. I keep designers and developers on the same page. </p>`);
                } else {
                  return [
                    createVNode("h2", null, "What I do best"),
                    createVNode("p", null, " I help teams build front ends that feel solid, accessible, and easy to maintain. In practice, that usually means: "),
                    createVNode("ul", null, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Design systems and component libraries"),
                        createTextVNode(" — architected to scale, documented so your whole team can use them confidently")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Accessibility compliance"),
                        createTextVNode(" — WCAG 2.1 AA built in from the start, not bolted on at the end ")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Design-to-code workflows"),
                        createTextVNode(" — reducing the handoff friction that costs hours every sprint ")
                      ])
                    ]),
                    createVNode("p", null, " Good communication beats good guesswork every time. I keep designers and developers on the same page. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section aria-labelledby="experience" class="prose max-w-full"${_scopeId}><h2 id="experience" class="text-3xl"${_scopeId}>Experience</h2><ul class="not-prose grid md:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(resumeItems, (item, index) => {
              _push2(`<li class="bg-neutral-50 p-4 -mx-4 rounded-lg"${_scopeId}><small class="inline-block mb-4 text-xs px-1.5 bg-neutral-900 text-white font-semibold tracking-wide rounded-full"${_scopeId}>${ssrInterpolate(item.date)}</small><div class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CardHeader, { element: "h3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="mb-2 font-semibold"${_scopeId}>${ssrInterpolate(item.company)}</p><p${_scopeId}>${ssrInterpolate(item.description)}</p></div></li>`);
            });
            _push2(`<!--]--></ul></section><section aria-labelledby="mission" class="prose max-w-full lg:mb-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_split_content, null, {
              primary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 id="mission"${_scopeId2}>What I value</h2><p${_scopeId2}> I like working on teams that care about the people using the product and the ones building it. I believe in writing code that future-me and my teammates will actually thank me for. Simple when possible. Clever when necessary. Kind always. </p><p${_scopeId2}> When new ideas come along, I ask: will this make life better for the user? Easier for the team? Better for my craft? If yes, I&#39;m in. If not, I&#39;ll probably tinker with it anyway, but only for &quot;research.&quot; </p>`);
                } else {
                  return [
                    createVNode("h2", { id: "mission" }, "What I value"),
                    createVNode("p", null, " I like working on teams that care about the people using the product and the ones building it. I believe in writing code that future-me and my teammates will actually thank me for. Simple when possible. Clever when necessary. Kind always. "),
                    createVNode("p", null, ` When new ideas come along, I ask: will this make life better for the user? Easier for the team? Better for my craft? If yes, I'm in. If not, I'll probably tinker with it anyway, but only for "research." `)
                  ];
                }
              }),
              secondary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Tools of the trade</h2><p${_scopeId2}> I work across the modern front-end stack: React, Vue, and their ecosystems, plain CSS through to Sass and Tailwind, and I&#39;ve spent meaningful time with Ruby on Rails. I&#39;m fluent in Storybook, Figma, and the design-to-code tools that sit between them. </p><p${_scopeId2}> Tools are just tools. What matters is how you use them: clear plan, solid foundation, tested thoroughly, and accessible to everyone. That&#39;s the part that lasts long after frameworks come and go. </p>`);
                } else {
                  return [
                    createVNode("h2", null, "Tools of the trade"),
                    createVNode("p", null, " I work across the modern front-end stack: React, Vue, and their ecosystems, plain CSS through to Sass and Tailwind, and I've spent meaningful time with Ruby on Rails. I'm fluent in Storybook, Figma, and the design-to-code tools that sit between them. "),
                    createVNode("p", null, " Tools are just tools. What matters is how you use them: clear plan, solid foundation, tested thoroughly, and accessible to everyone. That's the part that lasts long after frameworks come and go. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_component_Callout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Let&#39;s work together</h2><p${_scopeId2}> Interested in consulting? I offer fixed-scope engagements for design system audits, component library builds, and workflow optimization. </p>`);
                  _push3(ssrRenderComponent(_component_ButtonLink, { to: "/services/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` View services &amp; pricing `);
                      } else {
                        return [
                          createTextVNode(" View services & pricing ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h2", null, "Let's work together"),
                    createVNode("p", null, " Interested in consulting? I offer fixed-scope engagements for design system audits, component library builds, and workflow optimization. "),
                    createVNode(_component_ButtonLink, { to: "/services/" }, {
                      default: withCtx(() => [
                        createTextVNode(" View services & pricing ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", { class: "prose" }, [
                createVNode("img", {
                  src: "https://res.cloudinary.com/dwjulenau/image/upload/c_crop,dpr_auto,e_camera,f_auto,fl_progressive,g_face,q_auto,w_800,z_1.7/v1758508471/josh-portfolio/josh-biz-cazsh.png",
                  alt: "Josh Briley, UX Engineer",
                  width: "800",
                  height: "800",
                  loading: "eager",
                  class: "w-full h-auto lg:w-48 lg:h-48 rounded-2xl lg:rounded-full lg:mx-auto mb-6 lg:float-right lg:ml-12 lg:mb-0 object-cover object-top"
                }),
                createVNode(_component_PageHeader, null, {
                  default: withCtx(() => [
                    createTextVNode(" About me ")
                  ]),
                  _: 1
                }),
                createVNode("p", null, [
                  createTextVNode(" I work with product teams on design system audits, component library builds, and design-to-code workflow optimization. Fixed scope, fixed price. I've spent 20 years building the component libraries and design systems that product teams depend on. Now I help other teams do the same. "),
                  createVNode("strong", null, "I'm currently available for consulting engagements.")
                ])
              ]),
              createVNode("section", {
                "aria-labelledby": "bio",
                class: "prose max-w-full lg:mb-24"
              }, [
                createVNode(_component_split_content, null, {
                  primary: withCtx(() => [
                    createVNode("h2", { id: "bio" }, "Bio"),
                    createVNode("p", null, " I'm a UI/UX engineer who loves the place where design meets code: where a well-built component library makes a whole team faster, and where accessibility is a foundation, not an afterthought. For over twenty years I've been behind the buttons you tap, the forms you fill out, and the UI details that make a product feel considered rather than cobbled together. I've built design systems for insurance companies, component libraries for media brands, and UI frameworks for professional sports organizations. The scale changes. The craft doesn't. "),
                    createVNode("p", null, " I'm happiest when I'm deep in the details but still part of the bigger conversation about what we're making and why it matters. ")
                  ]),
                  secondary: withCtx(() => [
                    createVNode("h2", null, "What I do best"),
                    createVNode("p", null, " I help teams build front ends that feel solid, accessible, and easy to maintain. In practice, that usually means: "),
                    createVNode("ul", null, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Design systems and component libraries"),
                        createTextVNode(" — architected to scale, documented so your whole team can use them confidently")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Accessibility compliance"),
                        createTextVNode(" — WCAG 2.1 AA built in from the start, not bolted on at the end ")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Design-to-code workflows"),
                        createTextVNode(" — reducing the handoff friction that costs hours every sprint ")
                      ])
                    ]),
                    createVNode("p", null, " Good communication beats good guesswork every time. I keep designers and developers on the same page. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("section", {
                "aria-labelledby": "experience",
                class: "prose max-w-full"
              }, [
                createVNode("h2", {
                  id: "experience",
                  class: "text-3xl"
                }, "Experience"),
                createVNode("ul", { class: "not-prose grid md:grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-6" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(resumeItems, (item, index) => {
                    return createVNode("li", {
                      class: "bg-neutral-50 p-4 -mx-4 rounded-lg",
                      key: index
                    }, [
                      createVNode("small", { class: "inline-block mb-4 text-xs px-1.5 bg-neutral-900 text-white font-semibold tracking-wide rounded-full" }, toDisplayString(item.date), 1),
                      createVNode("div", { class: "prose" }, [
                        createVNode(_component_CardHeader, { element: "h3" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("p", { class: "mb-2 font-semibold" }, toDisplayString(item.company), 1),
                        createVNode("p", null, toDisplayString(item.description), 1)
                      ])
                    ]);
                  }), 64))
                ])
              ]),
              createVNode("section", {
                "aria-labelledby": "mission",
                class: "prose max-w-full lg:mb-24"
              }, [
                createVNode(_component_split_content, null, {
                  primary: withCtx(() => [
                    createVNode("h2", { id: "mission" }, "What I value"),
                    createVNode("p", null, " I like working on teams that care about the people using the product and the ones building it. I believe in writing code that future-me and my teammates will actually thank me for. Simple when possible. Clever when necessary. Kind always. "),
                    createVNode("p", null, ` When new ideas come along, I ask: will this make life better for the user? Easier for the team? Better for my craft? If yes, I'm in. If not, I'll probably tinker with it anyway, but only for "research." `)
                  ]),
                  secondary: withCtx(() => [
                    createVNode("h2", null, "Tools of the trade"),
                    createVNode("p", null, " I work across the modern front-end stack: React, Vue, and their ecosystems, plain CSS through to Sass and Tailwind, and I've spent meaningful time with Ruby on Rails. I'm fluent in Storybook, Figma, and the design-to-code tools that sit between them. "),
                    createVNode("p", null, " Tools are just tools. What matters is how you use them: clear plan, solid foundation, tested thoroughly, and accessible to everyone. That's the part that lasts long after frameworks come and go. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_Callout, null, {
                default: withCtx(() => [
                  createVNode("h2", null, "Let's work together"),
                  createVNode("p", null, " Interested in consulting? I offer fixed-scope engagements for design system audits, component library builds, and workflow optimization. "),
                  createVNode(_component_ButtonLink, { to: "/services/" }, {
                    default: withCtx(() => [
                      createTextVNode(" View services & pricing ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about.vue.mjs.map
