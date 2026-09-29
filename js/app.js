function homePage(){
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
        <span>Measurement, Reporting & Verification</span>
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
        <h4>Forest Data & Maps</h4>
        <p>
          Interactive maps, dashboards, data exploration and county
          forest information.
        </p>
      </div>

      <div class="info-card">
        <i class="fa-solid fa-cloud"></i>
        <h4>MRV & Climate</h4>
        <p>
          Carbon monitoring, GHG inventory, FREL/FRL, REDD+ and
          climate reporting.
        </p>
      </div>
    </div>

    <div class="callout">
      <strong>Better data. Better decisions. Healthier forests.</strong>
      <br>
      NFMS-FIP connects evidence from Earth observation, inventories,
      field surveys, GIS, UAVs and other information sources.
    </div>
  </div>`;
}
