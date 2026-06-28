# Arbitrum Pulse

A React + Vite website that teaches Web3 through four connected pages. This project uses a single navigable site to demonstrate real project structure, routing, responsive design, and simple Web3 concepts.

## Pages

- **Home**: Arbitrum / Layer 2 landing page with hero, blockchain illustration, features, timeline, benefits, and footer.
- **Concepts**: Educational comparison cards for Web2 vs Web3, Ethereum vs Bitcoin, Public Key vs Private Key, and Blockchain vs Traditional Databases.
- **Live Prices**: Real-time crypto price dashboard using CoinGecko with ETH, BTC, and ARB pricing, 24h change, and refresh support.
- **Block Simulator**: Interactive mining simulator that shows hash generation, nonce mining, and how changing Block 1 invalidates Block 2.

## Install and run

1. Open a terminal in the project folder:
   ```bash
   cd "c:\Users\ISHITA\OneDrive\Desktop\ARBITRUM\web3-explorer"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the browser at:
   ```bash
   http://localhost:5173
   ```

## How to submit

1. Push the repository to GitHub.
2. Take screenshots for each page:
   - Home
   - Concepts
   - Live Prices
   - Block Simulator
4. Save screenshots in `screenshots/` so they are included in the repository.
5. Push the repository and share the GitHub link with your instructor.

## Features

- Sticky navigation bar with active page highlight and mobile hamburger menu
- Single-page React application using `react-router-dom`
- Responsive design with a modern light theme and professional styling
- Home page includes Arbitrum / Layer 2 educational content, features, benefits, timeline, and CTA
- Concepts page uses visual side-by-side comparison cards for core Web3 ideas
- Live Prices page fetches data from CoinGecko and shows green/red trend indicators
- Block Simulator page uses SHA-256 hashing and demonstrates nonce-based mining and chain validation

## Notes

- The Live Prices page uses CoinGecko's free public API, so no API key is required.
- The Block Simulator uses the browser's Web Crypto API for SHA-256 hashing.
- The app runs locally with `npm install` and `npm run dev`.

## Known improvements

- Add screenshot files to the repository for submission
- Deploy the app as a live GitHub Pages project
- Improve page animations and fade-in transitions
- Add a dark mode toggle
- Add a custom favicon and SEO meta tags

## Submission checklist

- [x] GitHub repository created
- [x] README file included with project details
- [x] Four pages implemented and navigable
- [x] Responsive layout across devices
- [x] No build errors (`npm run build` verified)
- [ ] Screenshots captured for each page
