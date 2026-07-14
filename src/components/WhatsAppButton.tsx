import { MessageCircle } from 'lucide-react';
import { doctor } from '../data/doctor';
import { isWhatsAppConfigured } from '../utils/whatsapp';

export default function WhatsAppButton() {
  if (!isWhatsAppConfigured()) return null;

  const number = doctor.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(
    `Hello ${doctor.name}, I would like to inquire about an appointment.`,
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
