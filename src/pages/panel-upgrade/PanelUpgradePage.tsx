import { PanelHero } from './PanelHero';
import { PanelTrustBar } from './PanelTrustBar';
import { PanelProblemSolution } from './PanelProblemSolution';
import { PanelSigns } from './PanelSigns';
import { PanelProcess } from './PanelProcess';
import { PanelTrust } from './PanelTrust';
import { PanelFAQ } from './PanelFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const PANEL_FAQS = [
  {
    question: 'What kinds of specialty electrical projects do you take on?',
    answer:
      'JA Electric supports specialty scopes such as design builds, generators, network and communications work, audio, directional boring, bucket truck service, project budgeting, and project management.',
  },
  {
    question: 'Do you handle maintenance as well as new specialty installs?',
    answer:
      'Yes. JA Electric provides specialty installations alongside maintenance, repairs, underground cable locating, and practical project support.',
  },
  {
    question: 'Can JA Electric support design-build specialty projects?',
    answer:
      'Yes. JA Electric positions design builds and specialty planning as core capabilities, tailoring systems to the property scope, site conditions, and operational requirements.',
  },
  {
    question: 'How quickly can we get help in an emergency?',
    answer:
      'JA Electric highlights 24-hour service and quick turnaround for urgent situations, with support available across the surrounding regional service area.',
  },
  {
    question: 'Do you work only in Steinbach?',
    answer:
      `No. ${company.name} is based in Steinbach and serves a broad regional area, including communities within roughly 300 kilometres.`,
  },
  {
    question: 'What is included in a specialty project quote?',
    answer:
      'JA Electric reviews the scope, the site conditions, and the best fit for the project so the quote reflects the real work required.',
  },
  {
    question: 'Do you take on complex specialty projects?',
    answer:
      'Yes. JA Electric takes on complex specialty scopes that need experienced planning, coordination, and follow-through.',
  },
  {
    question: 'What kinds of specialty systems do you commonly help with?',
    answer:
      'Common specialty scopes include generators, communications, audio, directional boring, bucket truck service, design builds, project budgeting, and project management support.',
  },
];

export function PanelUpgradePage() {
  return (
    <>
      <SEO
        title="Specialty Electrical Services | JA Electric | Steinbach"
        description="Specialty electrical services from JA Electric in Steinbach, including design builds, generators, communications, audio, directional boring, bucket truck service, and project support."
        canonical="/specialty-electrical"
      />
      <JsonLd schema={serviceSchema({
        name: 'Specialty Electrical Services',
        description: 'Specialty electrical support including design builds, generators, communications, audio, directional boring, bucket truck service, and project support across Steinbach and the surrounding region.',
        url: `${company.siteUrl}/specialty-electrical`,
        serviceType: 'Specialty Electrical',
      })} />
      <JsonLd schema={faqPageSchema(PANEL_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Specialty Electrical', path: '/specialty-electrical' },
      ])} />
      <main>
        <PanelHero />
        <PanelTrustBar />
        <PanelProblemSolution />
        <PanelSigns />
        <PanelProcess />
        <PanelTrust />
        <PanelFAQ />
        <ContactCTA />
      </main>
    </>
  );
}
