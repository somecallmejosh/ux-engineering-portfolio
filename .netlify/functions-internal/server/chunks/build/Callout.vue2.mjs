import { _ as _export_sfc, h as __nuxt_component_0 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-blue-50/50 px-4 py-6 rounded-lg border-l-4 border-blue-300/50 flex gap-2 prose" }, _attrs))}><div class="shrink-0 translate-y-0.5">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:dots-nine",
    size: "1.5rem",
    class: "text-blue-400 no-shrink"
  }, null, _parent));
  _push(`</div><div class="prose prose-headings:text-neutral-900 prose-p:leading-relaxed prose-p:text-neutral-900">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Callout.vue2.mjs.map
