import { d as defineEventHandler, r as readBody, c as createError, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import { Resend } from 'resend';
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
import 'vue';
import '@iconify/utils';
import 'better-sqlite3';

const subscribe_post = defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: "A valid email address is required." });
  }
  const config = useRuntimeConfig();
  const resend = new Resend(config.resendKey);
  const siteUrl = config.public.siteUrl;
  const checklistUrl = `${siteUrl}/checklist/`;
  await resend.emails.send({
    from: config.resendFrom,
    to: email,
    subject: "Your Design System Health Check",
    html: `
      <p>Hi,</p>
      <p>Here's your free Design System Health Check:</p>
      <p><a href="${checklistUrl}">${checklistUrl}</a></p>
      <p>Work through each of the five sections with your team, score every criterion, and use your totals to identify where to invest first.</p>
      <p>If the checklist surfaces gaps you're not sure how to prioritize, reply to this email \u2014 I'm happy to talk through it.</p>
      <p>\u2014 Josh</p>
    `,
    text: `Your Design System Health Check

${checklistUrl}

Work through each of the five sections with your team, score every criterion, and use your totals to identify where to invest first.

If the checklist surfaces gaps you're not sure how to prioritize, reply to this email \u2014 I'm happy to talk through it.

\u2014 Josh`
  });
  return { success: true };
});

export { subscribe_post as default };
//# sourceMappingURL=subscribe.post.mjs.map
