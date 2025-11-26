export type Cajita = {
  slug: string;
  name: string;
  tagline?: string;
  price: number;
  weight: number;
  items: string[];
  image: string;
  origin: string;
  marbling: string;
  featured?: boolean;
  note?: string;
};

export const cajitas: Cajita[] = [
  {
    slug: "el-carnita-asada",
    name: "El Carnita Asada",
    tagline: "Ármate una buena carnita asada",
    price: 3349,
    weight: 3.9,
    items: [
      "Arrachera Inside Marinada Top Choice 1000g",
      "Short Ribs Top Choice 1000g",
      "T-Bone Top Choice 300g",
      "2 New York Taurus Gold 200g c/u",
      "2 Ribeye Taurus Gold 225g c/u",
      "Vacio Black Angus UMI 800g",
      "Queso Asadero Los Moreno 700g",
      "Tortillas Gorditas Los Moreno",
      "Hielera Mediana"
    ],
    note: "Precio sujeto a peso real de los productos.",
    image: "https://images.unsplash.com/photo-1599458254573-84ab610cf643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBiYnF8ZW58MXx8fHwxNzY0MDMwOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "México",
    marbling: "BMS 3-4",
    featured: true
  },
  {
    slug: "el-rey-taquero",
    name: "El Rey Taquero",
    price: 5290,
    weight: 4.5,
    items: ["Pastor", "Arrachera", "Costillas", "Chorizos"],
    image: "https://images.unsplash.com/photo-1612156542176-87840e140c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBiZWVmJTIwY3V0c3xlbnwxfHx8fDE3NjQwNDQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "México",
    marbling: "BMS 3-4"
  },
  {
    slug: "el-uruguayo",
    name: "El Uruguayo",
    price: 6199,
    weight: 5.5,
    items: ["Wagyu Cross", "Black Angus", "Taurus Gold"],
    image: "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2FneXUlMjBiZWVmJTIwc3RlYWt8ZW58MXx8fHwxNzY0MTA0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "Uruguay",
    marbling: "BMS 5-6",
    featured: true
  },
  {
    slug: "el-super-parrillero",
    name: "El Súper Parrillero",
    price: 6390,
    weight: 4.6,
    items: ["Ribeye", "New York", "Arrachera", "Costillas"],
    image: "https://images.unsplash.com/photo-1682159173065-2b49ffd61adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmliZXllJTIwc3RlYWt8ZW58MXx8fHwxNzY0MTA0OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "EE.UU.",
    marbling: "Choice / Prime"
  },
  {
    slug: "el-ahumador",
    name: "El Ahumador",
    price: 6399,
    weight: 8.6,
    items: ["Brisket", "Costillas BBQ", "Pulled Pork", "Chorizos"],
    image: "https://images.unsplash.com/photo-1629574814018-f4dce483a32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZ3VzJTIwYmVlZnxlbnwxfHx8fDE3NjQxMDQ5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "EE.UU.",
    marbling: "Prime"
  },
  {
    slug: "el-americano",
    name: "El Americano",
    price: 7599,
    weight: 4.4,
    items: ["Prime Ribeye", "Prime NY Strip", "T-Bone"],
    image: "https://images.unsplash.com/photo-1632154023554-c2975e9be348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXRjaGVyJTIwc2hvcCUyMG1lYXR8ZW58MXx8fHwxNzY0MDYyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "EE.UU.",
    marbling: "Prime BMS 4-5",
    featured: true
  },
  {
    slug: "el-maestro-parrillero",
    name: "El Maestro Parrillero",
    price: 8889,
    weight: 4.5,
    items: ["Tomahawk", "Cowboy Steak", "Porterhouse"],
    image: "https://images.unsplash.com/photo-1677050205812-1fbf1a832efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWd5dSUyMG1hcmJsaW5nJTIwbWVhdHxlbnwxfHx8fDE3NjQxMDQ5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "EE.UU.",
    marbling: "Prime"
  },
  {
    slug: "el-campechano",
    name: "El Campechano",
    price: 10750,
    weight: 5.5,
    items: ["Wagyu", "Prime", "Angus Premium", "Complementos"],
    image: "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ2lmdCUyMGJveCUyMGJ1dGNoZXJ8ZW58MXx8fHwxNzY0MTA0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "Mixto",
    marbling: "BMS 5-6",
    featured: true
  },
  {
    slug: "el-australiano",
    name: "El Australiano",
    price: 13059,
    weight: 5.8,
    items: ["Full Blood Wagyu", "Wagyu Ribeye", "Wagyu NY Strip"],
    image: "https://images.unsplash.com/photo-1677050205812-1fbf1a832efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWd5dSUyMG1hcmJsaW5nJTIwbWVhdHxlbnwxfHx8fDE3NjQxMDQ5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "Australia",
    marbling: "BMS 6-7",
    featured: true
  },
  {
    slug: "el-rey-de-la-parrilla",
    name: "El Rey de la Parrilla",
    price: 15179,
    weight: 6.4,
    items: ["Wagyu A5", "Prime Tomahawk", "Wagyu Ribeye", "Complementos"],
    image: "https://images.unsplash.com/photo-1682159173065-2b49ffd61adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmliZXllJTIwc3RlYWt8ZW58MXx8fHwxNzY0MTA0OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    origin: "Japón / EE.UU.",
    marbling: "A5 BMS 9+",
    featured: true
  }
];
