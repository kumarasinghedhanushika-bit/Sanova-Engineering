import { site } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    description: site.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/opengraph-image.png`,
    telephone: site.contact.phone,
    email: site.contact.email,
    openingHours: "Mo-Sa 08:00-18:00",
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    address: { "@type": "PostalAddress", addressCountry: "LK" },
    sameAs: [site.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}