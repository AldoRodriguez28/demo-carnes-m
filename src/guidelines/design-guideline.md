# Design Guideline – CARNES M® · Cajitas Felices
## Estilo: Apple + Chris Do + Conversion Scientist

---

## 1. Principios

1. **Un objetivo por pantalla**  
   - Cada sección de la web tiene un CTA principal claro.
   - Ejemplo: en el hero → "Ver Cajitas"; en el catálogo → "Agregar al pedido".

2. **Minimalismo premium (Apple + Chris Do)**  
   - Mucho espacio en blanco.
   - Pocas líneas, pocas sombras, nada de decoraciones gratuitas.
   - Tipografía fuerte, limpia, con pocas variaciones.

3. **Conversión científica (Brian Massey)**  
   - Beneficios claros cerca de cada CTA.
   - Microcopys de confianza: envíos, calidad, transparencia (video de las piezas).
   - Repetir CTAs importantes al inicio, mitad y final.

---

## 2. Tipografía

- Familia base: `system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;`
- Niveles:
  - **H1**: 2.5rem–3rem, `font-weight: 600–700`, tracking ligero.
  - **H2**: 1.5rem–2rem, `font-weight: 600`.
  - **Body**: 0.95rem–1rem, `font-weight: 400`.
- No usar más de 3 tamaños de texto por sección.

---

## 3. Colores

```txt
Blanco base:        #FFFFFF
Gris fondo suave:   #F5F5F5
Gris texto:         #4B5563   (neutral-600)
Gris claro texto:   #6B7280   (neutral-500)
Negro:              #000000
Rojo marca:         #B22222   o tailwind `red-700`
Rojo hover:         un tono más oscuro (red-800)
