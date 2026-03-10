import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_2 } from './Services.vue2.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { u as useHead, b as _sfc_main$1, g as __nuxt_component_1 } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$2 } from './buttonLink.vue2.mjs';
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

const title = "Design systems consulting services | Josh Briley";
const description = "Fixed-scope consulting for design system audits, component library builds, and design-to-code workflow optimization. Clear deliverables, clear pricing, defined from the start.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title,
      meta: [
        { property: "og:title", content: title },
        { name: "description", content: description },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744317106/josh-portfolio/assets_task_01jrgnzqzhe1w9d68qj5z60crx_img_0.webp" }
      ]
    });
    const allServices = ([__temp, __restore] = withAsyncContext(() => queryCollection("services").all()), __temp = await __temp, __restore(), __temp);
    const paidServices = allServices.filter((s) => !s.isFree && !s.isComingSoon);
    const freeService = allServices.find((s) => s.isFree);
    const comingSoonServices = allServices.filter((s) => s.isComingSoon);
    const faqs = [
      {
        question: "Do you work with teams outside the US?",
        answer: "Yes. All three engagements are fully remote and async-friendly. Time zone differences haven't been a problem."
      },
      {
        question: "What if my needs don't fit one of these packages?",
        answer: "Get in touch and describe what you're working with. If it's something I can help with, I'll put together a custom proposal. If it isn't, I'll tell you that too."
      },
      {
        question: "Can I start with the audit and move to a component library build afterward?",
        answer: "Yes, and that's actually the most common path. The audit identifies exactly what needs to be built or rebuilt, which makes the component library engagement more focused and efficient."
      },
      {
        question: "How does payment work?",
        answer: "50% upfront, 50% on delivery. Payment is via invoice."
      },
      {
        question: "Are you available for ongoing work beyond these packages?",
        answer: "On a limited basis, yes. If you complete one of these engagements and want continued support, we can discuss a monthly retainer."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_Services = __nuxt_component_2;
      const _component_Callout = __nuxt_component_3;
      const _component_ButtonLink = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section aria-describedby="page-header" class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Design systems consulting `);
                } else {
                  return [
                    createTextVNode(" Design systems consulting ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}> Three focused engagements at fixed scope and fixed price. You know exactly what you&#39;re getting before we start. </p></section>`);
            _push2(ssrRenderComponent(_component_Services, { services: unref(paidServices) }, null, _parent2, _scopeId));
            if (unref(freeService)) {
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="prose"${_scopeId2}><p class="text-sm font-semibold tracking-wider text-blue-700 uppercase"${_scopeId2}>Free resource</p><h2 id="free-heading" class="text-2xl mt-1"${_scopeId2}>Not ready to commit?</h2><p${_scopeId2}> Use the free <strong${_scopeId2}>${ssrInterpolate(unref(freeService).label)}</strong> to see where your design system stands before investing in a paid engagement. It covers the same five dimensions as the paid audit — you score your own system and walk away with a clear picture of your biggest gaps. </p><p${_scopeId2}>${ssrInterpolate(unref(freeService).description)}</p></div>`);
                    _push3(ssrRenderComponent(_component_ButtonLink, {
                      to: `/services/${unref(freeService).slug}/`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Get the free checklist `);
                        } else {
                          return [
                            createTextVNode(" Get the free checklist ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "prose" }, [
                        createVNode("p", { class: "text-sm font-semibold tracking-wider text-blue-700 uppercase" }, "Free resource"),
                        createVNode("h2", {
                          id: "free-heading",
                          class: "text-2xl mt-1"
                        }, "Not ready to commit?"),
                        createVNode("p", null, [
                          createTextVNode(" Use the free "),
                          createVNode("strong", null, toDisplayString(unref(freeService).label), 1),
                          createTextVNode(" to see where your design system stands before investing in a paid engagement. It covers the same five dimensions as the paid audit — you score your own system and walk away with a clear picture of your biggest gaps. ")
                        ]),
                        createVNode("p", null, toDisplayString(unref(freeService).description), 1)
                      ]),
                      createVNode(_component_ButtonLink, {
                        to: `/services/${unref(freeService).slug}/`
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Get the free checklist ")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(comingSoonServices).length) {
              _push2(`<section aria-labelledby="coming-soon-heading" class="space-y-4"${_scopeId}><h2 id="coming-soon-heading" class="text-xl"${_scopeId}>Coming soon</h2><ul class="grid md:grid-cols-2 gap-4 list-none p-0 m-0"${_scopeId}><!--[-->`);
              ssrRenderList(unref(comingSoonServices), (service) => {
                _push2(`<li class="rounded-lg border border-neutral-200 bg-white p-6 space-y-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-xs font-semibold tracking-wider uppercase text-neutral-400 border border-neutral-200 rounded px-2 py-0.5"${_scopeId}>Coming soon</span></div><h3 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(service.label)}</h3><p class="text-neutral-600 text-sm leading-relaxed"${_scopeId}>${ssrInterpolate(service.description)}</p>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/services/${service.slug}/`,
                  class: "text-sm font-medium underline underline-offset-2 hover:no-underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Learn more and join the waitlist `);
                    } else {
                      return [
                        createTextVNode(" Learn more and join the waitlist ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section aria-labelledby="faq"${_scopeId}><h2 id="faq" class="text-2xl mb-6"${_scopeId}>Frequently asked questions</h2><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(faqs, (faq) => {
              _push2(`<details name="frequently-asked-question" class="border rounded-lg border-neutral-200 bg-white p-6"${_scopeId}><summary class="text-lg cursor-pointer"${_scopeId}>${ssrInterpolate(faq.question)}</summary><p class="pt-2"${_scopeId}>${ssrInterpolate(faq.answer)}</p></details>`);
            });
            _push2(`<!--]--></div></section>`);
            _push2(ssrRenderComponent(_component_Callout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Not sure which engagement is right for you?</h2><p${_scopeId2}> That&#39;s what the intro call is for. It&#39;s 30 minutes, no obligation, and you&#39;ll leave with a clear picture of what would actually help your team. </p>`);
                  _push3(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Send a message `);
                      } else {
                        return [
                          createTextVNode(" Send a message ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h2", null, "Not sure which engagement is right for you?"),
                    createVNode("p", null, " That's what the intro call is for. It's 30 minutes, no obligation, and you'll leave with a clear picture of what would actually help your team. "),
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode(" Send a message ")
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
              createVNode("section", {
                "aria-describedby": "page-header",
                class: "prose"
              }, [
                createVNode(_component_PageHeader, null, {
                  default: withCtx(() => [
                    createTextVNode(" Design systems consulting ")
                  ]),
                  _: 1
                }),
                createVNode("p", null, " Three focused engagements at fixed scope and fixed price. You know exactly what you're getting before we start. ")
              ]),
              createVNode(_component_Services, { services: unref(paidServices) }, null, 8, ["services"]),
              unref(freeService) ? (openBlock(), createBlock(_component_Callout, { key: 0 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "prose" }, [
                    createVNode("p", { class: "text-sm font-semibold tracking-wider text-blue-700 uppercase" }, "Free resource"),
                    createVNode("h2", {
                      id: "free-heading",
                      class: "text-2xl mt-1"
                    }, "Not ready to commit?"),
                    createVNode("p", null, [
                      createTextVNode(" Use the free "),
                      createVNode("strong", null, toDisplayString(unref(freeService).label), 1),
                      createTextVNode(" to see where your design system stands before investing in a paid engagement. It covers the same five dimensions as the paid audit — you score your own system and walk away with a clear picture of your biggest gaps. ")
                    ]),
                    createVNode("p", null, toDisplayString(unref(freeService).description), 1)
                  ]),
                  createVNode(_component_ButtonLink, {
                    to: `/services/${unref(freeService).slug}/`
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Get the free checklist ")
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              unref(comingSoonServices).length ? (openBlock(), createBlock("section", {
                key: 1,
                "aria-labelledby": "coming-soon-heading",
                class: "space-y-4"
              }, [
                createVNode("h2", {
                  id: "coming-soon-heading",
                  class: "text-xl"
                }, "Coming soon"),
                createVNode("ul", { class: "grid md:grid-cols-2 gap-4 list-none p-0 m-0" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(comingSoonServices), (service) => {
                    return openBlock(), createBlock("li", {
                      key: service.slug,
                      class: "rounded-lg border border-neutral-200 bg-white p-6 space-y-2"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "text-xs font-semibold tracking-wider uppercase text-neutral-400 border border-neutral-200 rounded px-2 py-0.5" }, "Coming soon")
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(service.label), 1),
                      createVNode("p", { class: "text-neutral-600 text-sm leading-relaxed" }, toDisplayString(service.description), 1),
                      createVNode(_component_NuxtLink, {
                        to: `/services/${service.slug}/`,
                        class: "text-sm font-medium underline underline-offset-2 hover:no-underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Learn more and join the waitlist ")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              createVNode("section", { "aria-labelledby": "faq" }, [
                createVNode("h2", {
                  id: "faq",
                  class: "text-2xl mb-6"
                }, "Frequently asked questions"),
                createVNode("div", { class: "space-y-2" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                    return createVNode("details", {
                      name: "frequently-asked-question",
                      key: faq.question,
                      class: "border rounded-lg border-neutral-200 bg-white p-6"
                    }, [
                      createVNode("summary", { class: "text-lg cursor-pointer" }, toDisplayString(faq.question), 1),
                      createVNode("p", { class: "pt-2" }, toDisplayString(faq.answer), 1)
                    ]);
                  }), 64))
                ])
              ]),
              createVNode(_component_Callout, null, {
                default: withCtx(() => [
                  createVNode("h2", null, "Not sure which engagement is right for you?"),
                  createVNode("p", null, " That's what the intro call is for. It's 30 minutes, no obligation, and you'll leave with a clear picture of what would actually help your team. "),
                  createVNode(_component_ButtonLink, { to: "/contact/" }, {
                    default: withCtx(() => [
                      createTextVNode(" Send a message ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue5.mjs.map
