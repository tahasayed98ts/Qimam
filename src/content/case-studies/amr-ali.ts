import articles from "@/assets/projects/amr-ali/articles.jpg"
import banner from "@/assets/projects/amr-ali/banner.jpg"
import home from "@/assets/projects/amr-ali/home.jpg"
import pages from "@/assets/projects/amr-ali/pages.jpg"
import projects from "@/assets/projects/amr-ali/projects.jpg"
import services from "@/assets/projects/amr-ali/services.jpg"
import { fittedShowcases } from "./fitted"
import type { CaseStudy } from "./index"

/**
 * Amr Ali case study (Figma node 355:263). The images were exported from
 * Figma, where their layers still carry ArabFly's, Tallah's and Special's
 * names. The Arabic quotes the site's own "احجز اجتماع" button.
 *
 * TODO(content): the third shot's caption is the same on Tallah, Special,
 * Tawaf and Amr Ali in Figma, and reads like template text.
 */
export const amrAli: CaseStudy = {
  ...fittedShowcases({
    hero: banner,
    challenge: services,
    approach: pages,
    gallery: [home, projects, articles],
  }),
  copy: {
    en: {
      facts: {
        industry: "Contracting & General Trading",
        services: "Corporate Website",
        year: "2026",
        platform: "Responsive Website, Arabic & English",
      },
      hero: {
        alt: "Amr Ali's home page in stacked browser windows, with workers in hard hats on a building site, beside the line “Built with precision. Finished with care.”",
        caption:
          "Home screen: A confident first impression, with quick access to services, sectors, and projects.",
      },
      overview: {
        title: "A contractor’s whole story. One website.",
        lead: "A corporate website for a contracting and general supplies company, presenting its services, sectors, projects, and expertise in a clear, professional, and bilingual experience.",
        columns: [
          "Amr Ali delivers residential, commercial, and industrial construction, along with interior finishing, facades, and general supplies. The website organizes this broad offering into clear services and sectors, so clients find the right solution quickly.",
          "The platform includes a services hub with scope of work and suitable project types, a sectors section, a filterable projects gallery with detailed case pages, an articles library, and direct actions to schedule a meeting or request prices.",
        ],
      },
      challenge: {
        title: ["Complex work.", "Clearly presented."],
        body: [
          "A contracting company offers many services to many types of clients, from villas and apartment buildings to offices, factories, and facades. The challenge was to present this range without overwhelming visitors, and to build trust through real projects instead of generic claims.",
          "We needed a structure that guides each visitor to what matters to them: a clear path from services to sectors to proven projects, case pages that explain the challenges and solutions behind each build, and simple ways to start a conversation.",
        ],
        principle:
          "Design principle: Clarity builds trust. Every page moves the visitor closer to a conversation.",
        alt: "An Amr Ali service page in stacked browser windows, with its suitable project types and its materials and systems",
        caption:
          "Services screen: Each service explains its scope of work, suitable project types, and materials and systems.",
      },
      approach: {
        title: ["Less explaining.", "More proof."],
        body: "We started by mapping the company’s services and the questions clients ask before they hire a contractor. Then we built a consistent set of reusable components in a navy and orange palette, with a project case structure that turns every build into a clear story.",
        steps: [
          {
            title: "Organize the offering",
            body: "Group services, sectors, and sections into a clear hierarchy with simple navigation and a persistent “Schedule Meeting” action.",
          },
          {
            title: "Show the work",
            body: "A filterable projects gallery (sector, section, location, year, status) and case pages with challenges, solutions, phases, and services used.",
          },
          {
            title: "Share the expertise",
            body: "An articles library that explains construction topics, building authority and helping clients make informed decisions.",
          },
        ],
        alt: "Amr Ali's projects, sectors, home and articles pages side by side",
      },
      gallery: [
        {
          title: "Strong foundations. / A clear first impression.",
          caption: "Hero and quick access",
          alt: "Amr Ali's home page with a building site photo and a project card",
        },
        {
          title: "Every build, / told as a story.",
          caption: "Filters, cards, and case pages",
          alt: "Amr Ali's projects page with its filters and project cards",
        },
        {
          title: "Built on knowledge. / Shared openly.",
          caption: "A clear hierarchy on smaller screens",
          alt: "Amr Ali's articles page with article cards and a building site photo",
        },
      ],
    },
    ar: {
      facts: {
        industry: "المقاولات والتوريدات العمومية",
        services: "موقع إلكتروني للشركة",
        year: "2026",
        platform: "موقع متجاوب باللغتين العربية والإنجليزية",
      },
      hero: {
        alt: "الصفحة الرئيسية لموقع عمرو علي في نوافذ متصفح متتالية، بصورة عمّال بخوذات في موقع بناء، بجانب عبارة «Built with precision. Finished with care.»",
        caption:
          "الشاشة الرئيسية: انطباع أول واثق، مع وصول سريع إلى الخدمات والقطاعات والمشاريع.",
      },
      overview: {
        title: "قصة المقاول كاملة. في موقع واحد.",
        lead: "موقع إلكتروني لشركة مقاولات وتوريدات عامة، يعرض خدماتها وقطاعاتها ومشاريعها وخبراتها في تجربة واضحة واحترافية باللغتين العربية والإنجليزية.",
        columns: [
          "تنفّذ عمرو علي مشاريع الإنشاءات السكنية والتجارية والصناعية، إلى جانب التشطيبات الداخلية والواجهات والتوريدات العامة. وينظّم الموقع هذا النطاق الواسع في خدمات وقطاعات واضحة، ليجد العملاء الحل المناسب بسرعة.",
          "تشمل المنصة مركزًا للخدمات يوضّح نطاق العمل وأنواع المشاريع المناسبة، وقسمًا للقطاعات، ومعرض مشاريع قابلًا للتصفية مع صفحات تفصيلية لكل مشروع، ومكتبة مقالات، وإجراءات مباشرة لحجز اجتماع أو طلب الأسعار.",
        ],
      },
      challenge: {
        title: ["عمل معقّد.", "بعرض واضح."],
        body: [
          "تقدّم شركات المقاولات خدمات كثيرة لأنواع مختلفة من العملاء، من الفلل والعمارات السكنية إلى المكاتب والمصانع والواجهات. وكان التحدي عرض هذا النطاق دون إرباك الزوار، وبناء الثقة من خلال مشاريع حقيقية بدلًا من الادعاءات العامة.",
          "احتجنا إلى هيكل يقود كل زائر إلى ما يهمّه: مسار واضح من الخدمات إلى القطاعات إلى المشاريع المنجزة، وصفحات مشاريع تشرح التحديات والحلول وراء كل مبنى، وطرق بسيطة لبدء المحادثة.",
        ],
        principle:
          "مبدأ التصميم: الوضوح يبني الثقة. كل صفحة تقرّب الزائر من بدء المحادثة.",
        alt: "صفحة خدمة في موقع عمرو علي في نوافذ متصفح متتالية، بأنواع المشاريع المناسبة والمواد والأنظمة",
        caption:
          "شاشة الخدمات: تشرح كل خدمة نطاق عملها وأنواع المشاريع المناسبة لها والمواد والأنظمة المستخدمة.",
      },
      approach: {
        title: ["شرح أقل.", "أدلة أكثر."],
        body: "بدأنا برسم خدمات الشركة والأسئلة التي يطرحها العملاء قبل التعاقد مع مقاول. ثم بنينا مجموعة متناسقة من المكوّنات القابلة لإعادة الاستخدام بلوحة ألوان من الكحلي والبرتقالي، مع هيكل لصفحات المشاريع يحوّل كل مبنى إلى قصة واضحة.",
        steps: [
          {
            title: "تنظيم الخدمات",
            body: "تجميع الخدمات والقطاعات والأقسام في تسلسل واضح مع تنقّل بسيط وزر «احجز اجتماع» ظاهر دائمًا.",
          },
          {
            title: "عرض الأعمال",
            body: "معرض مشاريع قابل للتصفية (القطاع، القسم، الموقع، السنة، الحالة) وصفحات مشاريع تعرض التحديات والحلول والمراحل والخدمات المستخدمة.",
          },
          {
            title: "مشاركة الخبرة",
            body: "مكتبة مقالات تشرح موضوعات البناء، فترسّخ مكانة الشركة وتساعد العملاء على اتخاذ قرارات مدروسة.",
          },
        ],
        alt: "صفحات المشاريع والقطاعات والرئيسية والمقالات في موقع عمرو علي جنبًا إلى جنب",
      },
      gallery: [
        {
          title: "أساس متين. / وانطباع أول واضح.",
          caption: "الواجهة والوصول السريع",
          alt: "الصفحة الرئيسية لموقع عمرو علي بصورة موقع بناء وبطاقة مشروع",
        },
        {
          title: "كل مبنى / قصة تُروى.",
          caption: "عوامل التصفية والبطاقات وصفحات المشاريع",
          alt: "صفحة المشاريع في موقع عمرو علي وعوامل التصفية وبطاقات المشاريع",
        },
        {
          title: "قائم على المعرفة. / ومشاركتها بلا تحفظ.",
          caption: "تسلسل واضح على الشاشات الأصغر",
          alt: "صفحة المقالات في موقع عمرو علي وبطاقات المقالات وصورة موقع بناء",
        },
      ],
    },
  },
}
