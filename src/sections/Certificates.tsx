const imageClass =
  "select-none block w-full h-auto max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

const certificateSizes =
  "(min-width: 1000px) calc((100vw - 304px) / 3), (min-width: 760px) calc((100vw - 80px) / 3), calc(100vw - 32px)";

function CertificateImage({
  id,
  alt,
}: {
  id: string;
  alt: string;
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`certs/${id}-640.webp 640w, certs/${id}-960.webp 960w, certs/${id}-1440.webp 1440w`}
        sizes={certificateSizes}
      />
      <img
        className={imageClass}
        src={`${id}.png`}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

export default function Banner() {
  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <p className="mb-12 font-bold">Certificates</p>
            <div className="grid grid-cols-1 min-[760px]:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col gap-6 justify-between min-w-0">
                <CertificateImage
                  id="cert1"
                  alt="Picture of a certificate by Programming Hero"
                />
                <CertificateImage
                  id="cert2"
                  alt="Picture of a certificate by Codingal"
                />
              </div>
              <div className="min-w-0">
                <CertificateImage
                  id="cert3"
                  alt="Picture of a certificate by Codingal"
                />
              </div>
              <div className="min-w-0">
                <CertificateImage
                  id="cert4"
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
