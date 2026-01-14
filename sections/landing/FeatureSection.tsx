import CardFeature from '@/components/CardFeature';
import { FEATURES } from '@/data/features';
import Link from 'next/link';


function FeatureSection() {
  return (
    <section id='feature' className='h-fit p-5 w-full py-20 bg-linear-to-b from-secondary via-20% via-cream to-white overflow-hidden'>
        <div className=" flex flex-col gap-12 justify-center items-center">
            <div className="flex flex-col justify-center gap-4 items-center text-center scale-90 sm:scale-100">
                <h1 className='md:header-primary-1 header-primary-2'>Fitur yang didapat</h1>
                <p className='fonts-lg min-w-90 max-w-120'>
                    Bukan fitur yang rumit, tapi cukup untuk menjaga satu momen setiap hari—dengan cara yang tenang dan bermakna.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-row flex-wrap justify-center items-center gap-5 w-fit">
                    {FEATURES.map((fd, idx) => {
                        return(
                            <CardFeature key={idx} title={fd.title} desc={fd.desc} logo={fd.logo}/>
                        )
                    })}
                </div>
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
                    <Link href={'https://papin-dashboard-nqgv.vercel.app/login'} className='btn btn-primary-solid'>Mulai hari ini</Link>
                    <Link href='/feature' className='btn btn-primary-stroke'>Lihat selengkapnya</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection