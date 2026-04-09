import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What kinds of agricultural electrical work do you handle?',
 answer:
"Agricultural electrical is a core JA Electric service line, including farm service, outbuilding power, repairs, maintenance, upgrades, and broader farm-related support.",
 },
 {
 question: 'Do you work on seed plants and feed mills?',
 answer:
"JA Electric serves agricultural properties that need reliable electrical support for barns, shops, pumps, outbuildings, and other farm-related systems.",
 },
 {
 question: 'Do you provide both maintenance and new agricultural installs?',
 answer:
"Yes. JA Electric's agricultural offering works for both active-facility service needs and expansion or new-construction scopes.",
 },
 {
 question: 'Can JA Electric help with barns, shops, and other farm structures?',
 answer:
"Yes. JA Electric supports barns, shops, feed systems, irrigation support, and other farm-related electrical work.",
 },
 {
 question: 'How quickly can we get help for an agricultural electrical issue?',
 answer:
"JA Electric notes its 24-hour service and quick turnaround for urgent situations, which also applies to agricultural calls.",
 },
 {
 question: 'Do you only work in Steinbach?',
 answer:
`No. JA Electric is based in Steinbach and serves a broad regional area, including surrounding communities and agricultural sites that need dependable electrical support.`,
 },
 {
 question: "What's included in an agricultural electrical quote?",
 answer:
"JA Electric reviews the site, the operating needs, and the right fit for the project so the quote reflects the actual work required.",
 },
 {
 question: 'Can you support agricultural expansions and new builds?',
 answer:
"Yes. JA Electric supports agricultural expansions, new structures, and system upgrades where dependable planning and installation matter.",
 },
];

export function RewiringFAQ() {
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
 <h2 className="text-white mb-4">Common Questions About Agricultural Electrical</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Straightforward answers to what agricultural clients most often ask before
 committing to an electrical project.{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us
 </button>{' '}
 for anything specific to your project.
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
