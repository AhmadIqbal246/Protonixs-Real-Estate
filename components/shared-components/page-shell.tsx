import { PageBackgroundVideo } from "@/components/landing-page-section/page-background-video";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative">
      <PageBackgroundVideo />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
