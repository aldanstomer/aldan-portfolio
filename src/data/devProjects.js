const idfImg = Object.values(
  import.meta.glob("../assets/dev/idf/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const digicertImg = Object.values(
  import.meta.glob("../assets/dev/digicert/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const dfhImg = Object.values(
  import.meta.glob("../assets/dev/dfh/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const discoverfhImg = Object.values(
  import.meta.glob("../assets/dev/discover-fh/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

export const devProjects = [
  {
    slug: "idf",
    type: "dev",
    title: "Caribbean Rainfall IDF Data Explorer",
    image: idfImg[0],
    featured: true,
    category: "Web Application",
    client: "Caribbean Development Bank & Caribbean Institute for Meteorology and Hydrology",
    year: "2026",
    summary: "A collaboration with the Caribbean Development Bank and CIMH, this is an interactive application for exploring rainfall data across 19 Caribbean nations, supporting climate analysis and engineering decision-making.",
    tools: [
      "Vue.js",
      "Leaflet",
      "Tailwind CSS",
      "PocketBase"
    ],
    role: "Full-Stack Developer",
    problem: "Stakeholders needed a more accessible way to view and interact with rainfall station data and associated IDF information across the Caribbean.",
    solution: "Built a web interface that maps stations, filters results by country and duration, and presents IDF data in a clean, interactive format.",
    features: [
      "Interactive map-based grid lookup",
      "Country, scenario, and duration filtering",
      "Graph and tabular view",
      "API key intergration for external use"
    ],
    links: {
      live: "",
      github: ""
    },
    gallery: idfImg
  },

  {
    slug: "digicert",
    type: "dev",
    title: "DigiCert",
    image: digicertImg[0],
    featured: true,
    category: "Blockchain Application",
    client: "Caribbean Institute for Meteorology and Hydrology",
    year: "2024",
    summary: "A permissioned blockchain system for securely issuing, storing, and verifying digital academic certificates and instrument calibration certifications.",
    tools: [
      "Hyperledger Fabric",
      "Node.js",
      "HTML",
      "Tailwind CSS"
    ],
    role: "Software Developer",
    problem: "Certificate verification for institute courses and instrument validation processes were vulnerable to inefficiency and fraud, with no easy way to securely validate credentials.",
    solution: "Built a blockchain permissioned platform that enabled trusted issuance and verification across participating departments.",
    features: [
      "Secure certificate storage",
      "Verification architecture",
      "Permissioned blockchain architecture",
      "Multi-department support"
    ],
    links: {
      live: "",
      github: ""
    },
    gallery: digicertImg
  },

  {
    slug: "dfh",
    type: "dev",
    title: "DFH Productions",
    image: dfhImg[0],
    featured: false,
    category: "Business Website",
    client: "Dive Fair Helen",
    year: "2025",
    summary: "A media-focused website created to showcase productions, services, and promotional content for a videography brand.",
    tools: [
      "Wix",
    ],
    role: "Developer / Designer",
    problem: "The brand needed a stronger online presence to present its media work professionally and support future client engagement.",
    solution: "Designed and developed a responsive portfolio-style website focused on visual storytelling and service presentation.",
    features: [
      "Responsive layout",
      "Project showcase sections",
      "Modern UI/UX",
      "Service presentation"
    ],
    links: {
      live: "https://www.dfhproductions.com",
      github: ""
    },
    gallery: dfhImg
  },

  {
    slug: "discover-fh",
    type: "dev",
    title: "Discover Fair Helen",
    image: discoverfhImg[0],
    featured: false,
    category: "Tourism Platform",
    client: "Dive Fair Helen",
    year: "2025",
    summary: "A tourism web platform built to promote experiences, tours, and digital visibility for St. Lucian offerings.",
    tools: [
      "Wix"
    ],
    role: "Developer / Designer",
    problem: "The business needed a modern digital platform to better market tours and eventually support bookings and promotions online.",
    solution: "Developed a scalable platform structure designed to showcase tours, support marketing, and prepare for future booking functionality.",
    features: [
      "Tour showcase pages",
      "Responsive design",
      "Marketing-focused structure"
    ],
    links: {
      live: "",
      github: ""
    },
    gallery: discoverfhImg
  }
]