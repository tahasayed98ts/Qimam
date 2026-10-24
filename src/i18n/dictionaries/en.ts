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
    meta: {
      title: "Our Projects",
      description:
        "See Qimam's projects: platforms for travel, loyalty points and Hajj and Umrah trips, and a website for a real estate and contracting company.",
    },
    title: "Our Projects",
    more: "More Projects",
    viewProject: "View project:",
    visitSite: "Visit the live site:",
    newTab: "(opens in a new tab)",
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
  // The articles themselves live in src/content/articles.ts.
  articles: {
    meta: {
      title: "Articles",
      description:
        "Articles from Qimam on software development, artificial intelligence, mobile apps, user experience, design strategy and branding.",
    },
    title: "Articles",
  },
  // Labels of the project details pages; each case study's own copy lives in
  // src/content/case-studies.
  projectDetails: {
    back: "Back to Projects",
    facts: {
      industry: "Industry",
      services: "Services",
      year: "Year",
      platform: "Platform",
    },
    chapters: {
      overview: "Overview",
      challenge: "Context & Challenge",
      approach: "Our Approach",
    },
    gallery: {
      label: "The project in frames",
      title: "A closer look.",
      shots: "Project screens",
      previous: "Previous screen",
      next: "Next screen",
    },
  },
  about: {
    meta: {
      title: "About Us",
      description:
        "Qimam combines digital marketing, programming and artificial intelligence to help companies build a strong digital presence and grow sustainably.",
    },
    title: "We Create Solutions & Services That Fit Your Needs",
    who: {
      title: "Who Are We?",
      body: "Qimam is a company specialized in providing integrated digital and technological solutions, combining digital marketing, programming, technology, and artificial intelligence to help companies build a strong digital presence and achieve real and sustainable growth.",
    },
    mission: {
      title: "Our Mission",
      body: "We help companies make the most of technology and digital marketing, by deeply understanding their business, analyzing their needs, and then designing and implementing integrated solutions that achieve their goals with the highest level of accuracy and efficiency.",
    },
    focus: {
      title: "Our Focus",
      // TODO(content): Figma still shows placeholder focus areas.
      items: [
        { title: "Supported Servers", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Supported Servers", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Supported Servers", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Supported Servers", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      ],
    },
    gallery: {
      title: "Diverse Perspectives, World-Class Work",
    },
    goals: {
      title: "Our Goals",
      items: [
        { title: "Build", body: "Building strong, scalable digital systems and websites" },
        { title: "Improve", body: "Improving marketing performance and achieving a better return" },
        { title: "Reach", body: "Increasing companies’ ability to reach their customers" },
        { title: "Sustain", body: "Building strong and sustainable brands" },
        { title: "Efficiency", body: "Utilizing artificial intelligence to increase efficiency" },
        { title: "Accuracy", body: "Providing accurate data to assist in decision-making" },
      ],
    },
  },
  servicesPage: {
    meta: {
      title: "Services",
      description:
        "Web and mobile development, UI/UX and branding, ERP systems, AI automation and digital marketing, built to launch, scale and evolve.",
    },
    title: "Software Development Services Built To Launch, Scale, And Evolve",
    items: [
      {
        title: "Web Development",
        points: ["Websites & Landing Pages", "Dashboards & Admin Panels", "Backend & APIs"],
      },
      {
        title: "Mobile App Development",
        points: ["Android & iOS Apps", "Cross-Platform Solutions", "App Maintenance & Support"],
      },
      {
        title: "UI/UX & Branding",
        points: ["UI/UX Design", "Logos & Visual Identity", "Brand Strategy & Guidelines"],
      },
      {
        title: "ERP & Business Systems",
        points: ["ERP & Odoo Solutions", "HR & Employee Management", "Attendance & Fingerprint Systems"],
      },
      {
        title: "AI & Automation",
        points: ["AI-Powered Solutions", "Business Process Automation", "Intelligent Workflows"],
      },
      {
        title: "Digital Marketing",
        points: ["Digital Marketing Strategy", "SEO & Search Visibility", "Social Media & Paid Ads"],
      },
    ],
    process: {
      title: "Our Process",
      step: "Step",
      steps: [
        { title: "Discover", body: "Understand goals, users, and the current landscape to define the right problem to solve." },
        { title: "Analyze", body: "Review data, systems, and constraints to turn assumptions into informed decisions." },
        { title: "Strategize", body: "Align priorities, define the roadmap, and create a plan that connects vision to execution." },
        { title: "Execute", body: "Build, test, and deliver with a focus on quality, speed, and measurable progress." },
        { title: "Measure", body: "Track outcomes, validate assumptions, and turn launch data into actionable insights." },
        { title: "Optimize", body: "Refine, iterate, and improve performance so the solution keeps delivering value over time." },
      ],
    },
    industries: {
      title: "Industries",
      items: {
        realEstate: "Real Estate",
        education: "Education & Training",
        eCommerce: "E-Commerce",
        retail: "Retail",
        automotive: "Automotive",
        professionalServices: "Professional Services",
        healthcare: "Healthcare",
        hospitality: "Hospitality",
        technology: "Technology",
        b2b: "B2B Businesses",
        startups: "Startups",
        growingBusinesses: "Growing Businesses",
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
