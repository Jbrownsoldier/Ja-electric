import { Phone, Shield, FileCheck, Clock, Zap, CircuitBoard, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/Button';
import { company } from '../../config/company';

const trustItems = [
 { icon: Shield, label: 'Licensed Electricians' },
 { icon: FileCheck, label: 'Design-Build Support' },
 { icon: Zap, label: 'Specialty Projects' },
 { icon: Clock, label: 'Established 2010' },
];

export function PanelHero() {
 return (
 <section className="relative min-h-screen bg-primary overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-50"/>

 <div className="relative z-10 max-w-7xl mx-auto container-padding pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 <div className="order-2 lg:order-1">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
 Specialty Electrical · Steinbach &amp; Surrounding Region
 </p>

 <h1 className="text-white mb-6">
 Specialty Electrical Support for Complex Projects
 </h1>

 <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
 Design-build electrical, generator support, communications, audio,
 directional boring, bucket truck service, and project coordination for
 complex properties across the surrounding region.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 mb-10">
 <Button size="lg">Get a Free Quote</Button>
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
 <PanelHeroVisual />
 </div>
 </div>
 </div>
 </section>
 );
}

function PanelHeroVisual() {
 const specs = [
 { label: 'Coverage', value: '300 km Area' },
 { label: 'Phone Service', value: '24-Hour' },
 { label: 'Service', value: '24-Hour' },
 ];

 const included = [
 'Design-build support for new and evolving projects',
 'Communications, audio, and generator systems',
 'Directional boring and bucket truck service',
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
 <CircuitBoard className="w-6 h-6 text-slate-50"/>
 </div>
 <div>
 <p className="text-white font-semibold">Specialty Electrical</p>
 <p className="text-gray-400 text-sm">{company.name}</p>
 </div>
 </div>
 <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/15 rounded-full border border-secondary/20">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary"/>
 <span className="text-secondary text-xs font-semibold">Core Service</span>
 </span>
 </div>
 <div className="flex gap-2">
 <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
 Specialty
 </span>
 <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
 Design-Build
 </span>
 </div>
 </div>

 <div className="p-6 space-y-3">
 <div className="grid grid-cols-3 gap-3">
 {specs.map((s) => (
 <div key={s.label} className="bg-surface-container-low rounded-xl p-3 text-center">
 <p className="font-bold text-white text-sm leading-snug">{s.value}</p>
 <p className="text-gray-500 text-xs mt-0.5 leading-snug">{s.label}</p>
 </div>
 ))}
 </div>

 <div className="space-y-2.5 pt-1">
 {included.map((point) => (
 <div key={point} className="flex items-center gap-3">
 <CheckCircle2 className="w-4 h-4 text-secondary shrink-0"strokeWidth={2} />
 <span className="text-gray-700 text-sm font-medium">{point}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="px-6 pb-6">
 <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
 <div>
 <p className="text-gray-500 text-sm">Established</p>
 <p className="font-bold text-white text-xl mt-0.5">2010</p>
 </div>
 <div className="text-right">
 <p className="text-gray-500 text-sm">Experience</p>
 <p className="font-bold text-white text-xl mt-0.5">24-Hr</p>
 </div>
 </div>
 </div>
 </div>

 <div className="absolute -bottom-6 -right-6 bg-surface rounded-xl shadow-ambient p-4 hidden md:block">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
 <Shield className="w-5 h-5 text-secondary"/>
 </div>
 <div>
 <p className="font-semibold text-white text-sm">Quality-Focused Work</p>
 <p className="text-gray-500 text-xs">Backed by JA Electric</p>
 </div>
 </div>
 </div>
 </div>
 );
}
