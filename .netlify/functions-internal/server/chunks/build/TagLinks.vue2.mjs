import { h as __nuxt_component_0, g as __nuxt_component_1 } from './server.mjs';
import { h as humanize } from './humanize.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagLinks",
  __ssrInlineRender: true,
  props: {
    title: {},
    tag: {},
    collection: {}
  },
  setup(__props) {
    const props = __props;
    const sorted = [...props.collection].sort((a, b) => a.localeCompare(b));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": _ctx.title,
        class: "py-2 mb-1 flex gap-4 not-prose flex-wrap"
      }, _attrs))}>`);
      if (_ctx.title) {
        _push(`<h2 class="shrink-0 flex items-center gap-2 text-body text-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:tag",
          size: "1rem"
        }, null, _parent));
        _push(`<strong>Tags:</strong></h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="flex gap-2"><!--[-->`);
      ssrRenderList(unref(sorted), (link, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${_ctx.tag}/tags/${link}/`,
          class: "text-xs bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-medium rounded-md px-1.5 py-1 text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(link))}`);
            } else {
              return [
                createTextVNode(toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(link)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=TagLinks.vue2.mjs.map
