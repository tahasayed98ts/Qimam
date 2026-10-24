/**
 * The Contact page form: its fields, the answers to "How did you hear about
 * us?" (labels in the dictionaries) and the validation shared by the form and
 * the server action that sends it.
 */

export const contactSources = ["search", "social", "referral", "other"] as const

export type ContactSource = (typeof contactSources)[number]

export type ContactField =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "source"
  | "message"

/** Longest accepted value per field. */
export const contactLimits: Record<ContactField, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 30,
  source: 20,
  message: 5000,
}

export type ContactError = "required" | "invalid" | "tooLong"

export type ContactState = {
  status: "idle" | "invalid" | "sent" | "failed"
  errors: Partial<Record<ContactField, ContactError>>
  /** What was submitted, to refill the form after an error. */
  values: Partial<Record<ContactField, string>>
}

const required: ContactField[] = ["firstName", "lastName", "email", "message"]

export function validateContact(formData: FormData) {
  const values = {} as Record<ContactField, string>
  const errors: ContactState["errors"] = {}
  for (const field of Object.keys(contactLimits) as ContactField[]) {
    const raw = formData.get(field)
    values[field] = typeof raw === "string" ? raw.trim() : ""
    if (!values[field]) {
      if (required.includes(field)) errors[field] = "required"
    } else if (values[field].length > contactLimits[field]) {
      errors[field] = "tooLong"
    }
  }
  if (!errors.email && values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "invalid"
  }
  if (
    !errors.phone &&
    values.phone &&
    !(/^\+?[\d\s().-]+$/.test(values.phone) && values.phone.replace(/\D/g, "").length >= 6)
  ) {
    errors.phone = "invalid"
  }
  if (values.source && !contactSources.includes(values.source as ContactSource)) {
    errors.source = "invalid"
  }
  return { values, errors }
}
