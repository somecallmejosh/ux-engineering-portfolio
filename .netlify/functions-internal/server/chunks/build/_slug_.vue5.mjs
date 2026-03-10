import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_4 } from './TableOfContents.vue.mjs';
import { _ as __nuxt_component_3 } from './TagLinkList.vue.mjs';
import __nuxt_component_8 from './CallOut.vue.mjs';
import { d as useRoute, e as useAsyncData, f as useRuntimeConfig, u as useHead, b as _sfc_main$2, g as __nuxt_component_1 } from './server.mjs';
import { withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$1 } from './Breadcrumbs.vue2.mjs';
import { _ as _sfc_main$3 } from './AnimateImage.vue2.mjs';
import { _ as _sfc_main$4 } from './TagLinks.vue2.mjs';
import { _ as _sfc_main$5 } from './ContentRenderer.vue2.mjs';
import './humanize.mjs';
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
import './NuxtImg.vue2.mjs';
import 'property-information';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`dev-notes-${slug}`, () => {
      return queryCollection("dev_notes").path(`/dev-notes/${slug}`).first();
    })), __temp = await __temp, __restore(), __temp);
    const siteUrl = useRuntimeConfig().public.siteUrl;
    const ogImage = computed(() => {
      var _a2;
      const img = (_a2 = post.value) == null ? void 0 : _a2.image;
      if (!img) return void 0;
      return img.startsWith("http") ? img : `${siteUrl}${img}`;
    });
    useHead({
      title: (_a = post.value) == null ? void 0 : _a.title,
      meta: [
        { property: "og:title", content: (_b = post.value) == null ? void 0 : _b.title },
        { name: "description", content: (_c = post.value) == null ? void 0 : _c.description },
        { property: "og:description", content: (_d = post.value) == null ? void 0 : _d.description },
        { property: "og:image", content: ogImage.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_Breadcrumbs = _sfc_main$1;
      const _component_PageHeader = _sfc_main$2;
      const _component_AnimateImage = _sfc_main$3;
      const _component_TagLinks = _sfc_main$4;
      const _component_TableOfContents = __nuxt_component_4;
      const _component_ContentRenderer = _sfc_main$5;
      const _component_TagLinkList = __nuxt_component_3;
      const _component_CallOut = __nuxt_component_8;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              baseUrl: "dev-notes",
              slug: `${unref(slug)}`,
              label: "Dev Notes",
              title: unref(post).title
            }, null, _parent2, _scopeId));
            if (unref(post)) {
              _push2(`<div class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageHeader, {
                pill: "Dev Note",
                pillIcon: "ph:notepad",
                publishedAt: unref(post).publishedAt
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(post).title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(post).title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<figure${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AnimateImage, {
                src: unref(post).image,
                alt: unref(post).meta.image_alt,
                scaleY: 0.75
              }, null, _parent2, _scopeId));
              _push2(`</figure><article${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TagLinks, {
                tag: "dev-notes",
                collection: unref(post).tags,
                title: "Tags"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TableOfContents, {
                links: unref(post).body.toc.links
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(post) }, null, _parent2, _scopeId));
              _push2(`</article><aside class="space-y-6 lg:space-y-12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TagLinkList, {
                title: "Dev Notes Tags",
                collection: "dev_notes"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CallOut, { class: "mb-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<strong${_scopeId2}>Dev Notes Disclaimer</strong>: Each article in the <em${_scopeId2}>Dev Notes</em> section of my website may or may not be unfinished work. I don&#39;t always have time to write a full post. If you see something that looks like a half-baked idea, it probably is! As with anything you find on the internet, be sure to review and understand the script or code before running it, especially if you plan to modify it. Always back up any important data before making bulk changes to your repositories. If you have any questions or suggestions, feel free to `);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/contact/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`reach out`);
                        } else {
                          return [
                            createTextVNode("reach out")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`.`);
                  } else {
                    return [
                      createVNode("strong", null, "Dev Notes Disclaimer"),
                      createTextVNode(": Each article in the "),
                      createVNode("em", null, "Dev Notes"),
                      createTextVNode(" section of my website may or may not be unfinished work. I don't always have time to write a full post. If you see something that looks like a half-baked idea, it probably is! As with anything you find on the internet, be sure to review and understand the script or code before running it, especially if you plan to modify it. Always back up any important data before making bulk changes to your repositories. If you have any questions or suggestions, feel free to "),
                      createVNode(_component_NuxtLink, { to: "/contact/" }, {
                        default: withCtx(() => [
                          createTextVNode("reach out")
                        ]),
                        _: 1
                      }),
                      createTextVNode(".")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</aside></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                baseUrl: "dev-notes",
                slug: `${unref(slug)}`,
                label: "Dev Notes",
                title: unref(post).title
              }, null, 8, ["slug", "title"]),
              unref(post) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "prose"
              }, [
                createVNode(_component_PageHeader, {
                  pill: "Dev Note",
                  pillIcon: "ph:notepad",
                  publishedAt: unref(post).publishedAt
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(post).title), 1)
                  ]),
                  _: 1
                }, 8, ["publishedAt"]),
                createVNode("figure", null, [
                  createVNode(_component_AnimateImage, {
                    src: unref(post).image,
                    alt: unref(post).meta.image_alt,
                    scaleY: 0.75
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("article", null, [
                  createVNode(_component_TagLinks, {
                    tag: "dev-notes",
                    collection: unref(post).tags,
                    title: "Tags"
                  }, null, 8, ["collection"]),
                  createVNode(_component_TableOfContents, {
                    links: unref(post).body.toc.links
                  }, null, 8, ["links"]),
                  createVNode(_component_ContentRenderer, { value: unref(post) }, null, 8, ["value"])
                ]),
                createVNode("aside", { class: "space-y-6 lg:space-y-12" }, [
                  createVNode(_component_TagLinkList, {
                    title: "Dev Notes Tags",
                    collection: "dev_notes"
                  }),
                  createVNode(_component_CallOut, { class: "mb-6" }, {
                    default: withCtx(() => [
                      createVNode("strong", null, "Dev Notes Disclaimer"),
                      createTextVNode(": Each article in the "),
                      createVNode("em", null, "Dev Notes"),
                      createTextVNode(" section of my website may or may not be unfinished work. I don't always have time to write a full post. If you see something that looks like a half-baked idea, it probably is! As with anything you find on the internet, be sure to review and understand the script or code before running it, especially if you plan to modify it. Always back up any important data before making bulk changes to your repositories. If you have any questions or suggestions, feel free to "),
                      createVNode(_component_NuxtLink, { to: "/contact/" }, {
                        default: withCtx(() => [
                          createTextVNode("reach out")
                        ]),
                        _: 1
                      }),
                      createTextVNode(".")
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dev-notes/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue5.mjs.map
