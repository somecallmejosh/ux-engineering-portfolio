import { g as __nuxt_component_1, _ as _export_sfc } from './server.mjs';
import { h as humanize } from './humanize.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { q as queryCollection } from './app.mjs';

const COLLECTION_MAP = {
  blog: "blog",
  projects: "projects",
  dev_notes: "dev-notes",
  experiments: "experiments"
};
function collectionPath(name) {
  return COLLECTION_MAP[name] ?? name;
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagLinkList",
  __ssrInlineRender: true,
  props: {
    title: {},
    collection: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const list = ([__temp, __restore] = withAsyncContext(() => queryCollection(props.collection).all().then((posts) => {
      const tags = posts.reduce((acc, post) => {
        var _a;
        (_a = post.tags) == null ? void 0 : _a.forEach((tag) => {
          if (!acc.includes(tag)) acc.push(tag);
        });
        return acc;
      }, []);
      return tags.sort((a, b) => a.localeCompare(b));
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": `${("humanize" in _ctx ? _ctx.humanize : unref(humanize))(_ctx.collection)} Tags`,
        class: "prose"
      }, _attrs))} data-v-9156241f>`);
      if (_ctx.title) {
        _push(`<h2 data-v-9156241f>${ssrInterpolate(_ctx.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul role="list" class="flex flex-wrap gap-2 not-prose" data-v-9156241f><!--[-->`);
      ssrRenderList(unref(list), (category) => {
        _push(`<li data-v-9156241f>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          "prefetch-on": "interaction",
          to: `/${("collectionPath" in _ctx ? _ctx.collectionPath : unref(collectionPath))(_ctx.collection)}/tags/${category}/`,
          class: "text-sm bg-blue-50 text-blue-950 hover:bg-blue-100 hover:text-blue-900 font-semibold rounded-md px-1.5 py-1 text-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(category))}`);
            } else {
              return [
                createTextVNode(toDisplayString(("humanize" in _ctx ? _ctx.humanize : unref(humanize))(category)), 1)
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

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagLinkList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9156241f"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=TagLinkList.vue.mjs.map
