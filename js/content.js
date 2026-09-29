const MENU = {
  about: {
    title: "About NFMS",
    icon: "fa-circle-info",
    groups: [
      {title:"About NFMS", items:[
        ["What is NFMS?","what-is-nfms"],["NFMS Framework","nfms-framework"],
        ["Institutional Framework","institutional-framework"],["Governance Structure","governance-structure"],
        ["Policies & Legal Framework","policies-legal-framework"],["Partners","partners"]
      ]}
    ]
  },
  monitoring: {
    title:"Forest Monitoring", icon:"fa-tree",
    groups:[
      {title:"Satellite Land Monitoring System (SLMS)",items:[
        ["Forest Cover Mapping","forest-cover-mapping"],["Land Cover Mapping","land-cover-mapping"],
        ["Forest Change","forest-change"],["Deforestation","deforestation"],
        ["Forest Degradation","forest-degradation"],["Forest Alerts","forest-alerts"],["Fire Monitoring","fire-monitoring"]
      ]},
      {title:"National Forest Inventory (NFI)",items:[
        ["Inventory Design","inventory-design"],["Field Data Collection","field-data-collection"],
        ["Forest Resources","forest-resources"],["Biomass","biomass"],["Carbon Stocks","carbon-stocks"],["NFI Results","nfi-results"]
      ]},
      {title:"Forest Monitoring Technologies",items:[
        ["Remote Sensing","remote-sensing"],["GIS","gis"],["UAV/Drone","uav-drone"],
        ["LiDAR","lidar"],["AI & Machine Learning","ai-machine-learning"],["Forest Monitoring Indicators","forest-monitoring-indicators"]
      ]}
    ]
  },
  mrv: {title:"MRV & Climate",icon:"fa-cloud",groups:[{title:"MRV & Climate",items:[
    ["MRV Framework","mrv-framework"],["Forest Carbon Monitoring","forest-carbon-monitoring"],["GHG Inventory","ghg-inventory"],
    ["FREL/FRL","frel-frl"],["REDD+","redd-plus"],["Climate Reporting","climate-reporting"]
  ]}]},
  maps:{title:"Forest Data & Maps",icon:"fa-map",groups:[{title:"Forest Data & Maps",items:[
    ["Interactive Maps","interactive-maps"],["Forest Dashboards","forest-dashboards"],["Forest Data Explorer","forest-data-explorer"],
    ["Restoration & Tree Growing","restoration-tree-growing"],["County Forest Information","county-forest-information"]
  ]}]},
  reporting:{title:"Reporting & Submissions",icon:"fa-file-lines",groups:[{title:"Reporting & Submissions",items:[
    ["National Forest Reporting","national-forest-reporting"],["Climate Reporting","climate-reporting-submissions"],
    ["REDD+ Reporting","redd-reporting"],["International Reporting","international-reporting"]
  ]}]},
  knowledge:{title:"Data & Knowledge",icon:"fa-database",groups:[{title:"Data & Knowledge",items:[
    ["NFMS Definitions & Data Standards","data-standards"],["Data Catalogue","data-catalogue"],["Metadata Catalogue","metadata-catalogue"],
    ["Data Access & Download","data-access-download"],["Data Services & APIs","data-services-apis"],
    ["Knowledge Resources","knowledge-resources"],["Capacity Development","capacity-development"]
  ]}]},
  quality:{title:"Quality & Transparency",icon:"fa-shield-halved",groups:[{title:"Quality & Transparency",items:[
    ["QA/QC","qa-qc"],["Accuracy Assessment","accuracy-assessment"],["Uncertainty Assessment","uncertainty-assessment"],
    ["Validation & Verification","validation-verification"],["Transparency & Documentation","transparency-documentation"]
  ]}]},
  safeguards:{title:"Safeguards & Governance",icon:"fa-users",groups:[{title:"Safeguards & Governance",items:[
    ["REDD+ Safeguards","redd-safeguards"],["Data Governance","data-governance"],["Data Protection & Security","data-protection"],
    ["Stakeholder Engagement","stakeholder-engagement"],["Grievance & Feedback","grievance-feedback"]
  ]}]},
  news:{title:"News & Events",icon:"fa-calendar-days",groups:[{title:"News & Events",items:[
    ["News","news"],["Events","events"],["Media Gallery","media-gallery"]
  ]}]},
  support:{title:"Contact & Support",icon:"fa-envelope",groups:[{title:"Contact & Support",items:[
    ["Contact Us","contact-us"],["Help Centre","help-centre"],["Feedback","feedback"]
  ]}]}
};

const PAGE_COPY = {
  "what-is-nfms":["What is NFMS?","The National Forest Monitoring System (NFMS) is the national framework for collecting, managing, analysing and disseminating forest information to support sustainable forest management, climate action, reporting and evidence-based decision-making in Kenya."],
  "nfms-framework":["NFMS Framework","The NFMS brings together forest inventory, satellite Earth observation, field data, GIS, UAV technologies, forest alerts, carbon monitoring, reporting and information management within a coordinated national framework."],
  "institutional-framework":["Institutional Framework","This section describes the roles of national institutions, technical agencies, counties, research organisations, development partners and other stakeholders contributing to Kenya's forest monitoring and information system."],
  "governance-structure":["Governance Structure","The governance structure provides the institutional arrangements, responsibilities, review processes and coordination mechanisms required to maintain credible and useful national forest information."],
  "policies-legal-framework":["Policies & Legal Framework","This section provides the policy, legislative and regulatory context relevant to forest monitoring, data management, climate reporting, safeguards and information sharing."],
  "partners":["Partners","NFMS implementation depends on collaboration among government institutions, research organisations, universities, counties, development partners, communities and technical agencies."],
  "forest-cover-mapping":["Forest Cover Mapping","Access information on forest cover mapping methods, datasets, classifications, change assessment and national forest-cover products."],
  "land-cover-mapping":["Land Cover Mapping","Explore national land-cover mapping approaches, classification systems, reference data and derived forest information products."],
  "forest-change":["Forest Change","Monitor spatial and temporal changes in forest and tree cover using satellite Earth observation, field observations and other geospatial evidence."],
  "deforestation":["Deforestation","Explore approaches for detecting and documenting forest loss, including satellite change detection, alert systems and field verification."],
  "forest-degradation":["Forest Degradation","Information on monitoring gradual or selective changes in forest condition using remote sensing, field observations and supporting datasets."],
  "forest-alerts":["Forest Alerts","A dedicated space for forest disturbance alerts, verification workflows, field observations, maps and dashboards."],
  "fire-monitoring":["Fire Monitoring","Monitor forest and landscape fires using satellite observations, field reports, spatial analysis and operational dashboards."],
  "inventory-design":["Inventory Design","Information on National Forest Inventory design, sampling strategies, field protocols and statistical considerations."],
  "field-data-collection":["Field Data Collection","Guidance and tools for structured field data collection, mobile surveys, geolocation, measurements, photographs and quality control."],
  "forest-resources":["Forest Resources","Information on forest resources, ecosystem characteristics, composition, structure and spatial distribution."],
  "biomass":["Biomass","Forest biomass datasets, estimation approaches and information products supporting carbon accounting and resource assessment."],
  "carbon-stocks":["Carbon Stocks","Information supporting estimation, monitoring and reporting of forest carbon stocks and changes."],
  "nfi-results":["NFI Results","A repository for National Forest Inventory results, maps, tables, indicators and supporting documentation."],
  "remote-sensing":["Remote Sensing","Earth observation methods and datasets supporting forest mapping, monitoring, change detection and environmental assessment."],
  "gis":["GIS","Geographic Information Systems provide the spatial database, analysis, mapping and decision-support capabilities of the NFMS."],
  "uav-drone":["UAV/Drone","UAV and drone workflows for high-resolution forest monitoring, verification, mapping, inventory support and targeted field assessment."],
  "lidar":["LiDAR","LiDAR technologies for forest structure, terrain, biomass and high-resolution three-dimensional assessment."],
  "ai-machine-learning":["AI & Machine Learning","AI and machine-learning methods can support automated feature extraction, change detection, classification, alert prioritisation and quality assurance."],
  "forest-monitoring-indicators":["Forest Monitoring Indicators","Core indicators used to assess forest extent, condition, change, carbon, restoration and related monitoring outcomes."],
  "mrv-framework":["MRV Framework","The Measurement, Reporting and Verification framework supports credible, transparent and consistent forest and climate information."],
  "forest-carbon-monitoring":["Forest Carbon Monitoring","Methods and data supporting monitoring of forest carbon stocks, removals, emissions and changes over time."],
  "ghg-inventory":["GHG Inventory","Information supporting greenhouse gas inventory preparation, forest-sector activity data, emission factors and reporting."],
  "frel-frl":["FREL/FRL","Information on Forest Reference Emission Levels and Forest Reference Levels, including methods, data and reporting context."],
  "redd-plus":["REDD+","Information on reducing emissions from deforestation and forest degradation, conservation, sustainable management and enhancement of forest carbon stocks."],
  "climate-reporting":["Climate Reporting","Forest-related climate reporting, datasets, indicators and supporting information for national and international processes."],
  "interactive-maps":["Interactive Maps","Explore interactive spatial information for forest cover, forest change, alerts, restoration, inventories and other NFMS datasets."],
  "forest-dashboards":["Forest Dashboards","Operational dashboards provide summaries, indicators, trends, alerts and maps for forest monitoring and management."],
  "forest-data-explorer":["Forest Data Explorer","Search and explore available forest datasets, layers, indicators and information products."],
  "restoration-tree-growing":["Restoration & Tree Growing","Information and spatial products supporting forest restoration, tree growing, survival monitoring and restoration planning."],
  "county-forest-information":["County Forest Information","County-level forest information, maps, indicators and resources to support devolved forest planning and management."],
  "national-forest-reporting":["National Forest Reporting","National forest reporting resources, datasets, indicators and documentation."],
  "climate-reporting-submissions":["Climate Reporting","Resources for preparation, review and submission of forest-related climate information."],
  "redd-reporting":["REDD+ Reporting","REDD+ reporting resources, safeguards information, datasets and supporting documentation."],
  "international-reporting":["International Reporting","Information products supporting relevant international forest and climate reporting requirements."],
  "data-standards":["NFMS Definitions & Data Standards","Definitions, classifications, schemas, standards, codes and conventions supporting consistent NFMS data."],
  "data-catalogue":["Data Catalogue","A catalogue of available forest datasets and information products, with descriptions, ownership and access information."],
  "metadata-catalogue":["Metadata Catalogue","Metadata provides information on dataset origin, quality, extent, temporal coverage, coordinate reference system and responsible institution."],
  "data-access-download":["Data Access & Download","Find datasets and information products available for viewing, download or approved access."],
  "data-services-apis":["Data Services & APIs","Machine-readable services and APIs for connecting NFMS data with approved applications, maps, dashboards and analytical workflows."],
  "knowledge-resources":["Knowledge Resources","Guidelines, reports, manuals, technical papers, maps and other knowledge resources supporting forest monitoring."],
  "capacity-development":["Capacity Development","Training materials, technical guidance, workshops and learning resources for NFMS users and practitioners."],
  "qa-qc":["QA/QC","Quality assurance and quality control processes help ensure that NFMS data and information products are consistent, traceable and fit for purpose."],
  "accuracy-assessment":["Accuracy Assessment","Methods and results for assessing thematic, positional and classification accuracy of forest information products."],
  "uncertainty-assessment":["Uncertainty Assessment","Documentation of uncertainty sources, estimation methods and interpretation for key forest and carbon estimates."],
  "validation-verification":["Validation & Verification","Independent or structured review processes supporting confidence in datasets, maps, alerts and reported results."],
  "transparency-documentation":["Transparency & Documentation","Methods, assumptions, datasets, workflows and supporting documents that enable users to understand and assess NFMS information."],
  "redd-safeguards":["REDD+ Safeguards","Information supporting the application, monitoring and reporting of REDD+ safeguards."],
  "data-governance":["Data Governance","Data ownership, stewardship, access classifications, sharing arrangements, quality responsibilities and governance processes."],
  "data-protection":["Data Protection & Security","Principles and procedures for responsible data handling, access control, security, privacy and protection of information assets."],
  "stakeholder-engagement":["Stakeholder Engagement","Information on stakeholder participation, consultation, coordination and engagement within forest monitoring and management."],
  "grievance-feedback":["Grievance & Feedback","Channels for submitting feedback, concerns, suggestions and grievances related to NFMS information and services."],
  "news":["News","Latest NFMS-related announcements, developments, publications and updates."],
  "events":["Events","Upcoming and past NFMS workshops, training, consultations, technical meetings and other events."],
  "media-gallery":["Media Gallery","Photographs, videos, maps and visual resources from forest monitoring activities."],
  "contact-us":["Contact Us","Contact the responsible NFMS-FIP support and coordination team for information, collaboration and technical enquiries."],
  "help-centre":["Help Centre","Guidance for using NFMS-FIP maps, dashboards, data services, downloads and other portal functions."],
  "feedback":["Feedback","Send suggestions, observations and feedback to help improve NFMS-FIP services and information products."]
};

const ICONS = {
  "What is NFMS?":"fa-circle-info","NFMS Framework":"fa-sitemap","Institutional Framework":"fa-building-columns","Governance Structure":"fa-diagram-project",
  "Policies & Legal Framework":"fa-scale-balanced","Partners":"fa-handshake","Forest Cover Mapping":"fa-tree","Land Cover Mapping":"fa-layer-group",
  "Forest Change":"fa-arrows-rotate","Deforestation":"fa-scissors","Forest Degradation":"fa-chart-line","Forest Alerts":"fa-bell",
  "Fire Monitoring":"fa-fire","Inventory Design":"fa-table-list","Field Data Collection":"fa-mobile-screen-button","Forest Resources":"fa-leaf",
  "Biomass":"fa-weight-hanging","Carbon Stocks":"fa-cloud","NFI Results":"fa-chart-column","Remote Sensing":"fa-satellite",
  "GIS":"fa-map","UAV/Drone":"fa-helicopter","LiDAR":"fa-cube","AI & Machine Learning":"fa-robot","Forest Monitoring Indicators":"fa-gauge-high"
};
