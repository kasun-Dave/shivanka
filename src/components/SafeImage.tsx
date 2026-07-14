import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

function resolveAssetPath(src: string): string {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  const base = import.meta.env.BASE_URL;
  const path = src.startsWith('/') ? src.slice(1) : src;
  return `${base}${path}`;
}

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholderLabel?: string;
}

export default function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  placeholderLabel = 'Image',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveAssetPath(src);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-teal-50 text-navy-400 ${className}`}
        role="img"
        aria-label={`${alt} — placeholder`}
      >
        <ImageIcon className="mb-2 h-12 w-12 opacity-40" aria-hidden="true" />
        <span className="px-4 text-center text-sm font-medium opacity-60">
          {placeholderLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}
