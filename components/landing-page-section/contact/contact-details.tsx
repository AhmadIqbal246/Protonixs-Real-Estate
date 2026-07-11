import { contactInfo } from "@/lib/data/contact-info";

interface ContactDetailItemProps {
  label: string;
  value: string;
  href?: string;
}

function ContactDetailItem({ label, value, href }: ContactDetailItemProps) {
  const content = (
    <span className="text-sm font-medium text-white drop-shadow-sm">{value}</span>
  );
  return (
    <div className="rounded-xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{label}</p>
      {href ? (
        <a href={href} className="mt-1 inline-block cursor-pointer transition-colors hover:text-gray-200">
          {content}
        </a>
      ) : (
        <p className="mt-1">{content}</p>
      )}
    </div>
  );
}

export function ContactDetails() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      <ContactDetailItem
        label="Email"
        value={contactInfo.email}
        href={`mailto:${contactInfo.email}`}
      />
      <ContactDetailItem
        label="Phone"
        value={contactInfo.phoneDisplay}
        href={`tel:${contactInfo.phone}`}
      />
      <ContactDetailItem label="Office" value={contactInfo.office} />
    </div>
  );
}
