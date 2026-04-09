import { EVHero } from './EVHero';
import { EVIntro } from './EVIntro';
import { EVBenefits } from './EVBenefits';
import { EVProcess } from './EVProcess';
import { EVFAQ } from './EVFAQ';
import { EVTrustBar } from './EVTrustBar';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';

const EV_FAQS = [
  {
    question: 'What kinds of residential jobs do you handle?',
    answer:
      'JA Electric handles residential service calls, repairs, renovations, lighting, garage power, smart home work, generators, surge protection, and home electrical upgrades.',
  },
  {
    question: 'Do you work on renovations, additions, and garages?',
    answer:
      'Yes. JA Electric supports renovation work, additions, garages, detached shops, and the new circuits needed to keep those projects working safely.',
  },
  {
    question: 'Can you help with acreage and detached building power?',
    answer:
      'Yes. JA Electric works on homes, acreages, shops, barns, and other support buildings that need dependable wiring, service upgrades, lighting, or outdoor power distribution.',
  },
  {
    question: 'How quickly can I get a quote?',
    answer:
      'JA Electric encourages homeowners to call or send project details so the team can review the scope and recommend the right next step.',
  },
  {
    question: 'Do you offer emergency residential repair?',
    answer:
      'Yes. JA Electric advertises 24-hour service and quick turnaround for urgent electrical issues.',
  },
  {
    question: 'Can you update older homes?',
    answer:
      'Yes. Older homes often need service upgrades, safer distribution, renovation wiring, or general modernization, and JA Electric can help map out the right upgrade path.',
  },
  {
    question: 'Do you serve communities outside Steinbach?',
    answer:
      'Yes. JA Electric is based in Steinbach and advertises service across a broad 300 kilometre area. If your property is outside town, contact the team and they will confirm the best next step.',
  },
  {
    question: 'Do you stand behind your residential work?',
    answer:
      'Yes. JA Electric emphasizes safe workmanship, quality results, and customer satisfaction on residential projects.',
  },
];

export function EVChargerPage() {
  return (
    <>
      <SEO
        title="Residential Electrical | JA Electric | Steinbach"
        description="Residential electrical services from JA Electric in Steinbach and the surrounding region, including repairs, renovations, smart homes, generators, surge protection, and upgrades."
        canonical="/residential-electrical"
      />
      <JsonLd schema={serviceSchema({
        name: 'Residential Electrical',
        description: 'Residential electrical services for homes, acreages, garages, shops, renovations, smart homes, generators, and upgrades across Steinbach and the surrounding region.',
        url: 'https://jaelectricinc.ca/residential-electrical',
        serviceType: 'Residential Electrical',
      })} />
      <JsonLd schema={faqPageSchema(EV_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Residential Electrical', path: '/residential-electrical' },
      ])} />
      <main>
        <EVHero />
        <EVTrustBar />
        <EVIntro />
        <EVBenefits />
        <EVProcess />
        <EVFAQ />
        <ContactCTA />
      </main>
    </>
  );
}
