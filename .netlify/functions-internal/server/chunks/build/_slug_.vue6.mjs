import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_3 } from './TagLinkList.vue.mjs';
import { h as humanize } from './humanize.mjs';
import { withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as useRoute, u as useHead, b as _sfc_main$2 } from './server.mjs';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$1 } from './Breadcrumbs.vue2.mjs';
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
import './OverflowX.vue.mjs';
import './AnimateImage.vue2.mjs';
import './NuxtImg.vue2.mjs';
import './CardHeader.vue2.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const allPosts = ([__temp, __restore] = withAsyncContext(() => queryCollection("dev_notes").order("publishedAt", "DESC").all()), __temp = await __temp, __restore(), __temp).filter((post) => Array.isArray(post.tags) && post.tags.includes(slug));
    useHead({
      title: `Dev notes category | ${slug}`,
      meta: [
        { property: "og:title", content: `Dev notes category | ${slug}` },
        { name: "description", content: "Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line." },
        { property: "og:description", content: "Welcome to my blog, where I explore how thoughtful UX Engineering can help businesses grow and deliver better digital products. I focus on real-world challenges, like maintaining design systems, streamlining workflows, and building accessible interfaces, and show how bridging design and development leads to happier teams and satisfied users. Each post offers insights into practical methods that boost both the user experience and the bottom line." },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1743977450/josh-portfolio/assets_task_01jr6jay59e3jayf6xxbtsbgca_img_0.webp" }
      ]
    });
    const postCount = allPosts.length;
    const articleLabel = postCount > 1 ? "Dev Notes" : "Dev Note";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_PageHeader = _sfc_main$2;
      const _component_TagLinkList = __nuxt_component_3;
      const _component_CardList = _sfc_main$3;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(allPosts)) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Breadcrumbs, {
                baseUrl: "dev-notes",
                slug: `${unref(slug)}`,
                category: true,
                label: "Dev Notes",
                title: unref(slug)
              }, null, _parent2, _scopeId));
              _push2(`<section aria-labelledby="page-header" class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageHeader, {
                pill: "Dev Notes Tags",
                pillIcon: "ph:notepad"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(postCount))} ${ssrInterpolate(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(unref(slug)))} ${ssrInterpolate(unref(articleLabel))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(postCount)) + " " + toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(unref(slug))) + " " + toDisplayString(unref(articleLabel)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</section>`);
              _push2(ssrRenderComponent(_component_TagLinkList, { collection: "dev_notes" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CardList, { list: unref(allPosts) }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(allPosts) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_Breadcrumbs, {
                  baseUrl: "dev-notes",
                  slug: `${unref(slug)}`,
                  category: true,
                  label: "Dev Notes",
                  title: unref(slug)
                }, null, 8, ["slug", "title"]),
                createVNode("section", {
                  "aria-labelledby": "page-header",
                  class: "prose"
                }, [
                  createVNode(_component_PageHeader, {
                    pill: "Dev Notes Tags",
                    pillIcon: "ph:notepad"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(postCount)) + " " + toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(unref(slug))) + " " + toDisplayString(unref(articleLabel)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_TagLinkList, { collection: "dev_notes" }),
                createVNode(_component_CardList, { list: unref(allPosts) }, null, 8, ["list"])
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dev-notes/tags/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue6.mjs.map
