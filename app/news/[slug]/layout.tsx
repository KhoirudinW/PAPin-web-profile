import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Detail Artikel PAPin",
  description:
    "Halaman artikel detail PAPin saat ini belum dioptimalkan untuk publik dan mesin pencari.",
  path: "/news",
  noIndex: true,
});

export default function NewsDetailLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
