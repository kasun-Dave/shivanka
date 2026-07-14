import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Qualifications from '../components/Qualifications';
import WhyChoose from '../components/WhyChoose';
import Gallery from '../components/Gallery';
import AppointmentForm from '../components/AppointmentForm';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import { siteConfig } from '../data/doctor';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Qualifications />
        <WhyChoose />
        <Gallery />
        <AppointmentForm />
        {siteConfig.showTestimonials && <Testimonials />}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
