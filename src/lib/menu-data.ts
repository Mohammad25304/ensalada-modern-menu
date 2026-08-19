import type { Localized } from "@/lib/i18n";

export type DietaryTag = "Vegan" | "Vegetarian" | "Gluten-Free" | "High-Protein";

export interface MenuItem {
  id: string;
  name: Localized;
  description: Localized;
  price: number;
  category: CategoryId;
  image: string;
  tags: DietaryTag[];
  featured?: boolean;
}

export type CategoryId = "signature" | "leafy" | "protein" | "warm" | "sides";

export interface MenuCategory {
  id: CategoryId;
  name: Localized;
  description: Localized;
}

export const categories: MenuCategory[] = [
  {
    id: "signature",
    name: { en: "Signature Bowls", es: "Bowls de Autor" },
    description: {
      en: "Our most-loved creations, built to satisfy.",
      es: "Nuestras creaciones más queridas, hechas para satisfacer.",
    },
  },
  {
    id: "leafy",
    name: { en: "Leafy Greens", es: "Verdes Frescos" },
    description: {
      en: "Light, crisp, and endlessly refreshing.",
      es: "Ligeras, crujientes e infinitamente refrescantes.",
    },
  },
  {
    id: "protein",
    name: { en: "Protein Salads", es: "Ensaladas con Proteína" },
    description: {
      en: "Fuel up with lean, clean power.",
      es: "Recarga energía con proteína limpia y ligera.",
    },
  },
  {
    id: "warm",
    name: { en: "Warm & Roasted", es: "Templadas y Asadas" },
    description: {
      en: "Hearty bowls for when you need a little warmth.",
      es: "Bowls sustanciosos para cuando necesitas algo de calor.",
    },
  },
  {
    id: "sides",
    name: { en: "Sides & Drinks", es: "Acompañamientos y Bebidas" },
    description: {
      en: "Perfect complements and refreshing sips.",
      es: "Complementos perfectos y sorbos refrescantes.",
    },
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "ensalada-bowl",
    name: { en: "Ensalada Bowl", es: "Bowl Ensalada" },
    description: {
      en: "Mixed greens, creamy avocado, cherry tomatoes, radish coins, toasted seeds, and our bright citrus dressing.",
      es: "Mezcla de verdes, aguacate cremoso, tomates cherry, rodajas de rábano, semillas tostadas y nuestro aderezo cítrico.",
    },
    price: 14,
    category: "signature",
    image: "/images/hero-salad.jpg",
    tags: ["Vegan", "Gluten-Free"],
    featured: true,
  },
  {
    id: "mediterranean-bowl",
    name: { en: "Mediterranean Bowl", es: "Bowl Mediterráneo" },
    description: {
      en: "Fluffy quinoa, roasted chickpeas, cucumber ribbons, kalamata olives, feta crumbles, and lemon-tahini drizzle.",
      es: "Quinoa esponjosa, garbanzos asados, láminas de pepino, aceitunas kalamata, feta desmenuzado y aderezo de limón y tahini.",
    },
    price: 15,
    category: "signature",
    image: "/images/salad-signature.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "garden-classic",
    name: { en: "Garden Classic", es: "Clásica del Huerto" },
    description: {
      en: "Butter lettuce, peppery arugula, shaved cucumber, fresh herbs, and a delicate lemon vinaigrette.",
      es: "Lechuga mantecosa, rúcula picante, pepino en láminas, hierbas frescas y una delicada vinagreta de limón.",
    },
    price: 11,
    category: "leafy",
    image: "/images/salad-leafy.jpg",
    tags: ["Vegan", "Gluten-Free"],
  },
  {
    id: "citrus-flower",
    name: { en: "Citrus & Flower Salad", es: "Ensalada de Cítricos y Flores" },
    description: {
      en: "Mixed greens, seasonal citrus segments, edible flowers, and a champagne-citrus dressing.",
      es: "Mezcla de verdes, gajos de cítricos de temporada, flores comestibles y aderezo de champán y cítricos.",
    },
    price: 12,
    category: "leafy",
    image: "/images/salad-leafy.jpg",
    tags: ["Vegan", "Gluten-Free"],
    featured: true,
  },
  {
    id: "chicken-power",
    name: { en: "Chicken Power Salad", es: "Ensalada Power de Pollo" },
    description: {
      en: "Grilled chicken breast, jammy egg, avocado, cherry tomatoes, mixed greens, and whole-grain mustard dressing.",
      es: "Pechuga de pollo a la parrilla, huevo mollet, aguacate, tomates cherry, mezcla de verdes y aderezo de mostaza antigua.",
    },
    price: 16,
    category: "protein",
    image: "/images/salad-protein.jpg",
    tags: ["Gluten-Free", "High-Protein"],
    featured: true,
  },
  {
    id: "salmon-nicoise",
    name: { en: "Salmon Niçoise", es: "Niçoise de Salmón" },
    description: {
      en: "Seared salmon, tender green beans, olives, baby potatoes, soft herbs, and caper dressing.",
      es: "Salmón sellado, judías verdes tiernas, aceitunas, patatas baby, hierbas suaves y aderezo de alcaparras.",
    },
    price: 18,
    category: "protein",
    image: "/images/salad-protein.jpg",
    tags: ["Gluten-Free", "High-Protein"],
  },
  {
    id: "harvest-bowl",
    name: { en: "Harvest Bowl", es: "Bowl de Cosecha" },
    description: {
      en: "Roasted butternut squash, brussels sprouts, farro, pomegranate jewels, and creamy tahini dressing.",
      es: "Calabaza asada, coles de Bruselas, farro, granos de granada y aderezo cremoso de tahini.",
    },
    price: 15,
    category: "warm",
    image: "/images/salad-warm.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "roasted-roots",
    name: { en: "Roasted Roots & Greens", es: "Raíces Asadas y Verdes" },
    description: {
      en: "Earthy beets, carrots, massaged kale, toasted walnuts, and a tangy balsamic glaze.",
      es: "Remolacha, zanahoria, kale masajeado, nueces tostadas y una glasa balsámica con carácter.",
    },
    price: 14,
    category: "warm",
    image: "/images/salad-warm.jpg",
    tags: ["Vegan", "Gluten-Free"],
  },
  {
    id: "berry-goat-cheese",
    name: { en: "Berry & Goat Cheese Side", es: "Guarnición de Frutos Rojos y Queso de Cabra" },
    description: {
      en: "Baby spinach, fresh strawberries, crumbled goat cheese, candied walnuts, and poppy-seed dressing.",
      es: "Espinaca baby, fresas frescas, queso de cabra desmenuzado, nueces caramelizadas y aderezo de semillas de amapola.",
    },
    price: 9,
    category: "sides",
    image: "/images/salad-side.jpg",
    tags: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "green-juice",
    name: { en: "Fresh-Pressed Green Juice", es: "Jugo Verde Recién Prensado" },
    description: {
      en: "Cucumber, celery, green apple, ginger, and kale. Cold-pressed daily.",
      es: "Pepino, apio, manzana verde, jengibre y kale. Prensado en frío cada día.",
    },
    price: 6,
    category: "sides",
    image: "/images/salad-side.jpg",
    tags: ["Vegan", "Gluten-Free"],
  },
  {
    id: "lemonade",
    name: { en: "Homemade Lemonade", es: "Limonada Casera" },
    description: {
      en: "Freshly squeezed lemons, a touch of agave, and sparkling water.",
      es: "Limones recién exprimidos, un toque de agave y agua con gas.",
    },
    price: 4,
    category: "sides",
    image: "/images/salad-side.jpg",
    tags: ["Vegan", "Gluten-Free"],
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);
