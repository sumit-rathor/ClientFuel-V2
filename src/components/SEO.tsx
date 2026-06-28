import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: any;
  robots?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "https://clientfuel.in/og-image.jpg", // Default OG image
  schema,
  robots = "index, follow",
}) => {
  const siteUrl = "https://clientfuel.in";
  const fullUrl = `${siteUrl}${canonicalPath}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ClientFuel",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://twitter.com/clientfuel",
      "https://facebook.com/clientfuel",
      "https://instagram.com/clientfuel"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title} | ClientFuel - Web Design Agency India</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:site_name" content="ClientFuel" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Theme & PWA */}
      <meta name="theme-color" content="#fb5c01" />
      <meta name="application-name" content="ClientFuel" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ClientFuel" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
