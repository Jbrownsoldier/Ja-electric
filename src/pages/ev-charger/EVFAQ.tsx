import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What kinds of residential jobs do you handle?',
 answer:
 'JA Electric handles residential service calls, repairs, renovations, lighting, garage power, smart home work, generators, surge protection, and home upgrades.',
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
 'Yes. JA Electric advertises 24-hour service and quick turnaround, especially for urgent electrical issues that need immediate attention.',
 },
 {
 question: 'Can you update older homes?',
 answer:
 'Yes. Older homes often need service upgrades, safer distribution, renovation wiring, or general modernization, and JA Electric can help map out the right upgrade path.',
 },
 {
 question: 'Do you serve communities outside Steinbach?',
 answer:
 'Yes. JA Electric is based in Steinbach and advertises service across a broad 300 kilometre area. If your home, acreage, or rural site is outside the city, contact the team and they will confirm the best next step.',
 },
 {
 question: 'Do you stand behind your residential work?',
 answer:
 'Yes. JA Electric emphasizes safe workmanship, quality results, and customer satisfaction on residential projects.',
 },
];

export function EVFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
 setOpenIndex((prev) => (prev === index ? null : index));
 };

 return (
 <section className="bg-surface py-20 md:py-28">
 <div className="max-w-3xl mx-auto container-padding">
 <div className="text-center mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 FAQ
 </p>
 <h2 className="text-white mb-4">Common Questions</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Everything you need to know about JA Electric’s residential service. Still have a question?{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us directly.
 </button>
 </p>
 </div>

 <div className="space-y-4">
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
 className="w-full flex items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
 aria-expanded={isOpen}
 >
 <span
 className={`text-base md:text-[1.0625rem] font-semibold transition-colors duration-200 ${
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
 <p className="pb-6 text-gray-500 leading-relaxed text-[0.9375rem] md:text-base">
 {answer}
 </p>
 </div>
 </div>
 );
}
