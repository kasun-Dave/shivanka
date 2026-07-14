import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

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
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}
