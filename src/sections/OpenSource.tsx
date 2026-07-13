export default function OpenSource() {
  const contributions = [
    {
      name: "Vicinae Confetti Extension",
      description: "Confetti extension for Vicinae",
      link: "https://github.com/ESHAYAT102/vicinae-confetti-extension",
    },
    {
      name: "Vicinae Codex Extension",
      description: "Codex extension for Vicinae",
      link: "https://github.com/ESHAYAT102/vicinae-codex-extension",
    },
  ];

  return (
    <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
      <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
        <div className="px-4 min-[1000px]:px-20 py-20">
          <p className="font-bold">Open Source Contributions</p>
          <div className="mt-12">
            {contributions.map((contribution, index) => (
              <div
                key={contribution.name}
                className={`${index === 0 ? "border" : "border-x border-b"} border-stone-600/60 p-8 hover:bg-stone-50/10 transition-all duration-300`}
              >
                <div className="flex">
                  <p className="text-stone-300/70">
                    [<span className="text-2xl relative top-2">*</span>]
                  </p>
                  <p className="pt-1.5 pl-4 text-stone-300/70">
                    <a
                      className="text-stone-200 hover:underline active:text-stone-400 transition-all duration-300"
                      href={contribution.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contribution.name}
                    </a>{" "}
                    — {contribution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
