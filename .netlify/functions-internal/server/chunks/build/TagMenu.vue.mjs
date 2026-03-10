import { _ as _export_sfc, h as __nuxt_component_0, g as __nuxt_component_1 } from './server.mjs';
import { withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';
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
  __name: "TagMenu",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: String,
      required: true
    },
    collection: {
      type: String,
      default: "blog"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const allPosts = ([__temp, __restore] = withAsyncContext(() => queryCollection(props.collection).all()), __temp = await __temp, __restore(), __temp);
    const filteredPosts = computed(() => {
      return allPosts.filter((post) => post.tags.includes(props.tag));
    });
    const collectionMap = {
      blog: "blog",
      dev_notes: "dev-notes",
      projects: "projects",
      experiments: "experiments"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-labelledby": "tag-menu-header",
        class: "space-y-4 mt-6 bg-white border border-neutral-200 pt-5 px-4 rounded-lg"
      }, _attrs))} data-v-2ba2b894><div class="not-prose flex flex-col xl:flex-row xl:gap-2" data-v-2ba2b894><h2 id="tag-menu-header" class="flex-1 flex items-center gap-2 text-sm text-body" data-v-2ba2b894>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:folders",
        size: "1.5em"
      }, null, _parent));
      _push(`<strong data-v-2ba2b894>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</strong></h2><small data-v-2ba2b894>${ssrInterpolate(unref(filteredPosts).length)} articles in this series</small></div><ol class="text-sm" data-v-2ba2b894><!--[-->`);
      ssrRenderList(unref(filteredPosts), (tag) => {
        _push(`<li class="capitalize" data-v-2ba2b894>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${collectionMap[props.collection]}/${tag.slug}/`,
          class: "flex items-center gap-1 no-underline hover:underline! py-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/TagMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ba2b894"]]);

export { TagMenu as default };
//# sourceMappingURL=TagMenu.vue.mjs.map
