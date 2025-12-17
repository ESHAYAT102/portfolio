export default function Projects() {
  const projects = [
    {
      name: "ESYT",
      description: "Automated React project scaffolding tool.",
      link: "https://esyt.eshayat.com",
    },
    {
      name: "Royal Baking BD",
      description: "Website for a baking company.",
      link: "https://royalbakingbd.com",
    },
    {
      name: "Archon",
      description: "My Omarchy setup.",
      link: "https://archon.eshayat.com",
    },
    {
      name: "Catppuccin theme",
      description: "Catppuccin mocha theme for Omarchy.",
      link: "https://github.com/ESHAYAT102/omarchy-catppuccin-mauve-theme",
    },
    {
      name: "Catppuccin green theme",
      description: "Green accent catppuccin mocha theme for Omarchy.",
      link: "https://github.com/ESHAYAT102/omarchy-catppuccin-green-theme",
    },
  ];

  return (
    <div>
      <div className="w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <p className="font-bold">Projects</p>
            <div className="mt-12">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className={`
                    ${index === 0 ? "border" : "border-x border-b"}
                    border-stone-600/60 p-8 hover:bg-stone-50/10 transition-all duration-300
                  `}
                >
                  <div className="flex">
                    <p className="text-stone-300/70">
                      [<span className="text-2xl relative top-2">*</span>]
                    </p>{" "}
                    <p className="pt-1.5 pl-4 text-stone-300/70">
                      <a
                        className="text-stone-200 hover:underline active:text-stone-400 transition-all duration-300"
                        href={project.link}
                        target="blank"
                      >
                        {project.name}
                      </a>{" "}
                      — {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
