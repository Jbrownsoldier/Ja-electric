import { Home, Building2, ArrowRight } from 'lucide-react';

const types = [
 {
 icon: Home,
 badge: 'Residential',
 heading: 'Home Electrical Service & Upgrades',
 body: `JA Electric works on the everyday electrical needs that keep homes running:
 service calls, lighting, new receptacles, equipment wiring, upgrades, and careful
 troubleshooting when something is not performing the way it should.`,
 points: ['Repairs, service work, and upgrades', 'Lighting, plugs, and new circuits', 'Smart homes, generators, and surge protection'],
 },
 {
 icon: Building2,
 badge: 'Acreage & Renovation',
 heading: 'Garages, Shops, Acreages & Renovations',
 body: `When a project stretches beyond the main house, JA Electric helps plan and wire
 the spaces around it too, from detached garages and rural outbuildings to
 renovation rough-ins and outdoor electrical distribution.`,
 points: ['Detached building and garage power', 'Renovation and addition wiring', 'Outdoor and acreage-ready solutions'],
 },
];

export function EVIntro() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 What We Install
 </p>
 <h2 className="text-white mb-4">
 Residential Electrical, Done Right
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Whether you need service in the house, support for a renovation, or power for a
 garage or acreage structure, JA Electric fits the work into a clean, reliable scope.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6 md:gap-8">
 {types.map((type) => (
 <IntroCard key={type.badge} {...type} />
 ))}
 </div>
 </div>
 </section>
 );
}

interface IntroCardProps {
 icon: React.ElementType;
 badge: string;
 heading: string;
 body: string;
 points: string[];
}

function IntroCard({ icon: Icon, badge, heading, body, points }: IntroCardProps) {
 return (
 <div className="group bg-surface rounded-2xl shadow-ambient hover:shadow-ambient hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
 <div className="flex items-start justify-between gap-4 mb-6">
 <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300 shrink-0">
 <Icon className="w-6 h-6 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
 {badge}
 </span>
 </div>

 <h3 className="text-white font-bold text-xl mb-3">{heading}</h3>
 <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1">{body}</p>

 <ul className="space-y-2.5 mb-6 pt-6">
 {points.map((pt) => (
 <li key={pt} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"/>
 {pt}
 </li>
 ))}
 </ul>

 <button className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group/link hover:gap-3 transition-all duration-200">
 Request a Quote
 <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5"/>
 </button>
 </div>
 );
}
