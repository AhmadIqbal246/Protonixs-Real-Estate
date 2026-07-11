interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 max-w-2xl ${alignClass} ${className}`}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
        {eyebrow}
      </p>
      <h2
        className="text-3xl font-normal drop-shadow-lg md:text-4xl lg:text-5xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-gray-300 drop-shadow-md md:text-lg">{description}</p>
      )}
    </div>
  );
}
