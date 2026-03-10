import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "OverflowX",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const overflowWrapper = ref(null);
    const showBefore = ref(false);
    const showAfter = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "overflowWrapper",
        ref: overflowWrapper,
        class: ["overflow-wrapper relative w-full max-w-full", { before: unref(showBefore), after: unref(showAfter) }]
      }, _attrs))} data-v-e95bf66e><div class="w-full max-w-full overflow-visible" data-v-e95bf66e><div class="overflow-container max-w-full overflow-auto py-4" data-v-e95bf66e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/OverflowX.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e95bf66e"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=OverflowX.vue.mjs.map
