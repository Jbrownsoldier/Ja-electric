import { AlertTriangle, ShieldOff, Zap, FileWarning, Flame, XCircle, Clock, Home } from 'lucide-react';

type Urgency = 'Replace Now' | 'Upgrade Required' | 'Inspect & Assess';

interface Trigger {
 icon: React.ElementType;
 urgency: Urgency;
 title: string;
 description: string;
 detail: string;
}

const triggers: Trigger[] = [
 {
 icon: Flame,
 urgency: 'Replace Now',
 title: 'Processing Equipment Needs Reliable Power',
 description:
 'Seed plants, feed mills, and other agricultural operations cannot afford inconsistent power to critical equipment. If production is being affected, the electrical scope deserves immediate attention.',
 detail: 'Downtime hits operations quickly',
 },
 {
 icon: AlertTriangle,
 urgency: 'Replace Now',
 title: 'Barn or Shop Capacity Has Been Outgrown',
 description:
 "As agricultural operations expand, older services and distribution setups may no longer support the real-world load on the property. That is where design-build planning becomes valuable.",
 detail: 'Expansion often drives electrical upgrades',
 },
 {
 icon: ShieldOff,
 urgency: 'Upgrade Required',
 title: 'Maintenance Is Too Reactive',
 description:
 'Waiting for failures instead of maintaining the system usually means more downtime, more disruption, and higher repair costs. Preventative maintenance helps keep the site steady.',
 detail: 'Preventative work reduces emergency calls',
 },
 {
 icon: Zap,
 urgency: 'Upgrade Required',
 title: 'New Buildings or Additions Need Electrical Planning',
 description:
 "When a new outbuilding, expansion, or facility change is being planned, the electrical needs should be built into the project from the start instead of added as an afterthought.",
 detail: 'Design-build support keeps projects aligned',
 },
 {
 icon: FileWarning,
 urgency: 'Upgrade Required',
 title: 'Irrigation, Yard, or Site Services Need Attention',
 description:
 'Agricultural properties often depend on electrical systems spread across larger sites. Lighting, pumps, and service equipment need support that matches those operating conditions.',
 detail: 'Site-wide reliability matters',
 },
 {
 icon: Clock,
 urgency: 'Inspect & Assess',
 title: 'Seasonal Demand Is About to Increase',
 description:
 'The best time to assess agricultural electrical needs is before the busy season pushes the system harder. Planned reviews help avoid emergency calls during the most critical windows.',
 detail: 'Plan ahead of peak demand',
 },
 {
 icon: XCircle,
 urgency: 'Inspect & Assess',
 title: 'Underground Work Needs Line Location',
 description:
 'Before trenching, excavation, or site changes begin, line location helps protect existing electrical infrastructure and keeps the project moving safely.',
 detail: 'Pre-work planning prevents avoidable damage',
 },
 {
 icon: Home,
 urgency: 'Inspect & Assess',
 title: 'You Want a Local Long-Term Electrical Partner',
 description:
 'Agricultural operators often need more than a one-time install. JA Electric is built to be a long-term regional partner for maintenance, upgrades, and future expansion.',
 detail: 'Built for ongoing support, not one-off jobs',
 },
];

const urgencyStyle: Record<Urgency, string> = {
 'Replace Now': 'bg-red-50 text-red-600 border-red-100',
    'Upgrade Required': 'bg-secondary/15 text-secondary border-secondary/30',
 'Inspect & Assess': 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

export function RewiringWhenNeeded() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-6">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 When Agricultural Support Is Needed
 </p>
 <h2 className="text-white mb-4">
 Signals Your Agricultural Electrical Scope Needs Attention
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 These are some of the common conditions that tell agricultural clients it is
 time to plan maintenance, upgrades, or stronger long-term electrical support.
 </p>
 </div>

 <div className="flex flex-wrap gap-3 mb-10">
 {(['Replace Now', 'Upgrade Required', 'Inspect & Assess'] as Urgency[]).map((u) => (
 <span key={u} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${urgencyStyle[u]}`}>
 {u}
 </span>
 ))}
 <span className="text-xs text-gray-400 self-center ml-1">— priority level indicators</span>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
 {triggers.map((trigger) => (
 <TriggerCard key={trigger.title} {...trigger} />
 ))}
 </div>
 </div>
 </section>
 );
}

function TriggerCard({ icon: Icon, urgency, title, description, detail }: Trigger) {
 return (
 <div className="group p-6 rounded-2xl bg-surface hover:border-secondary/30 hover:shadow-ambient transition-all duration-300 flex flex-col">
 <div className="flex items-start justify-between gap-3 mb-4">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 shrink-0">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${urgencyStyle[urgency]}`}>
 {urgency}
 </span>
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

 <div className="mt-4 pt-4">
 <p className="text-gray-400 text-xs leading-snug italic">{detail}</p>
 </div>
 </div>
 );
}
