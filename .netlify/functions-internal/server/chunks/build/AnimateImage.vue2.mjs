import { defineComponent, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnimateImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
        src: _ctx.src,
        alt: _ctx.alt,
        width: "900",
        height: "600",
        class: "w-full rounded-lg grayscale",
        loading: "lazy"
      }, _attrs), null, _parent));
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=AnimateImage.vue2.mjs.map
