import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { HomeServicesPreview } from '../components/HomeServicesPreview';
import { HomeReviewsPreview } from '../components/HomeReviewsPreview';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { faqPageSchema } from '../lib/schemas';

const HOME_FAQS = [
  {
    question: 'Are you locally owned and operated?',
    answer:
      'JA Electric is based in Steinbach and provides electrical services across a broad 300 kilometre service area.',
  },
  {
    question: 'What kinds of electrical work do you handle?',
    answer:
      'JA Electric handles residential, commercial, agricultural, maintenance, repair, inspection, smart home, generator, communications, directional boring, and specialty electrical work.',
  },
  {
    question: 'Are your electricians licensed?',
    answer:
      'Yes. JA Electric highlights licensed electricians and experienced staff committed to safe, reliable workmanship.',
  },
  {
    question: 'Do you handle maintenance and emergency repair?',
    answer:
      'Yes. Maintenance, repairs, inspections, and 24-hour service are part of JA Electric’s offering for clients who need fast support.',
  },
  {
    question: 'Do you work on agricultural facilities?',
    answer:
      'Yes. JA Electric provides agricultural electrical services for farms and facilities that need reliable power, upgrades, repairs, and ongoing support.',
  },
  {
    question: 'Can you take on commercial and industrial projects?',
    answer:
      'Yes. JA Electric supports commercial properties and specialty project scopes with installations, upgrades, maintenance, and design-build style planning.',
  },
  {
    question: 'Do you offer residential electrical services too?',
    answer:
      'Absolutely. JA Electric provides residential service calls, repairs, upgrades, smart home work, generators, surge protection, and renovation support.',
  },
  {
    question: 'How do quotes work?',
    answer:
      'JA Electric encourages clients to call or send project details so the team can review the scope and recommend the right next step.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'JA Electric is based in Steinbach and advertises electrical service across a 300 kilometre area. For nearby communities and rural jobs, the fastest way to confirm coverage is to call or request a quote.',
  },
  {
    question: 'Do you stand behind your work?',
    answer:
      'Yes. JA Electric emphasizes quality, safety, and customer satisfaction on every project.',
  },
];

export function HomePage() {
  return (
    <>
      <SEO
        title="Electrical Services in Steinbach | JA Electric"
        description="JA Electric provides residential, commercial, agricultural, maintenance, and specialty electrical services from Steinbach across a 300 kilometre service area."
        canonical="/"
      />
      <JsonLd schema={faqPageSchema(HOME_FAQS)} />
      <main>
        <Hero />
        <TrustBar />
        <HomeServicesPreview />
        <HomeReviewsPreview />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}
