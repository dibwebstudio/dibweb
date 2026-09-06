import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DibWeb Studio",
    short_name: "DibWeb",
    description: "Desarrollo web profesional en Chile",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
  };
}
