import { Star, Info } from 'lucide-react';
import { testimonials } from '../data/doctor';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Patients Say</h2>
          <p className="section-subtitle">
            Patient feedback and experiences.
          </p>
        </div>

        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            <strong>Sample content:</strong> The testimonials below are
            placeholders for demonstration only. They are not verified patient
            reviews. Replace with real testimonials (with consent) or disable
            this section by setting{' '}
            <code className="text-xs">showTestimonials: false</code> in{' '}
            <code className="text-xs">src/data/doctor.ts</code>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="glass-card rounded-2xl p-6"
            >
              <div className="mb-3 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-navy-200'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-navy-600 italic">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="text-sm font-semibold text-navy-800 not-italic">
                  {item.name}
                </cite>
                {item.isSample && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                    Sample
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
