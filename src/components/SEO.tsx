import { Helmet } from 'react-helmet-async';
import { company } from '../config/company';

const SITE_NAME = company.legalName;
const SITE_URL = company.siteUrl;
const DEFAULT_OG_IMAGE = `${SITE_URL}${company.ogImage}`;

interface SEOProps {
  title: string;
  description: string;
  /** Path only, e.g. '/' or '/ev-charger' — component builds the full URL */
  canonical: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  canonical,
  robots = 'index, follow',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOProps) {
  const fullCanonical = `${SITE_URL}${canonical}`;
  const resolvedRobots = noindex ? 'noindex, nofollow' : robots;

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content={resolvedRobots} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:url" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${company.name} branded social share image`} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:type" content="image/jpeg" />
      <meta name="twitter:image:alt" content={`${company.name} branded social share image`} />
    </Helmet>
  );
}
