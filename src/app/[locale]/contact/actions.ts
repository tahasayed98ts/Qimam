"use server"

import { contactEmail } from "@/config/site"
import en from "@/i18n/dictionaries/en"
import {
  validateContact,
  type ContactSource,
  type ContactState,
} from "@/lib/contact"

/**
 * Resend's shared sender. It only delivers to the Resend account's own
 * address (the account is on the contact inbox); once a domain is verified
 * in Resend, set CONTACT_FROM_EMAIL to an address on it.
 */
const defaultSender = "Qimam Website <onboarding@resend.dev>"

/**
 * Sends the Contact page form to the contact inbox through Resend
 * (RESEND_API_KEY). Replying to the email answers the visitor.
 */
export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  // A hidden field only bots fill in: let them think it worked.
  if (formData.get("website")) return { status: "sent", errors: {}, values: {} }

  const { values, errors } = validateContact(formData)
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set")
    return { status: "failed", errors: {}, values }
  }

  const name = `${values.firstName} ${values.lastName}`.replace(/\s+/g, " ")
  const page = formData.get("locale") === "ar" ? "Arabic" : "English"
  const text = [
    `New message from the Qimam website (${page} page).`,
    "",
    `Name: ${name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Heard about us: ${values.source ? en.contact.sources[values.source as ContactSource] : "—"}`,
    "",
    "Message:",
    values.message,
  ].join("\n")

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
        reply_to: values.email,
        subject: `Qimam website: message from ${name}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) {
      const detail = await response.json().catch(() => null)
      console.error(
        "Contact form: Resend refused the email",
        response.status,
        detail?.name,
        detail?.message
      )
      return { status: "failed", errors: {}, values }
    }
  } catch (error) {
    console.error("Contact form: could not reach Resend", error)
    return { status: "failed", errors: {}, values }
  }

  return { status: "sent", errors: {}, values: {} }
}
