"use client";

import { useState } from "react";

const inputClassName =
  "w-full rounded-xl border border-white/25 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none backdrop-blur-sm transition-colors focus:border-white/50 focus:bg-black/50 focus:ring-2 focus:ring-white/15";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-white/20 bg-black/30 p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-white" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-lg font-medium text-white">Message sent</p>
        <p className="mt-2 max-w-xs text-sm text-gray-300">
          Thank you! We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-200">First Name</span>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            className={inputClassName}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-200">Last Name</span>
          <input
            type="text"
            name="lastName"
            required
            placeholder="Smith"
            className={inputClassName}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-gray-200">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
          className={inputClassName}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-gray-200">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about the property you are looking for..."
          className={`${inputClassName} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="w-full cursor-pointer rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gray-100 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
