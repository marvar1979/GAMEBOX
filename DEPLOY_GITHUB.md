# Publicar GAMEBOX en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube **el contenido de esta carpeta**, manteniendo `index.html` en la raíz.
3. Abre `Settings → Pages`.
4. Selecciona `Deploy from a branch`.
5. Elige `main` y `/(root)`.
6. Guarda y espera el despliegue.

La estructura debe quedar así:

```text
index.html
css/
js/
json/
assets/
manifest.json
service-worker.js
.nojekyll
```

GAMEBOX usa rutas relativas y está preparado para ejecutarse en la ruta de un repositorio de GitHub Pages.
