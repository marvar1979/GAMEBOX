# GAMEBOX — Studio Operations

GAMEBOX es una plataforma web de gestión para equipos de desarrollo de videojuegos con foco en **producción, Scrum, tareas, builds, releases, capacidad del equipo y seguimiento de delivery**.

Esta edición está construida exclusivamente con:

- HTML5
- CSS3
- JavaScript ES6+
- JSON
- localStorage
- Service Worker + Web App Manifest

No requiere Node.js ni compilación para ejecutarse.

## Enfoque funcional

GAMEBOX está pensado para que Producer, Development, Design, Art y Operations trabajen sobre un mismo contexto. El componente QA es intencionalmente pequeño: existe un módulo `Feedback lite`, pero no intenta sustituir herramientas especializadas de QA.

## Módulos incluidos

- Login por roles con accesos rápidos que autocompletan credenciales
- Dashboard ejecutivo
- KPIs de producción y delivery
- Sprint health
- Velocity de sprints
- Riesgo de delivery
- Carga/capacidad del equipo
- My Work
- Activity feed
- Projects
- Roadmap + milestones
- Sprints
- Kanban Drag & Drop
- Work Items / backlog
- Team capacity
- Builds + branch + commit + changelog
- Releases + readiness + checklist
- Calendar
- Docs / mini wiki
- Feedback lite
- Reports
- Notifications
- Command palette (Ctrl/Cmd + K)
- Roles y permisos demostrativos
- CRUD con acciones visuales
- Exportar / importar backup JSON
- Tema Pink + Black y tema claro opcional
- PWA / cache offline cuando se sirve por HTTP
- Responsive desktop / tablet / mobile

## Credenciales demo

| Rol | Usuario | Contraseña |
|---|---|---|
| Admin | admin@gamebox.local | Admin123! |
| Producer | producer@gamebox.local | Producer123! |
| Developer | dev@gamebox.local | Dev123! |
| Art & UI | art@gamebox.local | Art123! |
| Game Designer | design@gamebox.local | Design123! |
| QA | qa@gamebox.local | Qa123! |

En el login no hace falta copiarlas: pulsa una tarjeta de rol y GAMEBOX completa usuario y contraseña automáticamente.

## Ejecución recomendada

En VS Code:

1. Abre esta carpeta.
2. Abre `index.html`.
3. Ejecuta **Open with Live Server**.

También puedes usar:

```bash
python -m http.server 5500
```

Y abrir:

```text
http://localhost:5500
```

## GitHub Pages

El proyecto está preparado para publicarse desde la raíz del repositorio:

```text
Settings → Pages → Deploy from a branch → main → /(root)
```

## Persistencia

Los JSON contienen datos iniciales. Durante el uso, las modificaciones se almacenan en `localStorage` del navegador.

Desde Settings puedes:

- exportar un backup JSON;
- importar un backup;
- restaurar los datos de demostración.

## Nota para uso empresarial real

La interfaz y los flujos están diseñados como una aplicación de operación profesional, pero **HTML/CSS/JS/JSON + localStorage no sustituyen un backend multiusuario**. Para desplegar GAMEBOX con datos reales de una empresa deben sustituirse autenticación y persistencia local por una API, control de sesiones seguro y base de datos compartida.

La estructura actual permite usar este proyecto como front-end/base funcional para esa evolución.
