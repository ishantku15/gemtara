/* ============================================
   GEMTARA.IN — Posts Data
   All 20 gemstone articles metadata
   ============================================ */

const POSTS_DATA = [
  {
    slug: "ruby-gemstone-guide",
    hasImage: false,
    title: "Ruby: The King of Gemstones — Everything You Need to Know",
    excerpt: "Discover why rubies have captivated humanity for millennia. From the legendary Burmese 'pigeon blood' reds to modern treatments, this complete guide covers ruby's properties, grading, and buying secrets.",
    category: "Precious Gems",
    date: "2026-07-15",
    readTime: "12 min read",
    image: "images/ruby.jpg",
    tags: ["ruby", "precious gems", "corundum", "red gemstone"]
  },
  {
    slug: "sapphire-complete-guide",
    hasImage: false,
    title: "Sapphire: The Complete Guide to the Stone of Wisdom",
    excerpt: "Beyond the iconic blue, sapphires come in every color of the rainbow. Learn about padparadscha, star sapphires, Kashmir blues, and how to evaluate quality like a gemologist.",
    category: "Precious Gems",
    date: "2026-07-18",
    readTime: "14 min read",
    image: "images/sapphire.jpg",
    tags: ["sapphire", "precious gems", "corundum", "blue gemstone"]
  },
  {
    slug: "emerald-properties-guide",
    hasImage: false,
    title: "Emerald: Properties, Buying Guide & the Art of Green",
    excerpt: "The green fire of emeralds has seduced Cleopatra and modern collectors alike. Understand the Jardin, Colombian vs Zambian emeralds, and why inclusions can actually increase value.",
    category: "Precious Gems",
    date: "2026-07-21",
    readTime: "13 min read",
    image: "images/emerald.jpg",
    tags: ["emerald", "precious gems", "beryl", "green gemstone"]
  },
  {
    slug: "diamond-buying-guide",
    hasImage: false,
    title: "Diamond: The Ultimate Buying Guide — Beyond the 4Cs",
    excerpt: "Forget everything the jewelry store told you. This no-nonsense guide covers the real science behind diamond quality, fluorescence, lab-grown vs natural, and how to get maximum sparkle for your budget.",
    category: "Buying Guides",
    date: "2026-07-24",
    readTime: "15 min read",
    image: "images/diamond.jpg",
    tags: ["diamond", "buying guide", "4Cs", "engagement ring"]
  },
  {
    slug: "amethyst-healing-properties",
    hasImage: false,
    title: "Amethyst: Healing Properties, History & the Purple Crown",
    excerpt: "Once valued equal to diamonds, amethyst's rich purple hues carry centuries of mystical tradition. Explore its geological origins, crystal healing associations, and how to identify genuine specimens.",
    category: "Crystal Healing",
    date: "2026-07-27",
    readTime: "11 min read",
    image: "images/amethyst.jpg",
    tags: ["amethyst", "crystal healing", "quartz", "purple gemstone"]
  },
  {
    slug: "opal-types-and-colors",
    hasImage: false,
    title: "Opal: Types, Colors & the Mesmerizing Play of Fire",
    excerpt: "No two opals are alike. From the blazing fire opals of Mexico to the electric blues of Lightning Ridge, dive into the science of opal's legendary play-of-color and learn to distinguish precious from common.",
    category: "Semi-Precious Gems",
    date: "2026-07-30",
    readTime: "12 min read",
    image: "images/opal.jpg",
    tags: ["opal", "fire opal", "play of color", "australian opal"]
  },
  {
    slug: "turquoise-history-significance",
    hasImage: false,
    title: "Turquoise: 8,000 Years of History, Power & Significance",
    excerpt: "From ancient Egyptian pharaohs to Native American warriors, turquoise is one of humanity's oldest gemstones. Discover its geological formation, cultural importance across civilizations, and how to spot fakes.",
    category: "Semi-Precious Gems",
    date: "2026-08-02",
    readTime: "11 min read",
    image: "images/turquoise.jpg",
    tags: ["turquoise", "history", "native american", "blue-green gemstone"]
  },
  {
    slug: "garnet-varieties-guide",
    hasImage: false,
    title: "Garnet: A Guide to Its Stunning Varieties & Hidden Depths",
    excerpt: "Think garnets are just dark red stones? Think again. From electric green tsavorite to color-changing Malaia, the garnet family is one of gemology's most diverse and underappreciated groups.",
    category: "Semi-Precious Gems",
    date: "2026-08-04",
    readTime: "12 min read",
    image: "images/garnet.jpg",
    tags: ["garnet", "tsavorite", "rhodolite", "demantoid"]
  },
  {
    slug: "pearl-formation-types",
    hasImage: false,
    title: "Pearl: How Nature Creates Perfection — Formation, Types & Value",
    excerpt: "Born from irritation inside a living creature, pearls are nature's only gemstone that requires no cutting or polishing. Learn the difference between Akoya, South Sea, Tahitian, and freshwater pearls.",
    category: "Precious Gems",
    date: "2026-08-06",
    readTime: "13 min read",
    image: "images/pearl.jpg",
    tags: ["pearl", "akoya", "south sea", "tahitian"]
  },
  {
    slug: "topaz-colors-meanings",
    hasImage: false,
    title: "Topaz: Colors, Meanings & the Birthstone of November",
    excerpt: "Imperial topaz glows like captured sunset. Blue topaz sparkles like arctic ice. Explore the full spectrum of topaz varieties, their historical symbolism, and why this gemstone offers incredible value.",
    category: "Birthstones",
    date: "2026-08-08",
    readTime: "10 min read",
    image: "images/topaz.jpg",
    tags: ["topaz", "imperial topaz", "blue topaz", "november birthstone"]
  },
  {
    slug: "aquamarine-properties-care",
    hasImage: false,
    title: "Aquamarine: Properties, Meaning & Care Guide",
    excerpt: "Named after the Latin words for water and sea, aquamarine captures the essence of the ocean in crystalline form. Learn its connection to beryl, proper care techniques, and what makes a fine specimen.",
    category: "Birthstones",
    date: "2026-08-10",
    readTime: "10 min read",
    image: "images/aquamarine.jpg",
    tags: ["aquamarine", "beryl", "march birthstone", "blue gemstone"]
  },
  {
    slug: "citrine-guide-benefits",
    hasImage: false,
    title: "Citrine: The Merchant's Stone — Guide & Benefits",
    excerpt: "Known as the stone of abundance and manifestation, citrine's warm golden hues have made it a favorite among crystal healers and jewelry lovers alike. Learn natural vs heat-treated, and care tips.",
    category: "Crystal Healing",
    date: "2026-08-11",
    readTime: "10 min read",
    image: "images/citrine.jpg",
    tags: ["citrine", "crystal healing", "quartz", "yellow gemstone"]
  },
  {
    slug: "moonstone-mystical-properties",
    hasImage: false,
    title: "Moonstone: Mystical Properties & the Glow of Adularescence",
    excerpt: "That ethereal blue-white glow isn't magic — it's adularescence, and it makes moonstone one of the most captivating gems on Earth. Explore rainbow moonstone, star moonstone, and its deep spiritual lore.",
    category: "Crystal Healing",
    date: "2026-08-12",
    readTime: "11 min read",
    image: "images/moonstone.jpg",
    tags: ["moonstone", "adularescence", "feldspar", "crystal healing"]
  },
  {
    slug: "jade-cultural-significance",
    hasImage: false,
    title: "Jade: Cultural Significance, Types & the Stone of Heaven",
    excerpt: "In China, jade is more precious than gold. But did you know there are two completely different minerals called jade? Discover the fascinating world of jadeite vs nephrite, imperial jade, and carving traditions.",
    category: "Semi-Precious Gems",
    date: "2026-08-13",
    readTime: "13 min read",
    image: "images/jade.jpg",
    tags: ["jade", "jadeite", "nephrite", "chinese jade"]
  },
  {
    slug: "lapis-lazuli-ancient-gem",
    hasImage: false,
    title: "Lapis Lazuli: The Ancient Gem That Painted the Renaissance",
    excerpt: "The ultramarine pigment that colored the Sistine Chapel came from ground lapis lazuli. Discover this ancient gemstone's 6,000-year journey from Afghan mines to the world's greatest masterpieces.",
    category: "Semi-Precious Gems",
    date: "2026-08-14",
    readTime: "11 min read",
    image: "images/lapis-lazuli.jpg",
    tags: ["lapis lazuli", "ultramarine", "ancient gemstone", "blue stone"]
  },
  {
    slug: "tanzanite-rare-gemstone",
    hasImage: false,
    title: "Tanzanite: The Rare Gemstone Found in Only One Place on Earth",
    excerpt: "Discovered in 1967 near Mount Kilimanjaro, tanzanite exists in a geological window of just a few square miles. Learn why experts predict the mines will be exhausted within a generation.",
    category: "Precious Gems",
    date: "2026-08-15",
    readTime: "11 min read",
    image: "images/tanzanite.jpg",
    tags: ["tanzanite", "zoisite", "rare gemstone", "tanzania"]
  },
  {
    slug: "peridot-august-birthstone",
    hasImage: false,
    title: "Peridot: August's Birthstone — The Gem Born in Fire",
    excerpt: "Peridot is one of only two gemstones formed in the Earth's mantle rather than the crust, sometimes arriving via volcanic eruption or meteorite. Explore its extraterrestrial origins and vibrant green beauty.",
    category: "Birthstones",
    date: "2026-08-16",
    readTime: "10 min read",
    image: "images/peridot.jpg",
    tags: ["peridot", "olivine", "august birthstone", "volcanic gemstone"]
  },
  {
    slug: "morganite-pink-beryl-guide",
    hasImage: false,
    title: "Morganite: The Pink Beryl That's Taking the Jewelry World by Storm",
    excerpt: "Named after financier J.P. Morgan, morganite has surged in popularity as an alternative engagement ring stone. Learn about this blush-pink beryl's properties, grading, and why it's the gemstone of the decade.",
    category: "Semi-Precious Gems",
    date: "2026-08-17",
    readTime: "10 min read",
    image: "images/morganite.jpg",
    tags: ["morganite", "beryl", "pink gemstone", "engagement ring"]
  },
  {
    slug: "alexandrite-color-change-gem",
    hasImage: false,
    title: "Alexandrite: The Chameleon Gem — Emerald by Day, Ruby by Night",
    excerpt: "Alexandrite's dramatic color change from green to red is one of nature's most remarkable optical phenomena. Discover why fine alexandrite can cost more per carat than diamonds.",
    category: "Precious Gems",
    date: "2026-08-17",
    readTime: "12 min read",
    image: "images/alexandrite.jpg",
    tags: ["alexandrite", "chrysoberyl", "color change", "rare gemstone"]
  },
  {
    slug: "tourmaline-rainbow-gemstone",
    hasImage: false,
    title: "Tourmaline: The Rainbow Gemstone — Every Color Imaginable",
    excerpt: "No other gemstone matches tourmaline's color range. From electric neon Paraíba to watermelon slices of pink and green, tourmaline is nature's most colorful crystal family.",
    category: "Semi-Precious Gems",
    date: "2026-08-17",
    readTime: "12 min read",
    image: "images/tourmaline.jpg",
    tags: ["tourmaline", "paraiba", "watermelon tourmaline", "rainbow gemstone"]
  }
];

// Category definitions with icons
const CATEGORIES = [
  { name: "All", icon: "💎", slug: "all" },
  { name: "Precious Gems", icon: "👑", slug: "precious-gems" },
  { name: "Semi-Precious Gems", icon: "✨", slug: "semi-precious-gems" },
  { name: "Birthstones", icon: "🎂", slug: "birthstones" },
  { name: "Crystal Healing", icon: "🔮", slug: "crystal-healing" },
  { name: "Buying Guides", icon: "🛒", slug: "buying-guides" }
];
