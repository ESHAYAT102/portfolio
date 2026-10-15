import type { FlexCarouselItem } from "@/components/reactbits/FlexCarousel";

// Captions use the original filenames, without their extensions.
// Web-sized copies live in public/photography; originals remain in Downloads.
export const photographyIsDemo = false;

export const photographs: FlexCarouselItem[] = [
  {
    src: "/photography/Bench.webp",
    alt: "An ornate bench and table on a veranda framed by columns and greenery",
    title: "Bench",
  },
  {
    src: "/photography/Cloud.webp",
    alt: "A dark cloud with a warm sunlit edge beneath an overcast sky",
    title: "Cloud",
  },
  {
    src: "/photography/Clouds.webp",
    alt: "Towering clouds silhouetted against the fading evening light",
    title: "Clouds",
  },
  {
    src: "/photography/Leaves.webp",
    alt: "Overlapping green leaves photographed from above",
    title: "Leaves",
  },
  {
    src: "/photography/Moon.webp",
    alt: "The cratered moon glowing against a dark night sky",
    title: "Moon",
  },
  {
    src: "/photography/Setup.webp",
    alt: "Headphones, a white keyboard, and a dark desk mat on a red desk",
    title: "Setup",
  },
  {
    src: "/photography/Sky.webp",
    alt: "An orange sunset beneath dark clouds above a city skyline",
    title: "Sky",
  },
];
