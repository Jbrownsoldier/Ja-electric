import { MapPin, FileText, CalendarCheck, Wrench, ClipboardCheck, FileCheck } from 'lucide-react';

const steps = [
 {
 number: '01',
 icon: MapPin,
 title: 'Site Assessment',
 description:
"We start by understanding the property, the electrical goals, and whether the need is maintenance, a new build, or a build-to-suit commercial scope.",
 detail: 'Built around the real site conditions',
 },
 {
 number: '02',
 icon: FileText,
 title: 'Detailed Quote',
 description:
"A senior team member prepares the quote with close attention to the best configuration, equipment selection, and long-term cost-effective use of the system.",
 detail: 'Senior review before the work begins',
 },
 {
 number: '03',
 icon: CalendarCheck,
 title: 'Scheduling & Scope Alignment',
 description:
"Once the scope is aligned, the project is planned around deadlines, operational needs, and the quality standard JA Electric emphasizes on its commercial work.",
 detail: 'Deadlines and quality stay in view',
 },
 {
 number: '04',
 icon: Wrench,
 title: 'Execution',
 description:
"The work is carried through as a complete experience, whether the job is maintenance, a service request, or a larger build-to-suit commercial project.",
 detail: 'Start-to-finish delivery',
 },
 {
 number: '05',
 icon: ClipboardCheck,
 title: 'Testing & Quality Check',
 description:
"Every commercial project benefits from a clear quality checkpoint that keeps workmanship standards high before final handover.",
 detail: 'High standards maintained',
 },
 {
 number: '06',
 icon: FileCheck,
 title: 'Handover & Ongoing Support',
 description:
"The relationship does not stop at turnover. JA Electric also presents maintenance contracts, emergency repair, and ongoing support as part of how it serves commercial clients long term.",
 detail: 'Maintenance and warranty support',
 },
];

export function CommercialProcess() {
 return (
 <section className="bg-surface py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 How We Work
 </p>
 <h2 className="text-white mb-4">
 A Commercial Process Mapped to JA Electric
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 The page flow stays the same, but the content now reflects JA Electric's
 commercial approach to maintenance, build-to-suit work, and long-term support.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
 {steps.map((step) => (
 <ProcessCard key={step.number} {...step} />
 ))}
 </div>

 <div className="mt-12 p-6 md:p-8 bg-primary rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <div>
 <p className="text-white font-bold text-lg md:text-xl leading-snug mb-1">
 Ready to Get Started?
 </p>
 <p className="text-gray-400 text-sm md:text-base">
 Request a detailed JA Electric commercial quote for your next project or service need.
 </p>
 </div>
 <button className="shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm whitespace-nowrap">
 Book a Site Assessment
 </button>
 </div>
 </div>
 </section>
 );
}

interface ProcessCardProps {
 number: string;
 icon: React.ElementType;
 title: string;
 description: string;
 detail: string;
}

function ProcessCard({ number, icon: Icon, title, description, detail }: ProcessCardProps) {
 return (
 <div className="group p-6 rounded-2xl bg-surface-container-low hover:border-secondary/30 hover:shadow-ambient transition-all duration-300 flex flex-col">
 <div className="flex items-start justify-between gap-4 mb-5">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 shrink-0">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <span className="text-5xl font-black text-gray-100 leading-none select-none group-hover:text-secondary/20 transition-colors duration-300">
 {number}
 </span>
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

 <div className="mt-4 pt-4">
 <p className="text-secondary text-xs font-semibold">{detail}</p>
 </div>
 </div>
 );
}
