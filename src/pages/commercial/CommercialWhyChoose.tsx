import { ShieldCheck, Clock, User, FileText, Wrench, MessageSquare, ArrowRight } from 'lucide-react';

const reasons = [
 {
 icon: ShieldCheck,
 title: 'Locally Owned, Highly Qualified',
 description:
 'JA Electric emphasizes local accountability, licensed electrical leadership, and a trained support team that stays current on safety, technology, and field standards.',
 },
 {
 icon: Clock,
 title: 'Start-to-Finish Commercial Delivery',
 description:
 'From maintenance contracts through new build and project support, JA Electric offers the kind of continuity commercial clients rely on.',
 },
 {
 icon: User,
 title: 'Built Around Deadlines and Quality',
 description:
 'Commercial clients count on JA Electric to hit deadlines while maintaining a very high standard of quality.',
 },
 {
 icon: FileText,
 title: 'Detailed Quotes from Senior Staff',
 description:
 'The company contact page stresses that a senior team member prepares each quote with close attention to equipment, configuration, and long-term operating value.',
 },
 {
 icon: Wrench,
 title: 'Maintenance and Emergency Support',
 description:
 'Commercial clients need more than an install crew. JA Electric also highlights preventative maintenance, emergency repair, and quick-turn support for properties that cannot afford long downtime.',
 },
 {
 icon: MessageSquare,
 title: 'Warranty and Safety Mindset',
 description:
 'A strong safety commitment and practical follow-through give commercial owners and managers added reassurance before awarding work.',
 },
];

export function CommercialWhyChoose() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
 <div className="lg:sticky lg:top-28">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Why JA Electric
 </p>
 <h2 className="text-white mb-5">
 Commercial Support Backed by Local Accountability
 </h2>
 <p className="text-gray-500 text-base leading-relaxed mb-8">
 Commercial clients choose JA Electric for continuity, accountability,
 safety, and reliable support long after the initial project is complete.
 </p>

 <div className="bg-primary rounded-2xl p-7">
 <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-5">
 Every Commercial Project Includes
 </p>
 <ul className="space-y-3.5">
 {[
 'Locally based in Steinbach',
 'Licensed electricians leading the work',
 'Detailed quotes from senior staff',
 'Maintenance contracts and new builds supported',
 'Quality-focused workmanship on supported work',
 'Safety-first culture on every site',
 'Quick turnaround through 24-hour phone service',
 ].map((item) => (
 <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"/>
 {item}
 </li>
 ))}
 </ul>

 <div className="mt-7 pt-6">
 <button className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm">
 Request a Commercial Quote
 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
 </button>
 </div>
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
 {reasons.map((reason) => (
 <ReasonCard key={reason.title} {...reason} />
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

interface ReasonCardProps {
 icon: React.ElementType;
 title: string;
 description: string;
}

function ReasonCard({ icon: Icon, title, description }: ReasonCardProps) {
 return (
 <div className="group p-6 rounded-2xl bg-surface hover:border-secondary/30 hover:shadow-ambient transition-all duration-300">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 mb-4">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
 </div>
 );
}
