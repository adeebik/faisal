export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  workType: string;
  role: string;
  duration: string;
  isCurrent?: boolean;
  bullets: string[];
  techStack: string[];
  logoText: string;
  accentColor: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  specialization?: string;
  score: string;
  duration: string;
  location: string;
  badge: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  image: string;
  description: string;
  skillsLearned: string[];
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  period: string;
  role: string;
  location?: string;
  metrics: {
    label: string;
    value: string;
    change?: string;
    isUp?: boolean;
  }[];
  challenge: string;
  strategy: string[];
  execution: string[];
  deliverables: string[];
  toolsUsed: string[];
  badgeTag: string;
}

export interface ToolCategory {
  title: string;
  description: string;
  tools: {
    name: string;
    description: string;
    tag: string;
    level: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const portfolioData = {
  personal: {
    name: "Faisal Farhan Ansari",
    shortName: "Faisal",
    title: "Growth Marketing & Sales Professional",
    subTitle: "Sales Execution • Growth & Performance Marketing • AI Product Strategy",
    tagline: "From dealer networks to digital demand — Sales execution meets Marketing strategy.",
    heroSummary: "Faisal pairs ground-level sales execution with digital-first marketing and emerging AI product thinking — scaling a 40+ outlet distribution network, growing a self-built D2C brand through data-led digital campaigns, and shaping AI-agent strategy at a national hackathon.",
    email: "farhanfaisal66@gmail.com",
    phone: "+91 7001516198",
    whatsappUrl: "https://wa.me/917001516198",
    linkedinUrl: "https://www.linkedin.com/in/faisal-farhan-ansari-3b8ba0156",
    location: "Raniganj, West Bengal (Open to Pan-India Relocation)",
    experienceYears: "3+",
    resumeUrl: "/faisal_resume.pdf",
    resumeFileName: "Faisal_Farhan_Ansari_Resume.pdf",
    heroQuote: "Marketing & Sales Strategist — turning ground-level execution into digital-first growth.",
    heroExperienceBadge: "Marketing & Sales Strategist • MBA (LPU)",
    aboutBio: [
      "I'm Faisal Farhan Ansari, a final-year MBA student specializing in Marketing and Sales, currently building at the intersection of field execution, digital strategy, and brand growth.",
      "My foundation is on the ground — three years managing a 40+ outlet general trade network, onboarding retailers into repeat-order cycles, and driving double-digit growth in secondary sales. That experience taught me what most marketing theory skips: how a brand actually wins shelf space, trust, and repeat orders in the real world.",
      "I took that instinct and built EcoRealm, a sustainable D2C brand, from zero — handling everything from branding and pricing to dealer coordination, growing it to ₹1.5L+ in revenue and 200+ customers. Since then, I've stayed close to both ends of the discipline: running FMCG field projects with Dabur, Britannia, and PepsiCo to sharpen my execution and data-driven thinking, while also picking up digital marketing tools (SEO, analytics, SEMrush, Ahrefs) and dabbling in AI product strategy through a national hackathon.",
      "What ties it together is a simple belief: good marketing isn't just a campaign — it's built on distribution, data, and genuine demand generation. I'm looking for a Marketing & Sales role where I can bring that full-stack thinking — from the shelf to the screen."
    ],
    stats: [
      { value: "40+", label: "Outlets Managed", highlight: "General Trade Distribution Network" },
      { value: "₹1.5L+", label: "D2C Revenue Built", highlight: "EcoRealm (200+ Customers)" },
      { value: "10 BRDs", label: "AI Product Strategy", highlight: "PRFAQs across 5 Verticals" },
      { value: "25+", label: "Dealers Onboarded", highlight: "₹20K–30K Repeat Order Value" },
      { value: "8.56", label: "MBA CGPA", highlight: "LPU Marketing & Sales Specialization" },
    ],
    floatingStickers: [
      { text: "🤝 Negotiation & Client Acquisition", color: "#121019", textColor: "#FFFFFF" },
      { text: "⚡ Sales Execution (GT & MT)", color: "#985CFF", textColor: "#FFFFFF" },
      { text: "📊 MS-Excel & Power BI MIS", color: "#06B6D4", textColor: "#FFFFFF" },
      { text: "🤖 AI Product Strategy & PRFAQs", color: "#F59E0B", textColor: "#FFFFFF" },
    ],
  },

  skills: [
    { name: "Ground-Level Sales Execution", category: "power" },
    { name: "Growth & Performance Marketing", category: "power" },
    { name: "AI Product Strategy & PRFAQs", category: "power" },
    { name: "General Trade (40+ Outlets)", category: "power" },
    { name: "Dealer Onboarding & Retention", category: "power" },
    { name: "D2C Brand Building (Zero-to-One)", category: "power" },
    { name: "Lean Canvas & BRD Framing", category: "power" },
    { name: "Route-to-Market (RTM) Planning", category: "power" },
    { name: "Modern Trade Shelf Space Optimization", category: "power" },
    { name: "SEO & Digital Analytics (SEMrush, Ahrefs)", category: "tools" },
    { name: "Google Analytics 4 & GTM", category: "tools" },
    { name: "MS-Excel (Advanced MIS & Modeling)", category: "tools" },
    { name: "Secondary Sales Acceleration", category: "power" },
    { name: "FMCG Distribution Audits (Dabur, PepsiCo)", category: "power" },
    { name: "Distributor P&L & Margin Negotiation", category: "power" },
  ],

  toolDeck: [
    {
      title: "Data Analytics & MIS Reporting",
      description: "Harnessing quantitative tools to forecast demand, track secondary off-take, and optimize route profitability.",
      tools: [
        { name: "MS Excel", description: "Advanced MIS modeling, VLOOKUP/XLOOKUP, Pivot Tables, distributor reconciliation & ROI trackers", tag: "Advanced", level: "95%" },
        { name: "Power BI", description: "Interactive sales funnel dashboards, territory heat maps & outlet penetration analytics", tag: "Intermediate", level: "85%" },
        { name: "Tableau", description: "Visualizing SKU velocity, regional sales comparisons & secondary distribution trends", tag: "Intermediate", level: "82%" },
        { name: "Google Sheets", description: "Real-time collaborative beat tracking, dealer ordering logs & lead prioritization", tag: "Advanced", level: "92%" },
      ],
    },
    {
      title: "Digital Growth & Market Intelligence",
      description: "Leveraging modern digital analytics, keyword tracking, and search intelligence for consumer research.",
      tools: [
        { name: "Google Analytics (GA4)", description: "Traffic funnel analysis, user engagement metrics & conversion tracking", tag: "Analytics", level: "80%" },
        { name: "Google Search Console", description: "Search query intent benchmarking & keyword visibility audits", tag: "Search Health", level: "82%" },
        { name: "Semrush & Ubersuggest", description: "Competitor market gap analysis & category search trends", tag: "Intelligence", level: "85%" },
        { name: "Screaming Frog & Ahrefs", description: "Auditing catalog indexing, broken redirect paths & competitor domains", tag: "Audit", level: "78%" },
      ],
    },
    {
      title: "Creative & Enterprise Presentation",
      description: "Delivering polished collateral, visual pitch decks, and distributor proposals.",
      tools: [
        { name: "Canva", description: "High-impact sales pitch sheets, trade marketing collateral & retail promotional posters", tag: "Design", level: "90%" },
        { name: "PowerPoint", description: "Executive review decks, quarterly territory performance presentations & BRD visual summaries", tag: "Presentation", level: "92%" },
        { name: "MS Word", description: "Commercial trade agreements, distributor contracts & formal dealer communications", tag: "Documentation", level: "94%" },
      ],
    },
  ] as ToolCategory[],

  experiences: [
    {
      id: "exp-1",
      company: "Anwar Trader",
      location: "Raniganj, West Bengal",
      workType: "Full-Time (On-Ground)",
      role: "Territory Sales Executive",
      duration: "Sep 2022 – Jul 2025",
      isCurrent: false,
      logoText: "AT",
      accentColor: "#985CFF",
      bullets: [
        "Managed a 40+ outlet General Trade dealer network across the territory, guaranteeing strict route discipline and beat coverage frequency.",
        "Onboarded 25+ new dealers and retailers into a recurring order channel via structured field visits, locking in ₹20K–₹30K average order value (AOV).",
        "Drove a 15% increase in secondary sales velocity through consistent dealer engagement, in-store relationship nurturing, and targeted stock replenishment.",
        "Monitored distributor credit cycles, payment reconciliations, and claim settlements, sustaining zero critical debtor defaults across 3 years.",
      ],
      techStack: ["Route-to-Market (RTM)", "General Trade", "Dealer Onboarding", "Secondary Sales", "MS Excel", "Territory Mapping"],
    },
    {
      id: "exp-2",
      company: "Bajaj Capital Ltd.",
      location: "India (Tier-3 Market)",
      workType: "Internship",
      role: "Sales & Market Development Intern",
      duration: "Jun 2026 – Aug 2026",
      isCurrent: false,
      logoText: "BC",
      accentColor: "#06B6D4",
      bullets: [
        "Spearheaded primary sales conversion by onboarding 12+ high-value retail clients onto the Bajaj Ameya portal, generating ₹60,000+ in recurring monthly SIP volume.",
        "Built a 3-agent insurance referral channel in an underserved Tier-3 market, systematically converting referred prospects into active SIP enrollments.",
        "Analyzed customer conversion trends and lead qualification funnel drop-offs using Excel-based MIS reporting to prioritize high-potential prospects.",
        "Conducted in-person advisory sessions on mutual fund portfolio diversification and wealth creation for emerging retail investors.",
      ],
      techStack: ["Client Acquisition", "Wealth Advisory", "MIS Reporting", "Agent Channel", "Lead Nurturing", "Financial Sales"],
    },
  ] as WorkExperience[],

  education: [
    {
      id: "edu-1",
      institution: "Lovely Professional University",
      degree: "Master of Business Administration (MBA)",
      specialization: "Marketing and Sales",
      score: "CGPA: 8.56 (Distinction)",
      duration: "Aug 2025 – Ongoing",
      location: "Phagwara, Punjab",
      badge: "Master's Degree",
      highlights: [
        "Maintained top-tier academic standing with 8.56 CGPA focused on FMCG Brand Strategy, Channel Distribution & Consumer Insights.",
        "Appointed Coordinator for Chanakya Student Organization, leading campus-wide event logistics and alumni engagement.",
        "Executed live market consulting projects for Dabur India, PepsiCo, Britannia, and Centific.",
      ],
    },
    {
      id: "edu-2",
      institution: "Trivenidevi Bhalotia College",
      degree: "Bachelor of Arts (BA Honours)",
      specialization: "English Honours",
      score: "CGPA: 7.27",
      duration: "Jul 2019 – Apr 2022",
      location: "Raniganj, West Bengal",
      badge: "Bachelor's Degree",
      highlights: [
        "Honed high-stakes written and verbal communication, negotiation rhetoric, and critical problem-solving skills.",
        "Actively participated in inter-college debates, public speaking symposiums, and organizational committees.",
      ],
    },
  ] as EducationItem[],

  projects: [
    {
      id: "proj-1",
      number: "01",
      title: "Dabur India Ltd. — Modern Trade Shelf Placement & Off-Take Blitz",
      category: "Modern Trade & FMCG Sales",
      summary: "Spearheaded Modern Trade shelf space optimization and in-store promotional activations for 3 Odonil SKUs at Reliance Retail, selling 210+ units and driving secondary off-take velocity.",
      image: "/images/projects/dabur.jpg",
      period: "Aug 2026",
      role: "Sales & Marketing Intern (Modern Trade)",
      location: "Reliance Retail, Amritsar",
      badgeTag: "Modern Trade & Off-Take",
      metrics: [
        { label: "Units Sold", value: "210+ Units", change: "Across 3 Odonil SKUs", isUp: true },
        { label: "Promotional Discount", value: "Up to 41%", change: "Off MRP Strategy", isUp: true },
        { label: "Share of Shelf", value: "+35%", change: "At Reliance Aisles", isUp: true },
        { label: "Secondary Off-Take", value: "+28%", change: "POS Engagement Lift", isUp: true },
      ],
      challenge: "Odonil faced fierce shelf competition from entrenched air freshener brands at Reliance Retail, resulting in suppressed customer eye-level visibility and slower off-take velocity.",
      strategy: [
        "Negotiated premium eye-level shelf placement and high-traffic aisle end-cap displays with Reliance store floor managers.",
        "Designed and executed aggressive promotional bundle pricing strategies offering up to 41% discount off MRP to trigger spontaneous purchase intent.",
        "Trained floor sales personnel on comparative product longevity and fragrance benefits to proactively engage walk-in shoppers.",
      ],
      execution: [
        "Set up interactive fragrance test stations at high-footfall aisle junctions.",
        "Managed daily stock audit logs to prevent stock-outs during peak evening shopping hours.",
        "Delivered direct POS customer pitches, converting 210+ shoppers into immediate buyers across 3 Odonil SKUs.",
      ],
      deliverables: ["Aisle Share-of-Shelf Audit Sheet", "Reliance POS Off-Take Tracker", "Discount & Margin P&L Matrix", "Store Manager Relationship Playbook"],
      toolsUsed: ["POS Systems", "MS Excel", "In-Store Merchandising", "Retail Negotiation"],
    },
    {
      id: "proj-2",
      number: "02",
      title: "PepsiCo — Pep Sales Stars Distribution Leakage & Chiller Audit",
      category: "Field Audits & Channel Integrity",
      summary: "Audited 30+ outlets across Kirana, Modern Trade, and QSR channels in a competitive micro-internship, exposing critical competitor cooler leakage and benchmarking SKU availability.",
      image: "/images/projects/pepsico.jpg",
      period: "Jul 2026",
      role: "Market Audit Specialist (Micro-Internship)",
      location: "Unstop & Regional Market",
      badgeTag: "Distribution Integrity Audit",
      metrics: [
        { label: "Outlets Audited", value: "30+ Stores", change: "Target was 25 stores", isUp: true },
        { label: "Leakages Identified", value: "2 Chillers", change: "Competitor Infiltration", isUp: true },
        { label: "Channel Breadth", value: "3 Channels", change: "Kirana, MT & QSR", isUp: true },
        { label: "SKU Penetration", value: "100%", change: "Full Benchmark Report", isUp: true },
      ],
      challenge: "PepsiCo required actionable field intelligence to identify distribution bottlenecks, verify whether branded chillers were exclusively utilized, and measure competitive share-of-shelf.",
      strategy: [
        "Created a structured market audit route covering high-density Kirana clusters, quick-service restaurants (QSR), and Modern Trade supermarkets.",
        "Developed a standardized audit scorecard tracking SKU availability, pricing parity, chilling temperature, and cooler placement.",
        "Examined competitor encroachment across branded PepsiCo assets.",
      ],
      execution: [
        "Exceeded the 25-store market-visit target by personally auditing 30+ distinct retail outlets.",
        "Flagged a high-priority commercial leakage: discovered 2 company-provided PepsiCo chillers stocked with competitor beverage brands.",
        "Benchmarked share-of-shelf across all visited formats, demonstrating that Modern Trade stores stocked the widest PepsiCo product breadth.",
      ],
      deliverables: ["30-Outlet Field Audit Matrix", "Cooler Leakage Photographic Dossier", "Competitive Price-Per-Liter Benchmark", "Actionable Kirana Compliance Directive"],
      toolsUsed: ["Field Audit Scorecards", "Market Research", "Competitive Intelligence", "MS Excel"],
    },
    {
      id: "proj-3",
      number: "03",
      title: "Britannia FMCG — High-Margin De-Bundling & Campus Sales Sprint",
      category: "Sales Sprint & Product De-Bundling",
      summary: "Exceeded sales targets by ~20% (₹18K vs ₹15K) across 6 Britannia SKUs by de-bundling large family packs into price-accessible units for a budget-conscious student demographic.",
      image: "/images/projects/britannia.jpg",
      period: "Jan 2026 – Apr 2026",
      role: "Field Sales Lead",
      location: "LPU Campus & Regional Outlets",
      badgeTag: "Direct Field Sales Sprint",
      metrics: [
        { label: "Target Achievement", value: "120%", change: "₹18K vs ₹15K Target", isUp: true },
        { label: "Conversion Rate", value: "~30%", change: "Across 150–200+ Prospects", isUp: true },
        { label: "Hostel Night Sprints", value: "10 Nights", change: "Exam Season Selling", isUp: true },
        { label: "SKU Portfolio", value: "6 SKUs", change: "Optimized Margin Mix", isUp: true },
      ],
      challenge: "Large Britannia family packs had slow turnover among university students with limited pocket budgets, threatening the consignment sales target.",
      strategy: [
        "Engineered an innovative de-bundling strategy: split bulk multi-packs into individual, pocket-friendly snack units priced at attractive cash points.",
        "Utilized a revolving consignment inventory model to minimize upfront working capital risk and maximize daily cash flow velocity.",
        "Targeted high-demand temporal windows: launched 10 consecutive nights of direct hostel selling during late-night exam study hours.",
      ],
      execution: [
        "Coordinated with institutional canteens and student hubs to establish pop-up impulse buying counters.",
        "Pitched directly to 150–200+ student prospects, converting roughly 30% through irresistible impulse pricing.",
        "Exceeded the ₹15,000 sales benchmark by 20%, generating ₹18,000 in gross revenue across 6 SKUs.",
      ],
      deliverables: ["Unit Economics & De-Bundling Model", "Hostel Selling Field Route", "Consignment Settlement Log", "Daily Cash-Reconciliation Ledger"],
      toolsUsed: ["Direct Sales Negotiation", "Unit Economics Modeling", "Inventory Management", "MS Excel"],
    },
    {
      id: "proj-4",
      number: "04",
      title: "EcoRealm — D2C Sustainability Brand Launch to B2B Institutional Pipeline",
      category: "D2C Brand Launch & B2B Pipeline",
      summary: "Bootstrapped an eco-friendly consumer lifestyle initiative from ground zero, generating ₹1.5L+ revenue, acquiring 200+ customers, and structuring an institutional B2B pipeline.",
      image: "/images/projects/ecorealm.jpg",
      period: "Sep 2025 – Jan 2026",
      role: "Commercial Co-Founder & Sales Lead",
      location: "LPU & Regional Market",
      badgeTag: "Zero-to-One Brand Growth",
      metrics: [
        { label: "Gross Revenue", value: "₹1.5L+", change: "Zero to One Inception", isUp: true },
        { label: "Customer Base", value: "200+", change: "Direct Retail Buyers", isUp: true },
        { label: "B2B Pipeline", value: "5+ Institutions", change: "Bulk Corporate Tie-Ups", isUp: true },
        { label: "Gross Margin", value: "42%", change: "Direct Sourcing Model", isUp: true },
      ],
      challenge: "Launching an entirely new sustainable consumer product line under channel ambiguity, requiring rapid customer validation, brand recognition, and profitable cash flow.",
      strategy: [
        "Conducted customer discovery surveys to define an attractive product bundle combining daily essentials with premium biodegradable aesthetics.",
        "Established on-ground visual merchandising kiosks at high-density commercial events.",
        "Pioneered a dual-funnel sales strategy: combining direct retail sales with high-volume institutional B2B procurement deals.",
      ],
      execution: [
        "Managed supplier negotiation and wholesale consignment agreements to secure healthy 42% gross margins.",
        "Orchestrated on-ground merchandising displays that attracted 200+ paying retail consumers.",
        "Pitched corporate gifting packages to university departments and local businesses, generating ₹1.5L+ in verified revenue.",
      ],
      deliverables: ["Product Catalog & Price Architecture", "B2B Institutional Sales Pitch", "Merchandising Display Playbook", "Customer Retention Registry"],
      toolsUsed: ["B2B Negotiation", "Canva", "Channel Positioning", "MS Excel", "P&L Modeling"],
    },
    {
      id: "proj-5",
      number: "05",
      title: "Centific Premier Hackathon 2.0 — Retail AI Agent & Quick Commerce Strategy",
      category: "AI Strategy & Retail Innovation",
      summary: "Architected strategic Business Requirement Documents (BRDs) for retail AI agents at a prestigious residential hackathon, modeling Blinkit quick commerce integration and workflow automation.",
      image: "/images/projects/centific.jpg",
      period: "Apr 2026 – May 2026",
      role: "AI Product Strategist",
      location: "Centific, Hyderabad (Residential)",
      badgeTag: "AI & Quick Commerce Strategy",
      metrics: [
        { label: "BRDs Delivered", value: "10 BRDs", change: "Spanning 5 Verticals", isUp: true },
        { label: "Strategic Focus", value: "Quick Commerce", change: "Blinkit Ecosystem Data", isUp: true },
        { label: "Agent Architecture", value: "Dual Agent", change: "Campaign + Content AI", isUp: true },
        { label: "Feasibility Model", value: "HITL", change: "Human-In-The-Loop", isUp: true },
      ],
      challenge: "Traditional retail distribution models lack real-time reactivity to fast-moving quick commerce spikes, requiring intelligent automated agents to optimize reordering.",
      strategy: [
        "Built PRFAQs and Lean Canvas strategies across 10 BRDs spanning 5 verticals, from Retail to Hiring.",
        "Analyzed real-world dark store order volumes and SKU turnaround speeds in quick commerce ecosystems like Blinkit.",
        "Proposed a specialized Retail AI Agent that autonomously anticipates Kirana and dark store stock depletion.",
        "Designed an integrated workflow linking autonomous Marketing Campaign agents with Content Creation AI models under human-in-the-loop (HITL) quality control.",
      ],
      execution: [
        "Authored 10 comprehensive BRDs across 5 business verticals under strict 48-hour hackathon deadlines.",
        "Presented the retail quick-commerce automation model to senior engineering and product executives at Centific.",
      ],
      deliverables: ["Built PRFAQs & Lean Canvas Strategies", "10 Enterprise AI BRDs", "Blinkit Quick Commerce Market Analysis", "Multi-Agent Workflow Blueprint"],
      toolsUsed: ["PRFAQs & Lean Canvas", "Product Architecture", "BRD Documentation", "Market Data Modeling", "PowerPoint"],
    },
    {
      id: "proj-6",
      number: "06",
      title: "Bajaj Capital — Tier-3 Wealth Channel & High-Value SIP Engine",
      category: "Financial Sales & Channel Expansion",
      summary: "Unlocked an untapped Tier-3 market for Bajaj Capital, establishing a 3-agent insurance referral network and generating ₹60,000+ in recurring monthly SIP investments.",
      image: "/images/projects/bajaj.jpg",
      period: "Jun 2026 – Aug 2026",
      role: "Sales & Market Development Intern",
      location: "Tier-3 Market, India",
      badgeTag: "Channel & Advisory Sales",
      metrics: [
        { label: "Monthly SIP Volume", value: "₹60,000+", change: "Recurring Long-Term", isUp: true },
        { label: "Clients Onboarded", value: "12+ HNIs", change: "Bajaj Ameya Portal", isUp: true },
        { label: "Agent Network", value: "3 Agents", change: "Referral Partner Channel", isUp: true },
        { label: "Conversion Rate", value: "34%", change: "Qualified In-Person Leads", isUp: true },
      ],
      challenge: "High consumer skepticism toward financial investment products in Tier-3 markets, necessitating trust-based relationship sales and transparent advisory.",
      strategy: [
        "Organized localized financial awareness sessions emphasizing long-term compounding and risk mitigation.",
        "Recruited and trained a network of 3 local financial agents to act as trusted referral ambassadors.",
        "Employed Excel MIS dashboards to segment prospects by disposable income and investment readiness.",
      ],
      execution: [
        "Conducted one-on-one portfolio advisory meetings with 35+ prospective investors.",
        "Onboarded 12+ verified retail investors onto the Bajaj Ameya digital investment platform.",
        "Generated ₹60,000+ in steady monthly SIP volume with zero customer attrition.",
      ],
      deliverables: ["Tier-3 Prospect Segmentation Model", "Agent Referral Commission Sheet", "Bajaj Ameya Onboarding Guide", "Client MIS Tracking Dashboard"],
      toolsUsed: ["MS Excel", "Financial Advisory", "Direct Sales", "Channel Management"],
    },
  ] as ProjectCaseStudy[],

  certifications: [
    {
      id: "cert-1",
      title: "Area Manager Job Simulation",
      issuer: "Walmart | Forage",
      date: "Jul 2026",
      badge: "Retail Operations & Supply Chain",
      image: "/certificates/walmart_area_manager.jpg",
      description: "Comprehensive simulation focusing on big-box retail operations, supply chain logistics, distribution center throughput, workforce scheduling, and inventory shrinkage mitigation.",
      skillsLearned: ["Distribution Center Operations", "Floor Leadership", "Inventory Shrinkage Control", "Retail KPIs"],
    },
    {
      id: "cert-2",
      title: "On-Premise Sales Job Simulation",
      issuer: "Red Bull | Forage",
      date: "Jul 2026",
      badge: "High-Impact Commercial Sales",
      image: "/certificates/redbull_on_premise.jpg",
      description: "Intensive commercial simulation covering on-premise account prioritization, sales pitch structuring, venue menu placements, and high-visibility beverage merchandising.",
      skillsLearned: ["Account Prioritization", "Commercial Pitching", "POS Merchandising", "Contract Negotiation"],
    },
    {
      id: "cert-3",
      title: "Wealthpreneurs Program — Summer Internship",
      issuer: "Bajaj Capital Limited",
      date: "Aug 2026",
      badge: "Corporate Internship",
      image: "/certificates/bajaj_capital.jpg",
      description: "Official summer internship certificate from Bajaj Capital Limited (Gurugram Corporate Office). Completed strategic research project on 'Measuring the Effectiveness of Digital Financial Literacy Modules in Enhancing Insurance and Mutual Fund Sales' across the Wealthpreneurs Program.",
      skillsLearned: ["Digital Financial Literacy", "Mutual Funds & SIPs", "Insurance Advisory", "Wealth Management", "Client Acquisition"],
    },
    {
      id: "cert-4",
      title: "Microsoft Excel, Power BI & Tableau",
      issuer: "LPU Skill Development",
      date: "Dec 2025",
      badge: "Business Intelligence",
      image: "/certificates/professional_cert.jpg",
      description: "Rigorous technical credential certifying advanced competence in Excel formulas, relational data modeling in Power BI, and executive visual dashboarding in Tableau.",
      skillsLearned: ["Advanced Excel MIS", "Power BI Modeling", "Tableau Dashboards", "Data Storytelling"],
    },
  ] as CertificationItem[],

  galleryPhotos: [
    // 1. Centific (AI Product Strategy & Hackathon 2.0)
    {
      id: "gal-centific-1",
      title: "Centific Premier Hackathon 2.0 Stage",
      category: "Centific",
      image: "/images/drive/whatsapp_07.jpg",
      caption: "Main stage keynote at Centific Premier Hackathon 2.0: 'Where Human Ingenuity Met Agent Intelligence'.",
    },
    {
      id: "gal-centific-3",
      title: "AI Strategy & BRD Sprint Workstation",
      category: "Centific",
      image: "/images/drive/whatsapp_08.jpg",
      caption: "Intensive 48-hour residential hackathon building PRFAQs, Lean Canvases, and quick commerce models.",
    },
    {
      id: "gal-centific-4",
      title: "Official Hackathon ID & Asset Clearance",
      category: "Centific",
      image: "/images/drive/whatsapp_09.jpg",
      caption: "Faisal's participant badge and corporate security clearance at Centific Hyderabad campus.",
    },

    // 2. Dabur (Modern Trade & Odonil Off-Take Blitz at Reliance Retail)
    {
      id: "gal-dabur-1",
      title: "Reliance Retail In-Store Modern Trade Blitz",
      category: "Dabur",
      image: "/images/drive/whatsapp_01.jpg",
      caption: "Faisal managing on-ground sales execution and shelf presence at Reliance Retail (Amritsar).",
    },
    {
      id: "gal-dabur-2",
      title: "Odonil Secondary Off-Take Floor Activation",
      category: "Dabur",
      image: "/images/drive/whatsapp_04.jpg",
      caption: "Faisal leading the floor activation for 3 Odonil SKUs, driving 210+ direct unit sales.",
    },
    {
      id: "gal-dabur-3",
      title: "Smart Price Value Architecture (₹144 / ₹209 / ₹249)",
      category: "Dabur",
      image: "/images/drive/whatsapp_02.jpg",
      caption: "Promotional bundle pricing execution offering up to 41% savings off MRP to accelerate conversion.",
    },
    {
      id: "gal-dabur-4",
      title: "Dabur Red & Honey Cross-Category Merchandising",
      category: "Dabur",
      image: "/images/drive/whatsapp_03.jpg",
      caption: "In-store secondary placement units positioned at high-footfall aisle junctions.",
    },

    // 3. PepsiCo (Pep Sales Stars Distribution Leakage & Chiller Audit)
    {
      id: "gal-pepsico-1",
      title: "PepsiCo Pep Sales Stars Snacks & Beverage Audit",
      category: "PepsiCo",
      image: "/images/drive/whatsapp_06.jpg",
      caption: "Faisal auditing Lay's, Kurkure, and beverage share-of-shelf across 30+ retail and Modern Trade stores.",
    },
    {
      id: "gal-pepsico-2",
      title: "Distribution Integrity & Chiller Compliance",
      category: "PepsiCo",
      image: "/images/projects/pepsico.jpg",
      caption: "Exposing competitor cooler encroachment and benchmarking Kirana vs Modern Trade SKU availability.",
    },

    // 4. EcoRealm (D2C Sustainability Brand Exhibition & B2B Pipeline)
    {
      id: "gal-ecorealm-1",
      title: "EcoRealm Sustainable Brand Kiosk & Bamboo Products",
      category: "EcoRealm",
      image: "/images/drive/IMG-20251003-WA0016.jpg",
      caption: "Faisal at the EcoRealm launch booth showcasing sustainable bamboo essentials and merchandise.",
    },
    {
      id: "gal-ecorealm-2",
      title: "EcoRealm D2C Lifestyle Collection & Live Demos",
      category: "EcoRealm",
      image: "/images/drive/IMG-20251003-WA0017.jpg",
      caption: "Presenting eco-friendly stationery and lifestyle goods, driving ₹1.5L+ in validated customer revenue.",
    },
    {
      id: "gal-ecorealm-3",
      title: "Merchandise Display, QR Checkout & Make In India",
      category: "EcoRealm",
      image: "/images/drive/IMG20251003110044.jpg",
      caption: "On-ground retail setup with digital UPI payment integration, product flyers, and B2B catalog.",
    },
  ] as GalleryPhoto[],

  extraCurricular: [
    {
      id: "extra-1",
      role: "Coordinator",
      organization: "Chanakya Student Organization | LPU",
      duration: "Sep 2025 – Present",
      description: "Coordinated the Grand Alumni Homecoming Event at Lovely Professional University, directing on-ground participant logistics, stage operations, VIP guest coordination, and student volunteer teams.",
    },
  ],

  marqueeItems: [
    "GROWTH MARKETING & SALES STRATEGIST",
    "GROUND-LEVEL SALES EXECUTION",
    "40+ GT DEALER NETWORKS",
    "DIGITAL DEMAND GENERATION",
    "AI PRODUCT STRATEGY & AGENTS",
    "ECOREALM D2C BRAND (₹1.5L+ REVENUE)",
    "PRFAQS & LEAN CANVAS (10 BRDs)",
    "PERFORMANCE MARKETING & SEO",
    "SECONDARY SALES VELOCITY",
    "FMCG LIVE PROJECTS (DABUR • BRITANNIA • PEPSICO)",
  ],
};
