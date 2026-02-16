import type { Metadata } from "next";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kebijakan Privasi PAPin",
  description:
    "Pelajari bagaimana PAPin melindungi data, foto, dan momen privat Anda dan pasangan dengan pendekatan privacy-first.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-soft-cream px-6 py-20 overflow-hidden select-none">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[-10%] w-[35%] h-[35%] bg-light-blue/15 rounded-full blur-[90px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto">
        <Header 
          title="Privasi Adalah Janji Kami"
          subtitle="Di PAPin, kami tidak hanya menyimpan foto—kami menjaga keintiman dan kepercayaan kalian. Keamanan data bukan sekadar fitur, tapi prinsip utama kami."
          badge="Privacy First"
          maxWidth="max-w-4xl"
        />

        <div className="max-w-4xl mx-auto mt-20 space-y-12 text-gray-700 leading-relaxed font-medium">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 md:p-12 shadow-2xl space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Data yang Kami Jaga</h2>
              <p>
                PAPin adalah ruang privat untuk dua orang. Kami mengumpulkan informasi yang minimal hanya untuk memastikan pengalaman berbagi kalian berjalan dengan lancar, seperti akun pengguna dan momen (foto serta pesan) yang dibagikan secara eksklusif kepada pasangan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Keamanan Momen (Signed URLs)</h2>
              <p>
                Kami menggunakan teknologi **Signed URLs** untuk setiap foto yang kalian unggah. Artinya, akses ke foto kalian bersifat privat dan sementara. Foto kalian tidak tersedia untuk publik dan hanya dapat diakses melalui link yang terenkripsi secara otomatis bagi kalian berdua.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Tanpa Pelacakan Lokasi</h2>
              <p>
                Berbeda dengan banyak aplikasi lain, PAPin **tidak melacak lokasi real-time** kalian. Kami percaya bahwa kehadiran tidak harus selalu berarti mengetahui koordinat GPS, melainkan tentang berbagi perhatian yang tulus.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 italic underline decoration-primary/30 decoration-4 underline-offset-8">Hak Kalian</h2>
              <p>
                Kalian memiliki kendali penuh atas data kalian. Jika kalian memutuskan untuk berhenti menggunakan PAPin, kalian dapat menghapus akun dan momen kalian kapan saja.
              </p>
            </section>

            <div className="pt-8 border-t border-primary/10 text-sm text-gray-500 italic">
              Terakhir diperbarui: 9 Februari 2026. <br />
              Jika ada pertanyaan seputar privasi, jangan ragu untuk menghubungi kami melalui section saran di bawah.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
