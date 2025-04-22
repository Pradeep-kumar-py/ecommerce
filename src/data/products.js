export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 128,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Features include 30-hour battery life, comfortable ear cushions, and voice assistant support.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Voice assistant compatible",
      "Foldable design"
    ],
    images: [
      "/headphone.jpeg",
  
    ],
    category: "electronics",
    stock: 15,
    discount: 35,
  },
  {
    id: 2,
    name: "Slim Fit Casual Shirt",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.2,
    reviews: 56,
    description: "Modern slim-fit casual shirt made from premium cotton blend. Comfortable for all-day wear with a stylish design suitable for casual and semi-formal occasions.",
    features: [
      "100% cotton blend",
      "Slim fit design",
      "Machine washable",
      "Available in multiple colors",
      "Breathable fabric"
    ],
    images: [
      "/shirt.jpeg",
    ],
    category: "fashion",
    stock: 25,
    discount: 30,
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 213,
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and 10+ exercise modes. Waterproof design with a vibrant color display and 7-day battery life.",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant (50m)",
      "7-day battery life",
      "Smartphone notifications"
    ],
    images: [
      "/fitnesstracker.jpeg",
    ],
    category: "electronics",
    stock: 10,
    discount: 25,
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.4,
    reviews: 89,
    description: "Eco-friendly double-walled stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with a wide mouth for easy cleaning.",
    features: [
      "500ml capacity",
      "Double-walled insulation",
      "BPA-free construction",
      "Leak-proof lid",
      "Fits standard cup holders"
    ],
    images: [
      "/bottle.jpeg",
    ],
    category: "home",
    stock: 30,
    discount: 33,
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    price: 699.99,
    originalPrice: 899.99,
    rating: 4.8,
    reviews: 47,
    description: "High-performance DSLR camera with 24.1MP sensor, 4K video recording, and advanced autofocus system. Perfect for professional photographers and enthusiasts alike.",
    features: [
      "24.1MP APS-C CMOS sensor",
      "4K video recording",
      "45-point all cross-type AF system",
      "3.0-inch vari-angle touchscreen",
      "Built-in Wi-Fi and Bluetooth"
    ],
    images: [
      "/dslar.jpeg",
    ],
    category: "electronics",
    stock: 8,
    discount: 22,
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 159.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 112,
    description: "Comfortable ergonomic office chair with adjustable height, lumbar support, and breathable mesh back. Designed for long hours of comfortable seating.",
    features: [
      "Adjustable height and armrests",
      "Lumbar support",
      "Breathable mesh back",
      "360° swivel",
      "Heavy-duty base"
    ],
    images: [
      "/chair.jpeg",
    ],
    category: "furniture",
    stock: 12,
    discount: 36,
  },
];



export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/electronics.jpeg",
    slug: "electronics"
  },
  {
    id: 2,
    name: "Fashion",
    image: "/faison.jpeg",
    slug: "fashion"
  },
  {
    id: 3,
    name: "Home & Furniture",
    image: "/homeAndFurniture.jpeg",
    slug: "furniture"
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    image: "/Beauty.jpeg",
    slug: "beauty"
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    image: "/sports.jpeg",
    slug: "sports"
  },
];

export const banners = [
  {
    id: 1,
    title: "Summer Sale",
    subtitle: "Up to 50% off on selected items",
    image: "/summersell.png",
    link: "/sale/summer"
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Check out our latest products",
    image: "/newArrivals.jpeg",
    link: "/new-arrivals"
  },
  {
    id: 3,
    title: "Electronics Festival",
    subtitle: "Latest gadgets at unbeatable prices",
    image: "/electronicsFestivle.jpeg",
    link: "/category/electronics"
  }
];

export function getProductById(id) {
  return products.find(product => product.id === Number(id)) || null;
}

export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}
