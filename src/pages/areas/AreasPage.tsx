import { Clock, ShieldCheck, Navigation } from 'lucide-react';
import { InteractiveMap } from '../../components/areas/InteractiveMap';
import { useQuoteModal } from '../../context/QuoteContext';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { breadcrumbSchema } from '../../lib/schemas';
import { company, serviceAreas } from '../../config/company';

export function AreasPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      <SEO
        title="Service Areas | JA Electric | Steinbach & Surrounding Region"
        description="JA Electric is based in Steinbach and serves communities within roughly 300 kilometres with residential, commercial, agricultural, maintenance, and specialty electrical work."
        canonical="/areas"
      />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/areas' },
      ])} />
      <main className="pt-24 min-h-screen bg-primary">
        {/* Header Section */}
        <section className="relative overflow-hidden py-24 mb-16 px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,146,232,0.14),transparent_50%)]"></div>
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-block px-3 py-1 bg-surface border border-white/5 text-slate-400 rounded-full text-xs font-headline font-bold tracking-[0.2em] uppercase mb-4">
              Deployment Zones
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6 uppercase">
              Service <span className="text-secondary">Areas</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              JA Electric is rooted in Steinbach and works across the surrounding region for residential, commercial, agricultural, maintenance, and specialty electrical clients.
            </p>
          </div>
        </section>

        {/* Map & Metrics */}
        <section className="px-6 lg:px-8 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Tactical Map Container */}
            <div className="lg:col-span-8 bg-surface border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl h-[600px] group/map">
              <InteractiveMap />

              {/* Map Decorative Overlays */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="flex flex-col gap-2">
                    <div className="bg-primary/80 backdrop-blur-md border border-white/10 p-2 rounded flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Lat: 49.5301° N</span>
                  </div>
                  <div className="bg-primary/80 backdrop-blur-md border border-white/10 p-2 rounded flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Long: 96.6845° W</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zones & Speeds */}
            <div className="lg:col-span-4 flex flex-col gap-6">

              <div className="bg-surface rounded-2xl border border-white/5 p-8 hover:border-secondary/30 transition-all group">
                <div className="w-12 h-12 rounded bg-primary border border-white/10 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-2">Core Sectors</h3>
                <ul className="space-y-3 mt-4 text-sm text-slate-400">
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-headline font-bold uppercase">{serviceAreas[0]}</span>
                    <span className="text-secondary font-mono">HQ</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-headline font-bold uppercase">{serviceAreas[1]}</span>
                    <span className="text-slate-500 font-mono">SEC-1</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-headline font-bold uppercase">{serviceAreas[2]}</span>
                    <span className="text-slate-500 font-mono">SEC-2</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="font-headline font-bold uppercase">{serviceAreas[4]}</span>
                    <span className="text-slate-500 font-mono">SEC-3</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-2xl border border-white/5 p-8 flex-1 flex flex-col shadow-ambient text-center items-center justify-center">
                <Clock className="w-12 h-12 text-secondary mb-4 opacity-80" />
                <h4 className="font-headline font-bold text-white uppercase tracking-widest text-sm mb-2">Coverage Focus</h4>
                <div className="text-4xl font-headline font-black text-white mb-2 tracking-tighter">{company.city}</div>
                <p className="text-xs text-slate-500 max-w-[200px]">Local base with service extending across Manitoba communities and rural sites within about 300 kilometres.</p>
              </div>

            </div>
          </div>

          {/* Global Banner */}
          <div className="max-w-7xl mx-auto mt-12 bg-secondary/10 border border-secondary/30 rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-secondary" />
              <div>
                <h4 className="font-headline font-bold text-white uppercase tracking-widest text-sm mb-1">Out of Bounds Request</h4>
                <p className="text-xs text-slate-400">Need work outside the core Steinbach area? Reach out and we’ll confirm the best fit for your job.</p>
              </div>
            </div>
            <button
              onClick={openQuoteModal}
              className="bg-surface border border-secondary text-secondary hover:bg-secondary hover:text-slate-50 transition-colors px-6 py-3 rounded text-xs font-headline font-black uppercase tracking-widest shrink-0"
            >
              Request Coverage
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
