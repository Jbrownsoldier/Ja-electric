import { RewiringHero } from './RewiringHero';
import { RewiringTrustBar } from './RewiringTrustBar';
import { RewiringWhenNeeded } from './RewiringWhenNeeded';
import { RewiringRenovation } from './RewiringRenovation';
import { RewiringBenefits } from './RewiringBenefits';
import { RewiringFAQ } from './RewiringFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const REWIRING_FAQS = [
  {
    question: 'What kinds of agricultural electrical work do you handle?',
    answer:
      'Agricultural electrical is a core JA Electric service line, including farm service, outbuilding power, repairs, maintenance, upgrades, and broader farm-related support.',
  },
  {
    question: 'Do you work on seed plants and feed mills?',
    answer:
      'JA Electric serves agricultural properties that need reliable electrical support for barns, shops, pumps, outbuildings, and other farm-related systems.',
  },
  {
    question: 'Do you provide both maintenance and new agricultural installs?',
    answer:
      'Yes. JA Electric’s agricultural offering works for both active-facility service needs and expansion or new-construction scopes.',
  },
  {
    question: 'Can JA Electric help with barns, shops, and other farm structures?',
    answer:
      'Yes. JA Electric supports barns, shops, feed systems, irrigation support, and other farm-related electrical work.',
  },
  {
    question: 'How quickly can we get help for an agricultural electrical issue?',
    answer:
      'JA Electric notes its 24-hour service and quick turnaround for urgent situations, which also applies to agricultural calls.',
  },
  {
    question: 'Do you only work in Steinbach?',
    answer:
      `No. ${company.name} is based in Steinbach and serves a broad regional area, including surrounding communities and agricultural sites that need dependable electrical support.`,
  },
  {
    question: "What's included in an agricultural electrical quote?",
    answer:
      'JA Electric reviews the site, the operating needs, and the right fit for the project so the quote reflects the actual work required.',
  },
  {
    question: 'Can you support agricultural expansions and new builds?',
    answer:
      'Yes. JA Electric supports agricultural expansions, new structures, and system upgrades where dependable planning and installation matter.',
  },
];

export function RewiringPage() {
  return (
    <>
      <SEO
        title="Agricultural Electrical Services | JA Electric"
        description="Agricultural electrical services for farms, shops, outbuildings, pumps, and expanding facilities across Steinbach and the surrounding region."
        canonical="/agricultural-electrical"
      />
      <JsonLd schema={serviceSchema({
        name: 'Agricultural Electrical Services',
        description: 'Agricultural electrical maintenance, repair, upgrades, and expansion support for barns, shops, outbuildings, and farm facilities across Steinbach and the surrounding region.',
        url: `${company.siteUrl}/agricultural-electrical`,
        serviceType: 'Agricultural Electrical',
      })} />
      <JsonLd schema={faqPageSchema(REWIRING_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Agricultural Electrical', path: '/agricultural-electrical' },
      ])} />
      <main>
        <RewiringHero />
        <RewiringTrustBar />
        <RewiringWhenNeeded />
        <RewiringRenovation />
        <RewiringBenefits />
        <RewiringFAQ />
        <ContactCTA />
      </main>
    </>
  );
}
