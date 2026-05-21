import {
  BadgeCheck,
  CalendarDays,
  ConciergeBell,
  CreditCard,
  Globe2,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const heroImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
];

export const destinations = [
  {
    name: "Dubai",
    tag: "Skyline, desert clubs, private yacht",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Istanbul",
    tag: "Boutique palais, Bosphore, gastronomie",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    tag: "Villas sur pilotis et recifs prives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sahara",
    tag: "Camp etoile, routes nomades, silence",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Omra",
    tag: "Accompagnement premium et serenite",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bali",
    tag: "Villas jungle, temples, retraites privees",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Luxury Escapes",
    copy: "Suites signature, transferts prives et moments reserves.",
    icon: Sparkles,
  },
  {
    title: "Spiritual Journeys",
    copy: "Omra, Hajj et circuits spirituels avec assistance complete.",
    icon: HeartHandshake,
  },
  {
    title: "Romantic Getaways",
    copy: "Iles, rooftops, diners prives et adresses confidentielles.",
    icon: Star,
  },
  {
    title: "Family Adventures",
    copy: "Sejours fluides, surs et riches pour toutes les generations.",
    icon: Users,
  },
  {
    title: "Desert Experiences",
    copy: "Campements haut de gamme, 4x4, astronomie et culture locale.",
    icon: MapPin,
  },
];

export const packages = [
  {
    slug: "sahara-luxe",
    destination: "Sahara",
    title: "Sahara Luxe Under the Stars",
    duration: "5 jours",
    price: "a partir de 189 000 DA",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Camp prive", "Chef nomade", "Guide expert"],
    type: "Desert Experiences",
  },
  {
    slug: "maldives-private-blue",
    destination: "Maldives",
    title: "Private Blue Maldives",
    duration: "7 nuits",
    price: "a partir de 1 950 EUR",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Villa pilotis", "Spa lagon", "Hydravion"],
    type: "Luxury Escapes",
  },
  {
    slug: "dubai-signature",
    destination: "Dubai",
    title: "Dubai Signature Weekend",
    duration: "4 jours",
    price: "a partir de 980 EUR",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    highlights: ["5 etoiles", "Safari prive", "Yacht sunset"],
    type: "Luxury Escapes",
  },
  {
    slug: "istanbul-bosphore",
    destination: "Istanbul",
    title: "Bosphore Heritage Escape",
    duration: "6 jours",
    price: "a partir de 790 EUR",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Palais boutique", "Croisiere", "Table privee"],
    type: "Romantic Getaways",
  },
  {
    slug: "omra-serenite",
    destination: "Makkah & Madinah",
    title: "Omra Serenite Premium",
    duration: "12 jours",
    price: "a partir de 465 000 DA",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Hotels proches", "Visa inclus", "Encadrement"],
    type: "Spiritual Journeys",
  },
  {
    slug: "bali-private-villa",
    destination: "Bali",
    title: "Bali Private Villa Ritual",
    duration: "8 jours",
    price: "a partir de 1 240 EUR",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Villa jungle", "Temple sunrise", "Wellness"],
    type: "Family Adventures",
  },
];

export const trustItems = [
  { title: "Agence verifiee", copy: "Partenaires certifies et contrats clairs.", icon: BadgeCheck },
  { title: "Reservation securisee", copy: "Paiements proteges et confirmations rapides.", icon: ShieldCheck },
  { title: "Experiences curatees", copy: "Chaque itineraire est teste et affine.", icon: ConciergeBell },
  { title: "Support multilingue", copy: "Francais d'abord, arabe et anglais prets.", icon: Languages },
  { title: "Experts voyage", copy: "Conseillers humains avant et pendant le sejour.", icon: Globe2 },
];

export const bookingSteps = [
  { title: "Informations voyageurs", icon: Users },
  { title: "Personnalisation", icon: CalendarDays },
  { title: "Paiement", icon: CreditCard },
  { title: "Confirmation", icon: BadgeCheck },
];
