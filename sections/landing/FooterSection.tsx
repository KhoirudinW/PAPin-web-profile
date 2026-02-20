import Image from "next/image";
import { SocialMedia } from "@/data/socialmedia";
import Link from "next/link";

function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative bg-[#FFFDFB] overflow-hidden pt-20 pb-10 px-6"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-secondary/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column: Suggestion Box */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Berikan <span className="text-primary italic">Saran</span>
              </h2>
              <p className="text-gray-500 w-full leading-relaxed">
                Bantu kami merajut pengalaman yang lebih berarti. Setiap masukan
                darimu adalah cahaya kecil bagi pengembangan PAPin.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 shadow-2xl space-y-4 w-full group">
              <textarea
                className="w-full bg-white/50 border border-primary/10 rounded-3xl p-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tulis pesan hangatmu di sini..."
                rows={4}
              ></textarea>
              <button className="w-full btn bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-hovered shadow-lg shadow-primary/20 active:scale-95 transition-all">
                Kirim Saran
              </button>
            </div>
          </div>

          {/* Right Column: Narrative & Links */}
          <div className="space-y-12 lg:pt-10 animate-fade-up delay-1">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 italic decoration-primary/30 decoration-4 underline-offset-8">
                Narasi refleksi hubungan
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed w-full">
                Hubungan tidak selalu tentang hal besar. Kadang, ia hidup dari
                satu foto sederhana, satu pesan singkat, dan satu usaha kecil
                untuk tetap hadir hari ini. PAPin ada untuk menyimpan hal-hal
                kecil itu, agar tidak hilang oleh waktu.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-500 font-semibold text-sm md:text-base">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors hover:italic"
              >
                Tentang Privasi
              </Link>
              <span className="opacity-20 hidden md:block">|</span>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors hover:italic"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-10 animate-fade-up delay-2">
          <div className="space-y-4 text-center md:text-left">
            <h6 className="font-bold text-gray-800 uppercase tracking-widest text-xs">
              Sosial media kami:
            </h6>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {SocialMedia.map((sm, idx) => (
                <a
                  key={idx}
                  href={sm.link}
                  target="_blank"
                  className="flex items-center gap-3 group transition-all"
                >
                  <div className="bg-white p-2 rounded-2xl shadow-md group-hover:shadow-primary/20 group-hover:scale-110 transition-all border border-primary/5">
                    <Image
                      src={sm.logo}
                      alt={`${sm.name}-icon`}
                      width={32}
                      height={32}
                      className="size-6 text-primary opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">
                    {sm.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right space-y-2 opacity-60">
            <p className="text-sm font-bold text-gray-500">
              Copyright {new Date().getFullYear()} PAPin
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-primary">
              Crafted with Love for Eternal Memories
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
