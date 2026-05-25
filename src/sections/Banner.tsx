import { useState } from "react";

const tooltipBaseClass =
  "absolute bottom-full mb-2 w-max max-w-[calc(100vw-2rem)] px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-[759px]:fixed max-[759px]:!top-4 max-[759px]:!right-4 max-[759px]:!bottom-auto max-[759px]:!left-4 max-[759px]:!translate-x-0 max-[759px]:z-50 max-[759px]:w-auto max-[759px]:text-center";

const tooltipAlignmentClass = {
  center: "left-1/2 -translate-x-1/2",
  left: "left-0",
  right: "right-0",
};

const tooltipButtonClass =
  "relative group inline cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-stone-200";

type TooltipAlignment = keyof typeof tooltipAlignmentClass;

function isTouchLikeDevice() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export default function Banner() {
  const currentYear = new Date().getFullYear();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipAlignments, setTooltipAlignments] = useState<
    Record<string, TooltipAlignment>
  >({});

  function updateTooltipAlignment(id: string, trigger: HTMLElement) {
    const rect = trigger.getBoundingClientRect();
    const triggerCenter = rect.left + rect.width / 2;
    const estimatedTooltipWidth = Math.min(320, window.innerWidth - 32);
    const edgePadding = 16;
    let alignment: TooltipAlignment = "center";

    if (triggerCenter - estimatedTooltipWidth / 2 < edgePadding) {
      alignment = "left";
    } else if (
      triggerCenter + estimatedTooltipWidth / 2 >
      window.innerWidth - edgePadding
    ) {
      alignment = "right";
    }

    setTooltipAlignments((current) => ({ ...current, [id]: alignment }));
  }

  function getTooltipClass(id: string) {
    return `${tooltipBaseClass} ${
      tooltipAlignmentClass[tooltipAlignments[id] ?? "center"]
    } ${activeTooltip === id ? "opacity-100" : ""}`;
  }

  function showTooltipOnTouch(
    id: string,
    event: React.MouseEvent<HTMLElement>,
    hasLink = false,
  ) {
    updateTooltipAlignment(id, event.currentTarget);

    if (!isTouchLikeDevice()) return;

    if (hasLink && activeTooltip === id) return;

    event.preventDefault();
    setActiveTooltip((current) => (current === id ? null : id));
  }

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <p>Designer & Frontend Developer</p>
            <h1 className="text-3xl font-semibold mt-10">
              Hi there!
              <br /> I'm Eshayat Al-Wasiu, a designer who codes.
            </h1>
            <p className="text-stone-300/70 mt-4">
              Currently maintaining{" "}
              <a
                className="text-stone-200 hover:underline active:text-stone-400 transition-all duration-300"
                href="https://esyt.eshayat.com"
                target="blank"
                onClick={(event) => showTooltipOnTouch("esyt", event, true)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("esyt", event.currentTarget)
                }
              >
                <span className="relative group">
                  <span className="text-stone-200">ESYT</span>
                  <span className={getTooltipClass("esyt")}>
                    Automated React project scaffolding tool
                  </span>
                </span>
              </a>{" "}
              & working on personal projects (
              <button
                className={tooltipButtonClass}
                type="button"
                onClick={(event) => showTooltipOnTouch("foss", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("foss", event.currentTarget)
                }
              >
                FOSS
                <span className={getTooltipClass("foss")}>
                  Free and Open Source Software
                </span>
              </button>{" "}
              of course).
            </p>
            <br />
            <p className="text-stone-300/70">
              Yo! I'm a {currentYear - 2010}{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                onClick={(event) => showTooltipOnTouch("age", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("age", event.currentTarget)
                }
              >
                y/o
                <span className={getTooltipClass("age")}>
                  years old
                </span>
              </button>{" "}
              designer, and I love to code (based in Bangladesh). I've always
              been into computers. I was fascinated by the technology. Like{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                onClick={(event) => showTooltipOnTouch("wdym", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("wdym", event.currentTarget)
                }
              >
                wdym
                <span className={getTooltipClass("wdym")}>
                  what do you mean
                </span>
              </button>{" "}
              I can tell a box made out of metal, silicon and other stuff to do
              something and it literally does what I told it to do. Also I used
              to draw in MS Paint a lot as a kid, so the designer perspective
              started from there. I really loved the concept of telling the
              computer to do something for me, which got me interested in
              programming so much. I love developing tools for the
              developer community to make their experience faster and more
              automated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
