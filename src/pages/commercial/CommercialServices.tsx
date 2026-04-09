import {
 Building2,
 ShoppingBag,
 Sun,
 Zap,
 AlertTriangle,
 Network,
 Car,
 Power,
 Lamp,
 UtensilsCrossed,
 Thermometer,
 ClipboardList,
} from 'lucide-react';

interface Service {
 icon: React.ElementType;
 title: string;
 description: string;
 tags: string[];
}

const services: Service[] = [
 {
 icon: Building2,
 title: 'Maintenance Contracts',
 description:
 'JA Electric offers ongoing maintenance support for commercial clients that need dependable service after the initial project is complete.',
 tags: ['Ongoing support', 'Scheduled service', 'Commercial clients'],
 },
 {
 icon: ShoppingBag,
 title: 'New Build & Build-to-Suit',
 description:
 'JA Electric supports commercial builds from planning through execution, with a focus on meeting deadlines and maintaining a high standard of quality.',
 tags: ['New construction', 'Build-to-suit', 'Start to finish'],
 },
 {
 icon: Zap,
 title: 'Power Distribution',
 description:
 'Power distribution and practical electrical upgrades are a core part of JA Electric’s systems work for growing commercial spaces and specialized facilities.',
 tags: ['Distribution', 'Capacity planning', 'Commercial systems'],
 },
 {
 icon: AlertTriangle,
 title: 'Life-Safety Systems',
 description:
 'Commercial properties benefit from dependable installation, maintenance, and support for the systems that keep the building running safely.',
 tags: ['Safety systems', 'Reliable operation', 'Commercial support'],
 },
 {
 icon: Sun,
 title: 'Specialty & Parking Lighting',
 description:
 'Exterior and specialty lighting are a useful fit for commercial properties that need reliable coverage without changing the grid or visual style.',
 tags: ['Parking lighting', 'Specialty lighting', 'Exterior systems'],
 },
 {
 icon: Network,
 title: 'Retail & Office Electrical',
 description:
 'Retail and office spaces benefit from a contractor that can deliver dependable electrical work without compromising deadlines or finish quality.',
 tags: ['Retail', 'Office', 'Tenant improvements'],
 },
 {
 icon: Car,
 title: 'Shopping Malls & Multi-Tenant Facilities',
 description:
 'Larger commercial occupancies are part of the broader property mix JA Electric can support across the regional service area.',
 tags: ['Malls', 'Common areas', 'Shared facilities'],
 },
 {
 icon: Power,
 title: 'Long-Term Living & Daycare Facilities',
 description:
 'Long-term living facilities, community spaces, and other occupied properties need reliable commercial electrical support that fits daily operations.',
 tags: ['Institutional', 'Occupancy support', 'Reliable service'],
 },
 {
 icon: Lamp,
 title: 'Manufacturing & Facility Support',
 description:
 'Commercial and specialty scopes often overlap. This card preserves the slot while pointing to broader facility experience with manufacturing and complex operations.',
 tags: ['Manufacturing', 'Facility operations', 'Complex sites'],
 },
 {
 icon: UtensilsCrossed,
 title: 'Service Upgrades & Expansion Support',
 description:
 'When a commercial property expands or changes use, the electrical system has to keep pace with new demand, layouts, and operational needs.',
 tags: ['Expansion', 'Capacity upgrades', 'Future-ready planning'],
 },
 {
 icon: Thermometer,
 title: 'Emergency Repair',
 description:
 'Emergency repair and 24-hour phone service help commercial clients respond quickly when an urgent electrical issue interrupts operations.',
 tags: ['Urgent response', '24-hour phone', 'Quick turnaround'],
 },
 {
 icon: ClipboardList,
 title: 'Detailed Quote & Planning Support',
 description:
 'Detailed quotes focus on the right configuration, equipment, and long-term cost-effective operation for the property.',
 tags: ['Detailed quotes', 'Senior review', 'Project clarity'],
 },
];

export function CommercialServices() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Commercial Services
 </p>
 <h2 className="text-white mb-4">
 The Commercial Work JA Electric Highlights
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 Maintenance, build-to-suit delivery, and deadline-focused commercial support
 define the work JA Electric brings to regional commercial properties.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
 {services.map((service) => (
 <ServiceCard key={service.title} {...service} />
 ))}
 </div>
 </div>
 </section>
 );
}

function ServiceCard({ icon: Icon, title, description, tags }: Service) {
 return (
 <div className="group p-6 rounded-2xl bg-white/[0.02] hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 mb-4">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

 <div className="flex flex-wrap gap-2">
 {tags.map((tag) => (
 <span key={tag} className="px-2.5 py-1 bg-white/[0.05] text-gray-400 text-xs rounded-lg">
 {tag}
 </span>
 ))}
 </div>
 </div>
 );
}
