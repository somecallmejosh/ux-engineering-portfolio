import https from 'node:https'

function httpsPost(url: string, body: object): Promise<{ ok: boolean; data: unknown }> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body)
    const parsed = new URL(url)
    const req = https.request(
      {
        hostname: parsed.hostname,
        path: parsed.pathname + parsed.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let raw = ''
        res.on('data', (chunk) => (raw += chunk))
        res.on('end', () => {
          let data: unknown = raw
          try { data = JSON.parse(raw) } catch {}
          resolve({ ok: (res.statusCode ?? 0) >= 200 && (res.statusCode ?? 0) < 300, data })
        })
      },
    )
    req.on('error', reject)
    req.write(payload)
    req.end()
  })
}

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

  const result = await httpsPost(
    `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotDesignHealthCheckForm}`,
    {
      fields: [
        { name: 'firstname', value: firstName ?? '' },
        { name: 'lastname', value: lastName ?? '' },
        { name: 'email', value: email },
        { name: 'design_system_recommendation', value: design_system_recommendation ?? '' },
        { name: 'design_system_label', value: design_system_label ?? '' },
        { name: 'design_system_score_total', value: String(design_system_score_total ?? '') },
        { name: 'design_system_lowest_section', value: design_system_lowest_section ?? '' },
        { name: 'design_system_per_section_scores', value: design_system_per_section_scores ?? '' },
        { name: 'design_system_request_url', value: design_system_request_url ?? '' },
      ],
      context: {
        ipAddress,
        pageUri: getHeader(event, 'referer') ?? '',
        pageName: 'Scorecard Results',
      },
    },
  )

  if (!result.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Form submission failed.',
      data: result.data,
    })
  }

  return { success: true }
})
