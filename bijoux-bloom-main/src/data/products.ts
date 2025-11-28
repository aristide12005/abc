import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  priceValue: number;
  description: string;
  category: string;
  material: string;
  gemstone?: string;
  weight?: string;
  dimensions?: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "golden-harmony-necklace",
    image: product1,
    title: "Golden Harmony Necklace",
    price: "$2,450",
    priceValue: 2450,
    description: "Elegant 18k gold necklace with diamond pendant, perfect for any occasion",
    category: "necklaces",
    material: "18k Yellow Gold",
    gemstone: "0.25ct Diamond",
    weight: "4.2g",
    dimensions: "45cm chain length",
    details: [
      "Handcrafted 18k yellow gold chain",
      "Natural diamond pendant (0.25 carats)",
      "Lobster clasp closure",
      "Comes with certificate of authenticity",
      "Complimentary gift packaging"
    ]
  },
  {
    id: "eternal-diamond-ring",
    image: product2,
    title: "Eternal Diamond Ring",
    price: "$3,890",
    priceValue: 3890,
    description: "Stunning engagement ring featuring a brilliant cut diamond in platinum setting",
    category: "rings",
    material: "Platinum 950",
    gemstone: "1.0ct Diamond",
    weight: "5.8g",
    dimensions: "Available in sizes 4-10",
    details: [
      "Platinum 950 setting",
      "1.0 carat brilliant cut diamond",
      "Color: E, Clarity: VS1",
      "GIA certified",
      "Lifetime warranty included",
      "Free resizing within first year"
    ]
  },
  {
    id: "pearl-elegance-earrings",
    image: product3,
    title: "Pearl Elegance Earrings",
    price: "$1,650",
    priceValue: 1650,
    description: "Timeless pearl drop earrings with 14k gold accents and delicate design",
    category: "earrings",
    material: "14k Yellow Gold",
    gemstone: "Freshwater Pearls",
    weight: "3.5g (pair)",
    dimensions: "2.5cm drop length",
    details: [
      "14k yellow gold posts and accents",
      "AAA grade freshwater pearls",
      "8-9mm pearl diameter",
      "Secure butterfly backs",
      "Hypoallergenic materials",
      "Elegant gift box included"
    ]
  },
  {
    id: "radiance-diamond-bracelet",
    image: product4,
    title: "Radiance Diamond Bracelet",
    price: "$4,200",
    priceValue: 4200,
    description: "Luxurious tennis bracelet with ethically sourced diamonds in 18k gold",
    category: "bracelets",
    material: "18k White Gold",
    gemstone: "3.0ct Total Diamond Weight",
    weight: "12.4g",
    dimensions: "18cm standard length",
    details: [
      "18k white gold setting",
      "40 brilliant cut diamonds (3.0 carats total)",
      "Each diamond: Color G-H, Clarity VS2",
      "Secure box clasp with safety latch",
      "Ethically sourced conflict-free diamonds",
      "Professional cleaning service included"
    ]
  },
  {
    id: "emerald-mystique-ring",
    image: product5,
    title: "Emerald Mystique Ring",
    price: "$5,100",
    priceValue: 5100,
    description: "Exquisite emerald center stone surrounded by diamonds in yellow gold",
    category: "rings",
    material: "18k Yellow Gold",
    gemstone: "2.5ct Emerald, 0.5ct Diamonds",
    weight: "6.2g",
    dimensions: "Available in sizes 4-10",
    details: [
      "Colombian emerald center stone (2.5 carats)",
      "Halo setting with 20 diamonds (0.5 carats total)",
      "18k yellow gold band",
      "Emerald certification included",
      "Custom sizing available",
      "Lifetime authenticity guarantee"
    ]
  },
  {
    id: "vintage-rose-brooch",
    image: product6,
    title: "Vintage Rose Brooch",
    price: "$2,800",
    priceValue: 2800,
    description: "Antique-inspired brooch with gemstones and intricate gold filigree work",
    category: "brooches",
    material: "14k Rose Gold",
    gemstone: "Mixed Gemstones",
    weight: "8.7g",
    dimensions: "5cm x 3cm",
    details: [
      "14k rose gold with filigree detail",
      "Ruby, sapphire, and diamond accents",
      "Vintage-inspired design",
      "Secure pin clasp",
      "One-of-a-kind piece",
      "Luxury presentation box"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: string, limit: number = 3): Product[] => {
  return products
    .filter(product => product.id !== currentProductId)
    .slice(0, limit);
};
