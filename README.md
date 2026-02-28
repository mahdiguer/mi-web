# McLaren F1 - Sitio Web Profesional 🏎️

Una página web moderna, responsiva y totalmente interactiva dedicada al icónico McLaren F1, desarrollada con HTML5, CSS3 y JavaScript puro.

## 📁 Estructura del Proyecto

```
mi-web/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS (responsivos)
├── script.js           # Lógica JavaScript (sin frameworks)
├── images/             # Carpeta para tus imágenes
└── README.md          # Este archivo
```

## 🚀 Características Principales

✅ **Diseño Responsivo** - Optimizado para móvil, tablet y escritorio  
✅ **Navbar Fija** - Con efecto transparente y menú hamburguesa  
✅ **Efecto Parallax** - En la sección hero  
✅ **Animaciones Suaves** - Scroll, fade, zoom con IntersectionObserver  
✅ **Contadores Animados** - Estadísticas que se cuentan automáticamente  
✅ **Galería Interactiva** - Con overlay de información  
✅ **Botón Volver Arriba** - Desplazamiento fluido  
✅ **Menú Hamburguesa** - Para dispositivos móviles  
✅ **Código Limpio** - Bien comentado y optimizado  

## 🎨 Colores McLaren

- **Naranja Primario**: #FF8700
- **Negro**: #000000
- **Gris Oscuro**: #0a0a0a, #1a1a1a
- **Gris Claro**: #333333, #cccccc

## 📸 Cómo Reemplazar las Imágenes SVG

Las imágenes actuales son gráficos SVG generados con CSS. Para usar tus propias fotos del McLaren F1:

### Opción 1: Reemplazar SVG con IMG

En `index.html`, busca la sección de galería y reemplaza:

```html
<!-- De esto: -->
<svg class="gallery-image" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    ...
</svg>

<!-- A esto: -->
<img class="gallery-image" src="images/mclaren-frontal.jpg" alt="Vista Frontal McLaren F1">
```

### Opción 2: Usar URLs externas

```html
<img class="gallery-image" src="https://ejemplo.com/imagen-mclaren.jpg" alt="McLaren F1">
```

### Instrucciones Paso a Paso:

1. **Descarga o toma fotos** del McLaren F1
2. **Guarda las imágenes** en la carpeta `images/` con nombres descriptivos:
   - `mclaren-frontal.jpg`
   - `mclaren-lateral.jpg`
   - `mclaren-motor.jpg`
   - `mclaren-interior.jpg`
   - `mclaren-aero.jpg`
   - `mclaren-detalle.jpg`

3. **Abre `index.html`** en tu editor
4. **Busca la sección** `<section id="galeria">`
5. **Reemplaza cada SVG** con una etiqueta `<img>`

Ejemplo completo:
```html
<div class="gallery-item" data-aos="fade-up">
    <img class="gallery-image" src="images/mclaren-frontal.jpg" alt="Vista Frontal">
    <div class="gallery-overlay">
        <div class="gallery-content">
            <h3>Vista Frontal</h3>
            <p>El icónico frente del McLaren F1...</p>
        </div>
    </div>
</div>
```

## 🔧 Cómo Usar

### En Navegador (Local)

1. **Abre VS Code** con la carpeta `mi-web`
2. **Instala la extensión "Live Server"** (si no la tienes)
3. **Click derecho en `index.html`** → "Open with Live Server"
4. ¡Listo! La página se abrirá automáticamente

### Alternativa: Sin Live Server

```bash
# Windows - Abre directamente:
cd c:\Users\d1smic\mi-web
# Luego arrastra index.html a tu navegador
```

## 📱 Responsive Design

La página se adapta automáticamente a:
- **Desktop**: 1200px+ (experiencia completa)
- **Tablet**: 768px - 1199px (optimizado)
- **Móvil**: < 768px (menú hamburguesa activado)

## 🎯 Secciones de la Página

1. **Navbar** - Navegación fija con links internos
2. **Hero** - Sección principal con efecto parallax
3. **Historia** - Información sobre Gordon Murray y el lanzamiento
4. **Especificaciones** - Motor V12, potencia, velocidad, etc.
5. **Estadísticas** - Contadores animados (64 unidades, 386 km/h, 627 CV, 1992)
6. **Datos Curiosos** - 6 tarjetas con información interesante
7. **Galería** - 6 imágenes/SVGs con overlay de información
8. **Contacto** - Enlaces a sitios oficiales
9. **Footer** - Información y redes sociales
10. **Botón Volver Arriba** - Desplazción fluida al top

## 🎬 Animaciones JavaScript

El archivo `script.js` incluye:

- ✅ **Navbar Dinámico** - Cambia estilo al hacer scroll
- ✅ **Menú Hamburguesa** - Abre/cierra al click
- ✅ **Parallax Effect** - Movimiento de fondo
- ✅ **IntersectionObserver** - Anima elementos al entrar en vista
- ✅ **Contadores** - Incrementan números suavemente
- ✅ **Smooth Scroll** - Desplazamiento fluido en enlacesAncla
- ✅ **Botón Top** - Aparece/desaparece según scroll

## 📝 Personalización

### Cambiar Colores

En `styles.css`, busca `:root` y modifica:

```css
:root {
    --color-primary: #FF8700;    /* Naranja McClaren */
    --color-secondary: #000;      /* Negro */
    --color-dark: #0a0a0a;       /* Negro oscuro */
    /* ... más colores */
}
```

### Cambiar Tipografía

En `styles.css`:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
/* Puedes cambiar a: 'Poppins', 'Inter', 'Montserrat', etc. */
```

## ⚡ Optimización

- **Cero dependencias externas** - Solo HTML, CSS, JS puro
- **Rendimiento rápido** - Carga instantánea
- **SEO friendly** - Estructura HTML semántica
- **Accesibilidad** - Respeta prefers-reduced-motion

## 🐛 Troubleshooting

**Problema:** La página sale vacía  
**Solución:** Asegúrate de que styles.css y script.js estén en la misma carpeta que index.html

**Problema:** Las imágenes no se ven  
**Solución:** Verifica que las rutas en `src=""` sean correctas (ej: `images/nombre-imagen.jpg`)

**Problema:** El menú hamburguesa no funciona  
**Solución:** Abre en navegador moderno (Chrome, Firefox, Safari, Edge)

## 📞 Notas

- Compatible con todos los navegadores modernos
- Mobile-first design
- Completamente personalizable
- Ideal para portfolio o proyecto de demostración

## 💡 Próximos Pasos

1. ✅ Reemplaza los SVGs con tus propias fotos
2. ✅ Personaliza los colores si lo deseas
3. ✅ Agrega más contenido o secciones
4. ✅ Publica en GitHub Pages, Netlify o tu servidor

---

**Creado con ❤️ para los amantes del McLaren F1 y la web moderna**

🏁 ¡Disfruta tu sitio web épico!
