export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, phone, service, message } = await readBody<{
    firstName: string
    lastName: string
    email: string
    phone: string
    service: string
    message: string
  }>(event)

  if (!firstName?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'First name is required.' })
  }
  if (!lastName?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Last name is required.' })
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email address is required.' })
  }
  if (!message?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Message is required.' })
  }

  const config = useRuntimeConfig()
  const { hubspotPortalId, hubspotFormGuid } = config.public

  const forwarded = getHeader(event, 'x-forwarded-for')
  const ipAddress = forwarded ? forwarded.split(',')[0].trim() : getRequestIP(event)

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: firstName },
          { name: 'lastname', value: lastName },
          { name: 'email', value: email },
          { name: 'phone_number', value: phone ?? '' },
          { name: 'i_am_interested_in', value: service ?? '' },
          { name: 'description', value: message },
        ],
        context: {
          ipAddress,
          pageUri: getHeader(event, 'referer') ?? '',
          pageName: 'Contact',
        },
      }),
    }
  )

  if (!response.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Form submission failed.' })
  }

  return { success: true }
})
