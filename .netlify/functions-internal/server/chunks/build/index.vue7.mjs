import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_3 } from './TagLinkList.vue.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, b as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$1 } from './Breadcrumbs.vue2.mjs';
import './humanize.mjs';
import './app.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Blog Categories`,
      meta: [
        { property: "og:title", content: `Blog Categories` },
        { name: "description", content: "Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line." },
        { property: "og:description", content: "Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line." },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_PageHeader = _sfc_main$2;
      const _component_TagLinkList = __nuxt_component_3;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              baseUrl: "dev-notes",
              slug: "categories",
              label: "Dev Notes",
              title: "Categories"
            }, null, _parent2, _scopeId));
            _push2(`<section aria-labelledby="page-header" class="prose"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, {
              pill: "Dev Notes Tags",
              pillIcon: "ph:notepad"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dev Notes Tags`);
                } else {
                  return [
                    createTextVNode("Dev Notes Tags")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_component_TagLinkList, {
              title: "Dev Notes Links",
              collection: "blog"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                baseUrl: "dev-notes",
                slug: "categories",
                label: "Dev Notes",
                title: "Categories"
              }),
              createVNode("section", {
                "aria-labelledby": "page-header",
                class: "prose"
              }, [
                createVNode(_component_PageHeader, {
                  pill: "Dev Notes Tags",
                  pillIcon: "ph:notepad"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Dev Notes Tags")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_TagLinkList, {
                title: "Dev Notes Links",
                collection: "blog"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dev-notes/tags/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue7.mjs.map
