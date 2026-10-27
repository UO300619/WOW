# Codex de Azeroth

Portal de World of Warcraft en español: estado del juego, lore, monturas con seguimiento de colección, ruta semanal de farmeo, Pandaria y dragones nimbo, armaduras y caballero de la muerte profano.

Es un sitio estático (HTML, CSS y JavaScript sin dependencias), listo para GitHub Pages.

## Estructura

```
index.html          Página principal y menú
assets/data.js      TODO el contenido (textos, monturas, fuentes)
assets/app.js       Lógica: navegación, filtros, progreso, ruta semanal
assets/styles.css   Diseño
.nojekyll           Indica a GitHub Pages que sirva los archivos tal cual
```

## Publicarlo en GitHub Pages

1. En GitHub, crea un repositorio nuevo (por ejemplo `codex-azeroth`). Para Pages gratis tiene que ser **público**.
2. Sube los archivos:
   - **Desde la web:** en el repositorio vacío, pulsa *uploading an existing file* y arrastra `index.html`, `README.md`, `.nojekyll` y la carpeta `assets`. Pulsa *Commit changes*.
   - **Desde la terminal:**
     ```bash
     cd codex-azeroth
     git init
     git add .
     git commit -m "Primera versión del Codex de Azeroth"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/codex-azeroth.git
     git push -u origin main
     ```
3. Ve a **Settings → Pages**. En *Build and deployment*, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`. Guarda.
4. En uno o dos minutos la web estará en `https://TU_USUARIO.github.io/codex-azeroth/`.

> Si al arrastrar desde la web no se sube `.nojekyll` (algunos sistemas ocultan los archivos que empiezan por punto), no pasa nada: el sitio funciona igual.

## Cómo añadir o corregir contenido

Todo está en `assets/data.js`. Por ejemplo, para añadir una montura copia una línea de la lista `monturas` y cambia sus campos:

```js
{ id: "identificador-unico", nombre: "Nombre en español", en: "English name",
  exp: "Midnight", via: "Banda", tipo: "azar", donde: "Jefe, banda (dificultad)", semanal: true }
```

- `tipo`: `"seguro"`, `"azar"` o `"temporal"`.
- `via`: una de las categorías de `viasFiltro`.
- `semanal: true` la añade a la ruta semanal; `nimbo: true` a Pandaria; `dk: true` a la página del DK.
- No cambies el `id` de una montura ya publicada: es lo que guarda el progreso de cada persona.

## Progreso de cada persona

Las monturas marcadas y la ruta semanal se guardan en el navegador de quien visita la web (localStorage), así que cada amigo tiene su propio progreso. Con *Descargar mi progreso* / *Cargar progreso* se puede pasar a otro navegador o dispositivo. La ruta semanal se vacía sola cada miércoles a las 04:00 UTC (reinicio europeo).

## Probarlo en local

```bash
python3 -m http.server 8000
```

y abre `http://localhost:8000`.

---

Proyecto de fans sin relación con Blizzard Entertainment. World of Warcraft y sus nombres son marcas de Blizzard Entertainment.
