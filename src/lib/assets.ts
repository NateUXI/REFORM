/**
 * Every image on the page, in one place.
 *
 * These still point at Framer's image CDN (they were exported that way). To
 * self-host them, download each file into `public/images/` and change `CDN`
 * below to "/images" (and drop the `?width=…` / `scale-down-to` query strings,
 * which only Framer's CDN understands).
 */
export type ImageAsset = {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export type SlideAsset = { src: string; alt: string };

const CDN = "https://framerusercontent.com/images";

export const images = {
  logo: {
    src: `${CDN}/c7GTot4CPPy8Dgq7yf6uMNM2U.png?width=424&height=522`,
    width: 424,
    height: 522,
  },

  /** The "login" phone screenshot (hero + the mountain scene). */
  loginPhone: {
    src: `${CDN}/dVyDzxQWmGMMholcfWR3e54PoIw.png?width=775&height=1600`,
    srcSet: `${CDN}/dVyDzxQWmGMMholcfWR3e54PoIw.png?width=775&height=1600 775w`,
    sizes:
      "(min-width: 1200px) max(240px, 210px), (max-width: 809.98px) max(160px, 145px), (min-width: 810px) and (max-width: 1199.98px) max(240px, 210px)",
    width: 775,
    height: 1600,
  },

  /** The "board" phone screenshot. */
  boardPhone: {
    src: `${CDN}/7GBzjsNIg35YgXSYBzMV29DZnE.png?width=1016&height=1600`,
    srcSet: `${CDN}/7GBzjsNIg35YgXSYBzMV29DZnE.png?scale-down-to=1024&width=1016&height=1600 650w,${CDN}/7GBzjsNIg35YgXSYBzMV29DZnE.png?width=1016&height=1600 1016w`,
    sizes:
      "(min-width: 1200px) 295px, (min-width: 810px) and (max-width: 1199.98px) 295px, (max-width: 809.98px) 190px",
    width: 1016,
    height: 1600,
  },

  mountain: {
    src: `${CDN}/z2sYvT8qy6FGFbbwEdsYVKpjzU.jpg?width=1100&height=733`,
    srcSet: `${CDN}/z2sYvT8qy6FGFbbwEdsYVKpjzU.jpg?scale-down-to=512&width=1100&height=733 512w,${CDN}/z2sYvT8qy6FGFbbwEdsYVKpjzU.jpg?scale-down-to=1024&width=1100&height=733 1024w,${CDN}/z2sYvT8qy6FGFbbwEdsYVKpjzU.jpg?width=1100&height=733 1100w`,
    sizes:
      "(min-width: 1200px) max((min(100vw, 1200px) - 192px) / 2, 1px), (max-width: 809.98px) calc(min(100vw, 1200px) - 48px), (min-width: 810px) and (max-width: 1199.98px) min(504px, min(100vw, 1200px))",
    width: 1100,
    height: 733,
  },
  studio: {
    src: `${CDN}/h1JHIBTy4GlNGEM9HHo2NvBcds.jpg?width=1100&height=825`,
    srcSet: `${CDN}/h1JHIBTy4GlNGEM9HHo2NvBcds.jpg?scale-down-to=512&width=1100&height=825 512w,${CDN}/h1JHIBTy4GlNGEM9HHo2NvBcds.jpg?scale-down-to=1024&width=1100&height=825 1024w,${CDN}/h1JHIBTy4GlNGEM9HHo2NvBcds.jpg?width=1100&height=825 1100w`,
    sizes:
      "(min-width: 1200px) max((min(100vw, 1200px) - 192px) / 2, 1px), (max-width: 809.98px) calc(min(100vw, 1200px) - 48px), (min-width: 810px) and (max-width: 1199.98px) min(504px, min(100vw, 1200px))",
    width: 1100,
    height: 825,
  },
} satisfies Record<string, ImageAsset>;

/** Desktop presentation carousel, in display order. */
export const slides: SlideAsset[] = [
  {
    src: `${CDN}/1nfD7ZwvALVBBrzZbNGjRQxHSSE.png?width=1875&height=928&kb=974`,
    alt: "Presentation slide 1",
  },
  {
    src: `${CDN}/Zyuqbs8bHKW8WlnYD2zCiFuMXF0.png?width=1875&height=928&kb=1697`,
    alt: "Presentation slide 2",
  },
  {
    src: `${CDN}/U2p3z5vPG87n0LCHewaW6xIRnSU.png?width=1875&height=928&kb=852`,
    alt: "Presentation slide 3",
  },
];

/** Decorative wave artwork behind the hero (SVG). */
export const waves = [
  `${CDN}/YxPeyXkA1Lvnn9s1j8VrwBznjQ8.svg?width=1172&height=1617`,
  `${CDN}/IUoLL2VvOcSROj0RV7XvSX4EcU.svg?width=900&height=1243`,
] as const;
