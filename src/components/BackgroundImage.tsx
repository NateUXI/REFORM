import type { CSSProperties } from "react";
import type { ImageAsset } from "@/lib/assets";

const wrapper: CSSProperties = {
  position: "absolute",
  borderRadius: "inherit",
  cornerShape: "inherit",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

type Props = {
  image: ImageAsset;
  /** "cover" crops to fill the box; "contain" shows the whole image. */
  fit?: "cover" | "contain";
  lazy?: boolean;
};

/**
 * Fills its positioned parent with an image and inherits the parent's border
 * radius.
 *
 * A plain <img> is used on purpose: it keeps the responsive srcSet/sizes that
 * Framer generated. Once the images are self-hosted you can swap this for
 * next/image.
 */
export default function BackgroundImage({ image, fit = "cover", lazy = false }: Props) {
  return (
    <div data-framer-background-image-wrapper="true" style={wrapper}>
      <img
        decoding="async"
        loading={lazy ? "lazy" : undefined}
        width={image.width}
        height={image.height}
        sizes={image.sizes}
        srcSet={image.srcSet}
        src={image.src}
        alt=""
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          cornerShape: "inherit",
          objectPosition: "center",
          objectFit: fit,
        }}
      />
    </div>
  );
}
