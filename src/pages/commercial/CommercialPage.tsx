import { CommercialHero } from './CommercialHero';
import { CommercialTrustBar } from './CommercialTrustBar';
import { CommercialServices } from './CommercialServices';
import { CommercialWhyChoose } from './CommercialWhyChoose';
import { CommercialProcess } from './CommercialProcess';
import { CommercialFAQ } from './CommercialFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const COMMERCIAL_FAQS = [
  {
    question: 'What types of commercial properties do you work on?',
    answer:
      'JA Electric supports a wide range of commercial properties that need dependable electrical installations, maintenance, and project support.',
  },
  {
    question: 'Do you handle maintenance contracts as well as new builds?',
    answer:
      'Yes. JA Electric supports clients from maintenance work to new build and design-build style commercial scopes, with a start-to-finish approach that protects schedules and quality.',
  },
  {
    question: 'What kinds of commercial systems does JA Electric support?',
    answer:
      'JA Electric supports installations, maintenance, upgrades, lighting, repairs, and practical electrical solutions for commercial properties.',
  },
  {
    question: 'Can you take on complete start-to-finish commercial projects?',
    answer:
      'Yes. JA Electric provides a full start-to-finish experience for commercial clients, from maintenance support through larger new-build and project scopes.',
  },
  {
    question: 'Do you support urgent commercial service needs?',
    answer:
      'Yes. JA Electric advertises 24-hour service and quick turnaround for urgent commercial electrical issues.',
  },
  {
    question: 'Do you only work in Steinbach?',
    answer:
      `No. ${company.name} is based in Steinbach and serves a broad regional area, including commercial clients in surrounding communities that need local project and service support.`,
  },
  {
    question: 'How are commercial projects quoted?',
    answer:
      'JA Electric reviews the site, the scope, and the best-fit solution so the quote reflects the real project requirements.',
  },
  {
    question: 'What sets JA Electric apart for commercial work?',
    answer:
      'JA Electric stands out through licensed electricians, responsive service, practical planning, and a strong commitment to quality, safety, and customer satisfaction.',
  },
];

export function CommercialPage() {
  return (
    <>
      <SEO
        title="Commercial Electrical Contractor | JA Electric"
        description="Commercial electrical contractor for maintenance, new build, upgrades, lighting, repairs, and project support across Steinbach and the surrounding region."
        canonical="/commercial-electrical"
      />
      <JsonLd schema={serviceSchema({
        name: 'Commercial Electrical Services',
        description: 'Commercial electrical maintenance, new build, upgrades, lighting, repairs, and project support for properties across Steinbach and the surrounding region.',
        url: `${company.siteUrl}/commercial-electrical`,
        serviceType: 'Commercial Electrical',
      })} />
      <JsonLd schema={faqPageSchema(COMMERCIAL_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Commercial Electrical', path: '/commercial-electrical' },
      ])} />
      <main>
        <CommercialHero />
        <CommercialTrustBar />
        <CommercialServices />
        <CommercialWhyChoose />
        <CommercialProcess />
        <CommercialFAQ />
        <ContactCTA />
      </main>
    </>
  );
}
