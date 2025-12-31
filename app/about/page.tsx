export const metadata = {
    title: 'Tentang PAPin',
    description:
      'Pelajari visi, misi, dan perjalanan kami dalam memberikan layanan terbaik.',
  };
  
export default function AboutPage() {
  return (
    <main className="bg-linear-to-b from-cream to-white px-6 pt-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-10">

        {/* Intro */}
        <div className="text-center">
          <h1 className="header-primary-2 mb-2">
            Tentang PAPin
          </h1>
          <p className="fonts-xs text-gray leading-relaxed">
            Cinta seringkali bukan tentang janji besar di bawah rembulan, tapi tentang tetap tinggal saat hari mulai biasa saja.
          </p>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-6 max-w-150 ">
          <p className="fonts-sm leading-relaxed indent-10">
            PAPin lahir dari sebuah kesadaran yang tenang: bahwa cinta tidak selalu memudar karena badai yang besar, melainkan karena hal-hal kecil yang perlahan berhenti kita jaga. Di antara riuhnya kesibukan, jarak yang membentang, dan rutinitas yang menjemukan, banyak hati yang masih saling menyayangi, namun mulai lupa bagaimana caranya untuk benar-benar hadir.
            
          </p>
          <p className="fonts-sm leading-relaxed indent-10">
            Kami hadir bukan untuk mendikte arah langkahmu, tidak pula untuk menuntut kesempurnaan. PAPin hanyalah kawan setia yang menemani setiap usaha kecilmu setiap hari. Ia ada dalam satu potret yang kamu bagikan, satu pesan hangat yang kamu kirimkan, dan satu niat tulus untuk tetap bertahan.
            
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl max-w-110 mx-auto shadow-md shadow-primary p-6">
          <h2 className="header-primary-4 mb-4">Cahaya Kecil yang Kami Jaga</h2>
          <ul className="list-disc pl-6 fonts-sm text-gray flex flex-col gap-2">
            <li><span className="font-semibold">Kehadiran di Atas Segalanya:</span> Karena bagimu dan dia, kehadiran yang nyata jauh lebih berharga daripada kesempurnaan yang semu.</li>
            <li><span className="font-semibold">Ruang Privasi yang Aman:</span> Kami percaya bahwa privasi adalah rumah bagi rasa percaya.</li>
            <li><span className="font-semibold">Cukup Kita yang Tahu: Hubungan</span> yang indah tidak butuh tepuk tangan penonton; ia tumbuh subur dalam keheningan.</li>
            <li><span className="font-semibold">Langkah Kecil, Perjalanan Panjang:</span> Kebiasaan sederhana yang dilakukan bersama adalah benang yang merajut masa depan.</li>
          </ul>
        </div>

        {/* Closing */}
        <div className="text-center max-w-150">
          <p className="fonts-sm text-gray">
            PAPin bukan tentang seberapa sering hubungan ditunjukkan ke dunia,
            tetapi seberapa konsisten dua orang hadir untuk satu sama lain —
            diam-diam, sederhana, dan penuh makna.
          </p>
        </div>

      </section>
    </main>
  );
}