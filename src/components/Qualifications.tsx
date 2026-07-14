import { GraduationCap, Award, Building2, BadgeCheck } from 'lucide-react';
import {
  qualifications,
  certifications,
  experience,
  affiliations,
  doctor,
} from '../data/doctor';

export default function Qualifications() {
  return (
    <section id="qualifications" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Qualifications</span>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle">
            Academic background, certifications, and professional experience.
          </p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'University', value: doctor.university, icon: GraduationCap },
            { label: 'Registration', value: doctor.registrationNumber, icon: BadgeCheck },
            { label: 'Hospital', value: doctor.hospital, icon: Building2 },
            { label: 'Clinic', value: doctor.clinic, icon: Building2 },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-5">
              <item.icon className="mb-2 h-5 w-5 text-teal-600" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-navy-700">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-navy-800">
              <GraduationCap className="h-5 w-5 text-teal-600" aria-hidden="true" />
              Academic Qualifications
            </h3>
            <div className="space-y-4">
              {qualifications.map((q) => (
                <div key={q.id} className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-navy-800">{q.title}</h4>
                      <p className="mt-1 text-sm text-navy-500">{q.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-teal-600">{q.year}</span>
                      {q.isPlaceholder && (
                        <span className="mt-1 block text-xs text-amber-600">Placeholder</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-6 mt-10 flex items-center gap-2 font-display text-xl font-bold text-navy-800">
              <Award className="h-5 w-5 text-teal-600" aria-hidden="true" />
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-5 border-l-4 border-teal-500"
                >
                  <h4 className="font-semibold text-navy-800">{cert.title}</h4>
                  <p className="mt-1 text-sm text-navy-500">{cert.issuer}</p>
                  <p className="mt-2 text-sm font-medium text-teal-600">{cert.year}</p>
                  {cert.isPlaceholder && (
                    <span className="mt-2 inline-block text-xs text-amber-600">
                      Placeholder
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-navy-800">
              <Building2 className="h-5 w-5 text-teal-600" aria-hidden="true" />
              Professional Experience
            </h3>
            <div className="relative space-y-0">
              <div
                className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-400 to-sky-300"
                aria-hidden="true"
              />
              {experience.map((exp) => (
                <div key={exp.id} className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="relative z-10 mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-md shadow-teal-500/30">
                    <span className="h-3 w-3 rounded-full bg-white" />
                  </div>
                  <div className="glass-card flex-1 rounded-2xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-semibold text-navy-800">{exp.role}</h4>
                      <span className="rounded-full bg-teal-50 px-3 py-0.5 text-xs font-medium text-teal-700">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-teal-600">
                      {exp.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {exp.description}
                    </p>
                    {exp.isPlaceholder && (
                      <span className="mt-2 inline-block text-xs text-amber-600">
                        Placeholder
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-6 mt-10 flex items-center gap-2 font-display text-xl font-bold text-navy-800">
              Affiliations
            </h3>
            <div className="space-y-3">
              {affiliations.map((aff) => (
                <div
                  key={aff.id}
                  className="glass-card flex items-center justify-between rounded-2xl p-4"
                >
                  <div>
                    <p className="font-medium text-navy-800">{aff.name}</p>
                    <p className="text-sm text-navy-500">{aff.type}</p>
                  </div>
                  {aff.isPlaceholder && (
                    <span className="text-xs text-amber-600">Placeholder</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
