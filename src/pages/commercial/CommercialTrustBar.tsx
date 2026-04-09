import { ShieldCheck, BadgeCheck, Clock, ClipboardList, Building2, Star } from 'lucide-react';

const items = [
 { icon: ShieldCheck, label: 'Licensed Electricians', microcopy: 'Experienced commercial leadership' },
 { icon: BadgeCheck, label: 'Quality Focused', microcopy: 'Safe, reliable work' },
 { icon: Clock, label: 'Maintenance Contracts', microcopy: 'Ongoing client support' },
 { icon: ClipboardList, label: 'Build-to-Suit Projects', microcopy: 'Start-to-finish delivery' },
 { icon: Building2, label: 'Commercial & Institutional', microcopy: 'Retail to daycares and more' },
 { icon: Star, label: 'Regional Coverage', microcopy: 'Steinbach-based team' },
];

export function CommercialTrustBar() {
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
