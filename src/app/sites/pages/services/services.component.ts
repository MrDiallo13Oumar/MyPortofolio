import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
featuredProjects = [
  {
    name: "Cate BTP",
    context: "BTP / Entreprise",
    description: "Site corporate pour une entreprise du secteur BTP.",
    challenge: "Présenter clairement les services et renforcer la crédibilité.",
    solution: "Site moderne avec structure claire et UX orientée conversion.",
    impact: "Amélioration de la visibilité et de l'image professionnelle.",
    stack: "HTML · CSS · JS",
    link: "https://cate-btp.com/sites/home"
  },
  {
    name: "Afri DigiCom",
    context: "Agence digitale",
    description: "Plateforme de présentation de services digitaux.",
    challenge: "Mettre en avant les offres et générer des leads.",
    solution: "Landing page optimisée avec sections marketing.",
    impact: "Meilleure acquisition de clients.",
    stack: "HTML · CSS · JS",
    link: "https://afridigicom.com/sites/home"
  },
  {
    name: "Mineo Sites",
    context: "Plateforme web",
    description: "Collection de templates/sites web modernes.",
    challenge: "Créer une base de démonstration rapide.",
    solution: "Déploiement sur Vercel avec UI simple.",
    impact: "Accélération du prototypage.",
    stack: "Angular · Vercel",
    link: "https://mineo-sites.vercel.app/sites/home"
  },
  {
    name: "Guinée Ticket",
    context: "Event / Ticketing",
    description: "Plateforme de gestion et vente de tickets.",
    challenge: "Digitaliser la billetterie locale.",
    solution: "Interface simple pour achat et gestion.",
    impact: "Facilite l'accès aux événements.",
    stack: "Web App",
    link: "https://guineeticket.com/sites/home"
  },
  {
    name: "Cabinet M2C",
    context: "Cabinet / Business",
    description: "Site vitrine pour cabinet professionnel.",
    challenge: "Valoriser l'expertise et rassurer les clients.",
    solution: "Design corporate propre et structuré.",
    impact: "Image professionnelle renforcée.",
    stack: "HTML · CSS",
    link: "https://cabinetm2c.com/sites/home"
  },
  {
    name: "Massago Business Group",
    context: "Entreprise",
    description: "Site corporate multi-activités.",
    challenge: "Présenter plusieurs domaines d’activité.",
    solution: "Structure modulaire claire.",
    impact: "Visibilité globale de l’entreprise.",
    stack: "Web",
    link: "https://massagobusinessgroup.com/"
  },
  {
    name: "Awards du Numérique Guinée",
    context: "Civic Tech",
    description: "Plateforme complète de gestion des awards.",
    challenge: "Gérer candidatures, votes et jury.",
    solution: "App complète avec backend sécurisé.",
    impact: "Digitalisation totale du processus.",
    stack: "Angular · PHP · MySQL · JWT",
    link: "https://lesawardsdunumérique.com"
  }
];

otherProjects = [
  {
    name: "Dashboard Admin Angular",
    desc: "Gestion utilisateurs, rôles et permissions.",
    stack: "Angular Material",
    link: "#"
  },
  {
    name: "API Auth PHP",
    desc: "Auth sécurisée avec JWT.",
    stack: "PHP · MySQL",
    link: "#"
  }
];

miniProjects = [
  { name: "Formulaire multi-step", link: "#" },
  { name: "Upload image PHP", link: "#" },
  { name: "Dashboard stats", link: "#" },
  { name: "Login JWT", link: "#" }
];;
}
