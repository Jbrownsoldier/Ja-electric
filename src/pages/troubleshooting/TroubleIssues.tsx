import { RefreshCw, PlugZap, Zap, Flame, Sparkles, ShieldOff, TrendingUp, Power, SunDim, Lightbulb, Volume2, Wrench } from 'lucide-react';

type Severity = 'Emergency' | 'Urgent' | 'Standard';

interface Issue {
 icon: React.ElementType;
 severity: Severity;
 title: string;
 description: string;
 possibleCauses: string[];
}

const issues: Issue[] = [
 {
 icon: Flame,
 severity: 'Emergency',
 title: 'Burning Smell or Overheating Equipment',
 description: 'Heat, smoke, or burning odours around gear, distribution equipment, or connections point to an active safety issue that should be treated as urgent.',
 possibleCauses: ['Loose connection', 'Overloaded equipment', 'Failing component'],
 },
 {
 icon: RefreshCw,
 severity: 'Urgent',
 title: 'Repeated Shutdowns or Nuisance Trips',
 description:"If the same area or system keeps dropping out, a reset isn't solving the real problem. Recurring trips usually point to a distribution, load, or component issue that needs proper diagnosis.",
 possibleCauses: ['Load imbalance', 'Faulty protection device', 'Hidden wiring issue'],
 },
 {
 icon: Power,
 severity: 'Urgent',
 title: 'Partial Power Loss to a Zone or Building',
 description: 'When part of the property goes dark or loses functionality, the cause can range from a failed component to a broader distribution problem.',
 possibleCauses: ['Open connection', 'Damaged device', 'Distribution fault', 'Service issue'],
 },
 {
 icon: ShieldOff,
 severity: 'Urgent',
 title: 'Power Quality or Voltage Stability Concerns',
 description: 'Sensitive equipment, lighting, and controls do not perform well on unstable power. This is where preventive maintenance and power quality analysis become especially valuable.',
 possibleCauses: ['Voltage drop', 'Load fluctuation', 'Poor terminations', 'Equipment interaction'],
 },
 {
 icon: Zap,
 severity: 'Standard',
 title: 'Lighting Systems Not Performing Reliably',
 description: 'Interior, exterior, specialty, and parking lighting all create safety and productivity issues when reliability slips.',
 possibleCauses: ['Control failure', 'Fixture issue', 'Circuit fault', 'Aging infrastructure'],
 },
 {
 icon: SunDim,
 severity: 'Standard',
 title: 'Seasonal Startup or Load Change Problems',
 description: 'Electrical issues often surface when facilities restart equipment, change production demands, or move into heavier seasonal use.',
 possibleCauses: ['Dormant faults', 'Load changes', 'Worn components'],
 },
 {
 icon: Sparkles,
 severity: 'Urgent',
 title: 'Connections Running Hot',
 description: 'Visible heat damage or discolouration means the problem has already progressed beyond inconvenience and into a condition that should be repaired promptly.',
 possibleCauses: ['Loose terminations', 'Overload', 'Damaged device insulation'],
 },
 {
 icon: PlugZap,
 severity: 'Standard',
 title: 'Equipment or Receptacles Not Working',
 description: 'When a power point or connected device stops working, the right repair starts with tracing the fault instead of swapping parts at random.',
 possibleCauses: ['Loose connection', 'Failed device', 'Circuit interruption'],
 },
 {
 icon: TrendingUp,
 severity: 'Standard',
 title: 'Operating Costs Rising Without a Clear Reason',
 description: 'Power quality issues, failing components, and inefficient systems can quietly drive up operating costs until the problem is properly assessed.',
 possibleCauses: ['Power quality loss', 'Faulty equipment', 'Inefficient load behaviour'],
 },
 {
 icon: Lightbulb,
 severity: 'Standard',
 title: 'Outdoor, Yard, or Site Lighting Failures',
 description: 'Exterior lighting problems affect access, safety, and security. Weather, age, and underground conditions can all contribute.',
 possibleCauses: ['Moisture intrusion', 'Damaged fixture', 'Underground fault'],
 },
 {
 icon: Volume2,
 severity: 'Urgent',
 title: 'Buzzing, Humming, or Crackling from Gear',
 description: 'Electrical systems should not sound distressed. Unusual noise can point to loose connections, overload, or internal component failure.',
 possibleCauses: ['Arcing', 'Loose component', 'Overloaded equipment'],
 },
 {
 icon: Wrench,
 severity: 'Standard',
 title: 'Excavation or Site Changes Need Line Location',
 description: 'Before digging or modifying the site, knowing where existing electrical runs are located helps avoid preventable damage and project delays.',
 possibleCauses: ['Unknown underground routing', 'Legacy site changes', 'Poor records'],
 },
];

const severityStyle: Record<Severity, string> = {
 Emergency: 'bg-red-50 text-red-600 border-red-100',
    Urgent: 'bg-secondary/15 text-secondary border-secondary/30',
 Standard: 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

export function TroubleIssues() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-6">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Common Issues
 </p>
 <h2 className="text-white mb-4">
 Problems This Route Now Covers for JA Electric
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 From emergency repair calls to preventative maintenance concerns, JA
 Electric handles a wide range of issues with a practical, diagnosis-first
 approach built for reliable long-term results.
 </p>
 </div>

 <div className="flex flex-wrap gap-3 mb-10">
 {(['Emergency', 'Urgent', 'Standard'] as Severity[]).map((s) => (
 <span key={s} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${severityStyle[s]}`}>
 {s}
 </span>
 ))}
 <span className="text-xs text-gray-400 self-center ml-1">— priority level indicators</span>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
 {issues.map((issue) => (
 <IssueCard key={issue.title} {...issue} />
 ))}
 </div>
 </div>
 </section>
 );
}

function IssueCard({ icon: Icon, severity, title, description, possibleCauses }: Issue) {
 return (
 <div className="group p-6 rounded-2xl bg-surface hover:border-secondary/30 hover:shadow-ambient transition-all duration-300">
 <div className="flex items-start justify-between gap-3 mb-4">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 shrink-0">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${severityStyle[severity]}`}>
 {severity}
 </span>
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

 <div>
 <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
 Possible Causes
 </p>
 <div className="flex flex-wrap gap-1.5">
 {possibleCauses.map((cause) => (
 <span
 key={cause}
 className="text-xs text-gray-600 bg-surface-container-low px-2.5 py-1 rounded-lg"
 >
 {cause}
 </span>
 ))}
 </div>
 </div>
 </div>
 );
}
