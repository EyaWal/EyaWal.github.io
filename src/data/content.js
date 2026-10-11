// Tout le contenu du site est ici : modifie ce fichier, pas les composants.
// Un lien laissé vide ("") n'est pas affiché sur le site.

export const profile = {
  name: "Eya Walha",
  headline: "Je construis des pipelines de données qu'on peut suivre à l'œil.",
  lede:
    "Alternante data engineer au sein d'une équipe Business Intelligence, où je surveille des flux de données au quotidien, et étudiante en spécialisation IA et data (MAIA) à Télécom SudParis. J'aime les projets où la donnée devient une décision.",
  chips: ["Python", "SQL", "Tableau", "Dremio", "scikit-learn", "FastAPI"],
  portraitLabel: "Portrait d'Eya Walha dessiné en caractères ASCII",
};

export const links = {
  github: "https://github.com/EyaWal",
  linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil"
  email: "", // ex. "prenom.nom@exemple.com"
};

export const projects = [
  {
    title: "Prédiction des retards de livraison",
    status: { label: "en cours", tone: "active" },
    description:
      "Sur le dataset e-commerce public Olist : la cible n'est pas un simple retard binaire mais une classification à trois classes (à temps, en retard, colis manquant). L'architecture reprend, sur des données publiques, la logique de vues SQL en couches que j'utilise en entreprise pour suivre des flux de données.",
    facts: [
      ["Données", "Olist, e-commerce brésilien"],
      ["Cible", "classification à 3 classes"],
      ["Stack", "Python, SQL, Tableau"],
    ],
    repo: "", // lien du dépôt GitHub
    demo: "", // lien de la démo en ligne, quand elle existera
  },
  {
    title: "FarCare",
    status: { label: "en conception", tone: "early" },
    description:
      "Un outil pensé pour les enfants aidants à distance de parents vieillissants restés au pays : des check-ins de bien-être réguliers, couplés à une simulation Monte Carlo pour estimer un coussin financier de sécurité. Le projet est au stade du cadrage : roadmap et architecture définies, développement à venir.",
    facts: [
      ["Statut", "cadrage terminé"],
      ["Stack", "FastAPI, SQLAlchemy, scikit-learn, Streamlit"],
    ],
    repo: "",
    demo: "",
  },
];

export const journey = [
  {
    when: "Depuis sept. 2024",
    title: "Alternante data engineer, équipe data ",
    text: "Monitoring de flux de données (statuts de réception, ingestion etc ), dashboards Tableau, modélisation sur Dremio.",
  },
  {
    when: "En cours",
    title: "Télécom SudParis, spécialisation MAIA",
    text: "Cursus orienté IA et science des données, en parallèle de l'alternance.",
  },
  
];

export const skills = [
  { group: "Langages", items: ["Python", "SQL"] },
  { group: "Data et BI", items: ["Tableau", "Dremio"] },
  { group: "Machine learning", items: ["scikit-learn", "FastAPI"] },
  { group: "En apprentissage", items: ["Docker", "MLflow", "GitHub Actions"] },
];

export const contact = {
  title: "Discutons data, BI ou IA appliquée.",
  text: "Je cherche un CDI en data. Écris-moi, je réponds volontiers.",
};
