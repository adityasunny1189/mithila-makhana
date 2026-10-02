# Mithila Makhana

Website for a Mithila makhana (fox nut) company that sources directly from farming villages in the Mithila region of Bihar and sells in bulk. It is designed to grow into a D2C snack brand.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion**.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Brand home: hero, makhana intro, grades, farm-to-pack, live teaser, bulk, snacks |
| `/about-makhana` | Makhana 101: the plant, nutrition, Mithila culture & GI tag, ways to eat |
| `/varieties` | Grades (Jumbo, Premium, Standard, Phool, raw Gurri, Atta), size guide, quality specs |
| `/farming` | Pond vs field farming, crop calendar, the 10-step process, people & planet |
| `/live` | YouTube live stream, broadcast schedule, stream library by process |
| `/bulk` | B2B: how it works, packing options, quote form, FAQ |
| `/snacks` | Coming-soon D2C snack range with a waitlist |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you need
npm run dev                  # http://localhost:3000
```

## Configuration

- **Business details** (email, phone, WhatsApp, address, socials): `src/lib/site.ts`
- **Content** (grades, process steps, nutrition, stats, snacks, FAQs, stream categories): `src/lib/data.ts`
  Stats marked `placeholder` and the quality specs are illustrative. Replace them with real figures.
- **Brand colours & fonts**: `src/app/globals.css` and `src/app/layout.tsx`

### Live streaming (YouTube)

1. Set `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID` to your channel ID. The player embeds whatever the channel is broadcasting live.
2. Optionally set `YOUTUBE_API_KEY` (YouTube Data API v3). `/live` then shows a "Live now" badge, the stream title and upcoming broadcasts. It re-checks every 2 minutes. The same status is available as JSON at `/api/live`.
3. Add recorded videos to the stream library by setting `videoId` on each entry in `streamCategories` (`src/lib/data.ts`).
4. Edit the weekly broadcast schedule in `src/app/live/page.tsx`.

Players use a click-to-load facade, so nothing loads from YouTube until a visitor presses play.

### Enquiries

The bulk quote form and snack waitlist post to `/api/enquiry`. Set `ENQUIRY_WEBHOOK_URL` to forward submissions to Zapier, Make, Slack, Google Sheets and similar. Without it, submissions are only logged on the server.

## Scripts

`npm run dev` · `npm run build` · `npm run start` · `npm run lint`
