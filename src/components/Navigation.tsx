import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteContext';
import { company, companyLinks } from '../config/company';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Coverage', path: '/areas' },
  { label: 'About', path: '/about' },
  { label: 'Why JA', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'border-b border-white/[0.06] shadow-[0_1px_0_rgba(18,146,232,0.16),0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-transparent'
      }`} style={isScrolled ? { background: 'rgba(11,11,11,0.84)', backdropFilter: 'blur(24px) saturate(180%)', WebkitBackdropFilter: 'blur(24px) saturate(180%)' } : {}}>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 md:py-4 max-w-7xl mx-auto gap-3">
          
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1 rounded-md px-1 sm:px-1.5 py-1 shrink-0 transition-opacity hover:opacity-95"
            aria-label={`${company.name} Home`}
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="h-10 sm:h-11 md:h-14 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
              loading="eager"
              width="180"
              height="40"
            />
          </Link>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`nav-link px-2 py-1 ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={companyLinks.phone}
              className="px-6 py-2 border border-secondary/30 text-secondary font-headline font-bold uppercase text-xs tracking-widest rounded hover:bg-secondary/10 transition-colors"
            >
              {company.phoneDisplay}
            </a>
            <button 
              onClick={openQuoteModal}
              className="btn-magnetic px-6 py-2 bg-secondary text-slate-50 font-headline font-bold uppercase text-xs tracking-widest rounded shadow-sm"
            >
              Request Quote
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-secondary transition-colors focus-visible:outline-none focus:ring-2 focus:ring-secondary rounded-lg shrink-0"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-primary/98 backdrop-blur-md pt-24
          transition-all duration-300 ease-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="px-6 py-6 flex flex-col gap-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className="text-xl font-headline font-bold uppercase tracking-widest text-slate-300 hover:text-white active:text-secondary transition-colors py-4 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 mt-8">
            <a 
              href={companyLinks.phone}
              className="w-full py-4 border border-secondary/30 text-secondary font-headline font-bold uppercase text-sm tracking-widest rounded flex justify-center items-center"
            >
              {company.phoneDisplay}
            </a>
            {/* Hidden on mobile menu per user request to keep only one 'top' button (in hero) or in bottom bar */}
            {/* <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-4 bg-secondary text-slate-50 font-headline font-bold uppercase text-sm tracking-widest rounded flex justify-center items-center"
            >
              Request Quote
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
