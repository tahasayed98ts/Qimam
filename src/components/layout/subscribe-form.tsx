"use client"

import { SendIcon } from "lucide-react"
import { useActionState } from "react"

import { subscribeToNewsletter, type SubscribeState } from "@/app/[locale]/actions"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { contactLimits } from "@/lib/contact"
import { cn } from "@/lib/utils"

const initialState: SubscribeState = { status: "idle" }

/**
 * Newsletter form from the footer. Subscribing emails the address to the
 * contact inbox (server action); a mistyped address comes back with its
 * error and stays in the field.
 */
export function SubscribeForm({
  locale,
  labels,
}: {
  locale: Locale
  labels: Dictionary["footer"]
}) {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState
  )
  const invalid = state.status === "invalid"

  return (
    <form action={formAction} noValidate className="mt-5">
      <input type="hidden" name="locale" value={locale} />
      {/* Left empty by people; bots fill it in. */}
      <div aria-hidden="true" className="absolute inset-s-[-100vw] size-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex gap-2">
        <label htmlFor="footer-email" className="sr-only">
          {labels.emailLabel}
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          maxLength={contactLimits.email}
          defaultValue={state.email ?? ""}
          aria-invalid={invalid || undefined}
          aria-describedby="footer-email-status"
          autoComplete="email"
          dir="ltr"
          placeholder={labels.emailPlaceholder}
          className="h-10 min-w-0 flex-1 rounded-[0.25rem] bg-[#f8f8f8] px-4 text-[0.9375rem] text-page placeholder:text-[#8a8a8a] aria-invalid:outline-2 aria-invalid:outline-destructive rtl:text-right"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label={pending ? labels.subscribing : labels.submit}
          className="gradient-outline grid size-10 shrink-0 place-items-center rounded-[0.25rem] text-ink transition hover:brightness-150 disabled:opacity-70"
        >
          <SendIcon
            aria-hidden="true"
            fill="currentColor"
            strokeWidth={1.5}
            className="size-5 -translate-x-px translate-y-px rtl:-scale-x-100"
          />
        </button>
      </div>
      <p
        id="footer-email-status"
        role="status"
        className={cn(
          "mt-3 min-h-5 text-sm/5",
          invalid || state.status === "failed"
            ? "text-destructive"
            : "text-ink-dim"
        )}
      >
        {invalid && state.error && labels.errors[state.error]}
        {state.status === "sent" && labels.subscribed}
        {state.status === "failed" && labels.subscribeFailed}
      </p>
    </form>
  )
}
