import { Phone, ShieldCheck, Clock, ClipboardList, Award, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from '../../components/Button';
import { company } from '../../config/company';

const trustItems = [
 { icon: ShieldCheck, label: 'Licensed Electricians' },
 { icon: Clock, label: 'Maintenance Contracts' },
 { icon: ClipboardList, label: 'Start-to-Finish Delivery' },
 { icon: Award, label: 'Established 2010' },
];

const stats = [
 { value: 'Yes', label: 'Licensed Team' },
 { value: '24-Hr', label: 'Service' },
 { value: 'Local', label: 'Steinbach Based' },
 { value: '24-Hr', label: 'Phone Service' },
];

export function CommercialHero() {
 return (
 <section className="relative min-h-screen bg-primary overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-50"/>

 <div className="relative z-10 max-w-7xl mx-auto container-padding pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 <div className="order-2 lg:order-1">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
 Commercial Electrical · Steinbach &amp; Surrounding Region
 </p>

 <h1 className="text-white mb-6">
 Commercial Electrical Built Around Quality and Deadlines
 </h1>

 <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
 From maintenance contracts to new build and upgrade projects, JA Electric
 delivers commercial electrical work with a start-to-finish approach that
 keeps standards high and projects moving across the surrounding region.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-10">
 <Button size="lg">Get a Commercial Quote</Button>
 <Button variant="outline"size="lg"icon={<Phone className="w-5 h-5"/>}>
 Call Now
 </Button>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
 {trustItems.map((item) => (
 <div key={item.label} className="flex items-center gap-2">
 <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
 <item.icon className="w-4 h-4 text-secondary"/>
 </div>
 <span className="text-gray-300 text-sm font-medium">{item.label}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
 <CommercialHeroVisual stats={stats} />
 </div>
 </div>
 </div>
 </section>
 );
}

function CommercialHeroVisual({ stats }: { stats: typeof stats }) {
 const capabilities = [
 { label: 'Maintenance contracts', tag: 'Ongoing support' },
 { label: 'New build & build-to-suit', tag: 'Start to finish' },
 { label: 'Power distribution & lighting', tag: 'Commercial systems' },
 { label: 'Life-safety support', tag: 'Practical, reliable work' },
 ];

 return (
 <div className="relative w-full max-w-md lg:max-w-lg">
 <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/5 rounded-3xl"/>
 <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary/10 rounded-2xl"/>

 <div className="relative bg-surface rounded-2xl shadow-ambient overflow-hidden">
 <div className="bg-primary p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3">
 <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
 <Building2 className="w-6 h-6 text-slate-50"/>
 </div>
 <div>
 <p className="text-white font-semibold">Commercial Electrical</p>
 <p className="text-gray-400 text-sm">{company.name}</p>
 </div>
 </div>
 <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/15 rounded-full border border-secondary/20">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"/>
 <span className="text-secondary text-xs font-semibold">Locally Owned</span>
 </span>
 </div>
 <div className="flex gap-2 flex-wrap">
 {['Regional Coverage', 'Project Support', 'Maintenance Contracts'].map((tag) => (
 <span key={tag} className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
 {tag}
 </span>
 ))}
 </div>
 </div>

 <div className="p-6 space-y-3">
 <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
 Core Capabilities
 </p>
 {capabilities.map((item) => (
 <div
 key={item.label}
 className="flex items-center justify-between gap-4 p-3 bg-surface-container-low rounded-xl"
 >
 <div className="flex items-center gap-3">
 <CheckCircle2 className="w-4 h-4 text-secondary shrink-0"strokeWidth={2} />
 <span className="text-gray-200 text-sm font-medium">{item.label}</span>
 </div>
 <span className="text-gray-400 text-xs whitespace-nowrap">{item.tag}</span>
 </div>
 ))}
 </div>

 <div className="px-6 pb-6">
 <div className="grid grid-cols-4 gap-2">
 {stats.map((stat) => (
 <div key={stat.label} className="text-center p-3 bg-surface-container-low rounded-xl">
 <p className="font-bold text-white text-lg leading-none">{stat.value}</p>
 <p className="text-gray-500 text-[10px] mt-1 leading-tight">{stat.label}</p>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="absolute -bottom-6 -right-6 bg-surface rounded-xl shadow-ambient p-4 hidden md:block">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
 <Clock className="w-5 h-5 text-secondary"/>
 </div>
 <div>
 <p className="font-semibold text-white text-sm">Locally Owned</p>
 <p className="text-gray-500 text-xs">Serving the surrounding region</p>
 </div>
 </div>
 </div>
 </div>
 );
}
