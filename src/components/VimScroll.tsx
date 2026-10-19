import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function VimScroll() {
  const lenis = useLenis();

  useEffect(() => {
    let previousG = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reset = () => { previousG = 0; };

    function onKeyDown(event: KeyboardEvent) {
      const target = event.composedPath()[0];
      if (
        event.defaultPrevented || event.isComposing || event.ctrlKey ||
        event.metaKey || event.altKey || lenis?.isStopped ||
        (target instanceof HTMLElement && (
          target.isContentEditable ||
          target.closest('input, textarea, select, [role="textbox"], [role="combobox"], [role="listbox"], [role="menu"], [role="slider"]')
        )) || document.querySelector('dialog[open], [aria-modal="true"]')
      ) {
        reset();
        return;
      }

      const scroll = (position: number, relative = false) => {
        // Hand an in-progress wheel animation over to native keyboard scrolling.
        if (lenis?.isSmooth) lenis.scrollTo(window.scrollY, { immediate: true });
        const options: ScrollToOptions = {
          top: position,
          behavior: reducedMotion.matches ? "instant" : "smooth",
        };
        if (relative) window.scrollBy(options);
        else window.scrollTo(options);
      };

      if (event.key === "g") {
        event.preventDefault();
        if (event.repeat) return;
        const now = performance.now();
        if (previousG && now - previousG < 750) {
          scroll(0);
          reset();
        } else previousG = now;
        return;
      }

      reset();
      if (event.key === "j") scroll(80, true);
      else if (event.key === "k") scroll(-80, true);
      else if (event.key === "G") scroll(document.documentElement.scrollHeight);
      else return;
      event.preventDefault();
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("blur", reset);
    };
  }, [lenis]);

  return null;
}
