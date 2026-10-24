import type { StaticImageData } from "next/image"

import artificialIntelligence from "@/assets/articles/artificial-intelligence.jpg"
import brandingAndIdentity from "@/assets/articles/branding-and-identity.jpg"
import designStrategy from "@/assets/articles/design-strategy.jpg"
import developmentAndAi from "@/assets/articles/development-and-ai.jpg"
import mobileAppsFuture from "@/assets/articles/mobile-apps-future.jpg"
import userFlows from "@/assets/articles/user-flows.jpg"
import type { Locale } from "@/i18n/config"

export type Article = {
  /** Path segment of the article's page (`/articles/[slug]`). */
  slug: string
  /** Publication date, YYYY-MM-DD. */
  date: string
  image: StaticImageData
  copy: Record<Locale, { title: string; excerpt: string }>
}

/**
 * Articles in Figma order (oldest first), with the photos exported from
 * Figma.
 *
 * TODO(content): these are the sample articles from Figma: titles, dates,
 * excerpts and stock photos, with no article text yet; the last one is
 * dated 28 Nov 2026, in the future.
 */
export const articles: Article[] = [
  {
    slug: "development-and-ai",
    date: "2025-12-17",
    image: developmentAndAi,
    copy: {
      en: {
        title: "Development & AI",
        excerpt:
          "Discover how AI is reshaping the way software is built, from smart code assistants to automated testing and faster delivery cycles.",
      },
      ar: {
        title: "التطوير والذكاء الاصطناعي",
        excerpt:
          "اكتشف كيف يعيد الذكاء الاصطناعي تشكيل طريقة بناء البرمجيات، من مساعدي البرمجة الأذكياء إلى الاختبار المؤتمت ودورات تسليم أسرع.",
      },
    },
  },
  {
    slug: "mobile-apps-future",
    date: "2026-02-01",
    image: mobileAppsFuture,
    copy: {
      en: {
        title: "Mobile Apps Future",
        excerpt:
          "Explore the trends shaping the next generation of mobile apps, from on-device intelligence to seamless cross-platform experiences.",
      },
      ar: {
        title: "مستقبل تطبيقات الجوال",
        excerpt:
          "استكشف الاتجاهات التي تشكّل الجيل القادم من تطبيقات الجوال، من الذكاء على الجهاز نفسه إلى تجارب سلسة عبر المنصات.",
      },
    },
  },
  {
    slug: "artificial-intelligence",
    date: "2026-05-07",
    image: artificialIntelligence,
    copy: {
      en: {
        title: "Artificial Intelligence",
        excerpt:
          "Learn how AI systems deliver intelligent solutions across healthcare, finance, and customer service while improving efficiency.",
      },
      ar: {
        title: "الذكاء الاصطناعي",
        excerpt:
          "تعرّف على كيف تقدّم أنظمة الذكاء الاصطناعي حلولًا ذكية في الرعاية الصحية والتمويل وخدمة العملاء مع رفع الكفاءة.",
      },
    },
  },
  {
    slug: "user-flows",
    date: "2026-07-12",
    image: userFlows,
    copy: {
      en: {
        title: "User Flows",
        excerpt:
          "Understand how mapping user journeys helps teams design products that feel natural, clear, and effortless to use.",
      },
      ar: {
        title: "رحلات المستخدم",
        excerpt:
          "افهم كيف يساعد رسم رحلات المستخدم الفرق على تصميم منتجات طبيعية وواضحة وسهلة الاستخدام.",
      },
    },
  },
  {
    slug: "design-strategy",
    date: "2026-10-15",
    image: designStrategy,
    copy: {
      en: {
        title: "Design Strategy",
        excerpt:
          "See how a clear design strategy connects business goals with user needs and creates consistent, memorable digital products.",
      },
      ar: {
        title: "استراتيجية التصميم",
        excerpt:
          "تعرّف على كيف تربط استراتيجية التصميم الواضحة بين أهداف العمل واحتياجات المستخدمين، وتصنع منتجات رقمية متناسقة لا تُنسى.",
      },
    },
  },
  {
    slug: "branding-and-identity",
    date: "2026-11-28",
    image: brandingAndIdentity,
    copy: {
      en: {
        title: "Branding & Identity",
        excerpt:
          "Discover how a strong brand identity builds trust, tells your story, and helps your business stand out in a crowded market.",
      },
      ar: {
        title: "العلامة التجارية والهوية",
        excerpt:
          "اكتشف كيف تبني الهوية القوية للعلامة التجارية الثقة، وتروي قصتك، وتساعد عملك على التميّز في سوق مزدحمة.",
      },
    },
  },
]
