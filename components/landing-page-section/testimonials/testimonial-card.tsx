import type { Testimonial } from "@/lib/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "carousel" | "grid";
}

export function TestimonialCard({ testimonial, variant = "carousel" }: TestimonialCardProps) {
  const layoutClass = variant === "carousel" ? "w-full" : "w-full";
  return (
    <blockquote
      className={`group relative isolate flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/15 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/20 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)] sm:min-h-[280px] sm:p-6 ${layoutClass}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <span className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-serif leading-none text-white/10">
        &ldquo;
      </span>
      <div className="relative flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <span key={index} className="text-sm text-white drop-shadow-md">
            &#9733;
          </span>
        ))}
      </div>
      <p className="relative mt-4 min-w-0 flex-1 break-words text-sm leading-relaxed text-white drop-shadow-md">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="relative mt-6 border-t border-white/25 pt-4">
        <p className="text-sm font-semibold text-white drop-shadow-md">{testimonial.name}</p>
        <p className="mt-1 text-xs text-gray-200 drop-shadow-sm">{testimonial.role}</p>
      </footer>
    </blockquote>
  );
}
