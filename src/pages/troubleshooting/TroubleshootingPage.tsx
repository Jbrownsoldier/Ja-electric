import { TroubleHero } from './TroubleHero';
import { TroubleTrustBar } from './TroubleTrustBar';
import { TroubleIssues } from './TroubleIssues';
import { TroubleWhyFast } from './TroubleWhyFast';
import { TroubleProcess } from './TroubleProcess';
import { TroubleFAQ } from './TroubleFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const TROUBLE_FAQS = [
  {
    question: 'What does JA Electric include in preventative maintenance?',
    answer:
      'JA Electric includes maintenance, inspections, infra-red scanning, underground cable locating, repairs, and broader service support for residential, commercial, agricultural, and specialty systems.',
  },
  {
    question: 'Do you offer emergency electrical repair?',
    answer:
      'Yes. Emergency repair is part of JA Electric’s service mix, backed by 24-hour service for urgent electrical issues.',
  },
  {
    question: 'Can you help with hard-to-diagnose recurring issues?',
    answer:
      'Yes. JA Electric approaches recurring issues with careful diagnosis, practical repair planning, and a focus on long-term reliability rather than guesswork.',
  },
  {
    question: 'Which types of properties do you service for maintenance calls?',
    answer:
      'JA Electric works across residential, commercial, agricultural, and specialty environments throughout its regional service area.',
  },
  {
    question: 'Do you only handle emergencies, or can we schedule planned service too?',
    answer:
      'Both. JA Electric covers emergency repair as well as scheduled service, preventative maintenance, inspections, and upgrade planning for customers who want to reduce downtime before an emergency happens.',
  },
  {
    question: 'Can you support underground work and line location?',
    answer:
      'Yes. Underground cable locating is part of JA Electric’s maintenance-oriented offering, making it a strong fit for excavation, upgrades, and site changes that require safer underground coordination.',
  },
  {
    question: 'How do quotes work for service and repair requests?',
    answer:
      'JA Electric reviews the issue, the site conditions, and the right next step so the quote reflects the actual work required.',
  },
  {
    question: 'Do you work outside Steinbach for maintenance requests?',
    answer:
      `Yes. ${company.name} is based in Steinbach and serves a broad regional area, so the maintenance and emergency-repair positioning on this page extends beyond the city itself.`,
  },
];

export function TroubleshootingPage() {
  return (
    <>
      <SEO
        title="Maintenance & Emergency Repair | JA Electric"
        description="Maintenance, emergency repair, inspections, infra-red scanning, and underground cable locating services from JA Electric across Steinbach and the surrounding region."
        canonical="/maintenance-repair"
      />
      <JsonLd schema={serviceSchema({
        name: 'Preventative Maintenance & Emergency Repair',
        description: 'Maintenance, emergency repair, inspections, infra-red scanning, and underground cable locating services for residential, commercial, agricultural, and specialty properties across the surrounding region.',
        url: `${company.siteUrl}/maintenance-repair`,
        serviceType: 'Electrical Maintenance',
      })} />
      <JsonLd schema={faqPageSchema(TROUBLE_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Maintenance & Emergency Repair', path: '/maintenance-repair' },
      ])} />
      <main>
        <TroubleHero />
        <TroubleTrustBar />
        <TroubleIssues />
        <TroubleWhyFast />
        <TroubleProcess />
        <TroubleFAQ />
        <ContactCTA />
      </main>
    </>
  );
}
