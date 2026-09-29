const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const sidebarMenu = document.getElementById("sidebarMenu");

function slug(text){ return text.toLowerCase().replace(/&/g,"and").replace(/[+\/]/g,"-").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }

function buildDropdown(menu){
  return menu.groups.map((group,gi)=>`
    <div class="menu-group ${gi===0?'expanded':''}">
      <button class="menu-group-title" data-submenu>
        <span>${group.title}</span><i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="submenu">
        ${group.items.map(([label,id])=>`<a class="menu-link" href="#${id}" data-page="${id}">${label}</a>`).join("")}
      </div>
    </div>`).join("");
}

function buildSidebar(){
  const home = `<div class="sidebar-group"><a class="sidebar-group-title" href="#home"><span class="left"><i class="fa-solid fa-house"></i> Home</span></a></div>`;
  sidebarMenu.innerHTML = home + Object.entries(MENU).map(([key,menu])=>`
    <div class="sidebar-group" data-sidebar-group="${key}">
      <button class="sidebar-group-title">
        <span class="left"><i class="fa-solid ${menu.icon}"></i>${menu.title}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="sidebar-submenu">
        ${menu.groups.map(g=>`
          <div class="sidebar-subgroup">
            <div class="sidebar-subgroup-title">${g.title}</div>
            ${g.items.map(([label,id])=>`<a href="#${id}" data-page="${id}">${label}</a>`).join("")}
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function buildTopMenus(){
  Object.entries(MENU).forEach(([key,menu])=>{
    const el=document.getElementById(key+"Menu");
    if(el) el.innerHTML=buildDropdown(menu);
  });
}

function homePage(){
  return `
  <div class="breadcrumb"><i class="fa-solid fa-house"></i><span>Home</span></div>
  <div class="page-body">
    <h2>National Forest Monitoring System</h2>
    <p class="lead">The NFMS-FIP provides a coordinated national platform for forest information, monitoring, mapping, inventory, carbon accounting, reporting, data access and decision support.</p>
    <div class="metrics">
      <div class="metric"><strong>NFMS</strong><span>National forest information framework</span></div>
      <div class="metric"><strong>SLMS</strong><span>Satellite land monitoring</span></div>
      <div class="metric"><strong>NFI</strong><span>National Forest Inventory</span></div>
      <div class="metric"><strong>MRV</strong><span>Measurement, Reporting & Verification</span></div>
    </div>
    <h3>Explore NFMS-FIP</h3>
    <div class="cards">
      <div class="info-card"><i class="fa-solid fa-satellite"></i><h4>Forest Monitoring</h4><p>Satellite, field and UAV-based monitoring of forest cover, change, alerts and fire.</p></div>
      <div class="info-card"><i class="fa-solid fa-map"></i><h4>Forest Data & Maps</h4><p>Interactive maps, dashboards, data exploration and county forest information.</p></div>
      <div class="info-card"><i class="fa-solid fa-cloud"></i><h4>MRV & Climate</h4><p>Carbon monitoring, GHG inventory, FREL/FRL, REDD+ and climate reporting.</p></div>
    </div>
    <div class="callout"><strong>Better data. Better decisions. Healthier forests.</strong><br>NFMS-FIP connects evidence from Earth observation, inventories, field surveys, GIS, UAVs and other information sources.</div>
  </div>`;
}

function renderPage(id){
  if(id==="home" || !id) { content.innerHTML=homePage(); document.title="NFMS-FIP | Home"; return; }
  const data=PAGE_COPY[id] || [id.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase()),"This NFMS-FIP page is ready for detailed content, maps, datasets, dashboards and supporting documentation."];
  const related=[];
  Object.values(MENU).forEach(m=>m.groups.forEach(g=>g.items.forEach(([label,pid])=>{if(pid!==id && related.length<6) related.push([label,pid])})));
  content.innerHTML=`
    <div class="breadcrumb"><i class="fa-solid fa-house"></i><a href="#home">Home</a><span>›</span><span>${data[0]}</span></div>
    <div class="page-body">
      <h2>${data[0]}</h2>
      <p class="lead">${data[1]}</p>
      <div class="callout"><strong><i class="fa-solid fa-circle-info section-icon"></i> NFMS-FIP Information</strong><br>This section can be populated with approved Kenyan datasets, maps, methods, reports, dashboards, standards and supporting resources.</div>
      <h3>Related NFMS resources</h3>
      <div class="page-list">${related.map(([label,pid])=>`<a href="#${pid}"><i class="fa-solid ${ICONS[label]||"fa-arrow-right"} section-icon"></i>${label}</a>`).join("")}</div>
    </div>`;
  document.title=`${data[0]} | NFMS-FIP`;
}

function setActive(id){
  document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active"));
  const top = id==="home" ? document.querySelector('.nav-item[data-page="home"]') : null;
  if(top) top.classList.add("active");
  document.querySelectorAll("[data-sidebar-group]").forEach(g=>g.classList.remove("expanded"));
  const group = findMenuGroup(id);
  if(group){ const el=document.querySelector(`[data-sidebar-group="${group}"]`); if(el) el.classList.add("expanded"); }
}

function findMenuGroup(id){
  for(const [key,m] of Object.entries(MENU)) for(const g of m.groups) for(const item of g.items) if(item[1]===id) return key;
  return null;
}

function route(){
  const id=location.hash.replace("#","")||"home";
  renderPage(id);
  setActive(id);
  sidebar.classList.remove("mobile-open");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
  const toggle=e.target.closest("[data-submenu]");
  if(toggle) toggle.parentElement.classList.toggle("expanded");

  const navToggle=e.target.closest(".nav-toggle");
  if(navToggle){
    const dropdown=navToggle.closest(".nav-dropdown");
    document.querySelectorAll(".nav-dropdown").forEach(x=>{if(x!==dropdown)x.classList.remove("open")});
    dropdown.classList.toggle("open");
  }

  const sidebarToggle=e.target.closest(".sidebar-group-title");
  if(sidebarToggle && sidebarToggle.closest("[data-sidebar-group]")){
    sidebarToggle.closest("[data-sidebar-group]").classList.toggle("expanded");
  }
});

document.addEventListener("click",e=>{
  if(!e.target.closest(".nav-dropdown")){
    document.querySelectorAll(".nav-dropdown").forEach(x=>x.classList.remove("open"));
  }
});

document.getElementById("mobileMenuButton").addEventListener("click",()=>sidebar.classList.toggle("mobile-open"));

const ticker=document.querySelector(".ticker-track");
let tickerPaused=false;
document.getElementById("tickerPause").addEventListener("click",e=>{
  tickerPaused=!tickerPaused;
  ticker.style.animationPlayState=tickerPaused?"paused":"running";
  e.currentTarget.innerHTML=tickerPaused?'<i class="fa-solid fa-play"></i>':'<i class="fa-solid fa-pause"></i>';
});

const modal=document.getElementById("searchModal");
const input=document.getElementById("searchInput");
const results=document.getElementById("searchResults");
document.getElementById("searchButton").addEventListener("click",()=>{
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); input.focus();
});
document.getElementById("closeSearch").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});

const allPages=[];
Object.entries(MENU).forEach(([key,m])=>m.groups.forEach(g=>g.items.forEach(([label,id])=>allPages.push([label,id,m.title]))));
input.addEventListener("input",()=>{
  const q=input.value.trim().toLowerCase();
  if(!q){results.innerHTML="<p>Type a topic to search the NFMS-FIP navigation.</p>";return}
  const hits=allPages.filter(x=>(x[0]+" "+x[2]).toLowerCase().includes(q)).slice(0,12);
  results.innerHTML=hits.length?hits.map(x=>`<div class="search-result"><a href="#${x[1]}"><strong>${x[0]}</strong><small>${x[2]}</small></a></div>`).join(""):"<p>No matching NFMS-FIP page found.</p>";
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});

document.getElementById("year").textContent=new Date().getFullYear();
buildTopMenus();
buildSidebar();
route();
window.addEventListener("hashchange",route);
