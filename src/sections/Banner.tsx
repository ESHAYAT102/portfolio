export default function Banner() {
  const currentYear = new Date().getFullYear();

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
              >
                <span className="relative group">
                  <span className="text-stone-200">ESYT</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Automated React project scaffolding tool
                  </span>
                </span>
              </a>{" "}
              & working on personal projects (
              <span className="relative group">
                <span className="text-stone-200">FOSS</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Free and Open Source Software
                </span>
              </span>{" "}
              of course).
            </p>
            <br />
            <p className="text-stone-300/70">
              Yo! I'm a {currentYear - 2010}{" "}
              <span className="relative group">
                <span className="text-stone-200">y/o</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  years old
                </span>
              </span>{" "}
              designer, and I love to code (based in Bangladesh). I've always
              been into computer. I was fascinated by the technology. Like{" "}
              <span className="relative group">
                <span className="text-stone-200">wdym</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-stone-500/10 backdrop-blur-sm text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  what do you mean
                </span>
              </span>{" "}
              I can tell a box made out of metal, silicon and other stuff to do
              something and it literally does what I told it to do. Also I used
              to draw in MS Paint a lot as a kid, so the designer perspective
              started from there. I really loved the concept of telling the
              computer to do something for me, which got me interested in
              programming so much. I'm focusing on developing tools for the
              developer community to make their experience faster and more
              automated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
