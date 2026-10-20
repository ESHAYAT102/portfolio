export default function Navbar() {
  return (
    <div className="pb-22">
      <div className="z-50 fixed w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="px-4 min-[1000px]:px-20 py-6 mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-ctp-surface1 bg-ctp-base/30 backdrop-blur-sm">
          <div className="flex justify-center min-[760px]:justify-between">
            <div className="flex justify-center align-middle items-center">
              <a className="fluid-control" href="/">
                <img className="h-6 select-none" src="logo.svg" alt="Logo" />
              </a>
            </div>
            <div className="hidden min-[760px]:flex font-normal gap-6 justify-center align-middle items-center">
              <a
                className="fluid-control hover:underline active:text-ctp-subtext0 transition-colors duration-150"
                href="https://github.com/ESHAYAT102"
                target="blank"
              >
                GitHub
              </a>
              <a
                className="fluid-control hover:underline active:text-ctp-subtext0 transition-colors duration-150"
                href="https://x.com/Esh_ayat"
                target="blank"
              >
                Twitter/X
              </a>
              <a
                className="fluid-control bg-primary text-primary-foreground px-4 py-2 hover:bg-ctp-lavender transition-colors duration-150"
                href="mailto:contact@eshayat.com"
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
