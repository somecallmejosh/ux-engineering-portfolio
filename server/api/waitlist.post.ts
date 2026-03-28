import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const {
    firstName,
    lastName,
    email,
    design_system_recommendation,
    design_system_label,
    design_system_score_total,
    design_system_lowest_section,
    design_system_per_section_scores,
    design_system_request_url,
  } = await readBody<{
    firstName: string
    lastName: string
    email: string
    design_system_recommendation?: string
    design_system_label?: string
    design_system_score_total?: number
    design_system_lowest_section?: string
    design_system_per_section_scores?: string
    design_system_request_url?: string
  }>(event)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A valid email address is required.',
    })
  }

  const config = useRuntimeConfig()
  const { hubspotPortalId, hubspotDesignHealthCheckForm } = config.public

  const forwarded = getHeader(event, 'x-forwarded-for')
  const ipAddress = forwarded
    ? forwarded.split(',')[0].trim()
    : getRequestIP(event)

  try {
    await $fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotDesignHealthCheckForm}`,
      {
        method: 'POST',
        body: {
          fields: [
            { name: 'firstname', value: firstName ?? '' },
            { name: 'lastname', value: lastName ?? '' },
            { name: 'email', value: email },
            {
              name: 'design_system_recommendation',
              value: design_system_recommendation ?? '',
            },
            { name: 'design_system_label', value: design_system_label ?? '' },
            {
              name: 'design_system_score_total',
              value: String(design_system_score_total ?? ''),
            },
            {
              name: 'design_system_lowest_section',
              value: design_system_lowest_section ?? '',
            },
            {
              name: 'design_system_per_section_scores',
              value: design_system_per_section_scores ?? '',
            },
            {
              name: 'design_system_request_url',
              value: design_system_request_url ?? '',
            },
          ],
          context: {
            ipAddress,
            pageUri: getHeader(event, 'referer') ?? '',
            pageName: 'Scorecard Results',
          },
        },
      },
    )
  } catch (error: any) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Form submission failed.',
      data: error?.data ?? null,
    })
  }

  return { success: true }
})
