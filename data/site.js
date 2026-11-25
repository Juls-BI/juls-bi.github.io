/*
  All editable content lives here. To add a project, copy one object in PROJECTS,
  drop your screenshots in assets/img/projects/ and list them under "images".
  Each image needs "alt" (what the report shows) so screen reader users get the same insight.
*/
window.SITE = {
  links: {
    github: "https://github.com/Juls-BI",
    githubUser: "Juls-BI",
    blog: "https://data-tides.com",
    articles: "https://data-tides.com/blog/",
    email: "juliana@data-tides.com",
    linkedin: "https://www.linkedin.com/in/juliana-smith-citp/"
  },

  /* Repos shown in "Open source tools". Leave empty to show your most recently updated public repos. */
  pinnedRepos: [],

  /* Optional curated posts. Leave empty to hide the section. */
  featuredPosts: [
    {
      title: "AI Builds It, You Own It: A Model for Report Design in the Age of AI",
      summary: "AI can speed up report design, but you stay responsible for its decisions. This article introduces the DEPTH model for reviewing them.",
      url: "https://data-tides.com/2026/11/23/a-model-for-report-design-in-the-age-of-ai/"
    },
    {
      title: "Building Inclusive Fabric Apps: Who\u2019s Responsible?",
      summary: "Accessibility responsibility is moving from platforms to the people and AI agents who build Fabric Apps. It includes an Agent Skill that applies WCAG rules.",
      url: "https://data-tides.com/2026/11/02/building-inclusive-fabric-apps/"
    },
    {
      title: "Power BI Report CLI: What Changed for Accessibility?",
      summary: "Microsoft merged four Power BI report skills into one. This article checks whether the new routing still applies accessibility guidance when you edit a report.",
      url: "https://data-tides.com/2026/10/29/power-bi-report-cli-what-changed-for-accessibility/"
    },
    {
      title: "Tab Order in Power BI: Sorted by Position, Not Logic",
      summary: "The tab order button sorts visuals by their exact position, so small pixel differences can put elements in the wrong order and hurt accessibility.",
      url: "https://data-tides.com/2026/10/21/tab-order-in-power-bi-sorted-by-position-not-logic/"
    },
    {
      title: "Power BI Font Scaling Guide for New Canvas Sizes",
      summary: "Why text looks smaller on larger Power BI canvases, and how to scale fonts in proportion to the canvas height so reports stay readable.",
      url: "https://data-tides.com/2026/04/27/power-bi-font-scaling-guide/"
    },
    {
      title: "Power BI & European Accessibility Act Part 1: Implementing Alternative Text",
      summary: "How to write dynamic, insight-driven alt text in Power BI with DAX, and test it with a screen reader.",
      url: "https://data-tides.com/2026/04/16/power-bi-european-accessibility-act-part-1-implementing-alternative-text/"
    }
  ],

  /* AI, product design and real-world deployment. Shown in the "AI projects" section. */
  products: [
    {
      title: "PBIX A11y",
      summary: "A free, browser-based accessibility platform for Power BI reports and themes. It runs automated WCAG audits, generates alt text, simulates colour blindness and assesses cognitive load. Privacy-safe by design: nothing is uploaded or stored.",
      status: "Live and free",
      note: "Nominated for the Inclusive Awards 2026 (D&I Tech Initiative, UK).",
      tools: ["Lovable", "Copilot", "Power BI (PBIX, PBIR, PBIP)", "Relative Luminance and APCA contrast"],
      image: { src: "pbix-a11y", alt: "The PBIX A11y home page: a free, browser-based Power BI accessibility checker with buttons to run an audit or see what is checked, a privacy notice, and cards for featured articles and an Inclusion Awards 2026 nomination." },
      primary: { label: "Open PBIX A11y", url: "https://pbiaudits.com/" },
      links: [
        { label: "Inclusive Awards 2026 nomination", url: "https://inclusiveawards.co.uk/nominate/44843/" },
        { label: "Microsoft Fabric Community post", url: "https://community.fabric.microsoft.com/t5/Power-BI-Community-Blog/Turning-a-Real-World-Lesson-into-PBIX-A11y-for-Power-BI/bc-p/5176791#M7653" }
      ]
    },
    {
      title: "Galaxy Maths Quest",
      summary: "A free, child-safe, multilingual maths platform for neurodivergent learners. A calm, galaxy-themed, distraction-free design with quests for times tables, number bonding, fractions and data challenges.",
      status: "Live and free",
      note: "Available in English, Portuguese, Spanish and German, with dark and light modes.",
      tools: ["Lovable", "Copilot", "WCAG 2.1 AA"],
      image: { src: "galaxy-maths-quest", alt: "The Galaxy Maths Quest home page: a dark, space-themed screen with the title, a short welcome, buttons to create an account, log in or play as a guest, and a glowing golden rocket illustration." },
      primary: { label: "Visit Galaxy Maths Quest", url: "https://galaxyquestmath.com/" },
      links: []
    },
    {
      title: "STEM Demystified",
      summary: "A publicly accessible platform that shares real stories of women in STEM, aimed at children. It includes a 3D interactive globe of role model locations, ambassador showcases, and directories for schools and non-profits, with children's privacy as a core design constraint.",
      status: "Live",
      note: "Available in English, Spanish, Brazilian Portuguese and German. Built as a Progressive Web App.",
      tools: ["Lovable", "Claude", "Row-Level Security", "WCAG 2.2 AA"],
      image: { src: "stem-demystified", alt: "The STEM Demystified welcome screen: the headline 'Real Women. Real Stories. A World of Possibilities.', a short description of the storytelling platform, an illustration of a lightbulb above an open book, and a Next button." },
      primary: { label: "Visit STEM Demystified", url: "https://stemdemystified.com/" },
      links: [
        { label: "Technology Books for Children (featured charity)", url: "https://technologybooksforchildren.org/" }
      ]
    }
  ],

  projects: [
    {
      id: "carbon-ledger",
      title: "Carbon Ledger",
      kind: "Interactive CO₂ emissions dashboard",
      summary: "45 years of global fossil CO₂ emissions, explored at a glance.",
      tools: ["Power BI", "DAX", "Accessibility"],
      description: [
        "An accessible Power BI dashboard showing 45 years of fossil CO₂ emissions (1980 to 2025) by country, continent and fuel, built on real data from the Global Carbon Project via Our World in Data. The goal was to make a large global dataset easy to explore at a glance.",
        "I built an animated globe in DAX with no custom visuals, KPI cards with year-on-year and long-term change, and a summary that rewrites itself as you filter.",
        "Accessibility was built in: a Play/Pause control for the animation (WCAG 2.2.2), dynamic alt text on every chart, readable fonts and colour-safe indicators."
      ],
      images: [
        { src: "carbon-ledger-1", alt: "Carbon Ledger dashboard summary page. A headline says the world released 37.7 billion tonnes of fossil CO2 in 2025, the most in 45 years. Four KPI cards show total CO2 of 37,748 megatonnes, China as largest emitter at 32.9 percent, 4.6 tonnes per person, and a 101 percent rise since 1980. A dotted globe with Play and Pause buttons sits beside a line chart of global emissions climbing from 18.8 to 37.7 gigatonnes between 1980 and 2025." },
        { src: "carbon-ledger-2", alt: "Carbon Ledger details view. A stacked bar chart shows each continent's emissions share by fuel (coal, oil, gas, cement, flaring), with Asia most coal heavy. A ranked bar chart lists the top 10 emitters, led by China at 12,417 megatonnes, then the United States, India and Russia." }
      ]
    },
    {
      id: "sales-order-to-finance",
      title: "Sales Order-to-Finance",
      kind: "Sales and finance reconciliation dashboard",
      summary: "Sales, delivery and finance reconciled in one report.",
      tools: ["Power BI", "DAX", "Data profiling"],
      description: [
        "A multi-page Power BI report bringing sales orders, delivery and finance data together to track sales, profitability, on-time delivery and sales-to-ledger reconciliation month on month.",
        "I built the DAX measures, dynamic insight summary, bookmark views and visuals covering order-to-finance delays, channel and warehouse performance, delayed products, and monthly sales versus gross profit.",
        "Data profiling also uncovered 566 orders with impossible dates and finance coverage for only 131 of 2,500 orders, including ledger entries dated before their order. The report deliberately flags these issues rather than hiding them."
      ],
      images: [
        { src: "sales-finance-1", alt: "Sales and Financial Performance dashboard summary. KPI cards show total sales of 287.6 thousand pounds, gross profit of 177.7 thousand, a sales versus general ledger difference of 286.6 thousand with 99.6 percent unreconciled flagged, and on-time delivery of 46.8 percent. Charts show sales by channel and warehouse, year to date order-to-finance delay buckets, top five delayed products by warehouse, and monthly total sales against gross profit." },
        { src: "sales-finance-2", alt: "Order-to-finance timing breakdown, Insight tab. KPI cards show 2,500 total orders, an average order delay of 164.8 days, 61 slow orders, 637 orders with date errors and 2,369 orders pending finance. A callout states that 131 of 2,500 orders have a finance entry and 71 pre-date the order. Charts show average days from order to finance by month and on-time versus late orders by warehouse." },
        { src: "sales-finance-3", alt: "Order-to-finance timing breakdown, Transactions tab. A table lists order-level detail sorted by longest delay, with many rows marked Invalid Dates and order to transaction gaps of over 200 days highlighted." }
      ]
    },
    {
      id: "six-sigma-process-capability",
      title: "Six Sigma Process Capability",
      kind: "UK National Grid frequency dashboard",
      summary: "Process capability on UK grid frequency, using DAX functions.",
      tools: ["Power BI", "DAX UDFs", "Six Sigma", "NESO API"],
      description: [
        "A Power BI dashboard applying a reusable Six Sigma process control library, built as DAX user-defined functions, to UK electricity grid frequency data from NESO.",
        "The functions (DPMO, Sigma Level, Cp/Cpk, Pp/Ppk, control limits, Nelson Rules) are model-agnostic, and the report pulls the current month's readings dynamically via NESO's CKAN API.",
        "Cp/Cpk and Pp/Ppk diverge sharply in the results: short-term sigma understates true variation compared to the long-term, population-based measure, since consecutive one-second readings are highly autocorrelated."
      ],
      images: [
        { src: "six-sigma-1", alt: "National Grid Frequency Capability dashboard. Four KPI cards show a sigma level above 6, DPMO of 0, Cpk of 95.32 and Ppk of 2.22, each labelled World class or Capable. A control chart of grid frequency for 30 and 31 August 2026 shows readings around 50 hertz between upper and lower control limits, with a few points flagged by Nelson Rule 1." }
      ]
    },
    {
      id: "integrated-programme-controls",
      title: "Integrated Programme Controls",
      kind: "Programme controls dashboard, 8 pages",
      summary: "Schedule, earned value, cost and risk in one view.",
      tools: ["Power BI", "Primavera P6", "Earned value", "Risk"],
      description: [
        "A Power BI dashboard that brings schedule, earned value, milestones, cost, and risk into a single integrated programme controls view.",
        "Data was sourced from Primavera P6 exports, combined with actualised cost exports and a risk and opportunities register, so programme teams could track progress, spend, and risk exposure together in one place instead of switching between siloed source systems and tools."
      ],
      images: [
        { src: "programme-controls-1", alt: "Programme Controls Reporting landing page. KPI cards show milestone variance of minus 31.3 percent, schedule variance of minus 9.1 percent, EV progress variance of minus 2.5 percent, CPI 0.90, SPI 0.91 and remaining budget of 18.4 million pounds. A table breaks the figures down for four projects, and buttons navigate to the Earned Value, Milestones, Schedule, Change, Risk and Opportunities pages." },
        { src: "programme-controls-2", alt: "Earned Value Analysis page. KPI cards show planned value to date of 81.9 million pounds, earned value of 79.5 million, progress of 81.2 percent against 83.7 percent expected, and CPI of 0.90. Charts show a budget spending donut, actual spend versus budget per project, and planned versus earned value over time." },
        { src: "programme-controls-3", alt: "Milestone Analysis page. KPI cards show 6 total milestones, 2 completed, 4 expected, completion of 33.3 percent and a variance of minus 50 percent. A line chart tracks milestone movement for one project across versions, a bar shows 33.3 percent completed and 66.7 percent open or late, and a table lists upcoming milestones with baseline and forecast dates." },
        { src: "programme-controls-4", alt: "Schedule Analysis page. KPI cards show 974 activities started, 1,524 expected, 73 percent completion expected, 63.9 percent completion and an SPI of 0.91. An S-curve compares baseline and actual cumulative activity starts, a bar splits open and late from started activities, and a table lists activities in the next 30 days." },
        { src: "programme-controls-5", alt: "Schedule Breakdown page. A Gantt chart from 2023 to 2027 lists activities with planned finish, baseline variance in days behind or ahead, and progress, with bars for baseline, planned and completed work and a cut-off line for March 2025." },
        { src: "programme-controls-6", alt: "Change Analysis page. KPI cards show 17 approved and 3 pending changes, with 1.2 million pounds approved impact and 480 thousand pounds pending impact. A Pareto chart shows cost impact by change request, with a table of the largest approved requests by category such as design error and scope change." },
        { src: "programme-controls-7", alt: "Risk Analysis page. KPI cards show 14 open risks, 9 closed risks, costs of 453 thousand pounds, an average schedule impact of 59.52 and 9 risks closing in the next 90 days. A likelihood and impact heat map, a table of risks closing in the next 30 days, and a breakdown of open risks by work breakdown structure are shown." },
        { src: "programme-controls-8", alt: "Opportunities Realisation page. KPI cards show 35 realised opportunities, 24 open, 2.58 million pounds total cost realised and 6.08 million pounds total benefit expected. A cumulative column chart compares realised benefit with the baseline, beside a table of open opportunities ranked by expected benefit." }
      ]
    }
  ]
};
