import banner from "@/assets/projects/special/banner.jpg"
import bundles from "@/assets/projects/special/bundles.jpg"
import campaigns from "@/assets/projects/special/campaigns.jpg"
import storeAndCampaigns from "@/assets/projects/special/store-and-campaigns.jpg"
import store from "@/assets/projects/special/store.jpg"
import storefront from "@/assets/projects/special/storefront.jpg"
import { fittedShowcases } from "./fitted"
import type { CaseStudy } from "./index"

/**
 * Special case study (Figma node 345:132). The images were exported from
 * Figma. Its first fact is labelled "Project" there, not "Industry".
 *
 * TODO(content): the third shot's caption is the same on Tallah, Special,
 * Tawaf and Amr Ali in Figma, and reads like template text.
 */
export const special: CaseStudy = {
  ...fittedShowcases({
    hero: banner,
    challenge: store,
    approach: storeAndCampaigns,
    gallery: [storefront, bundles, campaigns],
  }),
  copy: {
    en: {
      facts: {
        industryLabel: "Project",
        industry: "Perfume E-commerce & Digital Marketing",
        services: "Online Store, Paid Campaigns, Content & Creatives",
        year: "2026",
        platform: "Responsive Website + Multi-platform Campaigns",
      },
      hero: {
        alt: "Special's online store in a browser window, a phone showing a social media post and a bundle offer card, beside the line “Every scent. Every platform.”",
        caption:
          "Storefront and campaigns: A premium perfume store, backed by creatives built for every platform.",
      },
      overview: {
        title: "A store built to sell. Campaigns built to convert.",
        lead: "A perfume e-commerce store and the digital marketing behind it: from the storefront and bundle offers to the campaigns that brought customers in and turned them into sales.",
        columns: [
          "Special is a perfume brand selling a wide range of fragrances online. We built the store around clear bundle offers (4, 5, 8, and 10 perfumes), a smooth cart and checkout, and flexible payment options including Tabby and Tamara.",
          "Alongside the store, we planned and ran campaigns across social and ad platforms, with creatives designed to make each offer clear at a glance. The result: a store and a marketing engine working together to drive sales.",
        ],
      },
      challenge: {
        title: ["Premium feel.", "Clear offers."],
        body: [
          "The perfume market is crowded, and customers decide fast. The challenge was to give Special a store that feels premium and trustworthy, while making its bundle offers instantly understandable, so a visitor can go from first look to checkout without friction.",
          "We also needed marketing creatives that work as ads and as products: every campaign post had to show the offer, the price, and the call to action clearly, and stay consistent with the store experience people land on after clicking.",
        ],
        principle:
          "Design principle: Warm, clear, and consistent. From the ad to the checkout.",
        alt: "Special's bundle offers page, an order summary, a cart item and the Tabby and Tamara logos",
        caption:
          "Store screens: Bundles, cart, and flexible payments built for fast, confident buying.",
      },
      approach: {
        title: ["Less browsing.", "More buying."],
        body: "We started with the offer: which bundles to sell, at what price, and how to present them. Then we built the store and the campaign creatives together, so the message in the ad and the experience on the site tell the same story.",
        steps: [
          {
            title: "Build the store",
            body: "Product pages, bundle offers, cart with coupons and gift ordering, and Arabic/English support.",
          },
          {
            title: "Create the campaigns",
            body: "Offer-led creatives and content for social and ad platforms, designed to stop the scroll and drive clicks.",
          },
          {
            title: "Optimize for sales",
            body: "Test creatives and offers, learn what converts, and scale what works across platforms.",
          },
        ],
        alt: "Special's store in a browser window, its social media profile on two phones and four bundle offer posts",
      },
      gallery: [
        {
          title: "Scent first. / Then the sale.",
          caption: "Hero, collection, and brand story",
          alt: "Special's storefront with three perfume bottles",
        },
        {
          title: "Pick a bundle. / Save on every scent.",
          caption: "Offers, cart, and checkout",
          alt: "Special's bundle offers page and a post for its 10-perfume offer",
        },
        {
          title: "One offer. / Every platform.",
          caption: "A clear hierarchy on smaller screens",
          alt: "Two phones showing Special's social media profile and a post for its 8-perfume offer",
        },
      ],
    },
    ar: {
      facts: {
        industryLabel: "المشروع",
        industry: "متجر عطور إلكتروني وتسويق رقمي",
        services: "متجر إلكتروني وحملات مدفوعة ومحتوى وتصاميم إعلانية",
        year: "2026",
        platform: "موقع متجاوب + حملات على منصات متعددة",
      },
      hero: {
        alt: "متجر اسبشل في نافذة متصفح، وهاتف يعرض منشورًا على منصات التواصل وبطاقة عرض باقة، بجانب عبارة «Every scent. Every platform.»",
        caption:
          "المتجر والحملات: متجر عطور فاخر تدعمه تصاميم مُعدّة لكل منصة.",
      },
      overview: {
        title: "متجر بُني للبيع. وحملات بُنيت لتحقيق التحويلات.",
        lead: "متجر إلكتروني للعطور والتسويق الرقمي الذي يقف خلفه: من واجهة المتجر وعروض الباقات إلى الحملات التي جذبت العملاء وحوّلتهم إلى مبيعات.",
        columns: [
          "اسبشل علامة عطور تبيع تشكيلة واسعة من العطور عبر الإنترنت. بنينا المتجر حول عروض باقات واضحة (4 و5 و8 و10 عطور)، وسلة وإتمام شراء سلسين، وخيارات دفع مرنة منها تابي وتمارا.",
          "وإلى جانب المتجر، خطّطنا لحملات على منصات التواصل الاجتماعي والإعلانات وأدرناها، بتصاميم توضّح كل عرض في لمحة. والنتيجة متجر ومنظومة تسويقية يعملان معًا لزيادة المبيعات.",
        ],
      },
      challenge: {
        title: ["إحساس فاخر.", "عروض واضحة."],
        body: [
          "سوق العطور مزدحم، والعملاء يقررون بسرعة. وكان التحدي أن نمنح اسبشل متجرًا يبدو فاخرًا وجديرًا بالثقة، مع جعل عروض الباقات مفهومة فورًا، لينتقل الزائر من النظرة الأولى إلى إتمام الشراء دون عوائق.",
          "واحتجنا أيضًا إلى تصاميم تسويقية تؤدي دور الإعلان والمنتج معًا: فكل منشور في الحملة كان عليه أن يعرض العرض والسعر والدعوة إلى الإجراء بوضوح، وأن يبقى متناسقًا مع تجربة المتجر التي يصل إليها الناس بعد النقر.",
        ],
        principle:
          "مبدأ التصميم: دافئ وواضح ومتناسق. من الإعلان حتى إتمام الشراء.",
        alt: "صفحة عروض الباقات في متجر اسبشل وملخص الطلب ومنتج في السلة وشعارا تابي وتمارا",
        caption:
          "شاشات المتجر: باقات وسلة وخيارات دفع مرنة، صُمّمت لشراء سريع وواثق.",
      },
      approach: {
        title: ["تصفّح أقل.", "شراء أكثر."],
        body: "بدأنا بالعرض: أي الباقات نبيع، وبأي سعر، وكيف نقدّمها. ثم بنينا المتجر وتصاميم الحملات معًا، لتروي رسالة الإعلان وتجربة الموقع القصة نفسها.",
        steps: [
          {
            title: "بناء المتجر",
            body: "صفحات منتجات، وعروض باقات، وسلة مع قسائم خصم وإمكانية طلب الهدايا، ودعم للعربية والإنجليزية.",
          },
          {
            title: "ابتكار الحملات",
            body: "تصاميم ومحتوى محورها العروض لمنصات التواصل والإعلانات، تستوقف المتصفّح وتدفعه إلى النقر.",
          },
          {
            title: "التحسين من أجل المبيعات",
            body: "اختبار التصاميم والعروض، ومعرفة ما يحقق التحويلات، وتوسيع ما ينجح عبر المنصات.",
          },
        ],
        alt: "متجر اسبشل في نافذة متصفح، وحسابه على منصات التواصل في هاتفين، وأربعة منشورات لعروض الباقات",
      },
      gallery: [
        {
          title: "العطر أولًا. / ثم البيع.",
          caption: "الواجهة والمجموعة وقصة العلامة",
          alt: "واجهة متجر اسبشل وثلاث زجاجات عطر",
        },
        {
          title: "اختر باقة. / ووفّر في كل عطر.",
          caption: "العروض والسلة وإتمام الشراء",
          alt: "صفحة عروض الباقات في متجر اسبشل ومنشور لعرض 10 عطور",
        },
        {
          title: "عرض واحد. / على كل منصة.",
          caption: "تسلسل واضح على الشاشات الأصغر",
          alt: "هاتفان يعرضان حساب اسبشل على منصات التواصل ومنشورًا لعرض 8 عطور",
        },
      ],
    },
  },
}
