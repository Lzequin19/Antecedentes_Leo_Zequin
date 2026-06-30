// Generador de la página de antecedentes de Leonardo Zequin
// Dirección C · Editorial Claro (púrpura protagonista + dorado #FFBA00)
// Lee clean.json y produce index.html (autónomo, un solo archivo)
const fs = require("fs");
const D = require("./clean.json");

// ---- Configuración editable ----
const CONFIG = {
  nombre: "Leonardo Hugo Zequin",
  nombreCorto: "Leonardo Zequin",
  monograma: "LZ",
  rol: "Ingeniero Industrial · Magíster en Docencia Universitaria",
  emailPersonal: "lzequin@gmail.com",
  emailZeta: "formaciones@somos-zeta.com",
  whatsapp: "+54 9 3496 460513",
  whatsappLink: "https://wa.me/5493496460513",
  linkedin: "https://www.linkedin.com/in/lzequin/",
  instagram: "https://www.instagram.com/somoszeta_da/",
  instagramHandle: "@somoszeta_da",
  webZeta: "https://www.somos-zeta.com/",
  taglineZeta: "Tecnología que acerca, soluciones que transforman",
  ubicacion: "Santa Fe, Argentina",
  foto: "Foto Leo Zequin.jpeg"
};

const intro = "Ingeniero Industrial con amplia experiencia en gestión de proyectos, sistemas de gestión de calidad y optimización de procesos. Magíster en Docencia Universitaria y cofundador de Somos Zeta Digital Advice. Combino la dirección de proyectos de transformación digital en los sectores público y privado con la docencia universitaria y la divulgación en inteligencia artificial y herramientas digitales.";

// Clientes Somos Zeta (30 empresas e instituciones)
const clientes = [
  "Agropecuaria Las Marías S.A.","ANCA Agronegocios Consultores Asociados S.R.L.",
  "Asociación de Oftalmólogos de Santa Fe","CEVA Salud Animal",
  "Colegio de Ingenieros Especialistas de Santa Fe - D1",
  "Colegio de Médicos Veterinarios de la Provincia de Santa Fe - 1ra C.",
  "Contadores David S.R.L.","Distribuidora Oggier S.R.L.",
  "Empresa Provincial de la Energía (EPE)","Gerenciar S.R.L.","Las Heras S.A.",
  "Leadermel S.A.","Mercurio Pinturerías","Motion-co S.A.S.",
  "Municipalidad de Esperanza","Mutual Bomberos Esperanza","Nutriar S.A.",
  "Ortopedia Kinen","Perren José Luis S.R.L.","Pietcard Electrónica S.R.L.",
  "REMAX Fortaleza","Rene y Dolly Manfrey S.A.","Sembrar Agropecuaria S.A.",
  "Serprove S.R.L.","SICA Metalúrgica Argentina S.A.","Steffen & Asociados",
  "Thorbell S.R.L.","Universidad Nacional del Litoral (UNL)",
  "Vetacord Comercial S.A.","Vicen Agro S.R.L.","Yeruvá S.A."
];

const serviciosZeta = [
  ["Inteligencia Artificial aplicada","Implementación de IA generativa y automatizaciones para potenciar la productividad de equipos y procesos."],
  ["Transformación digital","Diagnóstico, estrategia y acompañamiento para digitalizar organizaciones públicas y privadas."],
  ["Capacitación y formación","Talleres, charlas y cursos in-company sobre IA, herramientas digitales y productividad."],
  ["Mejora de procesos","Optimización, rediseño y sistemas de gestión de calidad orientados a resultados."]
];

// Categorías de la trayectoria  (txt = color de texto del tag sobre fondo del color)
const CATS = {
  gestion:        {label:"Gestión & Dirección",     color:"#7030a0", txt:"#fff",     short:"Gestión"},
  proyecto_cliente:{label:"Proyectos & Consultoría", color:"#1c89af", txt:"#fff",     short:"Proyectos"},
  docencia:       {label:"Docencia Universitaria",   color:"#ba95c1", txt:"#fff",     short:"Docencia"},
  investigacion:  {label:"Investigación",            color:"#7aa9d5", txt:"#22303d",  short:"Investigación"},
  evento:         {label:"Divulgación en IA",        color:"#FFBA00", txt:"#3d2c00",  short:"Divulgación"}
};

const esZeta = r => /Somos Zeta Digital Advice/.test(r.titulo);
const trayectoria = D.recs.filter(r => r.tipo!=="capacitacion" && !esZeta(r));
const capacitaciones = D.recs.filter(r => r.tipo==="capacitacion");

function ordenFecha(a,b){
  const fa = a.fecha===""? 9999 : parseInt(a.fecha);
  const fb = b.fecha===""? 9999 : parseInt(b.fecha);
  return fb-fa;
}
trayectoria.sort(ordenFecha);
capacitaciones.sort(ordenFecha);

const esc = s => String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

// Embeber la foto como data URI (evita rutas rotas en GitHub Pages)
function fotoDataURI(file){
  const ext = (file.split(".").pop()||"jpeg").toLowerCase();
  const mime = ext==="png"?"image/png":(ext==="webp"?"image/webp":"image/jpeg");
  const b64 = fs.readFileSync(file).toString("base64");
  return `data:${mime};base64,${b64}`;
}
const FOTO_SRC = fotoDataURI(CONFIG.foto);

// Stats
const nProyectos = D.recs.filter(r=>r.tipo==="gestion"||r.tipo==="proyecto_cliente").length;
const nDocencia  = D.recs.filter(r=>r.tipo==="docencia").length;
const stats = [
  ["+18","años de trayectoria"],
  [String(nProyectos),"proyectos & consultorías"],
  [String(clientes.length),"empresas e instituciones"],
  [String(nDocencia),"cátedras dictadas"],
  ["IA","formación & divulgación"]
];

// ---- Iconos SVG ----
const ICON = {
  mail:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
  wa:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.738-.81zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
  in:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
  web:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>'
};

// ---- Render trayectoria cards ----
function cardTray(r){
  const c = CATS[r.tipo] || {label:r.tipo,color:"#7030a0",txt:"#fff",short:r.tipo};
  const fecha = r.fecha===""? "Actualidad" : r.fecha;
  const sector = r.sector? `<span class="card-sector">${esc(r.sector)}</span>` : "";
  const impacto = r.impacto? `<p class="card-impact">★ ${esc(r.impacto)}</p>` : "";
  const desc = r.desc? `<p class="card-desc">${esc(r.desc)}</p>` : "";
  return `<article class="card" data-cat="${r.tipo}" style="--cat:${c.color}">
    <div class="card-head">
      <span class="card-year">${esc(fecha)}</span>
      <span class="card-tag" style="background:${c.color};color:${c.txt}">${c.short}</span>
    </div>
    <h3 class="card-title">${esc(r.titulo)}</h3>
    ${desc}${impacto}
    <div class="card-foot">${sector}</div>
  </article>`;
}

const filterBtns = [["todos","Todos"]].concat(Object.entries(CATS).map(([k,v])=>[k,v.short]))
  .map(([k,l],i)=>`<button class="fbtn${i===0?' active':''}" data-f="${k}">${l}</button>`).join("");
const trayHTML = trayectoria.map(cardTray).join("\n");

// ---- Capacitaciones ----
function capItem(r){
  const meta = [r.fecha, r.desc].filter(Boolean).map(esc).join(" · ");
  return `<li class="cap-item"><span class="cap-title">${esc(r.titulo)}</span>${meta?`<span class="cap-meta">${meta}</span>`:""}</li>`;
}
const capHTML = capacitaciones.map(capItem).join("\n");

// ---- Estudios ----
const estHTML = D.estudios.map(e=>`<div class="edu">
   <div class="edu-year">${esc(e.fin)}</div>
   <div><h3 class="edu-title">${esc(e.titulo)}</h3><p class="edu-inst">${esc(e.inst)}</p></div>
 </div>`).join("\n");

// ---- Habilidades ----
const grupos = {tecnica:"Competencias técnicas", blanda:"Habilidades interpersonales", idioma:"Idiomas"};
const habHTML = Object.entries(grupos).map(([k,t])=>{
  const items = D.habil.filter(h=>h.cat===k).map(h=>`<span class="chip">${esc(h.nombre)}${h.nivel?` · ${esc(h.nivel)}`:""}</span>`).join("");
  return `<div class="hab-group"><h3 class="hab-title">${t}</h3><div class="chips">${items}</div></div>`;
}).join("\n");

const cliHTML = clientes.map(c=>`<div class="cli">${esc(c)}</div>`).join("\n");
const servHTML = serviciosZeta.map(([t,d])=>`<div class="serv"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("\n");
const statsHTML = stats.map(([n,l])=>`<div class="stat"><span class="stat-n">${esc(n)}</span><span class="stat-l">${esc(l)}</span></div>`).join("\n");

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(CONFIG.nombre)} — Antecedentes profesionales</title>
<meta name="description" content="Antecedentes profesionales de ${esc(CONFIG.nombre)}: Ingeniero Industrial, Magíster en Docencia Universitaria y cofundador de Somos Zeta Digital Advice.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --carbon:#2d2b2c; --purpura:#7030a0; --purpura-d:#5b2682; --lila:#ba95c1; --lavanda:#e7daeb;
  --petroleo:#1c89af; --cielo:#7aa9d5; --oro:#FFBA00; --oro-d:#cc8f00;
  --bg:#ffffff; --bg-soft:#f7f3fb; --surface:#ffffff; --ink:#241f29; --muted:#6c6577; --line:#ece6f1;
  --maxw:1080px; --r:16px;
  --shadow:0 1px 2px rgba(45,43,44,.04),0 10px 30px rgba(112,48,160,.07);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:"Inter",system-ui,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4{font-family:"Manrope","Inter",sans-serif}
a{color:inherit;text-decoration:none}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.topbar{height:5px;background:linear-gradient(90deg,var(--purpura),var(--lila) 55%,var(--oro))}

/* NAV */
.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:64px;max-width:var(--maxw);margin:0 auto;padding:0 24px}
.brand{display:flex;align-items:center;gap:11px;font-weight:800}
.mono-badge{width:38px;height:38px;border-radius:11px;background:var(--purpura);color:#fff;display:grid;place-items:center;font-weight:800;font-size:15px}
.brand small{display:block;font-size:11px;font-weight:500;color:var(--muted);font-family:"Inter"}
.nav-links{display:flex;gap:26px;align-items:center}
.nav-links a{font-size:14px;color:var(--muted);font-weight:500;transition:color .2s}
.nav-links a:hover{color:var(--purpura)}
.nav-cta{background:var(--purpura);color:#fff!important;padding:9px 17px;border-radius:10px;font-weight:600;font-size:14px}
@media(max-width:820px){.nav-links a:not(.nav-cta){display:none}}

/* HERO (claro) */
.hero{position:relative;overflow:hidden;background:linear-gradient(180deg,#faf6fd,#fff)}
.hero::before{content:"";position:absolute;top:-25%;right:-8%;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(112,48,160,.14),transparent 62%)}
.hero::after{content:"";position:absolute;bottom:-30%;left:-10%;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle,rgba(255,186,0,.16),transparent 64%)}
.hero-in{position:relative;z-index:2;display:grid;grid-template-columns:1.5fr .9fr;gap:48px;align-items:center;padding:64px 24px 72px;max-width:var(--maxw);margin:0 auto}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--purpura);margin-bottom:20px}
.eyebrow::before{content:"";width:26px;height:3px;background:var(--oro);border-radius:2px}
.hero h1{font-size:clamp(34px,5vw,56px);font-weight:800;line-height:1.03;letter-spacing:-.02em;color:var(--purpura)}
.hero .role{font-size:17px;color:var(--carbon);margin-top:14px;font-weight:600}
.hero .cobrand{display:inline-block;margin-top:14px;font-size:14px;color:var(--purpura-d);background:var(--lavanda);border:1px solid #dcc9e4;padding:6px 14px;border-radius:30px;font-weight:600}
.hero p.bio{margin-top:22px;font-size:16px;color:var(--muted);max-width:54ch}
.hero-cta{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap;align-items:center}
.btn{display:inline-flex;align-items:center;gap:9px;padding:13px 22px;border-radius:12px;font-weight:600;font-size:15px;transition:transform .15s,box-shadow .2s,background .2s;border:none;cursor:pointer}
.btn svg{flex:none}
.btn-1{background:var(--purpura);color:#fff;box-shadow:0 8px 22px rgba(112,48,160,.25)}
.btn-1:hover{transform:translateY(-2px);background:var(--purpura-d)}
.btn-gold{background:var(--oro);color:#3d2c00;box-shadow:0 8px 22px rgba(255,186,0,.3)}
.btn-gold:hover{transform:translateY(-2px);background:#ffc62e}
.btn-2{background:#fff;color:var(--purpura);border:1px solid #e0d3e8}
.btn-2:hover{border-color:var(--purpura);background:var(--bg-soft)}
.loc{margin-top:20px;font-size:13px;color:var(--muted);display:flex;align-items:center;gap:7px}
.loc svg{color:var(--purpura)}

/* FOTO */
.photo-card{position:relative;justify-self:center}
.photo-card::before{content:"";position:absolute;inset:-14px -14px 14px 14px;border:2px solid var(--oro);border-radius:24px;z-index:0;opacity:.7}
.photo{position:relative;z-index:1;width:250px;height:310px;border-radius:22px;object-fit:cover;border:4px solid #fff;box-shadow:0 20px 50px rgba(112,48,160,.22)}
@media(max-width:820px){.hero-in{grid-template-columns:1fr;gap:38px}.photo-card{order:-1}.photo{width:210px;height:262px}}

/* STATS */
.stats{background:var(--purpura);color:#fff}
.stats-in{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;padding:30px 24px;max-width:var(--maxw);margin:0 auto}
.stat{flex:1;min-width:140px;text-align:center;padding:8px;position:relative}
.stat:not(:last-child)::after{content:"";position:absolute;right:0;top:18%;height:64%;width:1px;background:rgba(255,255,255,.2)}
.stat-n{display:block;font-family:"Manrope";font-size:32px;font-weight:800;color:var(--oro);line-height:1}
.stat-l{display:block;font-size:13px;color:#e9dcf2;margin-top:6px}
@media(max-width:600px){.stat:not(:last-child)::after{display:none}}

/* SECTIONS */
section{padding:74px 0}
.sec-soft{background:var(--bg-soft)}
.sec-head{margin-bottom:38px;max-width:64ch}
.sec-kick{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--purpura)}
.sec-kick::before{content:"";width:20px;height:3px;background:var(--oro);border-radius:2px}
.sec-head h2{font-size:clamp(26px,3.4vw,37px);font-weight:800;margin-top:12px;letter-spacing:-.01em;color:var(--carbon)}
.sec-head p{color:var(--muted);margin-top:12px;font-size:16px}

/* FILTERS + GRID */
.filters{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:30px}
.fbtn{border:1px solid var(--line);background:var(--surface);color:var(--muted);padding:9px 17px;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;transition:all .18s;font-family:"Inter"}
.fbtn:hover{border-color:var(--lila);color:var(--purpura)}
.fbtn.active{background:var(--purpura);border-color:var(--purpura);color:#fff}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:18px}
.card{background:var(--surface);border:1px solid var(--line);border-left:4px solid var(--cat);border-radius:var(--r);padding:22px;box-shadow:var(--shadow);transition:transform .18s,box-shadow .2s;display:flex;flex-direction:column}
.card:hover{transform:translateY(-3px);box-shadow:0 16px 38px rgba(112,48,160,.14)}
.card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px}
.card-year{font-family:"Manrope";font-weight:700;font-size:14px;color:var(--carbon)}
.card-tag{font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px}
.card-title{font-size:16.5px;font-weight:700;line-height:1.32;color:var(--ink)}
.card-desc{font-size:13.5px;color:var(--muted);margin-top:10px}
.card-impact{font-size:13px;color:var(--oro-d);font-weight:600;margin-top:10px}
.card-foot{margin-top:auto;padding-top:13px}
.card-sector{display:inline-block;font-size:11.5px;color:var(--purpura-d);background:var(--lavanda);padding:3px 11px;border-radius:20px;margin-top:6px}
.hidden{display:none!important}

/* SOMOS ZETA (claro) */
.zeta{background:linear-gradient(170deg,#f3ecf8,#faf6fd)}
.zeta-logo{display:inline-flex;align-items:center;gap:10px;font-family:"Manrope";font-weight:800;font-size:20px;margin-bottom:16px;color:var(--carbon)}
.zeta-z{width:40px;height:40px;border-radius:11px;background:var(--purpura);color:#fff;display:grid;place-items:center;font-size:22px}
.zeta-tag{font-style:italic;color:var(--purpura);font-size:15px;margin-bottom:6px;font-weight:500}
.serv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:30px}
.serv{background:#fff;border:1px solid var(--line);border-top:3px solid var(--oro);border-radius:14px;padding:20px;box-shadow:var(--shadow)}
.serv h4{font-size:15px;color:var(--carbon);margin-bottom:7px}
.serv p{font-size:13.5px;color:var(--muted)}
.cli-block{margin-top:44px}
.cli-block h3{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--purpura);margin-bottom:18px}
.cli-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}
.cli{background:#fff;border:1px solid var(--line);border-radius:11px;padding:13px 15px;font-size:13.5px;font-weight:600;color:var(--carbon);transition:.18s;border-left:3px solid var(--lila)}
.cli:hover{border-left-color:var(--oro);box-shadow:var(--shadow);transform:translateX(2px)}

/* FORMACION */
.edu{display:flex;gap:20px;padding:20px 0;border-bottom:1px solid var(--line)}
.edu:last-child{border-bottom:none}
.edu-year{font-family:"Manrope";font-weight:800;color:var(--purpura);font-size:18px;min-width:64px}
.edu-title{font-size:17px;font-weight:700}
.edu-inst{font-size:14px;color:var(--muted);margin-top:3px}
.cap-wrap{margin-top:38px}
.cap-toggle{display:flex;align-items:center;gap:10px;cursor:pointer;font-family:"Manrope";font-weight:700;font-size:17px;color:var(--ink);background:none;border:none;padding:0}
.cap-toggle .chev{transition:transform .25s;color:var(--purpura)}
.cap-toggle.open .chev{transform:rotate(90deg)}
.cap-count{font-size:13px;font-weight:700;color:#3d2c00;background:var(--oro);padding:2px 10px;border-radius:20px}
.cap-list{list-style:none;margin-top:18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:10px;overflow:hidden;transition:max-height .35s ease;max-height:0}
.cap-list.open{max-height:4000px}
.cap-item{background:var(--surface);border:1px solid var(--line);border-radius:11px;padding:14px 16px;border-left:3px solid var(--lila)}
.cap-title{display:block;font-weight:600;font-size:14.5px}
.cap-meta{display:block;font-size:12.5px;color:var(--muted);margin-top:3px}

/* HABILIDADES */
.hab-group{margin-bottom:26px}
.hab-title{font-size:15px;font-weight:700;color:var(--carbon);margin-bottom:13px}
.chips{display:flex;flex-wrap:wrap;gap:9px}
.chip{background:var(--surface);border:1px solid var(--line);color:var(--ink);padding:9px 15px;border-radius:30px;font-size:14px;font-weight:500;transition:.16s}
.chip:hover{border-color:var(--purpura);color:var(--purpura)}

/* CONTACTO */
.contact{background:var(--purpura);color:#fff;text-align:center;position:relative;overflow:hidden}
.contact::after{content:"";position:absolute;bottom:-40%;right:-8%;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,186,0,.22),transparent 64%)}
.contact .wrap{position:relative;z-index:2}
.contact h2{font-size:clamp(26px,3.4vw,38px);font-weight:800;color:#fff}
.contact p{color:#ecdff5;margin-top:14px;font-size:17px;max-width:52ch;margin-left:auto;margin-right:auto}
.contact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:13px;margin-top:34px;max-width:760px;margin-left:auto;margin-right:auto}
.ct{display:flex;align-items:center;gap:13px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:13px;padding:15px 17px;text-align:left;transition:.18s}
.ct:hover{background:rgba(255,255,255,.18);transform:translateY(-2px)}
.ct-ic{width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,.16);display:grid;place-items:center;flex:none;color:#fff}
.ct-ic svg{color:#fff}
.ct b{display:block;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#d7c4e6}
.ct span{font-size:14px;font-weight:600;color:#fff;word-break:break-word}

/* FOOTER */
footer{background:var(--carbon);color:#9b91a6;text-align:center;padding:34px 24px;font-size:13px}
footer b{color:#fff}
footer .fz{color:var(--lila)}
.foot-soc{display:flex;justify-content:center;gap:14px;margin-bottom:18px}
.foot-soc a{width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,.07);display:grid;place-items:center;color:#cabfd3;transition:.18s}
.foot-soc a:hover{background:var(--purpura);color:#fff}
</style>
</head>
<body>
<h1 class="sr-only">Antecedentes profesionales de ${esc(CONFIG.nombre)}</h1>
<div class="topbar"></div>

<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="#top">
      <span class="mono-badge">${esc(CONFIG.monograma)}</span>
      <span>${esc(CONFIG.nombreCorto)}<small>Antecedentes profesionales</small></span>
    </a>
    <div class="nav-links">
      <a href="#perfil">Perfil</a>
      <a href="#trayectoria">Trayectoria</a>
      <a href="#zeta">Somos Zeta</a>
      <a href="#formacion">Formación</a>
      <a href="#contacto" class="nav-cta">Contacto</a>
    </div>
  </div>
</nav>

<header class="hero" id="top">
  <div class="hero-in">
    <div>
      <span class="eyebrow">Antecedentes profesionales</span>
      <h1>${esc(CONFIG.nombre)}</h1>
      <p class="role">${esc(CONFIG.rol)}</p>
      <div><span class="cobrand">Cofundador de Somos Zeta Digital Advice</span></div>
      <p class="bio">${esc(intro)}</p>
      <div class="hero-cta">
        <a class="btn btn-1" href="mailto:${esc(CONFIG.emailPersonal)}">${ICON.mail} Contactar</a>
        <a class="btn btn-2" href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener">${ICON.in} LinkedIn</a>
        <a class="btn btn-2" href="${esc(CONFIG.webZeta)}" target="_blank" rel="noopener">${ICON.web} Somos Zeta</a>
      </div>
      <div class="loc">${ICON.pin} ${esc(CONFIG.ubicacion)}</div>
    </div>
    <div class="photo-card">
      <img class="photo" src="${FOTO_SRC}" alt="Foto de ${esc(CONFIG.nombre)}">
    </div>
  </div>
</header>

<div class="stats"><div class="stats-in">${statsHTML}</div></div>

<section id="perfil">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-kick">Perfil</span>
      <h2>Quién soy profesionalmente</h2>
      <p>${esc(intro)} Mi trabajo conecta la ingeniería, la gestión de la calidad y la innovación tecnológica con la formación de personas y organizaciones.</p>
    </div>
  </div>
</section>

<section id="trayectoria" class="sec-soft">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-kick">Trayectoria</span>
      <h2>Experiencia, proyectos y roles</h2>
      <p>Más de una década dirigiendo proyectos en los sectores público y privado, enseñando en universidades e institutos y divulgando sobre inteligencia artificial. Usá los filtros para explorar por área.</p>
    </div>
    <div class="filters">${filterBtns}</div>
    <div class="grid" id="trayGrid">
${trayHTML}
    </div>
  </div>
</section>

<section id="zeta" class="zeta">
  <div class="wrap">
    <div class="zeta-logo"><span class="zeta-z">z</span> Somos Zeta <span style="font-weight:500;font-size:14px;color:var(--muted)">Digital Advice</span></div>
    <div class="sec-head">
      <p class="zeta-tag">"${esc(CONFIG.taglineZeta)}"</p>
      <h2>Mi empresa y sus clientes</h2>
      <p>Somos Zeta Digital Advice es la consultora en inteligencia artificial, productividad y transformación digital que cofundé. Acompañamos a empresas e instituciones a integrar tecnología con foco en resultados, capacitación y mejora de procesos.</p>
    </div>
    <div class="serv-grid">${servHTML}</div>
    <div class="cli-block">
      <h3>Empresas e instituciones con las que trabajamos</h3>
      <div class="cli-grid">${cliHTML}</div>
    </div>
  </div>
</section>

<section id="formacion">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-kick">Formación</span>
      <h2>Educación y desarrollo profesional</h2>
      <p>Formación de grado y posgrado en ingeniería y docencia universitaria, complementada con capacitación continua en gestión, calidad, datos e inteligencia artificial.</p>
    </div>
    <div class="edu-list">${estHTML}</div>
    <div class="cap-wrap">
      <button class="cap-toggle" id="capToggle" aria-expanded="false">
        <span class="chev">▶</span> Capacitaciones y cursos complementarios
        <span class="cap-count">${capacitaciones.length}</span>
      </button>
      <ul class="cap-list" id="capList">${capHTML}</ul>
    </div>
  </div>
</section>

<section id="habilidades" class="sec-soft">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-kick">Capacidades</span>
      <h2>Habilidades y competencias</h2>
    </div>
    ${habHTML}
  </div>
</section>

<section id="contacto" class="contact">
  <div class="wrap">
    <h2>¿Trabajamos juntos?</h2>
    <p>Si tu institución o empresa necesita acompañamiento en transformación digital, inteligencia artificial, formación o mejora de procesos, conversemos.</p>
    <div class="contact-grid">
      <a class="ct" href="mailto:${esc(CONFIG.emailPersonal)}"><span class="ct-ic">${ICON.mail}</span><span><b>Correo personal</b><span>${esc(CONFIG.emailPersonal)}</span></span></a>
      <a class="ct" href="mailto:${esc(CONFIG.emailZeta)}"><span class="ct-ic">${ICON.mail}</span><span><b>Correo Somos Zeta</b><span>${esc(CONFIG.emailZeta)}</span></span></a>
      <a class="ct" href="${esc(CONFIG.whatsappLink)}" target="_blank" rel="noopener"><span class="ct-ic">${ICON.wa}</span><span><b>WhatsApp</b><span>${esc(CONFIG.whatsapp)}</span></span></a>
      <a class="ct" href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener"><span class="ct-ic">${ICON.in}</span><span><b>LinkedIn</b><span>/in/lzequin</span></span></a>
      <a class="ct" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener"><span class="ct-ic">${ICON.ig}</span><span><b>Instagram</b><span>${esc(CONFIG.instagramHandle)}</span></span></a>
      <a class="ct" href="${esc(CONFIG.webZeta)}" target="_blank" rel="noopener"><span class="ct-ic">${ICON.web}</span><span><b>Web</b><span>www.somos-zeta.com</span></span></a>
    </div>
  </div>
</section>

<footer>
  <div class="foot-soc">
    <a href="${esc(CONFIG.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.in}</a>
    <a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
    <a href="${esc(CONFIG.whatsappLink)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
    <a href="${esc(CONFIG.webZeta)}" target="_blank" rel="noopener" aria-label="Web">${ICON.web}</a>
  </div>
  <p><b>${esc(CONFIG.nombre)}</b> · ${esc(CONFIG.rol)}</p>
  <p style="margin-top:6px">Cofundador de <b class="fz">Somos Zeta</b> Digital Advice · ${esc(CONFIG.ubicacion)}</p>
</footer>

<script>
const fbtns=document.querySelectorAll('.fbtn');
const cards=document.querySelectorAll('#trayGrid .card');
fbtns.forEach(b=>b.addEventListener('click',()=>{
  fbtns.forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const f=b.dataset.f;
  cards.forEach(c=>c.classList.toggle('hidden', f!=='todos' && c.dataset.cat!==f));
}));
const ct=document.getElementById('capToggle');
const cl=document.getElementById('capList');
ct.addEventListener('click',()=>{
  const open=cl.classList.toggle('open');
  ct.classList.toggle('open',open);
  ct.setAttribute('aria-expanded',open);
});
</script>
</body>
</html>`;

fs.writeFileSync("index.html", html);
console.log("index.html generado:", (html.length/1024).toFixed(1)+" KB");
console.log("Trayectoria:", trayectoria.length, "| Capacitaciones:", capacitaciones.length, "| Clientes:", clientes.length);
