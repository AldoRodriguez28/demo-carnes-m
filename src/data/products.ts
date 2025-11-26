export type Product = {
  slug: string;
  name: string;
  origin: string;
  priceFrom: number;
  image: string;
  description: string;
  badge?: string;
  marbling?: string;
  aging?: string;
  delivery?: string;
  story?: string;
};

export const products: Product[] = [
  {
    slug: "wagyu-japones-a5",
    name: "Wagyu Japonés A5",
    origin: "Japón",
    priceFrom: 3500,
    image: "https://images.unsplash.com/photo-1677050205812-1fbf1a832efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWd5dSUyMG1hcmJsaW5nJTIwbWVhdHxlbnwxfHx8fDE3NjQxMDQ5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Marmoleo extremo, umami profundo y textura sedosa.",
    badge: "A5",
    marbling: "BMS 12",
    aging: "28 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Corte importado con trazabilidad completa desde Japón, ideal para sellar rápido y disfrutar el sabor puro."
  },
  {
    slug: "full-blood-wagyu",
    name: "Full Blood Wagyu",
    origin: "Australia 2GR",
    priceFrom: 2800,
    image: "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ2lmdCUyMGJveCUyMGJ1dGNoZXJ8ZW58MXx8fHwxNzY0MTA0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Perfil dulce y mantequilloso, con grasa uniforme.",
    badge: "Más Premium",
    marbling: "BMS 9+",
    aging: "21 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Ganado 100% Wagyu con alimentación controlada. Ideal para término medio y laminado fino."
  },
  {
    slug: "wagyu-cross-ink",
    name: "Wagyu Cross INK",
    origin: "Uruguay",
    priceFrom: 1800,
    image: "https://images.unsplash.com/photo-1682159173065-2b49ffd61adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmliZXllJTIwc3RlYWt8ZW58MXx8fHwxNzY0MTA0OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Equilibrio perfecto entre sabor intenso y suavidad.",
    marbling: "BMS 7-8",
    aging: "21 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Cruce balanceado para parrillas largas. Excelente para steaks gruesos y sellados cortos."
  },
  {
    slug: "wagyu-snake-river",
    name: "Wagyu Snake River Farms",
    origin: "USA",
    priceFrom: 2200,
    image: "https://images.unsplash.com/photo-1599458254573-84ab610cf643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBiYnF8ZW58MXx8fHwxNzY0MDMwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Corte balanceado, jugoso y con notas de nuez.",
    badge: "USDA Gold",
    marbling: "BMS 8-9",
    aging: "14 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Criado en Idaho con dieta de granos. Perfecto para ahumadores y cocciones lentas."
  },
  {
    slug: "black-angus-umi",
    name: "Black Angus UMI",
    origin: "Uruguay",
    priceFrom: 1400,
    image: "https://images.unsplash.com/photo-1629574814018-f4dce483a32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZ3VzJTIwYmVlZnxlbnwxfHx8fDE3NjQxMDQ5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sabor robusto, ideal para asados intensos.",
    badge: "Bestseller",
    marbling: "BMS 5-6",
    aging: "21 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Novillos en pradera con final de grano. Cortes con gran jugosidad y costra crujiente."
  },
  {
    slug: "black-angus-prime",
    name: "Black Angus Prime",
    origin: "USA",
    priceFrom: 1600,
    image: "https://images.unsplash.com/photo-1612156542176-87840e140c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBiZWVmJTIwY3V0c3xlbnwxfHx8fDE3NjQwNDQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Clásico americano, jugoso y con buen marmoleo.",
    marbling: "USDA Prime",
    aging: "14 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Selección Prime certificada. Se luce en término medio y parrillas de alta temperatura."
  },
  {
    slug: "top-choice",
    name: "Top Choice",
    origin: "USA",
    priceFrom: 1200,
    image: "https://images.unsplash.com/photo-1632154023554-c2975e9be348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXRjaGVyJTIwc2hvcCUyMG1lYXR8ZW58MXx8fHwxNzY0MDYyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Versátil y confiable para parrilladas frecuentes.",
    marbling: "USDA Choice",
    aging: "14 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Corte noble para cocinar a diario. Buen balance de grasa y carne magra."
  },
  {
    slug: "taurus-gold",
    name: "Taurus Gold",
    origin: "Uruguay",
    priceFrom: 1500,
    image: "https://images.unsplash.com/photo-1682159173065-2b49ffd61adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmliZXllJTIwc3RlYWt8ZW58MXx8fHwxNzY0MTA0OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Perfil intenso, gran veteado y textura firme.",
    marbling: "BMS 6-7",
    aging: "21 días húmeda",
    delivery: "Entrega 24h refrigerada",
    story: "Ganado taurino con finalización premium. Recomendado para parrillas de carbón."
  },
  {
    slug: "charcuteria-complementos",
    name: "Charcutería & Complementos",
    origin: "Selección Premium",
    priceFrom: 250,
    image: "https://images.unsplash.com/photo-1599458254573-84ab610cf643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBiYnF8ZW58MXx8fHwxNzY0MDMwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Curados y acompañamientos para completar tu mesa.",
    badge: "Nuevo",
    marbling: "Mix",
    aging: "N/A",
    delivery: "Entrega 24h refrigerada",
    story: "Selección de curados, sales y salsas para complementar tus cortes premium."
  }
];
