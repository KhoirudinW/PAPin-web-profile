import type { MetadataRoute } from "next";
import { BRAND_NAME, BRAND_TAGLINE } from "@/helpers/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    short_name: BRAND_NAME,
    description:
      "Aplikasi pasangan untuk berbagi momen harian secara privat dan menjaga kedekatan setiap hari.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDFB",
    theme_color: "#FFAFCC",
    lang: "id-ID",
    categories: ["lifestyle", "social"],
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
