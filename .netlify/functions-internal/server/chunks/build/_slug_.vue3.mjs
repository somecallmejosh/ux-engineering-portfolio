import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_4 } from './TableOfContents.vue.mjs';
import { d as useRoute, e as useAsyncData, f as useRuntimeConfig, u as useHead, b as _sfc_main$2, h as __nuxt_component_0$1 } from './server.mjs';
import { withAsyncContext, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
import { _ as _sfc_main$1 } from './Breadcrumbs.vue2.mjs';
import { _ as _sfc_main$3 } from './AnimateImage.vue2.mjs';
import { _ as _sfc_main$4 } from './ContentRenderer.vue2.mjs';
import { _ as _sfc_main$5 } from './CardHeader.vue2.mjs';
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
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`projects-${slug}`, () => {
      return queryCollection("projects").path(`/projects/${slug}`).first();
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
      const _component_TableOfContents = __nuxt_component_4;
      const _component_ContentRenderer = _sfc_main$4;
      const _component_CardHeader = _sfc_main$5;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Breadcrumbs, {
              baseUrl: "projects",
              slug: `${unref(slug)}`,
              label: "Projects",
              title: unref(post).title
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:justify-between"${_scopeId}>`);
            if (unref(post)) {
              _push2(`<div class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageHeader, {
                class: "",
                pill: "Project",
                pillIcon: "ph:projector-screen-chart"
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
              _push2(ssrRenderComponent(_component_AnimateImage, {
                src: unref(post).image,
                alt: unref(post).meta.image_alt,
                scaleY: 0.75
              }, null, _parent2, _scopeId));
              _push2(`<article class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TableOfContents, {
                links: unref(post).body.toc.links
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ContentRenderer, { value: unref(post) }, null, _parent2, _scopeId));
              _push2(`</article></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(post).businessUrl) {
              _push2(`<aside class="lg:flex-1 shrink-0"${_scopeId}><div class="lg:sticky lg:top-16"${_scopeId}><div class="flex items-center gap-2 mb-6 lg:mt-20"${_scopeId}><span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(post).businessName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(post).businessName), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"${_scopeId}></span></div><div style="${ssrRenderStyle({ "overflow": "scroll" })}"${_scopeId}><div${_scopeId}><div class="relative mx-auto border-neutral-200 dark:border-neutral-200 bg-neutral-200 border-[14px] rounded-[2.5rem] h-[682px] w-full"${_scopeId}><div class="h-[32px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[72px] rounded-s-lg"${_scopeId}></div><div class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[124px] rounded-s-lg"${_scopeId}></div><div class="h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[178px] rounded-s-lg"${_scopeId}></div><div class="h-[64px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -end-[17px] top-[142px] rounded-e-lg"${_scopeId}></div><div class="rounded-[2rem] overflow-hidden h-[426px] h-[654px] bg-white dark:bg-neutral-200"${_scopeId}><iframe loading="lazy"${ssrRenderAttr("title", `${unref(post).businessName} website`)} class="w-full h-full"${ssrRenderAttr("src", unref(post).businessUrl)} frameborder="0"${_scopeId}></iframe></div></div></div></div><div class="flex items-center gap-2 mt-6"${_scopeId}><span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"${_scopeId}></span><a${ssrRenderAttr("href", unref(post).businessUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1 text-sm font-medium hover:underline block shrink-0"${_scopeId}><span${_scopeId}>Visit ${ssrInterpolate(unref(post).businessName)}</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:arrow-square-out",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`</a><span aria-hidden="true" class="bg-neutral-200 h-px block flex-1"${_scopeId}></span></div></div></aside>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_Breadcrumbs, {
                baseUrl: "projects",
                slug: `${unref(slug)}`,
                label: "Projects",
                title: unref(post).title
              }, null, 8, ["slug", "title"]),
              createVNode("div", { class: "flex flex-col lg:flex-row gap-12 lg:gap-24 lg:justify-between" }, [
                unref(post) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "prose"
                }, [
                  createVNode(_component_PageHeader, {
                    class: "",
                    pill: "Project",
                    pillIcon: "ph:projector-screen-chart"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(post).title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AnimateImage, {
                    src: unref(post).image,
                    alt: unref(post).meta.image_alt,
                    scaleY: 0.75
                  }, null, 8, ["src", "alt"]),
                  createVNode("article", { class: "prose" }, [
                    createVNode(_component_TableOfContents, {
                      links: unref(post).body.toc.links
                    }, null, 8, ["links"]),
                    createVNode(_component_ContentRenderer, { value: unref(post) }, null, 8, ["value"])
                  ])
                ])) : createCommentVNode("", true),
                unref(post).businessUrl ? (openBlock(), createBlock("aside", {
                  key: 1,
                  class: "lg:flex-1 shrink-0"
                }, [
                  createVNode("div", { class: "lg:sticky lg:top-16" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-6 lg:mt-20" }, [
                      createVNode("span", {
                        "aria-hidden": "true",
                        class: "bg-neutral-200 h-px block flex-1"
                      }),
                      createVNode(_component_CardHeader, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(post).businessName), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("span", {
                        "aria-hidden": "true",
                        class: "bg-neutral-200 h-px block flex-1"
                      })
                    ]),
                    createVNode("div", { style: { "overflow": "scroll" } }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "relative mx-auto border-neutral-200 dark:border-neutral-200 bg-neutral-200 border-[14px] rounded-[2.5rem] h-[682px] w-full" }, [
                          createVNode("div", { class: "h-[32px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[72px] rounded-s-lg" }),
                          createVNode("div", { class: "h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[124px] rounded-s-lg" }),
                          createVNode("div", { class: "h-[46px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -start-[17px] top-[178px] rounded-s-lg" }),
                          createVNode("div", { class: "h-[64px] w-[3px] bg-neutral-200 dark:bg-neutral-200 absolute -end-[17px] top-[142px] rounded-e-lg" }),
                          createVNode("div", { class: "rounded-[2rem] overflow-hidden h-[426px] h-[654px] bg-white dark:bg-neutral-200" }, [
                            createVNode("iframe", {
                              loading: "lazy",
                              title: `${unref(post).businessName} website`,
                              class: "w-full h-full",
                              src: unref(post).businessUrl,
                              frameborder: "0"
                            }, null, 8, ["title", "src"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center gap-2 mt-6" }, [
                      createVNode("span", {
                        "aria-hidden": "true",
                        class: "bg-neutral-200 h-px block flex-1"
                      }),
                      createVNode("a", {
                        href: unref(post).businessUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center justify-center gap-1 text-sm font-medium hover:underline block shrink-0"
                      }, [
                        createVNode("span", null, "Visit " + toDisplayString(unref(post).businessName), 1),
                        createVNode(_component_Icon, {
                          name: "ph:arrow-square-out",
                          class: "size-4"
                        })
                      ], 8, ["href"]),
                      createVNode("span", {
                        "aria-hidden": "true",
                        class: "bg-neutral-200 h-px block flex-1"
                      })
                    ])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue3.mjs.map
