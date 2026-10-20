import { useEffect, useRef } from "react";
import "./AsciiBackground.css";

const CELL_SIZE = 12;
const GLYPHS = " .:-=+*#%@";
type TrailCell = { strength: number; decay: number };

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const preference = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    const cells = new Map<number, TrailCell>();
    let width = 0;
    let height = 0;
    let columns = 0;
    let color = "";
    let frame = 0;
    let lastFrame = 0;
    let previous: { x: number; y: number; time: number } | null = null;

    function draw() {
      context!.clearRect(0, 0, width, height);
      if (!preference.matches) return;
      context!.fillStyle = color;

      for (const [index, cell] of cells) {
        const glyph = GLYPHS[Math.floor(cell.strength * (GLYPHS.length - 1))];
        context!.globalAlpha = cell.strength;
        context!.fillText(
          glyph,
          (index % columns + 0.5) * CELL_SIZE,
          (Math.floor(index / columns) + 0.5) * CELL_SIZE,
        );
      }
      context!.globalAlpha = 1;
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = 0;
      previous = null;
      cells.clear();
    }

    function resize() {
      stop();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      columns = Math.ceil(width / CELL_SIZE);
      color = getComputedStyle(canvas!).color;
      canvas!.width = Math.round(width * ratio);
      canvas!.height = Math.round(height * ratio);
      context!.setTransform(ratio, 0, 0, ratio, 0, 0);
      context!.font = `10px ${getComputedStyle(canvas!).fontFamily}`;
      context!.textAlign = "center";
      context!.textBaseline = "middle";
      draw();
    }

    function animate(time: number) {
      const elapsed = lastFrame ? Math.min((time - lastFrame) / 1000, 0.064) : 1 / 60;
      lastFrame = time;
      for (const [index, cell] of cells) {
        cell.strength -= cell.decay * elapsed;
        if (cell.strength <= 0) cells.delete(index);
      }
      draw();
      frame = cells.size ? requestAnimationFrame(animate) : 0;
      if (!frame) lastFrame = 0;
    }

    function stamp(x: number, y: number, radius: number, decay: number) {
      const gridX = x / CELL_SIZE;
      const gridY = y / CELL_SIZE;
      for (let row = Math.max(0, Math.floor(gridY - radius)); row <= Math.min(Math.ceil(height / CELL_SIZE) - 1, Math.ceil(gridY + radius)); row++) {
        for (let column = Math.max(0, Math.floor(gridX - radius)); column <= Math.min(columns - 1, Math.ceil(gridX + radius)); column++) {
          const strength = Math.max(0, 1 - Math.hypot(column + 0.5 - gridX, row + 0.5 - gridY) / radius);
          const index = row * columns + column;
          if (strength > (cells.get(index)?.strength ?? 0)) {
            cells.set(index, { strength, decay });
          }
        }
      }
    }

    function move(event: PointerEvent | TouchEvent) {
      if (!preference.matches || document.hidden) return;
      // Touch events keep arriving during native scrolling, after pointercancel.
      if ("pointerType" in event && event.pointerType === "touch") return;
      const point = "touches" in event ? event.touches[0] : event;
      if (!point) return;
      const { clientX: x, clientY: y } = point;
      const time = performance.now();
      if (previous && time - previous.time < 150) {
        const distance = Math.hypot(x - previous.x, y - previous.y);
        const speed = distance / Math.max(1, time - previous.time);
        // Slow gestures make a softer, wider wake; fast gestures leave a fine stroke.
        const radius = Math.max(1.312, 4.1 / (1 + speed));
        const decay = Math.min(4.5, 1.2 + speed * 2);
        const steps = Math.max(1, Math.ceil(distance / (CELL_SIZE / 2)));
        for (let step = 1; step <= steps; step++) {
          const progress = step / steps;
          stamp(previous.x + (x - previous.x) * progress, previous.y + (y - previous.y) * progress, radius, decay);
        }
      } else {
        stamp(x, y, 2.952, 1.4);
      }
      previous = { x, y, time };
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function leave(event: PointerEvent) {
      if (!event.relatedTarget) previous = null;
    }

    function endTouch() {
      previous = null;
    }

    function startTouch(event: TouchEvent) {
      endTouch();
      move(event);
    }

    function reset() {
      stop();
      draw();
    }

    resize();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("touchstart", startTouch, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", endTouch);
    window.addEventListener("touchcancel", endTouch);
    window.addEventListener("resize", resize);
    window.addEventListener("blur", reset);
    document.addEventListener("pointerout", leave);
    document.addEventListener("visibilitychange", reset);
    preference.addEventListener("change", reset);

    return () => {
      stop();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", endTouch);
      window.removeEventListener("touchcancel", endTouch);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", reset);
      document.removeEventListener("pointerout", leave);
      document.removeEventListener("visibilitychange", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);

  return <canvas ref={canvasRef} className="ascii-background" aria-hidden="true" />;
}
