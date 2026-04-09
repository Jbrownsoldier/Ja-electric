import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { company } from '../../config/company';

const faqs = [
 {
 question: 'What kinds of industrial facilities do you work on?',
 answer:
"JA Electric supports specialty scopes such as design builds, generators, network and communications work, audio, directional boring, bucket truck service, project budgeting, and project management.",
 },
 {
 question: 'Do you handle maintenance as well as new industrial installs?',
 answer:
"Yes. JA Electric provides specialty installations alongside maintenance, repairs, underground cable locating, and practical project support.",
 },
 {
 question: 'Can JA Electric support design-build specialty projects?',
 answer:
"Yes. JA Electric positions design-build support as a core capability, tailoring systems to the project scope, site conditions, and operational requirements.",
 },
 {
 question: 'How quickly can we get help in an emergency?',
 answer:
"JA Electric highlights 24-hour service and quick turnaround, especially for urgent situations. The team is set up to respond to service, repair, and maintenance requests across the surrounding region in a timely manner.",
 },
 {
 question: 'Do you work only in Steinbach?',
 answer:
`No. ${company.name} is based in Steinbach and serves a broad regional area, including communities within roughly 300 kilometres.`,
 },
 {
 question: 'What is included in an industrial quote?',
 answer:
"JA Electric reviews the scope, the site conditions, and the best-fit solution so the quote reflects the real work required.",
 },
 {
 question: 'Do you take on complex specialty projects?',
 answer:
"Yes. JA Electric takes on complex specialty scopes that require experienced planning, execution, and ongoing support.",
 },
 {
 question: 'What types of industrial systems do you commonly help with?',
 answer:
"Common industrial scopes include power distribution, specialty and parking lighting, life-safety systems, preventative maintenance, line location, emergency repairs, and upgrades that streamline or expand electrical operations.",
 },
];

export function PanelFAQ() {
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
 Everything you need to know before booking industrial electrical support. Have
 a specific question?{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us directly.
 </button>
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
