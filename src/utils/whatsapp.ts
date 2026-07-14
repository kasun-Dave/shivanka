import { doctor } from '../data/doctor';

export interface AppointmentData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  message: string;
}

export function buildWhatsAppMessage(data: AppointmentData): string {
  const lines = [
    `*Appointment Request*`,
    ``,
    `*Name:* ${data.fullName}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email}`,
    `*Preferred Date:* ${data.preferredDate}`,
    `*Preferred Time:* ${data.preferredTime}`,
    `*Consultation Type:* ${data.consultationType}`,
  ];

  if (data.message.trim()) {
    lines.push(`*Message:* ${data.message.trim()}`);
  }

  lines.push(``, `Sent via ${doctor.name} website`);

  return lines.join('\n');
}

export function getWhatsAppUrl(message: string): string | null {
  const number = doctor.whatsapp.replace(/\D/g, '');
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function isWhatsAppConfigured(): boolean {
  return doctor.whatsapp.replace(/\D/g, '').length > 0;
}
