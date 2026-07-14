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
    'Professional medical consultation in Kandy, Sri Lanka. Patient-focused care with evidence-based treatment.',
  // Set to false to hide the testimonials section entirely
  showTestimonials: true,
};

export const doctor: DoctorProfile = {
  name: 'Dr. Shivanka Rajapakshe',
  title: 'Medical Doctor',
  location: 'Kandy, Sri Lanka',
  school: 'Dharmaraja College',
  // [PLACEHOLDER] — Replace with actual medical specialty
  specialty: '[PLACEHOLDER] Medical Specialty — e.g. General Practitioner',
  shortIntro:
    'Dedicated to providing compassionate, patient-centred healthcare in Kandy. Committed to evidence-based medicine and clear communication with every patient.',
  // [PLACEHOLDER] — Replace with actual biography
  biography:
    '[PLACEHOLDER] Dr. Shivanka Rajapakshe is a medical professional based in Kandy, Sri Lanka. With a strong foundation in clinical medicine and a commitment to personalised patient care, he strives to make every consultation thorough, respectful, and informative. Replace this text with the doctor\'s actual professional biography.',
  // [PLACEHOLDER] — Replace with actual medical philosophy
  philosophy:
    '[PLACEHOLDER] I believe that good medicine begins with listening. Every patient deserves time, clarity, and treatment plans grounded in the latest medical evidence. Replace this with the doctor\'s personal medical philosophy.',
  personalizedCare:
    'Every patient is unique. I take the time to understand your concerns, explain diagnoses clearly, and work with you to develop a care plan that fits your life and health goals.',
  // [PLACEHOLDER] — Replace with actual registration number
  registrationNumber: '[PLACEHOLDER] SLMC Registration Number',
  // [PLACEHOLDER] — Replace with actual university
  university: '[PLACEHOLDER] Medical University Name',
  // [PLACEHOLDER] — Replace with actual hospital
  hospital: '[PLACEHOLDER] Hospital Name',
  // [PLACEHOLDER] — Replace with actual clinic
  clinic: '[PLACEHOLDER] Clinic Name',
  // [PLACEHOLDER] — Replace with actual phone number (format: +94XXXXXXXXX)
  phone: '[PLACEHOLDER] +94 XX XXX XXXX',
  // [PLACEHOLDER] — Replace with actual WhatsApp number (digits only, e.g. 94771234567)
  whatsapp: '',
  // [PLACEHOLDER] — Replace with actual email
  email: '[PLACEHOLDER] doctor@email.com',
  // [PLACEHOLDER] — Replace with actual consultation hours
  consultationHours: '[PLACEHOLDER] Mon–Fri: 9:00 AM – 5:00 PM | Sat: 9:00 AM – 1:00 PM',
  // [PLACEHOLDER] — Replace with actual clinic address
  clinicAddress: '[PLACEHOLDER] Clinic Address, Kandy, Sri Lanka',
  // [PLACEHOLDER] — Replace with actual Google Maps URL
  googleMapsUrl: 'https://maps.google.com/?q=Kandy+Sri+Lanka',
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
    role: '[PLACEHOLDER] Medical Officer',
    organization: '[PLACEHOLDER] Hospital / Clinic Name',
    period: '[PLACEHOLDER] 20XX – Present',
    description:
      '[PLACEHOLDER] Description of role and responsibilities. Replace with actual experience details.',
    isPlaceholder: true,
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

// [PLACEHOLDER] — Replace with actual affiliations
export const affiliations: Affiliation[] = [
  {
    id: 'aff-1',
    name: '[PLACEHOLDER] Hospital / Clinic Affiliation',
    type: 'Primary Practice',
    isPlaceholder: true,
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
      'Flexible scheduling options including in-person and online consultations in Kandy.',
    icon: 'Clock',
  },
];

export const trustIndicators: TrustIndicator[] = [
  { id: 'patient-focused', label: 'Patient-Focused Care', icon: 'HeartHandshake' },
  { id: 'professional', label: 'Professional Consultation', icon: 'Award' },
  { id: 'kandy', label: 'Kandy-Based Doctor', icon: 'MapPin' },
];

// Gallery images — replace files in public/images/gallery/ without changing code
export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Professional medical environment',
    caption: '[PLACEHOLDER] Clinic or professional photograph',
    isPlaceholder: true,
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Medical consultation setting',
    caption: '[PLACEHOLDER] Professional event or consultation photo',
    isPlaceholder: true,
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Healthcare professional portrait',
    caption: '[PLACEHOLDER] Additional gallery photograph',
    isPlaceholder: true,
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
