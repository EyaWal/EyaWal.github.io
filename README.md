# Portfolio d'Eya Walha

Site personnel en Vite + React, déployé sur GitHub Pages par GitHub Actions.
Le portrait d'accueil est une image convertie en caractères ASCII, qui se déforme en vortex au survol.

## Démarrer

```bash
npm install
npm run dev        # serveur local sur http://localhost:5173
npm run build      # build de production dans dist/
```

## Remplacer la photo de test

`public/profile.png` est pour l'instant une silhouette générique.

1. Détoure ta photo pour obtenir un **PNG à fond transparent** (sur Mac : Aperçu > Outils > Supprimer l'arrière-plan, ou remove.bg). La transparence sert à dessiner uniquement ta silhouette.
2. Remplace `public/profile.png` par ce fichier.
3. Régénère les données ASCII :

   ```bash
   npm run ascii
   ```

   Le script écrit `src/assets/asciiData.js` (points précalculés en trois tailles : desktop, tablette, mobile). Commite ce fichier.

Un cadrage serré sur le visage et les épaules donne le meilleur résultat. Pour garder `profile.png` hors d'un dépôt public, ajoute-le au `.gitignore` : seul `asciiData.js` est nécessaire au site.

## Modifier le contenu

Tout le texte est dans `src/data/content.js` : présentation, projets, parcours, compétences, contact.
Un lien laissé vide (`""`) n'est pas affiché. Renseigne `links.linkedin`, `links.email`, et `repo` / `demo` de chaque projet dès qu'ils existent.

## Déployer sur GitHub Pages

1. Crée un dépôt public nommé exactement **`EyaWal.github.io`** : le site sera alors servi sur `https://EyaWal.github.io`.
2. Pousse le code sur la branche `main`.
3. Dans le dépôt : Settings > Pages > Source : **GitHub Actions**.
4. Chaque push sur `main` relance `.github/workflows/deploy.yml` (installation, build, publication).

Avec un autre nom de dépôt (site de projet), définis le chemin de base dans le workflow, à l'étape de build :

```yaml
- run: npm run build
  env:
    BASE_PATH: /nom-du-depot/
```

Un domaine personnalisé s'ajoute ensuite dans Settings > Pages.

## Structure

```
.github/workflows/deploy.yml   déploiement GitHub Pages
public/profile.png             photo source (fond transparent)
scripts/generate-ascii.mjs     photo -> points ASCII précalculés
src/assets/asciiData.js        données générées (ne pas éditer à la main)
src/components/                Header, Hero, AsciiPortrait, Projects, Journey, Skills, Contact
src/data/content.js            tout le contenu du site
src/styles.css                 styles
```
