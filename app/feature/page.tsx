import FeatureCard from '@/components/FeatureCard';
import { FEATURES } from '@/data/features';

export const metadata = {
  title: 'Fitur PAPin',
  description:
    'Jelajahi berbagai fitur canggih yang kami sediakan untuk mempermudah kerja Anda.',
};

export default function FeaturesPage() {
  return (
    <main className="bg-linear-to-b from-cream to-white px-6 pb-20 pt-10">
      {/* Header */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="header-primary-2 mb-2">
          Fitur yang Menjaga Kita
        </h1>
        <p className="fonts-xs text-gray">
        Di PAPin, kami percaya bahwa cinta bukan tentang perayaan besar yang sesekali, melainkan tentang "tetap ada" setiap hari. Kami menciptakan ruang di mana kamu tidak perlu menjadi sempurna—cukup menjadi dirimu sendiri, bersama seseorang yang paling berarti.
        </p>
      </section>

      {/* Feature list */}
      <section className="max-w-200 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            points={feature.points}
            image={feature.logo}
          />
        ))}
      </section>
    </main>
  );
}
