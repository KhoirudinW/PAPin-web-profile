import type { Metadata } from "next";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tentang PAPin",
  description:
    "Kenali cerita, nilai, dan visi PAPin dalam membantu Anda dan pasangan membangun kedekatan lewat momen kecil setiap hari.",
  path: "/about",
});
  
export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDFB] px-6 py-20 overflow-hidden select-none">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] left-[70%] w-[25%] h-[25%] bg-light-blue/15 rounded-full blur-[80px]" />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-20">
        <Header 
          title="Tentang PAPin"
          subtitle="Cinta seringkali bukan tentang janji besar di bawah rembulan, tapi tentang tetap tinggal saat hari mulai biasa saja."
          badge="Our Story"
        />

        {/* Lead Quote */}
        <div className="text-center space-y-4 max-w-7xl animate-fade-up">
            <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-tight italic tracking-tight">
              "PAPin lahir dari sebuah kesadaran yang tenang: bahwa cinta tidak selalu memudar karena badai yang besar, melainkan karena hal-hal kecil yang perlahan berhenti kita jaga."
            </p>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        {/* Story Section */}
        <div className="w-full space-y-12 animate-fade-up delay-1">
          <div className="bg-white/75 backdrop-blur-2xl border border-white/80 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  Berawal dari <br />
                  <span className="text-primary italic">Kado Sederhana</span>
                </h2>
                <div className="pl-6 border-l-4 border-primary/20 italic text-gray-600 font-medium py-2">
                  "Awalnya, PAPin bukan dibuat untuk banyak orang. Ia adalah kado—untuk pasangan saya, dan juga untuk diri saya sendiri."
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Banyak pasangan bukan kekurangan cinta, tapi <span className="underline decoration-secondary/40 underline-offset-4 decoration-2">kekurangan kebiasaan kecil</span> yang menjaga cinta tetap hidup.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  PAPin lahir dari satu masalah kecil yang sering dianggap sepele, tapi diam-diam bisa <span className="text-secondary font-bold">merenggangkan hubungan</span>: kurang memberi kabar. Bukan karena tidak peduli, tapi karena lupa, sibuk, atau tidak terbiasa.
                </p>
                <p>
                  Lewat PAPin, saya belajar membangun kebiasaan baru: mengabari di mana saya berada—bukan sebagai kewajiban, tapi sebagai <span className="text-primary font-bold">bentuk cinta</span>. Perlahan, jarak yang tak terlihat menjadi lebih dekat. <span className="text-gray-900 font-black">Rasa aman pun tumbuh.</span>
                </p>
                
                <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 space-y-4">
                  <p className="text-base font-medium leading-relaxed">
                    PAPin hadir untuk mereka yang sedang berjuang memperbaiki hubungan, maupun yang ingin hubungan terasa <span className="italic font-bold text-primary underline underline-offset-2">lebih bermakna</span>.
                  </p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> Konsistensi 
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> Tanpa Drama 
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" /> Tanpa Paksaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full">
           <div className="bg-white/85 backdrop-blur-2xl border border-white/90 rounded-[40px] shadow-2xl p-10 md:p-14 relative overflow-hidden">
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
             
             <h2 className="text-4xl font-black text-gray-900 mb-12 text-center tracking-tight">Cahaya Kecil yang <span className="text-primary italic">Kami Jaga</span></h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
               {[
                 { title: "Kehadiran di Atas Segalanya", desc: "Karena bagimu dan dia, kehadiran yang nyata jauh lebih berharga daripada kesempurnaan yang semu." },
                 { title: "Ruang Privasi yang Aman", desc: "Kami percaya bahwa privasi adalah rumah bagi rasa percaya." },
                 { title: "Cukup Kita yang Tahu", desc: "Hubungan yang indah tidak butuh tepuk tangan penonton; ia tumbuh subur dalam keheningan." },
                 { title: "Langkah Kecil, Perjalanan Panjang", desc: "Kebiasaan sederhana yang dilakukan bersama adalah benang yang merajut masa depan." }
               ].map((value, i) => (
                 <div key={i} className="flex gap-5 group items-start">
                    <div className="size-4 rounded-full bg-primary mt-1.5 shadow-[0_0_15px_rgba(255,175,204,0.6)] group-hover:scale-125 transition-transform shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-tight">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed font-medium">{value.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* Final Sentence */}
        <div className="text-center py-8">
            <p className="text-gray-900 text-2xl font-bold italic">
                "Sebab hubungan yang sehat adalah tentang <br />
                <span className="text-primary not-italic font-black">perhatian kecil yang dilakukan setiap hari.</span>"
            </p>
        </div>

        {/* Closing Quote Banner */}
        <div className="w-full bg-primary text-white rounded-[40px] px-12 py-12 shadow-2xl shadow-primary/20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <p className="text-xl md:text-2xl font-bold italic relative z-10 leading-relaxed max-w-4xl mx-auto">
            "PAPin bukan tentang seberapa sering hubungan ditunjukkan ke dunia, tetapi seberapa konsisten dua orang hadir for satu sama lain — diam-diam, sederhana, and penuh makna."
          </p>
        </div>
      </section>
    </main>
  );
}
