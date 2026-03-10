import { g as __nuxt_component_1, h as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "buttonLink",
  __ssrInlineRender: true,
  props: {
    to: {},
    variant: {}
  },
  setup(__props) {
    const props = __props;
    const className = {
      base: "bg-neutral-900 text-neutral-50 hover:bg-neutral-700 focus:ring-blue-400",
      inverse: "border-neutral-900 hover:bg-neutral-100 focus:ring-blue-400"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.to,
        class: ["inline-flex no-underline border items-center gap-1.5 font-medium rounded-full px-4 py-2 justify-center", className[props.variant ?? "base"]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:arrow-right",
              size: "0.9rem"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_Icon, {
                name: "ph:arrow-right",
                size: "0.9rem"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=buttonLink.vue2.mjs.map
