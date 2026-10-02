/**
 * Website copy and media slots.
 *
 * Photos & videos: drop files into /public (e.g. /public/journey/farming.jpg) and set the
 * paths below. Until a photo is set, a hand-painted Mithila illustration is shown instead.
 * Videos can be a short local clip (`video: "/journey/farming.mp4"`) or a YouTube ID (`youtubeId`).
 */

export type SceneKey = "farming" | "harvesting" | "cleaning" | "processing" | "quality" | "packing";

export type JourneyStep = {
  n: number;
  key: SceneKey;
  label: string;
  hindi: string;
  title: string;
  summary: string;
  more: string[];
  photo: string | null;
  video: string | null;
  youtubeId: string | null;
};

export const journeySteps: JourneyStep[] = [
  {
    n: 1,
    key: "farming",
    label: "Farming",
    hindi: "खेती",
    title: "Where the journey begins",
    summary:
      "Makhana grows in the still, shallow waters of Mithila's ponds and fields. Seeds are sown in winter, and by spring the water is covered with giant round leaves and purple flowers.",
    more: [
      "Makhana comes from Euryale ferox, a water plant that has been farmed in the Mithila region of Bihar for generations.",
      "Farmers grow it in traditional ponds or in low-lying fields holding about a foot of water. It needs no tilling — just clean water, sunshine and patience.",
      "Each flower slowly turns into a spiky fruit that holds the seeds which will one day become your makhana.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
  {
    n: 2,
    key: "harvesting",
    label: "Harvesting",
    hindi: "कटाई",
    title: "From the fields to the harvest",
    summary:
      "When the fruits ripen, the seeds sink to the bottom. Skilled farmers gather them from the mud by hand, using bamboo tools and baskets — one of the most hard-working harvests in India.",
    more: [
      "Harvest season runs from late monsoon into autumn.",
      "Farmers wade or dive into the water and sweep the bed with a bamboo frame to collect the seeds from the soft mud.",
      "The seeds are lifted out in baskets and carried home for washing the very same day.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
  {
    n: 3,
    key: "cleaning",
    label: "Cleaning",
    hindi: "सफ़ाई",
    title: "Preparing the raw makhana",
    summary:
      "The raw seeds are washed free of mud, rolled to remove their outer coat and spread out to dry in the sun. Then they are sieved and sorted by size.",
    more: [
      "Clean water washes away the mud and the slippery outer layer.",
      "Seeds are sun-dried on mats and winnowed with a traditional soop to remove dust and husk.",
      "Sorting by size at this stage means every batch roasts evenly later.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
  {
    n: 4,
    key: "processing",
    label: "Processing",
    hindi: "भुनाई और फोड़ाई",
    title: "Transforming seeds into makhana",
    summary:
      "The hard black seeds are roasted in iron pans, rested, and roasted again at high heat. A quick tap breaks the shell — and the seed pops into a crisp white makhana.",
    more: [
      "The first roast warms the seed through. It is then rested so the moisture inside spreads evenly.",
      "In the second roast the seeds get very hot. Each one is tapped with a wooden mallet, the shell cracks, and the kernel puffs up instantly.",
      "This skill is passed down in families — the timing is everything.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
  {
    n: 5,
    key: "quality",
    label: "Quality Check",
    hindi: "गुणवत्ता जाँच",
    title: "Quality before it reaches you",
    summary:
      "Every batch is selected, sorted and checked. Small, broken or dark pieces are removed so only the good makhana goes into your SwadUp pack.",
    more: [
      "Makhana is graded by size and colour, and checked for crispness and moisture.",
      "Pieces that don't meet our standard are taken out by hand.",
      "Only then is a batch approved for packing.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
  {
    n: 6,
    key: "packing",
    label: "Packing",
    hindi: "पैकिंग",
    title: "Packed for your home",
    summary:
      "The selected makhana is hygienically packed into the SwadUp 200g pack and sealed to keep it fresh and crunchy — ready to travel from the farm to your home.",
    more: [
      "Packing happens in a clean, hygienic space.",
      "Each pack is filled, weighed to 200g and sealed to lock in freshness.",
      "The QR code on the pack brings you right back here — to the journey of your makhana.",
    ],
    photo: null,
    video: null,
    youtubeId: null,
  },
];

export const differentiators = [
  {
    motif: "lotus",
    title: "Natural sourcing",
    body: "Makhana sourced from the ponds and fields of Mithila, where it has been grown for generations.",
  },
  {
    motif: "makhana",
    title: "Carefully selected makhana",
    body: "Only well-popped, good-sized makhana makes it into a SwadUp pack.",
  },
  {
    motif: "eye",
    title: "Quality-focused processing",
    body: "Traditional roasting and popping, with checks at every step.",
  },
  {
    motif: "pack",
    title: "Hygienic packaging",
    body: "Clean, sealed packing that keeps your makhana fresh and crunchy.",
  },
] as const;

export const product = {
  name: "SwadUp Foods Premium Makhana",
  weight: "200g",
  highlights: ["Premium quality Makhana", "Carefully selected", "Hygienically packed"],
  /** Set real photo paths (e.g. "/product/front.jpg") once available. */
  images: {
    front: null as string | null,
    back: null as string | null,
    closeup: null as string | null,
  },
};

/**
 * Our Story — DRAFT copy. Keep it personal and genuine: replace with the founders' own words.
 */
export const story = {
  intro:
    "SwadUp Foods began with something simple — the makhana we grew up eating at home, and a wish to share that same goodness with more families.",
  sections: [
    {
      title: "How SwadUp started",
      body: [
        "In Mithila, makhana is not just a snack. It is part of our festivals, our prayers and our everyday kitchens.",
        "But when we bought makhana in cities, it rarely tasted the same. Often it was stale, broken or of unknown origin. We kept asking: why can't everyone get makhana the way it tastes back home?",
        "That question became SwadUp Foods.",
      ],
    },
    {
      title: "What we believe",
      body: [
        "We believe good food should be honest. You should know where it comes from, who grew it and how it reached you.",
        "That's why we put a QR code on every pack — so you can see the journey for yourself.",
      ],
    },
    {
      title: "Why quality matters to us",
      body: [
        "We pack makhana for our own families too. So we only pack what we would happily serve at our own table.",
        "Carefully selected, properly roasted and hygienically packed — nothing more, nothing less.",
      ],
    },
    {
      title: "How we bring makhana to you",
      body: [
        "We work closely with makhana farmers and processors in Mithila, choosing quality at the source instead of buying blindly from the market.",
        "From the pond to the pan to the pack, we keep an eye on every step — and then bring it straight to your home.",
      ],
    },
  ],
};
