# Design Guidelines - Chris Do Philosophy

Sistema de diseño basado en los principios de **Chris Do (The Futur)**: diseño visual premium que transmite valor a través de la excelencia tipográfica, espaciado perfecto y narrativa visual de marca.

---

## 🎨 Filosofía de Diseño: Chris Do

### Su Aporte Clave

1. **Diseño Visual Premium**
2. **Tipografía Impecable**
3. **Espaciado y Estilo Moderno**
4. **Narrativa Visual de Marca**
5. **Diseño que Transmite Valor**

---

## 1. Claridad sobre Complejidad

> "La simplicidad es la máxima sofisticación" - Chris Do

**Principios:**
- Comunicación directa y sin rodeos
- Eliminar toda ambigüedad del diseño
- Un mensaje claro es mejor que múltiples mensajes confusos
- "Menos palabras, más impacto"
- Evitar jerga y lenguaje corporativo vacío
- Cada elemento debe tener un propósito claro

**Implementación:**
```tsx
// ✅ Mensaje claro y directo
<h1>Cajitas Felices</h1>
<p>Carne premium. Los mejores cortes del mundo.</p>

// ❌ Mensaje complejo y confuso
<h1>Descubre Nuestra Innovadora Propuesta de Valor en Proteínas Premium</h1>
<p>Facilitamos experiencias gastronómicas excepcionales mediante...</p>
```

---

## 2. Tipografía BOLD y Confiada

> "La tipografía es el 95% del diseño" - Chris Do

**Principios:**
- Usar pesos extremos: `font-black` (900) para títulos principales
- Contraste tipográfico dramático: 900 vs 300 o 400
- Escalas grandes y audaces
- `uppercase` para impacto y autoridad
- Tracking preciso: ajustar según tamaño
- Máximo una o dos familias tipográficas

**Escalas Tipográficas:**
| Elemento | Mobile | Desktop | Weight | Tracking |
|----------|--------|---------|--------|----------|
| H1 (Hero) | 44-52px | 80-128px | 900 (black) | -0.02em |
| H2 | 36-40px | 56-72px | 900 (black) | -0.01em |
| H3 | 28-32px | 40-48px | 700 (bold) | 0 |
| Body Large | 18-20px | 20-24px | 400 (regular) | 0 |
| Body | 16-18px | 16-18px | 400 (regular) | 0 |
| Small/Badge | 12-14px | 12-14px | 700 (bold) | 0.15em-0.2em |

**Implementación:**
```tsx
// H1 - Tipografía BOLD y dramática
<h1 className="text-[clamp(2.75rem,8vw,8rem)] font-black tracking-tight leading-[0.9] uppercase">
  Cajitas Felices
</h1>

// Body - Contraste con peso ligero
<p className="text-lg md:text-xl font-normal leading-relaxed">
  Carne premium de la más alta calidad.
</p>

// Badge - Uppercase con tracking amplio
<span className="text-xs font-bold uppercase tracking-wider">
  Diciembre 2025
</span>
```

---

## 3. Contraste Dramático (Negro/Blanco)

> "El contraste dramático elimina la mediocridad" - Chris Do

**Principios:**
- Paleta reducida: Negro puro + Blanco puro + 1 color de acento
- Sin grises intermedios - solo extremos
- Fondo negro sólido (`#000000`) o blanco puro (`#FFFFFF`)
- Color de marca como único acento cromático
- Evitar gradientes suaves - usar transiciones abruptas si son necesarias
- Alto contraste = alta legibilidad = profesionalismo

**Paleta del Proyecto:**
```css
/* Colores principales */
--black: #000000;           /* Fondo principal */
--white: #FFFFFF;           /* Texto y elementos */
--accent: #D62828;          /* Color de marca (rojo) */

/* Transparencias permitidas */
--black-95: rgba(0,0,0,0.95);
--white-90: rgba(255,255,255,0.9);
--white-70: rgba(255,255,255,0.7);
```

**Implementación:**
```tsx
// Fondo negro + Texto blanco + Acento rojo
<section className="bg-black text-white">
  <h1 className="text-white">
    Cajitas <span className="text-[#D62828]">Felices</span>
  </h1>

  <button className="bg-[#D62828] text-white hover:bg-white hover:text-black">
    Ver Cajitas
  </button>
</section>

// Sin grises - solo extremos
<p className="text-white/70">Texto secundario</p> {/* Permitido */}
<p className="text-gray-400">Texto gris</p> {/* ❌ Evitar */}
```

---

## 4. Espacios en Blanco Generosos

> "El espacio en blanco es un elemento de diseño, no espacio desperdiciado" - Chris Do

**Principios:**
- Separación dramática entre secciones: 64px, 96px, 128px
- Respiración visual permite enfoque
- Padding generoso en contenedores: 48px-96px
- Menos elementos = más espacio para cada uno
- El espacio comunica importancia y jerarquía
- Evitar amontonar elementos

**Escala de Espaciado:**
```tsx
/* Mobile → Desktop */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 1.5rem;    /* 24px */
--space-lg: 2rem;      /* 32px - 48px */
--space-xl: 3rem;      /* 48px - 64px */
--space-2xl: 4rem;     /* 64px - 96px */
--space-3xl: 6rem;     /* 96px - 128px */
```

**Implementación:**
```tsx
// Espaciado generoso entre secciones
<section className="py-20 md:py-32">
  <div className="space-y-12 md:space-y-16">
    <h2>Título</h2>
    <p>Contenido con respiración visual</p>
  </div>
</section>

// Padding generoso en Hero
<div className="px-6 sm:px-8 lg:px-12 pb-24 pt-32 md:py-20">
  {/* Contenido */}
</div>
```

---

## 5. Grid y Alineación Perfecta

> "La perfección no es negociable" - Chris Do

**Principios:**
- Todo debe estar perfectamente alineado - SIEMPRE
- Usar sistemas de grid estrictos
- Líneas verticales y horizontales precisas
- No "casi alineado" - debe ser perfecto o rediseñar
- Consistencia en anchos máximos de contenedores
- Herramientas de medición y guías obligatorias

**Sistema de Grid:**
```tsx
// Container máximo consistente
<div className="max-w-7xl mx-auto">
  {/* 1280px máximo */}
</div>

// Grid perfecto - 3 columnas alineadas
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>

// Contenido con ancho máximo
<div className="max-w-5xl"> {/* 1024px para lectura */}
  <p>Texto optimizado para legibilidad</p>
</div>
```

---

## 6. Minimalismo Extremo (Menos es Más)

> "Cada elemento debe justificar su existencia" - Chris Do

**Principios:**
- Eliminar decoraciones innecesarias
- Sin iconos decorativos - solo funcionales
- Sin bordes redondeados extremos - rectángulos limpios (0-8px radius)
- Sin sombras complejas - flat design
- Sin gradientes complejos - colores sólidos
- Remover, no agregar
- Si dudan de un elemento, eliminarlo

**Qué Eliminar:**
```tsx
// ❌ Decoraciones innecesarias
<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-2xl">
  <span className="✨">✨</span>
  <Icon decorative />
</div>

// ✅ Minimalismo funcional
<div className="bg-[#D62828]">
  <span>Ver Cajitas</span>
</div>
```

**Border Radius Permitido:**
- `0px` - Rectángulos puros (preferido para Chris Do)
- `4px` - Bordes sutiles
- `8px` - Máximo permitido para botones/cards
- `rounded-full` - Solo para badges circulares pequeños

---

## 7. Jerarquía Visual Fuerte

> "La jerarquía clara es un mensaje claro" - Chris Do

**Principios:**
- Contraste de escala extremo entre elementos
- El elemento más importante debe dominar visualmente
- Máximo 1-2 CTAs principales por página
- Usar tamaño, peso y color para jerarquía
- Evitar competencia visual entre elementos

**Jerarquía de Elementos:**
```tsx
// Jerarquía clara: H1 domina > CTA destaca > Stats secundarios
<section>
  {/* 1. H1 - Elemento dominante */}
  <h1 className="text-6xl md:text-8xl font-black">
    Cajitas Felices
  </h1>

  {/* 2. CTA - Segundo nivel */}
  <button className="text-xl font-black bg-[#D62828]">
    Ver Cajitas
  </button>

  {/* 3. Stats - Tercer nivel */}
  <div className="text-sm font-medium text-white/70">
    100% Garantizado
  </div>
</section>
```

**Escala de Importancia:**
1. **Hero Title (H1)**: 80-128px, font-black, color acento
2. **Primary CTA**: 16-20px, font-black, color acento
3. **Section Titles (H2)**: 56-72px, font-black
4. **Body Text**: 16-20px, font-normal
5. **Secondary Info**: 12-14px, font-medium, opacity 70%

---

## 8. Diseño Centrado en el Valor

> "El diseño debe comunicar el valor inmediatamente" - Chris Do

**Principios:**
- Comunicar beneficios claramente, no características
- CTAs con verbos de acción fuertes: "VER", "COMPRAR", "LLAMAR"
- Stats grandes y visibles (números de 60-80px)
- Eliminar "fluff" marketing sin sustancia
- Honestidad y transparencia en mensajes
- El diseño debe reflejar la calidad del producto/servicio

**Implementación:**
```tsx
// Beneficio claro > Característica vaga
<h2>Los mejores cortes del mundo</h2> {/* ✅ Beneficio */}
<h2>Soluciones cárnicas premium</h2>   {/* ❌ Característica vaga */}

// CTAs con verbos de acción
<button>VER CAJITAS</button>     {/* ✅ Acción clara */}
<button>Más información</button> {/* ❌ Acción débil */}

// Stats con impacto visual
<div>
  <p className="text-6xl font-black">+10</p>
  <p className="text-sm uppercase">Combos Premium</p>
</div>
```

---

## 9. Narrativa Visual de Marca

> "Cada diseño cuenta una historia" - Chris Do

**Principios:**
- Consistencia visual en toda la experiencia
- Personalidad de marca clara y consistente
- Usar imágenes que comuniquen calidad
- Overlays dramáticos para legibilidad sobre imágenes
- La tipografía debe reflejar la personalidad de marca
- Colores deben evocar emociones correctas

**Marca del Proyecto - Carnes M:**
- **Personalidad**: Premium, confiable, directo, audaz
- **Tono**: Profesional pero accesible, sin pretensiones
- **Valores**: Calidad, honestidad, excelencia
- **Voz**: BOLD, uppercase, confiada

**Implementación:**
```tsx
// Overlay dramático sobre imagen
<section className="relative">
  <img src="hero.jpg" alt="Carne premium" />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />

  <div className="relative text-white">
    <h1 className="font-black uppercase">Cajitas Felices</h1>
  </div>
</section>
```

---

## 📐 Checklist de Diseño (Chris Do)

Antes de publicar cualquier diseño, verificar:

### Tipografía
- [ ] Peso extremo en títulos (font-black)
- [ ] Contraste tipográfico dramático (900 vs 400)
- [ ] Escalas grandes y audaces
- [ ] Tracking ajustado correctamente
- [ ] Máximo 2 familias tipográficas

### Color y Contraste
- [ ] Solo negro, blanco y 1 color de acento
- [ ] Sin grises intermedios
- [ ] Alto contraste en todos los elementos
- [ ] Color de acento usado estratégicamente

### Espaciado
- [ ] Espacios en blanco generosos (64px+)
- [ ] Padding generoso en contenedores (48-96px)
- [ ] Separación clara entre secciones
- [ ] Respiración visual evidente

### Alineación
- [ ] Todo perfectamente alineado
- [ ] Grid consistente
- [ ] Líneas verticales/horizontales precisas
- [ ] Sin elementos "casi alineados"

### Minimalismo
- [ ] Cero elementos decorativos innecesarios
- [ ] Border-radius sutil (0-8px)
- [ ] Sin sombras complejas
- [ ] Sin gradientes complejos
- [ ] Cada elemento justifica su existencia

### Jerarquía
- [ ] H1 domina visualmente
- [ ] Máximo 1-2 CTAs principales
- [ ] Jerarquía clara de información
- [ ] Sin competencia visual

### Valor
- [ ] Beneficios claros, no características
- [ ] CTAs con verbos de acción
- [ ] Stats grandes y visibles
- [ ] Mensaje honesto y directo

### Narrativa de Marca
- [ ] Personalidad consistente
- [ ] Imágenes de alta calidad
- [ ] Overlays dramáticos sobre imágenes
- [ ] Tipografía refleja personalidad

---

## 🎯 Ejemplos de Implementación

### Hero Section - Chris Do Style
```tsx
<section className="relative min-h-screen flex items-end md:items-center bg-black">
  {/* Imagen de fondo con overlay dramático */}
  <div className="absolute inset-0">
    <img src="hero.jpg" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
  </div>

  {/* Contenido */}
  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-32">
    <div className="max-w-5xl">

      {/* Badge minimalista */}
      <span className="inline-block bg-[#D62828] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider mb-8">
        Diciembre 2025
      </span>

      {/* Tipografía BOLD */}
      <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-black tracking-tight leading-[0.9] uppercase text-white mb-8">
        Cajitas
        <br />
        <span className="text-[#D62828]">Felices</span>
      </h1>

      {/* Mensaje claro */}
      <p className="text-lg md:text-xl font-normal leading-relaxed text-white max-w-xl mb-12">
        Carne premium de la más alta calidad.
        <br />
        <span className="font-bold">Los mejores cortes para tu mesa.</span>
      </p>

      {/* CTA Principal */}
      <a href="#cajitas" className="inline-flex items-center gap-4 px-8 py-4 bg-[#D62828] text-white text-lg font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all">
        Ver Cajitas
      </a>

      {/* Stats - Jerarquía clara */}
      <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-3xl border-t border-white/20 pt-8 mt-16">
        <div>
          <p className="text-6xl font-black tracking-tight text-white mb-2">+10</p>
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">Combos Premium</p>
        </div>
        <div>
          <p className="text-6xl font-black tracking-tight text-white mb-2">100%</p>
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">Garantizado</p>
        </div>
        <div>
          <p className="text-6xl font-black tracking-tight text-white mb-2">24h</p>
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">Envío Rápido</p>
        </div>
      </div>

    </div>
  </div>
</section>
```

### Navbar - Minimalismo
```tsx
<nav className="sticky top-0 z-50 bg-black border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16">
    <div className="flex items-center justify-between h-full">

      {/* Logo BOLD */}
      <h4 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase">
        Carnes <span className="text-[#D62828]">M®</span>
      </h4>

      {/* Navegación minimalista */}
      <div className="hidden md:flex items-center gap-12">
        <a href="#cajitas" className="text-white hover:text-[#D62828] font-bold text-sm uppercase tracking-wider">
          Cajitas
        </a>
        <a href="#catalogo" className="text-white hover:text-[#D62828] font-bold text-sm uppercase tracking-wider">
          Catálogo
        </a>
      </div>

      {/* Badge circular rojo */}
      <button className="relative">
        <ShoppingCart className="text-white" />
        <span className="absolute -top-2 -right-2 bg-[#D62828] text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">
          0
        </span>
      </button>

    </div>
  </div>
</nav>
```

---

## 🚀 Filosofía en Acción

### Antes vs Después

**Antes (Diseño Común):**
```tsx
<div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-xl p-6">
  <h2 className="text-2xl font-semibold text-gray-700">
    Descubre nuestros productos 🎉
  </h2>
  <p className="text-gray-500 mt-2">
    Tenemos las mejores opciones para ti...
  </p>
  <button className="mt-4 bg-blue-500 text-white rounded-full px-6 py-2">
    Click aquí
  </button>
</div>
```

**Después (Chris Do Style):**
```tsx
<div className="bg-black p-12">
  <h2 className="text-6xl font-black uppercase text-white tracking-tight leading-[0.9]">
    Cajitas
    <br />
    <span className="text-[#D62828]">Felices</span>
  </h2>
  <p className="text-lg text-white/90 mt-8 max-w-xl">
    Carne premium. Los mejores cortes del mundo.
  </p>
  <button className="mt-10 bg-[#D62828] text-white px-10 py-4 text-lg font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all">
    Ver Cajitas
  </button>
</div>
```

**Cambios Aplicados:**
- ✅ Gradiente eliminado → Color sólido negro
- ✅ Bordes redondeados extremos → Rectangulares
- ✅ Sombras complejas → Flat design
- ✅ Tipografía tímida → BOLD y confiada
- ✅ Emoji decorativo → Eliminado
- ✅ Mensaje vago → Beneficio claro
- ✅ CTA débil → Verbo de acción fuerte
- ✅ Espaciado apretado → Generoso
- ✅ Contraste bajo → Dramático (negro/blanco/rojo)

---

## 📚 Recursos y Referencias

### Aprender Más de Chris Do

- **The Futur** (YouTube): Masterclasses de diseño y branding
- **Futur Pro**: Cursos avanzados de diseño
- **Principios clave**: "Design is not art", "Clarity over cleverness"

### Herramientas Recomendadas

- **Tipografía**: Type Scale Calculator, Modular Scale
- **Espaciado**: 8-point grid system
- **Alineación**: Figma guides, pixel-perfect tools
- **Contraste**: WebAIM Contrast Checker (mínimo 4.5:1)

---

**Última actualización**: 2025-11-25

**Recuerda**: "El diseño no es decoración. El diseño resuelve problemas y comunica valor." - Chris Do
