import { j as _sfc_main$3, g as __nuxt_component_1, _ as _export_sfc, d as useRoute } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './AnimateImage.vue2.mjs';
import { _ as _sfc_main$4 } from './CardHeader.vue2.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardListItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    to: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_AnimateImage = _sfc_main$2;
      const _component_Pill = _sfc_main$3;
      const _component_CardHeader = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "card-list-item space-y-4" }, _attrs))} data-v-7b1a8154><div class="prose rounded-lg relative group" data-v-7b1a8154>`);
      if (_ctx.item.image) {
        _push(ssrRenderComponent(_component_AnimateImage, {
          src: _ctx.item.image,
          alt: (_a = _ctx.item.meta) == null ? void 0 : _a.image_alt,
          class: "mb-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="prose" data-v-7b1a8154>`);
      if (_ctx.item.headline) {
        _push(ssrRenderComponent(_component_Pill, {
          class: "mb-4",
          pill: _ctx.item.headline
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CardHeader, { class: "mb-2.5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-7b1a8154>${ssrInterpolate(_ctx.item.description)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.to,
        class: "absolute hover:border-0 focus:outline-0 not-prose border-0 inset-0 group-hover:border-0 group-hover:outline-4 group-hover:outline-offset-6 group-hover:outline-blue-100 focus:ring-4 focus:ring-blue-100 focus:ring-offset-6 rounded-lg transition-all duration-150 ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only" data-v-7b1a8154${_scopeId}>${ssrInterpolate(_ctx.item.title)}</span>`);
          } else {
            return [
              createVNode("span", { class: "sr-only" }, toDisplayString(_ctx.item.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li>`);
    };
  }
});

const _sfc_setup = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b1a8154"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardList",
  __ssrInlineRender: true,
  props: {
    list: {},
    label: {}
  },
  setup(__props) {
    const { fullPath } = useRoute();
    const basePath = fullPath.split("/").slice(0, 2).join("/");
    function itemUrl(item) {
      return item.to ?? `${basePath}/${item.slug}/`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardListItem = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.label ?? "Reading List"
      }, _attrs))}><ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-12"><!--[-->`);
      ssrRenderList(_ctx.list, (item) => {
        _push(ssrRenderComponent(_component_CardListItem, {
          key: item.id,
          item,
          to: itemUrl(item)
        }, null, _parent));
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=CardList.vue2.mjs.map
