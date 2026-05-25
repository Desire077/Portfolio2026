// Données centrales du portfolio. Tout est typé pour éviter les bugs.

export const profile = {
  firstName: 'Désiré',
  lastName: 'Nguembet',
  shortName: 'Désiré N.',
  title: 'Développeur Full-Stack & DevOps en devenir',
  subtitle: '',
  location: 'France',
  email: 'ngudesijaph@gmail.com',
  available: true,
  hero: {
    eyebrow: 'Étudiant BTS SIO',
    headline: 'Je transforme le code en expériences.',
    headlineEmphasis: '',
    headlineSuffix: '',
    description:
      "Étudiant BTS SIO passionné par le développement web et le DevOps. Je crée des applications qui allient performance technique et expérience utilisateur exceptionnelle.",
  },
  socials: {
    github: 'https://github.com/Desire077',
    linkedin: 'https://linkedin.com/in/desire-nguembet',
    email: 'mailto:ngudesijaph@gmail.com',
  },
} as const

export const stats = [
  { value: '3', label: 'années de pratique', sub: 'développement & sécurité' },
  { value: '5+', label: 'projets livrés', sub: 'dont 1 stage entreprise' },
  { value: 'BTS SIO', label: 'formation en cours', sub: 'option SLAM' },
  { value: 'Disponible', label: 'pour opportunités', sub: 'DevOps ou Développement web' },
] as const

// ─── Compétences classées par axe (dev-first) ────────────────
export const skills = {
  
  dev: {
    title: 'Développement',
    items: ['TypeScript', 'React', 'Node.js', 'JavaScript', 'PHP', 'HTML/CSS', 'PostgreSQL'],
  },
  devops: {
    title: 'DevSecOps',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux', 'Monitoring', 'Sécurité applicative'],
  },
  network: {
    title: 'Réseau',
    items: ['TCP/IP', 'Routage', 'Switching', 'DNS', 'VPN', 'Sécurité réseau'],
  },
  office: {
    title: 'Bureautique informatique',
    items: ['Pack Office', 'Support utilisateur', 'Administration Windows', 'Gestion des emails', 'Maintenance PC', 'Certification ELYES CLIC SERVICES'],
  },
} as const

// ─── Stages professionnels — sections dédiées et complète ───────────
export const internships = [{
  company: 'LCIE Bureau Veritas',
  role: 'Stagiaire — Développement Web',
  period: '2025',
  duration: 'Stage',
  location: 'Fontenay-aux-roses(92)',
  pitch:
    "Lors de mon stage chez LCIE Bureau Veritas, j’ai participé au développement d’une plateforme web destinée à améliorer la gestion et l’affichage des données issues d’une base de données. Mon travail a principalement consisté à mettre en place un système d’affichage dynamique utilisant AJAX afin de récupérer et afficher des informations en temps réel dans une interface utilisateur, sans rechargement de la page. Cette expérience m’a permis de mieux comprendre les échanges entre le front-end et le back-end ainsi que le fonctionnement des requêtes asynchrones dans une application web moderne.",
  context:
    "J’ai également développé un formulaire permettant l’envoi et la gestion des commandes clients. Cette mission m’a amené à travailler sur la collecte, le traitement et la transmission des données tout en veillant à l’ergonomie et à la fluidité de l’interface utilisateur. À travers ce projet, j’ai renforcé mes compétences en développement web, en structuration d’applications et en interaction avec les bases de données.\n\nCette immersion en environnement professionnel m’a permis d’acquérir une meilleure compréhension des méthodes de travail en entreprise, du développement collaboratif et des bonnes pratiques liées à la conception d’applications web.",
  missions: [
    {
      title: 'Développement d\'affichage dynamique AJAX',
      detail:
        "Mise en place d’un système d’affichage dynamique utilisant AJAX afin de récupérer et afficher des informations en temps réel dans une interface utilisateur, sans rechargement de la page.",
      tags: ['AJAX', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      title: 'Création de formulaire de gestion des commandes',
      detail:
        "Développement d’un formulaire permettant l’envoi et la gestion des commandes clients, en veillant à la collecte, au traitement et à la transmission des données ainsi qu’à l’ergonomie et à la fluidité de l’interface utilisateur.",
      tags: ['Formulaire', 'Validation', 'UX/UI'],
    },
    {
      title: 'Intégration des technologies professionnelles',
      detail:
        "Utilisation de Docker pour la conteneurisation des applications, MariaDB pour la gestion des bases de données et Bootstrap pour la conception d’interfaces responsives et modernes.",
      tags: ['Docker', 'MariaDB', 'Bootstrap', 'DevOps'],
    },

  ],
  learnings: [
    "Cette expérience m’a permis de mieux comprendre les échanges entre le front-end et le back-end ainsi que le fonctionnement des requêtes asynchrones dans une application web moderne.",
    "À travers ce projet, j’ai renforcé mes compétences en développement web, en structuration d’applications et en interaction avec les bases de données.",
    "Cette immersion en environnement professionnel m’a permis d’acquérir une meilleure compréhension des méthodes de travail en entreprise, du développement collaboratif et des bonnes pratiques liées à la conception d’applications web.",
  ],
  stack: ['AJAX', 'JavaScript', 'PHP', 'MySQL', 'Docker', 'MariaDB', 'Bootstrap'],
},
{
  company: 'Inside Runway',
  role: 'Stagiaire — Infrastructure Cloud & DevOps',
  period: '2026',
  duration: 'Stage de fin d\'étude',
  location: 'Paris(75)',
  pitch:
    "Lors de mon stage chez Inside Runway, j’ai découvert un environnement technique orienté cloud et infrastructure moderne. J’ai participé à des missions de déploiement et d’administration d’environnements informatiques, ce qui m’a permis d’approfondir ma compréhension des architectures cloud et des pratiques DevOps.",
  context:
    "J’ai travaillé sur la configuration et le déploiement d’infrastructures cloud en utilisant Kubernetes et Scaleway. J’ai également participé à la gestion des outils de collaboration comme LarkSuite pour le suivi de projet et la coordination d’équipe. Cette expérience m’a permis de consolider mes compétences en conteneurisation, orchestration et gestion des déploiements dans un environnement professionnel.",
  missions: [
    {
      title: 'Déploiement d’infrastructures cloud',
      detail:
        "Implémentation et gestion d’environnements cloud sur Scaleway, avec un focus sur la disponibilité et la stabilité des ressources.",
      tags: ['Scaleway', 'Cloud', 'Infrastructure'],
    },
    {
      title: 'Orchestration de services avec Kubernetes',
      detail:
        "Prise en main de Kubernetes pour orchestrer des applications conteneurisées et assurer la cohérence des déploiements.",
      tags: ['Kubernetes', 'Docker', 'Orchestration'],
    },
    {
      title: 'Organisation et suivi de projet',
      detail:
        "Utilisation de LarkSuite pour le suivi des tâches, la communication d’équipe et l’organisation des livrables techniques.",
      tags: ['LarkSuite', 'Communication', 'Gestion de projet'],
    },
    {
      title: 'Approche DevOps moderne',
      detail:
        "Découverte des principes de la conteneurisation, des déploiements automatisés et de l’administration d’environnements distribués.",
      tags: ['DevOps', 'Containers', 'CI/CD'],
    },
  ],
  learnings: [
    "J’ai approfondi ma compréhension des architectures cloud et de la conteneurisation avec Kubernetes.",
    "J’ai appris à gérer des déploiements d’infrastructure sur Scaleway dans un cadre professionnel.",
    "J’ai renforcé ma maîtrise des outils collaboratifs et de l’organisation des projets techniques.",
    "Ce stage a consolidé mon intérêt pour l’infrastructure, le DevOps et les solutions cloud modernes.",
  ],
  stack: ['Kubernetes', 'Scaleway', 'Docker', 'LarkSuite', 'Cloud', 'DevOps'],
},
] as const

// ─── Projets — 260 Grammi retiré ───────────────────────────────
export const projects = [
  {
    id: 'project-kama',
    title: 'Project Kama',
    subtitle: 'Plateforme immobilière full-stack',
    year: '2025',
    category: 'Application web',
    featured: true,
    summary:
      "Application immobilière complète avec recherche avancée, filtres dynamiques et carte interactive. Conçue pour gérer un volume réaliste de biens.",
    role: 'Lead developer · UX · architecture BDD',
    highlights: [
      'Pagination serveur + index sur les requêtes fréquentes',
      'Clustering des markers sur la carte (perf > 1 000 biens)',
      "Authentification, gestion des sessions et hardening de base",
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    links: {
      demo: 'https://www.kama-ga.cloud',
      github: 'https://github.com/Desire077/project-kama',
    },
    accent: '#c8ff3e',
  },
  {
    id: 'whatsapp-assistant',
    title: 'WhatsApp Assistant',
    subtitle: 'Bot conversationnel auto-hébergé',
    year: '2025',
    category: 'Automatisation',
    featured: true,
    summary:
      "Assistant déployé sur un VPS, capable d'automatiser des tâches et de répondre à des requêtes. Architecture résiliente avec reconnexion automatique et supervision PM2.",
    role: 'Backend & ops',
    highlights: [
      'Sessions stables avec reconnexion auto',
      "Monitoring PM2, logs centralisés",
      'Déploiement Linux VPS, mise à jour zero-downtime',
    ],
    stack: ['Node.js', 'WhatsApp Web.js', 'MongoDB', 'PM2', 'Linux'],
    links: {
      demo: null,
      github: 'https://github.com/desire-nguembet/whatsapp-bot',
    },
    accent: '#5ec887',
  },
    {
      id: 'ajax-lcie',
      title: 'Plateforme Ajax LCIE',
      subtitle: 'Application web dynamique',
      year: '2025',
      category: 'Stage entreprise',
      featured: true,
      summary:
        "Plateforme web développée lors de mon stage chez LCIE Bureau Veritas, permettant l'affichage dynamique de données en temps réel via AJAX et la gestion des commandes clients.",
      role: 'Développeur Web',
      highlights: [
        "Système d'affichage dynamique AJAX sans rechargement de page",
        "Formulaire de gestion des commandes clients",
        "Utilisation de Docker, MariaDB et Bootstrap",
        "Compréhension des échanges front-end/back-end",
      ],
      stack: ['Docker', 'MariaDB', 'Bootstrap', 'AJAX', 'JavaScript', 'PHP', 'MySQL'],
      links: { demo: null, github: 'https://github.com/desire-nguembet/ajax-platform' },
      accent: '#a8db21',
    },
  {
    id: 'kivy-quest',
    title: 'Kivy Quest',
    subtitle: 'Jeu Python cross-platform',
    year: '2023',
    category: 'Exploration',
    featured: false,
    summary:
      "Jeu interactif en Python/Kivy. Premier projet conséquent. Boucle de jeu, gestion d'événements, builds Android.",
    role: 'Game dev solo',
    highlights: ["Boucle de jeu optimisée mobile", 'Système de collisions', 'Build Android via Buildozer'],
    stack: ['Python', 'Kivy', 'KivyMD'],
    links: { demo: null, github: 'https://github.com/desire-nguembet/kivy-quest' },
    accent: '#8b9098',
  },
] as const

// ─── Tableau de synthèse ────────────────────────────────────────
export const synthesis = {
  title: 'Tableau de synthèse',
  description:
    "Vue d'ensemble structurée de mon parcours, de mes compétences et des projets BTS — un document de référence pour les recruteurs et jurys.",
  fileName: 'tableau-synthese-desire-nguembet.pdf',
  filePath: '/documents/tableau-synthese.pdf',
  fileSize: '— ko',
  // Aperçu lignes du tableau (résumé visible inline)
  rows: [
    { label: 'Compétences couvertes', value: 'B1 → B5 (BTS SIO / SLAM)' },
    { label: 'Projets référencés', value: '5 projets dont 2 publics' },
    { label: 'Stage', value: 'Inside Runway — 2026' },
    { label: 'Axe développement', value: 'DevOps, Sécurité Informatique, Développement Web' },
    ],
}

// ─── CV ─────────────────────────────────────────────────────────
export const cv = {
  title: 'Curriculum Vitae',
  description:
    "Format A4, une page. Lisible par un recruteur en moins de 30 secondes.",
  fileName: 'cv-desire-nguembet.pdf',
  filePath: '/documents/cv.pdf',
  updatedAt: 'Mai 2026',
}

// ─── Veille techno ──────────────────────────────────────────────
export const techWatch = {
  title: 'Sécurisation de la supply chain logicielle',
  subtitle: 'SBOM & SLSA',
  intro:
    "Les attaques modernes ciblent rarement la cible finale. Elles ciblent une dépendance que la cible utilise. SolarWinds, Log4Shell, xz-utils : trois rappels qu'on protège un système entier, pas un seul livrable.",
  blocks: [
    {
      tag: 'SBOM',
      title: 'Software Bill of Materials',
      summary:
        "Une liste d'ingrédients pour un logiciel. Toutes les dépendances, directes et transitives, leurs versions, leurs licences, leur provenance.",
      bullets: [
        'Détection CVE quasi immédiate',
        'Conformité réglementaire',
        "Audit reproductible",
      ],
      tools: ['Syft', 'CycloneDX', 'SPDX', 'Trivy'],
    },
    {
      tag: 'SLSA',
      title: 'Supply-chain Levels for Software Artifacts',
      summary:
        "Framework de Google. Quatre niveaux de garanties croissantes sur le build : du build documenté au build hermétique vérifié par deux parties.",
      bullets: [
        'Provenance vérifiable',
        'Builds reproductibles isolés',
        "Protection contre l'altération",
      ],
      tools: ['Sigstore', 'in-toto', 'Tekton Chains'],
    },
    {
      tag: 'Menaces',
      title: 'Vecteurs courants',
      summary:
        "Les attaquants ne forcent plus la porte d'entrée. Ils s'invitent par le sous-traitant.",
      bullets: [
        "Dependency confusion (résolution piégée)",
        'Typosquatting (faux jumeaux)',
        'Compromission de mainteneurs',
      ],
      tools: ['OSV.dev', 'GitHub Advisory'],
    },
  ],
  pipeline: [
    { step: '01', label: 'Code source', detail: 'Audit, hooks pré-commit' },
    { step: '02', label: 'Génération SBOM', detail: 'syft scan' },
    { step: '03', label: 'Build sécurisé', detail: 'Runner isolé, secrets scopés' },
    { step: '04', label: 'Signature', detail: 'cosign sign-blob' },
    { step: '05', label: 'Vérification', detail: 'Politique d\'admission' },
    { step: '06', label: 'Déploiement', detail: 'Audit trail' },
  ],
  rss: {
    feedUrl: '/rss.xml',
    feedTitle: 'Flux RSS recommandés',
    feedDescription: 'Sources de veille web, DevOps et cybersécurité pour rester à jour.',
    feeds: [
      {
        name: 'The Hacker News',
        url: 'https://thehackernews.com/rss.xml',
        description: 'Actualités cybersécurité, vulnérabilités et incidents critiques.',
      },
      {
        name: 'Dev.to',
        url: 'https://dev.to/feed',
        description: 'Articles pratiques sur le développement web, JavaScript et DevOps.',
      },
      {
        name: 'InfoQ',
        url: 'https://www.infoq.com/feed/',
        description: 'Veille sur l’architecture logicielle, les infrastructures et le cloud.',
      },
      {
        name: 'OSV.dev',
        url: 'https://osv.dev/blog/rss.xml',
        description: 'Alertes sur les vulnérabilités logicielles et les risques de dépendances.',
      },
    ],
  },
}

export type Project = (typeof projects)[number]
