import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { c as createError, u as useHead, b as _sfc_main$1, g as __nuxt_component_1 } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$2 } from './ContentRenderer.vue2.mjs';
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
import 'property-information';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const checklist = ([__temp, __restore] = withAsyncContext(() => queryCollection("checklist").path("/checklist").first()), __temp = await __temp, __restore(), __temp);
    if (!checklist) {
      throw createError({ statusCode: 404, statusMessage: "Not found" });
    }
    useHead({
      meta: [{ name: "robots", content: "noindex, nofollow" }]
    });
    useHead({
      title: `${checklist.title} | Josh Briley`,
      meta: [
        { name: "description", content: "A self-assessment checklist covering the five dimensions of a healthy design system: component consistency, accessibility, token architecture, documentation, and handoff process." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_Callout = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_ButtonLink = _sfc_main$3;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(checklist).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(checklist).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><div class="prose max-w-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(checklist) }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Callout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2${_scopeId2}>Want a deeper analysis?</h2><p${_scopeId2}> The paid `);
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
                  _push3(` covers the same five dimensions with expert analysis, a written report, and a prioritized remediation roadmap delivered in 5 business days. </p>`);
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
                    createVNode("h2", null, "Want a deeper analysis?"),
                    createVNode("p", null, [
                      createTextVNode(" The paid "),
                      createVNode(_component_NuxtLink, { to: "/services/audit/" }, {
                        default: withCtx(() => [
                          createTextVNode("Design System Audit")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" covers the same five dimensions with expert analysis, a written report, and a prioritized remediation roadmap delivered in 5 business days. ")
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
          } else {
            return [
              createVNode("section", { class: "prose" }, [
                createVNode(_component_PageHeader, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(checklist).title), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "prose max-w-none" }, [
                createVNode(_component_ContentRenderer, { value: unref(checklist) }, null, 8, ["value"])
              ]),
              createVNode(_component_Callout, null, {
                default: withCtx(() => [
                  createVNode("h2", null, "Want a deeper analysis?"),
                  createVNode("p", null, [
                    createTextVNode(" The paid "),
                    createVNode(_component_NuxtLink, { to: "/services/audit/" }, {
                      default: withCtx(() => [
                        createTextVNode("Design System Audit")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" covers the same five dimensions with expert analysis, a written report, and a prioritized remediation roadmap delivered in 5 business days. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checklist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue9.mjs.map
