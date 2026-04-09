import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';
import { company, companyLinks } from '../config/company';

export function Hero() {
  const { openQuoteModal } = useQuoteModal();

  const sectionRef  = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const subTextRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let active = true;

    const setupAnimations = async () => {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!isDesktop || prefersReducedMotion) {
        return;
      }

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
          const section = sectionRef.current;
          const headline = headlineRef.current;
          const cta = ctaRef.current;
          const sub = subTextRef.current;

          if (!section || !headline || !cta || !sub) return;

          gsap.set(sub, { autoAlpha: 0, y: 40 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=150%',
              pin: true,
              scrub: 1.2,
              anticipatePin: 1,
            },
          });

          tl.addLabel('hold-start', 0)
            .addLabel('hold-end', 0.2)
            .to(
              headline,
              { scale: 1.05, autoAlpha: 0, ease: 'power2.inOut' },
              0.2
            )
            .to(cta, { autoAlpha: 0, ease: 'power2.inOut' }, 0.2)
            .addLabel('headline-gone', 0.6)
            .to(sub, { autoAlpha: 1, y: 0, ease: 'power3.out' }, 0.6)
            .addLabel('sub-visible', 0.85);
        });

        mm.add('(max-width: 767px), (prefers-reduced-motion: reduce)', () => {
          gsap.set([headlineRef.current, ctaRef.current, subTextRef.current], {
            clearProps: 'all',
          });
        });
      }, sectionRef);
    };

    setupAnimations();

    return () => {
      active = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-video-section relative w-full h-screen overflow-hidden bg-primary"
    >
      <video
        className="hero-video-bg"
        src="/electric-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />

      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="absolute inset-0 grid-pulse pointer-events-none opacity-20 md:opacity-30" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-5 sm:px-6 md:px-12 text-center">
        <span className="text-secondary font-headline font-bold tracking-[0.16em] md:tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm mb-5 md:mb-6 bg-secondary/10 px-3.5 sm:px-4 py-1.5 rounded-full border border-secondary/20 inline-block">
          Electrical Contractor · {company.serviceAreaShort}
        </span>

        <div ref={headlineRef} className="will-change-transform will-change-opacity max-w-5xl">
          <h1 className="hero-headline">
            Powering {company.city} with{' '}
            <span className="text-secondary">Reliable,</span>{' '}
            <span className="text-secondary">Full-Service Electrical Expertise.</span>
          </h1>
        </div>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-8 md:mt-10 will-change-opacity w-full sm:w-auto"
        >
          <button
            onClick={openQuoteModal}
            className="hero-cta-primary btn-magnetic w-full sm:w-auto justify-center"
            aria-label="Get a free electrical quote"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </button>

          <a
            href={companyLinks.phone}
            className="hero-cta-secondary w-full sm:w-auto justify-center"
            aria-label={`Call ${company.name}`}
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{company.phoneDisplay}</span>
          </a>
        </div>

        <div
          ref={subTextRef}
          className="max-w-3xl mt-0 will-change-opacity"
        >
          <p className="hero-sub-text">
            JA Electric has served Steinbach and surrounding communities since
            2010 with licensed electricians, quick response times, and
            dependable residential, commercial, agricultural, maintenance, and
            specialty electrical support.
          </p>

          <button
            onClick={openQuoteModal}
            className="hidden md:flex hero-cta-primary btn-magnetic mt-8"
            aria-label="Get a free electrical quote"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.88) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-pill" />
      </div>
    </section>
  );
}
