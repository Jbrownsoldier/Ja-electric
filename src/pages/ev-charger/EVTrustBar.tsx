import { ShieldCheck, BadgeCheck, Clock, FileCheck, BatteryCharging, MapPin } from 'lucide-react';

const items = [
 { icon: ShieldCheck, label: 'Steinbach Based', microcopy: 'Local contractor' },
 { icon: BadgeCheck, label: 'Quality Focused', microcopy: 'Safe, reliable work' },
 { icon: Clock, label: 'Established 2010', microcopy: 'Experienced team' },
 { icon: FileCheck, label: 'Quick Estimating', microcopy: 'Senior quote review' },
 { icon: BatteryCharging, label: 'Homes & Acreages', microcopy: 'Residential support' },
 { icon: MapPin, label: '300 km Coverage', microcopy: 'Steinbach based crew' },
];

export function EVTrustBar() {
 return (
 <section className="bg-surface">
 <div className="max-w-7xl mx-auto container-padding py-10 md:py-12">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
 {items.map((item, index) => (
 <div
 key={item.label}
 className={`
 flex flex-col items-center text-center gap-3
 ${index < items.length - 1 ? '' : ''}
 lg:px-4
 `}
 >
 <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-secondary"strokeWidth={1.75} />
 </div>
 <div>
 <p className="font-semibold text-white text-sm leading-snug">{item.label}</p>
 <p className="text-gray-500 text-xs mt-0.5 leading-snug">{item.microcopy}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
