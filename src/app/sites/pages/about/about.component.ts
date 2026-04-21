import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
experiences = [
  {
    period: "Août 2025 - Aujourd’hui",
    role: "Développeur Web",
    company: "Afridigicom",
    tasks: [
      "Développement d’applications Angular connectées à APIs sécurisées",
      "Intégration de services tiers (paiement, SMS, auth)",
      "Création d’interfaces modernes et performantes"
    ]
  },
  {
    period: "Août 2024 - Mars 2025",
    role: "Développeur Web",
    company: "SPA Technologie",
    tasks: [
      "Conception d’applications web et mobile",
      "Développement full-stack",
      "Optimisation des performances"
    ]
  },
  {
    period: "Février 2024 - Août 2024",
    role: "Assistant IT",
    company: "La GDJ",
    tasks: [
      "Support technique",
      "Maintenance des systèmes",
      "Gestion des incidents IT"
    ]
  },
  {
    period: "Novembre 2022 - Janvier 2024",
    role: "Développeur Web",
    company: "Tra-Consulting",
    tasks: [
      "Développement d’applications web",
      "Participation à plusieurs projets clients",
      "Travail en équipe agile"
    ]
  }
];
timeline = [
  {
    date: "2023",
    title: "Début en développement",
    desc: "Apprentissage des bases HTML, CSS, JavaScript."
  },
  {
    date: "2024",
    title: "Montée en compétences",
    desc: "Maîtrise de Angular, PHP et MySQL avec projets concrets."
  },
  {
    date: "2025",
    title: "Projets réels & plateformes",
    desc: "Développement de solutions e-santé, civic tech et business."
  },
  {
    date: "Aujourd’hui",
    title: "Développeur Full-Stack",
    desc: "Création de plateformes modernes et évolutives."
  }
];

skills = [
  {
    title: "Frontend Architecture",
    desc: "Angular structuré, UI moderne, UX fluide."
  },
  {
    title: "Backend sécurisé",
    desc: "API PHP, JWT, gestion des accès et sécurité."
  },
  {
    title: "Base de données",
    desc: "Modélisation MySQL optimisée et scalable."
  },
  {
    title: "Full-stack product",
    desc: "Conception complète de plateformes."
  }
];

highlights = [
  {
    number: "01",
    title: "Projets réels livrés",
    desc: "Plusieurs plateformes en production."
  },
  {
    number: "02",
    title: "Stack maîtrisée",
    desc: "Angular, PHP, MySQL en production."
  },
  {
    number: "03",
    title: "Approche produit",
    desc: "Focus sur impact réel et usage."
  }
];
} 