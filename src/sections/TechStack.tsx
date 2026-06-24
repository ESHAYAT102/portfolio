const stackGroups = [
  {
    title: "Interface",
    description: "Building responsive, interactive product surfaces.",
    tools: [
      "React",
      "NextJS",
      "Vite",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
    ],
  },
  {
    title: "Data & Auth",
    description: "Connecting products to storage, accounts, and permissions.",
    tools: ["PostgreSQL", "MongoDB", "Neon", "Firebase", "Clerk"],
  },
  {
    title: "Backend",
    description: "Creating APIs and small services that support the app.",
    tools: ["Node.js", "Express", "Python", "Go"],
  },
  {
    title: "Shipping",
    description: "Keeping projects versioned, deployed, and maintainable.",
    tools: ["Git & GitHub", "Vercel", "Docker"],
  },
  {
    title: "Design & Planning",
    description: "Turning rough ideas into usable interfaces and roadmaps.",
    tools: ["Figma", "Notion", "tldraw"],
  },
  {
    title: "Apps I Like",
    description: "A few tools and environments I enjoy using day to day.",
    tools: ["Zen Browser", "Ghostty", "Zed", "LocalSend"],
  },
];

export default function TechStack() {
  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <div className="mb-12 max-w-2xl">
              <p className="font-bold">Tech Stack</p>
              <p className="text-stone-300/70 mt-4">
                Tools I reach for when designing, building, and shipping web
                projects.
              </p>
            </div>

            <div className="grid grid-cols-1 min-[760px]:grid-cols-2 border border-stone-600/60">
              {stackGroups.map((group, index) => (
                <section
                  key={group.title}
                  className={`
                    border-stone-600/60 p-6 min-[760px]:p-8 hover:bg-stone-50/10 transition-all duration-300
                    ${index > 0 ? "border-t" : ""}
                    ${index % 2 === 1 ? "min-[760px]:border-l" : ""}
                    ${index === 1 ? "min-[760px]:border-t-0" : ""}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <p className="-mt-1 text-stone-300/70 leading-none">
                      [<span className="text-2xl relative top-2">*</span>]
                    </p>
                    <div>
                      <h3 className="font-semibold text-stone-100">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone-300/70">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-stone-600/60 px-3 py-1.5 text-sm text-stone-200 bg-stone-950/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
