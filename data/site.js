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
      status: "Live and free",
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
      id: "practice-on-a-page",
      title: "Practice on a Page",
      kind: "Practice performance and outlook report",
      summary: "How four practices of an engineering consultancy perform against revenue targets, with a clear outlook for the months ahead.",
      tools: ["Power BI", "DAX", "Deneb", "Accessible design"],
      description: [
        "A Power BI report that gives a Chief Operating Officer and four Practice Leads one page to answer “are we on track, and what is driving it?”, with the detail a click away. It was built for a reporting and insight exercise, and I treated it as a design problem as much as a build. The data is a fictional engineering consultancy with four practices: Structures, Water, Transport and Environment.",
        "I started from the questions leaders ask (where are we against target, what will the month and next quarter look like, and why) and designed the model and the page around them. Each chart is titled with the question it answers, and plain status labels (Met target, Missed target, On track, At risk, Off track) mean nobody has to decode a colour scale. One summary page replaces a separate current-month page."
      ],
      highlights: {
        title: "What this showcases",
        items: [
          { label: "Data modelling", text: "a star schema of seven tables, with dimensions for practice, resource and date, and facts for daily capacity and the pipeline. Targets are derived from working days (weekdays minus UK bank holidays), utilisation and day rate, not typed in, so they reconcile to the data." },
          { label: "DAX", text: "measures organised into display folders, with no unused measures left in the model. Expected Outlook adds committed revenue to stage-weighted pipeline, so the report answers “will we hit target?” and not only “where are we now?”. The headline and chart subtitles are written by DAX, so they rewrite themselves as the data changes. Three data check measures reconcile totals against source." },
          { label: "Deneb", text: "the card flip interaction is built in Vega-Lite. Each card shows the headline on the front and the working on the back. I used Deneb where native visuals could not give the flip." },
          { label: "Interaction design", text: "a slicer with a Go button handles page navigation. Bookmarks drive the Table View and Trend toggles, so each chart has a numbers equivalent." },
          { label: "Governance and documentation", text: "a metrics dictionary table, shown on the Definitions page, defines every measure in plain language." },
          { label: "Source control", text: "the report is a PBIP/PBIR project, so the model and report definition are text files that can sit in Git and be reviewed." },
          { label: "Accessibility", text: "dynamic alt text, status shown by label as well as colour, readable fonts and a logical reading order." }
        ]
      },
      images: [
        { src: "practice-on-a-page-1", alt: "Practice Reporting for November 2026. The header says 76% of the £1.75 million target is delivered or booked and the expected outlook is 104%, with Structures highest at 118% and Environment lowest at 81%. Four cards show a revenue target of £1,746,520 over 21 working days and 87.8 effective FTE, committed revenue of £1,331,000 (£626,000 delivered and £705,000 to deliver), an expected outlook of 103.7% (£63,880 above target), and a next quarter status of At risk with a 97% outlook and 10% pipeline dependency. A stacked bar chart shows each practice's delivered, booked and pipeline needed share of target: Environment is least secured at 60% and Structures most at 88%. A column chart shows committed revenue against target for November 2026 to February 2027. No month reaches target, and February 2027 is lowest at 61%." },
        { src: "practice-on-a-page-2", alt: "Practice Reporting for November 2026 with the cards flipped to trend and table views. The three KPI cards become small line charts of revenue target, committed revenue and expected outlook from March to February, and the next quarter status card shows At risk with a 97% outlook and 10% pipeline dependency. A table shows each practice's target, committed amount, committed percentage, outlook percentage and status: Structures at 117.7% and Water at 101.7% are On track, Transport at 95.1% is At risk, and Environment at 80.9% is Off track. A second table shows each fiscal quarter: Q1 and Q2 missed target, Q3 is On track at 101.7%, and Q4 is At risk with an outlook of 97.0% and £156,000 short." },
        { src: "practice-on-a-page-3", alt: "Overview for FY27 Q4. The header says 66% of the £5.14 million target is booked, pipeline lifts the expected outlook to 97%, but 32% of that outlook still has to be won. Cards show a next quarter outlook of 97.0% with £3,409,000 booked, the top five deals making up 32% of pipeline with an early stage share of 51%, and a status of At risk with 10% pipeline dependency. Filters for practice and stage sit beside the cards. A column chart shows committed revenue cover by month: none of the four months reaches target, and February 2027 is lowest at 61%. A table lists fictional opportunities with stage, month, adjusted pipeline and delivery risk, shown as a text label and an icon. The largest deal is £170,000." },
        { src: "practice-on-a-page-4", alt: "Practice Drivers and Trends. Four cards show headcount of 88 with 87.5 effective FTE, target per FTE of £238,674 with an average day rate of £1,184, realised utilisation of 79.9% against an 80% target, and year-to-date delivery at 99.8% of target (£13,980,000). A table compares Structures, Water, Transport and Environment on headcount, effective FTE, day rate, available resource days, revenue target, share of total target, year-to-date delivery and realised utilisation. Structures delivers 108.3% of target and Environment 86.1%. A stacked bar chart shows the role mix behind this month's target by practice, with Engineer carrying the largest share at 55%." },
        { src: "practice-on-a-page-5", alt: "Practice Drivers and Trends with the view switched to trends. The same four cards sit above two charts. A column chart compares committed revenue and expected outlook as a percentage of target for each fiscal quarter against a 100% target line: committed is 99.3% in Q1, 99.7% in Q2, 92.8% in Q3 and 66.3% in Q4, while the outlook is 99.3%, 99.7%, 101.7% and 97.0%. A line chart compares monthly revenue target with committed revenue from March 2026 to February 2027. Committed revenue reaches target in 5 of 12 months, and the biggest shortfall is February 2027, £668,000 below target." },
        { src: "practice-on-a-page-6", alt: "The Definitions page, a metrics dictionary. A table answers “What does each metric mean?” with columns for area, metric, what it means and unit, and two dropdown filters to select a metric or an area. Rows shown include Current Month Start, Working Days, Revenue Target and Gross Capacity Value, grouped under Period and context and Target and capacity." },
        { src: "practice-on-a-page-7", alt: "The Practice Reporting landing slide for November 2026, on a purple background. Three white cards, each with an arrow, link to the report sections: Practice on a Page, Next Quarter and Practice Drivers. Each card gives an overview in plain language. Practice on a Page says 76% of the £1.75 million target is delivered or booked and the expected outlook is 104%, with Structures highest at 118% and Environment lowest at 81%. Next Quarter says 66% of the £5.14 million FY27 Q4 target is booked, and a pipeline lifts the outlook to 97%, but 32% of that outlook still has to be won. Practice Drivers says Engineering has delivered 100% of target for the months completed, with Structures highest at 108%." }
      ]
    },
    {
      id: "european-coffee-roastery",
      title: "European Coffee Roastery Performance",
      kind: "Sales, delivery and finance timing report",
      summary: "How a specialty coffee roaster is doing this month, and where to look first.",
      tools: ["Power BI", "DAX", "Deneb", "PBIP / TMDL", "Accessible design"],
      description: [
        "A Power BI report on sales, delivery and finance timing for a specialty coffee roaster shipping from eight European warehouses.",
        "The question I designed around was: \"How is the business doing this month, and where should I look first?\""
      ],
      highlights: [
        { title: "The thought process", items: [
          { label: "Answer first, explore second", text: "Summary is the main view. It leads with a plain-English headline, then KPI cards with month-over-month change, a rolling 12-month trend and the top warehouses. Detail is one click away on its own tab, so the first screen stays calm." },
          { label: "Make change visible", text: "A single number says little, so each KPI card shows how it moved against the previous month. Flipping a card shows the 12-month average and the shape of the trend behind it." },
          { label: "Show where, not just how much", text: "Sales and delivery are tied to place, so the Warehouse Map shows both at once. Bubble size is sales and colour is on-time delivery, and you can play through the months to see the pattern develop." },
          { label: "Explain the gap between sales and finance", text: "The Details page asks where orders get stuck before they reach the ledger, with the slowest orders listed first." },
          { label: "Say what matters in words", text: "Headlines, chart subtitles and summaries are written as measures, so they update with every filter and never go stale." },
          { label: "Colour that works for everyone", text: "Status uses navy, blue and orange rather than red and green, and body text never drops below 20pt on the 1920x1200 canvas." }
        ] },
        { title: "Technical showcase", items: [
          { label: "Deneb (Vega) visuals", text: "Flip-card KPIs that switch between a headline view and a trend view on click, a rolling 12-month chart with a last-year comparison and a margin strip, and an animated dotted map of Europe with play, pause and step controls." },
          { label: "Data modelling", text: "A star schema with order and general ledger facts, plus a small disconnected offset table that drives every month-over-month and trend calculation, so the cards and the rolling chart share one definition of month." },
          { label: "DAX", text: "Time-intelligence measures built around a focus month, finance-aware month logic for the delay analysis, and text measures that write the insights for each page." },
          { label: "PBIP / TMDL", text: "The project is built and versioned as plain files, so measures, visuals and layout can be reviewed and changed like code." }
        ] }
      ],
      images: [
        { src: "coffee-roastery-1", alt: "The Summary page of the European Coffee Roastery Performance report, with a dark teal header and a page navigation dropdown. A headline says sales in September 2026 reached 159.9 thousand pounds, 13.4 percent above August and 26.8 percent above September 2025, led by London, with gross margin of 42.9 percent, Madrid weakest on delivery at 83.9 percent on time, and 3.8 percent of sales not yet matched in the general ledger. Five flip cards show Total Sales 159.9 thousand pounds, Gross Profit 68.6 thousand, Sales vs GL Difference 6.0 thousand, GL Net Profit 57.9 thousand and On-Time 92.5 percent, each with a sparkline and change against August. A bar chart ranks the top five warehouses by sales: London 37.7 thousand, Rotterdam 22.4 thousand, Manchester 21.8 thousand, Paris 21.2 thousand and Hamburg 19.7 thousand. A rolling 12-month column chart shows sales against last year with month-over-month change labels, and a gross margin line below it reaching 42.9 percent in September." },
        { src: "coffee-roastery-2", alt: "The Summary page with four KPI cards flipped to their trend view, each showing a 12-month average and 12 small bars from October 2025 to September 2026: Total Sales average 136.0 thousand pounds, Gross Profit 55.1 thousand, Sales vs GL Difference 5.1 thousand and GL Net Profit 45.0 thousand. The On-Time card is still on its headline view at 92.5 percent. In place of the rolling chart are a bar chart of year-to-date order-to-finance delay by bucket (no transaction 16, 1 to 7 days 289, 8 to 14 days 106, 15 to 30 days 44, over 30 days 11) and a heat table of the top five delayed products by warehouse, with Rotterdam and Madrid showing the highest values." },
        { src: "coffee-roastery-3", alt: "The Warehouse Map View page for October 2026. A headline says 2026 so far, January to October, sales reached 1.34 million pounds, 41.6 percent above the same period in 2025, with London leading on 324.9 thousand pounds and 90.0 percent of orders on time across 8 warehouses. A dotted map of Europe shows a bubble for each warehouse, sized by sales and coloured by on-time delivery, with a legend for 90 percent or more, 85 to 90 percent and below 85 percent, plus previous, play and next buttons and a month timeline. Beside it, a bar chart lists sales and on-time rate for each warehouse, from London at 41.8 thousand pounds and 87 percent to Madrid at 10.8 thousand and 83 percent, above a small area chart of total monthly sales." },
        { src: "coffee-roastery-4", alt: "The Order-to-Finance Timing and Delays page. Seven filters sit across the top: timing bucket, order date, customer type, warehouse, product, year and month. Five flip cards show Total Orders 466, Average Order Delay 8.9 days, Slow Orders over 7 days 161, Orders with Date Errors 3 and Orders Pending Finance 16, each with a sparkline and change against August. A line chart shows average days from order to finance by month from January to October 2026, peaking at 9.8 in August and falling to 8.7 in October. A bar chart compares on-time and late orders by warehouse, with London highest on 103 on time and 5 late." }
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
