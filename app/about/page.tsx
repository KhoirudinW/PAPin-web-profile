import Header from '@/components/Header';

export const metadata = {
    title: 'Tentang PAPin',
    description:
      'Pelajari visi, misi, dan perjalanan kami dalam memberikan layanan terbaik.',
  };
  
export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDFB] px-6 py-20 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
        <Header 
          title="Tentang PAPin"
          subtitle="Cinta seringkali bukan tentang janji besar di bawah rembulan, tapi tentang tetap tinggal saat hari mulai biasa saja."
          badge="Our Story"
        />

        {/* Story Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed font-medium italic opacity-90">
              "PAPin lahir dari sebuah kesadaran yang tenang: bahwa cinta tidak selalu memudar karena badai yang besar, melainkan karena hal-hal kecil yang perlahan berhenti kita jaga."
            </p>
            <p className="text-gray-500 leading-relaxed">
              Di antara riuhnya kesibukan, jarak yang membentang, dan rutinitas yang menjemukan, banyak hati yang masih saling menyayangi, namun mulai lupa bagaimana caranya untuk benar-benar hadir.
            </p>
          </div>
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <p className="text-gray-500 leading-relaxed relative z-10">
              Kami hadir bukan untuk mendikte arah langkahmu, tidak pula untuk menuntut kesempurnaan. PAPin hanyalah kawan setia yang menemani setiap usaha kecilmu setiap hari. Ia ada dalam satu potret yang kamu bagikan, satu pesan hangat yang kamu kirimkan, dan satu niat tulus untuk tetap bertahan.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full max-w-4xl">
           <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[40px] shadow-2xl p-10 md:p-14 relative overflow-hidden">
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
             
             <h2 className="text-3xl font-black text-gray-900 mb-10 text-center tracking-tight">Cahaya Kecil yang <span className="text-primary italic">Kami Jaga</span></h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
               {[
                 { title: "Kehadiran di Atas Segalanya", desc: "Karena bagimu dan dia, kehadiran yang nyata jauh lebih berharga daripada kesempurnaan yang semu." },
                 { title: "Ruang Privasi yang Aman", desc: "Kami percaya bahwa privasi adalah rumah bagi rasa percaya." },
                 { title: "Cukup Kita yang Tahu", desc: "Hubungan yang indah tidak butuh tepuk tangan penonton; ia tumbuh subur dalam keheningan." },
                 { title: "Langkah Kecil, Perjalanan Panjang", desc: "Kebiasaan sederhana yang dilakukan bersama adalah benang yang merajut masa depan." }
               ].map((value, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="size-3 rounded-full bg-primary mt-2 shadow-[0_0_10px_rgba(255,175,204,1)] group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Closing Note */}
        <div className="text-center w-full bg-primary/5 border border-primary/10 rounded-full px-10 py-4">
          <p className="text-primary font-medium italic text-sm md:text-base">
            "PAPin bukan tentang seberapa sering hubungan ditunjukkan ke dunia, tetapi seberapa konsisten dua orang hadir untuk satu sama lain — diam-diam, sederhana, dan penuh makna."
          </p>
        </div>
      </section>
    </main>
  );
}
