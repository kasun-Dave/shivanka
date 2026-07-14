import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { doctor } from '../data/doctor';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-teal-50 px-4">
      <div className="glass-card max-w-md rounded-3xl p-8 text-center">
        <p className="font-display text-7xl font-bold text-teal-600">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-800">
          Page Not Found
        </h1>
        <p className="mt-2 text-navy-500">
          The page you are looking for does not exist on {doctor.name}&apos;s
          website.
        </p>
        <Link
          to="/"
          className="btn-primary mt-6 inline-flex"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="btn-secondary mt-3 inline-flex w-full justify-center"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Go Back
        </button>
      </div>
    </div>
  );
}
