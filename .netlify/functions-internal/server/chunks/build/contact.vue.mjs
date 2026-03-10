import { _ as __nuxt_component_0 } from './PageWrapper.vue.mjs';
import { _ as __nuxt_component_2 } from './SplitContent.vue.mjs';
import { _ as _export_sfc, u as useHead, b as _sfc_main$1, g as __nuxt_component_1, h as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Callout.vue2.mjs';
import { ref, withCtx, createTextVNode, createVNode, unref, createBlock, createCommentVNode, withDirectives, openBlock, withModifiers, vModelText, vModelSelect, vShow, nextTick, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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

const title = "Contact Josh Briley | Design systems consulting";
const description = "Get in touch to discuss a design system audit, component library build, or design-to-code workflow. I respond within one business day.";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title,
      meta: [
        { property: "og:title", content: title },
        { name: "description", content: description },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://res.cloudinary.com/dwjulenau/image/upload/v1744905534/josh-portfolio/assets_task_01js27bk61fwg9hrm2mdc7j4ps_img_0.webp" }
      ]
    });
    const formData = ref({
      name: "",
      email: "",
      message: "",
      phone: "",
      service: ""
    });
    const nameValid = ref(true);
    const validateName = () => {
      nameValid.value = formValidation().name();
    };
    const emailValid = ref(true);
    const validateEmail = () => {
      emailValid.value = formValidation().email();
    };
    const messageValid = ref(true);
    const validateMessage = () => {
      messageValid.value = formValidation().message();
    };
    const formValidation = () => ({
      name: () => {
        if (!formData.value.name.trim()) {
          return false;
        }
        return true;
      },
      email: () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.value.email.trim() || !emailPattern.test(formData.value.email)) {
          return false;
        }
        return true;
      },
      message: () => {
        if (!formData.value.message.trim()) {
          return false;
        }
        return true;
      }
    });
    const formSubmitted = ref(false);
    const formSubmitError = ref(false);
    const encode = (data) => {
      return Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");
    };
    const onSubmit = async (event) => {
      event.preventDefault();
      validateName();
      validateEmail();
      validateMessage();
      if (!nameValid.value || !emailValid.value || !messageValid.value) {
        await nextTick();
        const invalidField = (void 0).querySelector(".invalid");
        invalidField == null ? void 0 : invalidField.focus();
        return;
      }
      const postData = {
        "form-name": "contact",
        ...formData.value
      };
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(postData)
        });
        if (response.ok) {
          formSubmitted.value = true;
          formSubmitError.value = false;
          formData.value = { name: "", email: "", message: "", phone: "" };
          nameValid.value = true;
          emailValid.value = true;
          messageValid.value = true;
        } else {
          console.error("Form submission failed:", response);
          formSubmitError.value = true;
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        formSubmitError.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = _sfc_main$1;
      const _component_split_content = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_callout = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section aria-labelledby="page-header" class="prose" data-v-051fd83c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PageHeader, {
              pill: "Contact Me",
              pillIcon: "ph:address-book"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Let&#39;s talk `);
                } else {
                  return [
                    createTextVNode(" Let's talk ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p data-v-051fd83c${_scopeId}>Whether you&#39;re dealing with component library debt, an accessibility audit deadline, or a Figma-to-code handoff that&#39;s slowing your team down, fill out the form and I&#39;ll get back to you within one business day.</p></section>`);
            _push2(ssrRenderComponent(_component_split_content, null, {
              primary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section aria-labelledby="contact-form" class="space-y-4" data-v-051fd83c${_scopeId2}>`);
                  if (!unref(formSubmitted)) {
                    _push3(`<h2 id="contact-form" class="text-2xl text-balance mt-0" data-v-051fd83c${_scopeId2}>Questions?</h2>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form style="${ssrRenderStyle(!unref(formSubmitted) ? null : { display: "none" })}" name="contact" method="POST" novalidate data-netlify="true" netlify-honeypot="bot-field" class="space-y-4 p-6 bg-neutral-50 rounded-lg" data-v-051fd83c${_scopeId2}><input type="hidden" name="form-name" value="contact" data-v-051fd83c${_scopeId2}><div class="space-y-1" data-v-051fd83c${_scopeId2}><label class="text-sm" for="name" data-v-051fd83c${_scopeId2}>Name *</label><div data-v-051fd83c${_scopeId2}><input aria-describedby="name-invalid"${ssrRenderAttr("aria-invalid", unref(nameValid) === false || void 0)}${ssrRenderAttr("value", unref(formData).name)} name="name" type="text" class="${ssrRenderClass([{ "border-red-600 invalid": unref(nameValid) == false }, "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"])}" data-v-051fd83c${_scopeId2}>`);
                  if (unref(nameValid) == false) {
                    _push3(`<small role="alert" id="name-invalid" class="animate-entry block text-red-600" data-v-051fd83c${_scopeId2}>Enter your name</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="grid lg:grid-cols-2 gap-6" data-v-051fd83c${_scopeId2}><div class="space-y-1" data-v-051fd83c${_scopeId2}><label class="text-sm" for="email" data-v-051fd83c${_scopeId2}>Email *</label><div data-v-051fd83c${_scopeId2}><input aria-describedby="email-invalid"${ssrRenderAttr("aria-invalid", unref(emailValid) === false || void 0)}${ssrRenderAttr("value", unref(formData).email)} name="email" type="email" class="${ssrRenderClass([{ "border-red-600 invalid": unref(emailValid) == false }, "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"])}" data-v-051fd83c${_scopeId2}>`);
                  if (unref(emailValid) == false) {
                    _push3(`<small role="alert" id="email-invalid" class="animate-entry block text-red-600" data-v-051fd83c${_scopeId2}>Enter a valid email address.</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="space-y-1" data-v-051fd83c${_scopeId2}><label class="text-sm" for="phone" data-v-051fd83c${_scopeId2}>Phone</label><input${ssrRenderAttr("value", unref(formData).phone)} name="phone" type="text" class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" data-v-051fd83c${_scopeId2}></div></div><div class="space-y-1" data-v-051fd83c${_scopeId2}><label class="text-sm" for="service" data-v-051fd83c${_scopeId2}>I&#39;m interested in</label><select name="service" class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" data-v-051fd83c${_scopeId2}><option value="" disabled data-v-051fd83c${ssrIncludeBooleanAttr(Array.isArray(unref(formData).service) ? ssrLooseContain(unref(formData).service, "") : ssrLooseEqual(unref(formData).service, "")) ? " selected" : ""}${_scopeId2}>Select a service</option><option value="Design System Audit" data-v-051fd83c${ssrIncludeBooleanAttr(Array.isArray(unref(formData).service) ? ssrLooseContain(unref(formData).service, "Design System Audit") : ssrLooseEqual(unref(formData).service, "Design System Audit")) ? " selected" : ""}${_scopeId2}>Design System Audit</option><option value="Component Library Starter" data-v-051fd83c${ssrIncludeBooleanAttr(Array.isArray(unref(formData).service) ? ssrLooseContain(unref(formData).service, "Component Library Starter") : ssrLooseEqual(unref(formData).service, "Component Library Starter")) ? " selected" : ""}${_scopeId2}>Component Library Starter</option><option value="Design-to-Code Workflow" data-v-051fd83c${ssrIncludeBooleanAttr(Array.isArray(unref(formData).service) ? ssrLooseContain(unref(formData).service, "Design-to-Code Workflow") : ssrLooseEqual(unref(formData).service, "Design-to-Code Workflow")) ? " selected" : ""}${_scopeId2}>Design-to-Code Workflow</option><option value="other" data-v-051fd83c${ssrIncludeBooleanAttr(Array.isArray(unref(formData).service) ? ssrLooseContain(unref(formData).service, "other") : ssrLooseEqual(unref(formData).service, "other")) ? " selected" : ""}${_scopeId2}>Something else</option></select></div><div class="space-y-1" data-v-051fd83c${_scopeId2}><label class="text-sm" for="message" data-v-051fd83c${_scopeId2}>Message *</label><div data-v-051fd83c${_scopeId2}><textarea aria-describedby="message-invalid"${ssrRenderAttr("aria-invalid", unref(messageValid) === false || void 0)} name="message" class="${ssrRenderClass([{ "border-red-600 invalid": unref(messageValid) == false }, "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"])}" data-v-051fd83c${_scopeId2}>${ssrInterpolate(unref(formData).message)}</textarea>`);
                  if (unref(messageValid) == false) {
                    _push3(`<small role="alert" id="message-invalid" class="animate-entry block text-red-600" data-v-051fd83c${_scopeId2}>Enter a brief message.</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center" data-v-051fd83c${_scopeId2}><div data-v-051fd83c${_scopeId2}><small data-v-051fd83c${_scopeId2}>* indicates a required field</small></div><button type="submit" class="submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center" data-v-051fd83c${_scopeId2}> Send Message</button></div></form>`);
                  if (unref(formSubmitted)) {
                    _push3(`<div class="animate-entry prose bg-neutral-50 p-6 rounded-lg" role="alert" data-v-051fd83c${_scopeId2}><h2 data-v-051fd83c${_scopeId2}>Message received</h2><p data-v-051fd83c${_scopeId2}>Thanks for reaching out. If you need to reach me urgently, you can email me at <a href="mailto:josh@thebrileys.com" data-v-051fd83c${_scopeId2}>josh@thebrileys.com</a> or call <a href="tel:8602328250" data-v-051fd83c${_scopeId2}>860-232-8250</a>.</p><p data-v-051fd83c${_scopeId2}>Otherwise, feel free to poke around my `);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/blog/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`blog`);
                        } else {
                          return [
                            createTextVNode("blog")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` or have a look at some of my `);
                    _push3(ssrRenderComponent(_component_NuxtLink, { to: "/projects/" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`recent projects`);
                        } else {
                          return [
                            createTextVNode("recent projects")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(formSubmitError)) {
                    _push3(`<div class="animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30" role="alert" data-v-051fd83c${_scopeId2}><h2 data-v-051fd83c${_scopeId2}>Something went wrong</h2><p data-v-051fd83c${_scopeId2}>Your message couldn&#39;t be submitted. If this is urgent, email me at <a href="mailto:josh@thebrileys.com" data-v-051fd83c${_scopeId2}>josh@thebrileys.com</a> or try the form again later.</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_callout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="prose" data-v-051fd83c${_scopeId3}><h2 id="social-media" class="text-lg mb-2" data-v-051fd83c${_scopeId3}>Social Media</h2></div><ul class="not-prose flex gap-6 items-center justify-between flex-grow" data-v-051fd83c${_scopeId3}><li class="flex items-center gap-1" data-v-051fd83c${_scopeId3}><div class="no-shrink translate-y-1" data-v-051fd83c${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "logos:linkedin-icon",
                          size: "1em"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><a href="https://www.linkedin.com/in/joshuabriley/" class="flex hover:underline" target="_blank" rel="noopener noreferrer" data-v-051fd83c${_scopeId3}><span class="sr-only" data-v-051fd83c${_scopeId3}>LinkedIn.com/</span> joshuabriley </a></li><li class="flex items-center gap-1" data-v-051fd83c${_scopeId3}><div class="no-shrink translate-y-1" data-v-051fd83c${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "logos:x",
                          size: "1em"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><a href="https://x.com/joshuabriley" class="hover:underline" target="_blank" rel="noopener noreferrer" data-v-051fd83c${_scopeId3}><span class="sr-only" data-v-051fd83c${_scopeId3}>x.com/</span> joshuabriley </a></li></ul>`);
                      } else {
                        return [
                          createVNode("div", { class: "prose" }, [
                            createVNode("h2", {
                              id: "social-media",
                              class: "text-lg mb-2"
                            }, "Social Media")
                          ]),
                          createVNode("ul", { class: "not-prose flex gap-6 items-center justify-between flex-grow" }, [
                            createVNode("li", { class: "flex items-center gap-1" }, [
                              createVNode("div", { class: "no-shrink translate-y-1" }, [
                                createVNode(_component_Icon, {
                                  name: "logos:linkedin-icon",
                                  size: "1em"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://www.linkedin.com/in/joshuabriley/",
                                class: "flex hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode("span", { class: "sr-only" }, "LinkedIn.com/"),
                                createTextVNode(" joshuabriley ")
                              ])
                            ]),
                            createVNode("li", { class: "flex items-center gap-1" }, [
                              createVNode("div", { class: "no-shrink translate-y-1" }, [
                                createVNode(_component_Icon, {
                                  name: "logos:x",
                                  size: "1em"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://x.com/joshuabriley",
                                class: "hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode("span", { class: "sr-only" }, "x.com/"),
                                createTextVNode(" joshuabriley ")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section>`);
                } else {
                  return [
                    createVNode("section", {
                      "aria-labelledby": "contact-form",
                      class: "space-y-4"
                    }, [
                      !unref(formSubmitted) ? (openBlock(), createBlock("h2", {
                        key: 0,
                        id: "contact-form",
                        class: "text-2xl text-balance mt-0"
                      }, "Questions?")) : createCommentVNode("", true),
                      withDirectives(createVNode("form", {
                        name: "contact",
                        method: "POST",
                        novalidate: "",
                        "data-netlify": "true",
                        "netlify-honeypot": "bot-field",
                        onSubmit: withModifiers(onSubmit, ["prevent"]),
                        class: "space-y-4 p-6 bg-neutral-50 rounded-lg"
                      }, [
                        createVNode("input", {
                          type: "hidden",
                          name: "form-name",
                          value: "contact"
                        }),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", {
                            class: "text-sm",
                            for: "name"
                          }, "Name *"),
                          createVNode("div", null, [
                            withDirectives(createVNode("input", {
                              "aria-describedby": "name-invalid",
                              "aria-invalid": unref(nameValid) === false || void 0,
                              onBlur: validateName,
                              "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                              name: "name",
                              type: "text",
                              class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(nameValid) == false }]
                            }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                              [vModelText, unref(formData).name]
                            ]),
                            unref(nameValid) == false ? (openBlock(), createBlock("small", {
                              key: 0,
                              role: "alert",
                              id: "name-invalid",
                              class: "animate-entry block text-red-600"
                            }, "Enter your name")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "grid lg:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("label", {
                              class: "text-sm",
                              for: "email"
                            }, "Email *"),
                            createVNode("div", null, [
                              withDirectives(createVNode("input", {
                                "aria-describedby": "email-invalid",
                                "aria-invalid": unref(emailValid) === false || void 0,
                                onBlur: validateEmail,
                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                name: "email",
                                type: "email",
                                class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(emailValid) == false }]
                              }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                                [vModelText, unref(formData).email]
                              ]),
                              unref(emailValid) == false ? (openBlock(), createBlock("small", {
                                key: 0,
                                role: "alert",
                                id: "email-invalid",
                                class: "animate-entry block text-red-600"
                              }, "Enter a valid email address.")) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("label", {
                              class: "text-sm",
                              for: "phone"
                            }, "Phone"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                              name: "phone",
                              type: "text",
                              class: "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(formData).phone]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", {
                            class: "text-sm",
                            for: "service"
                          }, "I'm interested in"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(formData).service = $event,
                            name: "service",
                            class: "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "Select a service"),
                            createVNode("option", { value: "Design System Audit" }, "Design System Audit"),
                            createVNode("option", { value: "Component Library Starter" }, "Component Library Starter"),
                            createVNode("option", { value: "Design-to-Code Workflow" }, "Design-to-Code Workflow"),
                            createVNode("option", { value: "other" }, "Something else")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(formData).service]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", {
                            class: "text-sm",
                            for: "message"
                          }, "Message *"),
                          createVNode("div", null, [
                            withDirectives(createVNode("textarea", {
                              "aria-describedby": "message-invalid",
                              "aria-invalid": unref(messageValid) === false || void 0,
                              onBlur: validateMessage,
                              "onUpdate:modelValue": ($event) => unref(formData).message = $event,
                              name: "message",
                              class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(messageValid) == false }]
                            }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                              [vModelText, unref(formData).message]
                            ]),
                            unref(messageValid) == false ? (openBlock(), createBlock("small", {
                              key: 0,
                              role: "alert",
                              id: "message-invalid",
                              class: "animate-entry block text-red-600"
                            }, "Enter a brief message.")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center" }, [
                          createVNode("div", null, [
                            createVNode("small", null, "* indicates a required field")
                          ]),
                          createVNode("button", {
                            type: "submit",
                            class: "submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center"
                          }, " Send Message")
                        ])
                      ], 544), [
                        [vShow, !unref(formSubmitted)]
                      ]),
                      unref(formSubmitted) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "animate-entry prose bg-neutral-50 p-6 rounded-lg",
                        role: "alert"
                      }, [
                        createVNode("h2", null, "Message received"),
                        createVNode("p", null, [
                          createTextVNode("Thanks for reaching out. If you need to reach me urgently, you can email me at "),
                          createVNode("a", { href: "mailto:josh@thebrileys.com" }, "josh@thebrileys.com"),
                          createTextVNode(" or call "),
                          createVNode("a", { href: "tel:8602328250" }, "860-232-8250"),
                          createTextVNode(".")
                        ]),
                        createVNode("p", null, [
                          createTextVNode("Otherwise, feel free to poke around my "),
                          createVNode(_component_NuxtLink, { to: "/blog/" }, {
                            default: withCtx(() => [
                              createTextVNode("blog")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" or have a look at some of my "),
                          createVNode(_component_NuxtLink, { to: "/projects/" }, {
                            default: withCtx(() => [
                              createTextVNode("recent projects")
                            ]),
                            _: 1
                          })
                        ])
                      ])) : createCommentVNode("", true),
                      unref(formSubmitError) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30",
                        role: "alert"
                      }, [
                        createVNode("h2", null, "Something went wrong"),
                        createVNode("p", null, [
                          createTextVNode("Your message couldn't be submitted. If this is urgent, email me at "),
                          createVNode("a", { href: "mailto:josh@thebrileys.com" }, "josh@thebrileys.com"),
                          createTextVNode(" or try the form again later.")
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode(_component_callout, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "prose" }, [
                            createVNode("h2", {
                              id: "social-media",
                              class: "text-lg mb-2"
                            }, "Social Media")
                          ]),
                          createVNode("ul", { class: "not-prose flex gap-6 items-center justify-between flex-grow" }, [
                            createVNode("li", { class: "flex items-center gap-1" }, [
                              createVNode("div", { class: "no-shrink translate-y-1" }, [
                                createVNode(_component_Icon, {
                                  name: "logos:linkedin-icon",
                                  size: "1em"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://www.linkedin.com/in/joshuabriley/",
                                class: "flex hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode("span", { class: "sr-only" }, "LinkedIn.com/"),
                                createTextVNode(" joshuabriley ")
                              ])
                            ]),
                            createVNode("li", { class: "flex items-center gap-1" }, [
                              createVNode("div", { class: "no-shrink translate-y-1" }, [
                                createVNode(_component_Icon, {
                                  name: "logos:x",
                                  size: "1em"
                                })
                              ]),
                              createVNode("a", {
                                href: "https://x.com/joshuabriley",
                                class: "hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }, [
                                createVNode("span", { class: "sr-only" }, "x.com/"),
                                createTextVNode(" joshuabriley ")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              secondary: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 data-v-051fd83c${_scopeId2}>What happens next</h2><ul data-v-051fd83c${_scopeId2}><li data-v-051fd83c${_scopeId2}>Send a message. It takes about two minutes.</li><li data-v-051fd83c${_scopeId2}>I review and respond within one business day.</li><li data-v-051fd83c${_scopeId2}>We have a 30-minute introductory call with no obligation.</li><li data-v-051fd83c${_scopeId2}>If there&#39;s a fit, I&#39;ll send a simple proposal.</li></ul><blockquote class="border-l-4 border-neutral-200 pl-6 prose" data-v-051fd83c${_scopeId2}><p class="italic" data-v-051fd83c${_scopeId2}>Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. </p><cite data-v-051fd83c${_scopeId2}>Welling Lagrone, Vice President, Triverus Consulting</cite></blockquote><div data-v-051fd83c${_scopeId2}><h2 data-v-051fd83c${_scopeId2}>Current availability</h2><p data-v-051fd83c${_scopeId2}>Currently accepting new consulting engagements.</p></div>`);
                } else {
                  return [
                    createVNode("h2", null, "What happens next"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Send a message. It takes about two minutes."),
                      createVNode("li", null, "I review and respond within one business day."),
                      createVNode("li", null, "We have a 30-minute introductory call with no obligation."),
                      createVNode("li", null, "If there's a fit, I'll send a simple proposal.")
                    ]),
                    createVNode("blockquote", { class: "border-l-4 border-neutral-200 pl-6 prose" }, [
                      createVNode("p", { class: "italic" }, "Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. "),
                      createVNode("cite", null, "Welling Lagrone, Vice President, Triverus Consulting")
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", null, "Current availability"),
                      createVNode("p", null, "Currently accepting new consulting engagements.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", {
                "aria-labelledby": "page-header",
                class: "prose"
              }, [
                createVNode(_component_PageHeader, {
                  pill: "Contact Me",
                  pillIcon: "ph:address-book"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Let's talk ")
                  ]),
                  _: 1
                }),
                createVNode("p", null, "Whether you're dealing with component library debt, an accessibility audit deadline, or a Figma-to-code handoff that's slowing your team down, fill out the form and I'll get back to you within one business day.")
              ]),
              createVNode(_component_split_content, null, {
                primary: withCtx(() => [
                  createVNode("section", {
                    "aria-labelledby": "contact-form",
                    class: "space-y-4"
                  }, [
                    !unref(formSubmitted) ? (openBlock(), createBlock("h2", {
                      key: 0,
                      id: "contact-form",
                      class: "text-2xl text-balance mt-0"
                    }, "Questions?")) : createCommentVNode("", true),
                    withDirectives(createVNode("form", {
                      name: "contact",
                      method: "POST",
                      novalidate: "",
                      "data-netlify": "true",
                      "netlify-honeypot": "bot-field",
                      onSubmit: withModifiers(onSubmit, ["prevent"]),
                      class: "space-y-4 p-6 bg-neutral-50 rounded-lg"
                    }, [
                      createVNode("input", {
                        type: "hidden",
                        name: "form-name",
                        value: "contact"
                      }),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          class: "text-sm",
                          for: "name"
                        }, "Name *"),
                        createVNode("div", null, [
                          withDirectives(createVNode("input", {
                            "aria-describedby": "name-invalid",
                            "aria-invalid": unref(nameValid) === false || void 0,
                            onBlur: validateName,
                            "onUpdate:modelValue": ($event) => unref(formData).name = $event,
                            name: "name",
                            type: "text",
                            class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(nameValid) == false }]
                          }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                            [vModelText, unref(formData).name]
                          ]),
                          unref(nameValid) == false ? (openBlock(), createBlock("small", {
                            key: 0,
                            role: "alert",
                            id: "name-invalid",
                            class: "animate-entry block text-red-600"
                          }, "Enter your name")) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "grid lg:grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", {
                            class: "text-sm",
                            for: "email"
                          }, "Email *"),
                          createVNode("div", null, [
                            withDirectives(createVNode("input", {
                              "aria-describedby": "email-invalid",
                              "aria-invalid": unref(emailValid) === false || void 0,
                              onBlur: validateEmail,
                              "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                              name: "email",
                              type: "email",
                              class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(emailValid) == false }]
                            }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                              [vModelText, unref(formData).email]
                            ]),
                            unref(emailValid) == false ? (openBlock(), createBlock("small", {
                              key: 0,
                              role: "alert",
                              id: "email-invalid",
                              class: "animate-entry block text-red-600"
                            }, "Enter a valid email address.")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", {
                            class: "text-sm",
                            for: "phone"
                          }, "Phone"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
                            name: "phone",
                            type: "text",
                            class: "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(formData).phone]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          class: "text-sm",
                          for: "service"
                        }, "I'm interested in"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(formData).service = $event,
                          name: "service",
                          class: "bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        }, [
                          createVNode("option", {
                            value: "",
                            disabled: ""
                          }, "Select a service"),
                          createVNode("option", { value: "Design System Audit" }, "Design System Audit"),
                          createVNode("option", { value: "Component Library Starter" }, "Component Library Starter"),
                          createVNode("option", { value: "Design-to-Code Workflow" }, "Design-to-Code Workflow"),
                          createVNode("option", { value: "other" }, "Something else")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(formData).service]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", {
                          class: "text-sm",
                          for: "message"
                        }, "Message *"),
                        createVNode("div", null, [
                          withDirectives(createVNode("textarea", {
                            "aria-describedby": "message-invalid",
                            "aria-invalid": unref(messageValid) === false || void 0,
                            onBlur: validateMessage,
                            "onUpdate:modelValue": ($event) => unref(formData).message = $event,
                            name: "message",
                            class: ["bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", { "border-red-600 invalid": unref(messageValid) == false }]
                          }, null, 42, ["aria-invalid", "onUpdate:modelValue"]), [
                            [vModelText, unref(formData).message]
                          ]),
                          unref(messageValid) == false ? (openBlock(), createBlock("small", {
                            key: 0,
                            role: "alert",
                            id: "message-invalid",
                            class: "animate-entry block text-red-600"
                          }, "Enter a brief message.")) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center" }, [
                        createVNode("div", null, [
                          createVNode("small", null, "* indicates a required field")
                        ]),
                        createVNode("button", {
                          type: "submit",
                          class: "submit-btn inline-flex items-center gap-1.5 bg-neutral-900 text-neutral-50 font-medium rounded-full px-4 py-2 hover:bg-neutral-700 justify-center"
                        }, " Send Message")
                      ])
                    ], 544), [
                      [vShow, !unref(formSubmitted)]
                    ]),
                    unref(formSubmitted) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "animate-entry prose bg-neutral-50 p-6 rounded-lg",
                      role: "alert"
                    }, [
                      createVNode("h2", null, "Message received"),
                      createVNode("p", null, [
                        createTextVNode("Thanks for reaching out. If you need to reach me urgently, you can email me at "),
                        createVNode("a", { href: "mailto:josh@thebrileys.com" }, "josh@thebrileys.com"),
                        createTextVNode(" or call "),
                        createVNode("a", { href: "tel:8602328250" }, "860-232-8250"),
                        createTextVNode(".")
                      ]),
                      createVNode("p", null, [
                        createTextVNode("Otherwise, feel free to poke around my "),
                        createVNode(_component_NuxtLink, { to: "/blog/" }, {
                          default: withCtx(() => [
                            createTextVNode("blog")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" or have a look at some of my "),
                        createVNode(_component_NuxtLink, { to: "/projects/" }, {
                          default: withCtx(() => [
                            createTextVNode("recent projects")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : createCommentVNode("", true),
                    unref(formSubmitError) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "animate-entry prose p-6 rounded-lg border border-red-100 bg-red-50/30",
                      role: "alert"
                    }, [
                      createVNode("h2", null, "Something went wrong"),
                      createVNode("p", null, [
                        createTextVNode("Your message couldn't be submitted. If this is urgent, email me at "),
                        createVNode("a", { href: "mailto:josh@thebrileys.com" }, "josh@thebrileys.com"),
                        createTextVNode(" or try the form again later.")
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(_component_callout, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "prose" }, [
                          createVNode("h2", {
                            id: "social-media",
                            class: "text-lg mb-2"
                          }, "Social Media")
                        ]),
                        createVNode("ul", { class: "not-prose flex gap-6 items-center justify-between flex-grow" }, [
                          createVNode("li", { class: "flex items-center gap-1" }, [
                            createVNode("div", { class: "no-shrink translate-y-1" }, [
                              createVNode(_component_Icon, {
                                name: "logos:linkedin-icon",
                                size: "1em"
                              })
                            ]),
                            createVNode("a", {
                              href: "https://www.linkedin.com/in/joshuabriley/",
                              class: "flex hover:underline",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, [
                              createVNode("span", { class: "sr-only" }, "LinkedIn.com/"),
                              createTextVNode(" joshuabriley ")
                            ])
                          ]),
                          createVNode("li", { class: "flex items-center gap-1" }, [
                            createVNode("div", { class: "no-shrink translate-y-1" }, [
                              createVNode(_component_Icon, {
                                name: "logos:x",
                                size: "1em"
                              })
                            ]),
                            createVNode("a", {
                              href: "https://x.com/joshuabriley",
                              class: "hover:underline",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }, [
                              createVNode("span", { class: "sr-only" }, "x.com/"),
                              createTextVNode(" joshuabriley ")
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                secondary: withCtx(() => [
                  createVNode("h2", null, "What happens next"),
                  createVNode("ul", null, [
                    createVNode("li", null, "Send a message. It takes about two minutes."),
                    createVNode("li", null, "I review and respond within one business day."),
                    createVNode("li", null, "We have a 30-minute introductory call with no obligation."),
                    createVNode("li", null, "If there's a fit, I'll send a simple proposal.")
                  ]),
                  createVNode("blockquote", { class: "border-l-4 border-neutral-200 pl-6 prose" }, [
                    createVNode("p", { class: "italic" }, "Josh is an outstanding front-end engineer with incredible focus and discipline when it comes to developing effective, functional and accessible front ends. He is a strong partner willing to work across functions to design and implement the best user experience as well as provide the mentorship and leadership to help his more junior experienced colleagues grow and learn. "),
                    createVNode("cite", null, "Welling Lagrone, Vice President, Triverus Consulting")
                  ]),
                  createVNode("div", null, [
                    createVNode("h2", null, "Current availability"),
                    createVNode("p", null, "Currently accepting new consulting engagements.")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-051fd83c"]]);

export { contact as default };
//# sourceMappingURL=contact.vue.mjs.map
