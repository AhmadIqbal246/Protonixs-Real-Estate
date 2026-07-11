interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}

export function CarouselNavButton({ direction, onClick, label }: CarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 md:h-16 md:w-16"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <>
            <path d="M19 12H5" />
            <path d="M11 6l-6 6 6 6" />
          </>
        ) : (
          <>
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </>
        )}
      </svg>
    </button>
  );
}
