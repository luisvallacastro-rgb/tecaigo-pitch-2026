# TeCaiGO — Pitch de inversión 2026

Presentación web interactiva de 10 diapositivas para una exposición presencial de exactamente 5 minutos ante el jurado de la Copa Mundial de Emprendimiento 2026.

## Ejecutar localmente

Requisitos: Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

Para validar la versión final:

```bash
npm run build
```

## Controles

- `←` / `→`: anterior y siguiente.
- `Page Up` / `Page Down`: anterior y siguiente.
- `Espacio`: siguiente.
- `Home` / `End`: primera y última diapositiva.
- `P`: abrir o cerrar las notas del presentador.
- `F`: entrar o salir de pantalla completa.
- Puntos inferiores: navegación directa.
- Botón de reloj: pausar o continuar el temporizador.
- Botón circular: activar la demo automática. Está desactivada por defecto.
- Botón de reinicio: volver el temporizador a 0:00.
- Botón de impresión: imprimir o guardar como PDF desde el navegador.

## Editar contenido

Todo el contenido narrativo, los tiempos y las notas viven en `src/data/slides.ts`.

Cada diapositiva contiene:

- `title`, `eyebrow` y `statement`.
- `duration` en segundos.
- `evaluation`: P asociada del jurado.
- `notes.message`: idea central para el presentador.
- `notes.script`: texto sugerido.

Los tiempos actuales suman exactamente 300 segundos. Si cambias duraciones, verifica que `totalPitchSeconds` siga siendo 300.

## Reemplazar imágenes

Los recursos están en `public/assets/`. Para cambiar una imagen sin tocar código, reemplaza el archivo manteniendo el mismo nombre. Las principales son:

- `operadores.png`
- `turistas.png`
- `comercios.png`
- `transporte.png`
- `tecaigo-cluster-premier-desktop.png`
- `tecaigo-share-card.png`

La diapositiva del fundador contiene un espacio claramente marcado como fotografía reemplazable. Cuando exista la fotografía final, colócala en `public/assets/fundador-luis-valladares.jpg` y sustituye el bloque `founder-photo-placeholder` en `src/components/PitchDeck.tsx` por una imagen.

La evidencia del problema se presenta como una recreación anonimizada. No muestra nombres ni números reales. Si se incorpora una captura real de WhatsApp, debe anonimizarse antes de guardarla en `public/assets/`.

## Cambiar colores

La paleta está definida como variables al inicio de `app/globals.css` y también documentada en `src/styles/theme.ts`:

- Fondo: `#02090B`
- Fondo secundario: `#07171A`
- Turquesa: `#10B8C8`
- Cian: `#71E4EA`
- Blanco: `#F5F7F7`
- Gris: `#9CA9AA`
- Dorado: `#D5A737`

## Estructura principal

```text
app/
  layout.tsx          Metadatos, idioma y tarjeta social
  page.tsx            Entrada de la presentación
  globals.css         Diseño 16:9, animaciones y estilos de impresión
src/
  components/
    PitchDeck.tsx     Navegación, temporizador, notas y visuales
  data/
    slides.ts         Textos, tiempos y guion editable
  styles/
    theme.ts          Referencia de paleta
  main.tsx            Exportación conceptual del componente principal
public/assets/        Capturas y recursos visuales
```

## Despliegue

La aplicación se puede publicar mediante el flujo de Sites incluido en el proyecto. Para Vercel o Netlify, conecta el repositorio, usa `npm run build` como comando de compilación y configura la salida según el adaptador de Vite/Vinext elegido por la plataforma.

## Estado de producto y datos

- Las funciones actuales y las de despliegue/hoja de ruta se etiquetan por separado.
- Las métricas de mercado muestran “Dato por validar”.
- No se incluyen cifras de tracción, precios ni porcentajes inventados.
