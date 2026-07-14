import {
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Video,
  Heart,
  Microscope,
  MessageCircle,
  Clock,
  HeartHandshake,
  Award,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  CalendarCheck,
  BookOpen,
  Video,
  Heart,
  Microscope,
  MessageCircle,
  Clock,
  HeartHandshake,
  Award,
  MapPin,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}

export { iconMap };
