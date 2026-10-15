FlexCarousel is adapted from [React Bits](https://reactbits.dev/components/flex-carousel)
by David Haz. The original license is included in LICENSE.md.

Local additions: WebGL initialization fallback, pointer capability gating,
and keyboard event handling that preserves vertical page scrolling. The photography section loads this component on approach
and uses a native scroll-snap gallery for reduced motion or unavailable WebGL.

The gallery currently uses seven photographs from `~/Downloads`, converted to
WebP with a maximum dimension of 1600 pixels. Captions preserve the original
filename stems. The originals are unchanged.

To add or replace photographs:

1. Put optimized images in `public/photography/`.
2. Update `src/data/photography.ts` with `/photography/filename.webp`
   paths, descriptive alt text, titles, and optional location subtitles.
3. Set `photographyIsDemo` to `false` to remove the sample-image label.

Keep images around 1200–1600 pixels on the longest side. The carousel uses their
natural aspect ratios. Remote images must allow cross-origin image access for WebGL.
