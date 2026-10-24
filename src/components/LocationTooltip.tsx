import { useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { worldCountries } from "@/data/world-countries";

export default function LocationTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-ctp-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        onClick={() => setOpen((current) => !current)}
      >
        Bangladesh
      </TooltipTrigger>
      <TooltipContent
        sideOffset={8}
        className="block max-w-[calc(100vw-2rem)] rounded-none border-0 bg-ctp-surface0/80 px-3 py-2 text-sm text-ctp-text shadow-none backdrop-blur-sm [&>[data-side]]:hidden motion-reduce:animate-none"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 320 144"
          className="mx-auto block h-auto w-[312px] max-w-full"
        >
          {worldCountries.map((country, index) => (
            <path
              key={index}
              d={country.path}
              fill={country.bangladesh ? "var(--primary)" : "none"}
              stroke={country.bangladesh ? "var(--primary)" : "currentColor"}
              strokeWidth=".45"
              strokeOpacity={country.bangladesh ? 1 : .65}
              strokeLinejoin="round"
            />
          ))}
          <circle className="location-pin-ring" cx="240.4" cy="51.8" r="6" fill="none" stroke="var(--primary)" strokeWidth="1" />
          <circle cx="240.4" cy="51.8" r="2.6" fill="var(--primary)" />
        </svg>
        <span className="mt-2 block text-center font-mono text-[clamp(10px,2.6vw,12px)]">
          Earth &gt; Asia &gt; Bangladesh &gt; Dhaka
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
