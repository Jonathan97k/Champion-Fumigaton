export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Champion Fumigation Services",
    image: "https://championfumigation.com/logo.jpg",
    url: "https://championfumigation.com",
    telephone: "+265-999-000-000",
    email: "info@championfumigation.com",
    description: "Industry-leading pest control and fumigation services in Malawi. Certified experts delivering uncompromising protection for homes, businesses, and agricultural assets.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lilongwe",
      addressRegion: "Central Region",
      addressCountry: "MW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -13.9626,
      longitude: 33.7741,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://web.facebook.com/profile.php?id=61582822649551",
    ],
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Lilongwe",
      },
      {
        "@type": "City",
        name: "Kanengo",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Control Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Termite Proofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rodent Control" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agricultural Fumigation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Indoor Residual Spraying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Herbicide Spraying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Spraying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hygiene Solutions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bee Removal" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
