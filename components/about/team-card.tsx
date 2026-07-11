import Image from "next/image";
import type { TeamMember } from "@/lib/types/about";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl">
      <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-full border border-white/25 ring-2 ring-white/10 md:h-28 md:w-28">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>
      <h3 className="text-lg font-medium text-white">{member.name}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-400">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-200">{member.bio}</p>
    </article>
  );
}
