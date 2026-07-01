export default function Projects() {
  const projects = [
  {
    name: "Xenon",
    description: "GitHub with Raycast and Twitter",
    link: "https://xenon.eshayat.com",
  },
  {
    name: "Adrian",
    description: "Self hostable private GitHub",
    link: "https://github.com/ESHAYAT102/adrian",
  },
  {
    name: "ESYT",
    description: "Automated React project scaffolding tool",
    link: "https://esyt.eshayat.com",
  },
  {
    name: "Skater",
    description: "TUI for skate (by Charm)",
    link: "https://github.com/ESHAYAT102/skater",
  },
  {
    name: "Milo",
    description: "CLI email client (for Resend)",
    link: "https://github.com/ESHAYAT102/milo",
  },
  {
    name: "Moonify",
    description: "CLI moon phase calendar",
    link: "https://github.com/ESHAYAT102/moonify",
  },
  {
    name: "Archon",
    description: "Automated setup script for Omarchy",
    link: "https://github.com/ESHAYAT102/archon",
  },
  {
    name: "Catppuccin theme",
    description: "Sleek Catppuccin mocha theme for Omarchy",
    link: "https://github.com/ESHAYAT102/omarchy-catppuccin-mocha-theme",
  },
    {
      name: "Royal Baking BD",
      description: "Website for a baking company",
      link: "https://royalbakingbd.com",
    },
 ];

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
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
