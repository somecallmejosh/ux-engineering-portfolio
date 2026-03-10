import { h as __nuxt_component_0, _ as _export_sfc } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TableOfContents",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const menuOpen = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      if (__props.links && __props.links.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["overflow-hidden sticky top-20 lg:top-0 p-4 bg-white border border-neutral-200 rounded-lg z-50 toc", unref(menuOpen) && "open"],
          "aria-labelledby": "toc-header"
        }, _attrs))} data-v-3ac9e795><button class="text-sm flex items-center gap-1 w-full not-prose cursor-pointer group" aria-controls="toc-menu"${ssrRenderAttr("aria-expanded", unref(menuOpen))} data-v-3ac9e795><h2 id="toc-header" class="flex items-center gap-2 text-body text-sm flex-1 group-hover:underline" data-v-3ac9e795>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:book-open-text",
          size: "1.3em"
        }, null, _parent));
        _push(`<strong data-v-3ac9e795>Table of Contents</strong></h2><span data-v-3ac9e795>${ssrInterpolate(unref(menuOpen) ? "Hide" : "Show")} `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:triangle-fill",
          size: ".75em",
          class: [unref(menuOpen) ? "rotate-0" : "rotate-180", "transition-transform duration-200 ease-in-out"]
        }, null, _parent));
        _push(`</span></button><div class="${ssrRenderClass([{ "toc-drawer--open": unref(menuOpen) }, "toc-drawer"])}" data-v-3ac9e795><div id="toc-menu" class="max-h-96 overflow-y-auto relative" data-v-3ac9e795><ul class="not-prose relative z-0 pb-4 text-sm" data-v-3ac9e795><!--[-->`);
        ssrRenderList(__props.links, (item) => {
          _push(`<li data-v-3ac9e795><a${ssrRenderAttr("href", `#${item.id}`)} class="text-blue-500 hover:text-blue-700" data-v-3ac9e795>`);
          _push(ssrRenderComponent(_component_Icon, {
            class: "h-6 w-6 flex items-center justify-center border rounded-lg",
            name: `codex:h${item.depth}`
          }, null, _parent));
          _push(` ${ssrInterpolate(item.text)}</a>`);
          if (item.children) {
            _push(`<ul data-v-3ac9e795><!--[-->`);
            ssrRenderList(item.children, (child) => {
              _push(`<li data-v-3ac9e795><a${ssrRenderAttr("href", `#${child.id}`)} class="text-blue-500 hover:text-blue-700" data-v-3ac9e795>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: `codex:h${child.depth}`
              }, null, _parent));
              _push(` ${ssrInterpolate(child.text)}</a>`);
              if (child.children) {
                _push(`<ul data-v-3ac9e795><!--[-->`);
                ssrRenderList(child.children, (subChild) => {
                  _push(`<li data-v-3ac9e795><a${ssrRenderAttr("href", `#${subChild.id}`)} class="text-blue-500 hover:text-blue-700" data-v-3ac9e795>`);
                  _push(ssrRenderComponent(_component_Icon, {
                    name: `codex:h${subChild.depth}`
                  }, null, _parent));
                  _push(` ${ssrInterpolate(subChild.text)}</a>`);
                  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.TableOfContents), {
                    links: [subChild]
                  }, null), _parent);
                  _push(`</li>`);
                });
                _push(`<!--]--></ul>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/TableOfContents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ac9e795"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=TableOfContents.vue.mjs.map
