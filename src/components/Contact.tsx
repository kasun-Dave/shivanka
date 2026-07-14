import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { doctor } from '../data/doctor';
import { isWhatsAppConfigured } from '../utils/whatsapp';

function ContactLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const isPlaceholder = href.includes('[PLACEHOLDER]') || !href;

  if (isPlaceholder) {
    return <div className="text-navy-700">{children}</div>;
  }

  return (
    <a
      href={href}
      className="text-navy-700 transition-colors hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const phoneHref = doctor.phone.includes('[PLACEHOLDER]')
    ? ''
    : `tel:${doctor.phone.replace(/\s/g, '')}`;

  const emailHref = doctor.email.includes('[PLACEHOLDER]')
    ? ''
    : `mailto:${doctor.email}`;

  const whatsappNumber = doctor.whatsapp.replace(/\D/g, '');
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : '';

  return (
    <section id="contact" className="section-padding section-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Reach out for appointments, inquiries, or general questions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: (
                  <ContactLink href={phoneHref} label={`Call ${doctor.phone}`}>
                    <span className="font-medium">{doctor.phone}</span>
                  </ContactLink>
                ),
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                content: isWhatsAppConfigured() ? (
                  <ContactLink
                    href={whatsappHref}
                    label="Message on WhatsApp"
                    external
                  >
                    <span className="font-medium">
                      +{whatsappNumber}
                    </span>
                  </ContactLink>
                ) : (
                  <span className="text-navy-500">
                    [PLACEHOLDER] Configure WhatsApp number
                  </span>
                ),
              },
              {
                icon: Mail,
                title: 'Email',
                content: (
                  <ContactLink href={emailHref} label={`Email ${doctor.email}`}>
                    <span className="font-medium">{doctor.email}</span>
                  </ContactLink>
                ),
              },
              {
                icon: MapPin,
                title: 'Clinic Address',
                content: (
                  <span className="font-medium">{doctor.clinicAddress}</span>
                ),
              },
              {
                icon: Clock,
                title: 'Consultation Hours',
                content: (
                  <span className="font-medium">{doctor.consultationHours}</span>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass-card flex gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-base">{item.content}</div>
                </div>
              </div>
            ))}

            <a
              href="#appointments"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('appointments')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary mt-4 inline-flex"
            >
              Book Appointment
            </a>
          </div>

          <div>
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-navy-100 px-5 py-3">
                <h3 className="font-display font-bold text-navy-800">
                  Location
                </h3>
                <a
                  href={doctor.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
                >
                  Open in Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sky-50 to-teal-50">
                <iframe
                  title="Clinic location on Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(doctor.clinicAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
