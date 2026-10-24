import type { StaticImageData } from "next/image"

import artificialIntelligence from "@/assets/articles/artificial-intelligence.jpg"
import brandingAndIdentity from "@/assets/articles/branding-and-identity.jpg"
import designStrategy from "@/assets/articles/design-strategy.jpg"
import developmentAndAi from "@/assets/articles/development-and-ai.jpg"
import mobileAppsFuture from "@/assets/articles/mobile-apps-future.jpg"
import userFlows from "@/assets/articles/user-flows.jpg"
import type { Locale } from "@/i18n/config"

/**
 * A block of an article's text. Headings carry the anchor the sections box
 * links to (the same in both languages); h3s belong to the h2 before them.
 */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "h2" | "h3"; id: string; text: string }

export type Article = {
  /** Path segment of the article's page (`/articles/[slug]`). */
  slug: string
  /** Publication date, YYYY-MM-DD. */
  date: string
  image: StaticImageData
  copy: Record<Locale, { title: string; excerpt: string }>
  /** The article's text; an article gets its page once it has one. */
  body?: Record<Locale, readonly ArticleBlock[]>
}

/**
 * Articles in Figma order (oldest first), with the photos exported from
 * Figma.
 *
 * TODO(content): these are the sample articles from Figma: titles, dates,
 * excerpts and stock photos. Only "Artificial Intelligence" has its text
 * (from the Article Details frame); the last one is dated 28 Nov 2026, in
 * the future.
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
    body: {
      en: [
        {
          type: "p",
          text: "AI systems are specialized algorithms designed to provide intelligent solutions across various sectors, including healthcare, finance, and customer service. They enhance efficiency and address numerous challenges.",
        },
        { type: "h2", id: "types-of-ai", text: "Types of AI" },
        {
          type: "p",
          text: "AI can be classified into several categories based on user needs, budget constraints, and task complexity. The most effective types of AI should possess the following traits:",
        },
        {
          type: "ul",
          items: [
            "Deliver outstanding performance",
            "Be cost-effective",
            "Have a long operational lifespan",
            "Adapt to evolving data",
            "Require minimal human intervention",
            "Have little to no negative impact on users.",
          ],
        },
        { type: "h2", id: "common-types", text: "Common Types of AI" },
        { type: "h3", id: "machine-learning", text: "Machine Learning AI" },
        {
          type: "p",
          text: "This type of AI uses algorithms that learn from data, similar to predictive analytics. It identifies patterns and makes predictions, improving accuracy and performance over time. While cost-effective, it often requires ongoing updates and can be prone to biases if not managed properly, necessitating recalibration.",
        },
        {
          type: "h3",
          id: "natural-language-processing",
          text: "Natural Language Processing AI",
        },
        {
          type: "p",
          text: "This AI understands and generates human language, excelling in conversation and text analysis. It is often custom-built and requires extensive datasets for training, integrating with various applications to enhance user interaction.",
        },
        { type: "h3", id: "computer-vision", text: "Computer Vision AI" },
        {
          type: "p",
          text: "These systems interpret visual information, commonly known as image recognition AI. They require minimal setup and can analyze images or videos, making them ideal for tasks like facial recognition and object detection, though they may not be suitable for all environments.",
        },
        {
          type: "h3",
          id: "robotic-process-automation",
          text: "Robotic Process Automation AI",
        },
        {
          type: "p",
          text: "Also known as RPA, this AI automates repetitive tasks and processes, streamlining workflows across industries. However, it can become outdated or inefficient over time and should not be relied upon for complex decision-making.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "أنظمة الذكاء الاصطناعي خوارزميات متخصصة صُمّمت لتقديم حلول ذكية في قطاعات متعددة، منها الرعاية الصحية والتمويل وخدمة العملاء، فترفع الكفاءة وتعالج كثيرًا من التحديات.",
        },
        { type: "h2", id: "types-of-ai", text: "أنواع الذكاء الاصطناعي" },
        {
          type: "p",
          text: "يمكن تصنيف الذكاء الاصطناعي إلى فئات عدة بحسب احتياجات المستخدمين وقيود الميزانية ودرجة تعقيد المهام. وينبغي أن تتسم أكثر أنواعه فاعلية بالسمات التالية:",
        },
        {
          type: "ul",
          items: [
            "أداء متميز",
            "تكلفة مناسبة",
            "عمر تشغيلي طويل",
            "القدرة على التكيّف مع البيانات المتغيّرة",
            "حاجة محدودة إلى التدخل البشري",
            "أثر سلبي ضئيل أو معدوم على المستخدمين.",
          ],
        },
        {
          type: "h2",
          id: "common-types",
          text: "الأنواع الشائعة للذكاء الاصطناعي",
        },
        { type: "h3", id: "machine-learning", text: "التعلّم الآلي" },
        {
          type: "p",
          text: "يعتمد هذا النوع على خوارزميات تتعلّم من البيانات، على نحو يشبه التحليلات التنبؤية؛ فيكتشف الأنماط ويضع التوقعات، وتتحسّن دقته وأداؤه بمرور الوقت. ورغم انخفاض تكلفته، فإنه يحتاج غالبًا إلى تحديثات مستمرة، وقد يقع في التحيّز إن لم يُدَر جيدًا، مما يستلزم إعادة معايرته.",
        },
        {
          type: "h3",
          id: "natural-language-processing",
          text: "معالجة اللغة الطبيعية",
        },
        {
          type: "p",
          text: "يفهم هذا النوع اللغة البشرية ويولّدها، ويتفوّق في المحادثة وتحليل النصوص. وغالبًا ما يُبنى خصيصًا ويحتاج إلى مجموعات بيانات ضخمة لتدريبه، ويتكامل مع تطبيقات متنوعة لتحسين تفاعل المستخدمين.",
        },
        { type: "h3", id: "computer-vision", text: "الرؤية الحاسوبية" },
        {
          type: "p",
          text: "تفسّر هذه الأنظمة المعلومات المرئية، وتُعرف عادةً بذكاء التعرّف على الصور. ولا تتطلب إلا إعدادًا بسيطًا، وتستطيع تحليل الصور ومقاطع الفيديو، مما يجعلها مثالية لمهام مثل التعرّف على الوجوه واكتشاف الأجسام، وإن كانت لا تناسب كل البيئات.",
        },
        {
          type: "h3",
          id: "robotic-process-automation",
          text: "أتمتة العمليات الروبوتية",
        },
        {
          type: "p",
          text: "يُعرف أيضًا باسم RPA، ويؤتمت المهام والعمليات المتكررة، فيبسّط سير العمل في مختلف القطاعات. لكنه قد يصبح قديمًا أو أقل كفاءة بمرور الوقت، ولا ينبغي الاعتماد عليه في اتخاذ القرارات المعقدة.",
        },
      ],
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

/** Slugs of the articles that have a page. */
export const articleSlugs = articles
  .filter((article) => article.body)
  .map((article) => article.slug)

/** The article at `slug` with its text, or undefined when it has no page. */
export function getArticle(slug: string) {
  const article = articles.find((item) => item.slug === slug)
  return article?.body ? { ...article, body: article.body } : undefined
}

export type ArticleSection = {
  id: string
  title: string
  subsections: { id: string; title: string }[]
}

/** The outline of an article's text: its h2s, each with its h3s. */
export function articleSections(blocks: readonly ArticleBlock[]) {
  const sections: ArticleSection[] = []
  for (const block of blocks) {
    if (block.type === "h2") {
      sections.push({ id: block.id, title: block.text, subsections: [] })
    } else if (block.type === "h3") {
      sections.at(-1)?.subsections.push({ id: block.id, title: block.text })
    }
  }
  return sections
}
