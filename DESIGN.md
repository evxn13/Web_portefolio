# Design System - Portfolio 42

## Charte de couleurs - Dill Green

### Couleur principale : Dill Green
**"Pickled perfection in a colour. Born from trends like Pickle Fix and Terra Futura, this tangy take on green is shaking up kitchens, wardrobes and cocktails that are too cool to sip."**

### Palette de couleurs

- **Primary (Dill Green)** : `#9DC183`
  - Utilisation : Éléments clés, CTA, titres importants, bordures

- **Primary Dark** : `#7FA368`
  - Utilisation : Variations, hover states

- **Primary Light** : `#B8D4A1`
  - Utilisation : Accents subtils, backgrounds légers

- **Secondary (Dark Blue)** : `#1a1a2e`
  - Utilisation : Fond principal, textes sur fond clair

- **Accent** : `#2d3142`
  - Utilisation : Cartes, sections alternées

- **Accent Light** : `#4f5d75`
  - Utilisation : Bordures, séparateurs

## Animations

### Dégradés animés (Auroral inspired)
- Animation de fond douce et élégante
- Transition de couleurs sur 15 secondes
- Palette : nuances de bleu foncé avec touches subtiles de Dill Green
- Effet sobre et professionnel

### Formes géométriques flottantes
- Cercles, carrés, triangles en bordure Dill Green
- Animation de flottement (float) : 6-11 secondes
- Opacité très faible (5%) pour ne pas distraire
- Rotation et translation légères

### Classes d'animation disponibles
- `animate-gradient` : 15s ease infinite
- `animate-float` : 6s ease-in-out infinite
- `animate-float-delayed` : 8s ease-in-out infinite avec delay

## Composants

### FloatingShapes
Composant réutilisable pour les formes géométriques animées
- 5 formes différentes (cercles, carrés, triangle)
- Positionnement absolu avec animations décalées
- Utilisé dans la section Hero

### Backgrounds animés
- Classe `.animated-bg` : Ajoute des dégradés radiaux pulsants
- Appliquée aux sections Projects et Contact pour variation visuelle

## Guidelines

### Utilisation des couleurs
1. **Dill Green** doit être utilisé avec parcimonie pour les éléments importants
2. Les fonds sombres permettent au Dill Green de ressortir
3. Les animations doivent rester subtiles (opacité faible)

### Accessibilité
- Contraste texte/fond respecté
- Animations désactivables via `prefers-reduced-motion`
- Couleurs testées pour daltonisme

### Performance
- Animations CSS pures (pas de JavaScript)
- GPU-accelerated transforms (translate, rotate, scale)
- Background gradients optimisés

## Inspiration
- Tendances 2025 : Pickle Fix, Terra Futura
- Auroral - Animated background gradients
- Design sobre et élégant pour CV/Portfolio professionnel
