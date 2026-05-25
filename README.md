# Portfolio — Désiré Nguembet

Portfolio personnel orienté Développement Web (BTS SIO).
Direction éditoriale sobre, technique, inspirée par Linear / Vercel / Stripe.

## Stack

- React 19 + TypeScript
- Vite 8 (rolldown)
- Tailwind CSS v4
- Framer Motion 12
- Lucide React (icônes)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build production → dist/
npm run preview  # preview du build
```

## Structure

```
src/
├─ App.tsx                  # assemblage des sections (lazy loading)
├─ index.css                # design system (CSS variables + Tailwind)
├─ data/
│  └─ profile.ts            # toutes les données du site (centralisé)
├─ components/
│  ├─ sections/
│  │  ├─ Navigation.tsx     # nav fixe + menu mobile
│  │  ├─ Hero.tsx           # landing + stats
│  │  ├─ TerminalCard.tsx   # animation terminal du hero
│  │  ├─ Skills.tsx         # 4 axes : GRC / Sécurité / DevOps / Dev
│  │  ├─ Projects.tsx       # projets featured + autres
│  │  ├─ Internship.tsx     # stage Inside Runway
│  │  ├─ Documents.tsx      # CV + tableau de synthèse
│  │  ├─ TechWatch.tsx      # veille : SBOM / SLSA
│  │  ├─ Contact.tsx        # bloc final
│  │  └─ Footer.tsx
│  └─ ui/
│     ├─ Primitives.tsx     # Section, Badge, Button, Reveal, etc.
│     ├─ BrandIcons.tsx     # GitHub / LinkedIn SVG inline
│     ├─ Loader.tsx
│     └─ ScrollProgress.tsx
└─ lib/
   └─ hooks.ts              # useIsTouch, usePrefersReducedMotion
```

## Personnalisation

**Tout le contenu est dans `src/data/profile.ts`.** Modifier ce fichier pour
mettre à jour les infos, projets, missions de stage, etc., sans toucher au code.

## Documents

Place les vrais PDF dans `public/documents/` :
- `cv.pdf`
- `tableau-synthese.pdf`

Les liens dans le site pointent automatiquement vers ces chemins.

## Design system

Palette mono `ink-{50..950}` (gris anthracite) + un seul accent `--color-accent`
(#c8ff3e, vert citron technique). Typographies :
- **Inter** pour le corps (display + body via `font-feature-settings`)
- **Instrument Serif Italic** pour les accents éditoriaux
- **JetBrains Mono** pour les éléments techniques

## Accessibilité

- Focus visible 2px accent
- `prefers-reduced-motion` respecté (toutes les animations désactivées)
- Contraste AA minimum partout
- Navigation clavier complète
- Aria-labels sur les icônes seules
- Lazy loading des sections sous le fold

## Performances

- Code splitting par section (~2-3 ko gzip par chunk)
- Bundle total : 354 ko (114 ko gzip)
- CSS : 46 ko (8 ko gzip)
- Pas de Three.js, pas de WebGL : 0 ko de runtime 3D
- Images : aucune image lourde, visuels générés via CSS

## Licence

Code privé — usage personnel de Désiré Nguembet.
