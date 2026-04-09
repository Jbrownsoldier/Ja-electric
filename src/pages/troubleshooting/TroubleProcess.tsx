import { Phone, CalendarClock, Search, ClipboardCheck, Wrench, ArrowRight } from 'lucide-react';

const steps = [
 {
 icon: Phone,
 number: '01',
 title: 'Call or Request Service',
 description:
"Share what is happening at the property, what systems are affected, and whether this is an emergency, a maintenance concern, or a planned site requirement like line location.",
 detail: 'Emergency or planned service',
 },
 {
 icon: CalendarClock,
 number: '02',
 title: 'Priority Triage',
 description:
"Urgent issues are prioritized through JA Electric's 24-hour service, while planned service requests are scoped so the visit and next steps fit the site conditions.",
 detail: 'Quick turnaround when urgent',
 },
 {
 icon: Search,
 number: '03',
 title: 'On-Site Assessment',
 description:
"We assess the real cause of the issue, the condition of the electrical system, and whether the best solution is repair, preventative maintenance, or a larger upgrade plan.",
 detail: 'Root cause before recommendations',
 },
 {
 icon: ClipboardCheck,
 number: '04',
 title: 'Clear Scope & Quote',
 description:
"JA Electric's contact process emphasizes detailed, experience-backed quoting. You get a practical explanation of the work and the recommended next step before the field scope moves forward.",
 detail: 'Detailed quote from the senior team',
 },
 {
 icon: Wrench,
 number: '05',
 title: 'Repair, Maintain, and Follow Through',
 description:
"Once approved, the work is carried through with attention to quality, safety, and longer-term reliability, whether the need is emergency repair, power quality support, or preventative maintenance.",
 detail: 'Built for reliability, not just speed',
 },
];

export function TroubleProcess() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
 <div className="lg:sticky lg:top-28">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Our Process
 </p>
 <h2 className="text-white mb-5">
 From First Call to Reliable Follow-Through
 </h2>
 <p className="text-gray-500 text-base leading-relaxed mb-8">
 A structured service flow built around practical diagnosis, clear scope
 definition, and dependable maintenance or emergency repair support.
 </p>

 <div className="bg-primary rounded-2xl p-7">
 <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-5">
 What You Can Expect
 </p>
 <ul className="space-y-3.5">
 {[
 'Preventative maintenance and emergency repair support',
 'Power quality analysis when needed',
 'Line location for site planning and excavation',
 'Detailed quotes prepared by experienced staff',
 'Coverage across industrial, commercial, agricultural, and residential work',
 'Repairs backed by practical follow-through and clear communication',
 ].map((item) => (
 <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"/>
 {item}
 </li>
 ))}
 </ul>

 <div className="mt-7 pt-6">
 <button className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm">
 Book Service
 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
 </button>
 </div>
 </div>
 </div>

 <div className="space-y-3">
 {steps.map((step, index) => (
 <ProcessStep key={step.number} {...step} isLast={index === steps.length - 1} />
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

interface ProcessStepProps {
 icon: React.ElementType;
 number: string;
 title: string;
 description: string;
 detail: string;
 isLast: boolean;
}

function ProcessStep({ icon: Icon, number, title, description, detail, isLast }: ProcessStepProps) {
 return (
 <div className="group relative flex gap-5 md:gap-6 p-6 md:p-7 rounded-2xl bg-surface hover:border-secondary/30 hover:shadow-ambient transition-all duration-300">
 <div className="flex flex-col items-center shrink-0">
 <div className="w-11 h-11 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 {!isLast && <div className="w-px flex-1 mt-3 bg-outline-variant/15 min-h-[16px]"/>}
 </div>

 <div className="flex-1 pt-1">
 <div className="flex items-center gap-3 mb-1.5">
 <span className="text-secondary/60 font-bold text-xs tracking-widest">{number}</span>
 <span className="w-px h-3 bg-outline-variant/15"/>
 <span className="text-gray-400 text-xs font-medium">{detail}</span>
 </div>
 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
 </div>
 </div>
 );
}
