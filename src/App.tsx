import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { doctor, siteConfig } from './data/doctor';

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    description: siteConfig.siteDescription,
    url: doctor.canonicalUrl,
    image: `${doctor.canonicalUrl}images/profile/doctor-main.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mahiyanganaya',
      addressCountry: 'LK',
      streetAddress: doctor.clinicAddress,
    },
    areaServed: {
      '@type': 'City',
      name: 'Mahiyanganaya',
    },
    worksFor: {
      '@type': 'Hospital',
      name: 'Base Hospital Mahiyanganaya',
    },
    medicalSpecialty: doctor.specialty,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: doctor.school,
    },
    telephone: doctor.phone.includes('[PLACEHOLDER]') ? undefined : doctor.phone,
    email: doctor.email.includes('[PLACEHOLDER]') ? undefined : doctor.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <JsonLd />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
