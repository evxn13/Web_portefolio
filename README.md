# Portfolio / CV en ligne - École 42

Portfolio personnel minimaliste et élégant.
Créé avec React, Tailwind CSS et la palette de couleurs tendance **Dill Green** 2025.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur à l'adresse affichée (généralement `http://localhost:5173`)

### Build pour production

```bash
npm run build
```

Le dossier `dist` contiendra les fichiers optimisés pour la production.

### Prévisualisation du build

```bash
npm run preview
```

## 📦 Déploiement

### Déploiement sur Vercel

1. Installez Vercel CLI :
```bash
npm i -g vercel
```

2. Déployez :
```bash
vercel
```

Ou déployez directement depuis GitHub :
- Connectez votre repository GitHub à Vercel
- Vercel détectera automatiquement Vite et configurera le build

### Déploiement sur Netlify

1. Build le projet :
```bash
npm run build
```

2. Glissez-déposez le dossier `dist` sur [Netlify Drop](https://app.netlify.com/drop)

Ou déployez depuis GitHub :
- Connectez votre repository à Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Nom et présentation** : Modifiez les fichiers dans `src/components/`
   - `Hero.jsx` : Nom, titre, description
   - `Contact.jsx` : Email, téléphone, liens sociaux
   - `Footer.jsx` : Informations du footer

2. **Projets** : Éditez le fichier `src/components/Projects.jsx`
   - Ajoutez vos propres projets dans le tableau `projects`
   - Mettez à jour les liens GitHub

3. **Compétences** : Modifiez `src/components/Skills.jsx`
   - Personnalisez les langages, frameworks, outils et concepts

4. **Formation** : Éditez `src/components/Education.jsx`
   - Ajoutez vos formations et réalisations

### Personnaliser les couleurs

Modifiez le fichier `tailwind.config.js` :
```js
colors: {
  'primary': '#00babc',    // Vert 42
  'secondary': '#1a1a2e',  // Bleu foncé
  'accent': '#16213e',     // Bleu accent
}
```

### Ajouter votre CV PDF

Placez votre fichier CV dans le dossier `public/` avec le nom `cv.pdf`

## 📁 Structure du projet

```
portfolio-42/
├── public/
│   └── cv.pdf              # Votre CV PDF
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation
│   │   ├── Hero.jsx        # Section d'accueil
│   │   ├── Skills.jsx      # Compétences
│   │   ├── Projects.jsx    # Projets 42
│   │   ├── Education.jsx   # Formation
│   │   ├── Contact.jsx     # Contact
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux + Tailwind
├── index.html
├── package.json
├── tailwind.config.js      # Configuration Tailwind
├── vite.config.js          # Configuration Vite
└── README.md
```

## 🛠️ Technologies utilisées

- **React** - Library JavaScript pour l'UI
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Transformation CSS

## ✨ Fonctionnalités

- Design moderne et sobre avec thème vert 42
- Responsive (mobile, tablette, desktop)
- Navigation smooth scroll
- Menu mobile hamburger
- Sections animées au scroll
- Cartes interactives pour les projets
- Liens vers GitHub et réseaux sociaux
- Téléchargement du CV en PDF
- Performance optimisée

## 📝 Licence

Ce projet est libre de droits. Vous pouvez l'utiliser comme template pour votre propre portfolio.

---

Créé avec ❤️ à l'École 42 Nice
