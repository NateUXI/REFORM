import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reform",
    short_name: "Reform",
    description: "The infinite canvas for all designers",
    start_url: "/",
    display: "standalone",
    background_color: "#1f1f24",
    theme_color: "#1f1f24",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
