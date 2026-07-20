export interface ShopItems {
  id: number;
  type: string;
  price: number;
  onSale: boolean;
  title: string;
  description: string;
  image: string;
}

// const shopTypes = ["merch", "beans", "equipment"]

export const ShopItems: ShopItems[] = [
  {
    id: 1,
    title: "Sun T-Shirt",
    type: "merch",
    price: 11,
    onSale: false,
    description:
      "Oversized T-Shirt with sun emblem on back.",
    image: "/shop/merch/lala-azizli-T-r1Y3vG-7M-unsplash.jpg",
  },
  {
    id: 2,
    title: "ESTd Mug",
    type: "merch",
    price: 15,
    onSale: false,
    description:
      "ESTd coffee mug with location.",
    image: "/shop/merch/calvin-craig-bOg8cRMh6To-unsplash.jpg",
  },
  {
    id: 3,
    title: "Grace Chapel T-Shirt",
    type: "merch",
    price: 10,
    onSale: false,
    description:
      "Grace Fitted T-Shirt with Eagle emblem on the back.",
    image: "/shop/merch/keagan-henman-XYtuOYfIg_M-unsplash.jpg",
  },
  {
    id: 4,
    title: "Random Charity Artifact",
    type: "merch",
    price: 8,
    onSale: false,
    description:
      "Get a random coffee shop artifact by supporting various coffee farmers.",
    image: "/shop/merch/christina-radevich-PoG2cCucTHE-unsplash.jpg",
  },
  {
    id: 5,
    title: "Brazil 250g Coffee Beans",
    type: "beans",
    price: 12,
    onSale: false,
    description:
      "High-quality coffee beans from Brazil.",
    image: "/shop/coffee/lex-sirikiat-QouiCn7u6kw-unsplash.jpg",
  },
  {
    id: 6,
    title: "1kg Random Blend",
    type: "beans",
    price: 12,
    onSale: true,
    description:
      "Perfectly fine, yet it did not meet our quality standards. Offered at a discounted price.",
    image: "/shop/coffee/justus-menke-83ijPo1g9og-unsplash.jpg",
  },
  {
    id: 7,
    title: "Ethiopia Natural 250g Coffee Beans",
    type: "beans",
    price: 16,
    onSale: false,
    description:
      "Natural Ethiopian coffee beans of High Quality.",
    image: "/shop/coffee/nathan-dumlao-bx_JfZtQ-Hs-unsplash.jpg",
  },
  {
    id: 8,
    title: "Espresso Glass",
    type: "equipment",
    price: 35,
    onSale: false,
    description:
      "4 x 6cl Espresso Glasses in thick and sturdy glassware.",
    image: "/shop/equipment/nathan-dumlao-dvuHNTJxIsg-unsplash.jpg",
  },
  {
    id: 9,
    title: "Barsetto Espresso Machine",
    type: "equipment",
    price: 1450,
    onSale: false,
    description:
      "High-performance espresso machine by Barsetto. Maintenance service sold separately.",
    image: "/shop/equipment/qingyu-Ft1yz6M6-yQ-unsplash.jpg",
  },
  {
    id: 10,
    title: "Cappuccino Mugs",
    type: "equipment",
    price: 50,
    onSale: true,
    description:
      "2 x 2.5dl Cappuccino Mugs in thick and sturdy porcelain.",
    image: "/shop/equipment/tabitha-turner-KWZ-rg9o76A-unsplash.jpg",
  },
]
