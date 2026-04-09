import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';
import { company, companyLinks } from '../config/company';

const serviceLinks = [
  { label: 'Residential Electrical', to: '/residential-electrical' },
  { label: 'Specialty Electrical', to: '/specialty-electrical' },
  { label: 'Maintenance & Repair', to: '/maintenance-repair' },
  { label: 'Agricultural Electrical', to: '/agricultural-electrical' },
  { label: 'Commercial Electrical', to: '/commercial-electrical' },
  { label: 'All Services', to: '/services' },
];

const exploreLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/areas' },
  { label: 'Why JA', to: '/reviews' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface w-full rounded-t-none">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 w-full max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <Link to="/" aria-label={`${company.name} Home`}>
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="h-16 w-auto object-contain mb-4 drop-shadow-[0_0_20px_rgba(18,146,232,0.18)]"
              loading="lazy"
              width="250"
              height="60"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">Steinbach-based electrical contracting for residential, commercial, agricultural, maintenance, and specialty work across a 300 km service area.</p>
          <div className="flex space-x-4">
            <a href={companyLinks.website} className="text-slate-400 hover:text-secondary transition-colors" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
            <a href={companyLinks.email} className="text-slate-400 hover:text-secondary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href={companyLinks.phone} className="text-slate-400 hover:text-secondary transition-colors" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6 text-xs uppercase tracking-widest">Solutions</h4>
          <ul className="space-y-4">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-slate-400 hover:text-white transition-transform duration-200 inline-block hover:translate-x-1 text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6 text-xs uppercase tracking-widest">Company</h4>
          <ul className="space-y-4">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-slate-400 hover:text-white transition-transform duration-200 inline-block hover:translate-x-1 text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-headline font-bold mb-6 text-xs uppercase tracking-widest">Project Planning</h4>
          <p className="text-slate-400 text-sm mb-4">Talk with JA Electric about estimates, scheduling, maintenance support, or 24-hour service across Steinbach and the surrounding region.</p>
          <div className="flex flex-col gap-3">
            <a
              href={companyLinks.phone}
              className="bg-primary/50 border border-white/5 rounded-md px-4 py-3 text-white text-sm hover:border-secondary/40 hover:text-secondary transition-colors"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={companyLinks.email}
              className="bg-primary/50 border border-white/5 rounded-md px-4 py-3 text-white text-sm hover:border-secondary/40 hover:text-secondary transition-colors"
            >
              {company.email}
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            Licensed Electricians · Established 2010
          </p>
        </div>
      </div>

      <div className="px-8 py-8 bg-surface border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">© {year} {company.legalName}. All rights reserved.</p>
        <p className="text-slate-500 text-xs">{company.addressText}</p>
      </div>
    </footer>
  );
}
