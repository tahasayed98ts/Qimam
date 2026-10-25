import Image from "next/image"

import appStoreName from "@/assets/stores/app-store/app-store.svg"
import appStoreApple from "@/assets/stores/app-store/apple.svg"
import appStoreBadge from "@/assets/stores/app-store/badge.svg"
import appStoreDownloadOn from "@/assets/stores/app-store/download-on-the.svg"
import googlePlayBadge from "@/assets/stores/google-play.svg"
import type { Project } from "@/content/projects"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { cn } from "@/lib/utils"

/**
 * The App Store badge as Figma layers it: the Apple mark and both lines of
 * text on the badge (insets in % of the badge, physical in RTL too).
 */
const appStoreLayers = [
  { src: appStoreBadge, inset: "inset-0" },
  { src: appStoreApple, inset: "inset-[19.62%_76.57%_23.77%_8.03%]" },
  { src: appStoreDownloadOn, inset: "inset-[21.09%_12.41%_63.01%_29.81%]" },
  { src: appStoreName, inset: "inset-[44.68%_8.5%_16.27%_28.77%]" },
]

const badgeLink =
  "relative block h-7 rounded-[0.25rem] transition-opacity hover:opacity-85"

/**
 * A project's store badges, on the dark chip that otherwise holds its URL.
 * Each badge appears once its store link is known.
 */
export function StoreBadges({
  name,
  stores,
  labels,
}: {
  name: string
  stores: NonNullable<Project["stores"]>
  labels: Dictionary["projects"]
}) {
  return (
    <div className="mt-2.5 flex w-fit items-center gap-2.5 rounded-[0.375rem] bg-[#272727] px-3 py-2">
      {stores.appStore && (
        <a
          href={stores.appStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labels.appStore} ${name} ${labels.newTab}`}
          className={cn(badgeLink, "w-21.25")}
        >
          {appStoreLayers.map(({ src, inset }) => (
            <span key={src.src} className={cn("absolute", inset)}>
              <Image src={src} alt="" fill unoptimized />
            </span>
          ))}
        </a>
      )}
      {stores.googlePlay && (
        <a
          href={stores.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labels.googlePlay} ${name} ${labels.newTab}`}
          className={cn(badgeLink, "w-23.5")}
        >
          <Image src={googlePlayBadge} alt="" fill unoptimized />
        </a>
      )}
    </div>
  )
}
