import type { GalleryImage } from '../components/PortfolioGallery'

export type ApplicationProject = {
  title: string
  summary: string[]
  stack: string
  images: GalleryImage[]
}

export type WebsiteProject = {
  name: string
  url: string
  tagline: string
  images: GalleryImage[]
}

const localImage = (path: string, alt: string): GalleryImage => ({
  src: `/img/${path}`,
  alt,
  thumbnailSrc: `/img/thumbs/${path}`,
})

export const applicationProjects: ApplicationProject[] = [
  {
    title: 'Automated Trading App – Conversion to React Native',
    summary: [
      'This Mobile Application provides a streamlined interface for an advanced cryptocurrency trading system.',
      'The frontend is a React Native Application in TypeScript, converted from the original Svelte PWA, built with Expo and UI Kitten in a single afternoon.',
      'The backend uses optimized algorithms, AI, and custom rules to automate trades based on market performance. The top‑performing bots are made available to app users. Access to app functions is provided by a LAMP-based API.',
    ],
    stack: 'React Native, TypeScript, Expo, UI Kitten, LAMP API',
    images: [
      localImage('portfolio/tradecat_rn/Screenshot_20260304_193006_tradecatalyst.jpg', 'TradeCatalyst RN - Dashboard View'),
      localImage('portfolio/tradecat_rn/Screenshot_20260304_193021_tradecatalyst.jpg', 'TradeCatalyst RN - Trade View'),
      localImage('portfolio/tradecat_rn/Screenshot_20260304_193033_tradecatalyst.jpg', 'TradeCatalyst RN - Detail View'),
      localImage('portfolio/tradecat_rn/Screenshot_20260304_192716_tradecatalyst.jpg', 'TradeCatalyst RN - Bot Selection'),
      localImage('portfolio/tradecat_rn/Screenshot_20260304_192738_tradecatalyst.jpg', 'TradeCatalyst RN - Bot Settings'),
      localImage('portfolio/tradecat_rn/Screenshot_20260304_192757_tradecatalyst.jpg', 'TradeCatalyst RN - Account View'),
    ],
  },
  {
    title: 'Live Auction Application',
    summary: [
      'This live auction application was built for a specific client while being architected for reuse.',
      'Bidders can place bids before or during the live event. Clerks manage live auctions, accepting both online and in‑house floor bids. The system includes an auction timer to support clerk workflow, and clerks can issue "Fair Warning" and other notifications to online bidders.',
      'The frontend is built with React/Next.js, Socket.IO, and Bootstrap 5.',
      'The backend is a LAMP-based API compliant with the OpenAPI Specification.',
      'Real-time event capabilities are provided by a Node.js, event-driven WebSocket server using Socket.IO, which decouples live events from LAMP API updates. This server also triggers toast notifications and sends system emails via SendGrid.',
    ],
    stack: 'React, Next.js, Socket.IO, Bootstrap 5, LAMP API, Node.js, SendGrid',
    images: [
      localImage('portfolio/ejs/Home.png', 'EJs Auctions - Home page'),
      localImage('portfolio/ejs/UpcomingAuctions.png', 'EJs Auctions - Upcoming Auctions'),
      localImage('portfolio/ejs/Auction.png', 'EJs Auctions - Auction Details'),
      localImage('portfolio/ejs/Lot.png', 'EJs Auctions - Lot Details'),
      localImage('portfolio/ejs/LiveAuctions.png', 'EJs Auctions - Live Auctions Today'),
      localImage('portfolio/ejs/BidDash.png', 'EJs Auctions - Bidder Dashboard'),
      localImage('portfolio/ejs/BidWon.png', 'EJs Auctions - Bidder Lots Won'),
      localImage('portfolio/ejs/WatchList.png', 'EJs Auctions - Bidder Watch List'),
      localImage('portfolio/ejs/LiveWait.png', 'EJs Auctions - Bidder Waiting Screen'),
    ],
  },
  {
    title: 'Storage Auction Application',
    summary: [
      'This auction application was built for a storage auction provider to replace an outdated and insecure ColdFusion-based system.',
      'The new solution enables both the provider and its clients to post auctions for delinquent storage unit rentals, similar to those featured on recent television shows. The provider can also publish schedules for live, in-person auctions.',
      'The application was developed using Google Firebase services (Firestore, Functions, Cloud Storage), SvelteKit, and Tailwind CSS, with payments integrated via PayPal.',
    ],
    stack: 'SvelteKit, Firebase (Firestore, Functions, Cloud Storage), Tailwind CSS, PayPal',
    images: [
      localImage('portfolio/sas/SASHome.png', 'Storage Auction Solutions - Home Page Features'),
      localImage('portfolio/sas/SASAuctions.png', 'Storage Auction Solutions - Online Auctions'),
      localImage('portfolio/sas/SASUnit.png', 'Storage Auction Solutions - Online Unit Details'),
      localImage('portfolio/sas/SASLive.png', 'Storage Auction Solutions - In-Person Auction List'),
    ],
  },
  {
    title: 'Predictive Sales & Marketing Analytics',
    summary: [
      "Funnel Science, LLC's flagship product is the Funnel Science SaaS Application, a unified platform that brings together CRM, end‑to‑end sales tracking, marketing analytics, call center capabilities, phone call tracking, forms, reporting, and other core business functions.",
      'Used internally, by marketing agencies, and by clients, the application tracks each stage of the sales funnel—from ad to website to phone call and/or form submission—enabling teams to manage prospects, convert them to customers, and track sales in one system.',
      'Over time, the platform has been enhanced with a full UI refresh, PWA compliance, push notifications, scheduling, web chat, call requests, and more. It runs in any modern browser and can be installed as a desktop or mobile app.',
      'Technology details are under NDA.',
    ],
    stack: 'Under NDA',
    images: [
      localImage('portfolio/fs/FSDash.png', 'Funnel Science SaaS Application'),
    ],
  },
  {
    title: 'Automated Trading App',
    summary: [
      'This Progressive Web Application provides a streamlined interface for an advanced cryptocurrency trading system.',
      'The frontend is a single‑page application built with Svelte and Bootstrap 5, accessible in any browser and installable on desktop and mobile devices.',
      'The backend uses optimized algorithms, AI, and custom rules to automate trades based on market performance. The top‑performing bots are made available to app users. Access to app functions is provided by a LAMP-based API.',
    ],
    stack: 'Svelte, Bootstrap 5, LAMP API',
    images: [
      localImage('portfolio/tradecat/Dash.png', 'TradeCatalyst - Dashboard View'),
      localImage('portfolio/tradecat/DashMob.png', 'TradeCatalyst - Dashboard Mobile'),
      localImage('portfolio/tradecat/History.png', 'TradeCatalyst - Trade History View'),
      localImage('portfolio/tradecat/HistoryMobile.png', 'TradeCatalyst - Trade History Mobile'),
      localImage('portfolio/tradecat/Holdings.png', 'TradeCatalyst - Holdings View'),
      localImage('portfolio/tradecat/HoldingsMobile.png', 'TradeCatalyst - Holdings Mobile'),
      localImage('portfolio/tradecat/Settings.png', 'TradeCatalyst - Settings View'),
      localImage('portfolio/tradecat/SettingsMobile.png', 'TradeCatalyst - Settings Mobile'),
    ],
  },
  {
    title: 'Logistics Company Communication App',
    summary: [
      'This application was developed to reduce dispatching call volume from drivers for an oil and gas logistics company. It enables drivers to communicate their availability, request loads, request assistance, and show status through an easy‑to‑use interface, without needing to call in.',
      'The frontend is a single‑page Progressive Web Application, built using Svelte and Bootstrap.',
      'The backend is built with Google Firebase, powering real‑time communication. Performance metrics, including deliveries completed and earnings, are accessed from an API provided by the company\'s ERP system.',
    ],
    stack: 'Svelte, Bootstrap, Firebase, ERP API',
    images: [
      localImage('portfolio/clear/AdminHome.png', 'Sisu Clear - Dispatch Home View'),
      localImage('portfolio/clear/AdminUsers.png', 'Sisu Clear - Dispatch Users View'),
      localImage('portfolio/clear/AdminReports.png', 'Sisu Clear - Dispatch Reports View'),
      localImage('portfolio/clear/AdminTools.png', 'Sisu Clear - Dispatch Tools View'),
      localImage('portfolio/clear/DriverDash.png', 'Sisu Clear - Driver Dashboard View'),
      localImage('portfolio/clear/DriverContact.png', 'Sisu Clear - Driver Contact View'),
      localImage('portfolio/clear/DriverInfo.png', 'Sisu Clear - Driver User Info View'),
      localImage('portfolio/clear/DriverAcct.png', 'Sisu Clear - Driver Accounting View'),
    ],
  },
  {
    title: 'Funnel Health Score',
    summary: [
      'This single-page application was developed to quickly highlight the most common weaknesses in the most critical part of the sales funnel: the website.',
      'It identifies common issues with Search Engine Optimization, UX practices, keyword relevance, and provides SERP analysis.',
      'The frontend was developed using Svelte and Bootstrap, then embedded into a PHP wrapper page.',
      'The backend is a LAMP-based API for web scraping, analysis, and calling API endpoints from a SERP analysis service provider.',
    ],
    stack: 'Svelte, Bootstrap, PHP, LAMP API',
    images: [
      localImage('portfolio/fhs/FHSStart.png', 'Funnel Health - Start Form'),
      localImage('portfolio/fhs/FHSEnd.png', 'Funnel Health - Score'),
    ],
  },
]

export const websiteProjects: WebsiteProject[] = [
  {
    name: 'Funnel Science',
    url: 'https://www.funnelscience.com/',
    tagline: 'Sales and Marketing Experts',
    images: [localImage('websites/funnelsciencepart.png', 'Funnel Science homepage preview')],
  },
  {
    name: 'Starkey Hollow Whitetails',
    url: 'https://www.starkeyhollowwhitetails.com/',
    tagline: 'Trophy Deer Hunting Trips',
    images: [localImage('websites/starkeyhollowwhitetailspart.png', 'Starkey Hollow Whitetails homepage preview')],
  },
  {
    name: 'Gator Hunting Guide',
    url: 'https://gatorhuntingguide.com/',
    tagline: 'Alligator Hunting Trips',
    images: [localImage('websites/gatorhuntingguidepart.png', 'Gator Hunting Guide homepage preview')],
  },
  {
    name: 'Xtreme Collision',
    url: 'https://www.xtremecollision.com/',
    tagline: 'Collision Repair Center',
    images: [localImage('websites/xtremecollisionpart.png', 'Xtreme Collision homepage preview')],
  },
  {
    name: 'The Dent Center',
    url: 'https://thedentcenter.com/',
    tagline: 'Professional Hail Damage Repair',
    images: [localImage('websites/thedentcenterpart.png', 'The Dent Center homepage preview')],
  },
  {
    name: 'Deer Run Camps',
    url: 'https://deerrun.camp/',
    tagline: 'Christian Seasonal Camps and Retreats',
    images: [localImage('websites/deerrunpart.png', 'Deer Run Camps homepage preview')],
  },
  {
    name: 'Ohio Roofing Contractors',
    url: 'https://ohioroofingcontractors.com/',
    tagline: 'Roofing Contractors',
    images: [localImage('websites/ohioroofingcontractorspart.png', 'Ohio Roofing Contractors homepage preview')],
  },
  {
    name: 'Mojobella Fly Fishing',
    url: 'https://mojobellaflyfishing.com/',
    tagline: 'Fly Fishing Tours',
    images: [localImage('websites/mojobellaflyfishingpart.png', 'Mojobella Fly Fishing homepage preview')],
  },
  {
    name: 'Math Tutoring by Paige',
    url: 'https://mathtutoringbypaige.com/',
    tagline: 'Private Math Tutoring',
    images: [localImage('websites/mathtutoringbypaigepart.png', 'Math Tutoring by Paige homepage preview')],
  },
  {
    name: 'Trade Catalyst',
    url: 'https://tradecatalyst.com/',
    tagline: 'Automated Cryptocurrency Trading Platform',
    images: [localImage('websites/tradecatalystpart.png', 'Trade Catalyst homepage preview')],
  },
  {
    name: 'Miami Boats Charters',
    url: 'https://miamiboatscharters.com/',
    tagline: 'Boat Charters in Miami FL',
    images: [localImage('websites/miamiboatpart.png', 'Miami Boats Charters homepage preview')],
  },
  {
    name: 'First Aid Training Center',
    url: 'https://firstaidtrainingcenter.net/',
    tagline: 'First Aid Training',
    images: [localImage('websites/firstaidtrainingcenterpart.png', 'First Aid Training Center homepage preview')],
  },
  {
    name: 'Wright Way Solar',
    url: 'https://wright-way-solar.com/',
    tagline: 'Solar Power System Installation',
    images: [localImage('websites/wright-way-solarpart.png', 'Wright Way Solar homepage preview')],
  },
  {
    name: 'Best Movers Dallas',
    url: 'https://bestmoversdallas.com/',
    tagline: 'Professional Moving Services',
    images: [localImage('websites/bestmoversdallaspart.png', 'Best Movers Dallas homepage preview')],
  },
  {
    name: 'Mindless Dreck',
    url: 'https://mindlessdreck.com/',
    tagline: 'Personal Blog',
    images: [localImage('websites/mindlessdreckpart.png', 'Mindless Dreck homepage preview')],
  },
]
