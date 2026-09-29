/* =========================================================
   NFMS-FIP APPLICATION CONTROLLER
   Designed for the current index.html structure
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------------------------------
     BASIC ELEMENTS
     --------------------------------------------------------- */

  const content = document.getElementById("content");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const searchButton = document.getElementById("searchButton");
  const searchModal = document.getElementById("searchModal");
  const closeSearchButton = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const sidebar = document.getElementById("sidebar");
  const tickerPause = document.getElementById("tickerPause");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ---------------------------------------------------------
     CHECK CONTENT DATA
     --------------------------------------------------------- */

  if (typeof MENU === "undefined") {
    console.error("NFMS-FIP ERROR: MENU is not available.");
    if (content) {
      content.innerHTML = `
        <div class="page-body">
          <h2>NFMS-FIP Loading Error</h2>
          <p>The menu configuration could not be loaded.</p>
          <p>Please check that <strong>js/content.js</strong> is available.</p>
        </div>
      `;
    }
    return;
  }


  /* ---------------------------------------------------------
     BUILD TOP NAVIGATION DROPDOWNS
     --------------------------------------------------------- */

  function buildTopMenus() {

    Object.keys(MENU).forEach(function (key) {

      const menu = MENU[key];

      const panel = document.getElementById(key + "Menu");

      if (!panel) {
        console.warn("NFMS-FIP: Missing dropdown panel:", key + "Menu");
        return;
      }

      panel.innerHTML = buildDropdownContent(menu);

    });

  }


  /* ---------------------------------------------------------
     BUILD DROPDOWN CONTENT
     --------------------------------------------------------- */

  function buildDropdownContent(menu) {

    let html = "";

    if (!menu || !menu.groups) {
      return html;
    }

    menu.groups.forEach(function (group) {

      html += `
        <div class="menu-group">

          <button
            type="button"
            class="menu-group-title"
            data-group="${escapeHtml(group.title)}"
          >
            <span>${escapeHtml(group.title)}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>

          <div class="submenu">
      `;

      if (group.items && Array.isArray(group.items)) {

        group.items.forEach(function (item) {

          const label = item[0];
          const pageId = item[1];

          html += `
            <button
              type="button"
              class="menu-link"
              data-page="${escapeHtml(pageId)}"
            >
              <span>${escapeHtml(label)}</span>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          `;

        });

      }

      html += `
          </div>
        </div>
      `;

    });

    return html;
  }


  /* ---------------------------------------------------------
     BUILD LEFT SIDEBAR
     --------------------------------------------------------- */

  function buildSidebar() {

    if (!sidebarMenu) return;

    let html = "";

    Object.keys(MENU).forEach(function (key) {

      const menu = MENU[key];

      html += `
        <div class="sidebar-section">

          <div class="sidebar-section-title">
            <i class="fa-solid ${menu.icon || "fa-folder"}"></i>
            <span>${escapeHtml(menu.title)}</span>
          </div>
      `;

      if (menu.groups) {

        menu.groups.forEach(function (group) {

          html += `
            <div class="sidebar-group">

              <div class="sidebar-group-title">
                ${escapeHtml(group.title)}
              </div>
          `;

          if (group.items) {

            group.items.forEach(function (item) {

              const label = item[0];
              const pageId = item[1];

              html += `
                <button
                  type="button"
                  class="sidebar-link"
                  data-page="${escapeHtml(pageId)}"
                >
                  ${escapeHtml(label)}
                </button>
              `;

            });

          }

          html += `
            </div>
          `;

        });

      }

      html += `
        </div>
      `;

    });

    sidebarMenu.innerHTML = html;
  }


  /* ---------------------------------------------------------
     HOME PAGE
     --------------------------------------------------------- */

  function homePage() {

    return `
      <div class="breadcrumb">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </div>

      <div class="page-body">

        <h2>National Forest Monitoring System</h2>

        <p class="lead">
          The NFMS-FIP provides a coordinated national platform for forest
          information, monitoring, mapping, inventory, carbon accounting,
          reporting, data access and decision support.
        </p>

        <div class="metrics">

          <div class="metric">
            <strong>NFMS</strong>
            <span>National forest information framework</span>
          </div>

          <div class="metric">
            <strong>SLMS</strong>
            <span>Satellite land monitoring</span>
          </div>

          <div class="metric">
            <strong>NFI</strong>
            <span>National Forest Inventory</span>
          </div>

          <div class="metric">
            <strong>MRV</strong>
            <span>Measurement, Reporting &amp; Verification</span>
          </div>

        </div>

        <h3>Explore NFMS-FIP</h3>

        <div class="cards">

          <div class="info-card">
            <i class="fa-solid fa-satellite"></i>
            <h4>Forest Monitoring</h4>
            <p>
              Satellite, field and UAV-based monitoring of forest cover,
              change, alerts and fire.
            </p>
          </div>

          <div class="info-card">
            <i class="fa-solid fa-map"></i>
            <h4>Forest Data &amp; Maps</h4>
            <p>
              Interactive maps, dashboards, data exploration and county
              forest information.
            </p>
          </div>

          <div class="info-card">
            <i class="fa-solid fa-cloud"></i>
            <h4>MRV &amp; Climate</h4>
            <p>
              Carbon monitoring, GHG inventory, FREL/FRL, REDD+ and
              climate reporting.
            </p>
          </div>

        </div>

        <div class="callout">
          <strong>
            Better data. Better decisions. Healthier forests.
          </strong>

          <br>

          NFMS-FIP connects evidence from Earth observation, inventories,
          field surveys, GIS, UAVs and other information sources.
        </div>

      </div>
    `;
  }


  /* ---------------------------------------------------------
     FIND MENU GROUP
     --------------------------------------------------------- */

  function findMenuGroup(pageId) {

    for (const key of Object.keys(MENU)) {

      const menu = MENU[key];

      if (!menu.groups) continue;

      for (const group of menu.groups) {

        if (!group.items) continue;

        for (const item of group.items) {

          if (item[1] === pageId) {

            return {
              menuKey: key,
              group: group,
              label: item[0]
            };

          }

        }

      }

    }

    return null;
  }


  /* ---------------------------------------------------------
     RENDER PAGE
     --------------------------------------------------------- */

  function renderPage(pageId) {

    if (!content) return;

    if (!pageId || pageId === "home") {

      content.innerHTML = homePage();

      setActive("home");

      return;
    }


    const menuInfo = findMenuGroup(pageId);

    let page = null;

    if (typeof PAGE_COPY !== "undefined") {
      page = PAGE_COPY[pageId];
    }


    let title = pageId;
    let body = "";


    if (page) {

      if (typeof page === "string") {

        body = page;

      } else {

        title =
          page.title ||
          page.heading ||
          title;

        body =
          page.content ||
          page.body ||
          page.description ||
          "";

      }

    } else if (menuInfo) {

      title = menuInfo.label;

      body = `
        <p class="lead">
          This section provides information and resources related to
          ${escapeHtml(menuInfo.label)} within the Kenya National Forest
          Monitoring System.
        </p>
      `;

    } else {

      body = `
        <p class="lead">
          Information for this section is being developed.
        </p>
      `;

    }


    content.innerHTML = `

      <div class="breadcrumb">

        <i class="fa-solid fa-house"></i>

        <span>Home</span>

        <i class="fa-solid fa-angle-right"></i>

        <span>${menuInfo ? escapeHtml(MENU[menuInfo.menuKey].title) : "NFMS-FIP"}</span>

        <i class="fa-solid fa-angle-right"></i>

        <span>${escapeHtml(title)}</span>

      </div>


      <div class="page-body">

        <h2>${escapeHtml(title)}</h2>

        <div class="page-content">

          ${body}

        </div>

      </div>

    `;

    setActive(pageId);

  }


  /* ---------------------------------------------------------
     SET ACTIVE NAVIGATION ITEM
     --------------------------------------------------------- */

  function setActive(pageId) {

    document.querySelectorAll(".nav-item").forEach(function (item) {

      item.classList.remove("active");

    });


    if (pageId === "home") {

      const home = document.querySelector(
        '.nav-item[data-page="home"]'
      );

      if (home) {
        home.classList.add("active");
      }

      return;
    }


    const menuInfo = findMenuGroup(pageId);

    if (!menuInfo) return;


    const dropdown = document.querySelector(
      '.nav-dropdown[data-menu="' + menuInfo.menuKey + '"]'
    );

    if (dropdown) {

      const button = dropdown.querySelector(".nav-item");

      if (button) {
        button.classList.add("active");
      }

    }

  }


  /* ---------------------------------------------------------
     CLOSE ALL TOP DROPDOWNS
     --------------------------------------------------------- */

  function closeAllDropdowns(except) {

    document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {

      if (dropdown !== except) {
        dropdown.classList.remove("open");
      }

    });

  }


  /* ---------------------------------------------------------
     CLOSE ALL SUBMENUS
     --------------------------------------------------------- */

  function closeAllSubmenus(except) {

    document.querySelectorAll(".menu-group").forEach(function (group) {

      if (group !== except) {
        group.classList.remove("expanded");
      }

    });

  }


  /* ---------------------------------------------------------
     TOP MENU CLICK
     --------------------------------------------------------- */

  document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {

    const button = dropdown.querySelector(".nav-toggle");

    if (!button) return;


    button.addEventListener("click", function (event) {

      event.preventDefault();

      event.stopPropagation();

      const isOpen = dropdown.classList.contains("open");

      closeAllDropdowns(dropdown);

      if (isOpen) {

        dropdown.classList.remove("open");

      } else {

        dropdown.classList.add("open");

      }

    });

  });


  /* ---------------------------------------------------------
     DROPDOWN GROUP CLICK
     --------------------------------------------------------- */

  document.addEventListener("click", function (event) {

    const groupButton =
      event.target.closest(".menu-group-title");

    if (groupButton) {

      event.preventDefault();

      event.stopPropagation();

      const group =
        groupButton.closest(".menu-group");

      if (!group) return;

      const expanded =
        group.classList.contains("expanded");

      closeAllSubmenus(group);

      if (expanded) {

        group.classList.remove("expanded");

      } else {

        group.classList.add("expanded");

      }

      return;
    }


    /* -------------------------------------------------------
       DROPDOWN PAGE LINK
       ------------------------------------------------------- */

    const menuLink =
      event.target.closest(".menu-link");

    if (menuLink) {

      event.preventDefault();

      const pageId =
        menuLink.getAttribute("data-page");

      if (pageId) {

        window.location.hash = pageId;

        closeAllDropdowns();

      }

      return;
    }


    /* -------------------------------------------------------
       SIDEBAR PAGE LINK
       ------------------------------------------------------- */

    const sidebarLink =
      event.target.closest(".sidebar-link");

    if (sidebarLink) {

      event.preventDefault();

      const pageId =
        sidebarLink.getAttribute("data-page");

      if (pageId) {

        window.location.hash = pageId;

      }

      return;
    }


    /* -------------------------------------------------------
       HOME
       ------------------------------------------------------- */

    const homeLink =
      event.target.closest('.nav-item[data-page="home"]');

    if (homeLink) {

      event.preventDefault();

      window.location.hash = "home";

      closeAllDropdowns();

      return;
    }


    /* -------------------------------------------------------
       CLICK OUTSIDE MENUS
       ------------------------------------------------------- */

    if (!event.target.closest(".nav-dropdown")) {

      closeAllDropdowns();

    }

  });


  /* ---------------------------------------------------------
     HERO MONITORING BUTTON
     --------------------------------------------------------- */

  document.addEventListener("click", function (event) {

    const heroButton =
      event.target.closest(".hero-button");

    if (!heroButton) return;

    event.preventDefault();

    window.location.hash = "monitoring";

    window.scrollTo({
      top: document.querySelector(".layout")
        ? document.querySelector(".layout").offsetTop - 20
        : 0,
      behavior: "smooth"
    });

  });


  /* ---------------------------------------------------------
     SEARCH
     --------------------------------------------------------- */

  function openSearch() {

    if (!searchModal) return;

    searchModal.classList.add("open");

    searchModal.setAttribute("aria-hidden", "false");

    setTimeout(function () {

      if (searchInput) {
        searchInput.focus();
      }

    }, 100);

  }


  function closeSearch() {

    if (!searchModal) return;

    searchModal.classList.remove("open");

    searchModal.setAttribute("aria-hidden", "true");

  }


  if (searchButton) {

    searchButton.addEventListener("click", function () {

      openSearch();

    });

  }


  if (closeSearchButton) {

    closeSearchButton.addEventListener("click", function () {

      closeSearch();

    });

  }


  if (searchModal) {

    searchModal.addEventListener("click", function (event) {

      if (event.target === searchModal) {

        closeSearch();

      }

    });

  }


  /* ---------------------------------------------------------
     SEARCH FUNCTION
     --------------------------------------------------------- */

  function performSearch(term) {

    if (!searchResults) return;

    term = term.trim().toLowerCase();

    if (!term) {

      searchResults.innerHTML = `
        <p class="search-empty">
          Enter a search term to search NFMS-FIP.
        </p>
      `;

      return;

    }


    const results = [];


    Object.keys(MENU).forEach(function (key) {

      const menu = MENU[key];

      if (!menu.groups) return;


      menu.groups.forEach(function (group) {

        if (!group.items) return;


        group.items.forEach(function (item) {

          const label = item[0];
          const pageId = item[1];

          if (
            label.toLowerCase().includes(term) ||
            group.title.toLowerCase().includes(term) ||
            menu.title.toLowerCase().includes(term)
          ) {

            results.push({
              label: label,
              pageId: pageId,
              group: group.title,
              menu: menu.title
            });

          }

        });

      });

    });


    if (!results.length) {

      searchResults.innerHTML = `
        <p class="search-empty">
          No matching NFMS-FIP pages were found.
        </p>
      `;

      return;

    }


    searchResults.innerHTML = results.map(function (result) {

      return `
        <button
          type="button"
          class="search-result"
          data-page="${escapeHtml(result.pageId)}"
        >

          <strong>${escapeHtml(result.label)}</strong>

          <small>
            ${escapeHtml(result.menu)}
            &nbsp;›&nbsp;
            ${escapeHtml(result.group)}
          </small>

        </button>
      `;

    }).join("");

  }


  if (searchInput) {

    searchInput.addEventListener("input", function () {

      performSearch(searchInput.value);

    });

  }


  document.addEventListener("click", function (event) {

    const result =
      event.target.closest(".search-result");

    if (!result) return;

    const pageId =
      result.getAttribute("data-page");

    if (pageId) {

      window.location.hash = pageId;

      closeSearch();

    }

  });


  /* ---------------------------------------------------------
     ESC KEY
     --------------------------------------------------------- */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeAllDropdowns();

      closeSearch();

    }

  });


  /* ---------------------------------------------------------
     MOBILE MENU
     --------------------------------------------------------- */

  if (mobileMenuButton && sidebar) {

    mobileMenuButton.addEventListener("click", function () {

      sidebar.classList.toggle("mobile-open");

    });

  }


  /* ---------------------------------------------------------
     TICKER PAUSE
     --------------------------------------------------------- */

  if (tickerPause) {

    let tickerPaused = false;

    tickerPause.addEventListener("click", function () {

      tickerPaused = !tickerPaused;

      const track =
        document.querySelector(".ticker-track");

      if (track) {

        track.style.animationPlayState =
          tickerPaused ? "paused" : "running";

      }


      const icon =
        tickerPause.querySelector("i");

      if (icon) {

        icon.className =
          tickerPaused
            ? "fa-solid fa-play"
            : "fa-solid fa-pause";

      }

    });

  }


  /* ---------------------------------------------------------
     ROUTING
     --------------------------------------------------------- */

  function route() {

    let pageId =
      window.location.hash.replace("#", "");

    if (!pageId) {

      pageId = "home";

    }

    renderPage(pageId);

  }


  window.addEventListener("hashchange", function () {

    route();

  });


  /* ---------------------------------------------------------
     ESCAPE HTML
     --------------------------------------------------------- */

  function escapeHtml(value) {

    if (value === undefined || value === null) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* ---------------------------------------------------------
     INITIALISE
     --------------------------------------------------------- */

  buildTopMenus();

  buildSidebar();

  route();


  console.log("NFMS-FIP application initialized successfully.");

});
