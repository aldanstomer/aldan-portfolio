import image1 from "../assets/7371.jpeg"

const nicPostersImg = Object.values(
  import.meta.glob("../assets/designs/nic-tm-posters/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const cyenPostersImg = Object.values(
  import.meta.glob("../assets/designs/cyen-posters/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const dfhPostersImg = Object.values(
  import.meta.glob("../assets/designs/dfh-posters/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

const dfhLogosImg = Object.values(
  import.meta.glob("../assets/designs/dfh-logos/*.{jpg,JPG,png}", {
    eager: true,
    import: "default",
  })
)

export const designProjects = [
  {
    slug: "cyen-posters",
    type: "design",
    title: "CYEN Barbados",
    image: cyenPostersImg[0],
    badge: "Featured",
    category: "Poster Design & Marketing",
    client: "CYEN Barbados",
    year: "2025",
    summary: "Designs to support youth environmental events and campaigns.",
    tools: ["Affinity Designer"],
    gallery: cyenPostersImg,
  },
  {
    slug: "nic-tm-posters",
    type: "design",
    title: "NIC Toastmasters",
    image: nicPostersImg[6],
    badge: "Featured",
    category: "Poster Design",
    client: "NIC Toastmasters Club",
    year: "2025",
    summary: "Designs for club communication and event promotion.",
    tools: ["Canva", "Adobe Photoshop"],
    gallery: nicPostersImg,
  },
  {
    slug: "dfh-posters",
    type: "design",
    title: "DFH Kayaking",
    image: dfhPostersImg[0],
    badge: "Featured",
    category: "Tourism Marketing",
    client: "DFH Kayaking",
    year: "2025",
    summary: "Tourism promotional graphics for kayaking and excursion marketing.",
    tools: ["Affinity Designer", "Adobe Photoshop"],
    gallery: dfhPostersImg,
  },
  {
    slug: "dfh-logo",
    type: "design",
    title: "Dive Fair Helen",
    image: dfhLogosImg[0],
    badge: "Featured",
    category: "Logo Rebuild",
    client: "Dive Fair Helen",
    year: "2025",
    summary: "A rebuilt vector logo based on an older low-resolution mark.",
    tools: ["Affinity Designer"],
    gallery: dfhLogosImg,
  },
]