const placeholderQuote =
  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ultrices lorem. Praesent tincidunt enim felis, ut convallis ante bibendum facilisis. Integer nec porttitor turpis.”"

const en = {
  meta: {
    title: "Qimam — Software Development Solutions",
    description:
      "Qimam delivers software development solutions: web and app development, digital marketing, AI solutions and graphic design.",
  },
  common: {
    skipToContent: "Skip to main content",
    learnMore: "Learn More",
  },
  header: {
    homeLabel: "Qimam home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    navLabel: "Main navigation",
  },
  language: {
    label: "Change language",
    names: { en: "English", ar: "العربية" },
    short: { en: "En", ar: "عربي" },
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    articles: "Articles",
    contact: "Contact Us",
  },
  social: {
    linkedin: "Qimam on LinkedIn",
    x: "Qimam on X",
    whatsapp: "Chat with Qimam on WhatsApp",
  },
  hero: {
    titleLines: ["Software", "Development", "Solutions"],
    subtitle: "More than just solutions",
    cta: "Learn More",
    taglineLines: ["Smartest", "Services", "& Solutions"],
    reachUs: "Reach Us",
  },
  trusted: {
    title: "Trusted by teams at",
  },
  solutions: {
    title: "We Create Solutions & Services That Fit Your Needs",
    badge: "Supported Servers",
    heading: "Unlock your project’s potential",
    body: "With great teams come great processes. Using our developer API, create and publish extensions to your organization’s Private Extension Store for your team to install.",
    cta: "Learn More",
    showcaseAlt: "Sales analytics dashboard interface",
  },
  services: {
    label: "Our services",
    items: {
      web: {
        title: "Web & App Development",
        body: "Build digital experiences that help customers connect with your business and get things done.",
      },
      marketing: {
        title: "Digital Marketing",
        body: "Grow your business by reaching the right audience, building connections, and turning interest into action.",
      },
      ai: {
        title: "AI Solutions",
        body: "Work smarter by automating tasks, simplifying processes, and unlocking new possibilities with AI.",
      },
      design: {
        title: "Graphic Design",
        body: "Make your brand stand out with visuals that capture attention, tell your story, and leave an impression.",
      },
    },
  },
  stats: {
    titleLines: [
      "The perfect combination of",
      "Technology, Product, Talent, And Resources",
    ],
    items: {
      reliable: {
        label: "Reliable",
        value: "98%",
        caption: "Projects Delivered",
      },
      trusted: { label: "Trust Worthy", value: "+50K", caption: "Clients" },
      scalable: { label: "Scalable", value: "+200", caption: "SaaS Products" },
      quality: { label: "Quality", value: "+100", caption: "Awards Won" },
    },
  },
  projects: {
    title: "Our Projects",
    more: "More Projects",
    viewProject: "View project:",
    items: {
      arabfly: {
        category: "Loyalty Points",
        description:
          "ArabFly is a travel and loyalty app that brings flight bookings, travel services, and rewards together in one seamless experience. Users can manage their membership, track loyalty points, and access exclusive travel benefits with ease.",
      },
      tallah: {
        category: "Travel, Tourism & Trips Services",
        description:
          "Tallah is an all-in-one travel and tourism platform that makes planning your next trip simple and seamless. Explore destinations, book flights and hotels, discover tailored tour packages, and access visa services and more—all in one place.",
      },
      tawaf: {
        category: "Hajj, Umrah & Visits to the Holy House of Allah",
        description:
          "Tawaf Al Dhahabiya is a travel platform offering tailored Hajj and Umrah packages, seamless travel arrangements, and comfortable accommodation. We make every spiritual journey rewarding through trusted services designed to provide pilgrims with a peaceful and memorable experience.",
      },
      "amr-ali": {
        category: "Real Estate, Contracting, and Finishing Works.",
        description:
          "Amr Ali is a contracting and general supplies company specializing in residential, commercial, and industrial construction. With expertise in engineering, interior design, and finishing, the company delivers integrated solutions focused on quality and reliability across Egypt and Saudi Arabia.",
      },
    },
  },
  testimonials: {
    title: "What Our Clients Say",
    rating: "Rated 5 out of 5",
    items: [
      { quote: placeholderQuote, author: "Ahmed Al-Farsi, CEO" },
      { quote: placeholderQuote, author: "Layla Mansour, Operations Director" },
      { quote: placeholderQuote, author: "David Osei, Head of Support" },
    ],
  },
  footer: {
    quickLinks: "Quick Links",
    subscribeTitle: "Subscribe",
    subscribeText: "Don’t miss our future updates! Get Subscribed Today!",
    emailLabel: "Email address",
    emailPlaceholder: "example@gmail.com",
    submit: "Subscribe",
    subscribePending: "Subscriptions open soon — thank you for your interest.",
    rights: "All Rights Reserved to Qimam ©",
    navLabel: "Footer",
  },
  notFound: {
    title: "Page not found",
    body: "This page isn’t available yet.",
    back: "Back to home",
  },
}

export type Dictionary = typeof en

export default en
