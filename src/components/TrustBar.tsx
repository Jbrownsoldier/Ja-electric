import { ShieldCheck, BadgeCheck, Clock, MessageSquare, Building2, MapPin } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const trustItems = [
  { icon: ShieldCheck, label: 'Licensed Electricians', microcopy: 'Safe, reliable work' },
  { icon: BadgeCheck, label: 'Established 2010', microcopy: 'Built on experience' },
  { icon: Clock, label: 'Quick Response Times', microcopy: 'Responsive support' },
  { icon: MessageSquare, label: '24-Hour Service', microcopy: 'Call when it matters' },
  { icon: Building2, label: 'Full-Service Electrical', microcopy: 'Residential to agricultural' },
  { icon: MapPin, label: '300 km Coverage', microcopy: 'Steinbach based' },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-10">
        <ScrollReveal stagger className="grid grid-cols-2 lg:grid-cols-6 gap-x-3 sm:gap-x-6 gap-y-8 md:gap-y-10 lg:gap-8 lg:divide-x divide-white/5">
          {trustItems.map((item) => (
            <ScrollRevealItem key={item.label} variant="fade-up">
              <div className="flex flex-col items-center text-center gap-3 md:gap-4 px-2 sm:px-4 hover:scale-105 transition-transform duration-300">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-surface border border-white/10 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 transition-colors shadow-ambient">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-headline font-bold uppercase tracking-[0.14em] text-[#E2E8F0] text-[11px] sm:text-xs leading-snug mb-1">{item.label}</p>
                  <p className="font-mono text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] leading-snug">[{item.microcopy}]</p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
