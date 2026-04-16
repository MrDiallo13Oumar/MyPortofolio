import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  heroStats = [
    { value: '20+',   label: 'modules métier livrés' },
    { value: '4',     label: 'secteurs couverts'      },
    { value: '99.9%', label: 'objectif disponibilité' },
  ];

  aboutHighlights = [
    {
      number: '01',
      title: 'Architecture propre',
      text: 'Code structuré, maintenable, pensé pour évoluer sans dette technique.'
    },
    {
      number: '02',
      title: 'Orienté impact',
      text: 'Je construis pour les utilisateurs finaux, pas seulement pour la stack.'
    },
    {
      number: '03',
      title: 'Disponibilité & fiabilité',
      text: 'Plateformes critiques déployées avec monitoring et suivi de qualité.'
    },
  ];

  services = [
    {
      icon: 'web',
      title: 'Développement Frontend',
      detail: 'Applications Angular & Ionic performantes, composants réutilisables, UX orientée adoption.'
    },
    {
      icon: 'storage',
      title: 'Backend & API REST',
      detail: 'APIs PHP robustes, sécurisées et documentées. Modélisation MySQL optimisée.'
    },
    {
      icon: 'architecture',
      title: 'Architecture Plateforme',
      detail: 'Conception technique complète, schéma BDD, structuration des modules métier.'
    },
    {
      icon: 'phone_android',
      title: 'Applications Mobile',
      detail: 'Apps cross-platform Ionic/Angular avec UI native, offline-ready et performantes.'
    },
    {
      icon: 'terminal',
      title: 'DevOps & Déploiement',
      detail: 'CI/CD, déploiement serveur, Docker, monitoring et suivi de qualité en production.'
    },
    {
      icon: 'support_agent',
      title: 'Maintenance & Évolution',
      detail: 'Support correctif et évolutif. Reprise de projets existants. Audit de code.'
    },
  ];

  projects = [
    {
      context: 'Logistique Minière · Guinée',
      name: 'MINEO',
      challenge: 'Connecter les acteurs logistiques du secteur minier guinéen sur une plateforme centralisée.',
      solution: 'Plateforme Angular/PHP avec gestion des acteurs, KYC, dashboards et modules métier sur 26 tables MySQL.',
      impact: 'Première solution digitale dédiée à la logistique minière en Guinée.',
      stack: 'Angular · PHP · MySQL · Ionic'
    },
    {
      context: 'Billetterie & Événements',
      name: 'GuinéeTicket',
      challenge: 'Digitiser la billetterie événements et transport en Guinée avec QR codes et abonnements.',
      solution: 'Plateforme multi-modules avec scan QR, gestion providers, planning FullCalendar et backoffice admin.',
      impact: 'Système opérationnel couvrant événements, transport et loisirs.',
      stack: 'Angular · Ionic · PHP · MySQL'
    },
    {
      context: 'Mobilité Urbaine',
      name: 'CovoiturGN',
      challenge: 'Créer une app de covoiturage domicile-travail adaptée au contexte guinéen.',
      solution: 'App Ionic/Angular avec matching conducteur/passager, chat, et backoffice Tailwind complet.',
      impact: 'Solution locale pensée pour les contraintes de mobilité de Conakry.',
      stack: 'Ionic · Angular · PHP · MySQL · Tailwind'
    },
  ];

  techCategories = [
    { label: 'Frontend', items: ['Angular', 'Ionic', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Angular Material'] },
    { label: 'Backend',  items: ['PHP', 'Spring Boot', 'REST API', 'ORM custom', 'JWT', 'QR Code'] },
    { label: 'Base de données', items: ['MySQL', 'Modélisation relationnelle', 'Optimisation requêtes'] },
    { label: 'DevOps & Outils', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'cPanel', 'Figma'] },
  ];

  timeline = [
    {
      period: '2024 – Présent',
      title: 'Fondateur & Lead Dev · DevFusion',
      text: 'Création et direction technique de projets digitaux complexes pour des clients guinéens et internationaux.'
    },
    {
      period: '2023 – 2024',
      title: 'Développeur Full-Stack · Projets Clients',
      text: 'Développement de plateformes critiques : billetterie, e-santé, civic-tech. Stack Angular/PHP/MySQL.'
    },
    {
      period: '2021 – 2023',
      title: 'Apprentissage & Premiers Projets',
      text: 'Maîtrise progressive du stack Angular + PHP, livraison de premiers projets métier et modules admin.'
    },
  ];

  workflowSteps = [
    { num: '01', title: 'Discovery', text: 'Cadrage des objectifs, besoins et contraintes techniques.' },
    { num: '02', title: 'Design System', text: 'Architecture UX/UI, priorisation des modules métier.' },
    { num: '03', title: 'Build', text: 'Développement itératif avec feedback régulier.' },
    { num: '04', title: 'Deploy', text: 'Mise en production, suivi qualité et évolutions.' },
  ];

  testimonials = [
    {
      quote: 'Diallo a su comprendre nos besoins complexes et livrer une plateforme robuste en délai record.',
      author: 'Client 1',
      role: 'Directeur Projet · Conakry'
    },
    {
      quote: 'Un développeur sérieux, structuré, et avec une vraie vision produit. Je le recommande.',
      author: 'Client 2',
      role: 'CEO · Startup Guinée'
    },
    {
      quote: 'La qualité du code et l\'architecture livrée dépassait largement nos attentes.',
      author: 'Client 3',
      role: 'CTO · Agence digitale'
    },
  ];

  faqs = [
    {
      q: 'Vous travaillez avec des clients hors Guinée ?',
      a: 'Oui, je collabore en remote avec des équipes internationales sans contrainte de fuseau horaire.'
    },
    {
      q: 'Prenez-vous en charge la maintenance après livraison ?',
      a: 'Oui, je propose du support évolutif et correctif selon vos besoins, en forfait ou en régie.'
    },
    {
      q: 'Combien de temps pour un MVP plateforme métier ?',
      a: 'En général de 4 à 10 semaines selon la complexité, le périmètre fonctionnel et les priorités.'
    },
    {
      q: 'Quels secteurs couvrez-vous ?',
      a: 'Santé, agri, civic-tech, logistique minière, événementiel, mobilité. Toute plateforme métier complexe.'
    },
  ];
}