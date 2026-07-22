import { Children, isValidElement } from "react";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { JetBlackRaysBackground } from "./jet-black-rays-background";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { ScrollZoom } from "./scroll-zoom";

interface PageShellProps {
  children: React.ReactNode;
}

function shouldSkipScrollZoom(child: React.ReactNode) {
  if (!isValidElement(child)) return false;
  const props = child.props as Record<string, unknown>;
  return "data-skip-scroll-zoom" in props;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <SmoothScrollProvider>
      <main className="relative isolate min-h-screen overflow-x-clip bg-black text-text">
        <JetBlackRaysBackground />
        <Navbar variant="cinematic" />
        <ScrollZoom>
          {Children.map(children, (child, index) => (
            <div
              key={index}
              {...(shouldSkipScrollZoom(child) ? {} : { "data-scroll-zoom": true })}
              className="w-full"
            >
              {child}
            </div>
          ))}
          <Footer variant="cinematic" />
        </ScrollZoom>
      </main>
    </SmoothScrollProvider>
  );
}
