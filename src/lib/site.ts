/**
 * Brand & business configuration. Edit contact details, marketplace links and
 * social profiles here — every page reads from this file.
 */
export const site = {
  name: "SwadUp Foods",
  wordmark: "SWADUP FOODS",
  tagline: "From Farm to Your Home",
  taglineHindi: "खेत से आपके घर तक",
  description:
    "SwadUp Foods brings premium, carefully selected makhana from the farms of Mithila to your home — naturally sourced, quality-checked and hygienically packed.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://swadupfoods.com",
  contact: {
    // TODO: replace with real contact details
    email: "hello@swadupfoods.com",
    phone: "+91 90000 00000",
    address: "Darbhanga, Bihar, India",
  },
  /** Leave a link empty ("") until the account exists — it will show as "coming soon". */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  youtube: {
    /** Optional YouTube channel ID ("UC…") to show a live stream from the farms on the journey page. */
    channelId: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID ?? "",
  },
} as const;

export type Marketplace = {
  key: "meesho" | "flipkart" | "amazon";
  name: string;
  tagline: string;
  cta: string;
  /** null = coming soon */
  url: string | null;
  color: string;
};

export const marketplaces: Marketplace[] = [
  {
    key: "meesho",
    name: "Meesho",
    tagline: "Shop SwadUp on Meesho",
    cta: "Buy on Meesho",
    url: "https://www.meesho.com/SWADUPFOODS?ms=2",
    color: "#9f2089",
  },
  {
    key: "flipkart",
    name: "Flipkart",
    tagline: "Shop SwadUp on Flipkart",
    cta: "Buy on Flipkart",
    url: "https://www.flipkart.com/search?q=swadup+dry+fruits",
    color: "#2874f0",
  },
  {
    key: "amazon",
    name: "Amazon",
    tagline: "SwadUp will soon be available on Amazon.",
    cta: "Coming soon",
    url: null,
    color: "#232f3e",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Our Journey" },
  { href: "/story", label: "Our Story" },
  { href: "/product", label: "Our Product" },
  { href: "/contact", label: "Contact Us" },
] as const;
