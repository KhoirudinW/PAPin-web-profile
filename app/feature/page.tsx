import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import { FEATURES } from "@/data/features";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Fitur PAPin",
  description:
    "Lihat fitur utama PAPin seperti Daily PAP, Streak System, Timeline, dan Pair System untuk menjaga hubungan tetap hangat setiap hari.",
  path: "/feature",
});

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDFB] px-6 py-20 overflow-hidden select-none">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[-10%] w-[35%] h-[35%] bg-light-blue/15 rounded-full blur-[90px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto">
        <Header 
          title="Fitur yang Menjaga Kita"
          subtitle="Kami menciptakan ruang di mana kamu tidak perlu menjadi sempurna—cukup menjadi dirimu sendiri, bersama seseorang yang paling berarti."
          badge="Product Features"
          maxWidth="max-w-4xl"
        />

        {/* Feature list */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="transition-all duration-500 hover:scale-[1.02]">
              <FeatureCard
                title={feature.title}
                subtitle={feature.subtitle}
                description={feature.description}
                points={feature.points}
                image={feature.logo}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
