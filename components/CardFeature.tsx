import Image, {StaticImageData} from "next/image"

type CardFeatureProps = {
  title: string;
  desc: string;
  logo: StaticImageData;
};


function CardFeature({title, desc, logo}: CardFeatureProps) {
  return (
    <div className='relative w-55 p-3 scale-90 md:hover:scale-[1.01] transition-transform'>
        <img src="/assets/cardFeatureBg.png" alt="card-accent" className='absolute top-0 right-0 z-10' />
        <div className="relative bg-white z-20 px-3 py-6 rounded-md flex flex-col gap-4 justify-center items-center shadow-md shadow-primary">
            <Image src={logo} alt={`img-${title.toLowerCase()}`} className='size-16.5' width={200} height={200}/>
            <h6 className='header-primary-6 text-center'>{title}</h6>
            <p className='fonts-sm text-center'>{desc}</p>
        </div>
        <img src="/assets/cardFeatureBg.png" alt="card-accent" className='absolute bottom-0 left-0 z-10' />
    </div>
  )
}

export default CardFeature