export interface DoctorProfile {
  name: string;
  title: string;
  location: string;
  school: string;
  specialty: string;
  shortIntro: string;
  biography: string;
  philosophy: string;
  personalizedCare: string;
  registrationNumber: string;
  university: string;
  hospital: string;
  clinic: string;
  phone: string;
  whatsapp: string;
  email: string;
  consultationHours: string;
  clinicAddress: string;
  googleMapsUrl: string;
  canonicalUrl: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPlaceholder: boolean;
}

export interface Qualification {
  id: string;
  title: string;
  institution: string;
  year: string;
  isPlaceholder: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  isPlaceholder: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  isPlaceholder: boolean;
}

export interface Affiliation {
  id: string;
  name: string;
  type: string;
  isPlaceholder: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  isSample: boolean;
}

export interface TrustIndicator {
  id: string;
  label: string;
  icon: string;
}

export interface SiteConfig {
  showTestimonials: boolean;
  siteName: string;
  siteDescription: string;
}
