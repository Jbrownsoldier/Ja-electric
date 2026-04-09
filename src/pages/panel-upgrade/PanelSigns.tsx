import { Zap, ThermometerSun, RefreshCw, PlugZap, Calendar, ShieldOff, Home, FileWarning } from 'lucide-react';

const signs = [
 {
 icon: RefreshCw,
 urgency: 'High',
 title: 'Repeated Shutdowns or Nuisance Trips',
 description:
 'If the same equipment or area keeps dropping out, the issue is usually deeper than a quick reset. Repeated interruptions point to distribution, connection, or load problems that need proper diagnosis.',
 },
 {
 icon: Zap,
 urgency: 'High',
 title: 'Production Equipment Losing Reliable Power',
 description:
 'Unexpected power instability affects motors, controls, lighting, and sensitive systems. Resolving it early protects productivity and helps prevent wider equipment damage.',
 },
 {
 icon: ThermometerSun,
 urgency: 'High',
 title: 'Hot Equipment or Burning Odours',
 description:
 "Any sign of overheating is a serious warning. If gear, connections, or enclosures are running hot, it's time to bring in qualified support before a small failure becomes a shutdown or safety incident.",
 },
 {
 icon: PlugZap,
 urgency: 'Medium',
 title: 'Expansion Needs More Capacity',
 description:
 'When a property adds new equipment, lines, or buildings, the electrical scope needs to keep up. JA Electric positions design-build work as a core strength for upgrades and expansions.',
 },
 {
 icon: Calendar,
 urgency: 'Medium',
 title: 'Aging Infrastructure Needs a Plan',
 description:
 "Older gear can keep limping along until a critical failure hits. Proactive assessment and maintenance help you plan upgrades around operations instead of around emergency downtime.",
 },
 {
 icon: ShieldOff,
 urgency: 'High',
 title: 'No Emergency Repair Backup',
 description:
"If your current support model cannot respond quickly when the lights go out or a system fails, that gap becomes a business risk. Twenty-four-hour phone service and emergency repair support help keep problems from stretching into longer downtime.",
 },
 {
 icon: Home,
 urgency: 'Medium',
 title: 'Specialty Sites Need Experienced Field Crews',
 description:
 'Seed plants, feed mills, airport-related work, and other specialty environments benefit from an electrician that has already handled unusual scopes and operating conditions.',
 },
 {
 icon: FileWarning,
 urgency: 'Medium',
 title: 'Underground Work Needs Line Location',
 description:
 'Before excavation or site work begins, accurate underground cable locating matters. JA Electric includes that kind of planning support when the project calls for it.',
 },
];

const urgencyStyle: Record<string, string> = {
 High: 'bg-red-50 text-red-600 border-red-100',
    Medium: 'bg-secondary/15 text-secondary border-secondary/30',
};

export function PanelSigns() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Common Triggers
 </p>
 <h2 className="text-white mb-4">
 8 Signs Your Facility Needs Industrial Electrical Support
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 These are the moments where reactive fixes stop being enough and a stronger
 maintenance, upgrade, or design-build partner starts making the difference.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
 {signs.map((sign) => (
 <SignCard key={sign.title} {...sign} />
 ))}
 </div>
 </div>
 </section>
 );
}

interface SignCardProps {
 icon: React.ElementType;
 urgency: string;
 title: string;
 description: string;
}

function SignCard({ icon: Icon, urgency, title, description }: SignCardProps) {
 return (
 <div className="group p-6 rounded-2xl bg-white/[0.02] hover:border-secondary/30 hover:bg-white/[0.05] transition-all duration-300">
 <div className="flex items-start justify-between gap-3 mb-4">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 shrink-0">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${urgencyStyle[urgency]}`}>
 {urgency}
 </span>
 </div>
 <h3 className="text-white font-bold text-sm mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
 </div>
 );
}
