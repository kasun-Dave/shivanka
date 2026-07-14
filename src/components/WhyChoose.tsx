import { whyChoose } from '../data/doctor';
import DynamicIcon from './DynamicIcon';

export default function WhyChoose() {
  return (
    <section id="why-choose" className="section-padding section-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Why Choose Me</span>
          <h2 className="section-title">Your Health, My Priority</h2>
          <p className="section-subtitle">
            A commitment to excellence in every aspect of patient care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => (
            <article
              key={item.id}
              className="glass-card group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 text-white shadow-lg transition-transform group-hover:scale-110">
                <DynamicIcon name={item.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-display text-lg font-bold text-navy-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
