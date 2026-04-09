import { Moon, FileCheck, Gauge, ShieldCheck, Wrench, MapPin } from 'lucide-react';

const benefits = [
 {
 icon: Moon,
 title: 'Steinbach Based Service',
 description:
 'JA Electric is rooted in Steinbach and built around practical service for homes, acreages, and family properties across the surrounding region.',
 },
 {
 icon: ShieldCheck,
 title: 'Licensed Electrical Team',
 description:
 'The company highlights licensed electricians and experienced staff, giving residential clients dependable oversight from quote to completion.',
 },
 {
 icon: FileCheck,
 title: 'Quick Professional Estimating',
 description:
 'Quotes are prepared by a senior team member with a focus on quality, the right equipment, and cost-effective long-term use.',
 },
 {
 icon: Gauge,
 title: 'Quality & Safety Focus',
 description:
 'JA Electric emphasizes quality, safety, and customer satisfaction, giving homeowners added confidence once the job is finished.',
 },
 {
 icon: Wrench,
 title: 'Homes, Shops & Acreages',
 description:
 'Residential service extends beyond the main house, covering garages, detached buildings, acreage needs, and practical upgrades around the property.',
 },
 {
 icon: MapPin,
 title: 'Emergency Support Available',
 description:
 'With 24-hour service and quick turnaround, JA Electric is positioned to support urgent residential electrical issues when they come up.',
 },
];

export function EVBenefits() {
 return (
 <section className="bg-surface py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Why Choose Us
 </p>
 <h2 className="text-white mb-4">
 Why Homeowners Call JA Electric
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Residential work moves better when the quote is clear, the crew is experienced,
 and the job is handled with real attention to quality.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
 {benefits.map((benefit) => (
 <BenefitCard key={benefit.title} {...benefit} />
 ))}
 </div>
 </div>
 </section>
 );
}

interface BenefitCardProps {
 icon: React.ElementType;
 title: string;
 description: string;
}

function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
 return (
 <div className="group p-7 rounded-2xl bg-surface-container-low hover:border-secondary/30 hover:bg-white hover:shadow-ambient transition-all duration-300">
 <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
 <Icon className="w-5 h-5 text-secondary group-hover:text-slate-50 transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
 </div>
 );
}
