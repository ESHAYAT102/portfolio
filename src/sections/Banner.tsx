import {
  Suspense,
  useEffect,
  useState,
  type CSSProperties,
} from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import type { Activity } from "@/components/contribution-graph";

const githubContributions = fetch(
  "https://github-contributions-api.jogruber.de/v4/ESHAYAT102?y=last",
)
  .then(async (response) =>
    response.ok
      ? ((await response.json()) as { contributions?: Activity[] })
          .contributions ?? []
      : [],
  )
  .catch(() => []);

const tooltipBaseClass =
  "absolute bottom-full mb-2 w-max max-w-[calc(100vw-2rem)] px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-[759px]:fixed max-[759px]:!bottom-auto max-[759px]:z-50";

const tooltipAlignmentClass = {
  center: "left-1/2 -translate-x-1/2",
  left: "left-0",
  right: "right-0",
};

const tooltipButtonClass =
  "relative group inline cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-stone-200";

type TooltipAlignment = keyof typeof tooltipAlignmentClass;
type TooltipPosition = {
  left: number;
  top: number;
};

function isTouchLikeDevice() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export default function Banner() {
  const currentYear = new Date().getFullYear();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipAlignments, setTooltipAlignments] = useState<
    Record<string, TooltipAlignment>
  >({});
  const [tooltipPositions, setTooltipPositions] = useState<
    Record<string, TooltipPosition>
  >({});

  useEffect(() => {
    if (!activeTooltip || !isTouchLikeDevice()) return;

    function closeTooltipOnOutsideTap(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("[data-tooltip-trigger]")
      ) {
        return;
      }

      setActiveTooltip(null);
    }

    document.addEventListener("pointerdown", closeTooltipOnOutsideTap);

    return () => {
      document.removeEventListener("pointerdown", closeTooltipOnOutsideTap);
    };
  }, [activeTooltip]);

  function updateTooltipAlignment(id: string, trigger: HTMLElement) {
    const rect = trigger.getBoundingClientRect();
    const triggerCenter = rect.left + rect.width / 2;
    const edgePadding = 16;
    const tooltip = trigger.querySelector<HTMLElement>(
      "[data-tooltip-content]",
    );
    const tooltipWidth = Math.min(
      tooltip?.offsetWidth || window.innerWidth - edgePadding * 2,
      window.innerWidth - edgePadding * 2,
    );
    let alignment: TooltipAlignment = "center";

    if (triggerCenter - tooltipWidth / 2 < edgePadding) {
      alignment = "left";
    } else if (
      triggerCenter + tooltipWidth / 2 >
      window.innerWidth - edgePadding
    ) {
      alignment = "right";
    }

    setTooltipAlignments((current) => ({ ...current, [id]: alignment }));

    const mobileLeft = Math.min(
      Math.max(triggerCenter - tooltipWidth / 2, edgePadding),
      window.innerWidth - tooltipWidth - edgePadding,
    );

    setTooltipPositions((current) => ({
      ...current,
      [id]: {
        left: mobileLeft,
        top: Math.max(rect.top - 8, edgePadding),
      },
    }));
  }

  function getTooltipClass(id: string) {
    return `${tooltipBaseClass} ${
      tooltipAlignmentClass[tooltipAlignments[id] ?? "center"]
    } ${activeTooltip === id ? "opacity-100" : ""}`;
  }

  function getTooltipStyle(id: string): CSSProperties | undefined {
    const position = tooltipPositions[id];

    if (!position || !isTouchLikeDevice()) return undefined;

    return {
      left: position.left,
      top: position.top,
      width: "max-content",
      maxWidth: "calc(100vw - 2rem)",
      transform: "translateY(-100%)",
    };
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
        <div className="mx-0 min-w-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="min-w-0 px-4 min-[1000px]:px-20 pt-10 pb-20 min-[760px]:py-20">
            <p>Designer & Frontend Developer</p>
            <h1 className="text-3xl font-semibold mt-10">
              Hi there!
              <br /> I'm Eshayat Al-Wasiu, a designer who codes.
            </h1>
            <p className="text-stone-300/70 mt-4">
              Currently maintaining personal{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("foss", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("foss", event.currentTarget)
                }
              >
                FOSS
                <span
                  className={getTooltipClass("foss")}
                  style={getTooltipStyle("foss")}
                  data-tooltip-content
                >
                  Free and Open Source Software
                </span>
              </button>{" "}
              projects like {" "}
              <a
                className="text-stone-200 hover:underline active:text-stone-400 transition-all duration-300"
                href="https://xenon.eshayat.com"
                target="blank"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("xenon", event, true)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("xenon", event.currentTarget)
                }
              >
                <span className="relative group">
                  <span className="text-stone-200">Xenon</span>
                  <span
                    className={getTooltipClass("xenon")}
                    style={getTooltipStyle("xenon")}
                    data-tooltip-content
                  >
                    GitHub, but better
                  </span>
                </span>
              </a>{" "}
              & <a
                className="text-stone-200 hover:underline active:text-stone-400 transition-all duration-300"
                href="https://esyt.eshayat.com"
                target="blank"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("esyt", event, true)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("esyt", event.currentTarget)
                }
              >
                <span className="relative group">
                  <span className="text-stone-200">ESYT</span>
                  <span
                    className={getTooltipClass("esyt")}
                    style={getTooltipStyle("esyt")}
                    data-tooltip-content
                  >
                    Automated React project scaffolding tool
                  </span>
                </span>
              </a>.
            </p>
            <br />
            <p className="text-stone-300/70">
              Yo! I'm a {currentYear - 2010}{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("age", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("age", event.currentTarget)
                }
              >
                y/o
                <span
                  className={getTooltipClass("age")}
                  style={getTooltipStyle("age")}
                  data-tooltip-content
                >
                  years old
                </span>
              </button>{" "}
              designer based in Bangladesh, and I love to code.
              I've always been obsessed with computers, like{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("wdym", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("wdym", event.currentTarget)
                }
              >
                wdym
                <span
                  className={getTooltipClass("wdym")}
                  style={getTooltipStyle("wdym")}
                  data-tooltip-content
                >
                  what do you mean
                </span>
              </button>{" "}
              I can tell a box made out of metal and all to do something and
              it literally does it. I used to draw in MS Paint a lot as a kid,
              so the designer perspective probably started from there. I really
              love the concept of telling the computer to do something for me,
              which got me into programming so much. I love developing tools
              for the developer community to... make the world a better place,{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                data-tooltip-trigger
                onClick={(event) => showTooltipOnTouch("ig", event)}
                onMouseEnter={(event) =>
                  updateTooltipAlignment("ig", event.currentTarget)
                }
              >
                ig
                <span
                  className={getTooltipClass("ig")}
                  style={getTooltipStyle("ig")}
                  data-tooltip-content
                >
                  I guess
                </span>
              </button>{" "} :)
            </p>
            <Suspense fallback={<GitHubContributionsFallback />}>
              <GitHubContributions
                className="mt-12 min-w-0 w-full"
                contributions={githubContributions}
                githubProfileUrl="https://github.com/ESHAYAT102"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
