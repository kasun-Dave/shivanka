import { services } from '../data/doctor';
import DynamicIcon from './DynamicIcon';

export default function Services() {
  return (
    <section id="services" className="section-padding section-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">Medical Services</h2>
          <p className="section-subtitle">
            Comprehensive healthcare services tailored to your needs.
            <span className="mt-1 block text-sm text-amber-600">
              Services marked below are placeholders — update in src/data/doctor.ts
            </span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-md shadow-teal-500/25 transition-transform group-hover:scale-110">
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </span>
                {service.isPlaceholder && (
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Placeholder
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-bold text-navy-800">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
