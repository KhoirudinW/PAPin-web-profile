import Image from 'next/image'
import { SocialMedia } from '@/data/socialmedia'

function FooterSection() {
  return (
    <footer id='contact' className='relative bg-white overflow-hidden text-soft-cream flex flex-col justify-end h-dvh md:h-[75dvh] p-5 pb-10 gap-4'>
        <div className="absolute bottom-0 left-0 h-full w-full">
            <img src="/sosmed/bg-sosmed.png" alt="bg-sosmed" className='h-full object-cover object-bottom-left'/> 
        </div>
        <div className=" z-10 flex flex-col items-center md:flex-row gap-4">
            <div className="flex flex-col justify-center items-center gap-4 lg:w-2/5">
                <div className="sm:bg-transparent bg-primary rounded-lg p-1">
                        <h2 className='font-bold text-3xl '>Saran</h2>
                        <p className='fonts-lg max-w-127.75 '>Berikan saran untuk pengembangan produk dan peningkatan kenyamanan pengguna.</p>
                </div>
                <div className="flex flex-col w-[85%] md:max-w-100 lg:w-full gap-2 lg:mx-0 mx-auto">
                    <textarea name="" className='inp-err-area text-gray' placeholder='Message' id="" cols={10} rows={5}></textarea>
                    <button className='btn btn-third-solid'>kirim</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/2 gap-2 ">
                <div className="">
                    <h5 className='mb-3 header-white-3'>Narasi refleksi hubungan</h5>
                    <p className='fonts-md max-w-150'>Hubungan tidak selalu tentang hal besar. Kadang, ia hidup dari satu foto sederhana, satu pesan singkat, dan satu usaha kecil untuk tetap hadir hari ini. PAPin ada untuk menyimpan hal-hal kecil itu, agar tidak hilang oleh waktu.</p>
                </div>
                <div className="flex flex-row gap-4 md:w-fit w-full">
                    <a href="" className='fonts-lg text-blue-700'>Tentang privasi</a>
                    <span>|</span>
                    <a href="" className='fonts-lg text-blue-700'>Syarat dan Ketentuan</a>
                </div>
            </div>
        </div>
        <div className="z-10 flex flex-col items-start md:items-center ">
            <h6 className="font-bold text-xl">Sosial media kami:</h6>
            <div className="">
                <ul className='flex flex-row gap-x-10 px-2 flex-wrap mt-3'>
                    {SocialMedia.map((sm, idx)=>{
                        return(
                            <li key={idx}><a href={sm.link} className='flex flex-row items-center gap-2 text-lg p-1 font-semibold '>
                                <Image src={sm.logo} alt={`${sm.name}-icon`} className='size-10'/>
                                <p>{sm.name}</p>
                            </a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className="z-10 lg:w-3/5 w-full flex flex-col mx-auto items-center">
            <div className="border-soft-cream border  w-full"></div>
            <p className='text-center'>© Copyright 2025</p>
        </div>
    </footer>
  )
}

export default FooterSection