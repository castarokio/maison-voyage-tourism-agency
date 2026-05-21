export const bookingServices = [
  {
    id: "international-luxe",
    title: "Voyage international premium",
    copy: "Dubai, Maldives, Istanbul, Bali et sejours haut de gamme avec hotels, vols et transferts.",
    accent: "Private airport, hotel, experiences",
  },
  {
    id: "local-discovery",
    title: "Tourisme local curate",
    copy: "Sahara, villes algeriennes, week-ends nature et experiences locales bien encadrees.",
    accent: "Local expert, route, comfort",
  },
  {
    id: "religious",
    title: "Omra / Hajj accompagne",
    copy: "Programmes spirituels avec visa, hotels proches, encadrement et assistance continue.",
    accent: "Visa, proximity, guidance",
  },
  {
    id: "custom",
    title: "Voyage sur mesure",
    copy: "Une proposition creee autour de votre budget, rythme, contraintes et occasion.",
    accent: "Concierge planning",
  },
];

export const smartQuestions = [
  {
    id: "intent",
    title: "Quel est le vrai role de ce voyage ?",
    helper: "On commence par l'intention, pas par une destination. C'est ce qui rend la recommandation utile.",
    options: [
      { label: "Me reposer dans un cadre luxueux", value: "luxury", hint: "Hotel fort, peu de friction, service prive" },
      { label: "Accomplir Omra/Hajj avec serenite", value: "spiritual", hint: "Proximite, encadrement, assistance" },
      { label: "Vivre une experience locale rare", value: "local", hint: "Sahara, culture, nature, routes choisies" },
      { label: "Celebrer une occasion importante", value: "romance", hint: "Lune de miel, anniversaire, surprise" },
    ],
  },
  {
    id: "control",
    title: "Quel niveau de prise en charge voulez-vous ?",
    helper: "Certaines personnes veulent juste reserver. D'autres veulent qu'on tienne tout le voyage.",
    options: [
      { label: "Tout gerer pour moi", value: "full", hint: "Vol, hotel, transferts, planning, suivi" },
      { label: "Me proposer 2 ou 3 options solides", value: "guided", hint: "Comparaison courte, claire, sans bruit" },
      { label: "Adapter un package existant", value: "package", hint: "Base prete avec ajustements rapides" },
      { label: "Verifier mon idee avant paiement", value: "audit", hint: "Conseil expert avant decision" },
    ],
  },
  {
    id: "constraint",
    title: "Qu'est-ce qui peut ruiner le voyage si c'est mal gere ?",
    helper: "Cette question aide l'agence a proteger le point sensible du dossier.",
    options: [
      { label: "Visa, documents et delais", value: "paperwork", hint: "Dossier clair, rappels, verification" },
      { label: "Distance hotel / lieux importants", value: "proximity", hint: "Surtout pour Omra, famille, fatigue" },
      { label: "Budget qui derape", value: "budget", hint: "Prix cadrés, options lisibles" },
      { label: "Trop de deplacements", value: "pace", hint: "Rythme doux, moins de fatigue" },
    ],
  },
  {
    id: "style",
    title: "Quelle ambiance doit dominer le sejour ?",
    helper: "On choisit l'energie du voyage avant les activites.",
    options: [
      { label: "Calme, spirituelle, bien accompagnee", value: "calm", hint: "Peu de stress, presence humaine" },
      { label: "Cinematique et impressionnante", value: "cinematic", hint: "Paysages, adresses, photos fortes" },
      { label: "Romantique et discret", value: "private", hint: "Moments a deux, surprises, privacy" },
      { label: "Facile pour famille", value: "family", hint: "Securite, confort, logistique simple" },
    ],
  },
  {
    id: "timing",
    title: "Quand voulez-vous qu'un conseiller reprenne votre demande ?",
    helper: "Le paiement part en verification, puis l'agence confirme manuellement.",
    options: [
      { label: "Aujourd'hui si possible", value: "today", hint: "Dossier prioritaire apres preuve CCP" },
      { label: "Cette semaine", value: "week", hint: "Appel organise avec proposition" },
      { label: "Apres reception de la selection", value: "after-match", hint: "Je veux d'abord voir les services matches" },
      { label: "Je prepare pour plus tard", value: "later", hint: "Pas urgent, mais je veux cadrer" },
    ],
  },
];

export const serviceMatches = {
  luxury: ["Private Blue Maldives", "Dubai Signature Weekend", "Bosphore Heritage Escape"],
  spiritual: ["Omra Serenite Premium", "Programme Hajj accompagne", "Omra famille proche Haram"],
  local: ["Sahara Luxe Under the Stars", "Constantine Heritage Weekend", "Djanet slow expedition"],
  romance: ["Bali Private Villa Ritual", "Bosphore Heritage Escape", "Maldives anniversary escape"],
};

export const ccpPayment = {
  number: "0044197170",
  key: "33",
  accountName: "Maison Voyage Agency",
};
