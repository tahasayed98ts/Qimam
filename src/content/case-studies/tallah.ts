import banner from "@/assets/projects/tallah/banner.jpg"
import home from "@/assets/projects/tallah/home.jpg"
import hotels from "@/assets/projects/tallah/hotels.jpg"
import packages from "@/assets/projects/tallah/packages.jpg"
import pages from "@/assets/projects/tallah/pages.jpg"
import services from "@/assets/projects/tallah/services.jpg"
import { fittedShowcases } from "./fitted"
import type { CaseStudy } from "./index"

/**
 * Tallah case study (Figma node 310:338). The images were exported from Figma.
 *
 * TODO(content): the third shot's caption is the same on Tallah, Special,
 * Tawaf and Amr Ali in Figma, and reads like template text.
 */
export const tallah: CaseStudy = {
  ...fittedShowcases({
    hero: banner,
    challenge: services,
    approach: pages,
    gallery: [home, hotels, packages],
  }),
  copy: {
    en: {
      facts: {
        industry: "Travel & Tourism Booking Platform",
        services: "Web Application + Web Admin Dashboard",
        year: "2026",
        platform: "Responsive Website, Arabic & English",
      },
      hero: {
        alt: "Tallah's home page in stacked browser windows, with a seaside photo and a hotel search bar, beside the line “Your whole trip, in one place.”",
        caption:
          "Home screen: A clean entry point with hotel search, travel packages, and quick access to every service.",
      },
      overview: {
        title: "One platform for every part of the trip.",
        lead: "A travel and tourism platform for booking hotels, tourism packages, visas, and travel services, all in one bilingual experience.",
        columns: [
          "Tallah brings the whole trip together. Travelers can search and compare hotels, explore ready-made packages, and request services like flight booking, visas, and car and train rentals without leaving the site.",
          "The platform covers hotel search with filters, curated packages for domestic and international trips, a services hub, a travel blog, and full Arabic and English support for travelers across the region.",
        ],
      },
      challenge: {
        title: ["Simplifying travel. Everything in reach."],
        body: [
          "Planning a trip usually means juggling separate sites for hotels, flights, visas, and activities. The challenge was to bring these services into one platform that feels simple and trustworthy, while keeping a fresh, distinctive look for travelers in Saudi Arabia and the Arab world.",
          "We needed clear paths for each type of traveler, whether they come for a hotel, a honeymoon package, a summer getaway, or a visa, with a search experience that gets to results fast and pages that stay readable in both Arabic and English.",
        ],
        principle:
          "Design principle: Calm first. Every section helps the traveler decide faster.",
        alt: "Tallah's services page in stacked browser windows, with a card for each service",
        caption:
          "Services screen: Each service has its own clear card, so travelers find what they need at a glance.",
      },
      approach: {
        title: ["Less searching.", "More travelling."],
        body: "We started by mapping how travelers plan a trip, from inspiration to booking, then built a consistent set of reusable components in a calm teal palette, with right-to-left layouts designed properly rather than mirrored afterwards.",
        steps: [
          {
            title: "Organize the services",
            body: "Group hotels, packages, visas, and travel services into clear sections with simple navigation.",
          },
          {
            title: "Build a fast search experience",
            body: "Hotel search with dates, guests, price range, and filters for free cancellation and meal plans.",
          },
          {
            title: "Inspire the journey",
            body: "Showcase popular destinations and ready-made packages so travelers can start from an idea, not only from a search box.",
          },
        ],
        alt: "Tallah's packages, destinations, home and hotels pages side by side",
      },
      gallery: [
        {
          title: "Home Screen",
          caption: "Hero, search, and quick access",
          alt: "Tallah's home page with its hotel search bar",
        },
        {
          title: "Hotels Search",
          caption: "Filters, sorting, and hotel cards",
          alt: "Tallah's hotel search results with filters and a hotel card",
        },
        {
          title: "Travel Packages",
          caption: "A clear hierarchy on smaller screens",
          alt: "Tallah's travel packages page with destination photo cards",
        },
      ],
    },
    ar: {
      facts: {
        industry: "منصة حجز للسفر والسياحة",
        services: "تطبيق ويب + لوحة تحكم إدارية على الويب",
        year: "2026",
        platform: "موقع متجاوب باللغتين العربية والإنجليزية",
      },
      hero: {
        alt: "الصفحة الرئيسية لموقع طلّة في نوافذ متصفح متتالية، بصورة ساحلية وشريط البحث عن الفنادق، بجانب عبارة «Your whole trip, in one place.»",
        caption:
          "الشاشة الرئيسية: مدخل واضح يضم البحث عن الفنادق والباقات السياحية، مع وصول سريع إلى كل الخدمات.",
      },
      overview: {
        title: "منصة واحدة لكل مراحل الرحلة.",
        lead: "منصة للسفر والسياحة لحجز الفنادق والباقات السياحية والتأشيرات وخدمات السفر، في تجربة واحدة باللغتين العربية والإنجليزية.",
        columns: [
          "تجمع طلّة الرحلة كلها في مكان واحد: يستطيع المسافرون البحث عن الفنادق والمقارنة بينها، واستكشاف الباقات الجاهزة، وطلب خدمات مثل حجز الطيران والتأشيرات والسيارات والقطارات دون مغادرة الموقع.",
          "تشمل المنصة البحث عن الفنادق مع عوامل التصفية، وباقات مختارة للرحلات الداخلية والدولية، ومركزًا للخدمات، ومدونة للسفر، ودعمًا كاملًا للغتين العربية والإنجليزية للمسافرين في أنحاء المنطقة.",
        ],
      },
      challenge: {
        title: ["تبسيط السفر. وكل شيء في متناولك."],
        body: [
          "يعني التخطيط لرحلة عادةً التنقّل بين مواقع منفصلة للفنادق والطيران والتأشيرات والأنشطة. وكان التحدي جمع هذه الخدمات في منصة واحدة بسيطة وجديرة بالثقة، مع الحفاظ على مظهر عصري ومميز للمسافرين في السعودية والعالم العربي.",
          "احتجنا إلى مسارات واضحة لكل نوع من المسافرين، سواء جاؤوا بحثًا عن فندق أو باقة شهر عسل أو عطلة صيفية أو تأشيرة، مع تجربة بحث تصل إلى النتائج بسرعة، وصفحات تبقى سهلة القراءة بالعربية والإنجليزية.",
        ],
        principle:
          "مبدأ التصميم: الهدوء أولًا. كل قسم يساعد المسافر على اتخاذ قراره أسرع.",
        alt: "صفحة الخدمات في موقع طلّة في نوافذ متصفح متتالية، ببطاقة لكل خدمة",
        caption:
          "شاشة الخدمات: لكل خدمة بطاقتها الواضحة، ليجد المسافرون ما يحتاجون إليه في لمحة.",
      },
      approach: {
        title: ["بحث أقل.", "سفر أكثر."],
        body: "بدأنا برسم الطريقة التي يخطط بها المسافرون لرحلاتهم، من الفكرة الأولى حتى الحجز، ثم بنينا مجموعة متناسقة من المكوّنات القابلة لإعادة الاستخدام بلوحة ألوان هادئة من الأزرق المخضر، مع تخطيطات من اليمين إلى اليسار صُمّمت كما ينبغي بدلًا من عكسها لاحقًا.",
        steps: [
          {
            title: "تنظيم الخدمات",
            body: "تجميع الفنادق والباقات والتأشيرات وخدمات السفر في أقسام واضحة مع تنقّل بسيط.",
          },
          {
            title: "بناء تجربة بحث سريعة",
            body: "بحث عن الفنادق بالتواريخ وعدد الضيوف ونطاق السعر، مع عوامل تصفية للإلغاء المجاني وخطط الوجبات.",
          },
          {
            title: "إلهام الرحلة",
            body: "عرض الوجهات الرائجة والباقات الجاهزة، ليبدأ المسافرون من فكرة لا من خانة بحث فقط.",
          },
        ],
        alt: "صفحات الباقات والوجهات والرئيسية والفنادق في موقع طلّة جنبًا إلى جنب",
      },
      gallery: [
        {
          title: "الشاشة الرئيسية",
          caption: "الواجهة والبحث والوصول السريع",
          alt: "الصفحة الرئيسية لموقع طلّة وشريط البحث عن الفنادق",
        },
        {
          title: "البحث عن الفنادق",
          caption: "عوامل التصفية والترتيب وبطاقات الفنادق",
          alt: "نتائج البحث عن الفنادق في موقع طلّة مع عوامل التصفية وبطاقة فندق",
        },
        {
          title: "الباقات السياحية",
          caption: "تسلسل واضح على الشاشات الأصغر",
          alt: "صفحة الباقات السياحية في موقع طلّة وبطاقات الوجهات المصوّرة",
        },
      ],
    },
  },
}
