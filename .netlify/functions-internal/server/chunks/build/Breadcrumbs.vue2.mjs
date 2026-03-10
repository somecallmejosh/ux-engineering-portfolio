import __nuxt_component_0 from './OverflowX.vue.mjs';
import { g as __nuxt_component_1, h as __nuxt_component_0$1 } from './server.mjs';
import { h as humanize } from './humanize.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, unref, createVNode, createBlock, createCommentVNode, openBlock } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    slug: {},
    label: {},
    baseUrl: {},
    title: {},
    category: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    function finalPath() {
      return props.category ? `/${props.baseUrl}/tags/${props.slug}/` : `/${props.baseUrl}/${props.slug}/`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OverflowX = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_OverflowX, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav aria-label="Breadcrumbs"${_scopeId}><ol class="not-prose text-sm flex gap-3 relative z-0"${_scopeId}><li class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/${_ctx.baseUrl}/`,
              class: "hover:underline text-nowrap"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              class: "size-3 opacity-30",
              name: "ph:caret-right-fill"
            }, null, _parent2, _scopeId));
            _push2(`</li>`);
            if (_ctx.category) {
              _push2(`<li class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/${_ctx.baseUrl}/tags/`,
                class: "hover:underline text-nowrap"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Tags`);
                  } else {
                    return [
                      createTextVNode("Tags")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Icon, {
                class: "size-3 opacity-30",
                name: "ph:caret-right-fill"
              }, null, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<li class="text-neutral-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: finalPath(),
              class: "text-nowrap"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(_ctx.title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(_ctx.title)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ol></nav>`);
          } else {
            return [
              createVNode("nav", { "aria-label": "Breadcrumbs" }, [
                createVNode("ol", { class: "not-prose text-sm flex gap-3 relative z-0" }, [
                  createVNode("li", { class: "flex items-center gap-3" }, [
                    createVNode(_component_NuxtLink, {
                      to: `/${_ctx.baseUrl}/`,
                      class: "hover:underline text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_Icon, {
                      class: "size-3 opacity-30",
                      name: "ph:caret-right-fill"
                    })
                  ]),
                  _ctx.category ? (openBlock(), createBlock("li", {
                    key: 0,
                    class: "flex items-center gap-3"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: `/${_ctx.baseUrl}/tags/`,
                      class: "hover:underline text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tags")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_Icon, {
                      class: "size-3 opacity-30",
                      name: "ph:caret-right-fill"
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("li", { class: "text-neutral-700" }, [
                    createVNode(_component_NuxtLink, {
                      to: finalPath(),
                      class: "text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(_ctx.title)), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=Breadcrumbs.vue2.mjs.map
