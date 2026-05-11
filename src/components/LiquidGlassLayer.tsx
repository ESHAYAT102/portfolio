import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { getDisplacementFilter } from "../lib/liquidGlass";

type LiquidGlassLayerProps = {
  radius?: number;
  depth?: number;
  blur?: number;
  strength?: number;
  chromaticAberration?: number;
  className?: string;
};

type Size = {
  height: number;
  width: number;
};

const canUseLiquidGlass = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isFirefox = userAgent.includes("firefox");

  return (
    !isFirefox &&
    CSS.supports(
      "backdrop-filter",
      "blur(1px) url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22/%3E#x')",
    )
  );
};

export default function LiquidGlassLayer({
  radius = 0,
  depth = 8,
  blur = 8,
  strength = 80,
  chromaticAberration = 4,
  className = "",
}: LiquidGlassLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>({ height: 1, width: 1 });
  const [supportsLiquidGlass] = useState(canUseLiquidGlass);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const updateSize = () => {
      const rect = element.getBoundingClientRect();

      setSize({
        height: Math.max(1, Math.round(rect.height)),
        width: Math.max(1, Math.round(rect.width)),
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  const boundedDepth = Math.min(
    depth,
    Math.floor(Math.min(size.height, size.width) / 3),
  );

  const filter = getDisplacementFilter({
    height: size.height,
    width: size.width,
    radius,
    depth: boundedDepth,
    strength,
    chromaticAberration,
  });

  const style: CSSProperties = supportsLiquidGlass
    ? {
        backdropFilter: `blur(${blur / 2}px) url('${filter}') blur(${blur}px) brightness(1.12) saturate(1.45)`,
        WebkitBackdropFilter: `blur(${blur / 2}px) url('${filter}') blur(${blur}px) brightness(1.12) saturate(1.45)`,
      }
    : {};

  const glassClass = supportsLiquidGlass
    ? "bg-stone-950/30"
    : "bg-stone-950/30 backdrop-blur-sm";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${glassClass} ${className}`}
      ref={ref}
      style={style}
    />
  );
}
