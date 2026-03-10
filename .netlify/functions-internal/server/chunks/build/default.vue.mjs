import { _ as _export_sfc, g as __nuxt_component_1, h as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, watch, getCurrentScope, onScopeDispose, computed, toValue, unref, useTemplateRef, ref, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "flex items-center gap-2 script text-3xl lg:text-4xl hover:opacity-50 transition-opacity duration-150"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span aria-hidden="true" role="presentation" class="size-10 lg:size-12 rounded-full bg-neutral-300 flex items-center justify-center script text-white overflow-hidden text-5xl lg:text-6xl"${_scopeId}> jb</span> joshuaBriley `);
      } else {
        return [
          createVNode("span", {
            "aria-hidden": "true",
            role: "presentation",
            class: "size-10 lg:size-12 rounded-full bg-neutral-300 flex items-center justify-center script text-white overflow-hidden text-5xl lg:text-6xl"
          }, " jb"),
          createTextVNode(" joshuaBriley ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}

const ROUTES = {
  home: "/",
  services: "/services/",
  projects: "/projects/",
  testimonials: "/testimonials/",
  about: "/about/",
  contact: "/contact/",
  blog: "/blog/",
  devNotes: "/dev-notes/"
};

/* empty css              */
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const target = useTemplateRef("target");
    onClickOutside(target, (event) => navOpen.value = false);
    const navGroups = [
      {
        groupTitle: "Main",
        items: [
          { title: "Home", path: ROUTES.home, icon: "ph:house" },
          { title: "Services", path: ROUTES.services, icon: "ph:handshake" },
          { title: "Recent Projects", path: ROUTES.projects, icon: "ph:projector-screen-chart" }
        ]
      },
      {
        groupTitle: "Personal",
        items: [
          { title: "Testimonials", path: ROUTES.testimonials, icon: "ph:chats" },
          { title: "About Me", path: ROUTES.about, icon: "ph:lego-smiley" },
          { title: "Contact Me", path: ROUTES.contact, icon: "ph:address-book" }
        ]
      },
      {
        groupTitle: "Writing",
        items: [
          { title: "Blog", path: ROUTES.blog, icon: "ph:article-ny-times" },
          { title: "Dev Notes", path: ROUTES.devNotes, icon: "ph:notepad" }
        ]
      }
    ];
    const navOpen = ref(false);
    const blurAndRemoveFocus = () => {
      if (navOpen.value) {
        (void 0).activeElement.blur();
        navOpen.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><a class="absolute -top-full left-1/2 -translate-x-1/2 z-50 p-4 bg-white rounded-lg focus:top-2 transition-all duration-300" href="#main-content">Skip to main content</a><div class="lg:flex min-h-dvh gap-12 relative z-10"><header class="${ssrRenderClass([unref(navOpen) && "shadow-lg lg:shadow-0", "lg:basis-72 shrink-0 bg-white lg:bg-neutral-50 p-6 lg:p-10 lg:space-y-6 lg:h-dvh lg:flex lg:flex-col sticky top-0 z-50"])}"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_Logo, { class: "lg:hidden" }, null, _parent));
      _push(`<div><button class="menu-toggle flex lg:hidden cursor-pointer items-center gap-1 text-xs uppercase font-medium" aria-label="Toggle nav menu visibility"> Menu `);
      if (!unref(navOpen)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:equals-bold",
          size: "1.5em"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(navOpen)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:x-bold",
          size: "1.5em"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div><nav aria-label="Main Navigation" class="${ssrRenderClass({ "lg:flex lg:flex-col lg:flex-1": !unref(navOpen) })}"><div class="${ssrRenderClass([{ "nav-drawer--open": unref(navOpen) }, "nav-drawer"])}"><ul class="border-l border-neutral-200 mb-2 mt-4 space-y-4"><!--[-->`);
      ssrRenderList(navGroups, (group, index) => {
        _push(`<li><ul><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "flex items-center gap-3 group transition-colors duration-150 font-medium text-sm py-2",
            to: item.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="flex items-center gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  size: "1.2rem",
                  class: "opacity-70 group-hover:opacity-100 transition-opacity duration-150"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "flex items-center gap-3" }, [
                    createVNode(_component_Icon, {
                      name: item.icon,
                      size: "1.2rem",
                      class: "opacity-70 group-hover:opacity-100 transition-opacity duration-150"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(item.title), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></div><div class="hidden items-stretch lg:flex lg:flex-1 flex-col justify-between"><ul class="border-l border-neutral-200 mt-0 space-y-10"><!--[-->`);
      ssrRenderList(navGroups, (group, index) => {
        _push(`<li><ul><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            onClick: blurAndRemoveFocus,
            class: "flex items-center gap-3 group transition-colors duration-150 font-medium",
            to: item.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="flex items-center gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  size: "1.25rem",
                  class: "opacity-70 group-hover:opacity-100 transition-opacity duration-150"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "flex items-center gap-3" }, [
                    createVNode(_component_Icon, {
                      name: item.icon,
                      size: "1.25rem",
                      class: "opacity-70 group-hover:opacity-100 transition-opacity duration-150"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(item.title), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></div></nav></header><div class="flex-grow lg:overflow-y-scroll"><div class="hidden lg:flex lg:justify-between lg:mb-12 p-6 lg:px-10 lg:pt-10 lg:pb-16 lg:gap-6"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(`</div></div><main id="main-content" class="p-6 lg:px-10 lg:pt-0 pb-12 w-full max-w-6xl">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div><span aria-hidden="true" role="presentation" class="script fixed -top-40 lg:top-1/3 lg:-translate-y-1/2 right-0 lg:right-20 text-[700px] lg:text-[1100px] opacity-[0.025] z-0 -rotate-90">jb</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
