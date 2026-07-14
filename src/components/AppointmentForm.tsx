import { useState } from 'react';
import { Send, AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { consultationTypes } from '../data/doctor';
import {
  buildWhatsAppMessage,
  getWhatsAppUrl,
  isWhatsAppConfigured,
  type AppointmentData,
} from '../utils/whatsapp';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  consultationType?: string;
}

const initialForm: AppointmentData = {
  fullName: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  consultationType: consultationTypes[0],
  message: '',
};

function validate(data: AppointmentData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const phoneDigits = data.phone.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 9) {
    errors.phone = 'Please enter a valid phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date.';
  } else {
    const selected = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.preferredDate = 'Please select a future date.';
    }
  }

  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a preferred time.';
  }

  if (!data.consultationType) {
    errors.consultationType = 'Please select a consultation type.';
  }

  return errors;
}

export default function AppointmentForm() {
  const [form, setForm] = useState<AppointmentData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
    setDemoMode(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = buildWhatsAppMessage(form);
    const url = getWhatsAppUrl(message);

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
      setDemoMode(false);
    } else {
      setDemoMode(true);
      setSubmitted(true);
    }
  };

  return (
    <section id="appointments" className="section-padding section-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-label">Appointments</span>
          <h2 className="section-title">Book an Appointment</h2>
          <p className="section-subtitle">
            Fill in the form below and your request will be sent via WhatsApp.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? 'form-input-error' : ''}`}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="form-error" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                  placeholder="+94 XX XXX XXXX"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="form-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="preferredDate" className="form-label">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className={`form-input ${errors.preferredDate ? 'form-input-error' : ''}`}
                  aria-invalid={!!errors.preferredDate}
                  aria-describedby={
                    errors.preferredDate ? 'preferredDate-error' : undefined
                  }
                />
                {errors.preferredDate && (
                  <p id="preferredDate-error" className="form-error" role="alert">
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="preferredTime" className="form-label">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className={`form-input ${errors.preferredTime ? 'form-input-error' : ''}`}
                  aria-invalid={!!errors.preferredTime}
                  aria-describedby={
                    errors.preferredTime ? 'preferredTime-error' : undefined
                  }
                />
                {errors.preferredTime && (
                  <p id="preferredTime-error" className="form-error" role="alert">
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="consultationType" className="form-label">
                  Consultation Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={form.consultationType}
                  onChange={handleChange}
                  className={`form-input ${errors.consultationType ? 'form-input-error' : ''}`}
                  aria-invalid={!!errors.consultationType}
                >
                  {consultationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.consultationType && (
                  <p className="form-error" role="alert">
                    {errors.consultationType}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="form-label">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Describe your symptoms or reason for visit..."
                />
              </div>
            </div>

            {!isWhatsAppConfigured() && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <p>
                  <strong>Demo mode:</strong> WhatsApp number is not configured yet.
                  Add your number in <code className="text-xs">src/data/doctor.ts</code>{' '}
                  to enable live appointment requests.
                </p>
              </div>
            )}

            {submitted && !demoMode && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-teal-50 p-4 text-sm text-teal-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <p>
                  Your appointment request has been prepared. WhatsApp should open
                  in a new tab — please send the message to complete your request.
                </p>
              </div>
            )}

            {submitted && demoMode && (
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-sky-50 p-4 text-sm text-sky-800">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium">Demo — WhatsApp not configured</p>
                  <p className="mt-1">
                    Your form is valid. Configure{' '}
                    <code className="text-xs">doctor.whatsapp</code> in{' '}
                    <code className="text-xs">src/data/doctor.ts</code> with a
                    number like <code className="text-xs">94771234567</code> to
                    enable WhatsApp submission.
                  </p>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-white/60 p-3 text-xs text-navy-700">
                    {buildWhatsAppMessage(form)}
                  </pre>
                </div>
              </div>
            )}

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <Send className="h-4 w-4" aria-hidden="true" />
              {isWhatsAppConfigured()
                ? 'Send via WhatsApp'
                : 'Submit (Demo Mode)'}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-navy-400">
            For medical emergencies, please call emergency services immediately.
            This form is not for urgent medical situations.
          </p>
        </div>
      </div>
    </section>
  );
}
