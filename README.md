
# ecommerce -carnes

## Características
- Secciones principales: Hero, Cajitas Felices, Arma tu cajita, Categorías, Envíos y Confianza.
- Componentes reutilizables y tipados en React + TypeScript.
- Estilos con utilidades de Tailwind v4 y tokens propios.
- Preparado para iconografía, carruseles y patrones de UI accesibles con Radix.

## Tecnologías y librerías
- Vite 6 (bundler) con plugin React SWC.
- React 18 + React DOM...
- TypeScript (configurado por Vite).
- Tailwind CSS 4.
- Radix UI (`@radix-ui/react-*`), `lucide-react` para íconos, `embla-carousel-react` para carruseles, `react-hook-form`, `recharts`, `sonner`, utilidades `clsx` / `class-variance-authority` / `tailwind-merge`, entre otras (ver `package.json`).

## Requisitos
- Node.js >= 18 y npm.

## Instalación y ejecución
```bash
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # crea el build de producción en dist/
```

## Estructura rápida
- `src/main.tsx`: punto de entrada de React.
- `src/App.tsx`: composición de las secciones de la landing.
- `src/components/`: componentes de UI.
- `src/index.css`: estilos generados de Tailwind.

## Créditos
Revisa `src/Attributions.md` para las referencias de recursos utilizados en el diseño.
  
