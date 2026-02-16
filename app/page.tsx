import type { Metadata } from "next";
import HeroSection from "@/sections/landing/HeroSection";
import FeatureSection from "@/sections/landing/FeatureSection";
import AboutSection from "@/sections/landing/AboutSection";
import PricelistSection from "@/sections/landing/PricelistSection";
import FAQSection from "@/sections/landing/FAQSection";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  SITE_URL,
  buildPageMetadata,
} from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${BRAND_NAME} - Aplikasi Pasangan untuk Momen Harian`,
  description:
    "Jaga hubungan tetap dekat lewat satu foto harian, mood tracking, dan ruang privat yang aman untuk Anda dan pasangan.",
  path: "/",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: BRAND_NAME,
      url: SITE_URL,
      inLanguage: "id-ID",
    },
    {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo.png`,
    },
    {
      "@type": "MobileApplication",
      name: BRAND_NAME,
      slogan: BRAND_TAGLINE,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, iOS",
      inLanguage: "id-ID",
      description:
        "Aplikasi pasangan yang membantu Anda dan pasangan membangun koneksi harian lewat satu foto, mood tracking, dan timeline momen.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
      url: SITE_URL,
    },
  ],
};

export default function Home() {
  return (
    <div className="select-none relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <PricelistSection />
        <FAQSection />
      </div>
    </div>
  );
}
