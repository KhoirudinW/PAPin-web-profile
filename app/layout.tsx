import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import FooterSection from "@/sections/landing/FooterSection";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  SITE_URL,
} from "@/helpers/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  title: {
    default: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "PAPin Team" }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "lifestyle",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "2a3f491a66374f64",
  },
  icons: {
    icon: [{ url: "/assets/logo.png", type: "image/png" }],
    apple: [{ url: "/assets/logo.png" }],
  },
  robots: {
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - ${BRAND_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: ["/assets/logo.png"],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased pt-22`}>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <BackToTop />
        <FooterSection />
      </body>
    </html>
  );
}
