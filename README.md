# SwadUp Foods — swadupfoods.com

Website for **SwadUp Foods**, a premium makhana brand bringing makhana from the farms of Mithila to your home.
The whole site is designed in the **Mithila (Madhubani) painting** style: kohl double outlines, *kachni* hatching,
bright natural pigments and traditional motifs (fish, peacock, sun, lotus).

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion**.

## Pages

| Route | Section |
| --- | --- |
| `/` | Home — hero, 200g pack, "What Makes SwadUp Foods Different?", journey preview, QR callout, story teaser, where to buy |
| `/journey` | **QR code destination** — Welcome, then Steps 1–6 (Farming → Packing) and Step 7 (Buy) |
| `/story` | Our Story — "Why SwadUp Foods?" |
| `/product` | Our Product — SwadUp Premium Makhana 200g, front/back/close-up, highlights, where to buy |
| `/buy` | Buy Now — Meesho, Flipkart, Amazon (coming soon) |
| `/contact` | Contact Us — details + contact form |

The QR code printed on the pack should point to **`https://swadupfoods.com/journey`**.
The back-of-pack illustration on the site contains a real, scannable QR code for that URL.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Where to edit things

| What | File |
| --- | --- |
| Contact details, social links, marketplace links | `src/lib/site.ts` |
| Journey steps, product details, story copy | `src/lib/content.ts` |
| Colours & fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Mithila motifs, borders, scenes, pack artwork | `src/components/mithila/` |

### Adding real photos & videos

Until real media is added, every slot shows a hand-painted Mithila illustration.

- **Journey steps** — put files in `public/journey/` and set `photo` (e.g. `"/journey/farming.jpg"`) and either
  `video` (a short local clip, e.g. `"/journey/farming.mp4"`) or `youtubeId` for each step in `src/lib/content.ts`.
  When a video is set, a *Photo / Watch video* toggle appears.
- **Product** — put files in `public/product/` and set `product.images.front / back / closeup`.

### Social media

Social links in `src/lib/site.ts` are empty for now and show as "coming soon" in the footer. Paste the profile URLs once the accounts exist.

### Contact form

Submissions go to `/api/enquiry`. Set `ENQUIRY_WEBHOOK_URL` to forward them (Zapier, Make, Slack, Google Sheets…).
Without it they are only logged on the server.

### Optional: live stream

Set `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID` to show a "Watch live from the farms" player at the end of the journey page.

## Scripts

`npm run dev` · `npm run build` · `npm run start` · `npm run lint`
