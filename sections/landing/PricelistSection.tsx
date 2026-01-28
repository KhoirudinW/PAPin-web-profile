import CardPrice from '@/components/CardPrice';
import { PriceData } from '@/data/price';

function PricelistSection() {
  return (
    <div id='pricelist' className='h-full overflow-hidden lg:h-screen bg-white py-10'>
        <div className="">
            <div className="flex flex-col justify-center items-center gap-2 text-center scale-90 md:scale-100">
                <h1  className='md:header-primary-1 header-primary-2'>Pilih Cara Menjaga</h1>
                <p  className='fonts-lg min-w-90 max-w-110'>
                    Mulai secara gratis, lalu lanjutkan dengan cara yang paling nyaman untuk perjalanan kalian.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-14 gap-5">
                <div className="flex flex-col lg:flex-row gap-5">
                    {PriceData.map((Pd, idx)=>{
                        return(
                            <CardPrice 
                                key={idx} 
                                logo={Pd.logo} 
                                title={Pd.title} 
                                desc={Pd.desc} 
                                price={Pd.price} 
                                realPrice={Pd.realPrice} 
                                benefit={Pd.benefit} 
                                isPink={Pd.isPink} 
                                recomended={Pd.recomended}
                            />
                        )
                    })}
                </div>
                <div className="w-[95%] md:w-3/4 max-w-168.75 bg-cream border-primary rounded-md border flex flex-col gap-3 py-2 px-3 justify-center items-center text-center">
                    <img src="/pricelist/exclamation-mark.png" alt="exclamation"  className='size-5'/>
                    <p className="font-xs">
                        Kamu tidak perlu berubah besar hari ini.
                    </p>
                    <p className="font-xs">
                        Tapi saat hubungan ingin dijaga lebih dalam, langkah kecil yang konsisten sering kali membuat perbedaan terbesar.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricelistSection