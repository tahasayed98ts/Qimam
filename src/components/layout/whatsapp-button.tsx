import { WhatsAppIcon } from "@/components/icons"
import { socialLinks } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"

/** White 56px tab pinned to the inline-end edge of the viewport. */
export function WhatsAppButton({ label }: { label: Dictionary["social"]["whatsapp"] }) {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed inset-e-0 bottom-6 z-30 sm:bottom-12 grid size-12 place-items-center rounded-s-lg bg-white shadow-[0_8px_24px_rgb(0_0_0/0.35)] transition-[width] hover:w-14 sm:size-14 sm:hover:w-16"
    >
      <WhatsAppIcon className="size-5" />
    </a>
  )
}
