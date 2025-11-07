# Portfolio - Style baghel.dev Exact

Portfolio reproduisant **exactement** le design de [baghel.dev](https://baghel.dev) avec son approche "Brutal Design".

## 🎨 Charte de Couleurs EXACTE

```css
/* Couleurs principales */
Background: #ffffff (blanc)
Text: #1e293b (slate-900)
Accent: #84cc16 (lime-500)
Secondary Text: #475569 (slate-600)
Borders: #1e293b (slate-900)
```

## ✨ Style "Brutal Design"

### Caractéristiques du Brutal Design
- **Bordures épaisses** : 3px noir (#1e293b)
- **Border-radius** : 30px (très arrondi)
- **Ombres offset** : 4px 4px 0px 0px #1e293b
- **Hover effect** : Translation de 1px + suppression de l'ombre
- **Light mode** : Fond blanc, pas de dark mode
- **Accent lime-500** : Vert citron pour les highlights

### Classes Tailwind Créées

```css
.brutal-card {
  border: 3px solid #1e293b;
  border-radius: 30px;
  box-shadow: 4px 4px 0px 0px #1e293b;
  transition: all 200ms;
}

.brutal-card:hover {
  transform: translate(1px, 1px);
  box-shadow: none;
}

.btn-brutal-primary {
  background: #1e293b;
  color: white;
  border: 3px solid #1e293b;
  border-radius: 30px;
  box-shadow: 4px 4px 0px 0px #84cc16; /* Ombre lime */
}

.btn-brutal-secondary {
  background: white;
  color: #1e293b;
  border: 3px solid #1e293b;
  border-radius: 30px;
  box-shadow: 4px 4px 0px 0px #1e293b;
}
```

## 📐 Layout Structure

### Desktop (> 1024px)
- **Hero fixe à gauche** : max-width 500px, position fixed
- **Contenu à droite** : margin-left 500px + padding-left 20px
- **Max-width** : 1400px pour le contenu
- **Padding** : 20-40px horizontal

### Mobile (< 1024px)
- **Stack vertical** : tout en colonne
- **Full width** : pas de sidebar
- **Padding réduit** : 20px horizontal

## 🎯 Sections & Modules

### 1. Hero (Fixe à gauche sur desktop)
- Nom en très grand (text-7xl)
- Sous-titre avec rôle
- Description courte
- Icônes sociales (8-10px)
- 2 CTA buttons (brutal style)

### 2. Selected Work (Projets)
- Grid 3 colonnes (desktop)
- Cards brutal avec :
  - Badge année en haut
  - Titre hover lime-500
  - Description
  - Tags avec bordures
  - Liens Code + Live

### 3. Tech Stack
- 3 catégories : Frontend, Backend, Tools
- Tags en brutal-card
- Card spéciale 42 en lime-50 background

### 4. Contact
- Grid 2 colonnes
- Infos contact avec icônes lime-500
- Card "Quick Links" avec liens rapides
- Footer avec copyright

## 🎭 Animations

### Blur-in Progressive
```css
@keyframes blur-in {
  0% { opacity: 0; filter: blur(10px); }
  100% { opacity: 1; filter: blur(0); }
}

.animate-blur-in-500 { animation: blur-in 0.5s ease-out forwards; }
.animate-blur-in-700 { animation: blur-in 0.7s ease-out forwards; }
.animate-blur-in-900 { animation: blur-in 0.9s ease-out forwards; }
```

### Spinning Shapes
- Cercle lime-500 : 64x64, opacity 10%, spin 40s
- Carré slate-900 : 48x48, opacity 5%, spin reverse
- Position fixed en background

## 🔤 Typographie

- **Font** : System sans-serif stack
- **Headings** : Bold, 60-70px (h1), 27-32px (h2)
- **Body** : Regular, 16-18px
- **Small** : 12-14px pour tags

## 🎨 Micro-interactions

### Links
- Hover: underline avec offset-2
- Couleur: lime-500 au hover
- Transition: 200ms

### Cards
- Hover: translate(1px, 1px) + shadow-none
- Background hover: lime-50 (optionnel)
- Transition: 200ms

### Buttons
- Hover: translate(1px, 1px) + shadow-none
- Transition: 200ms
- Primary: ombre lime-500
- Secondary: ombre slate-900

## 📦 Composants Créés

1. **BaghelHero.jsx** - Hero fixe avec infos personnelles
2. **BaghelProjects.jsx** - Grid de projets avec cards brutales
3. **TechStack.jsx** - Stack technique en catégories
4. **ContactBaghel.jsx** - Contact + Quick Links
5. **AppBaghel.jsx** - App principale avec décoration

## 🚀 Différences avec Version Précédente

| Aspect | Version Précédente | Version baghel.dev |
|--------|-------------------|-------------------|
| **Mode** | Dark (Dill Green) | Light (Lime) |
| **Couleur** | #9DC183 | #84cc16 |
| **Background** | Dégradé animé | Blanc uni |
| **Cards** | Shadow-lg | Brutal shadow (4px offset) |
| **Bordures** | Subtiles | Épaisses 3px noires |
| **Border-radius** | 8-16px | 30px |
| **Style** | Minimaliste sombre | Brutal Design clair |
| **Layout** | Sidebar 80px | Hero fixe 500px |

## ✅ Checklist de Style

- [x] Light mode (fond blanc)
- [x] Lime-500 (#84cc16) comme accent
- [x] Bordures 3px noires
- [x] Border-radius 30px
- [x] Ombres offset 4x4px
- [x] Hover: translate + remove shadow
- [x] Hero fixe à gauche (desktop)
- [x] Grid 3 colonnes projets
- [x] Animations blur-in progressives
- [x] Tags avec bordures brutales
- [x] Boutons avec ombres colorées
- [x] Spinning shapes en background

## 🎯 Résultat

Un portfolio qui reproduit **exactement** l'esthétique de baghel.dev :
- Design "Brutal" avec bordures épaisses et ombres offset
- Light mode propre et moderne
- Accent lime-500 punchy
- Animations subtiles blur-in
- Layout asymétrique (hero fixe + contenu à droite)
- Micro-interactions soignées
