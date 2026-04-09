import { AlertTriangle, TrendingUp, ShieldOff, Clock } from 'lucide-react';
import { companyLinks } from '../../config/company';

const risks = [
 {
 icon: AlertTriangle,
 stat: '24-Hr',
 statLabel: 'phone service',
 title: 'Urgent Calls Need a Fast Answer',
 description:
 'JA Electric offers 24-hour service and quick turnaround for emergencies. That matters when downtime, safety, or site access issues cannot sit until the next business day.',
 color: 'red',
 },
 {
 icon: TrendingUp,
 stat: 'Scan',
 statLabel: 'inspection support',
 title: 'Repairs Should Hold Up After the Visit',
 description:
 'Maintenance support such as inspections and infra-red scanning positions repair work as an investment in stability, not just a temporary patch.',
 color: 'amber',
 },
 {
 icon: ShieldOff,
 stat: 'Local',
 statLabel: 'Steinbach based',
 title: 'Local Support Simplifies Coordination',
 description:
 "A local contractor that already serves the surrounding region can move faster, understand the service area, and stay involved after the first visit instead of treating the repair like a one-off dispatch.",
 color: 'amber',
 },
 {
 icon: Clock,
 stat: 'PM',
 statLabel: 'prevents downtime',
 title: 'Preventative Maintenance Beats Reactive Downtime',
 description:
 'Preventative maintenance, power quality analysis, and line location help clients address risk before failure becomes a bigger and more expensive problem.',
 color: 'blue',
 },
];

const colorMap: Record<string, { stat: string; icon: string; border: string; bg: string }> = {
 red: {
 stat: 'text-red-600',
 icon: 'text-red-500',
 border: 'border-red-100',
 bg: 'bg-red-50',
 },
 amber: {
 stat: 'text-secondary',
 icon: 'text-secondary',
 border: 'border-secondary/20',
 bg: 'bg-secondary/5',
 },
 blue: {
 stat: 'text-secondary',
 icon: 'text-secondary',
 border: 'border-secondary/20',
 bg: 'bg-secondary/5',
 },
};

export function TroubleWhyFast() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Why Speed Matters
 </p>
 <h2 className="text-white mb-4">
 Maintenance Issues Rarely Improve by Waiting
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 Preventative maintenance, emergency response, and long-term reliability are
 central to how JA Electric supports clients across the surrounding region.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-5 md:gap-6">
 {risks.map((risk) => (
 <RiskCard key={risk.title} {...risk} />
 ))}
 </div>

 <div className="mt-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col md:flex-row items-start md:items-center gap-6">
 <div className="flex-1">
 <p className="text-white font-bold text-base mb-1.5">
 Need help deciding whether it is urgent?
 </p>
 <p className="text-gray-400 text-sm leading-relaxed">
 If you are dealing with overheating equipment, repeated shutdowns, visible
 arcing, or another active electrical concern, use JA Electric's 24-hour
 phone service and get the issue assessed before it escalates.
 </p>
 </div>
 <a
 href={companyLinks.phone}
 className="shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-secondary text-slate-50 font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
 >
 Call Now
 </a>
 </div>
 </div>
 </section>
 );
}

interface RiskCardProps {
 icon: React.ElementType;
 stat: string;
 statLabel: string;
 title: string;
 description: string;
 color: string;
}

function RiskCard({ icon: Icon, stat, statLabel, title, description, color }: RiskCardProps) {
 const styles = colorMap[color];

 return (
 <div className="group p-6 md:p-8 rounded-2xl bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
 <div className="flex items-start gap-5 mb-5">
 <div className={`w-11 h-11 rounded-xl ${styles.bg} border ${styles.border} flex items-center justify-center shrink-0`}>
 <Icon className={`w-5 h-5 ${styles.icon}`} strokeWidth={1.75} />
 </div>
 <div>
 <span className={`font-bold text-2xl tracking-tight ${styles.stat}`}>{stat}</span>
 <span className="text-gray-500 text-sm ml-2">{statLabel}</span>
 </div>
 </div>
 <h3 className="text-white font-bold text-base mb-3 leading-snug">{title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
 </div>
 );
}
