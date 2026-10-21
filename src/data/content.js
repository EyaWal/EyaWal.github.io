
// src/data/content.js
// Contenu du portfolio — les liens vides ne sont pas affichés.

export const profile = {
  name: "Hi! C'est Eya",
  headline: "Data Engineering · Machine Learning · IA",
  lede:
    "Étudiante ingénieure en dernière année à Télécom SudParis, spécialisée en Modèles et Applications de l'Intelligence Artificielle (MAIA), et Data Engineer en apprentissage chez BNP Paribas Personal Finance. Mon parcours combine Data Engineering, automatisation de pipelines et monitoring de flux de données. Aujourd'hui, j'approfondis mes compétences en Machine Learning à travers des projets de prédiction et d'évaluation de modèles d'IA.",
  chips: ["Python", "SQL", "Tableau", "Dremio", "scikit-learn", "FastAPI"],
  portraitLabel: "Portrait d'Eya Walha dessiné en caractères ASCII",
};

export const links = {
  github: "https://github.com/EyaWal",
  linkedin: "https://www.linkedin.com/in/walhaeya/",
  email: "eya.walha.contact@gmail.com",
};

export const projects = [
  {
    title: "Olist — Prédiction des retards de livraison",
    status: { label: "en cours", tone: "active" },
    description:
      "Projet de Machine Learning en cours sur le dataset public Olist (e-commerce brésilien). L'objectif est de prédire le statut de livraison des commandes à travers une classification à trois classes : à temps, en retard et colis manquant. Le projet explore progressivement la préparation des données, le feature engineering, la modélisation et l'évaluation, avec une perspective d'intégration de pratiques MLOps.",
    facts: [
      ["Données", "Olist — e-commerce brésilien"],
      ["Objectif", "Classification à 3 classes"],
      ["Domaine", "Machine Learning · MLOps"],
    ],
    repo: "https://github.com/EyaWal/olist-mlops-pipeline",
    demo: "",
  },
  {
    title: "SQL Data Warehouse & Analytics",
    status: { label: "en cours", tone: "active" },
    description:
      "Projet de Data Engineering autour de la construction d'un entrepôt de données SQL. Mise en pratique d'une architecture Medallion (Bronze, Silver, Gold), de traitements ETL et d'une modélisation dimensionnelle pour préparer les données à l'analyse. Projet réalisé dans le cadre d'un apprentissage pratique à partir d'un tutoriel.",
    facts: [
      ["Architecture", "Bronze · Silver · Gold"],
      ["Domaine", "Data Engineering · ETL"],
      ["Stack", "SQL Server · Docker"],
    ],
    repo: "https://github.com/EyaWal/sql-data-warehouse-project",
    demo: "",
  },
  {
    title: "FarCare — Accompagnement à distance",
    status: { label: "prototype", tone: "early" },
    description:
      "Prototype d'application destiné aux personnes accompagnant un proche âgé à distance. Le projet explore le suivi régulier, la détection de situations nécessitant une attention particulière et la simulation Monte Carlo pour estimer des risques financiers liés à des dépenses de santé imprévues.",
    facts: [
      ["Statut", "Prototype"],
      ["Backend", "Python · FastAPI · SQLite"],
      ["Simulation", "Monte Carlo · NumPy"],
    ],
    repo: "https://github.com/EyaWal/Farcare",
    demo: "",
  },
  {
    title: "MamaBloom & Co — Projet entrepreneurial",
    status: { label: "projet entrepreneurial", tone: "early" },
    description:
      "Participation à un projet entrepreneurial en équipe dans le cadre du programme Ticket for Change. MamaBloom & Co explore un concept d'application d'accompagnement des femmes, de la grossesse au post-partum, associant accès à des informations fiables et communauté d'entraide.",
    facts: [
      ["Programme", "Ticket for Change"],
      ["Domaine", "Entrepreneuriat · Santé"],
      ["Format", "Projet collaboratif"],
    ],
    repo: "",
    demo: "https://mamabloomco.fr/",
  },
];

export const journey = [
  {
    when: "Sept. 2024 — aujourd'hui",
    title: "Data Engineer en apprentissage — BNP Paribas Personal Finance",
    sections: [
      {
        title: "Data Engineering & Cloud",
        text:
          "Développement de requêtes SQL et de vues virtualisées sur Dremio. Contribution à la migration de scripts Autosys/HDFS vers des DAGs Apache Airflow sur le cloud interne IBM COS.",
      },
      {
        title: "Data Analytics & Monitoring",
        text:
          "Conception de dashboards Tableau pour suivre la réception des fichiers, les retards, les horaires attendus et les volumes. Automatisation de la collecte de métadonnées.",
      },
      {
        title: "Machine Learning & IA",
        status: "En cours",
        text:
          "Développement d'un modèle de prédiction des retards de réception de fichiers à partir de données historiques. Participation à l'évaluation comparative de modèles de langage pour l'interrogation de données en langage naturel.",
      },
    ],
  },
  {
    when: "2024 — 2027",
    title: "Diplôme d'ingénieur — Télécom SudParis",
    text:
      "Formation d'ingénieure en informatique par apprentissage, spécialisation MAIA (Modèles et Applications de l'Intelligence Artificielle). Enseignements en Machine Learning, Deep Learning, algorithmique et traitement des données.",
  },
  {
    when: "2022 — 2024",
    title: "Classes préparatoires scientifiques — MP*",
    text:
      "Formation scientifique approfondie en mathématiques, physique et informatique, avec un travail de modélisation et de simulation en Python dans le cadre du TIPE.",
  },
];

export const skills = [
  {
    group: "Data Engineering & Cloud",
    icon: "⌁",
    items: [
      { name: "Apache Airflow", level: "practiced", description: "Orchestration de workflows et migration de scripts vers des DAGs Airflow." },
      { name: "Dremio", level: "practiced", description: "Virtualisation de données et développement de requêtes SQL." },
      { name: "IBM COS", level: "practiced", description: "Stockage objet dans un environnement cloud interne." },
      { name: "Hadoop / HDFS", level: "practiced", description: "Stockage distribué et traitement de fichiers." },
      { name: "Autosys", level: "practiced", description: "Ordonnancement de traitements et suivi de flux." },
      { name: "Docker", level: "learning", description: "Conteneurisation, explorée dans mes projets personnels." },
    ],
  },
  {
    group: "Analytics & BI",
    icon: "▥",
    items: [
      { name: "Tableau", level: "practiced", description: "Création de dashboards pour le monitoring des flux de données." },
      { name: "pandas", level: "practiced", description: "Exploration, nettoyage et transformation de données." },
      { name: "NumPy", level: "practiced", description: "Calcul numérique et simulations." },
      { name: "ETL", level: "practiced", description: "Extraction, transformation et préparation de données." },
      { name: "Data Warehousing", level: "learning", description: "Architecture Medallion et modélisation dimensionnelle dans un projet personnel." },
    ],
  },
  {
    group: "Machine Learning & IA",
    icon: "✳",
    items: [
      { name: "scikit-learn", level: "practiced", description: "Modélisation, classification et évaluation de modèles ML." },
      { name: "PyTorch", level: "practiced", description: "Travaux pratiques en Deep Learning et entraînement de réseaux de neurones." },
      { name: "TensorFlow", level: "learning", description: "Framework de Deep Learning en cours d'apprentissage." },
      { name: "Transformers", level: "learning", description: "Architectures de modèles de langage en cours d'exploration." },
      { name: "MLflow", level: "learning", description: "Suivi des expérimentations et gestion du cycle de vie ML." },
      { name: "MLOps", level: "learning", description: "Pratiques d'industrialisation des modèles ML." },
    ],
  },
  {
    group: "Langages & Outils",
    icon: "⌘",
    items: [
      { name: "Python", level: "practiced", description: "Langage principal pour mes projets Data et Machine Learning." },
      { name: "SQL", level: "practiced", description: "Requêtes, transformation et manipulation de données." },
      { name: "Git / GitHub", level: "practiced", description: "Versionnement et gestion de projets." },
      { name: "Linux / Bash", level: "practiced", description: "Utilisation du terminal et de scripts en ligne de commande." },
      { name: "FastAPI", level: "practiced", description: "Développement d'API Python dans le prototype FarCare." },
      { name: "GitHub Actions", level: "learning", description: "Automatisation des workflows CI/CD." },
    ],
  },
];

export const contact = {
  title: "Construisons des solutions Data & IA.",
  text:
    "À la recherche d'un CDI à partir de septembre 2027 en Machine Learning, Intelligence Artificielle ou Data Engineering. N'hésitez pas à me contacter pour échanger sur une opportunité ou un projet.",
};
