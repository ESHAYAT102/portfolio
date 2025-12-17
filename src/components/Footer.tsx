export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-full flex justify-center align-middle items-center">
        <div className="max-w-268 mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div>
            <div className="text-center grid grid-cols-4 justify-center align-middle items-center">
              <a
                className="col-span-1 hover:underline hover:bg-stone-500/10 active:text-stone-400 py-8 border-r border-stone-600/60 transition-all duration-300"
                href="https://esyt.eshayat.com"
                target="blank"
              >
                ESYT
              </a>
              <a
                className="col-span-1 hover:underline hover:bg-stone-500/10 active:text-stone-400 py-8 border-r border-stone-600/60 transition-all duration-300"
                href="https://github.com/ESHAYAT102"
                target="blank"
              >
                GitHub
              </a>
              <a
                className="col-span-1 hover:underline hover:bg-stone-500/10 active:text-stone-400 py-8 border-r border-stone-600/60 transition-all duration-300"
                href="https://x.com/Esh_ayat"
                target="blank"
              >
                X/Twitter
              </a>
              <a
                className="col-span-1 hover:underline hover:bg-stone-500/10 active:text-stone-400 py-8 transition-all duration-300"
                href="https://www.instagram.com/eshayat_al_wasiu"
                target="blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-20 text-center text-stone-300/60">
        <p>©{currentYear} Eshayat</p>
      </div>
    </div>
  );
}
