import type { ReactNode } from "react";
import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const options: LenisOptions = {
  autoRaf: true,
  lerp: 0.1,
  anchors: true,
  syncTouch: false,
  // The gallery owns its wheel gestures; touch keeps native momentum.
  prevent: (node) => node.classList.contains("flex-carousel"),
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root options={options}>{children}</ReactLenis>;
}
