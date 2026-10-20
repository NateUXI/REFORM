import "react";

// Let inline styles use CSS custom properties (`--foo`) and `corner-shape`,
// which Framer's generated markup relies on.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
    cornerShape?: string;
  }
}
