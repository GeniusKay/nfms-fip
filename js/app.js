function homePage(){

return `
<div class="breadcrumb">
  <i class="fa-solid fa-house"></i>
  <span>Home</span>
</div>

<div class="home-page">

  <!-- INTRODUCTION -->
  <section class="home-intro">
    <div class="intro-content">
      <span class="section-kicker">KENYA NATIONAL FOREST MONITORING SYSTEM</span>

      <h2>Reliable Forest Information for a Sustainable Kenya</h2>

      <p>
        The National Forest Monitoring System (NFMS-FIP) provides an integrated
        framework for collecting, managing, analysing, monitoring and sharing
        forest information to support sustainable forest management,
        restoration, climate action, reporting and evidence-based decision-making.
      </p>

      <div class="intro-actions">
        <a href="#forest-monitoring" class="primary-action">
          <i class="fa-solid fa-satellite"></i>
          Explore Forest Monitoring
        </a>

        <a href="#interactive-maps" class="secondary-action">
          <i class="fa-solid fa-map"></i>
          Explore Forest Data & Maps
        </a>
      </div>
    </div>

    <div class="intro-visual">
      <div class="visual-circle">
        <i class="fa-solid fa-tree"></i>
      </div>
      <div class="visual-label">
        <strong>NFMS-FIP</strong>
        <span>Integrated Forest Information</span>
      </div>
    </div>
  </section>


  <!-- CORE PILLARS -->
  <section class="home-section">

    <div class="section-heading">
      <span class="section-kicker">CORE COMPONENTS</span>
      <h3>Integrated Forest Information</h3>
      <p>
        NFMS-FIP brings together complementary sources of forest information
        within a coordinated national monitoring and reporting framework.
      </p>
    </div>

    <div class="pillar-grid">

      <a href="#forest-cover-mapping" class="pillar-card">
        <div class="pillar-icon">
          <i class="fa-solid fa-satellite"></i>
        </div>
        <div>
          <h4>Satellite Land Monitoring System</h4>
          <p>
            Satellite-based monitoring of forest cover, land cover,
            forest change, deforestation, degradation, alerts and fire.
          </p>
          <span>Explore SLMS <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

      <a href="#nfi-results" class="pillar-card">
        <div class="pillar-icon">
          <i class="fa-solid fa-tree"></i>
        </div>
        <div>
          <h4>National Forest Inventory</h4>
          <p>
            Forest inventory information covering forest resources,
            biomass, carbon stocks, field observations and inventory results.
          </p>
          <span>Explore NFI <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

      <a href="#mrv-framework" class="pillar-card">
        <div class="pillar-icon">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <div>
          <h4>MRV & Climate</h4>
          <p>
            Forest carbon monitoring, GHG inventory, FREL/FRL,
            REDD+ and climate-related forest reporting.
          </p>
          <span>Explore MRV <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

      <a href="#data-catalogue" class="pillar-card">
        <div class="pillar-icon">
          <i class="fa-solid fa-database"></i>
        </div>
        <div>
          <h4>Forest Data & Knowledge</h4>
          <p>
            Access forest datasets, maps, metadata, data services,
            knowledge resources and information products.
          </p>
          <span>Explore Data <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>

    </div>
  </section>


  <!-- MONITORING WORKFLOW -->
  <section class="workflow-section">

    <div class="section-heading">
      <span class="section-kicker">FOREST MONITORING WORKFLOW</span>
      <h3>From Observation to Decision Support</h3>
      <p>
        NFMS-FIP connects Earth observation, field information and
        geospatial technologies through an integrated monitoring workflow.
      </p>
    </div>

    <div class="workflow">

      <div class="workflow-step">
        <div class="workflow-number">01</div>
        <i class="fa-solid fa-satellite"></i>
        <strong>Earth Observation</strong>
        <span>Satellite imagery</span>
      </div>

      <div class="workflow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="workflow-step">
        <div class="workflow-number">02</div>
        <i class="fa-solid fa-microchip"></i>
        <strong>Analysis</strong>
        <span>GIS, AI & automated change detection</span>
      </div>

      <div class="workflow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="workflow-step">
        <div class="workflow-number">03</div>
        <i class="fa-solid fa-drone"></i>
        <strong>UAV Verification</strong>
        <span>Detailed mapping & validation</span>
      </div>

      <div class="workflow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="workflow-step">
        <div class="workflow-number">04</div>
        <i class="fa-solid fa-mobile-screen-button"></i>
        <strong>Field Survey</strong>
        <span>Ground verification</span>
      </div>

      <div class="workflow-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <div class="workflow-step">
        <div class="workflow-number">05</div>
        <i class="fa-solid fa-database"></i>
        <strong>NFMS-FIP</strong>
        <span>Maps, dashboards & reporting</span>
      </div>

    </div>
  </section>


  <!-- QUICK ACCESS -->
  <section class="home-section">

    <div class="section-heading">
      <span class="section-kicker">QUICK ACCESS</span>
      <h3>Explore NFMS-FIP</h3>
    </div>

    <div class="quick-grid">

      <a href="#interactive-maps" class="quick-card">
        <i class="fa-solid fa-map-location-dot"></i>
        <div>
          <strong>Interactive Maps</strong>
          <span>Explore forest information spatially</span>
        </div>
      </a>

      <a href="#forest-dashboards" class="quick-card">
        <i class="fa-solid fa-chart-line"></i>
        <div>
          <strong>Forest Dashboards</strong>
          <span>Explore monitoring indicators and trends</span>
        </div>
      </a>

      <a href="#forest-alerts" class="quick-card">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>Forest Alerts</strong>
          <span>Monitor detected forest disturbances</span>
        </div>
      </a>

      <a href="#fire-monitoring" class="quick-card">
        <i class="fa-solid fa-fire"></i>
        <div>
          <strong>Fire Monitoring</strong>
          <span>Access forest fire information</span>
        </div>
      </a>

      <a href="#data-access-and-download" class="quick-card">
        <i class="fa-solid fa-download"></i>
        <div>
          <strong>Data Access</strong>
          <span>Find datasets and information products</span>
        </div>
      </a>

      <a href="#reports" class="quick-card">
        <i class="fa-solid fa-file-lines"></i>
        <div>
          <strong>Reports & Publications</strong>
          <span>Access forest monitoring knowledge</span>
        </div>
      </a>

    </div>
  </section>


  <!-- TECHNOLOGY -->
  <section class="technology-section">

    <div class="section-heading">
      <span class="section-kicker">MONITORING TECHNOLOGIES</span>
      <h3>Technology Supporting Forest Monitoring</h3>
    </div>

    <div class="technology-grid">

      <div class="technology-item">
        <i class="fa-solid fa-earth-africa"></i>
        <strong>Remote Sensing</strong>
        <span>Earth observation & satellite data</span>
      </div>

      <div class="technology-item">
        <i class="fa-solid fa-map"></i>
        <strong>GIS</strong>
        <span>Geospatial analysis & mapping</span>
      </div>

      <div class="technology-item">
        <i class="fa-solid fa-drone"></i>
        <strong>UAV / Drone</strong>
        <span>High-resolution verification</span>
      </div>

      <div class="technology-item">
        <i class="fa-solid fa-wave-square"></i>
        <strong>LiDAR</strong>
        <span>Three-dimensional forest information</span>
      </div>

      <div class="technology-item">
        <i class="fa-solid fa-brain"></i>
        <strong>AI & Machine Learning</strong>
        <span>Automated analysis & detection</span>
      </div>

    </div>
  </section>


  <!-- CALL TO ACTION -->
  <section class="nfms-callout">

    <div>
      <span class="section-kicker">NFMS-FIP</span>
      <h3>One Platform for Kenya's Forest Information</h3>
      <p>
        Discover forest monitoring information, geospatial datasets,
        maps, dashboards, reports and knowledge resources through the
        National Forest Monitoring System.
      </p>
    </div>

    <a href="#what-is-nfms" class="cta-button">
      Learn About NFMS
      <i class="fa-solid fa-arrow-right"></i>
    </a>

  </section>

</div>
`;

}
