/* =========================================================
   NFMS-FIP APPLICATION CONTROLLER
   ========================================================= */

const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const sidebarMenu = document.getElementById("sidebarMenu");


/* =========================================================
   UTILITY
   ========================================================= */

function slug(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


/* =========================================================
   BUILD TOP NAVIGATION DROPDOWNS
   ========================================================= */

function buildDropdown(menu) {

  if (!menu || !Array.isArray(menu.groups)) {
    return "";
  }

  return menu.groups.map((group, groupIndex) => {

    const groupId =
      `group-${slug(menu.title)}-${groupIndex}`;

    const items = (group.items || []).map(([label, id]) => {

      const icon =
        ICONS[label] || "fa-angle-right";

      return `
        <a
          href="#${id}"
          class="menu-link"
          data-page="${id}"
        >
          <span>
            <i class="fa-solid ${icon}"></i>
            ${label}
          </span>

          <i class="fa-solid fa-chevron-right"></i>
        </a>
      `;

    }).join("");

    return `
      <div class="menu-group">

        <button
          type="button"
          class="menu-group-title"
          aria-expanded="false"
          aria-controls="${groupId}-submenu"
        >
          <span>
            <i class="fa-solid fa-folder-open"></i>
            ${group.title}
          </span>

          <i class="fa-solid fa-chevron-down"></i>
        </button>

        <div
          class="submenu"
          id="${groupId}-submenu"
        >
          ${items}
        </div>

      </div>
    `;

  }).join("");
}


function buildTopMenus() {

  if (typeof MENU === "undefined") {
    console.error(
      "MENU is not available. Check js/content.js."
    );
    return;
  }

  Object.entries(MENU).forEach(([key, menu]) => {

    const element =
      document.getElementById(`${key}Menu`);

    if (element) {
      element.innerHTML =
        buildDropdown(menu);
    }

  });
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function buildSidebar() {

  if (!sidebarMenu || typeof MENU === "undefined") {
    return;
  }

  let html = "";

  Object.entries(MENU).forEach(([key, menu]) => {

    html += `
      <div class="side-section">

        <div class="side-section-title">
          <i class="fa-solid ${menu.icon || "fa-folder"}"></i>
          <span>${menu.title}</span>
        </div>
    `;

    (menu.groups || []).forEach(group => {

      html += `
        <div class="side-group">

          <div class="side-group-title">
            ${group.title}
          </div>
      `;

      (group.items || []).forEach(([label, id]) => {

        const icon =
          ICONS[label] || "fa-angle-right";

        html += `
          <a
            href="#${id}"
            class="side-link"
            data-page="${id}"
          >
            <i class="fa-solid ${icon}"></i>
            <span>${label}</span>
          </a>
        `;

      });

      html += `
        </div>
      `;
    });

    html += `
      </div>
    `;
  });

  sidebarMenu.innerHTML = html;
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function homePage() {

  return `
  <div class="breadcrumb">

    <i class="fa-solid fa-house"></i>

    <span>Home</span>

  </div>


  <div class="page-body">

    <h2>
      National Forest Monitoring System
    </h2>


    <p class="lead">
      The NFMS-FIP provides a coordinated national platform
      for forest information, monitoring, mapping, inventory,
      carbon accounting, reporting, data access and decision support.
    </p>


    <div class="metrics">

      <div class="metric">
        <strong>NFMS</strong>
        <span>
          National forest information framework
        </span>
      </div>


      <div class="metric">
        <strong>SLMS</strong>
        <span>
          Satellite land monitoring
        </span>
      </div>


      <div class="metric">
        <strong>NFI</strong>
        <span>
          National Forest Inventory
        </span>
      </div>


      <div class="metric">
        <strong>MRV</strong>
        <span>
          Measurement, Reporting & Verification
        </span>
      </div>

    </div>


    <h3>
      Explore NFMS-FIP
    </h3>


    <div class="cards">

      <div class="info-card">

        <i class="fa-solid fa-satellite"></i>

        <h4>
          Forest Monitoring
        </h4>

        <p>
          Satellite, field and UAV-based monitoring
          of forest cover, change, alerts and fire.
        </p>

      </div>


      <div class="info-card">

        <i class="fa-solid fa-map"></i>

        <h4>
          Forest Data & Maps
        </h4>

        <p>
          Interactive maps, dashboards, data exploration
          and county forest information.
        </p>

      </div>


      <div class="info-card">

        <i class="fa-solid fa-cloud"></i>

        <h4>
          MRV & Climate
        </h4>

        <p>
          Carbon monitoring, GHG inventory, FREL/FRL,
          REDD+ and climate reporting.
        </p>

      </div>

    </div>


    <div class="callout">

      <strong>
        Better data. Better decisions. Healthier forests.
      </strong>

      <br>

      NFMS-FIP connects evidence from Earth observation,
      inventories, field surveys, GIS, UAVs and other
      information sources.

    </div>

  </div>
  `;
}


/* =========================================================
   FIND MENU GROUP
   ========================================================= */

function findMenuGroup(id) {

  if (typeof MENU === "undefined") {
    return null;
  }

  for (const [key, menu] of Object.entries(MENU)) {

    for (const group of menu.groups || []) {

      for (const item of group.items || []) {

        if (item[1] === id) {

          return {
            key: key,
            title: menu.title,
            groupTitle: group.title
          };

        }

      }

    }

  }

  return null;
}


/* =========================================================
   RENDER PAGE
   ========================================================= */

function renderPage(id) {

  if (!content) {
    return;
  }


  /* HOME */

  if (!id || id === "home") {

    content.innerHTML =
      homePage();

    setActive("home");

    return;
  }


  /* NORMAL PAGE */

  const page =
    PAGE_COPY[id];


  /* PAGE NOT FOUND */

  if (!page) {

    content.innerHTML = `

      <div class="breadcrumb">

        <i class="fa-solid fa-house"></i>

        <a href="#home">
          Home
        </a>

        <i class="fa-solid fa-angle-right"></i>

        <span>
          Page Not Found
        </span>

      </div>


      <div class="page-body">

        <h2>
          Page Not Found
        </h2>

        <p class="lead">
          The requested NFMS-FIP page could not be found.
        </p>

        <p>
          Please use the navigation menu to select
          an available section.
        </p>

      </div>
    `;

    setActive("");

    return;
  }


  const title =
    page[0];

  const body =
    page[1];

  const group =
    findMenuGroup(id);


  content.innerHTML = `

    <div class="breadcrumb">

      <i class="fa-solid fa-house"></i>

      <a href="#home">
        Home
      </a>

      <i class="fa-solid fa-angle-right"></i>

      ${
        group
          ? `
            <span>
              ${group.title}
            </span>

            <i class="fa-solid fa-angle-right"></i>
          `
          : ""
      }

      <span>
        ${title}
      </span>

    </div>


    <div class="page-body">

      <h2>
        ${title}
      </h2>

      <p class="lead">
        ${body}
      </p>


      <div class="content-note">

        <i class="fa-solid fa-circle-info"></i>

        <div>

          <strong>
            NFMS-FIP Information Resource
          </strong>

          <p>
            This section provides a structured entry
            point to information, datasets, maps,
            monitoring methods and related resources
            within the National Forest Monitoring System.
          </p>

        </div>

      </div>

    </div>
  `;


  setActive(id);
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setActive(id) {

  /* Remove previous active state */

  document
    .querySelectorAll(".nav-item")
    .forEach(item => {
      item.classList.remove("active");
    });


  document
    .querySelectorAll(".side-link")
    .forEach(link => {
      link.classList.remove("active");
    });


  if (id === "home" || !id) {

    const home =
      document.querySelector(
        ".home-link, #homeLink"
      );

    if (home) {
      home.classList.add("active");
    }

    return;
  }


  const group =
    findMenuGroup(id);


  if (!group) {
    return;
  }


  const dropdown =
    document.getElementById(
      `${group.key}Menu`
    );


  if (dropdown) {

    const button =
      dropdown.querySelector(".nav-item");

    if (button) {
      button.classList.add("active");
    }

  }


  document
    .querySelectorAll(
      `.side-link[data-page="${id}"]`
    )
    .forEach(link => {

      link.classList.add("active");

    });
}


/* =========================================================
   DROPDOWN FUNCTIONS
   ========================================================= */

function closeAllDropdowns(except = null) {

  document
    .querySelectorAll(".nav-dropdown.open")
    .forEach(dropdown => {

      if (dropdown !== except) {

        dropdown.classList.remove("open");

      }

    });
}


function closeAllSubmenus(except = null) {

  document
    .querySelectorAll(".menu-group.expanded")
    .forEach(group => {

      if (group !== except) {

        group.classList.remove(
          "expanded"
        );


        const button =
          group.querySelector(
            ".menu-group-title"
          );

        if (button) {

          button.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      }

    });
}


function toggleDropdown(dropdown) {

  if (!dropdown) {
    return;
  }


  const isOpen =
    dropdown.classList.contains("open");


  closeAllDropdowns();


  if (!isOpen) {

    dropdown.classList.add("open");

  }
}


function toggleSubmenu(group) {

  if (!group) {
    return;
  }


  const isExpanded =
    group.classList.contains(
      "expanded"
    );


  closeAllSubmenus(group);


  group.classList.toggle(
    "expanded",
    !isExpanded
  );


  const button =
    group.querySelector(
      ".menu-group-title"
    );


  if (button) {

    button.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

  }
}


/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {

  const modal =
    document.getElementById(
      "searchModal"
    );

  const input =
    document.getElementById(
      "searchInput"
    );


  if (!modal) {
    return;
  }


  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  if (input) {

    setTimeout(() => {
      input.focus();
    }, 50);

  }
}


function closeSearch() {

  const modal =
    document.getElementById(
      "searchModal"
    );


  if (!modal) {
    return;
  }


  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );
}


function performSearch(query) {

  const results =
    document.getElementById(
      "searchResults"
    );


  if (
    !results ||
    typeof MENU === "undefined"
  ) {
    return;
  }


  const term =
    String(query || "")
      .trim()
      .toLowerCase();


  if (!term) {

    results.innerHTML = `
      <div class="search-empty">
        Enter a keyword to search NFMS-FIP.
      </div>
    `;

    return;
  }


  const matches = [];


  Object.values(MENU).forEach(menu => {

    (menu.groups || []).forEach(group => {

      (group.items || []).forEach(
        ([label, id]) => {

          const page =
            PAGE_COPY[id];

          const title =
            page
              ? page[0]
              : label;

          const description =
            page
              ? page[1]
              : "";


          if (
            label
              .toLowerCase()
              .includes(term) ||

            title
              .toLowerCase()
              .includes(term) ||

            description
              .toLowerCase()
              .includes(term)
          ) {

            matches.push({
              label: label,
              id: id,
              group: menu.title
            });

          }

        }
      );

    });

  });


  if (!matches.length) {

    results.innerHTML = `
      <div class="search-empty">
        No matching NFMS-FIP content was found.
      </div>
    `;

    return;
  }


  results.innerHTML =
    matches
      .slice(0, 30)
      .map(match => `

        <a
          href="#${match.id}"
          class="search-result"
          data-page="${match.id}"
        >

          <i class="fa-solid ${
            ICONS[match.label] ||
            "fa-file-lines"
          }"></i>

          <span>

            <strong>
              ${match.label}
            </strong>

            <small>
              ${match.group}
            </small>

          </span>

        </a>

      `)
      .join("");
}


/* =========================================================
   CLICK HANDLER
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {


    /* -----------------------------------------
       TOP MENU BUTTON
       ----------------------------------------- */

    const navButton =
      event.target.closest(
        ".nav-dropdown > .nav-item"
      );


    if (navButton) {

      event.preventDefault();

      event.stopPropagation();


      const dropdown =
        navButton.closest(
          ".nav-dropdown"
        );


      toggleDropdown(
        dropdown
      );

      return;
    }


    /* -----------------------------------------
       SUBMENU GROUP
       ----------------------------------------- */

    const groupButton =
      event.target.closest(
        ".menu-group-title"
      );


    if (groupButton) {

      event.preventDefault();

      event.stopPropagation();


      const group =
        groupButton.closest(
          ".menu-group"
        );


      toggleSubmenu(
        group
      );

      return;
    }


    /* -----------------------------------------
       PAGE LINKS
       ----------------------------------------- */

    const pageLink =
      event.target.closest(
        ".menu-link, .side-link, .search-result"
      );


    if (pageLink) {

      closeAllDropdowns();

      closeAllSubmenus();

      closeSearch();

      if (sidebar) {
        sidebar.classList.remove(
          "open"
        );
      }

      return;
    }


    /* -----------------------------------------
       HOME
       ----------------------------------------- */

    const homeLink =
      event.target.closest(
        ".home-link, #homeLink"
      );


    if (homeLink) {

      closeAllDropdowns();

      closeAllSubmenus();

      closeSearch();

      return;
    }


    /* -----------------------------------------
       SEARCH BUTTON
       ----------------------------------------- */

    const searchTrigger =
      event.target.closest(
        "#searchButton, .search-button, [data-action='search']"
      );


    if (searchTrigger) {

      event.preventDefault();

      openSearch();

      return;
    }


    /* -----------------------------------------
       SEARCH CLOSE
       ----------------------------------------- */

    const searchClose =
      event.target.closest(
        "#closeSearch, .search-close, [data-action='close-search']"
      );


    if (searchClose) {

      event.preventDefault();

      closeSearch();

      return;
    }


    /* -----------------------------------------
       CLICK SEARCH BACKDROP
       ----------------------------------------- */

    if (
      event.target.id ===
      "searchModal"
    ) {

      closeSearch();

      return;
    }


    /* -----------------------------------------
       SIDEBAR OPEN
       ----------------------------------------- */

    const sidebarToggle =
      event.target.closest(
        "#sidebarToggle, .sidebar-toggle, [data-action='sidebar-toggle']"
      );


    if (sidebarToggle) {

      event.preventDefault();


      if (sidebar) {

        sidebar.classList.toggle(
          "open"
        );

      }

      return;
    }


    /* -----------------------------------------
       SIDEBAR CLOSE
       ----------------------------------------- */

    const sidebarClose =
      event.target.closest(
        "#sidebarClose, .sidebar-close, [data-action='sidebar-close']"
      );


    if (sidebarClose) {

      event.preventDefault();


      if (sidebar) {

        sidebar.classList.remove(
          "open"
        );

      }

      return;
    }


    /* -----------------------------------------
       CLICK OUTSIDE NAVIGATION
       ----------------------------------------- */

    if (
      !event.target.closest(
        ".main-nav"
      )
    ) {

      closeAllDropdowns();

    }

  }
);


/* =========================================================
   SEARCH INPUT
   ========================================================= */

document.addEventListener(
  "input",
  function(event) {

    if (
      event.target.id ===
      "searchInput"
    ) {

      performSearch(
        event.target.value
      );

    }

  }
);


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
  "keydown",
  function(event) {


    /* ESC */

    if (
      event.key === "Escape"
    ) {

      closeAllDropdowns();

      closeAllSubmenus();

      closeSearch();


      if (sidebar) {

        sidebar.classList.remove(
          "open"
        );

      }

    }


    /* "/" opens search */

    if (
      event.key === "/" &&
      ![
        "INPUT",
        "TEXTAREA"
      ].includes(
        document.activeElement.tagName
      )
    ) {

      event.preventDefault();

      openSearch();

    }

  }
);


/* =========================================================
   ROUTER
   ========================================================= */

function route() {

  const hash =
    window.location.hash
      .replace(/^#/, "")
      .trim();


  /*
     IMPORTANT:
     Routing only changes page content.
     It does NOT remove the .open class from
     the navigation dropdowns.
  */

  renderPage(
    hash || "home"
  );
}


/* =========================================================
   APPLICATION INITIALISATION
   ========================================================= */

function initialiseApp() {

  try {

    /*
       Build menus first.
    */

    buildTopMenus();

    buildSidebar();


    /*
       Update footer year.
    */

    const year =
      document.getElementById(
        "year"
      );


    if (year) {

      year.textContent =
        new Date()
          .getFullYear();

    }


    /*
       Load current page.
    */

    route();


    console.log(
      "NFMS-FIP application initialised successfully."
    );

  }

  catch (error) {

    console.error(
      "NFMS-FIP initialisation error:",
      error
    );

  }

}


/* =========================================================
   START APPLICATION
   ========================================================= */

window.addEventListener(
  "hashchange",
  route
);


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initialiseApp
  );

} else {

  initialiseApp();

}
