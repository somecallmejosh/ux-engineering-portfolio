import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { withAsyncContext, withCtx, createTextVNode, unref, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { u as useHead, b as _sfc_main$1 } from './server.mjs';
import { _ as _sfc_main$2 } from './CardList.vue2.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const allPosts = ([__temp, __restore] = withAsyncContext(() => queryCollection("projects").order("publishedAt", "DESC").all()), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Recent Projects",
      meta: [
        { property: "og:title", content: "Recent Projects" },
        { name: "description", content: "UX engineering projects including component libraries, design systems, and accessible web applications built for real teams." },
        { property: "og:description", content: "UX engineering projects including component libraries, design systems, and accessible web applications built for real teams." },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1743976705/josh-portfolio/assets_task_01jr6hnahyf2bbdjwb1z36f03n_img_0.webp" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_CardList = _sfc_main$2;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section aria-labelledby="page-header" class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, {
              pill: "Projects",
              pillIcon: "ph:projector-screen-chart"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Recent Projects `);
                } else {
                  return [
                    createTextVNode("Recent Projects ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}> Component libraries, design systems, and accessible web applications built for real teams with real constraints. </p></section>`);
            if (unref(allPosts)) {
              _push2(ssrRenderComponent(_component_CardList, { list: unref(allPosts) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("section", {
                "aria-labelledby": "page-header",
                class: "prose"
              }, [
                createVNode(_component_PageHeader, {
                  pill: "Projects",
                  pillIcon: "ph:projector-screen-chart"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Recent Projects ")
                  ]),
                  _: 1
                }),
                createVNode("p", null, " Component libraries, design systems, and accessible web applications built for real teams with real constraints. ")
              ]),
              unref(allPosts) ? (openBlock(), createBlock(_component_CardList, {
                key: 0,
                list: unref(allPosts)
              }, null, 8, ["list"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue4.mjs.map
