import accountSettings from "@/assets/projects/arabfly/account-settings.png"
import bannerV2 from "@/assets/projects/arabfly/banner-v2.png"
import banner from "@/assets/projects/arabfly/banner.png"
import login from "@/assets/projects/arabfly/login.png"
import membership from "@/assets/projects/arabfly/membership.png"
import pointsHistory from "@/assets/projects/arabfly/points-history.png"
import type { CaseStudy } from "./index"

/**
 * ArabFly case study (Figma node 322:343). Geometry is Figma's; images were
 * exported from Figma. The third gallery shot reuses the second one's frame:
 * in Figma it still sat on the template's "casa oliva" mock-up, which isn't
 * part of the project.
 */
export const arabfly: CaseStudy = {
  hero: {
    image: bannerV2,
    frame: [1264, 648],
    box: [92, 75, 1403, 496],
    crop: [-60, 0, 159.93, 99.79],
  },
  challenge: {
    image: membership,
    frame: [620, 540],
    box: [-102, 73, 663, 474],
    crop: [-18.77, 0, 124.88, 110.97],
  },
  approach: {
    image: banner,
    frame: [1264, 549],
    box: [141, 82, 1739, 384],
  },
  gallery: [
    {
      image: login,
      frame: [590, 410],
      box: [54, 50, 480, 402],
      crop: [-84.53, -0.06, 184.53, 100.12],
    },
    { image: pointsHistory, frame: [590, 410], box: [20, 79, 548, 250] },
    { image: accountSettings, frame: [590, 410], box: [20, 79, 548, 250] },
  ],
  copy: {
    en: {
      facts: {
        industry: "Loyalty Points & Reward Miles",
        services: "Mobile App + Web Admin Dashboard",
        year: "2026",
        platform: "Cross-platform Android & iOS App + Web Admin Panel",
      },
      hero: {
        alt: "ArabFly app screens: membership tiers, points history, the home screen wallet, trip booking and account settings",
        caption:
          "Home screen: An intuitive interface for user loyalty info, wallet, and latest transactions and quick access to all app features.",
      },
      overview: {
        title: "An all-in-one travel app. A seamless loyalty experience.",
        lead: "A travel and loyalty app for tracking loyalty points and reward miles, booking flights and hotels, with a web-based admin dashboard for operational management.",
        columns: [
          "The app lets users book travel services, track reward points, manage their membership tier, and access dedicated support all in one place, with full bilingual support for Arabic and English.",
          "The project scope included UX/UI design for Android and iOS, a multi-tier loyalty point system, account management, and a custom web dashboard to monitor customers, point balances, transactions, and membership tiers.",
        ],
      },
      challenge: {
        title: "Simplifying travel. Honoring Arab identity.",
        body: [
          "The challenge was to build a unified platform that combines travel booking services, a robust multi-tier loyalty system, and an intuitive user experience tailored for Arab travelers, while maintaining a premium, distinctive brand identity.",
          "We needed to design a clear 3-tier membership system (Classic / Silver / Gold) with visible rewards for each tier, a complete transaction history for points, and an admin dashboard that gives the operations team full visibility and control without unnecessary complexity.",
        ],
        principle:
          "Design principle: Clarity first. Every interface element serves the user experience directly.",
        alt: "ArabFly home screen, membership tier cards and points history",
        caption:
          "Membership tiers screen: Clear interface showing rewards and benefits for each membership level.",
      },
      approach: {
        title: ["Less clutter.", "More flow."],
        body: "Our workflow started with user research and journey mapping, followed by reusable responsive UI components, integration with the loyalty points engine, and comprehensive testing across both Android and iOS devices before launch, including accessibility and performance checks.",
        steps: [
          {
            title: "Clarify the app experience",
            body: "Organize app sections around booking, points wallet, transaction history and account management for easy navigation.",
          },
          {
            title: "Build the multi-tier membership system",
            body: "Define clear benefits for each tier (Classic, Silver, Gold) with distinct visual branding for each level.",
          },
          {
            title: "Develop the admin dashboard",
            body: "Build a web-based control panel for the team to monitor customers, point balances, claims, and manage memberships easily.",
          },
        ],
        alt: "The ArabFly logo and its tagline, Fly the Arab Way, beside the app's screens",
      },
      // TODO(content): Figma's shot captions were template text ("Introduction
      // and featured work"…); these describe the ArabFly screens instead.
      gallery: [
        {
          title: "Login Screen",
          caption: "Bilingual sign-in",
          alt: "ArabFly sign-in screens in Arabic",
        },
        {
          title: "Points History",
          caption: "Points added and deducted, at a glance",
          alt: "ArabFly points history screens",
        },
        {
          title: "Account Settings",
          caption: "Profile, language and support in one place",
          alt: "ArabFly account settings screens",
        },
      ],
    },
    ar: {
      facts: {
        industry: "نقاط الولاء وأميال المكافآت",
        services: "تطبيق جوال + لوحة تحكم إدارية على الويب",
        year: "2026",
        platform: "تطبيق متعدد المنصات لأندرويد وiOS + لوحة إدارة على الويب",
      },
      hero: {
        alt: "شاشات تطبيق ArabFly: مستويات العضوية وسجل النقاط ومحفظة الشاشة الرئيسية وحجز الرحلات وإعدادات الحساب",
        caption:
          "الشاشة الرئيسية: واجهة سهلة تعرض بيانات الولاء والمحفظة وأحدث المعاملات، مع وصول سريع إلى جميع ميزات التطبيق.",
      },
      overview: {
        title: "تطبيق سفر متكامل. وتجربة ولاء سلسة.",
        lead: "تطبيق للسفر والولاء لتتبّع نقاط الولاء وأميال المكافآت وحجز رحلات الطيران والفنادق، مع لوحة تحكم إدارية على الويب لإدارة العمليات.",
        columns: [
          "يتيح التطبيق للمستخدمين حجز خدمات السفر، وتتبّع نقاط المكافآت، وإدارة مستوى عضويتهم، والوصول إلى دعم مخصّص، وكل ذلك في مكان واحد، مع دعم كامل للغتين العربية والإنجليزية.",
          "شمل نطاق المشروع تصميم تجربة المستخدم وواجهاته لأندرويد وiOS، ونظام نقاط ولاء متعدد المستويات، وإدارة الحسابات، ولوحة تحكم مخصّصة على الويب لمتابعة العملاء وأرصدة النقاط والمعاملات ومستويات العضوية.",
        ],
      },
      challenge: {
        title: "تبسيط السفر. واعتزاز بالهوية العربية.",
        body: [
          "كان التحدي بناء منصة موحّدة تجمع خدمات حجز السفر، ونظام ولاء متينًا متعدد المستويات، وتجربة استخدام سهلة مصمّمة للمسافرين العرب، مع الحفاظ على هوية علامة فاخرة ومميزة.",
          "احتجنا إلى تصميم نظام عضوية واضح من ثلاثة مستويات (كلاسيك / فضي / ذهبي) بمكافآت ظاهرة لكل مستوى، وسجل كامل لمعاملات النقاط، ولوحة تحكم إدارية تمنح فريق العمليات رؤية وتحكمًا كاملين دون تعقيد غير ضروري.",
        ],
        principle:
          "مبدأ التصميم: الوضوح أولًا. كل عنصر في الواجهة يخدم تجربة المستخدم مباشرة.",
        alt: "الشاشة الرئيسية لتطبيق ArabFly وبطاقات مستويات العضوية وسجل النقاط",
        caption:
          "شاشة مستويات العضوية: واجهة واضحة تعرض المكافآت والمزايا لكل مستوى عضوية.",
      },
      approach: {
        title: ["فوضى أقل.", "انسيابية أكثر."],
        body: "بدأ عملنا بأبحاث المستخدمين ورسم رحلاتهم، تلاه بناء مكوّنات واجهة متجاوبة قابلة لإعادة الاستخدام، ثم الربط مع محرّك نقاط الولاء، واختبار شامل على أجهزة أندرويد وiOS قبل الإطلاق، بما في ذلك فحوص سهولة الوصول والأداء.",
        steps: [
          {
            title: "توضيح تجربة التطبيق",
            body: "تنظيم أقسام التطبيق حول الحجز ومحفظة النقاط وسجل المعاملات وإدارة الحساب لتسهيل التنقّل.",
          },
          {
            title: "بناء نظام العضوية متعدد المستويات",
            body: "تحديد مزايا واضحة لكل مستوى (كلاسيك، فضي، ذهبي) بهوية بصرية مميزة لكل مستوى.",
          },
          {
            title: "تطوير لوحة التحكم الإدارية",
            body: "بناء لوحة تحكم على الويب تتيح للفريق متابعة العملاء وأرصدة النقاط والمطالبات وإدارة العضويات بسهولة.",
          },
        ],
        alt: "شعار ArabFly وعبارته «Fly the Arab Way» بجانب شاشات التطبيق",
      },
      gallery: [
        {
          title: "شاشة تسجيل الدخول",
          caption: "تسجيل دخول باللغتين",
          alt: "شاشات تسجيل الدخول في ArabFly باللغة العربية",
        },
        {
          title: "سجل النقاط",
          caption: "النقاط المضافة والمخصومة في لمحة",
          alt: "شاشات سجل النقاط في ArabFly",
        },
        {
          title: "إعدادات الحساب",
          caption: "الملف الشخصي واللغة والدعم في مكان واحد",
          alt: "شاشات إعدادات الحساب في ArabFly",
        },
      ],
    },
  },
}
