import { MessageSquare, ClipboardCheck, FileText, Zap, BadgeCheck, ArrowRight } from 'lucide-react';

const steps = [
 {
 icon: MessageSquare,
 number: '01',
 title: 'Tell Us About the Job',
 description:
"Tell JA Electric what kind of residential work you need, where the project is, and anything important about the home, garage, acreage, or timing.",
 },
 {
 icon: ClipboardCheck,
 number: '02',
 title: 'Project Review',
 description:
"A senior team member reviews the scope, asks the right follow-up questions, and makes sure the recommendation fits how the property is really used.",
 },
 {
 icon: FileText,
 number: '03',
 title: 'Detailed Quote',
 description:
"You receive a practical quote built around quality workmanship, the right configuration, and realistic long-term value rather than guesswork.",
 },
 {
 icon: Zap,
 number: '04',
 title: 'Scheduled Work',
 description:
"Once approved, JA Electric schedules the work and completes the installation, upgrade, or repair with a clean process and clear communication.",
 },
 {
 icon: BadgeCheck,
 number: '05',
 title: 'Completion & Follow-Through',
 description:
"The job is wrapped up with the same quality-first mindset it started with, and JA Electric stands behind the work with ongoing support and clear communication.",
 },
];

export function EVProcess() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14 md:mb-16">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 How It Works
 </p>
 <h2 className="text-white mb-4">
 From First Call to Finished Residential Work
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 A straightforward process designed to keep homeowners informed and comfortable
 at every stage of the project.
 </p>
 </div>

 <div className="space-y-4 mb-14">
 {steps.map((step, index) => (
 <ProcessStep
 key={step.number}
 {...step}
 isLast={index === steps.length - 1}
 />
 ))}
 </div>

 <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
 <button className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_4px_20px_rgba(18,146,232,0.24)] group">
 Start Your Quote
 <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"/>
 </button>
 <p className="text-gray-500 text-sm">
 Fast, professional estimating is part of the service.
 </p>
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
 isLast: boolean;
}

function ProcessStep({ icon: Icon, number, title, description, isLast }: ProcessStepProps) {
 return (
 <div className="group relative flex gap-6 md:gap-8 p-6 md:p-8 rounded-2xl hover:border-secondary/30 hover:bg-white/[0.03] transition-all duration-300">
 <div className="flex flex-col items-center shrink-0">
 <div className="w-12 h-12 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 {!isLast && (
 <div className="w-px flex-1 mt-4 bg-white/10 min-h-[20px]"/>
 )}
 </div>

 <div className="flex-1 pt-1.5">
 <div className="flex items-center gap-3 mb-2">
 <span className="text-secondary/50 font-bold text-xs tracking-widest">{number}</span>
 </div>
 <h3 className="text-white font-bold text-lg mb-2 leading-snug">{title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
 </div>
 </div>
 );
}
