import { _ as __nuxt_component_0$1 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { h as __nuxt_component_0, g as __nuxt_component_1, d as useRoute, c as createError, u as useHead, b as _sfc_main$3, _ as _export_sfc } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, defineComponent, withAsyncContext, toDisplayString, createVNode, createBlock, openBlock, Fragment, createCommentVNode, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$2 } from './Breadcrumbs.vue2.mjs';
import { _ as _sfc_main$4 } from './buttonLink.vue2.mjs';
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
import './OverflowX.vue.mjs';
import './humanize.mjs';

const _sfc_main$1 = {
  __name: "ChecklistSignup",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const emailValid = ref(true);
    const loading = ref(false);
    const submitError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        novalidate: "",
        class: "space-y-3 prose"
      }, _attrs))}><div class="flex flex-col gap-3"><div class="flex-1 space-y-2"><label for="checklist-email" class="inline-block">Email address</label><input id="checklist-email"${ssrRenderAttr("value", unref(email))} type="email" name="email" placeholder="you@company.com" autocomplete="email"${ssrRenderAttr("aria-invalid", unref(emailValid) === false || void 0)} aria-describedby="checklist-email-error" class="${ssrRenderClass([{ "border-red-600": unref(emailValid) === false }, "w-full px-4 py-[11px] border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"])}">`);
      if (unref(emailValid) === false) {
        _push(`<small id="checklist-email-error" role="alert" class="block text-red-600">Enter a valid email address</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:spinner",
          class: "animate-spin",
          size: "1rem",
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:file-pdf",
          size: "1rem",
          "aria-hidden": "true"
        }, null, _parent));
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Sending…" : "Get the free checklist")}</button></div></div>`);
      if (unref(submitError)) {
        _push(`<small role="alert" class="block text-red-600">Something went wrong. Please try again or `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact/",
          class: "underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`get in touch directly`);
            } else {
              return [
                createTextVNode("get in touch directly")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. </small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChecklistSignup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const service = ([__temp, __restore] = withAsyncContext(() => queryCollection("services").path(`/services/${slug}`).first()), __temp = await __temp, __restore(), __temp);
    if (!service) {
      throw createError({ statusCode: 404, statusMessage: "Service not found" });
    }
    useHead({
      title: `${service.label} | Josh Briley`,
      meta: [
        { property: "og:title", content: `${service.label} | Josh Briley` },
        { name: "description", content: service.description },
        { property: "og:description", content: service.description }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0$1;
      const _component_Breadcrumbs = _sfc_main$2;
      const _component_PageHeader = _sfc_main$3;
      const _component_ButtonLink = _sfc_main$4;
      const _component_Callout = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0;
      const _component_ChecklistSignup = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              baseUrl: "services",
              slug: unref(slug),
              label: "Services",
              title: unref(service).label
            }, null, _parent2, _scopeId));
            if (unref(service).isComingSoon) {
              _push2(`<!--[--><section class="space-y-6" data-v-f06576b4${_scopeId}><span class="text-xs inline-flex font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 rounded-full px-3 py-1" data-v-f06576b4${_scopeId}>Coming soon</span>`);
              _push2(ssrRenderComponent(_component_PageHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-xl text-neutral-600 leading-relaxed max-w-2xl" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).tagline)}</p><div class="not-prose" data-v-f06576b4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Join the waitlist`);
                  } else {
                    return [
                      createTextVNode("Join the waitlist")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></section>`);
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 data-v-f06576b4${_scopeId2}>Who it&#39;s for</h2><p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audience)}</p><p class="text-neutral-600 leading-relaxed" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audienceDetail)}</p>`);
                  } else {
                    return [
                      createVNode("h2", null, "Who it's for"),
                      createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                      createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<section class="space-y-4" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>What&#39;s included</h2><p data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).outcomeFull)}</p></div><ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose" data-v-f06576b4${_scopeId}><!--[-->`);
              ssrRenderList(unref(service).includesFull, (item) => {
                _push2(`<li class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4" data-v-f06576b4${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:check-circle",
                  class: "shrink-0 text-green-500 translate-y-0.5",
                  size: "1.25rem",
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
                _push2(`<span class="leading-relaxed" data-v-f06576b4${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul></section>`);
              if (unref(service).insight) {
                _push2(`<section class="border-l-4 border-neutral-900 pl-8 space-y-2" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>Why this matters</h2><p data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).insight)}</p></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 data-v-f06576b4${_scopeId2}>Interested in this when it launches?</h2><p data-v-f06576b4${_scopeId2}>Get in touch with &quot;Rails starter&quot; in your message and I&#39;ll reach out when it&#39;s available.</p>`);
                    _push3(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Join the waitlist`);
                        } else {
                          return [
                            createTextVNode("Join the waitlist")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h2", null, "Interested in this when it launches?"),
                      createVNode("p", null, `Get in touch with "Rails starter" in your message and I'll reach out when it's available.`),
                      createVNode(_component_ButtonLink, { to: "/contact/" }, {
                        default: withCtx(() => [
                          createTextVNode("Join the waitlist")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else if (unref(service).isFree) {
              _push2(`<!--[--><section class="space-y-6" data-v-f06576b4${_scopeId}><span class="text-xs inline-block font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full px-3 py-1" data-v-f06576b4${_scopeId}>Free resource</span>`);
              _push2(ssrRenderComponent(_component_PageHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-xl text-neutral-600 leading-relaxed max-w-2xl" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).tagline)}</p>`);
              _push2(ssrRenderComponent(_component_ChecklistSignup, null, null, _parent2, _scopeId));
              _push2(`</section>`);
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 data-v-f06576b4${_scopeId2}>Who it&#39;s for</h2><p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audience)}</p><p class="text-neutral-600 leading-relaxed" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audienceDetail)}</p>`);
                  } else {
                    return [
                      createVNode("h2", null, "Who it's for"),
                      createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                      createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<section class="space-y-6" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>What it covers</h2><p data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).outcomeFull)}</p></div><ul class="grid sm:grid-cols-2 gap-3 list-none p-0 not-prose" data-v-f06576b4${_scopeId}><!--[-->`);
              ssrRenderList(unref(service).includesFull, (item) => {
                _push2(`<li class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4" data-v-f06576b4${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:check-circle",
                  class: "shrink-0 text-green-500 translate-y-0.5",
                  size: "1.25rem",
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-sm leading-relaxed" data-v-f06576b4${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul></section>`);
              if (unref(service).process) {
                _push2(`<section class="space-y-6" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>How to use it</h2></div><ol class="list-none p-0 not-prose space-y-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-v-f06576b4${_scopeId}><!--[-->`);
                ssrRenderList(unref(service).process, (step, i) => {
                  _push2(`<li class="flex gap-6 items-start" data-v-f06576b4${_scopeId}><span class="step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none" aria-hidden="true" data-v-f06576b4${_scopeId}>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><div class="pt-1" data-v-f06576b4${_scopeId}><p class="font-semibold text-neutral-900 mb-1" data-v-f06576b4${_scopeId}>${ssrInterpolate(step.title)}</p><p class="text-neutral-600 leading-relaxed" data-v-f06576b4${_scopeId}>${ssrInterpolate(step.description)}</p></div></li>`);
                });
                _push2(`<!--]--></ol></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(service).insight) {
                _push2(`<section class="border-l-4 border-neutral-900 pl-8 space-y-2" data-v-f06576b4${_scopeId}><h2 class="text-xs font-semibold tracking-widest uppercase text-neutral-400" data-v-f06576b4${_scopeId}>What this unlocks</h2><p class="text-lg text-neutral-700 leading-relaxed italic" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).insight)}</p></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 data-v-f06576b4${_scopeId2}>Ready to go deeper?</h2><p data-v-f06576b4${_scopeId2}> If the checklist surfaces gaps you&#39;re not sure how to prioritize, the paid `);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/services/audit/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Design System Audit`);
                        } else {
                          return [
                            createTextVNode("Design System Audit")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` covers the same criteria with expert analysis, a written report, and a remediation roadmap. </p>`);
                    _push3(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Get in touch`);
                        } else {
                          return [
                            createTextVNode("Get in touch")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h2", null, "Ready to go deeper?"),
                      createVNode("p", null, [
                        createTextVNode(" If the checklist surfaces gaps you're not sure how to prioritize, the paid "),
                        createVNode(_component_NuxtLink, { to: "/services/audit/" }, {
                          default: withCtx(() => [
                            createTextVNode("Design System Audit")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" covers the same criteria with expert analysis, a written report, and a remediation roadmap. ")
                      ]),
                      createVNode(_component_ButtonLink, { to: "/contact/" }, {
                        default: withCtx(() => [
                          createTextVNode("Get in touch")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[--><section class="space-y-6" data-v-f06576b4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(service).label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="text-xl text-neutral-600 leading-relaxed max-w-2xl" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).tagline)}</p><dl class="flex flex-wrap gap-2 items-center not-prose" data-v-f06576b4${_scopeId}><div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5" data-v-f06576b4${_scopeId}><dt class="sr-only" data-v-f06576b4${_scopeId}>Price</dt><dd class="price font-semibold text-lg leading-none" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).price)}</dd></div><div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-neutral-600" data-v-f06576b4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:clock",
                size: "1rem",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<dt class="sr-only" data-v-f06576b4${_scopeId}>Timeline</dt><dd data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).timeline)}</dd></div><div class="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-neutral-600" data-v-f06576b4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:file-text",
                size: "1rem",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`<dt class="sr-only" data-v-f06576b4${_scopeId}>Delivered as</dt><dd data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).deliveredAs)}</dd></div></dl><div class="not-prose" data-v-f06576b4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Get started`);
                  } else {
                    return [
                      createTextVNode("Get started")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></section>`);
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3" data-v-f06576b4${_scopeId2}>Who it&#39;s for</p><p class="text-lg font-medium text-neutral-900 leading-relaxed mb-2" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audience)}</p><p class="text-neutral-600 leading-relaxed" data-v-f06576b4${_scopeId2}>${ssrInterpolate(unref(service).audienceDetail)}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3" }, "Who it's for"),
                      createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                      createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<section class="space-y-4" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>What&#39;s included</h2><p data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).outcomeFull)}</p></div><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose" data-v-f06576b4${_scopeId}><!--[-->`);
              ssrRenderList(unref(service).includesFull, (item) => {
                _push2(`<li class="flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4" data-v-f06576b4${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:check-circle",
                  class: "shrink-0 text-green-500 translate-y-0.5",
                  size: "1.25rem",
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
                _push2(`<span class="leading-relaxed" data-v-f06576b4${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul></section>`);
              if (unref(service).process) {
                _push2(`<section class="space-y-4" data-v-f06576b4${_scopeId}><div class="prose" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>How it works</h2></div><ol class="list-none p-0 not-prose space-y-6 grid small:grid-cols-2 gap-6" data-v-f06576b4${_scopeId}><!--[-->`);
                ssrRenderList(unref(service).process, (step, i) => {
                  _push2(`<li class="flex gap-6 items-start" data-v-f06576b4${_scopeId}><span class="step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none" aria-hidden="true" data-v-f06576b4${_scopeId}>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><div class="pt-1" data-v-f06576b4${_scopeId}><p class="font-semibold text-neutral-900 mb-1" data-v-f06576b4${_scopeId}>${ssrInterpolate(step.title)}</p><p class="text-neutral-600 leading-relaxed" data-v-f06576b4${_scopeId}>${ssrInterpolate(step.description)}</p></div></li>`);
                });
                _push2(`<!--]--></ol></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(service).testimonial) {
                _push2(`<blockquote class="not-prose border-l-4 border-neutral-200 pl-8 space-y-3" data-v-f06576b4${_scopeId}><p class="text-xl italic text-neutral-700 leading-relaxed" data-v-f06576b4${_scopeId}>&quot;${ssrInterpolate(unref(service).testimonial.quote)}&quot;</p><cite class="font-semibold not-italic block" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).testimonial.author)}, <span class="font-normal text-neutral-500" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).testimonial.role)}</span></cite></blockquote>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(service).insight) {
                _push2(`<section aria-labelledby="insight-heading" class="border-l-4 border-neutral-900 pl-8 space-y-2" data-v-f06576b4${_scopeId}><h2 data-v-f06576b4${_scopeId}>Why teams pay for this</h2><p class="text-lg text-neutral-700 leading-relaxed italic" data-v-f06576b4${_scopeId}>${ssrInterpolate(unref(service).insight)}</p></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Callout, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 data-v-f06576b4${_scopeId2}>Ready to get started?</h2><p data-v-f06576b4${_scopeId2}>Get in touch to see if we&#39;re a good fit. No lengthy sales process — just a short conversation about what your team needs.</p>`);
                    _push3(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Send a message`);
                        } else {
                          return [
                            createTextVNode("Send a message")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h2", null, "Ready to get started?"),
                      createVNode("p", null, "Get in touch to see if we're a good fit. No lengthy sales process — just a short conversation about what your team needs."),
                      createVNode(_component_ButtonLink, { to: "/contact/" }, {
                        default: withCtx(() => [
                          createTextVNode("Send a message")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                baseUrl: "services",
                slug: unref(slug),
                label: "Services",
                title: unref(service).label
              }, null, 8, ["slug", "title"]),
              unref(service).isComingSoon ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("section", { class: "space-y-6" }, [
                  createVNode("span", { class: "text-xs inline-flex font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 rounded-full px-3 py-1" }, "Coming soon"),
                  createVNode(_component_PageHeader, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-xl text-neutral-600 leading-relaxed max-w-2xl" }, toDisplayString(unref(service).tagline), 1),
                  createVNode("div", { class: "not-prose" }, [
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode("Join the waitlist")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("h2", null, "Who it's for"),
                    createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                    createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                  ]),
                  _: 1
                }),
                createVNode("section", { class: "space-y-4" }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "What's included"),
                    createVNode("p", null, toDisplayString(unref(service).outcomeFull), 1)
                  ]),
                  createVNode("ul", { class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(service).includesFull, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: "flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4"
                      }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle",
                          class: "shrink-0 text-green-500 translate-y-0.5",
                          size: "1.25rem",
                          "aria-hidden": "true"
                        }),
                        createVNode("span", { class: "leading-relaxed" }, toDisplayString(item), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                unref(service).insight ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "border-l-4 border-neutral-900 pl-8 space-y-2"
                }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "Why this matters"),
                    createVNode("p", null, toDisplayString(unref(service).insight), 1)
                  ])
                ])) : createCommentVNode("", true),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("h2", null, "Interested in this when it launches?"),
                    createVNode("p", null, `Get in touch with "Rails starter" in your message and I'll reach out when it's available.`),
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode("Join the waitlist")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)) : unref(service).isFree ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("section", { class: "space-y-6" }, [
                  createVNode("span", { class: "text-xs inline-block font-semibold tracking-widest uppercase text-blue-600 border border-blue-200 rounded-full px-3 py-1" }, "Free resource"),
                  createVNode(_component_PageHeader, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-xl text-neutral-600 leading-relaxed max-w-2xl" }, toDisplayString(unref(service).tagline), 1),
                  createVNode(_component_ChecklistSignup)
                ]),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("h2", null, "Who it's for"),
                    createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                    createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                  ]),
                  _: 1
                }),
                createVNode("section", { class: "space-y-6" }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "What it covers"),
                    createVNode("p", null, toDisplayString(unref(service).outcomeFull), 1)
                  ]),
                  createVNode("ul", { class: "grid sm:grid-cols-2 gap-3 list-none p-0 not-prose" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(service).includesFull, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: "flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4"
                      }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle",
                          class: "shrink-0 text-green-500 translate-y-0.5",
                          size: "1.25rem",
                          "aria-hidden": "true"
                        }),
                        createVNode("span", { class: "text-sm leading-relaxed" }, toDisplayString(item), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                unref(service).process ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "space-y-6"
                }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "How to use it")
                  ]),
                  createVNode("ol", { class: "list-none p-0 not-prose space-y-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(service).process, (step, i) => {
                      return openBlock(), createBlock("li", {
                        key: step.title,
                        class: "flex gap-6 items-start"
                      }, [
                        createVNode("span", {
                          class: "step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none",
                          "aria-hidden": "true"
                        }, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                        createVNode("div", { class: "pt-1" }, [
                          createVNode("p", { class: "font-semibold text-neutral-900 mb-1" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(step.description), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                unref(service).insight ? (openBlock(), createBlock("section", {
                  key: 1,
                  class: "border-l-4 border-neutral-900 pl-8 space-y-2"
                }, [
                  createVNode("h2", { class: "text-xs font-semibold tracking-widest uppercase text-neutral-400" }, "What this unlocks"),
                  createVNode("p", { class: "text-lg text-neutral-700 leading-relaxed italic" }, toDisplayString(unref(service).insight), 1)
                ])) : createCommentVNode("", true),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("h2", null, "Ready to go deeper?"),
                    createVNode("p", null, [
                      createTextVNode(" If the checklist surfaces gaps you're not sure how to prioritize, the paid "),
                      createVNode(_component_NuxtLink, { to: "/services/audit/" }, {
                        default: withCtx(() => [
                          createTextVNode("Design System Audit")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" covers the same criteria with expert analysis, a written report, and a remediation roadmap. ")
                    ]),
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode("Get in touch")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode("section", { class: "space-y-6" }, [
                  createVNode(_component_PageHeader, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(service).label), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-xl text-neutral-600 leading-relaxed max-w-2xl" }, toDisplayString(unref(service).tagline), 1),
                  createVNode("dl", { class: "flex flex-wrap gap-2 items-center not-prose" }, [
                    createVNode("div", { class: "flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5" }, [
                      createVNode("dt", { class: "sr-only" }, "Price"),
                      createVNode("dd", { class: "price font-semibold text-lg leading-none" }, toDisplayString(unref(service).price), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-neutral-600" }, [
                      createVNode(_component_Icon, {
                        name: "ph:clock",
                        size: "1rem",
                        "aria-hidden": "true"
                      }),
                      createVNode("dt", { class: "sr-only" }, "Timeline"),
                      createVNode("dd", null, toDisplayString(unref(service).timeline), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-neutral-600" }, [
                      createVNode(_component_Icon, {
                        name: "ph:file-text",
                        size: "1rem",
                        "aria-hidden": "true"
                      }),
                      createVNode("dt", { class: "sr-only" }, "Delivered as"),
                      createVNode("dd", null, toDisplayString(unref(service).deliveredAs), 1)
                    ])
                  ]),
                  createVNode("div", { class: "not-prose" }, [
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode("Get started")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3" }, "Who it's for"),
                    createVNode("p", { class: "text-lg font-medium text-neutral-900 leading-relaxed mb-2" }, toDisplayString(unref(service).audience), 1),
                    createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(unref(service).audienceDetail), 1)
                  ]),
                  _: 1
                }),
                createVNode("section", { class: "space-y-4" }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "What's included"),
                    createVNode("p", null, toDisplayString(unref(service).outcomeFull), 1)
                  ]),
                  createVNode("ul", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 not-prose" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(service).includesFull, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: "flex gap-3 items-start rounded-lg border border-neutral-200 bg-white p-4"
                      }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle",
                          class: "shrink-0 text-green-500 translate-y-0.5",
                          size: "1.25rem",
                          "aria-hidden": "true"
                        }),
                        createVNode("span", { class: "leading-relaxed" }, toDisplayString(item), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                unref(service).process ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "space-y-4"
                }, [
                  createVNode("div", { class: "prose" }, [
                    createVNode("h2", null, "How it works")
                  ]),
                  createVNode("ol", { class: "list-none p-0 not-prose space-y-6 grid small:grid-cols-2 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(service).process, (step, i) => {
                      return openBlock(), createBlock("li", {
                        key: step.title,
                        class: "flex gap-6 items-start"
                      }, [
                        createVNode("span", {
                          class: "step-number price text-5xl text-neutral-200 shrink-0 leading-none select-none",
                          "aria-hidden": "true"
                        }, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                        createVNode("div", { class: "pt-1" }, [
                          createVNode("p", { class: "font-semibold text-neutral-900 mb-1" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-neutral-600 leading-relaxed" }, toDisplayString(step.description), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                unref(service).testimonial ? (openBlock(), createBlock("blockquote", {
                  key: 1,
                  class: "not-prose border-l-4 border-neutral-200 pl-8 space-y-3"
                }, [
                  createVNode("p", { class: "text-xl italic text-neutral-700 leading-relaxed" }, '"' + toDisplayString(unref(service).testimonial.quote) + '"', 1),
                  createVNode("cite", { class: "font-semibold not-italic block" }, [
                    createTextVNode(toDisplayString(unref(service).testimonial.author) + ", ", 1),
                    createVNode("span", { class: "font-normal text-neutral-500" }, toDisplayString(unref(service).testimonial.role), 1)
                  ])
                ])) : createCommentVNode("", true),
                unref(service).insight ? (openBlock(), createBlock("section", {
                  key: 2,
                  "aria-labelledby": "insight-heading",
                  class: "border-l-4 border-neutral-900 pl-8 space-y-2"
                }, [
                  createVNode("h2", null, "Why teams pay for this"),
                  createVNode("p", { class: "text-lg text-neutral-700 leading-relaxed italic" }, toDisplayString(unref(service).insight), 1)
                ])) : createCommentVNode("", true),
                createVNode(_component_Callout, null, {
                  default: withCtx(() => [
                    createVNode("h2", null, "Ready to get started?"),
                    createVNode("p", null, "Get in touch to see if we're a good fit. No lengthy sales process — just a short conversation about what your team needs."),
                    createVNode(_component_ButtonLink, { to: "/contact/" }, {
                      default: withCtx(() => [
                        createTextVNode("Send a message")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f06576b4"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.vue4.mjs.map
