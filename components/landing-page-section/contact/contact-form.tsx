"use client";

import { useState, type FormEvent } from "react";

const inputClassName =
  "w-full rounded-xl border border-[color:var(--color-line)] bg-ink px-4 py-3 text-sm text-text placeholder:text-muted outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-[color:var(--color-line)] bg-ink p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-surface">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-accent" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-display text-xl text-text">Message sent</p>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Thank you! We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">First Name</span>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Jane"
            className={inputClassName}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Last Name</span>
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
        <span className="mb-2 block text-sm font-medium text-text">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@example.com"
          className={inputClassName}
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-text">Message</span>
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
        className="w-full cursor-pointer rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#dce0e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
