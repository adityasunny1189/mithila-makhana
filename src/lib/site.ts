/**
 * Central brand + business configuration.
 * Update contact details, numbers and stream settings here — every page reads from this file.
 */
export const site = {
  name: "Mithila Makhana",
  tagline: "Pearls of the Mithila ponds",
  description:
    "GI-tagged Mithila makhana sourced directly from farming families in the villages of Darbhanga, Madhubani and Purnia. Bulk supply for brands, retailers and exporters — and soon, snacks for your pantry.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mithilamakhana.example",
  contact: {
    email: "bulk@mithilamakhana.example",
    phone: "+91 90000 00000",
    whatsapp: "919000000000",
    address: "Makhana Mandi Road, Darbhanga, Bihar 846004, India",
  },
  social: {
    youtube: "https://www.youtube.com/@mithilamakhana",
    instagram: "https://www.instagram.com/mithilamakhana",
    linkedin: "https://www.linkedin.com/company/mithilamakhana",
  },
  youtube: {
    /** Your YouTube channel ID (starts with "UC…"). Used to embed whatever is live right now. */
    channelId: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID ?? "",
  },
} as const;

export const nav = [
  { href: "/about-makhana", label: "Makhana 101" },
  { href: "/varieties", label: "Varieties" },
  { href: "/farming", label: "Farm to Pack" },
  { href: "/live", label: "Live from the Ponds" },
  { href: "/snacks", label: "Snacks" },
] as const;
