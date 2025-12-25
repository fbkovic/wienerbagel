# WIENERBAGEL

A modern, NYC-style landing page for a Bagel Café in Vienna.

## Features
- **Hero Section**: Strong branding statement with logo.
- **USP Section**: Key selling points.
- **History Timeline**: Visual journey from 1683 Vienna to NYC and back.
- **Menu**: Dynamic menu fetched from backend (Classic, Signature, Sweet, Drinks).
- **Location**: Address and opening hours.
- **i18n**: Full German/English bilingual support with language switcher (DE/EN).

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express + Drizzle ORM + PostgreSQL
- **Database**: PostgreSQL (with seed data for menu items)

## Setup
- **Install**: `npm install`
- **Database**: `npm run db:push`
- **Run**: `npm run dev`

## Recent Changes
- Implemented full i18n system with German/English translations and language switcher (Dec 25, 2025)
- Integrated custom Wienerbagel 1683 logo into Navbar and Hero sections (Dec 25, 2025)
- Added historical imagery to the Story Timeline section using attached assets (Dec 25, 2025)
- Enhanced visual hierarchy with logo placement and animated scroll reveals (Dec 25, 2025)

## Architecture
- **i18n**: `client/src/lib/i18n.tsx` - Context provider with translations, `client/src/components/LanguageSwitcher.tsx` - DE/EN toggle
- **Components**: All UI components use the `useI18n().t()` hook for translated strings
