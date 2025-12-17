export default function Banner() {
  return (
    <div>
      <div className="w-full flex justify-center align-middle items-center">
        <div className="max-w-268 mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="p-20">
            <p className="mb-12 font-bold">Certificates</p>
            <div className="flex flex-col min-[760px]:flex-row gap-6 w-full">
              <div className="flex flex-col gap-6 justify-between">
                <img
                  className="select-none w-fit h-fit grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src="cert1.png"
                  alt="Picture of a certificate by Programming Hero"
                />
                <img
                  className="select-none w-fit h-fit grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src="cert2.png"
                  alt="Picture of a certificate by Codingal"
                />
              </div>
              <div>
                <img
                  className="select-none w-fit h-fit grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src="cert3.png"
                  alt="Picture of a certificate by Codingal"
                />
              </div>
              <div>
                <img
                  className="select-none w-fit h-fit grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  src="cert4.png"
                  alt="Picture of a certificate by Codingal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
