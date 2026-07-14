import { Stethoscope, Globe } from 'lucide-react';
import { doctor, navLinks } from '../data/doctor';

const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSocials = (
    Object.entries(doctor.social) as [keyof typeof doctor.social, string | undefined][]
  ).filter(([, url]) => url && url.length > 0);

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600">
                <Stethoscope className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display font-bold">{doctor.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-300">
              {doctor.specialty}
            </p>
            <p className="mt-1 text-sm text-navy-400">{doctor.location}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-navy-300 transition-colors hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-300">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-navy-300">
              <li>{doctor.phone}</li>
              <li>{doctor.email}</li>
              <li>{doctor.clinicAddress}</li>
            </ul>

            {activeSocials.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {activeSocials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-navy-800 px-3 py-1.5 text-sm text-navy-300 transition-colors hover:bg-teal-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    aria-label={socialLabels[key] ?? key}
                  >
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                    {socialLabels[key] ?? key}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-8">
          <p className="text-center text-xs leading-relaxed text-navy-400">
            Information on this website is for general informational purposes and
            does not replace professional medical advice, diagnosis, or emergency
            care.
          </p>
          <p className="mt-3 text-center text-sm text-navy-500">
            &copy; {year} {doctor.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
