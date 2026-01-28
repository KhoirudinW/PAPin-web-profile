import Link from "next/link";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-[70dvh] flex items-center justify-center overflow-hidden bg-[#FFFDFB] px-6"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] left-[70%] w-[25%] h-[25%] bg-light-blue/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 lg:px-30">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-8 md:max-w-1/2 lg:max-w-3/4">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-primary/5 px-4 py-1.5 rounded-full border-primary/10 inline-block animate-fade-up">
              Every Day, Little Moments
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] animate-fade-up delay-1">
              Tentang Kita, <br />
              <span className="text-primary italic relative">
                Setiap Hari
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full blur-sm" />
              </span>
            </h1>
          </div>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed animate-fade-up delay-2 max-w-3/4">
            Bukan soal dilihat banyak orang, tapi tentang merasa ditemani. PAPin menjaga kehadiran kecil yang sering terlupa, agar hubungan tetap terasa dekat, setiap hari.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up delay-3">
            <Link 
              href={'https://papin-dashboard-nqgv.vercel.app/login'} 
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hovered hover:scale-105 active:scale-95 transition-all"
            >
              Mulai Bersama
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/40 backdrop-blur-md text-primary border border-primary/20 rounded-2xl font-bold hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all"
            >
              Kenali PAPin
            </Link>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-none md:w-1/2 lg:w-1/3 flex items-center justify-center animate-fade-up delay-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[60px] opacity-50" />
          <img
            src="/hero/hero.png"
            alt="Hero Illustration"
            className="relative z-10 w-full h-auto drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
