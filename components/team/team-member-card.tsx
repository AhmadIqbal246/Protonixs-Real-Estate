import Image from "next/image";
import type { TeamMember } from "@/lib/types/team";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-surface">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 2}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            {member.specialty ?? member.role}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="font-display text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h3 className="font-display text-2xl tracking-tight text-text md:text-[1.65rem]">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {member.role}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#b8b3ad]">{member.bio}</p>
        <div className="mt-6 space-y-2 border-t border-white/[0.08] pt-5">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="block cursor-pointer text-sm text-text transition-colors hover:text-accent"
            >
              {member.email}
            </a>
          ) : null}
          {member.phone ? (
            <a
              href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
              className="block cursor-pointer text-sm text-muted transition-colors hover:text-accent"
            >
              {member.phone}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
