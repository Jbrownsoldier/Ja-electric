import { useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { breadcrumbSchema } from '../../lib/schemas';
import { company, companyLinks } from '../../config/company';

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  {
    title: 'Owned / Operated Locally',
    eyebrow: 'Steinbach based',
    text:
      'JA Electric is a Steinbach electrical contractor serving a broad regional area with practical support across residential, commercial, agricultural, maintenance, and specialty work.',
    initials: 'LO',
  },
  {
    title: 'Licensed Electricians',
    eyebrow: 'Experienced leadership',
    text:
      'JA Electric highlights licensed electricians and experienced staff, giving clients dependable field leadership on demanding jobs.',
    initials: 'LE',
  },
  {
    title: 'Established in 2010',
    eyebrow: 'Depth in the field',
    text:
      'JA Electric has been serving customers since 2010, giving clients a team that can move between maintenance, upgrades, and specialty work with confidence.',
    initials: '10',
  },
  {
    title: 'Residential, Commercial, Agricultural, Specialty',
    eyebrow: 'All major sectors',
    text:
      'JA Electric serves homes, commercial properties, agricultural operations, and specialty project clients across the surrounding region.',
    initials: 'SV',
  },
  {
    title: 'Design-Build and Maintenance',
    eyebrow: 'Start to finish',
    text:
      'JA Electric supports both new project delivery and ongoing maintenance, including design builds, communications, generators, underground locating, and practical operational upgrades.',
    initials: 'DB',
  },
  {
    title: 'Preventative Maintenance',
    eyebrow: 'Built for reliability',
    text:
      'Preventative maintenance, inspections, and underground cable locating help clients reduce risk before downtime becomes a bigger problem.',
    initials: 'PM',
  },
  {
    title: 'Emergency Repair',
    eyebrow: 'Quick turnaround',
    text:
      'Emergency repair and 24-hour phone service help clients respond quickly when downtime, safety concerns, or urgent electrical failures appear.',
    initials: 'ER',
  },
  {
    title: 'Power Distribution, Lighting, Life Safety',
    eyebrow: 'Commercial and industrial systems',
    text:
      'Commercial support includes installations, maintenance, upgrades, and practical electrical solutions that keep properties safe and operational.',
    initials: 'PL',
  },
  {
    title: 'Seed Plants and Feed Mills',
    eyebrow: 'Agricultural specialization',
    text:
      'Agricultural work includes seed plants, feed mills, and other operations that need dependable electrical support built around real-world production demands.',
    initials: 'AG',
  },
  {
    title: 'Super Service Award',
    eyebrow: 'Recognized for service',
    text:
      'JA Electric highlights a Super Service Award as one of the trust signals behind its commitment to customer service.',
    initials: 'SS',
  },
  {
    title: 'Safety First',
    eyebrow: 'Strict safety culture',
    text:
      'A strong safety culture and attention to quality and customer satisfaction are central parts of how JA Electric operates.',
    initials: 'SF',
  },
  {
    title: 'Detailed Quotes from Senior Staff',
    eyebrow: 'Thoughtful planning',
    text:
      'Detailed quotes are prepared by senior team members with attention to the right configuration, equipment, and long-term cost-effective operation of the system.',
    initials: 'QT',
  },
];

export function ReviewsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = scrollContainerRef.current;

      if (!track || !container) return;

      const totalScroll = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        gsap.to(track, {
          xPercent: (xPos / (track.scrollWidth / window.innerWidth)) * 0.5,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Why JA Electric | Steinbach Electrical Contractor"
        description="Explore the JA Electric strengths that define the business across Steinbach and the surrounding region: licensed electricians, responsive service, agricultural and commercial experience, maintenance support, and practical project solutions."
        canonical="/reviews"
      />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Why JA Electric', path: '/reviews' },
      ])} />
      <main className="min-h-screen bg-primary pt-24 overflow-x-hidden">
        <section className="relative py-20 px-6 lg:px-8 text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/10 rounded-full blur-[80px]"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-white/5 text-slate-400 rounded-full text-xs font-headline font-bold tracking-[0.2em] uppercase mb-6">
              <Zap className="w-3 h-3 animate-pulse text-secondary" />
              Why JA
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-6 uppercase">
              JA <span className="text-secondary">Highlights</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore the strengths that define {company.name} across Steinbach
              and the surrounding region, from field experience and maintenance support
              to safety, service, and local accountability.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12 mb-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-headline font-black text-white italic">2010</div>
                <div className="flex gap-1 my-2">
                  {[1, 2].map((item) => (
                    <CheckCircle2 key={item} className="w-4 h-4 text-secondary" />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Established</div>
              </div>
              <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-headline font-black text-white">24-HR</div>
                <div className="flex gap-1 my-2 text-secondary font-headline font-bold text-xs uppercase tracking-tighter">
                  Service Response
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">When urgent</div>
              </div>
            </div>
          </div>
        </section>

        <section ref={scrollContainerRef} className="relative h-screen flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <div className="font-headline font-black text-[25vw] uppercase leading-none whitespace-nowrap">
              LOCAL • RELIABLE • EXPERIENCED
            </div>
          </div>

          <div className="w-full">
            <div
              ref={trackRef}
              className="flex gap-8 px-[10vw] w-max will-change-transform py-20"
            >
              {HIGHLIGHTS.map((highlight, idx) => (
                <div
                  key={idx}
                  className="w-[85vw] md:w-[450px] flex-shrink-0 bg-surface border border-white/5 p-8 md:p-10 rounded-2xl relative group hover:border-secondary/30 transition-all duration-500 shadow-2xl glass-card backdrop-blur-md"
                >
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-secondary/10 transition-colors" />

                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((item) => (
                      <span key={item} className="w-2.5 h-2.5 rounded-full bg-secondary/80" />
                    ))}
                  </div>

                  <p className="text-white text-lg md:text-xl leading-relaxed mb-10 font-medium italic relative z-10">
                    "{highlight.text}"
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-8">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-slate-50 font-headline font-black text-lg shadow-lg shadow-secondary/20">
                      {highlight.initials}
                    </div>
                    <div>
                      <h4 className="text-white font-headline font-bold uppercase tracking-tight text-base">{highlight.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 font-mono italic">{highlight.eyebrow}</span>
                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                        <span className="text-[10px] text-secondary font-headline uppercase font-bold tracking-widest">JA Focus</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-[10px] font-headline font-bold text-slate-500 uppercase tracking-widest leading-none">Scroll to Explore</span>
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary"
                style={{
                  animation: 'scroll-progress-line 3s infinite linear',
                }}
              />
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 border-t border-white/5 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 bg-surface border border-white/5 px-4 py-2 rounded-full">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="text-white text-sm font-headline font-bold uppercase tracking-tight">Ready to Talk</span>
            </div>

            <h2 className="font-headline text-4xl font-black text-white uppercase mb-8 tracking-tighter">
              Plan Your Next <span className="text-secondary italic">Project</span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Senior team members prepare detailed quotes with the right
              configuration, equipment, and long-term maintenance in mind. Reach
              out when you are ready to plan the next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={companyLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-primary px-8 py-4 rounded font-headline font-black uppercase tracking-widest text-xs hover:bg-secondary transition-colors w-full sm:w-auto justify-center"
              >
                Visit JAElectricInc.ca
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="/contact"
                className="btn btn-outline px-8 py-4 w-full sm:w-auto"
              >
                Book Your Project
              </a>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes scroll-progress-line {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .glass-card {
            background: rgba(10, 25, 47, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        `}</style>
      </main>
    </>
  );
}
