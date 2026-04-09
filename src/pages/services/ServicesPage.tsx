import { Factory, Zap, ShieldCheck, Cpu, HardDrive, Lightbulb } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { breadcrumbSchema } from '../../lib/schemas';

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Electrical Services | JA Electric | Steinbach, MB"
        description="Explore JA Electric services for residential, commercial, agricultural, maintenance, and specialty electrical work across Steinbach and the surrounding region."
        canonical="/services"
      />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])} />
      <main className="pt-24 min-h-screen bg-primary">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20"
              alt="Cinematic abstract electrical grid"
              src="/hero-abstract-grid.png"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary rounded-full text-xs font-headline font-bold tracking-[0.2em] uppercase mb-6">
                <Zap className="w-3 h-3 animate-pulse" />
                JA_Electric
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 uppercase">
                FIELD-READY <br/><span className="text-secondary">ELECTRICAL.</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                JA Electric serves Steinbach and the surrounding region with specialty, commercial, residential, agricultural, and maintenance electrical work.
              </p>
            </div>
          </div>
        </section>

        {/* Industrial / Commercial Systems */}
        <section className="px-6 lg:px-8 py-24 bg-primary relative overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-xl blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>
              <img
                className="relative rounded-xl w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 border border-white/10 transition-all duration-700"
                alt="High tech industrial electrical system"
                src="/service-industrial.png"
                loading="lazy"
              />
              <div className="absolute top-8 right-8 bg-surface border border-secondary/30 text-secondary font-headline font-black p-4 rounded-lg text-4xl shadow-ambient">01</div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-start lg:pl-12">
              <h2 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">Specialty &amp; Commercial</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                From specialty installations and project support to commercial buildings, business properties, and service spaces, JA Electric delivers practical electrical work with an eye for quality.
              </p>
              <ul className="space-y-4 mb-10 w-full">
                <li className="flex items-center gap-4 p-4 bg-surface/50 border border-white/5 rounded-lg hover:border-secondary/30 hover:bg-surface transition-colors group">
                  <Factory className="text-slate-500 group-hover:text-secondary transition-colors w-6 h-6" />
                  <span className="font-headline font-bold tracking-wide uppercase text-sm text-slate-300 group-hover:text-secondary">Specialty Installations</span>
                </li>
                <li className="flex items-center gap-4 p-4 bg-surface/50 border border-white/5 rounded-lg hover:border-secondary/30 hover:bg-surface transition-colors group">
                  <HardDrive className="text-slate-500 group-hover:text-secondary transition-colors w-6 h-6" />
                  <span className="font-headline font-bold tracking-wide uppercase text-sm text-slate-300 group-hover:text-secondary">Project Planning</span>
                </li>
                <li className="flex items-center gap-4 p-4 bg-surface/50 border border-white/5 rounded-lg hover:border-secondary/30 hover:bg-surface transition-colors group">
                  <ShieldCheck className="text-slate-500 group-hover:text-secondary transition-colors w-6 h-6" />
                  <span className="font-headline font-bold tracking-wide uppercase text-sm text-slate-300 group-hover:text-secondary">Communications &amp; Boring</span>
                </li>
              </ul>
              <a href="#contact-form" className="bg-secondary text-slate-50 px-8 py-3 rounded text-xs font-headline font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(18,146,232,0.22)]">
                Request a Project Quote
              </a>
            </div>
          </div>
        </section>

        {/* Residential / Agricultural */}
        <section className="px-6 lg:px-8 py-24 bg-surface border-y border-white/5 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Residential &amp; Agricultural</h2>
                <p className="text-slate-400 text-lg">Homes, acreages, barns, farm support spaces, and renovation projects all benefit from the same JA Electric standard of workmanship.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <div className="text-secondary font-headline font-bold tracking-[0.2em] uppercase text-xs">Homes, Shops &amp; Farms</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-surface/80 border border-white/5 p-8 rounded-xl hover:bg-surface hover:border-secondary/30 transition-colors group">
                <Cpu className="text-slate-500 group-hover:text-secondary mb-6 w-10 h-10 transition-colors" />
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Residential Upgrades</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Service work, renovations, smart homes, generators, surge protection, and home electrical improvements handled with careful planning.</p>
              </div>
              <div className="bg-surface/80 border border-white/5 p-8 rounded-xl hover:bg-surface hover:border-secondary/30 transition-colors group">
                <ShieldCheck className="text-slate-500 group-hover:text-secondary mb-6 w-10 h-10 transition-colors" />
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Agricultural Power</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Electrical support for farms, rural properties, outbuildings, and agricultural operations that can’t afford unreliable systems.</p>
              </div>
              <div className="bg-surface/80 border border-white/5 p-8 rounded-xl hover:bg-surface hover:border-secondary/30 transition-colors group">
                <Lightbulb className="text-slate-500 group-hover:text-secondary mb-6 w-10 h-10 transition-colors" />
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Design-Build Support</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Design builds, project budgeting, project management, and practical planning shaped around how the finished space will really be used.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Maintenance */}
        <section className="px-6 lg:px-8 py-24 bg-primary">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                className="rounded-xl w-full aspect-square object-cover grayscale opacity-60 border border-white/10"
                alt="Professional engineer inspecting circuit architecture"
                src="/service-maintenance.png"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary p-12 rounded-xl hidden md:flex flex-col items-center justify-center shadow-ambient border border-secondary/50">
                <span className="block text-primary font-headline font-black text-6xl leading-none mb-1">24/7</span>
                <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs">Response Unit</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Maintenance &amp; Emergency Support</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                JA Electric supports clients after installation too, with maintenance, 24-hour service, infra-red scanning, underground cable locating, and practical diagnostics that keep systems online.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <span className="text-secondary font-headline font-black text-xl group-hover:scale-110 transition-transform">/</span>
                  <div>
                    <h4 className="text-white font-headline font-bold uppercase text-sm mb-2 tracking-widest">Preventative Maintenance</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Planned inspections and service work that help reduce surprise outages and extend equipment life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="text-secondary font-headline font-black text-xl group-hover:scale-110 transition-transform">/</span>
                  <div>
                    <h4 className="text-white font-headline font-bold uppercase text-sm mb-2 tracking-widest">Power Quality Analysis</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Clear troubleshooting and load evaluation to help identify recurring performance issues before they become bigger failures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="text-secondary font-headline font-black text-xl group-hover:scale-110 transition-transform">/</span>
                  <div>
                    <h4 className="text-white font-headline font-bold uppercase text-sm mb-2 tracking-widest">Emergency Repair</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">24-hour phone service and fast response for breakdowns, safety concerns, and urgent electrical disruptions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
