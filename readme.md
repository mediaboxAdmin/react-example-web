# <a name="structure"></a> Structure

Par défaut, Vite crée un projet React avec une structure minimale. Cependant, au cours de cette formation, nous allons améliorer cette structure en ajoutant d'autres sous-dossiers à l'intérieur du dossier "src". Voici à quoi ressemble la structure du projet :

<pre>
📂 node_modules
📂 public
|  └── favicon.ico 
|  └── logo.png
📂 src
├── 📂 assets
├── 📂 app
|   📂 components/
|   📂 constants/
|   📂 helpers/
|   📂 hooks/
📂 config
|  📂 lang/
📂 store/
📂 styles/
📂 utils/
App.css
App.jsx
index.css
main.jsx
.eslintrc.cjs
.gitignore
package-lock.json
package.json
vite.config.js
  </pre>

Voici une description détaillée de chaque répertoire et fichier :

- `node_modules/`: Dossier où les dépendances de votre projet sont installées par npm.
- `public/`: Répertoire des ressources statiques accessibles publiquement
- `src/` : Répertoire des sources de l'application React
   - `class/`: Contient des classes qui sont utilisées dans l'application.
- `assets/` : Utilisé dans les projets pour stocker des fichiers statiques tels que des images, des polices, des vidéos, des fichiers audio, des icônes, etc.
- `components/` : Composants réutilisables de l'application
- `constants/`: Dossier contenant des fichiers définissant des constantes pour l'application.
- `hooks/`: Utilisé pour regrouper des hooks personnalisés dans une application React
- `lang/`: Utilisé pour stocker des fichiers de traduction
- `pages/`: Utilisé dans les applications React pour organiser les composants qui correspondent à des pages spécifiques de l'application. Chaque fichier JavaScript ou JSX dans ce dossier représente une page de l'application.
- `routes/`: Utilisé pour stocker les définitions de routes dans une application
- `store/`: Utilisé pour regrouper la logique liée à la gestion de l'état global de l'application (redux)
- `styles/`: Utilisé pour stocker les fichiers de styles CSS ou Sass (ou d'autres préprocesseurs CSS)
- `utils/`: Dossier qui contient des utilitaires, par exemple, des fonctions ou des configurations réutilisables.
- `main.js`: Ce fichier est généralement le point d'entrée JavaScript de votre application React
- `App.jsx`: Ce fichier est généralement le composant principal de votre application React
- `.eslintrc.cjs`: Fichier de configuration ESLint au format CommonJS utilisé pour détecter et signaler les erreurs de syntaxe
- `.gitignore`: Fichier spécifiant les fichiers et répertoires à ignorer lors de la gestion de version avec Git.
- `index.html`: Ce fichier est le fichier principal de votre application web. Il est chargé par le navigateur lorsqu'un utilisateur visite votre site web et sert de point de départ pour votre application React.
- `package-lock.json`: Fichier généré par npm pour fixer les versions exactes des dépendances.
- `package.json`: Fichier de configuration de Node.js listant les métadonnées du projet et les dépendances.
- `vite.config.js`: Ce fichier permet de configurer Vite pour personnaliser le processus de construction du projet

# Liste de dépendances

|           Dépendance            |                        Description                        |
| :-----------------------------: | :-------------------------------------------------------: |
|    mapbox-gl & react-map-gl     |              Pour utiliser mapbox sur react               |
|           redux-react           |                 Creer un etat centralise                  |
|           highcharts            |            Afficher les donnees les graphiques            |
|             pdf-lib             |                 Generer des documents PDF                 |
| react-infinite-scroll-component |          Creation d'une liste infinie au scroll           |
|           react-intl            |                Pour l'internationalisation                |
|       react-lottie-player       |       Pour afficher les animations au format lottie       |
|             moment              |                  Manipulation des dates                   |
|      react-top-loading-bar      | Pour afficher un loading de chargement de la page en haut |
|        socket.io-client         |          Effectuer des evenements en temps reel           |
|              xlsx               |                Generer des fichiers excel                 |
|             pdfkit              |                 Generer des fichiers pdf                  |
|              zego               |                   Effectuer des appels                    |

# Règles a suivre

## Application

`Règle 1` : Il est strictement interdit de modifier la structure du projet, les fonctions ou classes prédéfinies de base, sauf s'il existe une raison valable et validée par la direction technique.

`Règle 2` : Avant d'ajouter un module, assurez-vous qu'il n'existe pas déjà un module défini répondant au même besoin.

`Règle 3` : Avant d'ajouter une fonction, assurez-vous qu'il n'existe pas déjà une fonction réalisant la même tâche.

## Nomenclature des fichiers

`Règle 4` : Le nom d'un fichier contenant une classe doit commencer par une lettre majuscule

`Règle 5` : Le nom de fichier d'un composant doit commencer par la lettre majuscules et correspondre au nom de la fonction du composant auquel il est associé.

`Règle 6` : Le nom du fichier représentant une page doit être en CamelCase et se terminer par le suffixe `Page`.

```js
✅ ListeArticlesPage.js
❌ listeArticlespage.js
❌ listeArticles_page.js
```
