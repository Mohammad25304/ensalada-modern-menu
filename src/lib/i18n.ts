export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export type Localized = Record<Locale, string>;

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const paths = {
  en: { home: "/", menu: "/menu", contact: "/contact" },
  es: { home: "/es", menu: "/es/menu", contact: "/es/contact" },
} as const;

export type AppPath = (typeof paths)[Locale][keyof (typeof paths)["en"]];

export const SITE_URL = "https://ensalada-modern-menu.lovable.app";

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export const t = {
  nav: {
    home: { en: "Home", es: "Inicio" },
    menu: { en: "Menu", es: "Menú" },
    contact: { en: "Contact", es: "Contacto" },
    order: { en: "Order Now", es: "Pedir Ahora" },
    openMenu: { en: "Open menu", es: "Abrir menú" },
    closeMenu: { en: "Close menu", es: "Cerrar menú" },
    language: { en: "Language", es: "Idioma" },
  },
  tags: {
    Vegan: { en: "Vegan", es: "Vegano" },
    Vegetarian: { en: "Vegetarian", es: "Vegetariano" },
    "Gluten-Free": { en: "Gluten-Free", es: "Sin Gluten" },
    "High-Protein": { en: "High-Protein", es: "Alto en Proteína" },
  },
  home: {
    badge: { en: "Now Open in Beirut", es: "Ya Abierto en Beirut" },
    heroLine1: { en: "Fresh Salads,", es: "Ensaladas Frescas," },
    heroLine2: { en: "Made Modern.", es: "Con Estilo Moderno." },
    heroSub: {
      en: "Seasonal bowls, crisp greens, and bold dressings — built for the way you eat today.",
      es: "Bowls de temporada, verduras crujientes y aderezos con carácter — pensados para tu forma de comer hoy.",
    },
    viewMenu: { en: "View Menu", es: "Ver Menú" },
    contactUs: { en: "Contact Us", es: "Contáctanos" },
    featuredEyebrow: { en: "Fan Favorites", es: "Los Favoritos" },
    featuredTitle: { en: "Featured Menu Items", es: "Platos Destacados" },
    featuredDesc: {
      en: "Three bowls our guests come back for, again and again.",
      es: "Tres bowls por los que nuestros clientes vuelven una y otra vez.",
    },
    seeFullMenu: { en: "See Full Menu", es: "Ver Menú Completo" },
    storyEyebrow: { en: "Our Story", es: "Nuestra Historia" },
    aboutTitle: { en: "About ENSALADA", es: "Sobre ENSALADA" },
    aboutP1: {
      en: "ENSALADA was born from a simple belief: salad should never be boring. We combine farm-fresh produce, house-made dressings, and globally inspired flavors into bowls that are as nourishing as they are delicious.",
      es: "ENSALADA nació de una idea simple: una ensalada nunca debe ser aburrida. Combinamos productos frescos de la huerta, aderezos caseros y sabores de todo el mundo en bowls tan nutritivos como deliciosos.",
    },
    aboutP2: {
      en: "Every ingredient is chosen with care — from crisp local greens to ripe seasonal toppings — so every bite feels like a fresh start.",
      es: "Cada ingrediente se elige con cuidado — desde verduras locales crujientes hasta toppings maduros de temporada — para que cada bocado sea un nuevo comienzo.",
    },
    stat1: { en: "Fresh Daily", es: "Fresco a Diario" },
    stat2: { en: "Signature Bowls", es: "Bowls de Autor" },
    stat3: { en: "Boring Salads", es: "Ensaladas Aburridas" },
    heroAlt: { en: "Vibrant mixed green salad bowl", es: "Bowl vibrante de ensalada verde mixta" },
    aboutAlt: {
      en: "Colorful Ensalada signature bowl",
      es: "Bowl de autor de Ensalada lleno de color",
    },
  },
  menu: {
    eyebrow: { en: "Discover", es: "Descubre" },
    title: { en: "Our Menu", es: "Nuestro Menú" },
    description: {
      en: "Organized by craving. Pick a category and find your next favorite bowl.",
      es: "Organizado por antojo. Elige una categoría y encuentra tu próximo bowl favorito.",
    },
  },
  contact: {
    eyebrow: { en: "Get in Touch", es: "Hablemos" },
    title: { en: "Contact Us", es: "Contáctanos" },
    description: {
      en: "Have a question, a catering request, or just want to say hello? We'd love to hear from you.",
      es: "¿Tienes una pregunta, una solicitud de catering o solo quieres saludar? Nos encantará escucharte.",
    },
    name: { en: "Name", es: "Nombre" },
    namePlaceholder: { en: "Your name", es: "Tu nombre" },
    email: { en: "Email", es: "Correo electrónico" },
    phone: { en: "Phone (optional)", es: "Teléfono (opcional)" },
    message: { en: "Message", es: "Mensaje" },
    messagePlaceholder: {
      en: "Tell us what's on your mind...",
      es: "Cuéntanos qué tienes en mente...",
    },
    send: { en: "Send Message", es: "Enviar Mensaje" },
    sending: { en: "Sending...", es: "Enviando..." },
    success: {
      en: "Thanks, {name}! We'll be in touch soon.",
      es: "¡Gracias, {name}! Te contactaremos pronto.",
    },
    errName: {
      en: "Name must be at least 2 characters",
      es: "El nombre debe tener al menos 2 caracteres",
    },
    errEmail: { en: "Please enter a valid email", es: "Introduce un correo válido" },
    errMessage: {
      en: "Message must be at least 10 characters",
      es: "El mensaje debe tener al menos 10 caracteres",
    },
    location: { en: "Location", es: "Ubicación" },
    phoneLabel: { en: "Phone", es: "Teléfono" },
    emailLabel: { en: "Email", es: "Correo" },
    hours: { en: "Hours", es: "Horario" },
    follow: { en: "Follow Us", es: "Síguenos" },
    followText: {
      en: "Stay updated on new bowls, seasonal specials, and behind-the-scenes from the kitchen.",
      es: "Entérate de nuevos bowls, especiales de temporada y lo que pasa en la cocina.",
    },
  },
  info: {
    address: {
      en: "123 Green Leaf Avenue\nBeirut, Lebanon",
      es: "Avenida Green Leaf 123\nBeirut, Líbano",
    },
    hoursWeek: { en: "Mon – Fri: 10am – 9pm", es: "Lun – Vie: 10:00 – 21:00" },
    hoursWeekend: { en: "Sat – Sun: 11am – 10pm", es: "Sáb – Dom: 11:00 – 22:00" },
    footerTagline: {
      en: "Fresh, modern salads made with seasonal ingredients and bold flavors. Eat green, feel great.",
      es: "Ensaladas frescas y modernas con ingredientes de temporada y sabores con carácter. Come verde, siéntete bien.",
    },
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },
  seo: {
    homeTitle: {
      en: "ENSALADA — Fresh Salads, Made Modern",
      es: "ENSALADA — Ensaladas Frescas con Estilo Moderno",
    },
    homeDesc: {
      en: "ENSALADA serves fresh, modern salads with seasonal ingredients and bold flavors. Explore our menu and visit us in Beirut.",
      es: "ENSALADA sirve ensaladas frescas y modernas con ingredientes de temporada y sabores intensos. Descubre nuestro menú y visítanos en Beirut.",
    },
    menuTitle: { en: "Menu — ENSALADA", es: "Menú — ENSALADA" },
    menuDesc: {
      en: "Explore the ENSALADA menu: signature bowls, leafy greens, protein salads, warm roasted bowls, and refreshing sides.",
      es: "Explora el menú de ENSALADA: bowls de autor, verdes frescos, ensaladas con proteína, bowls templados y acompañamientos.",
    },
    contactTitle: { en: "Contact — ENSALADA", es: "Contacto — ENSALADA" },
    contactDesc: {
      en: "Get in touch with ENSALADA. Visit us in Beirut, call for reservations, or send a message.",
      es: "Ponte en contacto con ENSALADA. Visítanos en Beirut, llama para reservar o envíanos un mensaje.",
    },
  },
} satisfies Record<string, Record<string, Localized>>;

export function alternateLinks(page: "home" | "menu" | "contact") {
  return [
    { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${paths.en[page]}` },
    { rel: "alternate", hrefLang: "es", href: `${SITE_URL}${paths.es[page]}` },
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${paths.en[page]}` },
  ];
}
