"use client"

import { SendIcon } from "lucide-react"
import { useState, type FormEvent } from "react"

import type { Dictionary } from "@/i18n/dictionaries/en"

/**
 * Newsletter form from the footer. There is no email provider yet, so a valid
 * submission only shows a notice instead of pretending to subscribe.
 * TODO(integration): post the address to the chosen newsletter service.
 */
export function SubscribeForm({ labels }: { labels: Dictionary["footer"] }) {
  const [pending, setPending] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="flex gap-2">
        <label htmlFor="footer-email" className="sr-only">
          {labels.emailLabel}
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
          placeholder={labels.emailPlaceholder}
          className="h-10 min-w-0 flex-1 rounded-[0.25rem] bg-[#f8f8f8] px-4 text-[0.9375rem] text-page placeholder:text-[#8a8a8a] rtl:text-right"
        />
        <button
          type="submit"
          aria-label={labels.submit}
          className="gradient-outline grid size-10 shrink-0 place-items-center rounded-[0.25rem] text-ink transition hover:brightness-150"
        >
          <SendIcon
            aria-hidden="true"
            fill="currentColor"
            strokeWidth={1.5}
            className="size-5 -translate-x-px translate-y-px rtl:-scale-x-100"
          />
        </button>
      </div>
      <p role="status" className="mt-3 min-h-5 text-sm/5 text-ink-dim">
        {pending ? labels.subscribePending : null}
      </p>
    </form>
  )
}
