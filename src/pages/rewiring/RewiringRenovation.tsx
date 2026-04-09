import { UtensilsCrossed, Bath, Layers, Building2, Car, Drill, Monitor, Palmtree } from 'lucide-react';

interface RenovationService {
 icon: React.ElementType;
 title: string;
 description: string;
 includes: string[];
}

const services: RenovationService[] = [
 {
 icon: UtensilsCrossed,
 title: 'Seed Plants',
 description:
"JA Electric supports demanding agricultural sites with practical electrical work built around real operational and distribution needs.",
 includes: [
 'Process equipment support',
 'Power distribution planning',
 'Lighting and controls',
 'Expansion-ready layouts',
 'Maintenance coordination',
 ],
 },
 {
 icon: Bath,
 title: 'Feed Mills',
 description:
 'Feed mills and similar heavy-use agricultural environments benefit from electrical work tailored to more complex operating conditions.',
 includes: [
 'Heavy-use electrical support',
 'Maintenance planning',
 'Upgrade recommendations',
 'Lighting and service work',
 'Operational reliability focus',
 ],
 },
 {
 icon: Layers,
 title: 'Livestock Barns',
 description:
 'Barn environments need practical, durable electrical work matched to the building use, ventilation, lighting, and daily operating patterns on the site.',
 includes: [
 'Lighting layouts',
 'Power for equipment',
 'Service upgrades',
 'Repair and maintenance support',
 'Expansion planning',
 ],
 },
 {
 icon: Building2,
 title: 'Farm Shops & Outbuildings',
 description:
 'Shops and outbuildings often grow from simple support spaces into core operational assets. This content now maps the original renovation section to those agricultural support buildings.',
 includes: [
 'Power distribution',
 'Lighting and receptacles',
 'Equipment connections',
 'Exterior service work',
 'Future capacity planning',
 ],
 },
 {
 icon: Car,
 title: 'Pumps & Irrigation Support',
 description:
 'Agricultural properties often rely on pumps and site-wide service needs that deserve thoughtful electrical support rather than temporary fixes.',
 includes: [
 'Service troubleshooting',
 'Power routing',
 'Outdoor-rated solutions',
 'Expansion compatibility',
 'Repair support',
 ],
 },
 {
 icon: Monitor,
 title: 'Yard & Security Lighting',
 description:
 'Exterior lighting and site visibility matter on active farm properties. This section reuses the original card layout for practical agricultural lighting and reliability needs.',
 includes: [
 'Site lighting upgrades',
 'Security-focused coverage',
 'Weather-ready fixtures',
 'Reliable switching and controls',
 'Maintenance support',
 ],
 },
 {
 icon: Drill,
 title: 'Design-Build Expansions',
 description:
 'JA Electric supports agricultural work from maintenance through design-build style project delivery.',
 includes: [
 'Project planning support',
 'Coordinated electrical scope',
 'Facility upgrades',
 'Operational fit-out',
 'Long-term service continuity',
 ],
 },
 {
 icon: Palmtree,
 title: 'Ongoing Facility Maintenance',
 description:
 'Agricultural operations need support after the initial project is done, which is why JA Electric treats maintenance as part of the long-term relationship.',
 includes: [
 'Preventative maintenance',
 'Emergency repair access',
 'Power quality analysis',
 'Line location',
 'Fast quote follow-through',
 ],
 },
];

export function RewiringRenovation() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Agricultural Project Types
 </p>
 <h2 className="text-white mb-4">
 Agricultural Electrical That Fits the Way the Site Works
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 Seed plants, feed mills, barns, outbuildings, and long-term maintenance all
 play a role in the agricultural work JA Electric supports across the surrounding region.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
 {services.map((service) => (
 <RenovationCard key={service.title} {...service} />
 ))}
 </div>
 </div>
 </section>
 );
}

function RenovationCard({ icon: Icon, title, description, includes }: RenovationService) {
 return (
 <div className="group p-6 rounded-2xl bg-white/[0.02] hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 mb-4">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

 <div>
 <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
 Includes
 </p>
 <ul className="space-y-1.5">
 {includes.map((item) => (
 <li key={item} className="flex items-start gap-2 text-gray-400 text-xs">
 <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0"/>
 {item}
 </li>
 ))}
 </ul>
 </div>
 </div>
 );
}
