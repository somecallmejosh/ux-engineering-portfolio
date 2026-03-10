import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const { email } = await readBody<{ email: string }>(event)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email address is required.' })
  }

  const config = useRuntimeConfig()
  const resend = new Resend(config.resendKey)
  const siteUrl = config.public.siteUrl
  const checklistUrl = `${siteUrl}/checklist/`

  await resend.emails.send({
    from: config.resendFrom,
    to: email,
    subject: 'Your Design System Health Check',
    html: `
      <p>Hi,</p>
      <p>Here's your free Design System Health Check:</p>
      <p><a href="${checklistUrl}">${checklistUrl}</a></p>
      <p>Work through each of the five sections with your team, score every criterion, and use your totals to identify where to invest first.</p>
      <p>If the checklist surfaces gaps you're not sure how to prioritize, reply to this email — I'm happy to talk through it.</p>
      <p>— Josh</p>
    `,
    text: `Your Design System Health Check\n\n${checklistUrl}\n\nWork through each of the five sections with your team, score every criterion, and use your totals to identify where to invest first.\n\nIf the checklist surfaces gaps you're not sure how to prioritize, reply to this email — I'm happy to talk through it.\n\n— Josh`,
  })

  return { success: true }
})
