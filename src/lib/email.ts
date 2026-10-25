import { contactEmail } from "@/config/site"

/**
 * Resend's shared sender. It only delivers to the Resend account's own
 * address (the account is on the contact inbox); once a domain is verified
 * in Resend, set CONTACT_FROM_EMAIL to an address on it.
 */
const defaultSender = "Qimam Website <onboarding@resend.dev>"

/**
 * Emails the contact inbox through Resend (RESEND_API_KEY), for the site's
 * server actions; replying answers `replyTo`, the visitor. Returns whether
 * Resend took the email, and logs why not under `form`.
 */
export async function emailContactInbox({
  form,
  subject,
  text,
  replyTo,
}: {
  form: string
  subject: string
  text: string
  replyTo: string
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error(`${form}: RESEND_API_KEY is not set`)
    return false
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || defaultSender,
        to: [contactEmail],
        reply_to: replyTo,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) {
      const detail = await response.json().catch(() => null)
      console.error(
        `${form}: Resend refused the email`,
        response.status,
        detail?.name,
        detail?.message
      )
      return false
    }
  } catch (error) {
    console.error(`${form}: could not reach Resend`, error)
    return false
  }

  return true
}
