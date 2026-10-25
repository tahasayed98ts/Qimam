"use server"

import { contactLimits, isEmail } from "@/lib/contact"
import { emailContactInbox } from "@/lib/email"

export type SubscribeState = {
  status: "idle" | "invalid" | "sent" | "failed"
  error?: "required" | "invalid"
  /** What was typed, to refill the field after an error. */
  email?: string
}

/**
 * The footer's Subscribe form. There's no newsletter service yet, so each
 * new subscriber's address is emailed to the contact inbox through Resend.
 */
export async function subscribeToNewsletter(
  _previous: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // A hidden field only bots fill in: let them think it worked.
  if (formData.get("website")) return { status: "sent" }

  const raw = formData.get("email")
  const email = typeof raw === "string" ? raw.trim() : ""
  if (!email) return { status: "invalid", error: "required", email }
  if (email.length > contactLimits.email || !isEmail(email)) {
    return { status: "invalid", error: "invalid", email }
  }

  const page = formData.get("locale") === "ar" ? "Arabic" : "English"
  const sent = await emailContactInbox({
    form: "Subscribe form",
    subject: `Qimam website: new subscriber ${email}`,
    text: [
      `New newsletter subscriber from the Qimam website (${page} page).`,
      "",
      `Email: ${email}`,
    ].join("\n"),
    replyTo: email,
  })
  return sent ? { status: "sent" } : { status: "failed", email }
}
