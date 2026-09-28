import { MenuItem, RoastBatch, ReviewItem, GalleryItem } from '../types';

// Curated Ultra-HD Unsplash Photography for Specialty Coffee, Culinary, & Japandi Architecture
export const HD_ASSETS = {
  hero: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85",
  roasterDrum: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1600&q=85",
  pourOver: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85",
  cascadingLatte: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1600&q=85",
  dirtyLatte: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1600&q=85",
  coldDrip: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1600&q=85",
  cappuccino: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1600&q=85",
  tokyoSteak: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=85",
  coffeeSteak: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
  salmonOmurice: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=85",
  pastaAglio: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=1600&q=85",
  steakSalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=85",
  truffleFries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1600&q=85",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1600&q=85",
  cremeBrulee: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1600&q=85",
  croissant: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1600&q=85",
  modernistCake: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1600&q=85",
  interiorAtelier: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85",
  sunlitWindow: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=85",
  outdoorGarden: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2000&q=85",
  beansBags: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=1600&q=85",
  cuppingSession: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=85",
  // Extra gallery photos
  baristaPouring: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=85",
  espressoMachine: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?auto=format&fit=crop&w=1600&q=85",
  cafeCorner: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?auto=format&fit=crop&w=1600&q=85",
  flatWhite: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1600&q=85",
  macarons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1600&q=85",
  coffeeBeansClose: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85",
  interiorLight: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=85",
  matcha: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1600&q=85",
};

// ─── Gallery Marquee Rows ───────────────────────────────────────────────────
export interface GalleryRowItem {
  id: string;
  src: string;
  label: { id: string; en: string };
  aspect: string;
}

const ROW_A_BASE: GalleryRowItem[] = [
  { id: 'ga1', src: HD_ASSETS.interiorAtelier,  label: { id: 'Sanctuary Utama', en: 'Main Atelier' },           aspect: 'aspect-[4/3]'   },
  { id: 'ga2', src: HD_ASSETS.dirtyLatte,       label: { id: 'Wheels Dirty Latte', en: 'Dirty Latte' },         aspect: 'aspect-[3/4]'   },
  { id: 'ga3', src: HD_ASSETS.tokyoSteak,       label: { id: 'Tokyo Steak', en: 'Tokyo Steak' },                aspect: 'aspect-[4/3]'   },
  { id: 'ga4', src: HD_ASSETS.baristaPouring,   label: { id: 'Barista Meracik', en: 'Barista Craft' },          aspect: 'aspect-[3/4]'   },
  { id: 'ga5', src: HD_ASSETS.outdoorGarden,    label: { id: 'Taman Outdoor', en: 'Garden Terrace' },           aspect: 'aspect-[16/10]' },
  { id: 'ga6', src: HD_ASSETS.cappuccino,       label: { id: 'Classic Cappuccino', en: 'Cappuccino' },          aspect: 'aspect-[3/4]'   },
  { id: 'ga7', src: HD_ASSETS.tiramisu,         label: { id: 'Tiramisu Klasik', en: 'Classic Tiramisu' },       aspect: 'aspect-[4/3]'   },
  { id: 'ga8', src: HD_ASSETS.cafeCorner,       label: { id: 'Sudut Santai', en: 'Cozy Corner' },               aspect: 'aspect-[3/4]'   },
];

const ROW_B_BASE: GalleryRowItem[] = [
  { id: 'gb1', src: HD_ASSETS.pourOver,         label: { id: 'Precision V60', en: 'Precision V60' },            aspect: 'aspect-[4/3]'   },
  { id: 'gb2', src: HD_ASSETS.roasterDrum,      label: { id: 'Drum Sangrai', en: 'Roast Drum' },                aspect: 'aspect-[3/4]'   },
  { id: 'gb3', src: HD_ASSETS.salmonOmurice,    label: { id: 'Salmon Ommu Rice', en: 'Salmon Ommu Rice' },      aspect: 'aspect-[4/3]'   },
  { id: 'gb4', src: HD_ASSETS.espressoMachine,  label: { id: 'Mesin Espresso', en: 'Espresso Machine' },        aspect: 'aspect-[3/4]'   },
  { id: 'gb5', src: HD_ASSETS.cuppingSession,   label: { id: 'Sesi Cupping', en: 'Cupping Session' },           aspect: 'aspect-[16/10]' },
  { id: 'gb6', src: HD_ASSETS.croissant,        label: { id: 'Almond Croissant', en: 'Almond Croissant' },      aspect: 'aspect-[4/3]'   },
  { id: 'gb7', src: HD_ASSETS.interiorLight,    label: { id: 'Cahaya Pagi', en: 'Morning Light' },              aspect: 'aspect-[3/4]'   },
  { id: 'gb8', src: HD_ASSETS.flatWhite,        label: { id: 'Flat White', en: 'Flat White' },                  aspect: 'aspect-[4/3]'   },
];

// Duplicated for seamless infinite loop
export const GALLERY_ROW_A: GalleryRowItem[] = [...ROW_A_BASE, ...ROW_A_BASE];
export const GALLERY_ROW_B: GalleryRowItem[] = [...ROW_B_BASE, ...ROW_B_BASE];

export const ROAST_BATCHES: RoastBatch[] = [
  {
    id: "batch-1042",
    code: "#1042",
    origin: "Kerinci Natural Anaerobic",
    elevation: "1,550m MASL",
    process: "72h Anaerobic Natural",
    roastLevel: "Filter Light",
    flavorProfile: "Fruity & Winey",
    aroma: 9.3,
    sweetness: 9.6,
    clarity: 9.4,
    body: 8.8,
    notes: {
      id: "Stroberi Hutan, Bunga Bergamot, Molase Tebu Manis",
      en: "Wild Strawberry, Bergamot Blossom, Sweet Cane Molasses"
    },
    curvePath: "M0,70 Q40,65 80,45 T160,20 T240,35 T300,10"
  },
  {
    id: "batch-1043",
    code: "#1043",
    origin: "Ethiopia Guji Uraga",
    elevation: "2,100m MASL",
    process: "Washed Clean Cup",
    roastLevel: "Ultra Light",
    flavorProfile: "Floral & Delicate",
    aroma: 9.7,
    sweetness: 9.2,
    clarity: 9.9,
    body: 8.4,
    notes: {
      id: "Persik Putih, Bunga Melati Mekar, Lemon Meyer Segar",
      en: "White Peach, Jasmine Blossom, Meyer Lemon Zest"
    },
    curvePath: "M0,75 Q50,60 100,38 T180,16 T250,28 T300,8"
  },
  {
    id: "batch-1044",
    code: "#1044",
    origin: "Flores Bajawa Kartika",
    elevation: "1,450m MASL",
    process: "Honey Processed",
    roastLevel: "Medium Light",
    flavorProfile: "Nutty & Balanced",
    aroma: 9.4,
    sweetness: 9.8,
    clarity: 9.2,
    body: 9.3,
    notes: {
      id: "Apel Merah Renyah, Hazelnut Panggang, Gula Kelapa Aren",
      en: "Crisp Red Apple, Toasted Hazelnut, Brown Palm Sugar"
    },
    curvePath: "M0,68 Q45,62 90,48 T170,24 T235,32 T300,14"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: "c1",
    name: "Wheels Dirty Latte",
    category: "coffee",
    price: "44k",
    image: HD_ASSETS.dirtyLatte,
    badge: "Signature",
    desc: {
      id: "Double ristretto kental dituangkan perlahan di atas susu gandum krim dingin berkadar lemak khusus.",
      en: "Double ristretto floated over chilled, fortified condensed oat-dairy blend with velvety mouthfeel."
    },
    tags: ["House Blend", "Velvety", "Dark Cacao"],
    dietary: ["Oat Milk Available"],
    pairing: {
      id: "Sangat cocok disandingkan dengan Warm Almond Croissant.",
      en: "Best paired with Warm Almond Croissant."
    }
  },
  {
    id: "c2",
    name: "Precision V60 Pour Over",
    category: "coffee",
    price: "45k",
    image: HD_ASSETS.pourOver,
    badge: "Slow Bar",
    desc: {
      id: "Seduhan single origin presisi 2m 45s pada temperatur 93°C dalam server kaca Jepang tahan panas.",
      en: "Single origin extraction timed precisely to 2m 45s. Served in Japanese heat-resistant server."
    },
    tags: ["Rotating Origin", "Jasmine", "Clean Cup"],
    dietary: ["Vegan", "Zero Sugar"],
    pairing: {
      id: "Cocok dinikmati murni tanpa gula untuk menangkap lapisan note floral.",
      en: "Best enjoyed clean to savor delicate floral aromatic notes."
    }
  },
  {
    id: "c3",
    name: "Cascading Iced Latte",
    category: "coffee",
    price: "42k",
    image: HD_ASSETS.cascadingLatte,
    badge: "Best Seller",
    desc: {
      id: "Ekstraksi espresso mengalir ke atas balok es bening kristal dengan susu segar bertekstur sutra.",
      en: "Espresso poured over hand-cut clear ice block and textured whole milk with velvety foam."
    },
    tags: ["Specialty Roast", "Praline", "Sweet Cream"],
    dietary: ["Dairy", "Oat Milk Option"]
  },
  {
    id: "c4",
    name: "Classic Cappuccino",
    category: "coffee",
    price: "38k",
    image: HD_ASSETS.cappuccino,
    desc: {
      id: "Rasio tradisional 1:1:1 dengan micro-foam kukus 62°C disajikan dalam cangkir keramik handmade.",
      en: "1:1:1 traditional ratio, micro-foam steamed at 62°C in handcrafted ceramic cup."
    },
    tags: ["Eyckman Blend", "Hazelnut", "Caramel Finish"]
  },
  {
    id: "c5",
    name: "Kyoto Cold Drip (12hr)",
    category: "coffee",
    price: "45k",
    image: HD_ASSETS.coldDrip,
    badge: "Limited Daily",
    desc: {
      id: "Ekstraksi menara air-es tetes lambat 12 jam, dimatangkan 24 jam untuk kejernihan bebas rasa pahit tajam.",
      en: "Slow ice-water tower extraction, aged 24 hours under refrigeration for zero astringency."
    },
    tags: ["Ethiopian Guji", "Stone Fruit", "Black Tea"]
  },

  // FOOD / MAINS
  {
    id: "f1",
    name: "Tokyo Steak (Signature)",
    category: "food",
    price: "185k",
    image: HD_ASSETS.tokyoSteak,
    badge: "Chef's Cut",
    desc: {
      id: "Prime Australian striploin 200g, charred garlic butter medallion, asparagus panggang, reduksi shoyu gurih.",
      en: "Prime Australian striploin, charred garlic butter medallion, blistered asparagus, reduced shoyu demiglace."
    },
    tags: ["200g Prime Cut", "Herb Butter", "Medium Rare"],
    dietary: ["Halal Certified Kitchen", "High Protein"],
    pairing: {
      id: "Sempurna dipadukan dengan Hot Americano Gayo Wash yang segar.",
      en: "Perfect match with clean hot Gayo Wash Americano."
    }
  },
  {
    id: "f2",
    name: "Wheels Coffee Rubbed Steak",
    category: "food",
    price: "195k",
    image: HD_ASSETS.coffeeSteak,
    badge: "House Creation",
    desc: {
      id: "Daging prime berkerak bubuk espresso sangrai Wheels, lada hitam Sarawak, dan rosemary pan-basted.",
      en: "Encrusted in house espresso grounds, black pepper, rosemary and pan-basted with herb tallow."
    },
    tags: ["Coffee Crust", "Deep Umami", "Signature Recipe"],
    dietary: ["Halal Certified Kitchen"]
  },
  {
    id: "f3",
    name: "Salmon Ommu Rice",
    category: "food",
    price: "88k",
    image: HD_ASSETS.salmonOmurice,
    badge: "Comfort Favorite",
    desc: {
      id: "Selimut telur tornado lembut, nasi mentega bawang khas Jepang, fillet salmon Norwegia bakar dashi.",
      en: "Tornado soft-egg blanket, Japanese garlic butter rice, seared Norwegian salmon fillet with dashi gravy."
    },
    tags: ["Norwegian Salmon", "Dashi Gravy", "Crispy Skin"]
  },
  {
    id: "f4",
    name: "Aglio E Olio Beef Bacon",
    category: "food",
    price: "68k",
    image: HD_ASSETS.pastaAglio,
    desc: {
      id: "Spaghetti al dente dengan minyak zaitun extra virgin, bawang putih confit, beef bacon asap, dan chili flakes.",
      en: "Al dente spaghetti tossed with cold-pressed olive oil, confit garlic, smoked beef bacon, and chili flakes."
    },
    tags: ["Classic Italian", "Pecorino Romano", "Light Spice"]
  },
  {
    id: "f5",
    name: "Truffle Mushroom Hand-Cut Fries",
    category: "food",
    price: "48k",
    image: HD_ASSETS.truffleFries,
    desc: {
      id: "Kentang Idaho potong tangan, minyak truffle putih Prancis, taburan parmigiano reggiano dan cocolan garlic aioli.",
      en: "Hand-cut Idaho potatoes, white truffle oil, shaved grana padano, chives, house garlic aioli dip."
    },
    tags: ["White Truffle", "Parmigiano", "Sharable Bites"]
  },

  // DESSERT
  {
    id: "d1",
    name: "Classic Wheels Tiramisu",
    category: "dessert",
    price: "55k",
    image: HD_ASSETS.tiramisu,
    badge: "Must Order",
    desc: {
      id: "Biskuit ladyfingers direndam konsentrat espresso murni Wheels, krim mascarpone lembut, debu cokelat Belanda.",
      en: "Savoiardi ladyfingers saturated in house espresso concentrate, aged rum note, mascarpone cream."
    },
    tags: ["Espresso Soaked", "Dutch Cocoa", "Silky Texture"]
  },
  {
    id: "d2",
    name: "Vanilla Bean Creme Brulee",
    category: "dessert",
    price: "42k",
    image: HD_ASSETS.cremeBrulee,
    desc: {
      id: "Kustar vanila Madagaskar asli dengan lapisan karamel gula turbinado renyah yang dibakar api obor.",
      en: "Madagascan vanilla custard with torch-cracked turbinado caramel crown and fresh mint."
    },
    tags: ["Torch Cracked", "Madagascar Vanilla", "Creamy Center"]
  },
  {
    id: "d3",
    name: "Warm Almond Croissant",
    category: "dessert",
    price: "38k",
    image: HD_ASSETS.croissant,
    badge: "Baked 06:00 Daily",
    desc: {
      id: "Pastry mentega Prancis dua kali panggang dengan krim pasta frangipane almond lembut dan irisan almond renyah.",
      en: "Twice-baked artisanal laminated pastry with French butter and rich frangipane almond cream."
    },
    tags: ["French Butter", "Flaky Layers", "Toasted Almonds"]
  },
  {
    id: "d4",
    name: "Modernist Pandan Chiffon",
    category: "dessert",
    price: "45k",
    image: HD_ASSETS.modernistCake,
    desc: {
      id: "Spons pandan harum bertekstur bantal udara, lelehan gula aren organik cair, dan kelapa sangrai gurih.",
      en: "Pandan chiffon sponge, molten organic palm sugar center, roasted coconut flakes."
    },
    tags: ["Heritage Flavors", "Organic Palm Sugar", "Airy Sponge"]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    author: "Arya Bramantyo",
    role: "Local Guide • Level 7",
    initials: "AB",
    time: {
      id: "2 minggu lalu",
      en: "2 weeks ago"
    },
    rating: 5,
    tag: "coffee",
    quote: {
      id: "Kyoto Cold Drip 12 jam-nya tak tertandingi di Bandung. Jernih, floral, dan aftertaste manis tanpa pahit menggigit.",
      en: "Their 12-hour Kyoto Cold Drip is unmatched in Bandung. Clean, floral, and naturally sweet without bitterness."
    },
    body: {
      id: "Suasananya sangat tenang di pagi hari. Meja kayu solid ergonomis dan colokan di tiap sudut membuat waktu bekerja 3 jam terasa begitu damai diiringi wangi sangrai kopi segar.",
      en: "Incredible morning calm. Ergonomic oak tables and power sockets everywhere made a 3-hour focus session effortless alongside the fragrance of fresh roasts."
    }
  },
  {
    id: "r2",
    author: "Devina Larasati",
    role: "Culinary Connoisseur",
    initials: "DL",
    time: {
      id: "1 bulan lalu",
      en: "1 month ago"
    },
    rating: 5,
    tag: "food",
    quote: {
      id: "Tokyo Steak di sini levelnya sekelas restoran fine dining Jakarta, tapi atmosfernya tetap ramah santai.",
      en: "The Tokyo Steak here rivals Jakarta fine dining standards, yet retains a welcoming, unpretentious atmosphere."
    },
    body: {
      id: "Dagingnya empuk luar biasa dengan lelehan charred garlic butter gurih. Ditutup Tiramisu klasik dengan espresso tajam, ini kombinasi dinner terbaik di kawasan Pasteur.",
      en: "Remarkably tender beef with charred garlic butter. Finishing with their classic espresso tiramisu made for the ultimate dinner in Pasteur."
    }
  },
  {
    id: "r3",
    author: "Reza Wicaksono",
    role: "Specialty Coffee Enthusiast",
    initials: "RW",
    time: {
      id: "3 minggu lalu",
      en: "3 weeks ago"
    },
    rating: 5,
    tag: "coffee",
    quote: {
      id: "Barista Wheels sangat menguasai profiling seduhan. V60 Gayo wash-nya mengeluarkan note bergamot sempurna.",
      en: "The baristas truly master brew profiling. The V60 Gayo wash brought out pristine bergamot notes."
    },
    body: {
      id: "Pelayanannya patut diacungi jempol. Barista dengan ramah menceritakan profil rasa bean di hopper. Pengalaman ngopi lambat yang sangat memuaskan.",
      en: "First-rate hospitality. Baristas took time to explain the origins on the hopper. A truly rewarding slow coffee ritual."
    }
  },
  {
    id: "r4",
    author: "Sarah Claudia",
    role: "Architect & Regular Patron",
    initials: "SC",
    time: {
      id: "Baru saja",
      en: "Just recently"
    },
    rating: 5,
    tag: "space",
    quote: {
      id: "Arsitektur Japandi yang lapang, pencahayaan alami matahari pagi, dan playlist jazz akustik yang menenangkan jiwa.",
      en: "Airy Japandi architecture, morning sunbeams, and acoustic jazz melodies that soothe the soul."
    },
    body: {
      id: "Sanctuary terbaik di Bandung untuk membaca buku, meeting tenang, atau menikmati sarapan santai di akhir pekan bersama keluarga.",
      en: "The finest sanctuary in Bandung for reading, quiet meetings, or unhurried weekend brunch with family."
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: { id: "Sanctuary Utama Dua Lantai", en: "Two-Story Atelier Sanctuary" },
    category: "space",
    image: HD_ASSETS.interiorAtelier,
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]"
  },
  {
    id: "g2",
    title: { id: "Cascading Iced Specialty Latte", en: "Cascading Iced Specialty Latte" },
    category: "coffee",
    image: HD_ASSETS.cascadingLatte,
    aspect: "col-span-12 md:col-span-4 aspect-[4/5]"
  },
  {
    id: "g3",
    title: { id: "Drum Sangrai Cast Iron On-Site", en: "Cast Iron Roasting Drum Core" },
    category: "craft",
    image: HD_ASSETS.roasterDrum,
    aspect: "col-span-12 md:col-span-4 aspect-[4/5]"
  },
  {
    id: "g4",
    title: { id: "Tokyo Steak & Shoyu Demiglace", en: "Tokyo Steak & Shoyu Demiglace" },
    category: "food",
    image: HD_ASSETS.tokyoSteak,
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]"
  },
  {
    id: "g5",
    title: { id: "Area Outdoor Taman Hijau Asri", en: "Verdant Outdoor Garden Patio" },
    category: "space",
    image: HD_ASSETS.outdoorGarden,
    aspect: "col-span-12 md:col-span-6 aspect-[4/3]"
  },
  {
    id: "g6",
    title: { id: "Tiramisu Klasik Espreso Murni", en: "Artisan Mascarpone Tiramisu" },
    category: "food",
    image: HD_ASSETS.tiramisu,
    aspect: "col-span-12 md:col-span-6 aspect-[4/3]"
  }
];
