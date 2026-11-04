import banner from "@/assets/projects/tawaf/banner.jpg"
import home from "@/assets/projects/tawaf/home.jpg"
import offers from "@/assets/projects/tawaf/offers.jpg"
import ourStory from "@/assets/projects/tawaf/our-story.jpg"
import pages from "@/assets/projects/tawaf/pages.jpg"
import services from "@/assets/projects/tawaf/services.jpg"
import { fittedShowcases } from "./fitted"
import type { CaseStudy } from "./index"

/**
 * Tawaf case study (Figma node 352:75). The images were exported from Figma,
 * where their layers still carry ArabFly's, Tallah's and Special's names.
 *
 * TODO(content): the third shot's caption is the same on Tallah, Special,
 * Tawaf and Amr Ali in Figma, and reads like template text.
 */
export const tawaf: CaseStudy = {
  ...fittedShowcases({
    hero: banner,
    challenge: services,
    approach: pages,
    gallery: [home, offers, ourStory],
  }),
  copy: {
    en: {
      facts: {
        industry: "Hajj & Umrah Travel Platform",
        services: "Web Application + Web Admin Dashboard",
        year: "2026",
        platform: "Responsive Website, Arabic & English",
      },
      hero: {
        alt: "Tawaf's home page in stacked browser windows, with the Prophet's Mosque and a hotel search bar, beside the line “A journey of faith, carefully arranged.”",
        caption:
          "Home screen: A calm entry point with hotel search, featured offers, and quick access to every pilgrim service.",
      },
      overview: {
        title: "One platform for the journey to the Holy Houses.",
        lead: "A travel platform dedicated to Hajj, Umrah, and Ziyarah, bringing hotels near the Two Holy Mosques, visas, flights, and group programs together in one bilingual experience.",
        columns: [
          "Tawaf is built for pilgrims and for the companies that serve them. Guests can search hotels in Makkah and Madinah, browse curated offers, and request services like entry visas, flights, and luxury suites overlooking the Haram, all from one place.",
          "The platform includes hotel search with filters, featured offers near the Prophet’s Mosque and the Holy Mosque, a services hub for companies and delegations, a travel blog with practical guidance for visitors, and full Arabic and English support.",
        ],
      },
      challenge: {
        title: ["Simplifying the journey. Honoring the purpose."],
        body: [
          "Planning a pilgrimage is not like planning an ordinary trip. Travelers need trust, clarity, and the right location, close to the Haram, with arrangements they can rely on. The challenge was to bring all of this into one platform that feels calm, respectful, and easy to use for visitors from different countries.",
          "We needed clear paths for individuals, families, and groups, a hotel search that gets to results fast, and a warm visual identity inspired by the places pilgrims are traveling to, with Arabic and English pages designed natively for right-to-left and left-to-right reading.",
        ],
        principle:
          "Design principle: Calm, respectful, and clear. Every section helps the pilgrim plan with confidence.",
        alt: "Tawaf's services page in stacked browser windows, with photo cards of its services",
        caption:
          "Services screen: Dedicated programs for companies, delegations, and groups, and luxury stays overlooking the Haram.",
      },
      approach: {
        title: ["Less worry.", "More devotion."],
        body: "We started by mapping what a pilgrim needs before, during, and after the trip, from visa and flight to a stay close to the Haram. Then we built a consistent set of reusable components in a warm gold palette inspired by the sunrise over the Two Holy Mosques.",
        steps: [
          {
            title: "Organize the pilgrim services",
            body: "Group hotels, visas, flights, and programs into clear sections with simple navigation.",
          },
          {
            title: "Build a fast hotel search",
            body: "Search by dates, guests, and price, with sorting and filters, focused on Makkah and Madinah.",
          },
          {
            title: "Build trust through content",
            body: "Featured offers, a company story with vision and values, and a blog with practical guidance for visitors.",
          },
        ],
        alt: "Tawaf's offers, blog, home and hotels pages side by side",
      },
      gallery: [
        {
          title: "Begin with intention. / Arrive with ease.",
          caption: "Hero, search, and quick access",
          alt: "Tawaf's home page with its hotel search bar",
        },
        {
          title: "Close to the Haram.",
          caption: "Featured offers for Makkah and Madinah",
          alt: "Tawaf's offers page, with hotels in Makkah and near the Prophet's Mosque",
        },
        {
          title: "In service of the Guests of Allah.",
          caption: "A clear hierarchy on smaller screens",
          alt: "Tawaf's Our Story page, with a photo of Makkah",
        },
      ],
    },
    ar: {
      facts: {
        industry: "منصة سفر للحج والعمرة",
        services: "تطبيق ويب + لوحة تحكم إدارية على الويب",
        year: "2026",
        platform: "موقع متجاوب باللغتين العربية والإنجليزية",
      },
      hero: {
        alt: "الصفحة الرئيسية لموقع طواف في نوافذ متصفح متتالية، بصورة المسجد النبوي وشريط البحث عن الفنادق، بجانب عبارة «A journey of faith, carefully arranged.»",
        caption:
          "الشاشة الرئيسية: مدخل هادئ يضم البحث عن الفنادق وأبرز العروض، مع وصول سريع إلى كل خدمات ضيوف الرحمن.",
      },
      overview: {
        title: "منصة واحدة للرحلة إلى الحرمين الشريفين.",
        lead: "منصة سفر مخصصة للحج والعمرة والزيارة، تجمع الفنادق القريبة من الحرمين الشريفين والتأشيرات ورحلات الطيران وبرامج المجموعات في تجربة واحدة باللغتين العربية والإنجليزية.",
        columns: [
          "صُمّمت طواف لضيوف الرحمن وللشركات التي تخدمهم: يستطيع الضيوف البحث عن الفنادق في مكة المكرمة والمدينة المنورة، وتصفّح عروض مختارة، وطلب خدمات مثل تأشيرات الدخول ورحلات الطيران والأجنحة الفاخرة المطلة على الحرم، وكل ذلك من مكان واحد.",
          "تشمل المنصة البحث عن الفنادق مع عوامل التصفية، وأبرز العروض قرب المسجد النبوي والمسجد الحرام، ومركزًا للخدمات للشركات والوفود، ومدونة للسفر بإرشادات عملية للزوار، ودعمًا كاملًا للغتين العربية والإنجليزية.",
        ],
      },
      challenge: {
        title: ["تبسيط الرحلة. وإجلال لغايتها."],
        body: [
          "التخطيط لرحلة الحج أو العمرة لا يشبه التخطيط لرحلة عادية؛ فالمسافرون يحتاجون إلى الثقة والوضوح والموقع المناسب القريب من الحرم، مع ترتيبات يمكنهم الاعتماد عليها. وكان التحدي جمع كل ذلك في منصة واحدة تبدو هادئة ووقورة وسهلة الاستخدام للزوار من مختلف البلدان.",
          "احتجنا إلى مسارات واضحة للأفراد والعائلات والمجموعات، وبحث عن الفنادق يصل إلى النتائج بسرعة، وهوية بصرية دافئة مستوحاة من الأماكن التي يقصدها ضيوف الرحمن، مع صفحات عربية وإنجليزية مصمّمة من الأساس للقراءة من اليمين إلى اليسار ومن اليسار إلى اليمين.",
        ],
        principle:
          "مبدأ التصميم: الهدوء والوقار والوضوح. كل قسم يساعد ضيف الرحمن على التخطيط بثقة.",
        alt: "صفحة الخدمات في موقع طواف في نوافذ متصفح متتالية، ببطاقات مصوّرة لخدماته",
        caption:
          "شاشة الخدمات: برامج مخصصة للشركات والوفود والمجموعات، وإقامات فاخرة مطلة على الحرم.",
      },
      approach: {
        title: ["قلق أقل.", "خشوع أكثر."],
        body: "بدأنا برسم ما يحتاج إليه ضيف الرحمن قبل الرحلة وأثناءها وبعدها، من التأشيرة والطيران إلى الإقامة قرب الحرم. ثم بنينا مجموعة متناسقة من المكوّنات القابلة لإعادة الاستخدام بلوحة ألوان ذهبية دافئة مستوحاة من شروق الشمس فوق الحرمين الشريفين.",
        steps: [
          {
            title: "تنظيم خدمات ضيوف الرحمن",
            body: "تجميع الفنادق والتأشيرات والطيران والبرامج في أقسام واضحة مع تنقّل بسيط.",
          },
          {
            title: "بناء بحث سريع عن الفنادق",
            body: "بحث بالتواريخ وعدد الضيوف والسعر، مع الترتيب وعوامل التصفية، بالتركيز على مكة المكرمة والمدينة المنورة.",
          },
          {
            title: "بناء الثقة عبر المحتوى",
            body: "أبرز العروض، وقصة الشركة برؤيتها وقيمها، ومدونة بإرشادات عملية للزوار.",
          },
        ],
        alt: "صفحات العروض والمدونة والرئيسية والفنادق في موقع طواف جنبًا إلى جنب",
      },
      gallery: [
        {
          title: "ابدأ بنية صادقة. / وصل بيسر.",
          caption: "الواجهة والبحث والوصول السريع",
          alt: "الصفحة الرئيسية لموقع طواف وشريط البحث عن الفنادق",
        },
        {
          title: "قرب الحرم.",
          caption: "أبرز العروض في مكة المكرمة والمدينة المنورة",
          alt: "صفحة العروض في موقع طواف، بفنادق في مكة المكرمة وقرب المسجد النبوي",
        },
        {
          title: "في خدمة ضيوف الرحمن.",
          caption: "تسلسل واضح على الشاشات الأصغر",
          alt: "صفحة «مسيرتنا» في موقع طواف وصورة لمكة المكرمة",
        },
      ],
    },
  },
}
