import { GraduationCap, Heart, Users } from 'lucide-react';
import { doctor } from '../data/doctor';
import SafeImage from './SafeImage';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Dedicated to Your Health &amp; Wellbeing</h2>
          <p className="section-subtitle">
            Learn more about my approach to medicine and patient care.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-100/50 to-sky-100/50 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-navy-100">
              <SafeImage
                src="/images/profile/doctor-about.jpg"
                alt={`${doctor.name} — About`}
                className="aspect-[4/5] w-full object-cover object-top"
                placeholderLabel="About Photo"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-navy-600 sm:text-lg">
              {doctor.biography}
            </p>

            <div className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy-800">
                  Medical Philosophy
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">{doctor.philosophy}</p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy-800">
                  Personalised Patient Care
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                {doctor.personalizedCare}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 rounded-xl bg-navy-50 px-4 py-2.5">
                <GraduationCap className="h-4 w-4 text-navy-500" aria-hidden="true" />
                <span className="text-sm font-medium text-navy-700">
                  {doctor.school}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-teal-50 px-4 py-2.5">
                <span className="text-sm font-medium text-teal-700">
                  {doctor.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
