export const NGO_NAME = "Rudrapur Youth Welfare Society";
export const NGO_NAME_SHORT = "RYWS";
export const NGO_TAGLINE =
  "Serving Rudrapur and surrounding communities through youth-led welfare, health, and education initiatives since 2017.";

/** Public folder path segment (spaces are valid in Next static URLs). */
export const ngoPhoto = (filename: string) => `/ngo photos/${filename}`;

export const heroImage = ngoPhoto("IMG_20220212_155932.jpg");

export const impactStats = [
  { label: "Established", value: "2017" },
  { label: "Registration", value: "S0036013" },
  { label: "Core programs", value: "4+" },
  { label: "Community events", value: "50+" },
] as const;

export const programs = [
  {
    title: "Blood donation camps",
    description:
      "Voluntary blood donation drives in partnership with local blood banks to save lives across the region.",
    icon: "heart-pulse" as const,
  },
  {
    title: "Cloth & relief distribution",
    description:
      "Distributing clothing and essentials to families who need support, especially during difficult seasons.",
    icon: "shirt" as const,
  },
  {
    title: "Student felicitation",
    description:
      "Honouring meritorious students to encourage education and celebrate achievement in our community.",
    icon: "graduation-cap" as const,
  },
  {
    title: "Health check-up camps",
    description:
      "Free health screenings and consultations with doctors and therapists at community venues.",
    icon: "stethoscope" as const,
  },
] as const;

export const pastWorks = [
  {
    title: "Annual blood donation camp",
    year: "2023",
    description:
      "A voluntary blood donation camp at Rudrapur Radhaballabh High School, held in association with Basirhat Blood Bank.",
    image: ngoPhoto("IMG_20230618_124705.jpg"),
  },
  {
    title: "Community recognition evening",
    year: "2022",
    description:
      "Honouring volunteers and community members who strengthen local welfare work year after year.",
    image: ngoPhoto("2022-10-29-15-23-15-726.jpg"),
  },
  {
    title: "Health & physiotherapy camp",
    year: "2022",
    description:
      "Free consultations and health awareness sessions under a community pandal with local medical partners.",
    image: ngoPhoto("IMG_20220212_143450.jpg"),
  },
  {
    title: "Relief & outreach",
    year: "2021",
    description:
      "Door-to-door distribution of essentials to families in Rudrapur during the pandemic period.",
    image: ngoPhoto("2021-10-17-00-10-10-797.jpg"),
  },
] as const;

export const testimonials = [
  {
    quote:
      "RYWS brings our neighbourhood together. Their blood donation camps are organised with care and respect for every donor.",
    name: "Community member",
    role: "Blood donation participant",
  },
  {
    quote:
      "When students are felicitated on stage, young people see that hard work is valued. That motivation stays with them.",
    name: "Parent",
    role: "Local guardian",
  },
  {
    quote:
      "Volunteering here taught me responsibility. We plan events, serve people, and learn leadership by doing.",
    name: "Youth volunteer",
    role: "RYWS volunteer",
  },
] as const;

export const galleryImages = [
  {
    src: ngoPhoto("IMG_20230618_124705.jpg"),
    alt: "Annual ceremony with society banner",
  },
  {
    src: ngoPhoto("2022-10-29-15-28-05-043.jpg"),
    alt: "Community felicitation on stage",
  },
  {
    src: ngoPhoto("2022-10-29-15-23-15-726.jpg"),
    alt: "Volunteer recognition event",
  },
  {
    src: ngoPhoto("IMG-20220815-WA0047.jpg"),
    alt: "Honouring a community elder",
  },
  {
    src: ngoPhoto("IMG_20230815_092828.jpg"),
    alt: "Patriotic community observance",
  },
  { src: ngoPhoto("IMG_20220212_143450.jpg"), alt: "Health camp consultation" },
  {
    src: ngoPhoto("2021-10-17-00-10-10-797.jpg"),
    alt: "Relief distribution visit",
  },
  {
    src: ngoPhoto("IMG-20230527-WA0006.jpg"),
    alt: "Blood donation camp poster",
  },
  { src: ngoPhoto("2022-10-29-15-29-25-272.jpg"), alt: "Community gathering" },
  {
    src: ngoPhoto("IMG_20230618_132109.jpg"),
    alt: "Society event proceedings",
  },
  { src: ngoPhoto("IMG_20230923_123045.jpg"), alt: "Field activity" },
  {
    src: ngoPhoto("IMG-20210913-WA0020.jpg"),
    alt: "Early community programme",
  },
] as const;

export const contact = {
  location: "Rudrapur, Baduria, North 24 Parganas, West Bengal",
  registration: "Reg. No. S0036013 of 2023–24",
  email: "contact@ryws.org",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#works", label: "Past works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;
