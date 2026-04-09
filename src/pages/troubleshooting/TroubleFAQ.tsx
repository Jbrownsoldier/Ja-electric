import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What does JA Electric include in preventative maintenance?',
 answer:
"JA Electric includes maintenance, inspections, infra-red scanning, underground cable locating, repairs, and broader service support for residential, commercial, agricultural, and specialty systems.",
 },
 {
 question: 'Do you offer emergency electrical repair?',
 answer:
"Yes. Emergency repair is part of JA Electric's core service mix, backed by 24-hour service for urgent electrical issues.",
 },
 {
 question: 'Can you help with hard-to-diagnose recurring issues?',
 answer:
"Yes. JA Electric approaches recurring issues with careful diagnosis, practical repair planning, and a focus on long-term reliability rather than guesswork.",
 },
 {
 question: 'Which types of properties do you service for maintenance calls?',
 answer:
"JA Electric works across residential, commercial, agricultural, and specialty environments throughout its regional service area.",
 },
 {
 question: 'Do you only handle emergencies, or can we schedule planned service too?',
 answer:
"Both. JA Electric's offering covers emergency repair as well as scheduled service, preventative maintenance, inspections, and upgrade planning for customers who want to reduce downtime before an emergency happens.",
 },
 {
 question: 'Can you support underground work and line location?',
 answer:
"Yes. Underground cable locating is part of JA Electric's maintenance-oriented services, making it a strong fit for excavation, upgrades, and site changes that require safer underground coordination.",
 },
 {
 question: 'How do quotes work for service and repair requests?',
 answer:
"JA Electric reviews the issue, the site conditions, and the right next step so the quote reflects the actual work required.",
 },
 {
 question: 'Do you work outside Steinbach for maintenance requests?',
 answer:
"Yes. JA Electric is based in Steinbach and serves a broad regional area, so the maintenance and emergency-repair positioning on this page extends beyond the city itself.",
 },
];

export function TroubleFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
 setOpenIndex((prev) => (prev === index ? null : index));
 };

 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-3xl mx-auto container-padding">
 <div className="text-center mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 FAQ
 </p>
 <h2 className="text-white mb-4">Common Questions</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Everything you need to know before booking maintenance or emergency repair
 support.{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us directly
 </button>{' '}
 if you have something specific.
 </p>
 </div>

 <div className="bg-surface rounded-2xl shadow-ambient space-y-4 overflow-hidden">
 {faqs.map((faq, index) => (
 <FAQItem
 key={index}
 question={faq.question}
 answer={faq.answer}
 isOpen={openIndex === index}
 onToggle={() => toggle(index)}
 />
 ))}
 </div>
 </div>
 </section>
 );
}

interface FAQItemProps {
 question: string;
 answer: string;
 isOpen: boolean;
 onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
 return (
 <div className="group">
 <button
 onClick={onToggle}
 className="w-full flex items-center justify-between gap-6 py-5 px-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
 aria-expanded={isOpen}
 >
 <span
 className={`text-sm md:text-[0.9375rem] font-semibold transition-colors duration-200 ${
 isOpen ? 'text-secondary' : 'text-white group-hover:text-secondary'
 }`}
 >
 {question}
 </span>
 <span
 className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
 isOpen
 ? 'bg-secondary border-secondary text-slate-50'
 : 'bg-surface border-outline-variant/15 text-gray-400 group-hover:border-secondary group-hover:text-secondary'
 }`}
 >
 {isOpen ? (
 <Minus className="w-3.5 h-3.5"strokeWidth={2.5} />
 ) : (
 <Plus className="w-3.5 h-3.5"strokeWidth={2.5} />
 )}
 </span>
 </button>

 <div
 className={`overflow-hidden transition-all duration-300 ease-in-out ${
 isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
 }`}
 >
 <p className="pb-5 px-7 text-gray-500 leading-relaxed text-sm md:text-[0.9375rem]">
 {answer}
 </p>
 </div>
 </div>
 );
}
