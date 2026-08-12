const hobbies = [
  "Photography",
  "Learning about space",
  "Homelabing",
  "Self-hosting",
  "Listening to music",
  "Solving Rubik's Cubes",
];

export default function Hobbies() {
  return (
    <div className="w-screen min-[1000px]:w-full flex justify-center items-center">
      <div className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
        <div className="px-4 min-[1000px]:px-20 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="font-bold text-balance">Things I Love to Do</p>
            <p className="text-stone-300/70 mt-4 text-pretty">
              Interests that keep me curious, creative, and always making
              something.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[760px]:grid-cols-2 border border-stone-600/60">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby}
                className={`flex items-center gap-4 border-stone-600/60 p-5 min-[760px]:p-6 transition-colors duration-300 hover:bg-stone-50/10 ${
                  index > 0 ? "border-t" : ""
                } ${index % 2 === 1 ? "min-[760px]:border-l" : ""} ${
                  index === 1 ? "min-[760px]:border-t-0" : ""
                } ${
                  hobbies.length % 2 === 1 && index === hobbies.length - 1
                    ? "min-[760px]:col-span-2"
                    : ""
                }`}
              >
                <p className="-mt-1 text-stone-300/70 leading-none">
                  [<span className="text-2xl relative top-2">*</span>]
                </p>
                <p className="text-stone-100">{hobby}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
