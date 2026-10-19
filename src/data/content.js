// Tout le contenu du site est ici : modifie ce fichier, pas les composants.
// Un lien laissé vide ("") n'est pas affiché sur le site.

export const profile = {
  name: "Hi ! C'est Eya",
  headline: "Data Engineer & MLOps",
  lede:
    "Ingénieure en formation à Télécom SudParis et apprentie Data Engineer chez BNP Paribas Personal Finance. Je conçois des pipelines de données fiables, optimise des architectures analytiques (cloud et on-premise) et développe des solutions de Machine Learning pour automatiser et fiabiliser la prise de décision opérationnelle.",
  chips: ["Python", "SQL", "Apache Airflow", "Dremio", "MLflow", "Docker"],
  portraitLabel: "Portrait d'Eya Walha dessiné en caractères ASCII",
};

export const links = {
  github: "https://github.com/EyaWal",
  linkedin: "https://www.linkedin.com/in/walhaeya/",
  email: "eya.walha.contact@gmail.com",
};

export const projects = [
  {
    title: "Pipeline MLOps end-to-end — Retards de livraison",
    status: { label: "en cours", tone: "active" },
    description:
      "Chaîne de traitement industrialisée simulant un flux e-commerce réel (dataset public Olist) pour prédire, dès la validation de commande, son statut de livraison sans fuite de données (data leakage). Ingestion journalière idempotente orchestrée par Airflow (rejeu via {{ ds }}, backfill natif), modélisation en 3 couches sous DuckDB avec contrôles qualité, suivi des modèles sous MLflow et CI/CD avec GitHub Actions.",
    facts: [
      ["Dataset", "Olist (e-commerce brésilien)"],
      ["Cible", "Classification à 3 classes (à temps, retard, perte)"],
      ["Stack", "Python, Airflow, Docker Compose, MLflow, DuckDB, FastAPI, Pytest"],
    ],
    repo: "https://github.com/EyaWal/olist-mlops-pipeline",
    demo: "",
  },
  {
    title: "SQL Data Warehouse & Modélisation dimensionnelle",
    status: { label: "projet perso", tone: "active" },
    description:
      "Entrepôt de données relationnel conçu à partir de sources transactionnelles hétérogènes (ERP, CRM) pour alimenter des dashboards décisionnels. Architecture Medallion (Bronze / Silver / Gold) aboutissant à un schéma en étoile (Star Schema) : clés de substitution, dimensions à évolution lente (SCD), fonctions de fenêtrage avancées et optimisation des plans d'exécution.",
    facts: [
      ["Modélisation", "Kimball, schéma en étoile, SCD"],
      ["Architecture", "Medallion (Bronze / Silver / Gold)"],
      ["Stack", "SQL Server (T-SQL), ETL / ELT"],
    ],
    repo: "https://github.com/EyaWal/sql-data-warehouse-project",
    demo: "",
  },
  {
    title: "FarCare — API & Simulation pour aidants",
    status: { label: "prototype", tone: "early" },
    description:
      "Plateforme d'accompagnement pour aidants familiaux à distance : suivi régulier via un tableau de bord, système de détection d'alertes préventives (médicaments, moral, sommeil) et simulateur stochastique Monte Carlo (5 000 scénarios) pour évaluer le risque financier face aux dépenses de santé imprévues.",
    facts: [
      ["Statut", "Prototype fonctionnel"],
      ["Stack", "Python, FastAPI, Pydantic, simulation Monte Carlo"],
    ],
    repo: "https://github.com/EyaWal/Farcare",
    demo: "",
  },
];

export const journey = [
  {
    when: "2026 – 2027",
    title: "BNP Paribas Personal Finance — ML prédictif & IA (Année 3)",
    text: "Développement d'un modèle supervisé (classification) pour anticiper les retards de réception de fichiers partenaires avant le lancement des batchs. Exploitation des historiques virtualisés sous Dremio, conception de variables explicatives sans fuite temporelle, benchmark baseline vs algorithmes de boosting (XGBoost/LightGBM) et comparaison de modèles candidats pour la couche Dremio.",
  },
  {
    when: "2025 – 2026",
    title: "BNP Paribas Personal Finance — Modernisation Cloud & DataOps (Année 2)",
    text: "Contribution à la migration des traitements HDFS / AutoSys vers des DAGs Airflow exploitant IBM Cloud Object Storage (COS). Automatisation des scans de buckets pour extraire les métadonnées de flux dans Dremio, optimisation des requêtes SQL et compactage Parquet pour accélérer les dashboards Tableau.",
  },
  {
    when: "Sept. 2024 – 2025",
    title: "BNP Paribas Personal Finance — Virtualisation de données & Run (Année 1)",
    text: "Création de vues SQL sous Dremio unifiant des sources HDFS hétérogènes. Ordonnancement de batchs et gestion d'incidents sous AutoSys. Déploiement d'un premier tableau de bord Tableau de supervision des traitements et gestion des changements en production via ServiceNow (CAB, rollbacks).",
  },
  {
    when: "2024 – 2027",
    title: "Télécom SudParis — Diplôme d'ingénieur (Spécialisation IA & Data — MAIA)",
    text: "Formation d'ingénieur en apprentissage (FISA), voie d'approfondissement Modèles et Applications de l'Intelligence Artificielle (MAIA). Compétences clés acquises : entraînement de modèles prédictifs (machine learning, deep learning), traitement de données massives (plateformes Big Data, Hadoop, Spark), architectures distribuées (cloud, virtualisation) et mise en production de solutions IA (Docker, API, intégration continue, monitoring temps réel).",
    link: "https://www-inf.telecom-sudparis.eu/COURS/maia/Supports/",
  }
];

export const skills = [
  {
    group: "Data Engineering & Orchestration",
    items: ["Apache Airflow", "Dremio", "DuckDB", "IBM COS", "HDFS", "AutoSys"],
  },
  {
    group: "Langages & Bases de données",
    items: ["Python (pandas, scikit-learn, Pytest)", "SQL avancé (T-SQL, fenêtrage)", "Bash"],
  },
  {
    group: "Modélisation & Architecture",
    items: ["Architecture Medallion", "Modélisation dimensionnelle (Kimball, SCD)", "Format Parquet"],
  },
  {
    group: "MLOps & Industrialisation",
    items: ["MLflow", "Docker Compose", "GitHub Actions (CI/CD)", "FastAPI", "Streamlit"],
  },
  {
    group: "Supervision, BI & Production",
    items: ["Tableau Software", "ServiceNow (CAB, plans de rollback)"],
  },
];

export const contact = {
  title: "Échangeons sur vos enjeux Data Engineering & MLOps.",
  text: "À l'écoute d'opportunités en CDI à partir de 2027 (Data Engineer, MLOps, Analytics Engineer). Écris-moi, je réponds avec plaisir.",
};
