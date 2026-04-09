import { MessageSquare, ClipboardList, FileText, Wrench, BadgeCheck, ArrowRight } from 'lucide-react';

const steps = [
 {
 icon: MessageSquare,
 number: '01',
 title: 'Quote Request & Scope Review',
 description:
"We start by understanding the property, the issue, and the project goals. JA Electric's contact process emphasizes thoughtful quoting by experienced team members, not rushed guesswork.",
 detail: 'Senior team review',
 },
 {
 icon: ClipboardList,
 number: '02',
 title: 'Site Assessment',
 description:
"We assess the building, service demands, and any constraints tied to safety, access, or operations. That gives us the context needed to recommend the right maintenance, repair, or upgrade path.",
 detail: 'Built around your operation',
 },
 {
 icon: FileText,
 number: '03',
 title: 'Design-Build or Maintenance Plan',
 description:
"From there, we map the work to your needs: design-build support for new capacity, preventative maintenance for reliability, or targeted repairs to solve active problems without unnecessary disruption.",
 detail: 'Clear scope before mobilizing',
 },
 {
 icon: Wrench,
 number: '04',
 title: 'Field Execution',
 description:
"JA Electric's core offering spans construction, maintenance, and repair. The work is carried out with close attention to quality, safety, and the realities of active sites that cannot afford messy execution.",
 detail: 'Construction, maintenance, or repair',
 },
 {
 icon: BadgeCheck,
 number: '05',
 title: 'Testing, Handover & Ongoing Support',
 description:
"Projects close with verification, documentation, and the ability to keep supporting the site over time through clear follow-through and future service support.",
 detail: 'Built for long-term support',
 },
];

export function PanelProcess() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
 <div className="lg:sticky lg:top-28">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 How It Works
 </p>
 <h2 className="text-white mb-5">
 From First Call to Long-Term Support
 </h2>
 <p className="text-gray-500 text-base leading-relaxed mb-8">
 A structured process that keeps the scope clear, the work practical, and the
 operation supported before, during, and after the field work.
 </p>

 <div className="bg-primary rounded-2xl p-7">
 <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-5">
 What's Always Included
 </p>
 <ul className="space-y-3.5">
 {[
 'Design-build planning for upgrades and expansions',
 'Preventative maintenance and power quality review',
 'Line location support where required',
 'Emergency repair and service-call response',
 'Experienced crews for complex industrial scopes',
 'Clear follow-through after project completion',
 ].map((item) => (
 <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"/>
 {item}
 </li>
 ))}
 </ul>

 <div className="mt-7 pt-6">
 <button className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm">
 Request an Industrial Quote
 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
 </button>
 </div>
 </div>
 </div>

 <div className="space-y-3">
 {steps.map((step, index) => (
 <StepCard key={step.number} {...step} isLast={index === steps.length - 1} />
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

interface StepCardProps {
 icon: React.ElementType;
 number: string;
 title: string;
 description: string;
 detail: string;
 isLast: boolean;
}

function StepCard({ icon: Icon, number, title, description, detail, isLast }: StepCardProps) {
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
