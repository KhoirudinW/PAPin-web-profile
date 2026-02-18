import type { Metadata } from "next";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Syarat dan Ketentuan PAPin",
  description:
    "Baca syarat penggunaan PAPin untuk menjaga kenyamanan, keamanan, dan keintiman ruang privat Anda dan pasangan.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-soft-cream px-6 py-20 overflow-hidden select-none">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[15%] left-[-10%] w-[35%] h-[35%] bg-light-blue/15 rounded-full blur-[90px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto">
        <Header 
          title="Aturan Main Kita"
          subtitle="Bukan tentang batasan yang kaku, tapi tentang menciptakan lingkungan yang sehat dan penuh kasih bagi setiap pasangan di PAPin."
          badge="Terms of Service"
          maxWidth="max-w-4xl"
        />

        <div className="max-w-4xl mx-auto mt-20 space-y-12 text-gray-700 leading-relaxed font-medium">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Penggunaan Aplikasi</h2>
              <p>
                PAPin dirancang untuk digunakan oleh pasangan (dua orang) yang ingin menjaga kedekatan. Dengan menggunakan aplikasi ini, Anda setuju untuk menggunakan layanan kami dengan bijak dan menghormati privasi pasangan Anda sendiri.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Konten Momen</h2>
              <p>
                Anda bertanggung jawab penuh atas foto dan pesan yang Anda unggah. PAPin adalah ruang privat, namun kami melarang keras unggahan konten yang melanggar hukum, bersifat melecehkan, atau berbahaya bagi pihak lain.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Akun & Kemitraan</h2>
              <p>
                Satu akun hanya boleh terhubung dengan satu pasangan melalui Pair System kami. Keamanan kode akses adalah tanggung jawab Anda dan pasangan Anda.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Perubahan Layanan</h2>
              <p>
                Kami terus berusaha merajut PAPin menjadi lebih baik. Kami berhak melakukan pembaruan fitur atau layanan untuk meningkatkan pengalaman emosional kalian.
              </p>
            </section>

            <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-sm text-gray-500 italic">
                Terakhir diperbarui: 18 Februari 2026. <br />
                Mari bersama-sama membangun hubungan yang lebih sehat dan hangat.
              </div>
              <a 
                href="/PAPin_Terms_and_Conditions.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Unduh PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
