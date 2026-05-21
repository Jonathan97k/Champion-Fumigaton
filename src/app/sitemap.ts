const BASE_URL = "https://championfumigation.com";

const servicePages = [
  "termite-proofing",
  "rodent-control",
  "agricultural-fumigation",
  "indoor-residual-spraying",
  "herbicide-spraying",
  "industrial-spraying",
  "hygiene-solutions",
  "bee-removal",
];

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/services",
    ...servicePages.map((s) => `/services/${s}`),
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1.0 : 0.8,
  }));
}
