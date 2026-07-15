export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "art-of-the-perfect-pour-over",
    title: "The Art of the Perfect Pour-Over",
    excerpt:
      "Discover how water temperature, grind size, and timing come together to unlock the full flavor of your beans.",
    content:
      "Brewing a pour-over is less about equipment and more about attention. Start with water just off the boil, around 96°C, and a medium-fine grind. Bloom the grounds for 30 seconds to release trapped gases, then pour in slow, steady circles. The goal is an even extraction that highlights the bean's natural sweetness without tipping into bitterness. Practice makes perfect, so keep a journal of your ratios until you find your ideal cup.",
    author: "Elena Marquez",
    date: "2025-01-14",
    category: "Brewing Guides",
    image: "/mockups/nathan-dumlao-r-KfktlyBL0-unsplash.jpg",
  },
  {
    id: 2,
    slug: "single-origin-vs-blends",
    title: "Single-Origin vs. Blends: What's the Difference?",
    excerpt:
      "A closer look at how single-origin coffees showcase terroir while blends aim for balance and consistency.",
    content:
      "Single-origin coffees come from one specific region, farm, or even a single lot, letting the unique characteristics of that terroir shine through in the cup. Blends, on the other hand, combine beans from multiple origins to create a balanced, consistent flavor profile year-round. Neither is inherently better, it depends on whether you're chasing a distinctive story in every cup or a dependable everyday brew.",
    author: "Marcus Webb",
    date: "2025-02-03",
    category: "Coffee Education",
    image: "/mockups/nathan-dumlao-KixfBEdyp64-unsplash.jpg",
  },
  {
    id: 3,
    slug: "sustainable-sourcing-our-farmers",
    title: "Sustainable Sourcing: Meet Our Farmers",
    excerpt:
      "From Ethiopian highlands to Colombian valleys, we visit the farms that grow the beans behind every Haiku Coffee bag.",
    content:
      "Sustainability isn't just a label for us, it's a relationship. We work directly with smallholder farmers across Ethiopia, Colombia, and Guatemala, paying above fair-trade prices and investing in shade-grown cultivation practices that protect biodiversity. This season we visited three partner farms to see firsthand how careful harvesting and processing translate into the complex, vibrant flavors you taste in every cup.",
    author: "Priya Nair",
    date: "2025-03-11",
    category: "Sustainability",
    image: "/mockups/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg",
  },
  {
    id: 4,
    slug: "cold-brew-vs-iced-coffee",
    title: "Cold Brew vs. Iced Coffee: Which Should You Choose?",
    excerpt:
      "Both are refreshing, but the brewing process makes them worlds apart in flavor, caffeine, and acidity.",
    content:
      "Cold brew steeps coarsely ground coffee in cold water for 12-24 hours, producing a smooth, low-acidity concentrate. Iced coffee is simply hot-brewed coffee cooled and poured over ice, retaining more of the bright, acidic notes of the original brew. If you prefer a mellow, chocolatey cup, reach for cold brew. If you love a crisp, aromatic finish, iced coffee is your best bet.",
    author: "Diego Fontana",
    date: "2025-04-22",
    category: "Brewing Guides",
    image: "/mockups/nathan-dumlao-6VhPY27jdps-unsplash.jpg",
  },
];
