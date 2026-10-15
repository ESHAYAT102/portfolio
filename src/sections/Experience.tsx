import { FluidItem, FluidReveal } from "@/components/motion/FluidMotion";

export default function Experience() {
  const experiences = [
    {
      role: "Designer & Developer",
      company: "Royal Baking BD",
      duration: "2021 - Present",
    },
    {
      role: "Designer & Developer",
      company: "AnM Studio",
      duration: "2024 - 2026",
    },
    {
      role: "Frontend Developer",
      company: "Graphics Verse",
      duration: "2025 - 2026",
    },
  ];

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <FluidReveal><p className="font-bold">Experience</p></FluidReveal>
            <div className="mt-12">
              {experiences.map((experience, index) => (
                <FluidItem
                  key={`${experience.company}-${experience.duration}`}
                  order={index % 2}
                  className={`
                    ${index === 0 ? "border" : "border-x border-b"}
                    border-stone-600/60 p-8 hover:bg-stone-50/10 transition-colors duration-150
                  `}
                >
                  <div className="flex">
                    <p className="text-stone-300/70">
                      [<span className="text-2xl relative top-2">*</span>]
                    </p>{" "}
                    <p className="pt-1.5 pl-4">
                      {experience.role} — {experience.company}.{" "}
                      <span className="text-stone-300/70">
                        [{experience.duration}]
                      </span>
                    </p>
                  </div>
                </FluidItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
