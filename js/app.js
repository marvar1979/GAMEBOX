(() => {
  'use strict';

  const STORAGE_KEY = 'gamebox_pro_state_v3';
  const SESSION_KEY = 'gamebox_pro_session_v3';
  const APP_VERSION = '2.0.0';

  const ICONS = {
    dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>',
    projects:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8.5A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5V7Z"/></svg>',
    roadmap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21V7"/><path d="M5 7h9l-2-3 2-3H5"/><path d="M10 21V11"/><path d="M10 11h9l-2-3 2-3h-5"/></svg>',
    sprint:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h9"/><path d="M4 12h16"/><path d="M4 18h12"/><circle cx="17" cy="6" r="2"/><circle cx="19" cy="18" r="2"/></svg>',
    board:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="5" height="16" rx="2"/><rect x="10" y="4" width="5" height="16" rx="2"/><rect x="17" y="4" width="4" height="16" rx="2"/></svg>',
    tasks:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="m3 6 1.5 1.5L7 5"/><path d="m3 12 1.5 1.5L7 11"/><path d="m3 18 1.5 1.5L7 17"/></svg>',
    team:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    builds:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="16" cy="11" r="1"/><circle cx="18" cy="14" r="1"/><path d="M8.5 17 5 21l-2-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8l-2 4-3.5-4h-7Z"/></svg>',
    releases:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>',
    docs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
    feedback:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"/></svg>',
    reports:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="M7 14v4"/><path d="M12 10v8"/><path d="M17 6v12"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1V21h-4v-.09a1.7 1.7 0 0 0-1.1-1.51 1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1V3h4v.09A1.7 1.7 0 0 0 15.5 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.14.36.35.69.6 1 .28.28.63.48 1 .6H21v4h-.09a1.7 1.7 0 0 0-1.51.4Z"/></svg>',
    search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
    eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
    tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
    bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
    moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3c0 .25 0 .5.04.75A7 7 0 0 0 20.25 12c.25 0 .5 0 .75-.04Z"/></svg>',
    sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    enter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    branch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 7c4 0 4 0 6-1"/></svg>',
    commit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h6M15 12h6"/><circle cx="12" cy="12" r="3"/></svg>',
    warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v4M12 17h.01"/></svg>',
    arrowUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m18 15-6-6-6 6"/></svg>',
    export:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    import:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21V9"/><path d="m17 14-5-5-5 5"/><path d="M5 3h14"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5"/></svg>',
    more:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>'
  };

  const NAV_SECTIONS = [
    { label:'Overview', items:[{key:'dashboard',label:'Dashboard',icon:'dashboard'}] },
    { label:'Delivery', items:[
      {key:'projects',label:'Projects',icon:'projects'}, {key:'roadmap',label:'Roadmap',icon:'roadmap'},
      {key:'sprints',label:'Sprints',icon:'sprint'}, {key:'board',label:'Board',icon:'board'}, {key:'tasks',label:'Work items',icon:'tasks'}
    ]},
    { label:'Studio', items:[
      {key:'team',label:'Team',icon:'team'}, {key:'builds',label:'Builds',icon:'builds'}, {key:'releases',label:'Releases',icon:'releases'}, {key:'calendar',label:'Calendar',icon:'calendar'}
    ]},
    { label:'Knowledge', items:[
      {key:'docs',label:'Docs',icon:'docs'}, {key:'activity',label:'Activity',icon:'activity'}, {key:'reports',label:'Reports',icon:'reports'}
    ]},
    { label:'Support', items:[{key:'feedback',label:'Feedback lite',icon:'feedback'}, {key:'settings',label:'Settings',icon:'settings'}] }
  ];

  const PAGE_META = {
    dashboard:{title:'Dashboard',crumb:'Overview / Dashboard',context:'Visión ejecutiva de proyectos, sprint, capacidad, riesgos y entregas.'},
    projects:{title:'Projects',crumb:'Delivery / Projects',context:'Portafolio de videojuegos, responsables, estado, fechas y progreso.'},
    roadmap:{title:'Roadmap',crumb:'Delivery / Roadmap',context:'Milestones y evolución de cada proyecto en una línea temporal clara.'},
    sprints:{title:'Sprints',crumb:'Delivery / Sprints',context:'Planificación Scrum, objetivos, story points y velocidad del equipo.'},
    board:{title:'Board',crumb:'Delivery / Board',context:'Flujo visual de trabajo con drag & drop para la daily y seguimiento.'},
    tasks:{title:'Work items',crumb:'Delivery / Work items',context:'Backlog central de tareas, responsables, prioridades, módulos y fechas.'},
    team:{title:'Team',crumb:'Studio / Team',context:'Capacidad, carga, especialidades y disponibilidad por persona.'},
    builds:{title:'Builds',crumb:'Studio / Builds',context:'Versiones internas, commits, ramas, plataformas y changelogs.'},
    releases:{title:'Releases',crumb:'Studio / Releases',context:'Preparación de entregas, readiness y checklist de publicación.'},
    calendar:{title:'Calendar',crumb:'Studio / Calendar',context:'Fechas clave: sprints, builds, work items, milestones y releases.'},
    docs:{title:'Docs',crumb:'Knowledge / Docs',context:'Wiki interna con acuerdos de proceso, arte, producción e ingeniería.'},
    activity:{title:'Activity',crumb:'Knowledge / Activity',context:'Historial operativo del workspace y cambios relevantes.'},
    feedback:{title:'Feedback lite',crumb:'Support / Feedback',context:'Observaciones internas simples sin reemplazar herramientas especializadas de QA.'},
    reports:{title:'Reports',crumb:'Knowledge / Reports',context:'Métricas de producción, velocidad, capacidad, riesgos y delivery.'},
    settings:{title:'Settings',crumb:'Support / Settings',context:'Preferencias, respaldos y controles del workspace.'}
  };

  const CREATE_OPTIONS = [
    { kind:'project', label:'Project', icon:'projects', desc:'Nuevo videojuego o iniciativa.' },
    { kind:'task', label:'Work item', icon:'tasks', desc:'Tarea, feature o trabajo técnico.' },
    { kind:'sprint', label:'Sprint', icon:'sprint', desc:'Nueva iteración Scrum.' },
    { kind:'build', label:'Build', icon:'builds', desc:'Registrar una versión interna.' },
    { kind:'release', label:'Release', icon:'releases', desc:'Preparar una entrega.' },
    { kind:'milestone', label:'Milestone', icon:'roadmap', desc:'Hito de roadmap.' },
    { kind:'doc', label:'Document', icon:'docs', desc:'Nota o guía interna.' }
  ];

  let state;
  let currentUser = null;
  let currentView = 'dashboard';
  let currentCalendar = {year:2026,month:8};
  let taskFilters = {search:'',project:'all',status:'all',priority:'all'};
  const dom = {};

  const $ = id => document.getElementById(id);
  const deepClone = obj => JSON.parse(JSON.stringify(obj));
  const icon = name => ICONS[name] || '';
  const escapeHtml = value => String(value ?? '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const normalize = value => String(value ?? '').trim().toLowerCase();
  const slug = value => normalize(value).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const todayISO = () => new Date().toISOString().slice(0,10);
  const formatDate = value => value ? new Date(`${value}T00:00:00`).toLocaleDateString('es-BO',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const formatDateTime = value => value ? new Date(value).toLocaleString('es-BO',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) : '—';
  const nextId = list => Math.max(0,...list.map(x=>Number(x.id)||0))+1;
  const getUser = id => state.users.find(u=>u.id===Number(id));
  const getProject = id => state.projects.find(p=>p.id===Number(id));
  const getSprint = id => state.sprints.find(s=>s.id===Number(id));
  const getTask = id => state.tasks.find(t=>t.id===Number(id));
  const getBuild = id => state.builds.find(b=>b.id===Number(id));
  const getRelease = id => state.releases.find(r=>r.id===Number(id));

  function cacheDom(){
    ['authScreen','app','quickLoginGrid','loginForm','loginEmail','loginPassword','togglePassword','sidebar','sidebarNav','sidebarAvatar','sidebarUserName','sidebarUserRole','topbarAvatar','topbarName','topbarRole','pageTitle','breadcrumbText','contextBar','collapseSidebarBtn','mobileMenuBtn','logoutBtn','themeToggle','globalCreateBtn','notificationsBtn','notificationDot','notificationsPanel','modalOverlay','modalCard','modalTitle','modalSubtitle','modalEyebrow','modalBody','closeModalBtn','rightDrawerOverlay','rightDrawer','drawerTitle','drawerEyebrow','drawerBody','closeDrawerBtn','openCommandBtn','commandOverlay','commandInput','commandResults','toastContainer','importBackupInput'].forEach(id=>dom[id]=$(id));
  }

  function injectStaticIcons(){
    $('loginMailIcon').innerHTML=icon('mail'); $('loginLockIcon').innerHTML=icon('lock'); $('togglePassword').innerHTML=icon('eye'); $('loginEnterIcon').innerHTML=icon('enter'); $('shieldIcon').innerHTML=icon('shield');
    $('collapseSidebarBtn').innerHTML=icon('chevron'); $('workspaceChevron').innerHTML=icon('chevron'); $('commandIcon').innerHTML=icon('search'); $('logoutBtn').innerHTML=icon('logout'); $('mobileMenuBtn').innerHTML=icon('menu'); $('globalCreateIcon').innerHTML=icon('plus'); $('notificationIcon').innerHTML=icon('bell'); $('closeModalBtn').innerHTML=icon('close'); $('closeDrawerBtn').innerHTML=icon('close'); $('commandSearchIcon').innerHTML=icon('search');
  }

  async function loadState(){
    const stored=localStorage.getItem(STORAGE_KEY);
    if(stored){ try{return JSON.parse(stored);}catch{} }
    try{
      const names=['users','projects','sprints','tasks','team','builds','milestones','releases','docs','feedback','activity','notifications','settings'];
      const loaded=await Promise.all(names.map(name=>fetch(`json/${name}.json`).then(r=>{if(!r.ok)throw new Error(name);return r.json();})));
      return Object.fromEntries(names.map((name,i)=>[name,loaded[i]]));
    }catch(err){ return deepClone(window.GAMEBOX_SEED); }
  }

  function saveState(){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    localStorage.setItem(SESSION_KEY,JSON.stringify({userId:currentUser?.id||null,theme:state.settings.theme||'dark'}));
  }

  function restoreSession(){
    try{
      const raw=JSON.parse(localStorage.getItem(SESSION_KEY)||'{}');
      currentUser=state.users.find(u=>u.id===raw.userId)||null;
      if(raw.theme)state.settings.theme=raw.theme;
    }catch{currentUser=null;}
  }

  function applyTheme(){
    document.body.classList.toggle('theme-light',state.settings.theme==='light');
    document.body.classList.toggle('theme-dark',state.settings.theme!=='light');
    dom.themeToggle.innerHTML=state.settings.theme==='light'?icon('moon'):icon('sun');
  }

  function roleCan(action){
    const role=currentUser?.role||'';
    if(role==='Admin'||role==='Producer')return true;
    if(action==='tasks')return ['Developer','Art & UI','Game Designer','QA'].includes(role);
    if(action==='builds')return ['Developer'].includes(role);
    if(action==='docs')return !!role;
    if(action==='feedback')return !!role;
    return false;
  }

  function renderQuickLogins(){
    dom.quickLoginGrid.innerHTML=state.users.map(user=>`
      <button class="quick-login-btn" type="button" data-quick-user="${user.id}">
        <div class="avatar">${escapeHtml(user.avatar)}</div>
        <div class="quick-login-copy"><strong>${escapeHtml(user.role)}</strong><span>${escapeHtml(user.name)}</span></div>
        <span class="quick-login-check">${icon('check')}</span>
      </button>`).join('');
  }

  function selectQuickUser(id){
    const user=getUser(id); if(!user)return;
    dom.loginEmail.value=user.email; dom.loginPassword.value=user.password;
    document.querySelectorAll('.quick-login-btn').forEach(btn=>btn.classList.toggle('active',Number(btn.dataset.quickUser)===id));
    dom.loginPassword.focus();
  }

  function navCount(key){
    if(key==='projects')return state.projects.length;
    if(key==='sprints')return state.sprints.filter(s=>s.status==='Active'||s.status==='Planning').length;
    if(key==='tasks')return state.tasks.filter(t=>t.status!=='Done').length;
    if(key==='builds')return state.builds.filter(b=>b.status!=='Approved').length;
    if(key==='releases')return state.releases.filter(r=>r.status!=='Released').length;
    if(key==='feedback')return state.feedback.filter(f=>f.status!=='Resolved').length;
    return '';
  }

  function renderSidebar(){
    dom.sidebarNav.innerHTML=NAV_SECTIONS.map(section=>`
      <div class="nav-section-label">${section.label}</div>
      ${section.items.map(item=>`
        <button class="sidebar-nav-item ${item.key===currentView?'active':''}" data-nav="${item.key}" title="${item.label}">
          ${icon(item.icon)}<span class="nav-label">${item.label}</span>${navCount(item.key)!==''?`<span class="nav-badge">${navCount(item.key)}</span>`:''}
        </button>`).join('')}`).join('');
  }

  function showAuth(){dom.app.classList.add('hidden');dom.authScreen.classList.remove('hidden');}
  function showApp(){
    dom.authScreen.classList.add('hidden'); dom.app.classList.remove('hidden');
    [dom.sidebarAvatar,dom.topbarAvatar].forEach(x=>x.textContent=currentUser.avatar);
    dom.sidebarUserName.textContent=dom.topbarName.textContent=currentUser.name;
    dom.sidebarUserRole.textContent=dom.topbarRole.textContent=currentUser.role;
    renderSidebar(); navigate(currentView,false);
  }

  function navigate(view,push=true){
    if(!PAGE_META[view])view='dashboard'; currentView=view;
    document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
    $(`view-${view}`).classList.remove('hidden');
    dom.pageTitle.textContent=PAGE_META[view].title; dom.breadcrumbText.textContent=PAGE_META[view].crumb;
    renderSidebar(); renderContext(); renderCurrentView();
    dom.sidebar.classList.remove('mobile-open');
    if(push)history.replaceState(null,'',`#${view}`);
  }

  function renderContext(){
    const meta=PAGE_META[currentView];
    const actions=[];
    if(currentView==='projects'&&roleCan('projects'))actions.push(contextButton('New project','project','plus','primary'));
    if(currentView==='roadmap'&&roleCan('projects'))actions.push(contextButton('Add milestone','milestone','plus','primary'));
    if(currentView==='sprints'&&roleCan('projects'))actions.push(contextButton('New sprint','sprint','plus','primary'));
    if(['board','tasks'].includes(currentView)&&roleCan('tasks'))actions.push(contextButton('New work item','task','plus','primary'));
    if(currentView==='team'&&roleCan('projects'))actions.push(contextButton('Add member','team','plus','primary'));
    if(currentView==='builds'&&roleCan('builds'))actions.push(contextButton('Register build','build','plus','primary'));
    if(currentView==='releases'&&roleCan('projects'))actions.push(contextButton('New release','release','plus','primary'));
    if(currentView==='docs'&&roleCan('docs'))actions.push(contextButton('New document','doc','plus','primary'));
    if(currentView==='feedback')actions.push(contextButton('New feedback','feedback','plus','primary'));
    dom.contextBar.innerHTML=`<div class="context-copy"><h2>${meta.title}</h2><p>${meta.context}</p></div><div class="context-actions">${actions.join('')}</div>`;
  }

  function contextButton(label,kind,iconName='plus',variant='secondary'){return `<button class="btn btn-${variant}" data-open-form="${kind}">${icon(iconName)}<span>${label}</span></button>`;}
  function statusChip(value){return `<span class="status-chip status-${slug(value)}">${escapeHtml(value)}</span>`;}
  function priorityChip(value){return `<span class="priority-chip priority-${slug(value)}">${escapeHtml(value)}</span>`;}
  function typeChip(value){return `<span class="type-chip">${escapeHtml(value)}</span>`;}
  function tagChip(value){return `<span class="tag-chip">${escapeHtml(value)}</span>`;}
  function actionButtons(kind,id,canEdit=true){return `<div class="table-actions">
      <button class="action-icon view" data-action="view" data-kind="${kind}" data-id="${id}" title="View">${icon('eye')}</button>
      <button class="action-icon edit ${canEdit?'':'hidden'}" data-action="edit" data-kind="${kind}" data-id="${id}" title="Edit">${icon('edit')}</button>
      <button class="action-icon delete ${canEdit?'':'hidden'}" data-action="delete" data-kind="${kind}" data-id="${id}" title="Delete">${icon('trash')}</button>
      <button class="action-icon tag" data-action="meta" data-kind="${kind}" data-id="${id}" title="Details">${icon('tag')}</button>
    </div>`;}

  function calculateMetrics(){
    const activeProjects=state.projects.filter(p=>p.status==='Active').length;
    const currentSprint=state.sprints.find(s=>s.status==='Active');
    const sprintProgress=currentSprint?.plannedPoints?Math.round((currentSprint.completedPoints/currentSprint.plannedPoints)*100):0;
    const openTasks=state.tasks.filter(t=>t.status!=='Done').length;
    const blocked=state.tasks.filter(t=>t.status==='Blocked').length;
    const overdue=state.tasks.filter(t=>t.status!=='Done'&&t.dueDate<todayISO()).length;
    const releasesAtRisk=state.releases.filter(r=>r.status==='At Risk').length;
    const workloadAvg=Math.round(state.team.reduce((a,m)=>a+m.workload,0)/Math.max(1,state.team.length));
    const onTime=Math.max(0,Math.min(100,100-Math.round((overdue/Math.max(1,state.tasks.length))*100)));
    return {activeProjects,currentSprint,sprintProgress,openTasks,blocked,overdue,releasesAtRisk,workloadAvg,onTime};
  }

  function renderCurrentView(){
    ({dashboard:renderDashboard,projects:renderProjects,roadmap:renderRoadmap,sprints:renderSprints,board:renderBoard,tasks:renderTasks,team:renderTeam,builds:renderBuilds,releases:renderReleases,calendar:renderCalendar,docs:renderDocs,activity:renderActivity,feedback:renderFeedback,reports:renderReports,settings:renderSettings}[currentView]||renderDashboard)();
  }

  function renderDashboard(){
    const m=calculateMetrics();
    const activeSprint=m.currentSprint;
    const velocity=state.sprints.filter(s=>s.status==='Completed').slice(-4).map(s=>({label:s.name.replace('Sprint ', 'S'),planned:s.plannedPoints,done:s.completedPoints}));
    if(activeSprint)velocity.push({label:activeSprint.name.replace('Sprint ','S'),planned:activeSprint.plannedPoints,done:activeSprint.completedPoints});
    const maxVelocity=Math.max(1,...velocity.map(v=>v.planned));
    const myTasks=state.tasks.filter(t=>t.assignee===currentUser.id&&t.status!=='Done').slice(0,5);
    const teamSorted=[...state.team].sort((a,b)=>b.workload-a.workload).slice(0,5);
    const release=state.releases[0];
    const recent=[...state.activity].sort((a,b)=>new Date(b.at)-new Date(a.at)).slice(0,6);

    $('view-dashboard').innerHTML=`
      <section class="kpi-grid">
        ${kpi('Active projects',m.activeProjects,'projects','Portfolio scope','up','+1 this quarter')}
        ${kpi('Sprint health',`${m.sprintProgress}%`,'sprint',activeSprint?activeSprint.name:'No active sprint',m.sprintProgress>=70?'up':'warn',activeSprint?`${activeSprint.completedPoints}/${activeSprint.plannedPoints} pts`:'—')}
        ${kpi('Open work items',m.openTasks,'tasks',`${m.blocked} blocked`,m.blocked?'warn':'up',m.blocked?'Needs attention':'Flow healthy')}
        ${kpi('On-time delivery',`${m.onTime}%`,'calendar',`${m.overdue} overdue item(s)`,m.overdue?'warn':'up',m.overdue?'Review due dates':'On schedule')}
      </section>

      <section class="dashboard-grid">
        <article class="panel">
          <div class="panel-head"><div><h3>Sprint velocity</h3><p>Committed vs completed story points across recent sprints.</p></div>${statusChip(activeSprint?.status||'Planning')}</div>
          <div class="panel-inner">
            <div class="chart-box">${velocity.map(v=>`<div class="chart-col"><div style="height:180px;display:flex;align-items:flex-end;gap:4px"><div class="chart-bar" title="Done ${v.done}" style="height:${Math.max(10,(v.done/maxVelocity)*180)}px"></div><div class="chart-bar" title="Planned ${v.planned}" style="height:${Math.max(10,(v.planned/maxVelocity)*180)}px;background:var(--panel-3);border:1px solid var(--stroke)"></div></div><span>${v.label}</span></div>`).join('')}</div>
          </div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h3>Release readiness</h3><p>${escapeHtml(release?.name||'No release planned')}</p></div>${release?statusChip(release.status):''}</div>
          <div class="panel-inner">${release?`
            <div class="release-readiness"><div class="ring" style="--p:${release.readiness}"><strong>${release.readiness}%</strong></div><div class="check-list">${release.checklist.slice(0,4).map(c=>`<div class="check-row"><span>${escapeHtml(c.label)}</span><strong class="${c.done?'ok':'warn'}">${c.done?'Ready':'Pending'}</strong></div>`).join('')}</div></div>`:'<div class="empty-state">No release scheduled.</div>'}
          </div>
        </article>
      </section>

      <section class="dashboard-grid equal">
        <article class="panel">
          <div class="panel-head"><div><h3>Team capacity</h3><p>Weekly workload across the studio.</p></div><button class="btn btn-secondary" data-nav="team">Open team</button></div>
          <div class="panel-inner metric-list">${teamSorted.map(member=>{const u=getUser(member.userId);return `<div class="metric-row"><div class="metric-label"><strong>${escapeHtml(u?.name||'Member')}</strong><span>${escapeHtml(member.specialty)}</span></div><div class="bar"><span style="width:${member.workload}%"></span></div><div class="metric-value">${member.workload}%</div></div>`}).join('')}</div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h3>Delivery risk</h3><p>Signals that can affect schedule or scope.</p></div><button class="btn btn-secondary" data-nav="reports">View reports</button></div>
          <div class="panel-inner risk-grid">
            <div class="risk-cell ${m.overdue?'high':''}"><strong>${m.overdue}</strong><span>Overdue work items</span></div>
            <div class="risk-cell ${m.blocked?'medium':''}"><strong>${m.blocked}</strong><span>Blocked items</span></div>
            <div class="risk-cell ${m.releasesAtRisk?'medium':''}"><strong>${m.releasesAtRisk}</strong><span>Releases at risk</span></div>
            <div class="risk-cell"><strong>${m.workloadAvg}%</strong><span>Average team load</span></div>
          </div>
        </article>
      </section>

      <section class="dashboard-grid">
        <article class="panel">
          <div class="panel-head"><div><h3>My work</h3><p>Items currently assigned to ${escapeHtml(currentUser.name)}.</p></div><button class="btn btn-secondary" data-nav="tasks">All work</button></div>
          <div class="panel-inner">${myTasks.length?`<div class="metric-list">${myTasks.map(t=>`<div class="metric-row"><div class="metric-label"><strong>${escapeHtml(t.title)}</strong><span>${escapeHtml(getProject(t.projectId)?.name||'Project')} · ${formatDate(t.dueDate)}</span></div><div class="bar"><span style="width:${t.status==='Review'?85:t.status==='In Progress'?55:t.status==='Done'?100:20}%"></span></div><div>${priorityChip(t.priority)}</div></div>`).join('')}</div>`:'<div class="empty-state">No open work items assigned to this user.</div>'}</div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h3>Recent activity</h3><p>Latest workspace changes.</p></div><button class="btn btn-secondary" data-nav="activity">View all</button></div>
          <div class="panel-inner activity-list">${recent.map(activityItem).join('')}</div>
        </article>
      </section>
    `;
  }

  function kpi(label,value,iconName,foot,trendClass,trendText){return `<article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${label}</span><div class="kpi-icon">${icon(iconName)}</div></div><div class="kpi-value">${value}</div><div class="kpi-foot"><span>${foot}</span><span class="trend ${trendClass}">${icon('arrowUp')}${trendText}</span></div></article>`;}
  function activityItem(a){const u=getUser(a.actor);return `<div class="activity-item"><div class="activity-icon">${icon(a.type==='build'?'builds':a.type==='project'?'projects':a.type==='feedback'?'feedback':'tasks')}</div><div class="activity-copy"><p><strong>${escapeHtml(u?.name||'System')}</strong> <span>${escapeHtml(a.message)}</span></p><span>${escapeHtml(u?.department||'GameBox')}</span></div><div class="activity-time">${formatDateTime(a.at)}</div></div>`;}

  function renderProjects(){
    $('view-projects').innerHTML=`<section class="project-grid">${state.projects.map(projectCard).join('')}</section>`;
  }

  function projectCard(p){
    const tasks=state.tasks.filter(t=>t.projectId===p.id); const builds=state.builds.filter(b=>b.projectId===p.id); const owner=getUser(p.owner); const sprint=getSprint(p.sprintId);
    return `<article class="project-card"><div class="project-accent"></div><div class="project-body">
      <div class="project-top"><div class="project-title"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.code)} · ${escapeHtml(p.genre)} · ${escapeHtml(p.version)}</p></div>${statusChip(p.status)}</div>
      <p class="project-desc">${escapeHtml(p.description)}</p>
      <div class="project-meta"><span class="meta-item">${icon('builds')}${escapeHtml(p.engine)}</span><span class="meta-item">${icon('calendar')}${formatDate(p.dueDate)}</span><span class="meta-item">${icon('user')}${escapeHtml(owner?.name||'Unassigned')}</span></div>
      <div class="progress-block"><div class="progress-line"><span>${escapeHtml(sprint?.name||'No sprint')}</span><strong>${p.progress}%</strong></div><div class="bar"><span style="width:${p.progress}%"></span></div></div>
      <div class="project-stats"><div class="project-stat"><strong>${tasks.length}</strong><span>Work items</span></div><div class="project-stat"><strong>${tasks.filter(t=>t.status==='Done').length}</strong><span>Completed</span></div><div class="project-stat"><strong>${builds.length}</strong><span>Builds</span></div></div>
      <div class="card-actions">${actionButtons('project',p.id,roleCan('projects'))}</div>
    </div></article>`;
  }

  function renderRoadmap(){
    const grouped=state.projects.map(p=>({project:p,milestones:state.milestones.filter(m=>m.projectId===p.id).sort((a,b)=>new Date(a.date)-new Date(b.date))}));
    $('view-roadmap').innerHTML=`<article class="panel"><div class="panel-head"><div><h3>Studio roadmap</h3><p>Milestones across active and planned projects.</p></div><div class="panel-head-actions"><button class="btn btn-secondary" data-open-form="milestone">${icon('plus')}Milestone</button></div></div><div class="roadmap-list">${grouped.map(g=>`<div class="roadmap-project"><div class="roadmap-project-info"><h4>${escapeHtml(g.project.name)}</h4><p>${escapeHtml(g.project.code)} · ${escapeHtml(g.project.version)}<br>${formatDate(g.project.dueDate)}</p></div><div class="roadmap-track">${g.milestones.length?g.milestones.map(m=>`<div class="milestone ${m.status==='Done'?'done':m.status==='Active'?'active':m.status==='Paused'?'risk':''}"><h5>${escapeHtml(m.name)}</h5><p>${escapeHtml(m.status)}</p><small>${formatDate(m.date)} · ${m.progress}%</small><div class="card-actions" style="margin-top:8px">${actionButtons('milestone',m.id,roleCan('projects'))}</div></div>`).join(''):'<div class="empty-state">No milestones</div>'}</div></div>`).join('')}</div></article>`;
  }

  function renderSprints(){
    const rows=state.sprints.map(s=>{const p=getProject(s.projectId);const progress=s.plannedPoints?Math.round((s.completedPoints/s.plannedPoints)*100):0;const taskCount=state.tasks.filter(t=>t.sprintId===s.id).length;return `<tr><td><div class="table-title">${escapeHtml(s.name)}</div><div class="table-subtitle">${escapeHtml(s.goal)}</div></td><td>${escapeHtml(p?.name||'—')}</td><td>${formatDate(s.startDate)}</td><td>${formatDate(s.endDate)}</td><td>${statusChip(s.status)}</td><td>${s.completedPoints}/${s.plannedPoints}</td><td><div class="bar" style="width:120px"><span style="width:${Math.min(100,progress)}%"></span></div></td><td>${taskCount}</td><td>${actionButtons('sprint',s.id,roleCan('projects'))}</td></tr>`}).join('');
    $('view-sprints').innerHTML=`<article class="panel table-panel"><div class="panel-head"><div><h3>Sprint registry</h3><p>Objectives, dates, commitment and completion.</p></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Sprint</th><th>Project</th><th>Start</th><th>End</th><th>Status</th><th>Points</th><th>Progress</th><th>Items</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table></div></article>`;
  }

  function boardStatuses(){const base=state.settings.boardStatuses||[];return [...new Set([...base,...state.tasks.map(t=>t.status)])];}
  function renderBoard(){
    const columns=boardStatuses();
    $('view-board').innerHTML=`<article class="panel"><div class="panel-head"><div><h3>Team board</h3><p>Drag work items between columns to update status.</p></div><div class="panel-head-actions"><button class="btn btn-secondary" data-nav="tasks">List view</button><button class="btn btn-primary" data-open-form="task">${icon('plus')}New item</button></div></div><div class="panel-inner kanban-scroll"><div class="kanban" style="grid-template-columns:repeat(${columns.length},minmax(270px,1fr));min-width:${columns.length*286}px">${columns.map(status=>{const tasks=state.tasks.filter(t=>t.status===status);return `<section class="kanban-column" data-drop-status="${status}"><div class="kanban-head"><div class="kanban-head-left"><span class="kanban-dot"></span><strong>${escapeHtml(status)}</strong></div><span class="kanban-count">${tasks.length}</span></div><div class="kanban-stack">${tasks.map(taskCard).join('')||'<div class="empty-state">No items</div>'}</div></section>`}).join('')}</div></div></article>`;
    initBoardDnD();
  }

  function taskCard(t){const u=getUser(t.assignee);return `<article class="task-card" draggable="${roleCan('tasks')?'true':'false'}" data-drag-task="${t.id}" data-action="view" data-kind="task" data-id="${t.id}"><div class="task-card-top"><span class="task-key">GBX-${t.id}</span>${priorityChip(t.priority)}</div><h4>${escapeHtml(t.title)}</h4><div class="task-card-meta">${typeChip(t.type)}${tagChip(getProject(t.projectId)?.code||'PRJ')}</div><div class="task-card-foot"><div class="task-card-assignee"><div class="avatar">${escapeHtml(u?.avatar||'NA')}</div><span>${escapeHtml(u?.name||'Unassigned')}</span></div><span class="points-badge">${t.storyPoints} pts</span></div></article>`;}

  function filteredTasks(){return state.tasks.filter(t=>{
    if(taskFilters.search && !`${t.title} ${t.description} ${t.module} ${(t.tags||[]).join(' ')}`.toLowerCase().includes(taskFilters.search.toLowerCase()))return false;
    if(taskFilters.project!=='all'&&String(t.projectId)!==taskFilters.project)return false;
    if(taskFilters.status!=='all'&&t.status!==taskFilters.status)return false;
    if(taskFilters.priority!=='all'&&t.priority!==taskFilters.priority)return false;
    return true;
  });}

  function renderTasks(){
    const tasks=filteredTasks();
    $('view-tasks').innerHTML=`<article class="panel table-panel"><div class="table-toolbar"><div class="table-toolbar-left"><input id="taskSearch" class="filter-control filter-search" value="${escapeHtml(taskFilters.search)}" placeholder="Search work items…"><select id="taskProjectFilter" class="filter-control"><option value="all">All projects</option>${state.projects.map(p=>`<option value="${p.id}" ${taskFilters.project===String(p.id)?'selected':''}>${escapeHtml(p.name)}</option>`).join('')}</select><select id="taskStatusFilter" class="filter-control"><option value="all">All statuses</option>${[...new Set(state.tasks.map(t=>t.status))].map(s=>`<option ${taskFilters.status===s?'selected':''}>${escapeHtml(s)}</option>`).join('')}</select><select id="taskPriorityFilter" class="filter-control"><option value="all">All priorities</option>${['Critical','High','Medium','Low'].map(p=>`<option ${taskFilters.priority===p?'selected':''}>${p}</option>`).join('')}</select></div><div class="table-toolbar-right"><span class="tag-chip">${tasks.length} items</span></div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Key</th><th>Work item</th><th>Project</th><th>Sprint</th><th>Type</th><th>Priority</th><th>Status</th><th>Owner</th><th>Due</th><th>Version</th><th>Actions</th></tr></thead><tbody>${tasks.map(t=>{const u=getUser(t.assignee);return `<tr><td>GBX-${t.id}</td><td><div class="table-title">${escapeHtml(t.title)}</div><div class="table-subtitle">${escapeHtml(t.module)} · ${escapeHtml(t.description)}</div></td><td>${escapeHtml(getProject(t.projectId)?.name||'—')}</td><td>${escapeHtml(getSprint(t.sprintId)?.name||'—')}</td><td>${typeChip(t.type)}</td><td>${priorityChip(t.priority)}</td><td>${t.status==='Blocked'?statusChip('Blocked'):statusChip(t.status)}</td><td>${escapeHtml(u?.name||'—')}</td><td>${formatDate(t.dueDate)}</td><td>${escapeHtml(t.versionTarget||'—')}</td><td>${actionButtons('task',t.id,roleCan('tasks'))}</td></tr>`}).join('')}</tbody></table></div></article>`;
  }

  function renderTeam(){
    $('view-team').innerHTML=`<section class="people-grid">${state.team.map(m=>{const u=getUser(m.userId);const capacity=Math.round((m.assignedHours/m.weeklyCapacity)*100);return `<article class="person-card"><div class="person-head"><div class="avatar">${escapeHtml(u?.avatar||'NA')}</div><div class="person-copy"><strong>${escapeHtml(u?.name||'Member')}</strong><span>${escapeHtml(u?.role||'Role')} · ${escapeHtml(m.specialty)}</span></div></div><p class="person-bio">${escapeHtml(m.bio)}</p><div class="capacity-row"><span>Weekly capacity</span><strong>${m.assignedHours}/${m.weeklyCapacity}h</strong></div><div class="bar"><span style="width:${Math.min(100,capacity)}%"></span></div><div class="project-meta" style="margin-top:12px"><span class="meta-item">${icon('calendar')}${escapeHtml(m.availability)}</span><span class="meta-item">${icon('user')}${escapeHtml(m.location)}</span></div><div class="card-actions">${actionButtons('team',m.id,roleCan('projects'))}</div></article>`}).join('')}</section>`;
  }

  function renderBuilds(){
    $('view-builds').innerHTML=`<section class="entity-grid">${state.builds.map(b=>`<article class="entity-card"><div class="entity-head"><div><h3>${escapeHtml(getProject(b.projectId)?.name||'Project')} · ${escapeHtml(b.version)}</h3><p>${escapeHtml(b.platform)} · ${formatDate(b.date)}</p></div>${statusChip(b.status)}</div><p>${escapeHtml(b.changelog)}</p><div class="entity-meta"><span class="meta-item">${icon('branch')}${escapeHtml(b.branch)}</span><span class="meta-item">${icon('commit')}${escapeHtml(b.commit)}</span><span>${escapeHtml(b.size)}</span><span>${escapeHtml(b.engine)}</span></div><div class="card-actions">${actionButtons('build',b.id,roleCan('builds'))}</div></article>`).join('')}</section>`;
  }

  function renderReleases(){
    $('view-releases').innerHTML=`<section class="entity-grid">${state.releases.map(r=>`<article class="entity-card"><div class="entity-head"><div><h3>${escapeHtml(r.name)}</h3><p>${escapeHtml(getProject(r.projectId)?.name||'Project')} · ${escapeHtml(r.version)}</p></div>${statusChip(r.status)}</div><div class="release-readiness" style="grid-template-columns:90px 1fr;margin-top:14px"><div class="ring" style="--p:${r.readiness};width:88px;height:88px"><strong>${r.readiness}%</strong></div><div class="check-list">${r.checklist.slice(0,3).map(c=>`<div class="check-row"><span>${escapeHtml(c.label)}</span><strong class="${c.done?'ok':'warn'}">${c.done?'Ready':'Pending'}</strong></div>`).join('')}</div></div><div class="entity-meta" style="margin-top:14px"><span>Target ${formatDate(r.targetDate)}</span><span>Owner ${escapeHtml(getUser(r.owner)?.name||'—')}</span></div><div class="card-actions">${actionButtons('release',r.id,roleCan('projects'))}</div></article>`).join('')}</section>`;
  }

  function calendarEventsFor(dateStr){const out=[];state.tasks.filter(t=>t.dueDate===dateStr).forEach(t=>out.push(`Work · ${t.title}`));state.sprints.forEach(s=>{if(s.startDate===dateStr)out.push(`Sprint start · ${s.name}`);if(s.endDate===dateStr)out.push(`Sprint end · ${s.name}`)});state.builds.filter(b=>b.date===dateStr).forEach(b=>out.push(`Build · ${b.version}`));state.milestones.filter(m=>m.date===dateStr).forEach(m=>out.push(`Milestone · ${m.name}`));state.releases.filter(r=>r.targetDate===dateStr).forEach(r=>out.push(`Release · ${r.name}`));return out;}
  function renderCalendar(){
    const y=currentCalendar.year,m=currentCalendar.month,first=new Date(y,m,1),start=(first.getDay()+6)%7,days=new Date(y,m+1,0).getDate(),cells=[];
    for(let i=0;i<start;i++)cells.push({muted:true});
    for(let d=1;d<=days;d++){const ds=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;cells.push({number:d,events:calendarEventsFor(ds)})}
    $('view-calendar').innerHTML=`<article class="panel calendar-panel"><div class="panel-head"><div><h3>Studio calendar</h3><p>Delivery dates and iteration rhythm.</p></div><div class="panel-head-actions"><button class="btn btn-secondary" data-calendar="prev">←</button><span class="calendar-title">${new Date(y,m,1).toLocaleDateString('es-BO',{month:'long',year:'numeric'})}</span><button class="btn btn-secondary" data-calendar="next">→</button></div></div><div class="panel-inner"><div class="calendar-grid">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(x=>`<div class="weekday">${x}</div>`).join('')}${cells.map(c=>`<div class="calendar-day ${c.muted?'muted':''}"><div class="day-number">${c.number||''}</div>${c.events?`<div class="calendar-events">${c.events.slice(0,4).map(e=>`<div class="calendar-event" title="${escapeHtml(e)}">${escapeHtml(e)}</div>`).join('')}</div>`:''}</div>`).join('')}</div></div></article>`;
  }

  function renderDocs(){
    $('view-docs').innerHTML=`<section class="entity-grid">${state.docs.map(d=>`<article class="entity-card"><div class="entity-head"><div><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.category)} · ${formatDate(d.updatedAt)}</p></div>${typeChip(d.category)}</div><p>${escapeHtml(d.content)}</p><div class="entity-meta"><span>Owner ${escapeHtml(getUser(d.owner)?.name||'—')}</span></div><div class="card-actions">${actionButtons('doc',d.id,roleCan('docs'))}</div></article>`).join('')}</section>`;
  }

  function renderActivity(){
    $('view-activity').innerHTML=`<article class="panel"><div class="panel-head"><div><h3>Workspace activity</h3><p>Operational history from projects, tasks, builds and delivery.</p></div></div><div class="panel-inner activity-list">${[...state.activity].sort((a,b)=>new Date(b.at)-new Date(a.at)).map(activityItem).join('')}</div></article>`;
  }

  function renderFeedback(){
    $('view-feedback').innerHTML=`<article class="panel table-panel"><div class="panel-head"><div><h3>Internal feedback lite</h3><p>Simple observations for coordination. Formal QA remains outside GameBox.</p></div></div><div class="table-wrap"><table class="data-table" style="min-width:900px"><thead><tr><th>Observation</th><th>Project</th><th>Category</th><th>Priority</th><th>Status</th><th>Assigned</th><th>Actions</th></tr></thead><tbody>${state.feedback.map(f=>`<tr><td><div class="table-title">${escapeHtml(f.title)}</div><div class="table-subtitle">${escapeHtml(f.note)}</div></td><td>${escapeHtml(getProject(f.projectId)?.name||'—')}</td><td>${typeChip(f.category)}</td><td>${priorityChip(f.priority)}</td><td>${statusChip(f.status)}</td><td>${escapeHtml(getUser(f.assignedTo)?.name||'—')}</td><td>${actionButtons('feedback',f.id,true)}</td></tr>`).join('')}</tbody></table></div></article>`;
  }

  function renderReports(){
    const m=calculateMetrics(); const statuses=[...new Set(state.tasks.map(t=>t.status))].map(s=>({label:s,value:state.tasks.filter(t=>t.status===s).length})); const max=Math.max(1,...statuses.map(x=>x.value));
    const projectWork=state.projects.map(p=>({label:p.code,value:state.tasks.filter(t=>t.projectId===p.id).length})); const maxProject=Math.max(1,...projectWork.map(x=>x.value));
    $('view-reports').innerHTML=`<section class="kpi-grid">${kpi('Avg. team load',`${m.workloadAvg}%`,'team','Across weekly capacity',m.workloadAvg>80?'warn':'up',m.workloadAvg>80?'High load':'Healthy')}${kpi('Overdue items',m.overdue,'warning','Schedule exceptions',m.overdue?'warn':'up',m.overdue?'Action needed':'Clear')}${kpi('Blocked work',m.blocked,'tasks','Waiting on dependencies',m.blocked?'warn':'up',m.blocked?'Resolve blockers':'Clear')}${kpi('Releases at risk',m.releasesAtRisk,'releases','Upcoming delivery risk',m.releasesAtRisk?'warn':'up',m.releasesAtRisk?'Review plan':'Healthy')}</section><section class="dashboard-grid equal"><article class="panel"><div class="panel-head"><div><h3>Work distribution by status</h3><p>Current flow composition.</p></div></div><div class="panel-inner"><div class="chart-box">${statuses.map(s=>`<div class="chart-col"><div class="chart-bar" style="height:${Math.max(10,(s.value/max)*180)}px"></div><span>${escapeHtml(s.label)}</span></div>`).join('')}</div></div></article><article class="panel"><div class="panel-head"><div><h3>Work items by project</h3><p>Where studio effort is concentrated.</p></div></div><div class="panel-inner"><div class="chart-box">${projectWork.map(s=>`<div class="chart-col"><div class="chart-bar" style="height:${Math.max(10,(s.value/maxProject)*180)}px;background:linear-gradient(180deg,#b78cff,#8b5cf6)"></div><span>${escapeHtml(s.label)}</span></div>`).join('')}</div></div></article></section><section class="dashboard-grid equal"><article class="panel"><div class="panel-head"><div><h3>Delivery risk matrix</h3><p>Signals derived from work and release data.</p></div></div><div class="panel-inner risk-grid"><div class="risk-cell high"><strong>${m.overdue}</strong><span>Overdue</span></div><div class="risk-cell medium"><strong>${m.blocked}</strong><span>Blocked</span></div><div class="risk-cell"><strong>${state.tasks.filter(t=>t.priority==='Critical'&&t.status!=='Done').length}</strong><span>Critical open</span></div><div class="risk-cell"><strong>${m.releasesAtRisk}</strong><span>Release risk</span></div></div></article><article class="panel"><div class="panel-head"><div><h3>Capacity summary</h3><p>Quick resource view by person.</p></div></div><div class="panel-inner metric-list">${state.team.map(t=>`<div class="metric-row"><div class="metric-label"><strong>${escapeHtml(getUser(t.userId)?.name||'Member')}</strong><span>${t.assignedHours}/${t.weeklyCapacity}h</span></div><div class="bar"><span style="width:${Math.min(100,t.workload)}%"></span></div><div class="metric-value">${t.workload}%</div></div>`).join('')}</div></article></section>`;
  }

  function renderSettings(){
    $('view-settings').innerHTML=`<section class="dashboard-grid equal"><article class="panel"><div class="panel-head"><div><h3>Workspace preferences</h3><p>GameBox local workspace configuration.</p></div></div><div class="panel-inner form-grid"><div class="field"><span class="field-label">Studio name</span><input id="settingStudioName" value="${escapeHtml(state.settings.studioName||'GameBox Studio')}"></div><div class="field"><span class="field-label">Theme</span><select id="settingTheme"><option value="dark" ${state.settings.theme==='dark'?'selected':''}>Pink + Black</option><option value="light" ${state.settings.theme==='light'?'selected':''}>Light</option></select></div><button class="btn btn-primary" id="saveSettingsBtn">Save preferences</button></div></article><article class="panel"><div class="panel-head"><div><h3>Data & backup</h3><p>Export, import or reset the local workspace.</p></div></div><div class="panel-inner form-grid"><button class="btn btn-secondary" id="exportBackupBtn">${icon('export')}Export JSON backup</button><button class="btn btn-secondary" id="importBackupBtn">${icon('import')}Import JSON backup</button><div class="danger-zone"><p style="margin:0 0 10px;font-size:.7rem;color:var(--text-3)">Reset removes local changes and restores demo data.</p><button class="btn btn-danger" id="resetDemoBtn">${icon('refresh')}Reset demo workspace</button></div><div class="form-note">GameBox ${APP_VERSION} · Data is stored in this browser through localStorage.</div></div></article></section>`;
  }

  function initBoardDnD(){let dragged=null;document.querySelectorAll('[data-drag-task]').forEach(card=>card.addEventListener('dragstart',()=>{dragged=Number(card.dataset.dragTask)}));document.querySelectorAll('[data-drop-status]').forEach(col=>{col.addEventListener('dragover',e=>{e.preventDefault();col.classList.add('is-over')});col.addEventListener('dragleave',()=>col.classList.remove('is-over'));col.addEventListener('drop',e=>{e.preventDefault();col.classList.remove('is-over');if(!roleCan('tasks')||!dragged)return;const t=getTask(dragged);if(t){const old=t.status;t.status=col.dataset.dropStatus;logActivity('task',`moved “${t.title}” from ${old} to ${t.status}`);saveState();notify('Work item moved','success');renderBoard();renderSidebar();}})});}

  function logActivity(type,message){state.activity.unshift({id:nextId(state.activity),actor:currentUser.id,type,message,at:new Date().toISOString()});if(state.activity.length>150)state.activity=state.activity.slice(0,150);}
  function notify(message,type='info'){const toast=document.createElement('div');toast.className=`toast ${type}`;toast.innerHTML=`<span>${type==='success'?icon('check'):type==='error'?icon('warning'):icon('bell')}</span><span>${escapeHtml(message)}</span>`;dom.toastContainer.appendChild(toast);setTimeout(()=>toast.remove(),3400);}

  function openModal(title,subtitle,body,eyebrow='GAMEBOX'){dom.modalTitle.textContent=title;dom.modalSubtitle.textContent=subtitle;dom.modalEyebrow.textContent=eyebrow;dom.modalBody.innerHTML=body;dom.modalOverlay.classList.remove('hidden');dom.modalOverlay.setAttribute('aria-hidden','false');}
  function closeModal(){dom.modalOverlay.classList.add('hidden');dom.modalOverlay.setAttribute('aria-hidden','true');dom.modalBody.innerHTML='';}
  function openDrawer(title,body,eyebrow='DETAIL'){dom.drawerTitle.textContent=title;dom.drawerEyebrow.textContent=eyebrow;dom.drawerBody.innerHTML=body;dom.rightDrawer.classList.remove('hidden');dom.rightDrawerOverlay.classList.remove('hidden');}
  function closeDrawer(){dom.rightDrawer.classList.add('hidden');dom.rightDrawerOverlay.classList.add('hidden');dom.drawerBody.innerHTML='';}

  function formField(label,name,value='',type='text',required=true){return `<label class="field"><span class="field-label">${label}</span><input type="${type}" name="${name}" value="${escapeHtml(value)}" ${required?'required':''}></label>`;}
  function formSelect(label,name,choices,selected=''){return `<label class="field"><span class="field-label">${label}</span><select name="${name}">${choices.map(c=>{const val=typeof c==='object'?c.value:c;const text=typeof c==='object'?c.label:c;return `<option value="${escapeHtml(val)}" ${String(val)===String(selected)?'selected':''}>${escapeHtml(text)}</option>`}).join('')}</select></label>`;}
  function formTextarea(label,name,value=''){return `<label class="field"><span class="field-label">${label}</span><textarea name="${name}">${escapeHtml(value)}</textarea></label>`;}
  function userChoices(){return state.users.map(u=>({value:u.id,label:`${u.name} · ${u.role}`}));}
  function projectChoices(){return state.projects.map(p=>({value:p.id,label:p.name}));}
  function sprintChoices(){return [{value:'',label:'No sprint'},...state.sprints.map(s=>({value:s.id,label:`${s.name} · ${getProject(s.projectId)?.code||''}`}))];}

  function openEntityForm(kind,id=null){
    if(kind==='project'){const x=id?state.projects.find(p=>p.id===id):{};openModal(id?'Edit project':'Create project','Project identity, ownership and delivery context.',`<form id="entityForm" data-kind="project" data-id="${id||''}" class="form-grid"><div class="grid-2">${formField('Project name','name',x.name||'')}${formField('Internal code','code',x.code||'')}</div><div class="grid-3">${formField('Genre','genre',x.genre||'')}${formField('Engine','engine',x.engine||'')}${formField('Platform','platform',x.platform||'')}</div><div class="grid-3">${formSelect('Owner','owner',userChoices(),x.owner||2)}${formSelect('Status','status',['Planning','Active','Paused','Done'],x.status||'Planning')}${formField('Progress %','progress',x.progress??0,'number')}</div><div class="grid-3">${formField('Start date','startDate',x.startDate||todayISO(),'date')}${formField('Target date','dueDate',x.dueDate||todayISO(),'date')}${formField('Version','version',x.version||'0.1.0')}</div><div class="grid-2">${formField('Repository','repository',x.repository||'', 'text',false)}${formSelect('Primary sprint','sprintId',sprintChoices(),x.sprintId||'')}</div>${formTextarea('Description','description',x.description||'')}<div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save project</button></div></form>`,'PROJECT');return;}
    if(kind==='sprint'){const x=id?state.sprints.find(s=>s.id===id):{};openModal(id?'Edit sprint':'Create sprint','Plan the iteration, commitment and objective.',`<form id="entityForm" data-kind="sprint" data-id="${id||''}" class="form-grid"><div class="grid-2">${formField('Sprint name','name',x.name||'')}${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}</div>${formTextarea('Sprint goal','goal',x.goal||'')}<div class="grid-3">${formField('Start','startDate',x.startDate||todayISO(),'date')}${formField('End','endDate',x.endDate||todayISO(),'date')}${formSelect('Status','status',['Planning','Active','Paused','Completed'],x.status||'Planning')}</div><div class="grid-2">${formField('Planned points','plannedPoints',x.plannedPoints??0,'number')}${formField('Completed points','completedPoints',x.completedPoints??0,'number')}</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save sprint</button></div></form>`,'SCRUM');return;}
    if(kind==='task'){const x=id?state.tasks.find(t=>t.id===id):{};openModal(id?'Edit work item':'Create work item','Backlog item with enough context for production and execution.',`<form id="entityForm" data-kind="task" data-id="${id||''}" class="form-grid"><div class="grid-2">${formField('Title','title',x.title||'')}${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}</div><div class="grid-4">${formSelect('Sprint','sprintId',sprintChoices(),x.sprintId||'')}${formSelect('Type','type',state.settings.taskTypes,x.type||'Feature')}${formSelect('Priority','priority',['Critical','High','Medium','Low'],x.priority||'Medium')}${formSelect('Status','status',[...new Set([...state.settings.boardStatuses,'Blocked'])],x.status||'Backlog')}</div><div class="grid-4">${formSelect('Assignee','assignee',userChoices(),x.assignee||currentUser.id)}${formField('Story points','storyPoints',x.storyPoints??1,'number')}${formField('Estimate hours','estimateHours',x.estimateHours??1,'number')}${formField('Due date','dueDate',x.dueDate||todayISO(),'date')}</div><div class="grid-3">${formField('Module','module',x.module||'General')}${formField('Target version','versionTarget',x.versionTarget||'')}${formField('Tags (comma separated)','tags',(x.tags||[]).join(', '),'text',false)}</div>${formTextarea('Description','description',x.description||'')}<div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save work item</button></div></form>`,'WORK ITEM');return;}
    if(kind==='team'){const x=id?state.team.find(t=>t.id===id):{};openModal(id?'Edit team member':'Add team member','Capacity and role information for planning.',`<form id="entityForm" data-kind="team" data-id="${id||''}" class="form-grid"><div class="grid-2">${formSelect('User','userId',userChoices(),x.userId||state.users[0]?.id)}${formField('Specialty','specialty',x.specialty||'')}</div><div class="grid-4">${formSelect('Availability','availability',['High','Medium','Low'],x.availability||'High')}${formField('Workload %','workload',x.workload??50,'number')}${formField('Weekly capacity','weeklyCapacity',x.weeklyCapacity??40,'number')}${formField('Assigned hours','assignedHours',x.assignedHours??20,'number')}</div><div class="grid-3">${formField('Location','location',x.location||'')}${formField('Timezone','timezone',x.timezone||'BOT')}${formField('Favorite tool','favoriteTool',x.favoriteTool||'')}</div>${formTextarea('Bio','bio',x.bio||'')}<div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save member</button></div></form>`,'TEAM');return;}
    if(kind==='build'){const x=id?state.builds.find(b=>b.id===id):{};openModal(id?'Edit build':'Register build','Version, source, platform and change context.',`<form id="entityForm" data-kind="build" data-id="${id||''}" class="form-grid"><div class="grid-3">${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}${formField('Version','version',x.version||'')}${formSelect('Status','status',state.settings.buildStatuses,x.status||'Planned')}</div><div class="grid-4">${formField('Platform','platform',x.platform||'PC')}${formField('Engine','engine',x.engine||'')}${formField('Build date','date',x.date||todayISO(),'date')}${formSelect('Owner','owner',userChoices(),x.owner||currentUser.id)}</div><div class="grid-3">${formField('Branch','branch',x.branch||'')}${formField('Commit','commit',x.commit||'')}${formField('Size','size',x.size||'—')}</div>${formTextarea('Changelog','changelog',x.changelog||'')}<div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save build</button></div></form>`,'BUILD');return;}
    if(kind==='milestone'){const x=id?state.milestones.find(m=>m.id===id):{};openModal(id?'Edit milestone':'Create milestone','Roadmap checkpoint with ownership and progress.',`<form id="entityForm" data-kind="milestone" data-id="${id||''}" class="form-grid"><div class="grid-2">${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}${formField('Milestone name','name',x.name||'')}</div><div class="grid-4">${formSelect('Status','status',['Planning','Active','Done','Paused'],x.status||'Planning')}${formField('Date','date',x.date||todayISO(),'date')}${formSelect('Owner','owner',userChoices(),x.owner||currentUser.id)}${formField('Progress %','progress',x.progress??0,'number')}</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save milestone</button></div></form>`,'ROADMAP');return;}
    if(kind==='release'){const x=id?state.releases.find(r=>r.id===id):{};const checklist=(x.checklist||[{label:'Core scope completed',done:false},{label:'Candidate build ready',done:false},{label:'Release notes ready',done:false}]);openModal(id?'Edit release':'Create release','Delivery readiness, target date and release checklist.',`<form id="entityForm" data-kind="release" data-id="${id||''}" class="form-grid"><div class="grid-3">${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}${formField('Release name','name',x.name||'')}${formField('Version','version',x.version||'')}</div><div class="grid-4">${formField('Target date','targetDate',x.targetDate||todayISO(),'date')}${formSelect('Status','status',state.settings.releaseStatuses,x.status||'Planning')}${formSelect('Owner','owner',userChoices(),x.owner||currentUser.id)}${formField('Readiness %','readiness',x.readiness??0,'number')}</div><div class="field"><span class="field-label">Checklist (one item per line, prefix [x] when done)</span><textarea name="checklist">${checklist.map(c=>`${c.done?'[x]':'[ ]'} ${c.label}`).join('\n')}</textarea></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save release</button></div></form>`,'RELEASE');return;}
    if(kind==='doc'){const x=id?state.docs.find(d=>d.id===id):{};openModal(id?'Edit document':'Create document','Lightweight internal knowledge base.',`<form id="entityForm" data-kind="doc" data-id="${id||''}" class="form-grid"><div class="grid-3">${formField('Title','title',x.title||'')}${formField('Category','category',x.category||'Process')}${formSelect('Owner','owner',userChoices(),x.owner||currentUser.id)}</div>${formTextarea('Content','content',x.content||'')}<div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save document</button></div></form>`,'DOCS');return;}
    if(kind==='feedback'){const x=id?state.feedback.find(f=>f.id===id):{};openModal(id?'Edit feedback':'Create feedback','Simple internal observation — intentionally lighter than a full QA suite.',`<form id="entityForm" data-kind="feedback" data-id="${id||''}" class="form-grid"><div class="grid-2">${formField('Title','title',x.title||'')}${formSelect('Project','projectId',projectChoices(),x.projectId||state.projects[0]?.id)}</div><div class="grid-4">${formField('Category','category',x.category||'General')}${formSelect('Priority','priority',['High','Medium','Low'],x.priority||'Medium')}${formSelect('Status','status',state.settings.feedbackStatuses,x.status||'Open')}${formSelect('Assigned to','assignedTo',userChoices(),x.assignedTo||currentUser.id)}</div>${formTextarea('Observation','note',x.note||'')}<div class="form-note">GameBox keeps this module deliberately lightweight so formal QA can continue in specialized tools.</div><div class="form-actions"><button class="btn btn-secondary" type="button" data-close-modal>Cancel</button><button class="btn btn-primary" type="submit">Save feedback</button></div></form>`,'FEEDBACK');return;}
  }

  function parseChecklist(text){return String(text||'').split('\n').map(line=>line.trim()).filter(Boolean).map(line=>({done:/^\[x\]/i.test(line),label:line.replace(/^\[[ x]\]\s*/i,'')}));}
  function upsert(listName,payload){const idx=state[listName].findIndex(x=>x.id===payload.id);if(idx>=0)state[listName][idx]=payload;else state[listName].push(payload);}
  function submitEntity(form){const kind=form.dataset.kind,id=form.dataset.id?Number(form.dataset.id):null,d=Object.fromEntries(new FormData(form).entries());
    if(kind==='project'){const p={id:id||nextId(state.projects),name:d.name,code:d.code,genre:d.genre,engine:d.engine,platform:d.platform,owner:Number(d.owner),status:d.status,progress:Number(d.progress||0),sprintId:d.sprintId?Number(d.sprintId):null,dueDate:d.dueDate,startDate:d.startDate,version:d.version,repository:d.repository,description:d.description};upsert('projects',p);logActivity('project',`${id?'updated':'created'} project “${p.name}”`);}
    if(kind==='sprint'){const s={id:id||nextId(state.sprints),projectId:Number(d.projectId),name:d.name,goal:d.goal,startDate:d.startDate,endDate:d.endDate,status:d.status,plannedPoints:Number(d.plannedPoints||0),completedPoints:Number(d.completedPoints||0)};upsert('sprints',s);logActivity('task',`${id?'updated':'created'} sprint “${s.name}”`);}
    if(kind==='task'){const t={id:id||nextId(state.tasks),projectId:Number(d.projectId),sprintId:d.sprintId?Number(d.sprintId):null,title:d.title,type:d.type,status:d.status,priority:d.priority,storyPoints:Number(d.storyPoints||0),assignee:Number(d.assignee),dueDate:d.dueDate,tags:String(d.tags||'').split(',').map(x=>x.trim()).filter(Boolean),module:d.module,estimateHours:Number(d.estimateHours||0),versionTarget:d.versionTarget,description:d.description};upsert('tasks',t);logActivity('task',`${id?'updated':'created'} work item “${t.title}”`);}
    if(kind==='team'){const t={id:id||nextId(state.team),userId:Number(d.userId),specialty:d.specialty,availability:d.availability,workload:Number(d.workload||0),weeklyCapacity:Number(d.weeklyCapacity||40),assignedHours:Number(d.assignedHours||0),location:d.location,timezone:d.timezone,favoriteTool:d.favoriteTool,bio:d.bio};upsert('team',t);logActivity('project',`${id?'updated':'added'} team profile for ${getUser(t.userId)?.name||'member'}`);}
    if(kind==='build'){const b={id:id||nextId(state.builds),projectId:Number(d.projectId),version:d.version,platform:d.platform,engine:d.engine,date:d.date,owner:Number(d.owner),status:d.status,branch:d.branch,commit:d.commit,size:d.size,changelog:d.changelog};upsert('builds',b);logActivity('build',`${id?'updated':'registered'} build ${b.version}`);}
    if(kind==='milestone'){const m={id:id||nextId(state.milestones),projectId:Number(d.projectId),name:d.name,status:d.status,date:d.date,owner:Number(d.owner),progress:Number(d.progress||0)};upsert('milestones',m);logActivity('project',`${id?'updated':'created'} milestone “${m.name}”`);}
    if(kind==='release'){const r={id:id||nextId(state.releases),projectId:Number(d.projectId),name:d.name,version:d.version,targetDate:d.targetDate,status:d.status,owner:Number(d.owner),readiness:Number(d.readiness||0),checklist:parseChecklist(d.checklist)};upsert('releases',r);logActivity('project',`${id?'updated':'created'} release “${r.name}”`);}
    if(kind==='doc'){const doc={id:id||nextId(state.docs),title:d.title,category:d.category,owner:Number(d.owner),updatedAt:todayISO(),content:d.content};upsert('docs',doc);logActivity('project',`${id?'updated':'created'} document “${doc.title}”`);}
    if(kind==='feedback'){const f={id:id||nextId(state.feedback),projectId:Number(d.projectId),title:d.title,category:d.category,status:d.status,priority:d.priority,reporter:id?(state.feedback.find(x=>x.id===id)?.reporter||currentUser.id):currentUser.id,assignedTo:Number(d.assignedTo),note:d.note};upsert('feedback',f);logActivity('feedback',`${id?'updated':'created'} feedback “${f.title}”`);}
    saveState();closeModal();renderSidebar();renderContext();renderCurrentView();notify('Changes saved','success');
  }

  const LIST_MAP={project:'projects',sprint:'sprints',task:'tasks',team:'team',build:'builds',milestone:'milestones',release:'releases',doc:'docs',feedback:'feedback'};
  function deleteEntity(kind,id){const key=LIST_MAP[kind];if(!key)return;
    if(kind==='project'){const linked=state.tasks.some(x=>x.projectId===id)||state.builds.some(x=>x.projectId===id)||state.sprints.some(x=>x.projectId===id)||state.releases.some(x=>x.projectId===id)||state.milestones.some(x=>x.projectId===id);if(linked){notify('Project has linked records. Archive it instead of deleting it.','error');return;}}
    if(kind==='sprint'&&state.tasks.some(x=>x.sprintId===id)){notify('Sprint has linked work items and cannot be deleted.','error');return;}
    if(!confirm('Delete this record? This change is stored locally.'))return;const item=state[key].find(x=>x.id===id);state[key]=state[key].filter(x=>x.id!==id);logActivity(kind==='build'?'build':kind==='feedback'?'feedback':'task',`deleted ${kind} “${item?.title||item?.name||item?.version||id}”`);saveState();renderSidebar();renderContext();renderCurrentView();notify('Record deleted','success');}

  function entityData(kind,id){return kind==='project'?state.projects.find(x=>x.id===id):kind==='sprint'?state.sprints.find(x=>x.id===id):kind==='task'?state.tasks.find(x=>x.id===id):kind==='team'?state.team.find(x=>x.id===id):kind==='build'?state.builds.find(x=>x.id===id):kind==='milestone'?state.milestones.find(x=>x.id===id):kind==='release'?state.releases.find(x=>x.id===id):kind==='doc'?state.docs.find(x=>x.id===id):state.feedback.find(x=>x.id===id);}
  function viewEntity(kind,id){const x=entityData(kind,id);if(!x)return;let title='Detail',body='';
    if(kind==='project'){title=x.name;body=`${detailSection('Project overview',[[ 'Code',x.code],['Status',x.status],['Owner',getUser(x.owner)?.name],['Engine',x.engine],['Platform',x.platform],['Version',x.version],['Start',formatDate(x.startDate)],['Target',formatDate(x.dueDate)]])}${detailSection('Description',[[ 'Summary',x.description],['Repository',x.repository||'—'],['Progress',`${x.progress}%`]])}`;}
    if(kind==='task'){title=x.title;body=`${detailSection('Work item',[[ 'Key',`GBX-${x.id}`],['Project',getProject(x.projectId)?.name],['Sprint',getSprint(x.sprintId)?.name||'—'],['Status',x.status],['Priority',x.priority],['Type',x.type],['Assignee',getUser(x.assignee)?.name],['Due',formatDate(x.dueDate)]])}${detailSection('Execution',[[ 'Module',x.module],['Story points',x.storyPoints],['Estimate',`${x.estimateHours}h`],['Target version',x.versionTarget||'—'],['Tags',(x.tags||[]).join(', ')||'—'],['Description',x.description]])}`;}
    if(kind==='sprint'){title=x.name;body=detailSection('Sprint',[[ 'Project',getProject(x.projectId)?.name],['Status',x.status],['Start',formatDate(x.startDate)],['End',formatDate(x.endDate)],['Commitment',`${x.completedPoints}/${x.plannedPoints} pts`],['Goal',x.goal]]);}
    if(kind==='team'){const u=getUser(x.userId);title=u?.name||'Team member';body=detailSection('Member profile',[[ 'Role',u?.role],['Department',u?.department],['Specialty',x.specialty],['Availability',x.availability],['Weekly load',`${x.assignedHours}/${x.weeklyCapacity}h`],['Location',x.location],['Timezone',x.timezone],['Bio',x.bio]]);}
    if(kind==='build'){title=`${getProject(x.projectId)?.name||'Project'} ${x.version}`;body=detailSection('Build',[[ 'Status',x.status],['Platform',x.platform],['Engine',x.engine],['Date',formatDate(x.date)],['Owner',getUser(x.owner)?.name],['Branch',x.branch],['Commit',x.commit],['Size',x.size],['Changelog',x.changelog]]);}
    if(kind==='milestone'){title=x.name;body=detailSection('Milestone',[[ 'Project',getProject(x.projectId)?.name],['Status',x.status],['Date',formatDate(x.date)],['Owner',getUser(x.owner)?.name],['Progress',`${x.progress}%`]]);}
    if(kind==='release'){title=x.name;body=`${detailSection('Release',[[ 'Project',getProject(x.projectId)?.name],['Version',x.version],['Status',x.status],['Target',formatDate(x.targetDate)],['Owner',getUser(x.owner)?.name],['Readiness',`${x.readiness}%`]])}<div class="detail-section"><h4>Checklist</h4><div class="check-list">${x.checklist.map(c=>`<div class="check-row"><span>${escapeHtml(c.label)}</span><strong class="${c.done?'ok':'warn'}">${c.done?'Ready':'Pending'}</strong></div>`).join('')}</div></div>`;}
    if(kind==='doc'){title=x.title;body=detailSection('Document',[[ 'Category',x.category],['Owner',getUser(x.owner)?.name],['Updated',formatDate(x.updatedAt)],['Content',x.content]]);}
    if(kind==='feedback'){title=x.title;body=detailSection('Feedback',[[ 'Project',getProject(x.projectId)?.name],['Category',x.category],['Status',x.status],['Priority',x.priority],['Reporter',getUser(x.reporter)?.name],['Assigned',getUser(x.assignedTo)?.name],['Observation',x.note]]);}
    openDrawer(title,body,kind.toUpperCase());
  }
  function detailSection(title,pairs){return `<div class="detail-section"><h4>${title}</h4><div class="detail-grid">${pairs.map(([k,v])=>`<div class="detail-kv"><span>${escapeHtml(k)}</span><strong>${escapeHtml(v??'—')}</strong></div>`).join('')}</div></div>`;}
  function metaEntity(kind,id){const x=entityData(kind,id);if(!x)return;openDrawer('Metadata',detailSection('Record metadata',[[ 'Entity',kind],['ID',id],['Storage','localStorage'],['Workspace',state.settings.studioName],['Last action by',currentUser.name]]),'METADATA');}

  function openGlobalCreate(){openModal('Create in GameBox','Choose what you want to add.',`<div class="entity-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">${CREATE_OPTIONS.filter(opt=>opt.kind==='task'||opt.kind==='doc'||roleCan(opt.kind==='build'?'builds':'projects')).map(opt=>`<button class="entity-card" style="text-align:left;cursor:pointer;color:var(--text)" data-open-form="${opt.kind}"><div class="entity-head"><div><h3>${icon(opt.icon)} ${opt.label}</h3><p>${opt.desc}</p></div></div></button>`).join('')}</div>`,'CREATE');}

  function renderNotifications(){const unread=state.notifications.filter(n=>!n.read).length;dom.notificationDot.classList.toggle('hidden',unread===0);dom.notificationsPanel.innerHTML=`<h3>Notifications ${unread?`· ${unread} unread`:''}</h3>${state.notifications.length?state.notifications.slice(0,8).map(n=>`<div class="notification-item"><div class="activity-icon">${icon(n.level==='warning'?'warning':'bell')}</div><div><p><strong>${escapeHtml(n.title)}</strong><br>${escapeHtml(n.text)}</p><span>${formatDateTime(n.at)}</span></div></div>`).join(''):'<div class="empty-state">No notifications</div>'}`;}

  function openCommand(){dom.commandOverlay.classList.remove('hidden');dom.commandInput.value='';renderCommandResults('');setTimeout(()=>dom.commandInput.focus(),30);}
  function closeCommand(){dom.commandOverlay.classList.add('hidden');}
  function commandData(){return [
    ...state.projects.map(x=>({title:x.name,sub:`Project · ${x.code}`,view:'projects',icon:'projects'})),
    ...state.tasks.map(x=>({title:x.title,sub:`Work item · ${getProject(x.projectId)?.code||''}`,view:'tasks',icon:'tasks'})),
    ...state.builds.map(x=>({title:`${getProject(x.projectId)?.name||''} ${x.version}`,sub:'Build',view:'builds',icon:'builds'})),
    ...state.docs.map(x=>({title:x.title,sub:`Doc · ${x.category}`,view:'docs',icon:'docs'})),
    ...state.releases.map(x=>({title:x.name,sub:`Release · ${x.version}`,view:'releases',icon:'releases'}))
  ];}
  function renderCommandResults(term){const q=normalize(term);const results=commandData().filter(x=>!q||normalize(`${x.title} ${x.sub}`).includes(q)).slice(0,12);dom.commandResults.innerHTML=`<div class="command-group-title">Search results</div>${results.length?results.map(r=>`<button class="command-item" data-command-view="${r.view}">${icon(r.icon)}<span class="command-item-copy"><strong>${escapeHtml(r.title)}</strong><span>${escapeHtml(r.sub)}</span></span></button>`).join(''):'<div class="empty-state">No results</div>'}`;}

  function login(e){e.preventDefault();const email=normalize(dom.loginEmail.value),pass=dom.loginPassword.value;const u=state.users.find(x=>normalize(x.email)===email&&x.password===pass);if(!u){notify('Invalid credentials','error');return;}currentUser=u;saveState();showApp();notify(`Welcome back, ${u.name}`,'success');}
  function logout(){currentUser=null;localStorage.removeItem(SESSION_KEY);dom.sidebar.classList.remove('mobile-open');showAuth();}
  function toggleTheme(){state.settings.theme=state.settings.theme==='light'?'dark':'light';applyTheme();saveState();if(currentView==='settings')renderSettings();}

  function exportBackup(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`gamebox-backup-${todayISO()}.json`;a.click();URL.revokeObjectURL(a.href);notify('Backup exported','success');}
  function importBackup(file){if(!file)return;const reader=new FileReader();reader.onload=e=>{try{const imported=JSON.parse(e.target.result);const required=['users','projects','sprints','tasks','team','builds','milestones','releases','docs','feedback','activity','notifications','settings'];if(!required.every(k=>k in imported))throw new Error('Invalid');state=imported;currentUser=state.users.find(u=>u.id===currentUser.id)||state.users[0];saveState();applyTheme();renderSidebar();renderContext();renderCurrentView();notify('Backup imported','success');}catch{notify('Invalid backup file','error');}};reader.readAsText(file);}

  function bindEvents(){
    dom.loginForm.addEventListener('submit',login);
    dom.togglePassword.addEventListener('click',()=>{dom.loginPassword.type=dom.loginPassword.type==='password'?'text':'password';dom.togglePassword.innerHTML=dom.loginPassword.type==='password'?icon('eye'):icon('close');});
    dom.logoutBtn.addEventListener('click',logout);dom.themeToggle.addEventListener('click',toggleTheme);dom.globalCreateBtn.addEventListener('click',openGlobalCreate);dom.closeModalBtn.addEventListener('click',closeModal);dom.modalOverlay.addEventListener('click',e=>{if(e.target===dom.modalOverlay)closeModal();});dom.closeDrawerBtn.addEventListener('click',closeDrawer);dom.rightDrawerOverlay.addEventListener('click',closeDrawer);dom.openCommandBtn.addEventListener('click',openCommand);dom.commandOverlay.addEventListener('click',e=>{if(e.target===dom.commandOverlay)closeCommand();});dom.commandInput.addEventListener('input',e=>renderCommandResults(e.target.value));dom.notificationsBtn.addEventListener('click',()=>{dom.notificationsPanel.classList.toggle('hidden');if(!dom.notificationsPanel.classList.contains('hidden')){state.notifications.forEach(n=>n.read=true);saveState();renderNotifications();}});dom.collapseSidebarBtn.addEventListener('click',()=>dom.sidebar.classList.toggle('collapsed'));dom.mobileMenuBtn.addEventListener('click',()=>dom.sidebar.classList.toggle('mobile-open'));
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand();}if(e.key==='Escape'){closeCommand();closeModal();closeDrawer();dom.notificationsPanel.classList.add('hidden');}});
    document.addEventListener('submit',e=>{const form=e.target.closest('#entityForm');if(form){e.preventDefault();submitEntity(form);}});
    document.addEventListener('input',e=>{if(e.target.id==='taskSearch'){taskFilters.search=e.target.value;renderTasks();setTimeout(()=>{$('taskSearch')?.focus();$('taskSearch')?.setSelectionRange(taskFilters.search.length,taskFilters.search.length)},0)}});
    document.addEventListener('change',e=>{if(e.target.id==='taskProjectFilter'){taskFilters.project=e.target.value;renderTasks();}if(e.target.id==='taskStatusFilter'){taskFilters.status=e.target.value;renderTasks();}if(e.target.id==='taskPriorityFilter'){taskFilters.priority=e.target.value;renderTasks();}});
    document.addEventListener('click',e=>{
      const quick=e.target.closest('[data-quick-user]');if(quick){selectQuickUser(Number(quick.dataset.quickUser));return;}
      const nav=e.target.closest('[data-nav]');if(nav){navigate(nav.dataset.nav);return;}
      const open=e.target.closest('[data-open-form]');if(open){closeModal();setTimeout(()=>openEntityForm(open.dataset.openForm),0);return;}
      if(e.target.closest('[data-close-modal]')){closeModal();return;}
      const action=e.target.closest('[data-action]');if(action){const kind=action.dataset.kind,id=Number(action.dataset.id),act=action.dataset.action;if(act==='view')viewEntity(kind,id);if(act==='edit')openEntityForm(kind,id);if(act==='delete')deleteEntity(kind,id);if(act==='meta')metaEntity(kind,id);return;}
      const cmd=e.target.closest('[data-command-view]');if(cmd){closeCommand();navigate(cmd.dataset.commandView);return;}
      const cal=e.target.closest('[data-calendar]');if(cal){const d=new Date(currentCalendar.year,currentCalendar.month+(cal.dataset.calendar==='next'?1:-1),1);currentCalendar={year:d.getFullYear(),month:d.getMonth()};renderCalendar();return;}
      if(e.target.id==='saveSettingsBtn'){state.settings.studioName=$('settingStudioName').value.trim()||'GameBox Studio';state.settings.theme=$('settingTheme').value;applyTheme();saveState();notify('Settings saved','success');return;}
      if(e.target.id==='exportBackupBtn'){exportBackup();return;}
      if(e.target.id==='importBackupBtn'){dom.importBackupInput.click();return;}
      if(e.target.id==='resetDemoBtn'){if(confirm('Reset local workspace to demo data?')){state=deepClone(window.GAMEBOX_SEED);currentUser=state.users.find(u=>u.id===currentUser.id)||state.users[0];saveState();applyTheme();renderSidebar();renderContext();renderCurrentView();notify('Demo workspace restored','success');}return;}
      if(!e.target.closest('#notificationsPanel')&&!e.target.closest('#notificationsBtn'))dom.notificationsPanel.classList.add('hidden');
    });
    dom.importBackupInput.addEventListener('change',e=>{importBackup(e.target.files[0]);e.target.value='';});
  }

  async function init(){
    cacheDom();state=await loadState();restoreSession();injectStaticIcons();applyTheme();renderQuickLogins();renderNotifications();bindEvents();
    const hash=location.hash.replace('#','');if(PAGE_META[hash])currentView=hash;
    currentUser?showApp():showAuth();
  }

  if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));}

  document.addEventListener('DOMContentLoaded',init);
})();
