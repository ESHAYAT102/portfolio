const experienceData = [
  { tech: "Node.js", startYear: 2021 },
  { tech: "Express", startYear: 2023 },
  { tech: "React", startYear: 2022 },
  { tech: "Vite", startYear: 2022 },
  { tech: "JavaScript", startYear: 2022 },
  { tech: "TypeScript", startYear: 2023 },
  { tech: "Tailwind CSS", startYear: 2022 },
  { tech: "MongoDB", startYear: 2024 },
  { tech: "Firebase", startYear: 2023 },
  { tech: "Clerk", startYear: 2024 },
  { tech: "Vercel", startYear: 2022 },
  { tech: "Git & GitHub", startYear: 2021 },
  { tech: "Figma", startYear: 2019 },
  { tech: "Notion", startYear: 2023 },
  { tech: "Python", startYear: 2024 },
  { tech: "Go", startYear: 2024 },
];

export default function TechStack() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-full flex justify-center align-middle items-center">
        <div className="max-w-268 mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="p-20">
            <div className="mb-12">
              <p className="font-bold">Tech Stack</p>
              <p className="text-stone-300/70 mt-4">
                Designing and developing web technologies for{" "}
                {currentYear - 2019} years.
              </p>
            </div>

            <table className="w-full border border-stone-600/60">
              <tbody>
                <tr>
                  <th className="pl-4 py-2 border-t border-r border-stone-600/60 text-base text-left align-middle hover:bg-stone-600/60 transition-all duration-300">
                    Tech
                  </th>
                  <th className="pl-4 py-2 border-t border-stone-600/60 text-base text-left align-middle hover:bg-stone-600/60 transition-all duration-300">
                    Experience
                  </th>
                </tr>
                {experienceData.map((item, index) => {
                  const yearsOfExperience = currentYear - item.startYear;
                  return (
                    <tr key={index}>
                      <td className="pl-4 py-2 border-t border-r border-stone-600/60 text-base align-middle hover:bg-stone-600/60 transition-all duration-300">
                        {item.tech}
                      </td>
                      <td className="pl-4 py-2 border-t border-stone-600/60 text-base align-middle hover:bg-stone-600/60 transition-all duration-300">
                        {yearsOfExperience}{" "}
                        {yearsOfExperience === 1 ? "year" : "years"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
