export default defineEventHandler(async (event) => {
  const { firstName, lastName, email } = await readBody<{
    firstName: string
    lastName: string
    email: string
  }>(event)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email address is required.' })
  }

  const config = useRuntimeConfig()
  const { hubspotPortalId, hubspotDesignHealthCheckForm } = config.public

  const forwarded = getHeader(event, 'x-forwarded-for')
  const ipAddress = forwarded ? forwarded.split(',')[0].trim() : getRequestIP(event)

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotDesignHealthCheckForm}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: firstName ?? '' },
          { name: 'lastname', value: lastName ?? '' },
          { name: 'email', value: email },
        ],
        context: {
          ipAddress,
          pageUri: getHeader(event, 'referer') ?? '',
          pageName: 'Rails Rudiment waitlist',
        },
      }),
    }
  )

  if (!response.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Form submission failed.' })
  }

  return { success: true }
})
