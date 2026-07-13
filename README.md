# JuntosVE 🇻🇪

**A multilingual emergency-response platform built in days for the 2026 Venezuela earthquake.**

JuntosVE is a free, open, non-profit web platform created to help people affected by the June 2026 earthquake in Venezuela find missing family members, locate shelters and hospitals, access verified aid channels, and get reliable information — even with poor or no connectivity.

🔗 **Live:** [juntosve.org](https://juntosve.org)

---

## Why this exists

In the hours after the earthquake, information was fragmented across dozens of WhatsApp groups, spreadsheets, and social media threads. People searching for missing relatives had no single place to look. Aid was flowing but uncoordinated. Misinformation and fraudulent donation appeals spread quickly.

JuntosVE was built to be the one link you could send to someone who needed help — and have it work on a bad connection, in whatever language they read.

Built and deployed by one person, in days, using AI-assisted development.

---

## What it does

**🗺️ Interactive emergency map**
Affected zones, active hospitals, shelters, and aid distribution points — plotted with Leaflet + OpenStreetMap. No API key, no vendor lock-in, works on low bandwidth.

**🧒 Missing children & family reunification**
A dedicated section aggregating the specialised citizen platforms tracking rescued and unaccompanied minors, with clear guidance on what to do if you find a child alone — and how to report suspected trafficking to the right organisations.

**💬 Decision-tree chatbot in 6 languages**
Guides users to the right resource based on their situation. Rule-based, not LLM-dependent — so it works offline and costs nothing to run.

**📰 Real-time news aggregation**
Pulls and categorises earthquake, rescue, and aid coverage from public RSS feeds via a Cloudflare Worker, auto-tagging by topic.

**💚 Verified family support**
A GoFundMe aggregation section backed by a Google Sheets scraping layer, so verified campaigns can be added without redeploying.

**📴 Offline-first**
Service Worker caching means the critical information stays available when the network doesn't.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Hosting / Compute | **Cloudflare Workers + Pages** | Global edge, generous free tier, sub-100ms in LatAm |
| Maps | **Leaflet + OpenStreetMap** | No API key, no billing surprise, low payload |
| Offline | **Service Workers** | Critical for users on degraded networks |
| Data | **Google Sheets API** | Non-technical volunteers can update content without touching code |
| News | **RSS → Worker proxy** | Free, resilient, solves CORS at the edge |
| i18n | **6 languages** | ES, EN, PT, IT, FR, DE |

**Design constraint that drove every decision:** it had to be free to run indefinitely, work on a 3G connection, and be maintainable by one person.

---

## Running locally

```bash
git clone https://github.com/claudiocarlucci/juntosve.git
cd juntosve
npm install
npx wrangler dev
```

Deploy:

```bash
npx wrangler deploy
```

---

## Contributing

Contributions are genuinely welcome — particularly:

- **Translations** — corrections and additional languages
- **Data accuracy** — shelter, hospital, and aid-point locations change fast
- **Accessibility** — screen reader support, contrast, keyboard navigation
- **Offline resilience** — anything that makes this work on a worse connection

Open an issue or a PR. If you're reporting outdated emergency data, please include a source.

---

## Licence

MIT — use it, fork it, adapt it for the next emergency. That's the point.

---

## A note

This was built quickly, under pressure, for people who needed it immediately. The code reflects that: it prioritises shipping and resilience over architectural elegance. If you're reading this as an engineer and something makes you wince — you're probably right, and a PR would be welcome.

Built by [Claudio Carlucci Paci](https://linkedin.com/in/claudio-carlucci-paci) 🇻🇪
