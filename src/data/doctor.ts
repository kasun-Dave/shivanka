import type {
  Affiliation,
  Certification,
  DoctorProfile,
  Experience,
  GalleryItem,
  Qualification,
  Service,
  SiteConfig,
  Testimonial,
  TrustIndicator,
  WhyChooseItem,
} from '../types/doctor';

// =============================================================================
// EDIT DOCTOR INFORMATION HERE
// Replace all [PLACEHOLDER] values before publishing the website.
// =============================================================================

export const siteConfig: SiteConfig = {
  siteName: 'Dr. Shivanka Rajapakshe',
  siteDescription:
    'Medical doctor at Base Hospital Mahiyanganaya, Sri Lanka. Patient-focused care with evidence-based treatment.',
  // Set to false to hide the testimonials section entirely
  showTestimonials: true,
};

export const doctor: DoctorProfile = {
  name: 'Dr. Shivanka Rajapakshe',
  title: 'Medical Doctor',
  location: 'Mahiyanganaya, Sri Lanka',
  school: 'Dharmaraja College',
  // [PLACEHOLDER] — Replace with actual medical specialty
  specialty: '[PLACEHOLDER] Medical Specialty — e.g. General Practitioner',
  shortIntro:
    'Medical doctor serving patients at Base Hospital Mahiyanganaya. Dedicated to compassionate, patient-centred healthcare and evidence-based medicine.',
  biography:
    'Dr. Shivanka Rajapakshe is a medical doctor at Base Hospital Mahiyanganaya, Sri Lanka — a government hospital serving the Mahiyanganaya community. Educated at Dharmaraja College, he is committed to personalised patient care, clear communication, and thorough clinical consultation for every patient.',
  // [PLACEHOLDER] — Replace with actual medical philosophy
  philosophy:
    '[PLACEHOLDER] I believe that good medicine begins with listening. Every patient deserves time, clarity, and treatment plans grounded in the latest medical evidence. Replace this with the doctor\'s personal medical philosophy.',
  personalizedCare:
    'Every patient is unique. I take the time to understand your concerns, explain diagnoses clearly, and work with you to develop a care plan that fits your life and health goals.',
  // [PLACEHOLDER] — Replace with actual registration number
  registrationNumber: '[PLACEHOLDER] SLMC Registration Number',
  // [PLACEHOLDER] — Replace with actual university
  university: '[PLACEHOLDER] Medical University Name',
  hospital: 'Base Hospital Mahiyanganaya',
  clinic: 'Base Hospital Mahiyanganaya',
  phone: '055 493 6722',
  // [PLACEHOLDER] — Replace with actual WhatsApp number (digits only, e.g. 94771234567)
  whatsapp: '',
  // [PLACEHOLDER] — Replace with actual email
  email: '[PLACEHOLDER] doctor@email.com',
  consultationHours: 'Open 24 hours (Government Hospital)',
  clinicAddress:
    'Base Hospital Mahiyanganaya, Bibile - Uraniya - Mahiyanganaya Rd, Mahiyanganaya, Sri Lanka',
  googleMapsUrl:
    'https://www.google.com/maps/search/Base+Hospital+Mahiyanganaya',
  // [PLACEHOLDER] — Replace with actual canonical URL after deployment
  canonicalUrl: 'https://kasun-dave.github.io/shivanka/',
  social: {
    // [PLACEHOLDER] — Add social media URLs when available
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  },
};

// =============================================================================
// IMAGE PATHS — drop files into public/images/ to replace (no code changes)
// =============================================================================

export const profileImages = {
  main: '/images/profile/doctor-main.jpg',
  about: '/images/profile/doctor-about.jpg',
};

export const certificateImages = {
  cert1: '/images/certificates/certificate-1.jpg',
  cert2: '/images/certificates/certificate-2.jpg',
};

// [PLACEHOLDER] — Replace with actual services matching the doctor's specialty
export const services: Service[] = [
  {
    id: 'general-consultation',
    title: 'General Medical Consultation',
    description:
      'Comprehensive health assessments and diagnosis for a wide range of medical conditions.',
    icon: 'Stethoscope',
    isPlaceholder: true,
  },
  {
    id: 'preventive-healthcare',
    title: 'Preventive Healthcare',
    description:
      'Proactive health screenings and lifestyle guidance to prevent illness before it starts.',
    icon: 'ShieldCheck',
    isPlaceholder: true,
  },
  {
    id: 'health-assessments',
    title: 'Health Assessments',
    description:
      'Detailed physical examinations and health evaluations tailored to your needs.',
    icon: 'ClipboardList',
    isPlaceholder: true,
  },
  {
    id: 'follow-up',
    title: 'Follow-up Consultations',
    description:
      'Ongoing monitoring and adjustment of treatment plans to ensure optimal recovery.',
    icon: 'CalendarCheck',
    isPlaceholder: true,
  },
  {
    id: 'patient-education',
    title: 'Patient Education',
    description:
      'Clear explanations of conditions, treatments, and self-care strategies.',
    icon: 'BookOpen',
    isPlaceholder: true,
  },
  {
    id: 'online-consultation',
    title: 'Online Consultation',
    description:
      'Convenient remote consultations for follow-ups and non-emergency medical advice.',
    icon: 'Video',
    isPlaceholder: true,
  },
];

// [PLACEHOLDER] — Replace with actual qualifications
export const qualifications: Qualification[] = [
  {
    id: 'mbbs',
    title: '[PLACEHOLDER] MBBS / Medical Degree',
    institution: '[PLACEHOLDER] University Name',
    year: '[PLACEHOLDER] Year',
    isPlaceholder: true,
  },
  {
    id: 'internship',
    title: '[PLACEHOLDER] Internship / House Officer',
    institution: '[PLACEHOLDER] Hospital Name',
    year: '[PLACEHOLDER] Year',
    isPlaceholder: true,
  },
];

// [PLACEHOLDER] — Replace with actual certifications
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: '[PLACEHOLDER] Professional Certification',
    issuer: '[PLACEHOLDER] Issuing Body',
    year: '[PLACEHOLDER] Year',
    isPlaceholder: true,
  },
  {
    id: 'cert-2',
    title: '[PLACEHOLDER] Additional Certification',
    issuer: '[PLACEHOLDER] Issuing Body',
    year: '[PLACEHOLDER] Year',
    isPlaceholder: true,
  },
];

// [PLACEHOLDER] — Replace with actual experience
export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Medical Doctor',
    organization: 'Base Hospital Mahiyanganaya',
    period: '[PLACEHOLDER] 20XX – Present',
    description:
      'Providing medical care to patients at Base Hospital Mahiyanganaya, a government hospital serving the Mahiyanganaya region.',
    isPlaceholder: false,
  },
  {
    id: 'exp-2',
    role: '[PLACEHOLDER] Junior Doctor',
    organization: '[PLACEHOLDER] Hospital Name',
    period: '[PLACEHOLDER] 20XX – 20XX',
    description:
      '[PLACEHOLDER] Description of role and responsibilities. Replace with actual experience details.',
    isPlaceholder: true,
  },
];

export const affiliations: Affiliation[] = [
  {
    id: 'aff-1',
    name: 'Base Hospital Mahiyanganaya',
    type: 'Government Hospital — Primary Practice',
    isPlaceholder: false,
  },
  {
    id: 'aff-2',
    name: '[PLACEHOLDER] Professional Association',
    type: 'Membership',
    isPlaceholder: true,
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    id: 'compassionate',
    title: 'Compassionate Care',
    description:
      'Every patient is treated with empathy, respect, and genuine concern for their wellbeing.',
    icon: 'Heart',
  },
  {
    id: 'evidence-based',
    title: 'Evidence-Based Treatment',
    description:
      'Treatment plans are grounded in the latest medical research and clinical best practices.',
    icon: 'Microscope',
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description:
      'Complex medical information explained in plain language so you can make informed decisions.',
    icon: 'MessageCircle',
  },
  {
    id: 'appointments',
    title: 'Convenient Appointments',
    description:
      'Flexible scheduling for in-person consultations at Base Hospital Mahiyanganaya.',
    icon: 'Clock',
  },
];

export const trustIndicators: TrustIndicator[] = [
  { id: 'patient-focused', label: 'Patient-Focused Care', icon: 'HeartHandshake' },
  { id: 'professional', label: 'Professional Consultation', icon: 'Award' },
  { id: 'mahiyanganaya', label: 'Mahiyanganaya, Sri Lanka', icon: 'MapPin' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Dr. Shivanka Rajapakshe outdoors',
    caption: 'Dr. Shivanka Rajapakshe — Mahiyanganaya, Sri Lanka',
    isPlaceholder: false,
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Dr. Shivanka Rajapakshe in white lab coat',
    caption: 'Professional medical portrait',
    isPlaceholder: false,
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Dr. Shivanka Rajapakshe in formal attire with stethoscope',
    caption: 'Clinical professional portrait',
    isPlaceholder: false,
  },
];

// SAMPLE testimonials — clearly marked as placeholder content
// Set siteConfig.showTestimonials to false to hide this section
export const testimonials: Testimonial[] = [
  {
    id: 'sample-1',
    name: '[SAMPLE] Patient A.',
    text: '[SAMPLE CONTENT] This is placeholder testimonial text. Replace with real patient feedback only after obtaining proper consent, or disable this section.',
    rating: 5,
    isSample: true,
  },
  {
    id: 'sample-2',
    name: '[SAMPLE] Patient B.',
    text: '[SAMPLE CONTENT] Placeholder review for demonstration purposes only. Not a verified patient review.',
    rating: 5,
    isSample: true,
  },
  {
    id: 'sample-3',
    name: '[SAMPLE] Patient C.',
    text: '[SAMPLE CONTENT] Another sample testimonial. Enable real testimonials by replacing these entries in src/data/doctor.ts.',
    rating: 4,
    isSample: true,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Appointments', href: '#appointments' },
  { label: 'Contact', href: '#contact' },
];

export const consultationTypes = [
  'In-Person Consultation',
  'Follow-Up Visit',
  'Online Consultation',
  'Health Assessment',
  'Other',
];
