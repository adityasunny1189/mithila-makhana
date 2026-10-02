/**
 * Site content. Numbers marked "placeholder" are illustrative — replace with real business figures.
 */

export const stats = [
  { value: "1,200+", label: "Farming families", note: "placeholder" },
  { value: "40+", label: "Villages across Mithila", note: "placeholder" },
  { value: "850 t", label: "Supplied every season", note: "placeholder" },
  { value: "GI", label: "Tagged origin since 2022", note: "" },
] as const;

export type Grade = {
  slug: string;
  name: string;
  hindi: string;
  size: string;
  sizeMm: number;
  pop: number;
  bestFor: string[];
  description: string;
  tone: "jumbo" | "premium" | "standard" | "phool" | "raw" | "flour";
};

export const grades: Grade[] = [
  {
    slug: "jumbo",
    name: "Jumbo Raja",
    hindi: "राजा",
    size: "6+ suta",
    sizeMm: 22,
    pop: 98,
    bestFor: ["Premium retail packs", "Gifting", "Export"],
    description:
      "The largest, whitest pops from each harvest — hand-picked after double grading. Crisp, cloud-light and almost no husk patches.",
    tone: "jumbo",
  },
  {
    slug: "premium",
    name: "Premium Heera",
    hindi: "हीरा",
    size: "5–6 suta",
    sizeMm: 19,
    pop: 96,
    bestFor: ["Flavoured roasted snacks", "Retail", "Quick-commerce brands"],
    description:
      "Our most-requested grade. Uniform size that roasts evenly and holds seasoning beautifully — the workhorse of snack brands.",
    tone: "premium",
  },
  {
    slug: "standard",
    name: "Standard Moti",
    hindi: "मोती",
    size: "4–5 suta",
    sizeMm: 16,
    pop: 93,
    bestFor: ["Kheer & sweets", "HoReCa", "Value packs"],
    description:
      "Everyday makhana with full flavour. Great for curries, kheer and value retail where size uniformity matters less.",
    tone: "standard",
  },
  {
    slug: "phool",
    name: "Phool Mix",
    hindi: "फूल",
    size: "3–4 suta & splits",
    sizeMm: 12,
    pop: 90,
    bestFor: ["Trail mixes", "Granola & bars", "Industrial processing"],
    description:
      "Smaller pops and clean splits. Same nutrition, friendlier price — ideal where makhana is an ingredient rather than the hero.",
    tone: "phool",
  },
  {
    slug: "gurri",
    name: "Gurri (Raw Seed)",
    hindi: "गुर्री",
    size: "Unpopped, graded",
    sizeMm: 9,
    pop: 0,
    bestFor: ["Processors", "Seed & nursery", "Research"],
    description:
      "Cleaned, sun-dried raw fox-nut seed straight from the pond — for processors who run their own roasting and popping units.",
    tone: "raw",
  },
  {
    slug: "flour",
    name: "Makhana Atta",
    hindi: "आटा",
    size: "Fine milled",
    sizeMm: 0,
    pop: 0,
    bestFor: ["Gluten-free baking", "Baby food", "Fasting (vrat) foods"],
    description:
      "Stone-milled from roasted makhana. Naturally gluten-free with a mild, nutty taste — a growing favourite with health-food brands.",
    tone: "flour",
  },
];

export const nutrition = [
  { label: "Energy", value: "~347 kcal" },
  { label: "Protein", value: "~9.7 g" },
  { label: "Carbohydrates", value: "~77 g" },
  { label: "Dietary fibre", value: "~14.5 g" },
  { label: "Fat", value: "< 0.5 g" },
  { label: "Calcium", value: "~60 mg" },
  { label: "Magnesium", value: "~67 mg" },
  { label: "Iron", value: "~1.4 mg" },
] as const;

export const benefits = [
  {
    title: "Light, yet filling",
    body: "Low in fat and naturally high in fibre, makhana keeps you full without weighing you down.",
    icon: "feather",
  },
  {
    title: "Plant protein",
    body: "Around 9–10 g of protein per 100 g — a rare find in a crunchy, gluten-free snack.",
    icon: "sprout",
  },
  {
    title: "Mineral rich",
    body: "A natural source of magnesium, potassium, calcium and phosphorus.",
    icon: "gem",
  },
  {
    title: "Sacred & seasonal",
    body: "Offered in Chhath, Kojagara and wedding rituals across Mithila for centuries.",
    icon: "flower",
  },
] as const;

export type Method = {
  name: string;
  hindi: string;
  water: string;
  cycle: string;
  points: string[];
};

export const methods: Method[] = [
  {
    name: "Traditional pond farming",
    hindi: "पोखर प्रणाली",
    water: "4–6 ft deep ponds & wetlands",
    cycle: "Perennial — seeds that fall back re-sow the pond",
    points: [
      "Practised for centuries in the ponds (pokhar) and chaurs of Mithila.",
      "Plants grow from seeds left in the pond bed from last season.",
      "Mature seeds sink to the pond floor and are gathered by skilled divers.",
      "Supports fish, birds and the wetland ecosystem around the village.",
    ],
  },
  {
    name: "Field (khet) system",
    hindi: "खेत प्रणाली",
    water: "~1–1.5 ft standing water in bunded fields",
    cycle: "Seasonal — nursery in winter, harvest by August",
    points: [
      "Developed by researchers at Darbhanga to bring makhana to low-lying farmland.",
      "Seedlings are raised in a nursery and transplanted in rows.",
      "Shallow water makes harvesting safer and yields more predictable.",
      "Lets farmers rotate makhana with paddy, wheat or pulses.",
    ],
  },
];

export type Step = {
  n: number;
  title: string;
  hindi: string;
  when: string;
  body: string;
};

export const processSteps: Step[] = [
  {
    n: 1,
    title: "Sowing the pond",
    hindi: "बुआई",
    when: "Dec – Jan",
    body: "Seeds are broadcast into ponds or a nursery bed. In old ponds, last year's fallen seeds sprout on their own.",
  },
  {
    n: 2,
    title: "Thorny lotus leaves",
    hindi: "पत्ते",
    when: "Feb – Apr",
    body: "Euryale ferox spreads giant, thorny floating leaves — some over a metre wide — that shade the water.",
  },
  {
    n: 3,
    title: "Purple bloom",
    hindi: "फूल",
    when: "Apr – Jun",
    body: "Violet flowers rise above the leaves. Each develops into a spiky fruit holding 20–100 seeds.",
  },
  {
    n: 4,
    title: "Diving harvest",
    hindi: "गोताखोरी",
    when: "Jul – Oct",
    body: "Ripe fruits burst and seeds sink. Divers sweep the pond floor with bamboo 'gaanj' to collect them from the mud.",
  },
  {
    n: 5,
    title: "Washing & sun-drying",
    hindi: "सुखाई",
    when: "Same day",
    body: "Seeds are washed of silt, rolled to remove the slimy aril and spread out to dry in the sun.",
  },
  {
    n: 6,
    title: "Grading the gurri",
    hindi: "छंटाई",
    when: "1–2 days",
    body: "Raw seeds (gurri) are sieved into size grades so each batch roasts evenly.",
  },
  {
    n: 7,
    title: "First roast & tempering",
    hindi: "भुनाई",
    when: "2–3 days",
    body: "Seeds are roasted in iron pans, then rested in bags so moisture spreads evenly inside the kernel.",
  },
  {
    n: 8,
    title: "The pop",
    hindi: "फोड़ाई",
    when: "Seconds",
    body: "Re-roasted at high heat, each hot seed is struck with a wooden mallet — the shell cracks and the kernel puffs into a white pearl.",
  },
  {
    n: 9,
    title: "Sorting & polishing",
    hindi: "चुनाई",
    when: "Daily",
    body: "Pops are cleaned, polished and hand-sorted by size and colour into our trade grades.",
  },
  {
    n: 10,
    title: "Packed for you",
    hindi: "पैकिंग",
    when: "To order",
    body: "Moisture-checked and packed in food-grade, multi-layer bags or cartons — ready for brands, kitchens and export.",
  },
];

export type StreamCategory = {
  key: string;
  title: string;
  hindi: string;
  description: string;
  /** Optional YouTube video ID for a recorded session. Leave empty until uploaded. */
  videoId: string;
  season: string;
};

export const streamCategories: StreamCategory[] = [
  {
    key: "harvest",
    title: "Pond harvest",
    hindi: "गोताखोरी",
    description: "Ride along at dawn as divers gather seeds from the pond floor.",
    videoId: "",
    season: "Jul – Oct",
  },
  {
    key: "popping",
    title: "The popping floor",
    hindi: "फोड़ाई",
    description: "Iron pans, wooden mallets and thousands of pearls popping every hour.",
    videoId: "",
    season: "Year-round",
  },
  {
    key: "grading",
    title: "Grading & sorting",
    hindi: "छंटाई",
    description: "See how every lot is graded by size, colour and pop rate.",
    videoId: "",
    season: "Year-round",
  },
  {
    key: "fields",
    title: "Field farming",
    hindi: "खेत",
    description: "Transplanting, blooms and the growing season in our khet farms.",
    videoId: "",
    season: "Feb – Jun",
  },
  {
    key: "packing",
    title: "Packing your order",
    hindi: "पैकिंग",
    description: "Bulk buyers can request a live view of their lot being packed.",
    videoId: "",
    season: "On request",
  },
  {
    key: "village",
    title: "Village stories",
    hindi: "गाँव",
    description: "Meet the farming families, their festivals and their ponds.",
    videoId: "",
    season: "Monthly",
  },
];

export const bulkFeatures = [
  {
    title: "Direct from farmers",
    body: "No middle-mandi layers. We buy directly from pond and field farmers and pay fair, on-time prices.",
    icon: "handshake",
  },
  {
    title: "Graded to spec",
    body: "Consistent suta sizing, pop rate and moisture — shared in a lot-wise quality sheet.",
    icon: "ruler",
  },
  {
    title: "Private label ready",
    body: "Bulk sacks, retail pouches or your own branded packs, packed in our facility.",
    icon: "package",
  },
  {
    title: "Pan-India & export",
    body: "FSSAI-licensed, export documentation support and dispatch from Darbhanga.",
    icon: "globe",
  },
] as const;

export const packOptions = [
  { name: "Bulk sack", size: "5 kg / 10 kg", note: "HDPE + food-grade liner" },
  { name: "Export carton", size: "10 kg / 20 kg", note: "5-ply with poly liner" },
  { name: "Retail pouch", size: "50 g – 1 kg", note: "Nitrogen-flushed, private label" },
] as const;

export const buyerTypes = [
  "Snack & FMCG brands",
  "Retail & supermarkets",
  "Exporters",
  "HoReCa & caterers",
  "Ayurveda & health foods",
  "Sweet shops & mithai makers",
] as const;

export type Snack = {
  name: string;
  flavour: string;
  hue: string;
  accent: string;
  notes: string;
};

export const snacks: Snack[] = [
  {
    name: "Himalayan Pink Salt",
    flavour: "Classic",
    hue: "#f3d9d0",
    accent: "#c2412d",
    notes: "Roasted in ghee with a pinch of pink salt & black pepper.",
  },
  {
    name: "Peri Peri Blaze",
    flavour: "Spicy",
    hue: "#f6c9a5",
    accent: "#b8381f",
    notes: "Smoky bird's-eye chilli, garlic and a squeeze of lemon.",
  },
  {
    name: "Pudina Chaat",
    flavour: "Tangy",
    hue: "#cfe3c4",
    accent: "#3f6b38",
    notes: "Fresh mint, amchur and the chatpata of a Darbhanga street cart.",
  },
  {
    name: "Gud & Til",
    flavour: "Sweet",
    hue: "#f0dba8",
    accent: "#8a5a1f",
    notes: "Jaggery-coated pearls with toasted sesame — tilkut meets makhana.",
  },
];

export const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Our standard MOQ is 100 kg for popped makhana and 500 kg for raw gurri. Sample packs of 1–2 kg are available for quality evaluation.",
  },
  {
    q: "Can I see my lot before dispatch?",
    a: "Yes. Bulk buyers can book a live video session from our packing floor, and every lot ships with a quality sheet covering size, moisture and pop rate.",
  },
  {
    q: "Do you offer private labelling?",
    a: "We pack in retail pouches with your branding, from 50 g upwards, with nitrogen flushing for longer shelf life.",
  },
  {
    q: "How long does makhana stay fresh?",
    a: "Properly packed popped makhana keeps for 6–9 months in a cool, dry place. Once opened, store in an airtight container.",
  },
  {
    q: "Do you export?",
    a: "Yes — we support documentation for export shipments and can pack to destination-market requirements. Tell us your country in the enquiry form.",
  },
] as const;
