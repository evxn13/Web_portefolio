# Portfolio Features - Style baghel.dev

## 🎨 Design Inspiration

Ce portfolio s'inspire du design minimaliste et sophistiqué de **baghel.dev** tout en gardant une identité unique avec la palette **Dill Green**.

## ✨ Caractéristiques Principales

### 1. **Navigation Latérale Fixe** (Desktop)
- Sidebar minimaliste de 80px avec icônes
- Navigation contextuelle avec tooltips
- Liens sociaux toujours accessibles
- Initiales "ES" comme logo
- Mobile : Header horizontal compact

### 2. **Hero Section Minimaliste**
- Titre épuré avec animation fade-in
- Tagline accrocheur
- Description concise avec accent sur École 42
- CTA clairs (Projects + Resume)
- Indicateur de scroll élégant

### 3. **Section About**
- Layout grid moderne
- Numérotation des sections (01., 02., etc.)
- Liste de technologies avec icônes "▹"
- Placeholder image avec effet hover sophistiqué
- Typographie soignée avec hiérarchie claire

### 4. **Projets - Featured + Grid**
- **Featured Projects** : 3 projets majeurs
  - Layout alterné (gauche/droite)
  - Card description en surimpression
  - Icônes emoji comme placeholder
  - Liens GitHub + External

- **Other Projects** : Grid de petits projets
  - Cards compactes avec hover effect
  - Animation de translation au hover
  - Icône de dossier pour chaque projet

### 5. **Contact Minimaliste**
- Section centrée avec CTA unique
- Numérotation "03. What's Next?"
- Bouton "Say Hello" avec border effect
- Footer avec liens de contact

### 6. **Animations & Micro-interactions**
- Fade-in au scroll
- Hover effects subtils
- Transitions fluides (300ms)
- Scale & translate au hover
- Custom scrollbar Dill Green

### 7. **Émojis Flottants**
- 14 émojis liés à 42 et aux technologies
- Animations indépendantes avec délais
- Opacité faible pour ne pas distraire
- Effet hover interactif

### 8. **Dégradés Animés**
- Background gradient global (15s loop)
- Pulse effects sur sections spécifiques
- Couleurs sobres et professionnelles

## 🎯 Différences avec le Design Original

| Aspect | baghel.dev | Notre Portfolio |
|--------|-----------|-----------------|
| **Couleur principale** | Bleu | Dill Green (#9DC183) |
| **Background** | Statique | Dégradé animé |
| **Émojis** | Aucun | Flottants thématiques |
| **Projets featured** | Images réelles | Icônes emoji + placeholder |
| **Navigation** | Sidebar simple | Sidebar + tooltips |
| **Langue** | Anglais | Français/Anglais mix |

## 🔧 Technologies Utilisées

- **React** - UI Library
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **CSS Animations** - Pour les effets visuels
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Design

- **Mobile** (< 768px) : Header horizontal, stack vertical
- **Tablet** (768px - 1024px) : Layout adapté, sidebar cachée
- **Desktop** (> 1024px) : Sidebar fixe, layout complet

## 🎨 Palette de Couleurs

```css
primary: #9DC183      /* Dill Green */
primary-dark: #7FA368
primary-light: #B8D4A1
secondary: #1a1a2e    /* Dark background */
accent: #2d3142       /* Card background */
accent-light: #4f5d75 /* Borders */
```

## 🚀 Performances

- Animations GPU-accelerated
- Lazy loading potentiel
- Bundle size optimisé
- CSS-in-JS évité au profit de Tailwind
- Pas de dépendances lourdes

## ♿ Accessibilité

- aria-labels sur tous les liens icônes
- Contraste texte/fond respecté
- Navigation au clavier
- Titres sémantiques (h1, h2, h3)
- Alt text sur les visuels

## 🔮 Améliorations Futures

- [ ] Ajouter des images réelles de projets
- [ ] Implémenter un mode light/dark toggle
- [ ] Animations au scroll (IntersectionObserver)
- [ ] Blog section
- [ ] Formulaire de contact fonctionnel
- [ ] i18n (FR/EN)
- [ ] Analytics
- [ ] SEO optimization
