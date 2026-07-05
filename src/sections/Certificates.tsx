import { useEffect, useState } from "react";

const imageClass =
  "select-none block w-full h-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100";

const certificateSizes =
  "(min-width: 1000px) calc((100vw - 304px) / 3), (min-width: 760px) calc((100vw - 80px) / 3), calc(100vw - 32px)";

function isTouchLikeDevice() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function CertificateImage({
  id,
  alt,
  active,
  onClick,
}: {
  id: string;
  alt: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="group block w-full p-0 text-left"
      onClick={onClick}
    >
      <picture>
        <source
          type="image/webp"
          srcSet={`certs/${id}-640.webp 640w, certs/${id}-960.webp 960w, certs/${id}-1440.webp 1440w`}
          sizes={certificateSizes}
        />
        <img
          className={`${imageClass} ${active ? "grayscale-0 opacity-100" : ""}`}
          src={`${id}.png`}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </button>
  );
}

export default function Banner() {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!isTouchLikeDevice()) return;

    function closeOnOutsideTap(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Element && target.closest("[data-certificate]")) {
        return;
      }

      setActiveCertificate(null);
    }

    document.addEventListener("pointerdown", closeOnOutsideTap);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideTap);
    };
  }, []);

  function toggleCertificate(id: string) {
    if (!isTouchLikeDevice()) return;

    setActiveCertificate((current) => (current === id ? null : id));
  }

  return (
    <div>
      <div className="w-screen min-[1000px]:w-full flex justify-center align-middle items-center">
        <div className="mx-0 min-[1000px]:mx-38 w-full border-b border-l-0 min-[1000px]:border-l border-r-0 min-[1000px]:border-r border-stone-600/60">
          <div className="px-4 min-[1000px]:px-20 py-20">
            <p className="mb-12 font-bold">Certificates</p>
            <div className="grid grid-cols-1 min-[760px]:grid-cols-3 gap-6 w-full">
              <div className="flex flex-col gap-6 justify-between min-w-0">
                <div data-certificate>
                  <CertificateImage
                    id="cert1"
                    alt="Picture of a certificate by Programming Hero"
                    active={activeCertificate === "cert1"}
                    onClick={() => toggleCertificate("cert1")}
                  />
                </div>
                <div data-certificate>
                  <CertificateImage
                    id="cert2"
                    alt="Picture of a certificate by Codingal"
                    active={activeCertificate === "cert2"}
                    onClick={() => toggleCertificate("cert2")}
                  />
                </div>
              </div>
              <div className="min-w-0" data-certificate>
                <CertificateImage
                  id="cert3"
                  alt="Picture of a certificate by Codingal"
                  active={activeCertificate === "cert3"}
                  onClick={() => toggleCertificate("cert3")}
                />
              </div>
              <div className="min-w-0" data-certificate>
                <CertificateImage
                  id="cert4"
                  alt="Picture of a certificate by Codingal"
                  active={activeCertificate === "cert4"}
                  onClick={() => toggleCertificate("cert4")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
