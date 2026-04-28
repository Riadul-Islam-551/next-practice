import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          404 Error
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
