import type { Metadata } from "next";

export const SITE_URL = "https://papin.biz.id";
export const BRAND_NAME = "PAPin";
export const BRAND_TAGLINE = "Satu Foto Sehari, Satu Langkah Lebih Dekat";

export const DEFAULT_DESCRIPTION =
  "PAPin adalah aplikasi pasangan untuk menjaga kedekatan lewat satu foto harian, mood tracking, dan ruang privat yang aman untuk Anda dan pasangan.";

export const DEFAULT_KEYWORDS = [
  "PAPin",
  "aplikasi pasangan",
  "aplikasi couple",
  "hubungan jarak jauh",
  "LDR",
  "daily PAP",
  "streak pasangan",
  "mood tracking pasangan",
  "ruang privat pasangan",
];

const DEFAULT_IMAGE = "/assets/logo.png";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: path,
      siteName: BRAND_NAME,
      title,
      description,
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_IMAGE],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-snippet": -1,
            "max-image-preview": "none",
            "max-video-preview": -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
  };
}
