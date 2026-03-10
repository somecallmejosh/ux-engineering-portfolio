import { _ as __nuxt_component_2 } from './Services.vue2.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, b as _sfc_main$1, _ as _export_sfc } from './server.mjs';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$2 } from './buttonLink.vue2.mjs';
import { _ as _sfc_main$3 } from './CardList.vue2.mjs';
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
import './AnimateImage.vue2.mjs';
import './NuxtImg.vue2.mjs';
import './CardHeader.vue2.mjs';

const title = "Josh Briley | Design Systems Engineer & Frontend Consultant";
const description = "Fixed-scope consulting for design system audits, component library builds, and handoff workflow improvements. Clear deliverables, clear pricing.";
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
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1743976906/josh-portfolio/assets_task_01jr6hvshff2gtyry2qwb7tqp9_img_0.webp" }
      ]
    });
    const paidServices = ([__temp, __restore] = withAsyncContext(() => queryCollection("services").where("isFree", "<>", true).where("isComingSoon", "<>", true).all()), __temp = await __temp, __restore(), __temp);
    const mostRecentBlog = ([__temp, __restore] = withAsyncContext(() => queryCollection("blog").order("publishedAt", "DESC").first()), __temp = await __temp, __restore(), __temp);
    const mostRecentDevNote = ([__temp, __restore] = withAsyncContext(() => queryCollection("dev_notes").order("publishedAt", "DESC").first()), __temp = await __temp, __restore(), __temp);
    const mostRecentProject = ([__temp, __restore] = withAsyncContext(() => queryCollection("projects").order("publishedAt", "DESC").first()), __temp = await __temp, __restore(), __temp);
    const combinedPosts = [
      mostRecentProject && {
        ...mostRecentProject,
        headline: "Latest Project",
        to: `/projects/${mostRecentProject.slug}/`
      },
      mostRecentBlog && {
        ...mostRecentBlog,
        headline: "Latest Blog Post",
        to: `/blog/${mostRecentBlog.slug}/`
      },
      mostRecentDevNote && {
        ...mostRecentDevNote,
        headline: "Latest Dev Note",
        to: `/dev-notes/${mostRecentDevNote.slug}/`
      }
    ].filter(Boolean);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = _sfc_main$1;
      const _component_ButtonLink = _sfc_main$2;
      const _component_Services = __nuxt_component_2;
      const _component_CardList = _sfc_main$3;
      const _component_Callout = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))} data-v-15f3b240><div class="space-y-16" data-v-15f3b240><section aria-describedby="page-header" class="prose" data-v-15f3b240>`);
      _push(ssrRenderComponent(_component_PageHeader, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`I help product teams build component libraries that scale, with accessibility built in from the start.`);
          } else {
            return [
              createTextVNode("I help product teams build component libraries that scale, with accessibility built in from the start.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mb-4" data-v-15f3b240>I&#39;m a Design Systems Engineer with 20 years of experience helping teams ship consistent, accessible interfaces and keep them that way.</p><div class="flex flex-col sm:flex-row lg:items-center gap-2" data-v-15f3b240>`);
      _push(ssrRenderComponent(_component_ButtonLink, { to: "/services/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View my services `);
          } else {
            return [
              createTextVNode(" View my services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonLink, {
        to: "/contact/",
        variant: "inverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get in touch `);
          } else {
            return [
              createTextVNode(" Get in touch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_Services, { services: unref(paidServices) }, null, _parent));
      _push(`<section aria-labelledby="recent" data-v-15f3b240><h2 class="text-2xl mb-4" id="recent" data-v-15f3b240>Recent work and writing</h2>`);
      _push(ssrRenderComponent(_component_CardList, {
        list: unref(combinedPosts),
        label: "Recent work and writing"
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_Callout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 id="get-started" data-v-15f3b240${_scopeId}>Want to work together?</h2><p data-v-15f3b240${_scopeId}>Whether you need a full audit or a component library foundation, get in touch to see if we&#39;re a good fit.</p>`);
            _push2(ssrRenderComponent(_component_ButtonLink, { to: "/contact/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get in touch `);
                } else {
                  return [
                    createTextVNode(" Get in touch ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { id: "get-started" }, "Want to work together?"),
              createVNode("p", null, "Whether you need a full audit or a component library foundation, get in touch to see if we're a good fit."),
              createVNode(_component_ButtonLink, { to: "/contact/" }, {
                default: withCtx(() => [
                  createTextVNode(" Get in touch ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15f3b240"]]);

export { index as default };
//# sourceMappingURL=index.vue3.mjs.map
