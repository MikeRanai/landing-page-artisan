export const siteConfig = {
  entreprise: {
    nom: "Entreprise BM",
    gerant: "Belli Manuel",
    activite: "Couvreur & Rénovation",
    siren: "801 727 108",
    telephone: "0693 87 74 57",
    email: "entreprisebm.reunion@gmail.com",
    adresse: {
      rue: "16 rue des Pêches-Cavales",
      codePostal: "97434",
      ville: "Saint-Paul",
    },
    assurances: {
      decennale: true,
      rcPro: true,
    },
  },
  seo: {
    titre: "Entreprise BM — Couvreur & Rénovation à La Réunion",
    description:
      "Artisan Couvreur à Saint-Paul (974) - Entreprise BM. Spécialiste en rénovation de toiture, nettoyage de façade, étanchéité et pose de gouttières à La Réunion. Devis gratuit !",
  },
  couleurs: {
    primary: "#f1a63a",
    secondary: "#1a1a1a",
  },
  reseauxSociaux: {
    facebook: "",
    instagram: "",
  },
  temoignages: [
    {
      prenom: "Jean-Pierre",
      ville: "Saint-Paul",
      texte: "Travail impeccable sur notre toiture. L'équipe a été ponctuelle et professionnelle. Je recommande vivement !",
      note: 5,
    },
    {
      prenom: "Marie",
      ville: "Le Port",
      texte: "Ravalement de façade parfait. Notre maison a retrouvé tout son éclat. Rapport qualité-prix excellent.",
      note: 5,
    },
    {
      prenom: "David",
      ville: "Saint-Gilles",
      texte: "Problème d'étanchéité résolu rapidement. M. Belli est un artisan sérieux et de confiance.",
      note: 5,
    },
    {
      prenom: "Sophie",
      ville: "La Possession",
      texte: "Très satisfaite du nettoyage de toiture et de la pose de gouttières. Devis respecté, délais tenus.",
      note: 5,
    },
  ],
  zoneIntervention: {
    description:
      "Nous intervenons sur toute la côte ouest et le nord de La Réunion.",
    villes: [
      "Saint-Paul",
      "Le Port",
      "La Possession",
      "Saint-Gilles-les-Bains",
      "Saint-Leu",
      "Les Trois-Bassins",
      "L'Étang-Salé",
      "Saint-Louis",
      "Saint-Denis",
      "Sainte-Marie",
      "Le Tampon",
      "Saint-Pierre",
      "Entre-Deux",
      "Cilaos",
      "Salazie",
    ],
  },
  faq: [
    {
      question: "Quels types de toiture réparez-vous ?",
      reponse:
        "Nous intervenons sur tous types de toiture : tôle, bac acier, tuiles et toitures-terrasses. Que ce soit pour un remplacement partiel ou une réfection complète, nous avons l'expertise adaptée au climat réunionnais.",
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      reponse:
        "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons chez vous pour évaluer les travaux et vous fournissons un devis détaillé sous 48 heures.",
    },
    {
      question: "Êtes-vous assuré pour les travaux ?",
      reponse:
        "Absolument. L'Entreprise BM dispose d'une assurance décennale et d'une responsabilité civile professionnelle (RC Pro), garantissant une couverture complète pour tous nos chantiers.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      reponse:
        "Nous intervenons principalement sur la côte ouest (Saint-Paul, Le Port, Saint-Gilles, Saint-Leu) et le nord de La Réunion (Saint-Denis, Sainte-Marie), mais nous pouvons nous déplacer sur toute l'île selon les projets.",
    },
    {
      question: "Combien de temps durent les travaux en moyenne ?",
      reponse:
        "La durée varie selon l'ampleur du chantier : un nettoyage de façade prend 1 à 2 jours, une rénovation de toiture 3 à 5 jours, et un projet complet peut s'étendre sur 1 à 2 semaines. Nous vous communiquons un planning précis dès le devis.",
    },
  ],
} as const;
