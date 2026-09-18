# Arquitectura de GAMEBOX

## Capa de presentación

- `index.html`
- `css/app.css`
- `assets/img/gamebox-logo.svg`

## Capa de aplicación

- `js/app.js`
  - autenticación demo
  - permisos por rol
  - navegación
  - CRUD
  - filtros
  - Kanban Drag & Drop
  - dashboard y métricas
  - backups
  - command palette
  - notificaciones
  - PWA registration

## Datos

- `json/*.json`: datos semilla legibles y editables
- `js/data-seed.js`: copia de respaldo para ejecución `file://`
- `localStorage`: persistencia de cambios del navegador

## PWA

- `manifest.json`
- `service-worker.js`

## Evolución recomendada a producción real

La interfaz puede mantenerse y reemplazar la capa local por:

- API REST / GraphQL
- PostgreSQL / SQL Server
- autenticación OAuth/OIDC
- almacenamiento de archivos
- eventos en tiempo real / WebSocket
- auditoría centralizada
