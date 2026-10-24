"use client"

import { useActionState, type ReactNode } from "react"

import { sendContactMessage } from "@/app/[locale]/contact/actions"
import chevronDown from "@/assets/contact/chevron-down.svg"
import { contactEmail } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"
import {
  contactLimits,
  contactSources,
  type ContactField,
  type ContactState,
} from "@/lib/contact"
import { cn } from "@/lib/utils"

const initialState: ContactState = { status: "idle", errors: {}, values: {} }

const control =
  "w-full rounded-lg border border-white bg-field px-4 text-ink placeholder:text-field-ink aria-invalid:border-destructive"

/**
 * The Contact page form. "Book Now" sends it to the contact inbox (server
 * action); errors come back per field and what was typed stays in place.
 */
export function ContactForm({
  locale,
  labels,
}: {
  locale: Locale
  labels: Dictionary["contact"]
}) {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  )
  const { values, errors } = state

  /** id, name, value and error wiring for a field's control. */
  const wire = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    defaultValue: values[field] ?? "",
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  })

  /** A labelled field around its control, with its error underneath. */
  const field = (name: ContactField, input: ReactNode, className?: string) => {
    const error = errors[name]
    return (
      <div className={cn("flex flex-col gap-4", className)}>
        <label
          htmlFor={`contact-${name}`}
          className="font-display leading-[1.42] capitalize"
        >
          {labels.fields[name].label}
        </label>
        {input}
        {error && (
          <p id={`contact-${name}-error`} className="-mt-2 text-sm text-destructive">
            {name === "email" && error === "invalid"
              ? labels.errors.email
              : name === "phone" && error === "invalid"
                ? labels.errors.phone
                : labels.errors[error]}
          </p>
        )}
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="mt-12 lg:mt-16">
      <input type="hidden" name="locale" value={locale} />
      {/* Left empty by people; bots fill it in. */}
      <div aria-hidden="true" className="absolute inset-s-[-100vw] size-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-8 lg:grid-cols-[38.75rem_1fr]">
        <div
          data-aos="fade-right"
          data-aos-offset="0"
          className="grid gap-x-5 gap-y-8 sm:grid-cols-2"
        >
          {field(
            "firstName",
            <input
              {...wire("firstName")}
              maxLength={contactLimits.firstName}
              required
              autoComplete="given-name"
              placeholder={labels.fields.firstName.placeholder}
              className={cn(control, "h-12")}
            />
          )}
          {field(
            "lastName",
            <input
              {...wire("lastName")}
              maxLength={contactLimits.lastName}
              required
              autoComplete="family-name"
              placeholder={labels.fields.lastName.placeholder}
              className={cn(control, "h-12")}
            />
          )}
          {field(
            "email",
            <input
              {...wire("email")}
              maxLength={contactLimits.email}
              type="email"
              required
              autoComplete="email"
              dir="ltr"
              placeholder={labels.fields.email.placeholder}
              className={cn(control, "h-12 rtl:text-right")}
            />,
            "sm:col-span-2"
          )}
          {field(
            "phone",
            <input
              {...wire("phone")}
              maxLength={contactLimits.phone}
              type="tel"
              autoComplete="tel"
              dir="ltr"
              placeholder={labels.fields.phone.placeholder}
              className={cn(control, "h-12 rtl:text-right")}
            />,
            "sm:col-span-2"
          )}
          {field(
            "source",
            <div className="relative">
              <select
                {...wire("source")}
                // React applies a select's defaultValue only on mount, so
                // remount it to keep the answer when the form comes back.
                key={values.source ?? ""}
                className={cn(
                  control,
                  "h-12 appearance-none pe-12 has-[option[value='']:checked]:text-field-ink [&>option]:bg-panel [&>option]:text-ink"
                )}
              >
                <option value="">{labels.fields.source.placeholder}</option>
                {contactSources.map((source) => (
                  <option key={source} value={source}>
                    {labels.sources[source]}
                  </option>
                ))}
              </select>
              {/* The Figma chevron, as a mask so it takes the text colour. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-e-4 top-1/2 size-6 -translate-y-1/2 bg-ink"
                style={{
                  mask: `url(${chevronDown.src}) center / contain no-repeat`,
                }}
              />
            </div>,
            "sm:col-span-2"
          )}
        </div>
        <div data-aos="fade-left" data-aos-offset="0" className="flex">
          {field(
            "message",
            <textarea
              {...wire("message")}
              maxLength={contactLimits.message}
              required
              placeholder={labels.fields.message.placeholder}
              className={cn(control, "min-h-48 flex-1 resize-none pt-4 pb-2")}
            />,
            "flex-1"
          )}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="0"
        className="mt-10 grid items-center gap-4 lg:grid-cols-[38.75rem_1fr] lg:gap-8"
      >
        <button
          type="submit"
          disabled={pending}
          className="h-12 rounded-lg border border-white bg-cta px-6 font-display transition hover:brightness-125 disabled:opacity-70 lg:col-start-2"
        >
          {pending ? labels.sending : labels.submit}
        </button>
        <p
          role="status"
          className={cn(
            "text-sm/6 lg:row-start-1",
            state.status === "failed" ? "text-destructive" : "text-ink-soft"
          )}
        >
          {state.status === "sent" && labels.sent}
          {state.status === "failed" && (
            <>
              {labels.failed}{" "}
              <a href={`mailto:${contactEmail}`} className="underline" dir="ltr">
                {contactEmail}
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  )
}
