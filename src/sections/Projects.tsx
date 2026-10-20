import { FluidItem } from "@/components/FluidItem";

export default function Projects() {
  const projects = [
  {
    name: "Xenon",
    description: "GitHub with Raycast and Twitter",
    link: "https://xenon.eshayat.com",
  },
  {
    name: "Argus",
    description: "env manager right in your terminal",
    link: "https://github.com/ESHAYAT102/argus",
  },
  {
    name: "ESYT",
    description: "Automated React project scaffolding tool",
    link: "https://esyt.eshayat.com",
  },
  {
    name: "Glitter",
    description: "Web based terminal emulator",
    link: "https://github.com/ESHAYAT102/glitter",
  },
   {
    name: "MarkDown",
    description: "Markdown preview utility tool",
    link: "https://markdown.eshayat.com",
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
    name: "Royal Baking BD",
    description: "Website for a baking company",
    link: "https://royalbakingbd.com",
  },
  {
    name: "Nooreyah",
    description: "Website for a clothing store",
    link: "https://nooreyah.com",
  },
 ];

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-ctp-surface1">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <div><p className="font-bold">Projects</p></div>
            <div className="mt-12">
              {projects.map((project, index) => (
                <FluidItem
                  key={project.name}
                  className={`
                    ${index === 0 ? "border" : "border-x border-b"}
                    border-ctp-surface1 p-8 hover:bg-ctp-surface0/60 transition-colors duration-150
                  `}
                >
                  <div className="flex">
                    <p className="text-ctp-subtext0">
                      [<span className="text-2xl relative top-2">*</span>]
                    </p>{" "}
                    <p className="pt-1.5 pl-4 text-ctp-subtext0">
                      <a
                        className="text-ctp-text hover:underline active:text-ctp-subtext0 transition-colors duration-150"
                        href={project.link}
                        target="blank"
                      >
                        {project.name}
                      </a>{" "}
                      — {project.description}
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
