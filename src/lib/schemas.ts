// Central JSON-LD schema factory — all business data lives here.
// Update this file when contact details or service areas change.

import { company, serviceAreas } from '../config/company';

const BASE_URL = company.siteUrl;

// ── Shared business identity ─────────────────────────────────────

const BUSINESS_IDENTITY = {
  '@type': ['LocalBusiness', 'Electrician'],
  '@id': `${BASE_URL}/#business`,
  name: company.legalName,
  alternateName: company.name,
  description:
    'JA Electric provides residential, commercial, agricultural, specialty, maintenance, repair, inspection, generator, smart home, and underground cable locating services from Steinbach across a 300 kilometre service radius.',
  url: BASE_URL,
  telephone: company.phoneHref,
  email: company.email,
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, E-Transfer',
  openingHours: 'Mo-Su 00:00-24:00',
  foundingDate: company.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.addressLine1,
    addressLocality: company.city,
    addressRegion: company.region,
    postalCode: company.postalCode,
    addressCountry: company.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.5301,
    longitude: -96.6845,
  },
  areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
  image: `${BASE_URL}${company.ogImage}`,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}${company.logo}`,
  },
};

// ── LocalBusiness schema ─────────────────────────────────────────

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    ...BUSINESS_IDENTITY,
  };
}

// ── Organization schema ──────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: company.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}${company.logo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phoneHref,
      contactType: 'customer service',
      areaServed: 'CA',
      availableLanguage: 'English',
    },
  };
}

// ── Global @graph schema (used once in App.tsx) ──────────────────

export function globalSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema(), organizationSchema()],
  };
}

// ── Service schema ───────────────────────────────────────────────

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: company.legalName,
    },
    areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
  };
}

// ── FAQPage schema ───────────────────────────────────────────────

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ── BreadcrumbList schema ────────────────────────────────────────

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };
}

// ── AggregateRating schema ───────────────────────────────────────

export function aggregateRatingSchema(opts: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: company.legalName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: opts.ratingValue,
      bestRating: 5,
      worstRating: 1,
      reviewCount: opts.reviewCount,
    },
  };
}
