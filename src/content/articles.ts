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
 * Figma. Titles, excerpts and text are from Qimam's articles content (Nov
 * 2026), written in English; the Arabic is translated from it.
 *
 * TODO(content): the dates and stock photos are still Figma's samples; the
 * last article is dated 28 Nov 2026, in the future.
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
    body: {
      en: [
        {
          type: "p",
          text: "AI is changing how modern software gets built. Teams now use intelligent tools to write, review, and test code faster, freeing developers to focus on architecture and creative problem-solving.",
        },
        { type: "h2", id: "ai-assisted-coding", text: "AI-Assisted Coding" },
        {
          type: "ul",
          items: [
            "Code Completion: Smart assistants suggest functions, fix syntax, and reduce repetitive typing.",
            "Code Review: Automated reviews catch bugs and security issues before they reach production.",
            "Documentation: AI generates clear documentation directly from the codebase.",
          ],
        },
        { type: "h2", id: "automated-testing", text: "Automated Testing" },
        {
          type: "p",
          text: "AI can generate test cases, detect edge cases humans often miss, and run regression tests continuously. This shortens release cycles and raises overall product quality.",
        },
        { type: "h2", id: "smarter-devops", text: "Smarter DevOps" },
        {
          type: "p",
          text: "Predictive monitoring spots performance problems before users notice them. Automated pipelines deploy updates safely and roll back instantly when something goes wrong.",
        },
        { type: "h2", id: "human-role", text: "The Human Role" },
        {
          type: "p",
          text: "AI is a powerful assistant, not a replacement. Developers still guide decisions, validate output, and make sure the final product meets real business needs.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "يغيّر الذكاء الاصطناعي طريقة بناء البرمجيات الحديثة؛ فالفرق تستخدم اليوم أدوات ذكية لكتابة الشيفرة البرمجية ومراجعتها واختبارها بسرعة أكبر، مما يتيح للمطورين التفرّغ للتصميم المعماري وحلّ المشكلات بإبداع.",
        },
        {
          type: "h2",
          id: "ai-assisted-coding",
          text: "البرمجة بمساعدة الذكاء الاصطناعي",
        },
        {
          type: "ul",
          items: [
            "إكمال الشيفرة: يقترح المساعدون الأذكياء الدوال، ويصحّحون أخطاء الصياغة، ويقلّلون الكتابة المتكررة.",
            "مراجعة الشيفرة: تكتشف المراجعات المؤتمتة الأخطاء والثغرات الأمنية قبل وصولها إلى بيئة الإنتاج.",
            "التوثيق: يولّد الذكاء الاصطناعي توثيقًا واضحًا مباشرةً من الشيفرة المصدرية.",
          ],
        },
        { type: "h2", id: "automated-testing", text: "الاختبار المؤتمت" },
        {
          type: "p",
          text: "يستطيع الذكاء الاصطناعي توليد حالات الاختبار، واكتشاف الحالات الحدّية التي كثيرًا ما يغفل عنها البشر، وتشغيل اختبارات الانحدار باستمرار؛ مما يختصر دورات الإصدار ويرفع جودة المنتج عمومًا.",
        },
        {
          type: "h2",
          id: "smarter-devops",
          text: "عمليات تطوير وتشغيل أذكى",
        },
        {
          type: "p",
          text: "ترصد المراقبة التنبؤية مشكلات الأداء قبل أن يلاحظها المستخدمون، فيما تطرح خطوط النشر المؤتمتة التحديثات بأمان، وتتراجع عنها فورًا عند حدوث أي خلل.",
        },
        { type: "h2", id: "human-role", text: "دور الإنسان" },
        {
          type: "p",
          text: "الذكاء الاصطناعي مساعد قوي، لا بديل عن الإنسان؛ فالمطورون لا يزالون يوجّهون القرارات، ويتحقّقون من المخرجات، ويتأكّدون من أن المنتج النهائي يلبّي احتياجات العمل الفعلية.",
        },
      ],
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
    body: {
      en: [
        {
          type: "p",
          text: "Mobile apps are now the main way people shop, learn, and connect. The next wave will be faster, more personal, and far more intelligent than anything we use today.",
        },
        {
          type: "h2",
          id: "on-device-intelligence",
          text: "On-Device Intelligence",
        },
        {
          type: "ul",
          items: [
            "Privacy First: Data is processed on the phone instead of the cloud.",
            "Instant Response: Features work without waiting for a network connection.",
            "Personalization: Apps adapt to each user’s habits in real time.",
          ],
        },
        {
          type: "h2",
          id: "cross-platform-development",
          text: "Cross-Platform Development",
        },
        {
          type: "p",
          text: "Frameworks like Flutter and React Native let teams build for iOS and Android from a single codebase, cutting cost and time to market without sacrificing quality.",
        },
        {
          type: "h2",
          id: "super-apps-and-ecosystems",
          text: "Super Apps and Ecosystems",
        },
        {
          type: "p",
          text: "Users prefer one app that does many things. Businesses are bundling payments, messaging, and services into a single connected experience.",
        },
        {
          type: "h2",
          id: "performance-and-security",
          text: "Performance and Security",
        },
        {
          type: "p",
          text: "Fast load times and strong data protection are no longer optional. Users abandon slow or insecure apps within seconds.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "أصبحت تطبيقات الجوال الوسيلة الأولى للتسوّق والتعلّم والتواصل، وستكون موجتها القادمة أسرع وأكثر تخصيصًا وأذكى بكثير من أي شيء نستخدمه اليوم.",
        },
        {
          type: "h2",
          id: "on-device-intelligence",
          text: "الذكاء على الجهاز نفسه",
        },
        {
          type: "ul",
          items: [
            "الخصوصية أولًا: تُعالَج البيانات على الهاتف بدلًا من السحابة.",
            "الاستجابة الفورية: تعمل الميزات دون انتظار الاتصال بالشبكة.",
            "التخصيص: تتكيّف التطبيقات مع عادات كل مستخدم لحظةً بلحظة.",
          ],
        },
        {
          type: "h2",
          id: "cross-platform-development",
          text: "التطوير متعدد المنصات",
        },
        {
          type: "p",
          text: "تتيح أطر عمل مثل Flutter وReact Native للفرق بناء تطبيقات iOS وAndroid من شيفرة واحدة، مما يخفّض التكلفة ويختصر الوقت اللازم للوصول إلى السوق دون المساس بالجودة.",
        },
        {
          type: "h2",
          id: "super-apps-and-ecosystems",
          text: "التطبيقات الفائقة والمنظومات المتكاملة",
        },
        {
          type: "p",
          text: "يفضّل المستخدمون تطبيقًا واحدًا يؤدي مهام كثيرة، لذا تجمع الشركات المدفوعات والمراسلة والخدمات في تجربة واحدة مترابطة.",
        },
        {
          type: "h2",
          id: "performance-and-security",
          text: "الأداء والأمان",
        },
        {
          type: "p",
          text: "لم يعد التحميل السريع وحماية البيانات القوية أمرًا اختياريًا؛ فالمستخدمون يتخلّون عن التطبيقات البطيئة أو غير الآمنة في غضون ثوانٍ.",
        },
      ],
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
          text: "AI can be classified into several categories based on user needs, budget constraints, and task complexity. The most effective types of AI should:",
        },
        {
          type: "ul",
          items: [
            "Deliver outstanding performance",
            "Be cost-effective",
            "Have a long operational lifespan",
            "Adapt to evolving data",
            "Require minimal human intervention",
            "Have little to no negative impact on users",
          ],
        },
        { type: "h2", id: "machine-learning", text: "Machine Learning AI" },
        {
          type: "p",
          text: "This type of AI uses algorithms that learn from data, similar to predictive analytics. It identifies patterns and makes predictions, improving accuracy over time. While cost-effective, it often requires ongoing updates and can be prone to bias if not managed properly.",
        },
        {
          type: "h2",
          id: "nlp-and-computer-vision",
          text: "Natural Language Processing and Computer Vision",
        },
        {
          type: "p",
          text: "NLP understands and generates human language, excelling in conversation and text analysis. Computer Vision interprets images and videos, making it ideal for facial recognition and object detection.",
        },
        {
          type: "h2",
          id: "robotic-process-automation",
          text: "Robotic Process Automation",
        },
        {
          type: "p",
          text: "RPA automates repetitive tasks and streamlines workflows across industries. However, it can become outdated over time and should not be relied upon for complex decision-making.",
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
            "أثر سلبي ضئيل أو معدوم على المستخدمين",
          ],
        },
        { type: "h2", id: "machine-learning", text: "التعلّم الآلي" },
        {
          type: "p",
          text: "يعتمد هذا النوع على خوارزميات تتعلّم من البيانات، على نحو يشبه التحليلات التنبؤية؛ فيكتشف الأنماط ويضع التوقعات، وتتحسّن دقته بمرور الوقت. ورغم انخفاض تكلفته، فإنه يحتاج غالبًا إلى تحديثات مستمرة، وقد يقع في التحيّز إن لم يُدَر جيدًا.",
        },
        {
          type: "h2",
          id: "nlp-and-computer-vision",
          text: "معالجة اللغة الطبيعية والرؤية الحاسوبية",
        },
        {
          type: "p",
          text: "تفهم معالجة اللغة الطبيعية اللغةَ البشرية وتولّدها، وتتفوّق في المحادثة وتحليل النصوص. أما الرؤية الحاسوبية فتفسّر الصور ومقاطع الفيديو، مما يجعلها مثالية للتعرّف على الوجوه واكتشاف الأجسام.",
        },
        {
          type: "h2",
          id: "robotic-process-automation",
          text: "أتمتة العمليات الروبوتية",
        },
        {
          type: "p",
          text: "تنفّذ أتمتة العمليات الروبوتية (RPA) المهام المتكررة آليًا وتبسّط سير العمل في مختلف القطاعات، لكنها قد تتقادم بمرور الوقت، ولا ينبغي الاعتماد عليها في اتخاذ القرارات المعقدة.",
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
    body: {
      en: [
        {
          type: "p",
          text: "A user flow maps the path a person takes to complete a goal inside a product. Well-designed flows remove confusion, reduce friction, and turn visitors into loyal customers.",
        },
        {
          type: "h2",
          id: "why-user-flows-matter",
          text: "Why User Flows Matter",
        },
        {
          type: "ul",
          items: [
            "Clarity: Everyone on the team sees the full journey.",
            "Efficiency: Unnecessary steps are removed early.",
            "Conversion: Smooth paths lead to more sign-ups and purchases.",
          ],
        },
        { type: "h2", id: "building-a-flow", text: "Building a Flow" },
        {
          type: "p",
          text: "Start with the user’s goal, list every step needed to reach it, and mark decision points. Keep each screen focused on a single action.",
        },
        {
          type: "h2",
          id: "testing-and-validation",
          text: "Testing and Validation",
        },
        {
          type: "p",
          text: "Test flows with real users before development begins. Watching where people hesitate reveals problems that no internal review will catch.",
        },
        { type: "h2", id: "common-mistakes", text: "Common Mistakes" },
        {
          type: "p",
          text: "Too many steps, unclear buttons, and missing error states are the most frequent issues. Simplicity should always guide every decision.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "رحلة المستخدم خريطة للمسار الذي يسلكه الشخص لبلوغ هدف ما داخل المنتج. والرحلات المصمّمة بعناية تزيل الالتباس، وتقلّل العوائق، وتحوّل الزوار إلى عملاء أوفياء.",
        },
        {
          type: "h2",
          id: "why-user-flows-matter",
          text: "أهمية رحلات المستخدم",
        },
        {
          type: "ul",
          items: [
            "الوضوح: يرى الفريق كله الرحلة كاملة.",
            "الكفاءة: تُحذف الخطوات غير الضرورية مبكرًا.",
            "التحويل: تؤدي المسارات السلسة إلى مزيد من التسجيلات والمشتريات.",
          ],
        },
        { type: "h2", id: "building-a-flow", text: "بناء الرحلة" },
        {
          type: "p",
          text: "ابدأ بهدف المستخدم، واسرد كل خطوة يحتاجها لبلوغه، وحدّد نقاط اتخاذ القرار. واجعل كل شاشة تركّز على إجراء واحد.",
        },
        {
          type: "h2",
          id: "testing-and-validation",
          text: "الاختبار والتحقّق",
        },
        {
          type: "p",
          text: "اختبر الرحلات مع مستخدمين حقيقيين قبل بدء التطوير؛ فمراقبة المواضع التي يتردّد فيها الناس تكشف مشكلات لن تلتقطها أي مراجعة داخلية.",
        },
        { type: "h2", id: "common-mistakes", text: "أخطاء شائعة" },
        {
          type: "p",
          text: "كثرة الخطوات، والأزرار غير الواضحة، وإغفال حالات الخطأ هي أكثر المشكلات شيوعًا. ولتكن البساطة دائمًا دليلك في كل قرار.",
        },
      ],
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
    body: {
      en: [
        {
          type: "p",
          text: "Great design is never random. A solid strategy aligns visuals, content, and experience with business goals so every decision has a clear purpose.",
        },
        {
          type: "h2",
          id: "understanding-the-audience",
          text: "Understanding the Audience",
        },
        {
          type: "ul",
          items: [
            "Research: Interviews and surveys reveal real needs.",
            "Personas: Clear profiles keep the team focused on actual users.",
            "Insights: Data guides decisions instead of assumptions.",
          ],
        },
        { type: "h2", id: "visual-consistency", text: "Visual Consistency" },
        {
          type: "p",
          text: "A shared design system of colors, typography, and components keeps every page and product feeling unified and professional.",
        },
        {
          type: "h2",
          id: "experience-over-decoration",
          text: "Experience Over Decoration",
        },
        {
          type: "p",
          text: "Beautiful interfaces must also be usable. Layout, spacing, and hierarchy guide users naturally toward what matters most.",
        },
        { type: "h2", id: "measuring-impact", text: "Measuring Impact" },
        {
          type: "p",
          text: "Track engagement, conversion, and user feedback. Then refine the design continuously based on what the numbers show.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "التصميم الرائع لا يكون عشوائيًا أبدًا؛ فالاستراتيجية المتينة تجعل العناصر المرئية والمحتوى والتجربة منسجمة مع أهداف العمل، ليكون لكل قرار غاية واضحة.",
        },
        {
          type: "h2",
          id: "understanding-the-audience",
          text: "فهم الجمهور",
        },
        {
          type: "ul",
          items: [
            "البحث: تكشف المقابلات والاستبيانات الاحتياجات الحقيقية.",
            "الشخصيات الافتراضية: تُبقي الملفات الواضحة الفريقَ مركّزًا على المستخدمين الفعليين.",
            "الرؤى: تقود البيانات القرارات بدلًا من الافتراضات.",
          ],
        },
        { type: "h2", id: "visual-consistency", text: "الاتساق البصري" },
        {
          type: "p",
          text: "يمنح نظام التصميم المشترك من ألوان وخطوط ومكوّنات كل صفحة وكل منتج طابعًا موحّدًا واحترافيًا.",
        },
        {
          type: "h2",
          id: "experience-over-decoration",
          text: "التجربة قبل الزخرفة",
        },
        {
          type: "p",
          text: "يجب أن تكون الواجهات الجميلة سهلة الاستخدام أيضًا؛ فالتخطيط والمسافات والتسلسل البصري توجّه المستخدمين بسلاسة نحو الأهم.",
        },
        { type: "h2", id: "measuring-impact", text: "قياس الأثر" },
        {
          type: "p",
          text: "تابع التفاعل ومعدلات التحويل وآراء المستخدمين، ثم طوّر التصميم باستمرار وفق ما تكشفه الأرقام.",
        },
      ],
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
    body: {
      en: [
        {
          type: "p",
          text: "A brand is more than a logo. It is the feeling people get every time they interact with your business, from the first ad they see to the support they receive.",
        },
        { type: "h2", id: "brand-foundations", text: "Brand Foundations" },
        {
          type: "ul",
          items: [
            "Purpose: Why your business exists.",
            "Values: The principles behind every decision.",
            "Voice: How your brand speaks to its audience.",
          ],
        },
        { type: "h2", id: "visual-identity", text: "Visual Identity" },
        {
          type: "p",
          text: "Logo, color palette, typography, and imagery work together to create instant recognition across every channel.",
        },
        {
          type: "h2",
          id: "consistency-across-channels",
          text: "Consistency Across Channels",
        },
        {
          type: "p",
          text: "Website, social media, and marketing campaigns should all feel like they come from the same company. Consistency builds trust and memorability.",
        },
        { type: "h2", id: "growing-the-brand", text: "Growing the Brand" },
        {
          type: "p",
          text: "Strategic marketing, quality content, and great customer experience turn a good identity into a lasting reputation.",
        },
      ],
      ar: [
        {
          type: "p",
          text: "العلامة التجارية أكثر من مجرد شعار؛ إنها الانطباع الذي يتكوّن لدى الناس في كل مرة يتعاملون فيها مع عملك، من أول إعلان يرونه إلى الدعم الذي يتلقّونه.",
        },
        {
          type: "h2",
          id: "brand-foundations",
          text: "أسس العلامة التجارية",
        },
        {
          type: "ul",
          items: [
            "الغاية: سبب وجود عملك.",
            "القيم: المبادئ التي يقوم عليها كل قرار.",
            "النبرة: الطريقة التي تخاطب بها علامتك جمهورها.",
          ],
        },
        { type: "h2", id: "visual-identity", text: "الهوية البصرية" },
        {
          type: "p",
          text: "يتكامل الشعار ولوحة الألوان والخطوط والصور لتُعرف علامتك من النظرة الأولى في كل قناة.",
        },
        {
          type: "h2",
          id: "consistency-across-channels",
          text: "الاتساق عبر القنوات",
        },
        {
          type: "p",
          text: "ينبغي أن يبدو موقعك الإلكتروني وحساباتك على وسائل التواصل الاجتماعي وحملاتك التسويقية كأنها صادرة عن الشركة نفسها؛ فالاتساق يبني الثقة ويرسّخ العلامة في الذاكرة.",
        },
        {
          type: "h2",
          id: "growing-the-brand",
          text: "تنمية العلامة التجارية",
        },
        {
          type: "p",
          text: "التسويق الاستراتيجي والمحتوى عالي الجودة وتجربة العملاء المميزة تحوّل الهوية الجيدة إلى سمعة راسخة.",
        },
      ],
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
