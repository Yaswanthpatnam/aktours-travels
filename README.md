# 🚖 AK Tours & Travels — Bengaluru Car Booking Web Application

A modern, high-converting car rental and cab booking web application built for **AK Tours & Travels**, tailored specifically for **Namma Bengaluru and Karnataka travel** (Kempegowda Airport BLR transfers, local hourly rentals, and scenic South India outstation packages).

---

## 📌 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [Data Model & Configuration](#data-model--configuration)
- [Booking & Fare Calculation Engine](#booking--fare-calculation-engine)
- [Getting Started](#getting-started)
- [Scripts & Commands](#scripts--commands)
- [How to Customize](#how-to-customize)
- [Deployment Guide](#deployment-guide)

---

## 📖 Overview

**AK Tours & Travels** is a premier car rental and taxi service operating from Vivek Nagar, Bengaluru. The web application is engineered to provide an intuitive, high-trust digital booking experience for:
- **Kempegowda International Airport (BLR)** transfers (Terminals 1 & 2) with 24/7 flight monitoring.
- **City Hourly Rentals** (4h/40km, 8h/80km, 12h/120km) for tech meetings, shopping, and weddings.
- **Karnataka Outstation Road Trips** (Mysore, Coorg, Chikmagalur, Nandi Hills, Ooty, Wayanad, Tirupati).
- **Corporate Commutes** for IT corridors across Electronic City, Whitefield, Outer Ring Road, and Manyata Tech Park with official GST invoicing.

---

## ✨ Key Features

1. **Bilingual Bengaluru Aesthetic**:
   - Warm Karnataka cultural identity (*"ನಮ್ಮ ಬೆಂಗಳೂರು"* and *"ಬೆಂಗಳೂರಿನ ವಿಶ್ವಾಸಾರ್ಹ ಕ್ಯಾಬ್ ಸೇವೆ"*).
   - Pre-loaded Bengaluru hubs (Indiranagar, Koramangala, Whitefield, Electronic City, HSR Layout, Majestic KSR, etc.).

2. **Interactive 4-in-1 Booking Engine**:
   - **Airport Transfer (BLR)**: Doorstep to terminal with flight number input and zero wait charges.
   - **City Hourly Rental**: Configurable duration packages with live rates.
   - **Karnataka Outstation**: Multi-day trip selection with automatic distance and driver allowance estimation.
   - **Corporate & Events**: Dedicated executive chauffeur service.

3. **Dynamic Live Fare Estimator**:
   - Real-time quote generation showing transparent price breakdowns (Base fare, included distance, per-km surcharge, driver bata, and toll notes).

4. **1-Click WhatsApp Booking Dispatch**:
   - Automatically formats trip details into a clean, structured booking request sent directly to the dispatch desk (`+91 96116 71318`).

5. **Interactive Fleet Showcase**:
   - Filter vehicles: **All**, **Sedan** (Swift Dzire, Toyota Etios), **SUV** (Toyota Innova, Innova Crysta), and **Group** (Force Tempo Traveller).
   - Detailed specifications: Passenger capacity, luggage boot capacity, AC type, per-km rate, and airport flat rates.
   - Two-way state sync: Clicking *"Select & Book"* on any vehicle instantly populates and focuses the car in the booking engine.

6. **Curated Karnataka Tour Packages**:
   - Detailed trip itineraries with route distance, duration, highlights, starting prices, and direct WhatsApp booking inquiry.

7. **Trust & Conversion Elements**:
   - **Zero Surge Guarantee**: No rain or peak-hour surges.
   - **Google 4.9★ Reviews**: Real testimonials from IT managers, families, and commuters.
   - **Interactive FAQ Accordion**: Addresses expressway tolls, airport booking lead times, and cancellations.
   - **Desktop Floating Actions + Mobile Bottom Bar**: 1-tap direct calling and WhatsApp chat on smartphones.

---

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Inter*)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: ESLint 10 with React Refresh and Hooks rules

---

## 📁 Project Directory Structure

```text
ak-tours-/
├── public/                     # High-resolution vehicle and destination images
│   ├── ak.png                  # AK Tours company logo
│   ├── crysta.png              # Toyota Innova Crysta asset
│   ├── desire.png              # Maruti Suzuki Swift Dzire asset
│   ├── desktop.png             # Fleet banner / Chikmagalur preview
│   ├── devanahalli.png         # BLR Airport / Nandi Hills preview
│   ├── etios.png               # Toyota Etios asset
│   ├── innova.png              # Toyota Innova asset
│   ├── kanyakumari.png         # Outstation / Coorg scenic asset
│   ├── mysore.png              # Mysore Palace tour asset
│   └── tempo.png               # Force Tempo Traveller asset
├── src/
│   ├── components/             # Modular React UI components
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.jsx            # Hero section with trust badges and BLR airport pill
│   │   ├── Booking.jsx         # 4-tab booking engine + dynamic fare estimator
│   │   ├── Services.jsx        # 4-pillar service matrix (Airport, Outstation, City, Corporate)
│   │   ├── Cars.jsx            # Filterable fleet cards with specs & selection binding
│   │   ├── Packages.jsx        # Curated Karnataka tour packages
│   │   ├── WhyUs.jsx           # Value propositions & metrics counter strip
│   │   ├── Testimonials.jsx    # 4.9★ Google customer reviews
│   │   ├── FAQ.jsx             # Interactive FAQ accordion
│   │   ├── Contact.jsx         # Bengaluru office details, phone links & query form
│   │   ├── FloatingButtons.jsx # Desktop floating pills & mobile sticky bottom bar
│   │   └── Footer.jsx          # Comprehensive footer with Bengaluru service zones
│   ├── data/
│   │   └── bookingData.js      # Centralized database for fleet, packages, FAQs, and contact info
│   ├── App.jsx                 # Main layout assembling components with state sharing
│   ├── index.css               # Modern typography, glassmorphism utilities & themes
│   └── main.jsx                # React DOM root entrypoint
├── index.html                  # HTML entrypoint with SEO meta tags and Google Fonts
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS setup for Tailwind CSS v4
├── tailwind.config.js          # Tailwind theme configuration
└── vite.config.js              # Vite bundler configuration
```

---

## 🗄️ Data Model & Configuration

All business data, fleet specifications, rates, locations, packages, and contact numbers are centralized in [`src/data/bookingData.js`](src/data/bookingData.js).

### 1. Company Information (`COMPANY_DETAILS`)
```javascript
export const COMPANY_DETAILS = {
  name: "AK Tours & Travels",
  kannadaName: "ಎಕೆ ಟೂರ್ಸ್ & ಟ್ರಾವೆಲ್ಸ್",
  phonePrimary: "+91 96116 71318",
  phonePrimaryRaw: "919611671318",
  phoneSecondary: "+91 89700 94480",
  whatsappNumber: "919611671318",
  email: "aktravelsbangalore@gmail.com",
  address: "#118, 28th Cross, L.R. Nagar, Vivek Nagar Post, Bengaluru, Karnataka - 560047",
  operatingHours: "24 Hours / 7 Days a Week",
  rating: 4.9,
  totalTrips: "50,000+",
};
```

### 2. Vehicle Fleet (`FLEET`)
Contains data for **Swift Dzire**, **Toyota Etios**, **Toyota Innova**, **Innova Crysta**, and **Force Tempo Traveller**, including:
- `ratePerKm` / `rateNumber`: Base per-kilometer pricing.
- `baseFare`: Default base rate for calculating city packages.
- `airportDrop`: Fixed representative airport transfer fare.
- `seats`, `luggage`, `ac`, and feature lists.

### 3. Karnataka Tour Packages (`TOUR_PACKAGES`)
Covers **Mysore & Srirangapatna**, **Coorg (Kodagu)**, **Nandi Hills Sunrise Express**, **Chikmagalur**, **Ooty & Wayanad**, and **Tirupati Balaji**.

---

## 🧮 Booking & Fare Calculation Engine

The calculator in [`src/components/Booking.jsx`](src/components/Booking.jsx) dynamically estimates fares:

1. **Kempegowda Airport (BLR)**: Flat rate based on vehicle tier (e.g. ₹1,199 for Dzire, ₹1,899 for Innova, ₹2,299 for Crysta).
2. **City Hourly Rental**:
   - `4h40k` (4 Hours / 40 Kms): `baseFare * 0.75`
   - `8h80k` (8 Hours / 80 Kms): `baseFare + ₹400`
   - `12h120k` (12 Hours / 120 Kms): `baseFare + ₹900`
3. **Outstation**: Minimum 250 kms per day + driver bata (₹400/day):
   $$\text{Fare} = (\text{Days} \times 250 \times \text{RatePerKm}) + (\text{Days} \times 400)$$

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or later recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation
1. Clone or open the project folder:
   ```bash
   cd D:\productive\ak-tours-
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL in your browser (typically `http://localhost:5173`).

---

## 📜 Scripts & Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds and bundles optimized production assets into `dist/` |
| `npm run lint` | Runs ESLint to verify code quality, syntax, and React rules |
| `npm run preview` | Serves the production build locally to test before deployment |

---

## 🛠️ How to Customize

### 1. Changing Contact Numbers or Address
Open [`src/data/bookingData.js`](src/data/bookingData.js) and update `phonePrimary`, `phoneSecondary`, `whatsappNumber`, or `address`. All call buttons, WhatsApp dispatches, and footer notes will automatically update across the entire site.

### 2. Updating Vehicle Pricing or Adding a Car
Open [`src/data/bookingData.js`](src/data/bookingData.js) and edit the `FLEET` array. To add a new car (e.g. *Kia Carens* or *Toyota Fortuner*):
1. Place the car's transparent PNG image inside `public/`.
2. Add an object to `FLEET` with `id`, `name`, `category`, `img`, `seats`, `luggage`, and rates.

### 3. Adding a Tour Package
In [`src/data/bookingData.js`](src/data/bookingData.js), add a new entry to `TOUR_PACKAGES` with `title`, `duration`, `distance`, `price`, `highlights`, and an image path.

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Accept defaults (Vite preset will be automatically detected).

### Deploying to Netlify
1. Connect your repository to Netlify.
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`

### Deploying to an Apache / Nginx VPS
1. Run `npm run build`.
2. Upload the generated contents of `dist/` to your web server root (e.g. `/var/www/html`).
3. Configure URL rewrite rules to point all routes to `index.html`.

---

© 2026 AK Tours & Travels Bengaluru. All rights reserved.
