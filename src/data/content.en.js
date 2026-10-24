// src/data/content.en.js

export const profile = {
  name: "Hi! I'm Eya",
  headline: "Machine Learning · AI · Data Engineering",
  lede:
    "Final-year engineering student at Télécom SudParis, specializing in AI Models and Applications (MAIA), and Data Engineer Apprentice at BNP Paribas Personal Finance. I'm looking to build on my Data Engineering experience to develop reliable Machine Learning solutions, from development to production.",
  chips: ["Python", "SQL", "Tableau", "Dremio", "scikit-learn", "FastAPI"],
  portraitLabel: "ASCII portrait of Eya Walha",
};

export const journey = [
  {
    when: "Sept. 2024 — Present",
    title: "Data Engineer Apprentice — BNP Paribas Personal Finance",
    sections: [
      {
        title: "Data Engineering & Cloud",
        text:
          "Developing SQL queries and virtualized views in Dremio. Contributing to the migration of Autosys/HDFS scripts to Apache Airflow DAGs running on an internal cloud environment using IBM COS.",
      },
      {
        title: "Data Analytics & Monitoring",
        text:
          "Designing Tableau dashboards to monitor file arrivals, delays, expected delivery times, and data volumes. Automating metadata collection.",
      },
      {
        title: "Machine Learning & AI",
        status: "In progress",
        text:
          "Developing a predictive model for file arrival delays using historical data. Participating in the comparative evaluation of language models for natural-language data querying.",
      },
    ],
  },
  {
    when: "2024 — 2027",
    title: "Engineering Degree — Télécom SudParis",
    text:
      "Computer Engineering degree through a work-study program, specializing in AI Models and Applications (MAIA). Coursework includes Machine Learning, Deep Learning, algorithms, and data processing.",
  },
  {
    when: "2022 — 2024",
    title: "Preparatory Classes — Mathematics & Physics (MP*)",
    text:
      "Intensive scientific training in mathematics, physics, and computer science, including Python-based modeling and simulation as part of a research project (TIPE).",
  },
];

export const projects = [
  {
    title: "Olist — Delivery Delay Prediction",
    status: { label: "In progress", tone: "active" },
    description:
      "An ongoing Machine Learning project using the public Olist dataset (Brazilian e-commerce). The goal is to predict order delivery status through a three-class classification: on time, delayed, or missing. The project progressively explores data preparation, feature engineering, modeling, and evaluation, with plans to incorporate MLOps practices.",
    facts: [
      ["Dataset", "Olist — Brazilian e-commerce"],
      ["Objective", "Three-class classification"],
      ["Domain", "Machine Learning · MLOps"],
    ],
    repo: "https://github.com/EyaWal/olist-mlops-pipeline",
    demo: "",
  },
  {
    title: "SQL Data Warehouse & Analytics",
    status: { label: "In progress", tone: "active" },
    description:
      "A Data Engineering project focused on building a SQL data warehouse. Exploring Medallion architecture (Bronze, Silver, Gold), ETL pipelines, and dimensional modeling to prepare data for analytics. Developed as a hands-on learning project based on a tutorial.",
    facts: [
      ["Architecture", "Bronze · Silver · Gold"],
      ["Domain", "Data Engineering · ETL"],
      ["Stack", "SQL Server · Docker"],
    ],
    repo: "https://github.com/EyaWal/sql-data-warehouse-project",
    demo: "",
  },
  {
    title: "FarCare — Remote Care Support",
    status: { label: "Prototype", tone: "early" },
    description:
      "An application prototype designed for people supporting an elderly relative remotely. The project explores regular monitoring, identifying situations requiring attention, and Monte Carlo simulations to estimate financial risks associated with unexpected healthcare expenses.",
    facts: [
      ["Status", "Prototype"],
      ["Backend", "Python · FastAPI · SQLite"],
      ["Simulation", "Monte Carlo · NumPy"],
    ],
    repo: "https://github.com/EyaWal/Farcare",
    demo: "",
  },
  {
    title: "MamaBloom & Co — Entrepreneurship Project",
    status: { label: "Entrepreneurship project", tone: "early" },
    description:
      "Contributed to a collaborative entrepreneurship project through the Ticket for Change program. MamaBloom & Co explores an application concept supporting women from pregnancy through postpartum, combining access to reliable information with a supportive community.",
    facts: [
      ["Program", "Ticket for Change"],
      ["Domain", "Entrepreneurship · Healthcare"],
      ["Format", "Collaborative project"],
    ],
    repo: "",
    demo: "https://mamabloomco.fr/",
  },
];

export const skills = [
  {
    group: "Data Engineering & Cloud",
    icon: "⌁",
    items: [
      { name: "Apache Airflow", level: "practiced", description: "Workflow orchestration and migration of scripts to Airflow DAGs." },
      { name: "Dremio", level: "practiced", description: "Data virtualization and SQL query development." },
      { name: "IBM COS", level: "practiced", description: "Object storage in an internal cloud environment." },
      { name: "Hadoop / HDFS", level: "practiced", description: "Distributed storage and file processing." },
      { name: "Autosys", level: "practiced", description: "Job scheduling and data flow monitoring." },
      { name: "Docker", level: "learning", description: "Exploring containerization through personal projects." },
    ],
  },
  {
    group: "Analytics & BI",
    icon: "▥",
    items: [
      { name: "Tableau", level: "practiced", description: "Building dashboards for data flow monitoring." },
      { name: "pandas", level: "practiced", description: "Data exploration, cleaning, and transformation." },
      { name: "NumPy", level: "practiced", description: "Numerical computing and simulations." },
      { name: "ETL", level: "practiced", description: "Data extraction, transformation, and preparation." },
      { name: "Data Warehousing", level: "learning", description: "Medallion architecture and dimensional modeling in a personal project." },
    ],
  },
  {
    group: "Machine Learning & AI",
    icon: "✳",
    items: [
      { name: "scikit-learn", level: "practiced", description: "ML modeling, classification, and model evaluation." },
      { name: "PyTorch", level: "practiced", description: "Deep Learning coursework and neural network training." },
      { name: "TensorFlow", level: "learning", description: "Currently learning this Deep Learning framework." },
      { name: "Transformers", level: "learning", description: "Exploring language model architectures." },
      { name: "MLflow", level: "learning", description: "Experiment tracking and ML lifecycle management." },
      { name: "MLOps", level: "learning", description: "Exploring ML production and deployment practices." },
    ],
  },
  {
    group: "Programming & Tools",
    icon: "⌘",
    items: [
      { name: "Python", level: "practiced", description: "Primary programming language for Data and Machine Learning projects." },
      { name: "SQL", level: "practiced", description: "Data querying, transformation, and manipulation." },
      { name: "Git / GitHub", level: "practiced", description: "Version control and project management." },
      { name: "Linux / Bash", level: "practiced", description: "Terminal usage and shell scripting." },
      { name: "FastAPI", level: "practiced", description: "Developing Python APIs for the FarCare prototype." },
      { name: "GitHub Actions", level: "learning", description: "Exploring CI/CD workflow automation." },
    ],
  },
];

export const contact = {
  title: "Let's talk about Data & AI.",
  text:
    "Looking for a full-time position starting September 2027 in Machine Learning, Artificial Intelligence, or Data Engineering. Feel free to reach out to discuss an opportunity or a project.",
};