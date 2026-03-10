import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './buttonLink.vue2.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    services: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonLink = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))} data-v-0e060708><div class="prose" data-v-0e060708><h2 data-v-0e060708>Fixed scope. Fixed price. No surprises.</h2><p data-v-0e060708>Three focused engagements. You know exactly what you&#39;re getting and what it costs before we start.</p></div><ul class="not-prose grid md:grid-cols-3 gap-6 list-none p-0 m-0" data-v-0e060708><!--[-->`);
      ssrRenderList(_ctx.services, (service) => {
        _push(`<li class="service-card rounded-lg border-2 border-neutral-200 bg-white p-6" data-v-0e060708><div class="space-y-3" data-v-0e060708><p class="service-label text-xs font-semibold tracking-widest uppercase text-neutral-500" data-v-0e060708>${ssrInterpolate(service.label)}</p><p class="service-tagline text-xl leading-snug font-semibold" data-v-0e060708>${ssrInterpolate(service.tagline)}</p></div><div class="flex items-baseline gap-3" data-v-0e060708><span class="price text-3xl" data-v-0e060708>${ssrInterpolate(service.price)}</span>`);
        if (service.timeline) {
          _push(`<span class="text-sm text-neutral-500" data-v-0e060708>· ${ssrInterpolate(service.timeline)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-0e060708>`);
        _push(ssrRenderComponent(_component_ButtonLink, {
          to: `/services/${service.slug}/`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`See what&#39;s included`);
            } else {
              return [
                createTextVNode("See what's included")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e060708"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Services.vue2.mjs.map
