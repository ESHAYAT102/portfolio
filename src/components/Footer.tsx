
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-ctp-surface1">
          <div>
            <div className="text-center grid grid-cols-1 min-[760px]:grid-cols-3 justify-center align-middle items-center">
              <a
                className="col-span-1 hover:underline hover:bg-ctp-surface0/80 active:text-ctp-subtext0 py-8 border-b min-[760px]:border-b-0 min-[760px]:border-r border-ctp-surface1 transition-colors duration-150"
                href="mailto:contact@eshayat.com"
                target="blank"
              >
                Contact (email)
              </a>
              <a
                className="col-span-1 hover:underline hover:bg-ctp-surface0/80 active:text-ctp-subtext0 py-8 border-b min-[760px]:border-b-0 min-[760px]:border-r border-ctp-surface1 transition-colors duration-150"
                href="https://github.com/ESHAYAT102"
                target="blank"
              >
                GitHub
              </a>
              <a
                className="col-span-1 hover:underline hover:bg-ctp-surface0/80 active:text-ctp-subtext0 py-8 min-[760px]:border-r-0 min-[760px]:border-b-0 min-[760px]:border-r border-ctp-surface1 transition-colors duration-150"
                href="https://x.com/Esh_ayat"
                target="blank"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-20 text-center text-ctp-subtext0">
        <p>©{currentYear} Eshayat</p>
      </div>
    </div>
  );
}
