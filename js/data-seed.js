window.GAMEBOX_SEED = {
  users: [
    { id: 1, name: 'Mariel Vargas', role: 'Admin', email: 'admin@gamebox.local', password: 'Admin123!', avatar: 'MV', department: 'Operations' },
    { id: 2, name: 'Lucía Prado', role: 'Producer', email: 'producer@gamebox.local', password: 'Producer123!', avatar: 'LP', department: 'Production' },
    { id: 3, name: 'Carlos Méndez', role: 'Developer', email: 'dev@gamebox.local', password: 'Dev123!', avatar: 'CM', department: 'Engineering' },
    { id: 4, name: 'Ana Soliz', role: 'Art & UI', email: 'art@gamebox.local', password: 'Art123!', avatar: 'AS', department: 'Art' },
    { id: 5, name: 'Diego Soto', role: 'Game Designer', email: 'design@gamebox.local', password: 'Design123!', avatar: 'DS', department: 'Design' },
    { id: 6, name: 'Valentina Ríos', role: 'QA', email: 'qa@gamebox.local', password: 'Qa123!', avatar: 'VR', department: 'Quality' }
  ],
  projects: [
    { id: 101, name: 'Llamalandia', code: 'LLA', genre: 'Aventura Cozy', engine: 'Unity', platform: 'PC / Steam', owner: 2, status: 'Active', progress: 72, sprintId: 201, dueDate: '2026-10-28', startDate: '2026-05-11', version: '0.9.4-beta', repository: 'gitlab.com/paramo-games/llamalandia', description: 'Juego cozy de exploración con llamas, crafting, misiones ligeras y progresión por biomas.' },
    { id: 102, name: 'Nova Circuit', code: 'NVC', genre: 'Carreras Arcade', engine: 'Unreal', platform: 'PC / Consolas', owner: 2, status: 'Planning', progress: 34, sprintId: 202, dueDate: '2026-12-08', startDate: '2026-07-04', version: '0.3.1-proto', repository: 'github.com/gamebox-studio/nova-circuit', description: 'Carreras futuristas con énfasis en velocidad, mejoras, ligas y estética neon.' },
    { id: 103, name: 'Echoes of Bloom', code: 'EOB', genre: 'Puzzle Narrativo', engine: 'Godot', platform: 'PC / Móvil', owner: 5, status: 'Paused', progress: 58, sprintId: 203, dueDate: '2027-01-12', startDate: '2026-03-22', version: '0.8.1-internal', repository: 'github.com/gamebox-studio/echoes-bloom', description: 'Puzzle emotivo con narrativa ligera, jardinería mágica y decisiones ambientales.' }
  ],
  sprints: [
    { id: 201, projectId: 101, name: 'Sprint 12', goal: 'Pulir HUD, inventario y primer bioma para la demo de octubre.', startDate: '2026-09-15', endDate: '2026-09-28', status: 'Active', plannedPoints: 42, completedPoints: 30 },
    { id: 202, projectId: 102, name: 'Sprint 04', goal: 'Prototipo funcional del circuito central y comportamiento inicial de IA.', startDate: '2026-09-18', endDate: '2026-10-01', status: 'Planning', plannedPoints: 36, completedPoints: 8 },
    { id: 203, projectId: 103, name: 'Sprint 08', goal: 'Revisión de arte, refactor de interacciones y nuevo moodboard.', startDate: '2026-09-10', endDate: '2026-09-24', status: 'Paused', plannedPoints: 28, completedPoints: 16 },
    { id: 204, projectId: 101, name: 'Sprint 11', goal: 'Onboarding, menú y rendimiento del primer bioma.', startDate: '2026-09-01', endDate: '2026-09-14', status: 'Completed', plannedPoints: 38, completedPoints: 36 },
    { id: 205, projectId: 101, name: 'Sprint 10', goal: 'Sistema base de crafting e inventario.', startDate: '2026-08-18', endDate: '2026-08-31', status: 'Completed', plannedPoints: 34, completedPoints: 31 },
    { id: 206, projectId: 101, name: 'Sprint 09', goal: 'Primera versión del bosque y sistema de recursos.', startDate: '2026-08-04', endDate: '2026-08-17', status: 'Completed', plannedPoints: 30, completedPoints: 28 }
  ],
  tasks: [
    { id: 301, projectId: 101, sprintId: 201, title: 'Diseñar mapa del Bosque Rosa', type: 'Design', status: 'Review', priority: 'High', storyPoints: 8, assignee: 5, dueDate: '2026-09-19', tags: ['Map Design','Level'], module: 'World', estimateHours: 14, versionTarget: '0.9.5-beta', description: 'Bloquear layout del bioma, rutas secundarias, puntos de interés y coleccionables.' },
    { id: 302, projectId: 101, sprintId: 201, title: 'Implementar UI del inventario', type: 'Feature', status: 'In Progress', priority: 'High', storyPoints: 5, assignee: 3, dueDate: '2026-09-18', tags: ['UI','Inventory'], module: 'Inventory', estimateHours: 12, versionTarget: '0.9.5-beta', description: 'Pantalla de inventario con categorías, tooltips, navegación y estados visuales.' },
    { id: 303, projectId: 101, sprintId: 201, title: 'Ilustrar iconos de recursos', type: 'Art', status: 'Done', priority: 'Medium', storyPoints: 3, assignee: 4, dueDate: '2026-09-16', tags: ['Art','Icons'], module: 'UI', estimateHours: 8, versionTarget: '0.9.4-beta', description: 'Pack de 24 iconos para recursos, herramientas y crafting.' },
    { id: 304, projectId: 102, sprintId: 202, title: 'Balancear aceleración del vehículo base', type: 'Feature', status: 'Backlog', priority: 'Medium', storyPoints: 5, assignee: 3, dueDate: '2026-09-30', tags: ['Physics','Vehicle'], module: 'Gameplay', estimateHours: 10, versionTarget: '0.3.2-proto', description: 'Ajustar aceleración, drift y curva de nitro para sensación arcade.' },
    { id: 305, projectId: 102, sprintId: 202, title: 'Moodboard visual para el menú', type: 'Art', status: 'Todo', priority: 'Low', storyPoints: 2, assignee: 4, dueDate: '2026-09-26', tags: ['UI','Branding'], module: 'UI', estimateHours: 5, versionTarget: '0.3.2-proto', description: 'Definir color script, tipografías y referencias para menú principal.' },
    { id: 306, projectId: 103, sprintId: 203, title: 'Refactor de eventos narrativos', type: 'Technical', status: 'Blocked', priority: 'High', storyPoints: 8, assignee: 3, dueDate: '2026-09-23', tags: ['Narrative','Events'], module: 'Narrative', estimateHours: 16, versionTarget: '0.8.2-internal', description: 'Unificar disparadores narrativos y evitar duplicidad de diálogos.' },
    { id: 307, projectId: 101, sprintId: 201, title: 'Checklist de entrega del demo', type: 'Production', status: 'Todo', priority: 'Critical', storyPoints: 3, assignee: 2, dueDate: '2026-09-20', tags: ['Release','Demo'], module: 'Delivery', estimateHours: 4, versionTarget: '0.9.5-beta', description: 'Checklist interna de contenidos, fechas, builds, store assets y responsables.' },
    { id: 308, projectId: 101, sprintId: 201, title: 'Revisar onboarding con feedback interno', type: 'Feedback', status: 'Done', priority: 'Low', storyPoints: 2, assignee: 6, dueDate: '2026-09-17', tags: ['Feedback'], module: 'Onboarding', estimateHours: 3, versionTarget: '0.9.4-beta', description: 'Consolidar comentarios internos sobre HUD, tutorial y claridad de objetivos.' },
    { id: 309, projectId: 101, sprintId: 201, title: 'Integrar música dinámica del bosque', type: 'Audio', status: 'In Progress', priority: 'Medium', storyPoints: 5, assignee: 3, dueDate: '2026-09-24', tags: ['Audio','Integration'], module: 'Audio', estimateHours: 9, versionTarget: '0.9.5-beta', description: 'Integrar stems ambientales y transiciones según zonas del bioma.' },
    { id: 310, projectId: 101, sprintId: 201, title: 'Actualizar página de Steam para la demo', type: 'Production', status: 'Todo', priority: 'High', storyPoints: 3, assignee: 2, dueDate: '2026-09-25', tags: ['Steam','Marketing'], module: 'Store', estimateHours: 5, versionTarget: '0.9.5-beta', description: 'Actualizar screenshots, descripción corta, tags y material de la demo.' },
    { id: 311, projectId: 102, sprintId: 202, title: 'Prototipo de HUD de carrera', type: 'Design', status: 'Review', priority: 'Medium', storyPoints: 3, assignee: 4, dueDate: '2026-09-22', tags: ['HUD','UI'], module: 'UI', estimateHours: 7, versionTarget: '0.3.2-proto', description: 'Diseñar velocidad, posición, nitro y minimapa con lectura rápida.' },
    { id: 312, projectId: 103, sprintId: 203, title: 'Actualizar guion de la secuencia inicial', type: 'Design', status: 'Todo', priority: 'Medium', storyPoints: 3, assignee: 5, dueDate: '2026-09-21', tags: ['Narrative'], module: 'Narrative', estimateHours: 6, versionTarget: '0.8.2-internal', description: 'Reducir exposición y mejorar ritmo del primer encuentro.' }
  ],
  team: [
    { id: 401, userId: 1, specialty: 'Studio Operations', availability: 'High', workload: 58, weeklyCapacity: 40, assignedHours: 23, location: 'Cochabamba', timezone: 'BOT', favoriteTool: 'Reports', bio: 'Administra el workspace, estructura, permisos y consistencia operativa.' },
    { id: 402, userId: 2, specialty: 'Production & Delivery', availability: 'High', workload: 72, weeklyCapacity: 40, assignedHours: 29, location: 'Cochabamba', timezone: 'BOT', favoriteTool: 'Roadmap', bio: 'Coordina roadmap, alcance, fechas, prioridades y comunicación entre áreas.' },
    { id: 403, userId: 3, specialty: 'Gameplay Programmer', availability: 'Medium', workload: 86, weeklyCapacity: 40, assignedHours: 34, location: 'La Paz', timezone: 'BOT', favoriteTool: 'Board', bio: 'Implementa sistemas centrales, integra builds y resuelve trabajo técnico.' },
    { id: 404, userId: 4, specialty: 'UI / Visual Artist', availability: 'High', workload: 64, weeklyCapacity: 40, assignedHours: 26, location: 'Santa Cruz', timezone: 'BOT', favoriteTool: 'Projects', bio: 'Diseño visual, UI, iconografía, branding y consistencia artística.' },
    { id: 405, userId: 5, specialty: 'Game & Level Design', availability: 'Medium', workload: 78, weeklyCapacity: 40, assignedHours: 31, location: 'Cochabamba', timezone: 'BOT', favoriteTool: 'Sprints', bio: 'Diseña niveles, sistemas, balance y experiencia del jugador.' },
    { id: 406, userId: 6, specialty: 'Quality Liaison', availability: 'High', workload: 49, weeklyCapacity: 40, assignedHours: 20, location: 'Oruro', timezone: 'BOT', favoriteTool: 'Feedback', bio: 'Coordina observaciones internas y deriva el trabajo QA a herramientas especializadas.' }
  ],
  builds: [
    { id: 501, projectId: 101, version: '0.9.4-beta', platform: 'Windows', engine: 'Unity 6', date: '2026-09-17', owner: 3, status: 'Ready for Review', branch: 'prototype/test', commit: 'c3481ff', size: '2.8 GB', changelog: 'Nuevo HUD, optimización del menú de pausa y tutorial inicial ajustado.' },
    { id: 502, projectId: 101, version: '0.9.5-beta', platform: 'Windows', engine: 'Unity 6', date: '2026-09-24', owner: 3, status: 'Planned', branch: 'release/demo', commit: 'pending', size: '—', changelog: 'Inventario, navegación del mapa, música dinámica y material para la demo.' },
    { id: 503, projectId: 102, version: '0.3.1-proto', platform: 'PC', engine: 'Unreal 5', date: '2026-09-20', owner: 3, status: 'Building', branch: 'prototype/handling', commit: '5d931ea', size: '4.1 GB', changelog: 'Ajustes de colisiones, IA temprana y nuevo circuito base.' },
    { id: 504, projectId: 103, version: '0.8.1-internal', platform: 'PC', engine: 'Godot 4', date: '2026-09-12', owner: 3, status: 'Blocked', branch: 'dev/narrative', commit: 'a4820bb', size: '1.3 GB', changelog: 'Refactor narrativo con issue pendiente en escenas interactivas.' }
  ],
  milestones: [
    { id: 801, projectId: 101, name: 'Preproducción', status: 'Done', date: '2026-05-30', owner: 2, progress: 100 },
    { id: 802, projectId: 101, name: 'Vertical Slice', status: 'Done', date: '2026-07-18', owner: 2, progress: 100 },
    { id: 803, projectId: 101, name: 'Alpha', status: 'Done', date: '2026-08-28', owner: 2, progress: 100 },
    { id: 804, projectId: 101, name: 'Demo Beta', status: 'Active', date: '2026-10-02', owner: 2, progress: 72 },
    { id: 805, projectId: 101, name: 'Release Candidate', status: 'Planning', date: '2026-10-20', owner: 2, progress: 24 },
    { id: 806, projectId: 101, name: 'Release', status: 'Planning', date: '2026-10-28', owner: 2, progress: 12 },
    { id: 807, projectId: 102, name: 'Concept', status: 'Done', date: '2026-07-15', owner: 5, progress: 100 },
    { id: 808, projectId: 102, name: 'Driving Prototype', status: 'Active', date: '2026-10-01', owner: 3, progress: 54 },
    { id: 809, projectId: 102, name: 'Vertical Slice', status: 'Planning', date: '2026-11-10', owner: 2, progress: 18 },
    { id: 810, projectId: 102, name: 'Alpha', status: 'Planning', date: '2026-12-08', owner: 2, progress: 6 },
    { id: 811, projectId: 103, name: 'Narrative Prototype', status: 'Done', date: '2026-05-20', owner: 5, progress: 100 },
    { id: 812, projectId: 103, name: 'Art Pass', status: 'Paused', date: '2026-09-28', owner: 4, progress: 58 }
  ],
  releases: [
    { id: 901, projectId: 101, name: 'Steam Demo 0.9.5', version: '0.9.5-beta', targetDate: '2026-10-02', status: 'At Risk', owner: 2, readiness: 76, checklist: [
      { label: 'Core scope completado', done: true }, { label: 'Store assets listos', done: false }, { label: 'Build candidata generada', done: false }, { label: 'Changelog preparado', done: true }, { label: 'Aprobación de producción', done: true }
    ]},
    { id: 902, projectId: 102, name: 'Prototype Review', version: '0.3.2-proto', targetDate: '2026-10-05', status: 'Planning', owner: 2, readiness: 42, checklist: [
      { label: 'Handling base', done: true }, { label: 'HUD prototipo', done: false }, { label: 'IA inicial', done: false }, { label: 'Circuito jugable', done: true }
    ]}
  ],
  docs: [
    { id: 601, title: 'Definition of Done', category: 'Process', owner: 2, updatedAt: '2026-09-15', content: 'Una tarea se considera Done cuando tiene entregable funcional, revisión interna, documentación breve y no bloquea otras áreas.' },
    { id: 602, title: 'Art Direction — Llamalandia', category: 'Art', owner: 4, updatedAt: '2026-09-14', content: 'Paleta rosada y cálida, recursos mágicos, biomas suaves y reglas de composición para UI, iconografía y escenas.' },
    { id: 603, title: 'Sprint Review Playbook', category: 'Scrum', owner: 2, updatedAt: '2026-09-13', content: 'Guía para presentar avances, demo, métricas, decisiones pendientes y próximos pasos sin hacer la ceremonia demasiado pesada.' },
    { id: 604, title: 'Build Naming Convention', category: 'Engineering', owner: 3, updatedAt: '2026-09-12', content: 'Formato de versión, ramas y convenciones de changelog para builds internas y candidatas.' }
  ],
  feedback: [
    { id: 701, projectId: 101, title: 'Texto del tutorial muy largo', category: 'Usability', status: 'Open', priority: 'Medium', reporter: 6, assignedTo: 4, note: 'Comentario interno: podría cansar al jugador durante los primeros minutos.' },
    { id: 702, projectId: 101, title: 'El mapa necesita más contraste visual', category: 'Art', status: 'In Review', priority: 'Low', reporter: 6, assignedTo: 4, note: 'Agregar sombras suaves o bordes para distinguir mejor caminos y áreas secundarias.' },
    { id: 703, projectId: 102, title: 'Sensación de rebote excesiva en curvas', category: 'Gameplay', status: 'Open', priority: 'High', reporter: 6, assignedTo: 3, note: 'Observación interna para el equipo de gameplay; el QA formal vive fuera de GameBox.' }
  ],
  activity: [
    { id: 1001, actor: 2, type: 'task', message: 'movió “Checklist de entrega del demo” a Todo', at: '2026-09-17T22:45:00' },
    { id: 1002, actor: 3, type: 'build', message: 'publicó la build 0.9.4-beta para revisión interna', at: '2026-09-17T21:30:00' },
    { id: 1003, actor: 4, type: 'task', message: 'completó “Ilustrar iconos de recursos”', at: '2026-09-17T19:12:00' },
    { id: 1004, actor: 5, type: 'project', message: 'actualizó el milestone Demo Beta de Llamalandia', at: '2026-09-17T18:05:00' },
    { id: 1005, actor: 6, type: 'feedback', message: 'registró un feedback de usabilidad sobre el tutorial', at: '2026-09-17T16:40:00' }
  ],
  notifications: [
    { id: 1101, title: 'Release en riesgo', text: 'Steam Demo 0.9.5 tiene 2 elementos pendientes.', level: 'warning', read: false, at: '2026-09-17T22:50:00' },
    { id: 1102, title: 'Build disponible', text: '0.9.4-beta está lista para revisión interna.', level: 'info', read: false, at: '2026-09-17T21:32:00' },
    { id: 1103, title: 'Capacidad alta', text: 'Carlos Méndez supera 85% de carga semanal.', level: 'warning', read: false, at: '2026-09-17T18:10:00' }
  ],
  settings: {
    boardStatuses: ['Backlog','Todo','In Progress','Review','Done'],
    taskTypes: ['Feature','Technical','Design','Art','Audio','Production','Feedback','Documentation','Research'],
    buildStatuses: ['Planned','Building','Ready for Review','Approved','Blocked'],
    releaseStatuses: ['Planning','On Track','At Risk','Released'],
    feedbackStatuses: ['Open','In Review','Resolved'],
    theme: 'dark',
    studioName: 'GameBox Studio'
  }
};
