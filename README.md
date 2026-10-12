# Portfolio d'Eya Walha
 
Mon site personnel, en ligne sur **https://eyawal.github.io**.
 
Je suis alternante data engineer et étudiante en spécialisation IA et data (MAIA) à Télécom SudParis. Ce site présente mes projets, mon parcours et mes compétences.
 
## Ce que contient le site
 
- Une page d'accueil avec un portrait dessiné en caractères ASCII, qui se déforme en vortex au survol du curseur
- Mes projets data et ML, avec leur statut et leurs liens
- Mon parcours et mes compétences
- Un affichage adapté au mobile, et une animation désactivée pour les visiteurs qui ont réduit les animations dans leur système
## Stack
 
| Rôle | Outil |
|---|---|
| Interface | React 19 |
| Build et serveur de développement | Vite |
| Animation du portrait | Canvas 2D, sans bibliothèque |
| Déploiement | GitHub Actions, puis GitHub Pages |
 
## Points techniques
 
**Portrait ASCII précalculé.** Le script `scripts/generate-ascii.mjs` lit une photo à fond transparent, la découpe en grille et choisit un caractère par cellule selon sa luminosité. Le résultat, des points `[x, y, caractère, opacité]` en trois tailles (desktop, tablette, mobile), est écrit une seule fois dans `src/assets/asciiData.js`. Le navigateur n'a plus qu'à dessiner et animer ces points, sans recalcul au chargement.
 
**Animation légère.** La boucle d'animation se met en pause quand le portrait n'est pas visible à l'écran, et la résolution du canevas s'adapte à l'écran.
 
**Contenu séparé du code.** Tout le texte du site est dans `src/data/content.js`. Modifier une phrase ou ajouter un projet ne touche pas aux composants.
 
**Déploiement continu.** Chaque push sur `main` déclenche `.github/workflows/deploy.yml` : installation des dépendances, build, puis publication sur GitHub Pages.
 
## Lancer le projet en local
 
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # version de production dans dist/
```
 
## Structure
 
```
.github/workflows/deploy.yml   déploiement GitHub Pages
scripts/generate-ascii.mjs     photo vers points ASCII précalculés
src/assets/asciiData.js        données générées
src/components/                Header, Hero, AsciiPortrait, Projects, Journey, Skills, Contact
src/data/content.js            contenu du site
src/styles.css                 styles
```
 
## Inspiration
 
L'idée du portrait ASCII animé vient du portfolio de [Gazi Jarin](https://github.com/gazijarin/Gazi-V2). Le code, le design et l'animation sont écrits de zéro pour ce projet.
 
Claude finished the response
