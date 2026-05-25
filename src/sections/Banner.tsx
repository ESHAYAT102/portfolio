import { useState } from "react";

const tooltipClass =
  "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[calc(100vw-2rem)] px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";

const tooltipButtonClass =
  "relative group inline cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-stone-200";

function isTouchLikeDevice() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export default function Banner() {
  const currentYear = new Date().getFullYear();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  function showTooltipOnTouch(
    id: string,
    event: React.MouseEvent<HTMLElement>,
    hasLink = false,
  ) {
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
              >
                <span className="relative group">
                  <span className="text-stone-200">ESYT</span>
                  <span
                    className={`${tooltipClass} ${
                      activeTooltip === "esyt" ? "opacity-100" : ""
                    }`}
                  >
                    Automated React project scaffolding tool
                  </span>
                </span>
              </a>{" "}
              & working on personal projects (
              <button
                className={tooltipButtonClass}
                type="button"
                onClick={(event) => showTooltipOnTouch("foss", event)}
              >
                FOSS
                <span
                  className={`${tooltipClass} ${
                    activeTooltip === "foss" ? "opacity-100" : ""
                  }`}
                >
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
              >
                y/o
                <span
                  className={`${tooltipClass} ${
                    activeTooltip === "age" ? "opacity-100" : ""
                  }`}
                >
                  years old
                </span>
              </button>{" "}
              designer, and I love to code (based in Bangladesh). I've always
              been into computers. I was fascinated by the technology. Like{" "}
              <button
                className={tooltipButtonClass}
                type="button"
                onClick={(event) => showTooltipOnTouch("wdym", event)}
              >
                wdym
                <span
                  className={`${tooltipClass} ${
                    activeTooltip === "wdym" ? "opacity-100" : ""
                  }`}
                >
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
