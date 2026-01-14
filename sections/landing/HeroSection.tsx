import Link from "next/link"

function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen overflow-hidden md:h-[50dvh] bg-soft-cream"
    >
      <div className="sm:w-3/4 w-[90%] flex flex-col-reverse gap-3 md:flex-row justify-center items-center h-full md:p-5 p-2 mx-auto">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center md:items-start items-center scale-90 md:scale-100">
          <h1 className="header-primary-2 sm:header-primary-1 md:text-start text-center animate-fade-up">
            Tentang Kita, Setiap Hari
          </h1>

          <div className="flex flex-col gap-4 max-w-125.5">
            <p className="fonts-sm text-center md:text-start animate-fade-up delay-1">
              Bukan tentang seberapa sering dilihat orang lain, tapi tentang bagaimana kalian saling hadir. PAPin menemani momen kecil yang terus dijaga, hari demi hari.
            </p>

            <div className="flex flex-row flex-wrap gap-y-2 gap-x-6 md:justify-start justify-center animate-fade-scale delay-2">
              <Link href={'https://papin-dashboard-nqgv.vercel.app/login'} className="btn btn-primary-solid cursor-pointer">
                Mulai bersama
              </Link>
              <Link
                href="/about"
                className="btn btn-primary-stroke cursor-pointer"
              >
                Kenali PAPin
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-2/5 min-w-74.25 w-1/2 flex justify-end items-end animate-fade-up delay-3">
          <img
            src="/hero/hero.png"
            alt="hero-img"
            className="max-h-69.75"
            width={279}
            height={279}
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection
