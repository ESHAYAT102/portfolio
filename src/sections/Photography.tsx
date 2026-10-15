import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { photographs, photographyIsDemo } from "@/data/photography";
import "./Photography.css";
import { FluidReveal } from "@/components/motion/FluidMotion";

const FlexCarousel = lazy(() => import("@/components/reactbits/FlexCarousel"));
const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeToMotion = (callback: () => void) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

function StillGallery() {
  return (
    <div className="photography-stills" aria-label="Photographs">
      {photographs.map((photo) => (
        <figure key={photo.src} className="min-w-0">
          <a
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${photo.title || photo.alt} in a new tab`}
          >
            <img
              src={photo.src}
              alt={photo.alt || ""}
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </a>
          <figcaption className="mt-3 text-sm text-stone-300">
            {photo.title}
            {photo.subtitle && (
              <span className="block text-stone-400">{photo.subtitle}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Photography() {
  const sectionRef = useRef<HTMLElement>(null);
  const [nearby, setNearby] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
  const handleUnavailable = useCallback(() => setUnavailable(true), []);
  const showStills = reducedMotion || unavailable;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearby(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (photographs.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="photography"
      aria-labelledby="photography-heading"
      className="w-full scroll-mt-24"
    >
      <div className="mx-0 min-[1000px]:mx-30 min-[1600px]:mx-38 border-b min-[1000px]:border-x border-stone-600/60">
        <div className="px-4 min-[1000px]:px-20 py-20">
          <FluidReveal className="flex items-center justify-between gap-4">
            <h2 id="photography-heading" className="font-bold">
              Photography
            </h2>
            <a
              className="hover:underline active:text-stone-400 transition-colors duration-150"
              href="https://github.com/ESHAYAT102/gallery"
              target="blank"
            >
              Download
            </a>
          </FluidReveal>
          {photographyIsDemo && (
            <p className="mt-6 text-xs text-stone-400">
              Preview gallery · Sample images from Unsplash
            </p>
          )}
          <div className="photography-stage mt-8">
            {showStills ? (
              <StillGallery />
            ) : nearby ? (
              <Suspense fallback={<StillGallery />}>
                <FlexCarousel
                  items={photographs}
                  intro="none"
                  cardHeight={0.62}
                  gap={24}
                  radius={0}
                  fit="natural"
                  bend={0.12}
                  liquid={0.08}
                  dispersion={0}
                  followCursor={false}
                  autoplay={false}
                  captureWheel={true}
                  onUnavailable={handleUnavailable}
                />
              </Suspense>
            ) : (
              <div
                className="photography-placeholder"
                aria-label="Photo gallery loading"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
