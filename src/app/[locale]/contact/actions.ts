"use server"

import en from "@/i18n/dictionaries/en"
import {
  validateContact,
  type ContactSource,
  type ContactState,
} from "@/lib/contact"
import { emailContactInbox } from "@/lib/email"

/**
 * Sends the Contact page form to the contact inbox through Resend
 * (`emailContactInbox`). Replying to the email answers the visitor.
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

  const sent = await emailContactInbox({
    form: "Contact form",
    subject: `Qimam website: message from ${name}`,
    text,
    replyTo: values.email,
  })
  return sent
    ? { status: "sent", errors: {}, values: {} }
    : { status: "failed", errors: {}, values }
}
