import {
  MapPin,
  HeartHandshake,
  Award,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { doctor, trustIndicators, profileImages } from '../data/doctor';
import SafeImage from './SafeImage';
import DynamicIcon from './DynamicIcon';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50/30" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm font-medium text-teal-700">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {doctor.location}
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
              {doctor.name}
            </h1>

            <p className="mt-3 text-lg font-medium text-teal-600 sm:text-xl">
              {doctor.specialty}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              {doctor.shortIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo('appointments')}
                className="btn-primary group"
              >
                Book Appointment
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-secondary group"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Contact Doctor
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustIndicators.map((item) => (
                <div
                  key={item.id}
                  className="glass-card flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <DynamicIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-navy-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400/20 to-sky-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/10 ring-1 ring-white/50">
                <SafeImage
                  src={profileImages.main}
                  alt={`Professional portrait of ${doctor.name}`}
                  className="aspect-[3/4] w-full object-cover object-top"
                  loading="eager"
                  placeholderLabel="Doctor Portrait"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3 shadow-lg sm:-bottom-6 sm:-left-6">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy-800">
                    Patient-Focused Care
                  </span>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 glass-card rounded-2xl px-5 py-3 shadow-lg sm:-right-6 sm:-top-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy-800">
                    {doctor.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
