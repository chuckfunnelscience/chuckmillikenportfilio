# Chuck Milliken – Portfolio

Personal portfolio website for **Charles "Chuck" Milliken**, Full Stack Web Developer based in Fairview, TX. The site showcases application development work, WordPress website projects, and professional experience.

## Overview

The portfolio is a single-page application built with **React 19**, **TypeScript**, and **Vite**. It features a dark, tech-inspired aesthetic using **Material UI v7**, lazy-loaded route-based code splitting, and a custom image gallery with lightbox support. A pre-build script auto-generates optimized thumbnails for all portfolio images.

## Pages

| Route | Description |
|---|---|
| `/` | Hero landing page with stats and a brief intro |
| `/application-portfolio` | Full-stack and mobile application projects with image galleries |
| `/website-portfolio` | WordPress and custom website projects |
| `/experience` | Work history and professional background |
| `/contact` | Contact form and links |

## Featured Projects

- **TradeCatalyst RN** – Cryptocurrency trading mobile app converted from Svelte PWA to React Native / Expo
- **EJ's Live Auction** – Real-time auction platform built with Next.js, Socket.IO, and a Node.js WebSocket server
- **Storage Auction Solutions** – SvelteKit + Firebase replacement for a legacy ColdFusion auction system
- **Funnel Science SaaS** – Flagship predictive sales & marketing analytics platform (tech details under NDA)
- **TradeCatalyst PWA** – Original Svelte-based cryptocurrency trading progressive web app

## Tech Stack

- **Framework:** React 19, TypeScript
- **Build:** Vite
- **UI:** Material UI v7, Emotion
- **Routing:** React Router v7
- **Thumbnails:** Custom Node.js pre-build script (`scripts/generate-thumbnails.mjs`)

## Getting Started

```bash
npm install
npm run dev
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Generate thumbnails, type-check, and build for production |
| `npm run thumbnails` | Run the thumbnail generator manually |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
