import CardFeature from '@/components/CardFeature';
import { FEATURES } from '@/data/features';
import Link from 'next/link';

function FeatureSection() {
  return (
    <section id='feature' className='relative min-h-screen py-24 overflow-hidden bg-[#FFFDFB] px-6'>
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[15%] left-[-10%] w-[35%] h-[35%] bg-light-blue/15 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20 items-center">
            <div className="text-center space-y-6 max-w-3/4 animate-fade-up">
                <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
                    Everything You Need
                </span>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight'>
                  Fitur yang <span className="text-primary italic">Didapat</span>
                </h1>
                <p className='text-gray-500 text-lg md:text-xl leading-relaxed font-medium'>
                    Bukan fitur yang rumit, tapi cukup untuk menjaga satu momen setiap hari—dengan cara yang tenang dan bermakna.
                </p>
            </div>

            <div className="flex flex-col items-center gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 animate-fade-up delay-1">
                    {FEATURES.map((fd, idx) => (
                        <div key={idx} className="h-full">
                          <CardFeature title={fd.title} desc={fd.desc} logo={fd.logo}/>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-2">
                    <Link 
                      href={'https://app.papin.biz.id'} 
                      className='px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hovered hover:scale-105 active:scale-95 transition-all'
                    >
                      Mulai Hari Ini
                    </Link>
                    <Link 
                      href='/feature' 
                      className='px-8 py-4 bg-white/40 backdrop-blur-md text-primary border border-primary/20 rounded-2xl font-bold hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all'
                    >
                      Lihat Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection;