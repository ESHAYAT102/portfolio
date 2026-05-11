import LiquidGlassLayer from "./LiquidGlassLayer";

export default function Navbar() {
  return (
    <div className="pb-22">
      <div className="z-50 fixed w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="relative overflow-hidden px-4 min-[1000px]:px-20 py-6 mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <LiquidGlassLayer depth={6} blur={6} strength={72} />
          <div className="relative z-10 flex justify-between">
            <div className="flex justify-center align-middle items-center">
              <a href="/">
                <img className="h-6 select-none" src="logo.svg" alt="Logo" />
              </a>
            </div>
            <div className="hidden min-[760px]:flex font-normal gap-6 justify-center align-middle items-center">
              <a
                className="hover:underline active:text-stone-400 transition-all duration-300"
                href="https://github.com/ESHAYAT102"
                target="blank"
              >
                GitHub
              </a>
              <a
                className="hover:underline active:text-stone-400 transition-all duration-300"
                href="https://x.com/Esh_ayat"
                target="blank"
              >
                X/Twitter
              </a>
              <a
                className="hover:underline active:text-stone-400 transition-all duration-300"
                href="https://www.instagram.com/eshayat.wasiu"
                target="blank"
              >
                Instagram
              </a>
              <a
                className="bg-stone-200 text-stone-950 px-4 py-2 hover:bg-stone-300 transition-all duration-300"
                href="mailto:eshayat.wasiu@gmail.com"
                target="blank"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
