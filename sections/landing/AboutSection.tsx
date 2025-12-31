import Link from "next/link";
import { steps, WorkflowStep } from "@/data/workflow";


type RenderWFProps = {
  data: WorkflowStep[];
};


const RenderWorkflow = ({ data }: RenderWFProps) => {
    return (
      <div className="flex flex-col justify-center items-center mt-2">
        {data.map((wf, index) => (
          <div key={index} className="flex flex-row gap-1 items-start w-full">
            
            {/* ICON + CONNECTOR */}
            <div className="flex flex-col items-center w-1/5">
                <div className="relative">
                    <img
                        src="/about/bulet.png"
                        alt="bulet"
                        className="size-11"
                    />
                    <p className='absolute top-1/2 left-1/2 -translate-1/2 text-sm md:text-lg font-medium'>{wf.id}.</p>
                </div>
  
              {index !== data.length - 1 && (
                <div className="h-10 w-1 border-2 border-dashed border-primary"></div>
              )}
            </div>
  
            {/* TEXT */}
            <div className="flex flex-col py-1 w-4/5 text-start">
              <p className="md:text-lg text-md font-medium">
                {wf.title}
              </p>
              <p className="md:text-md text-sm  text-gray-600 ">
                {wf.description}
              </p>
            </div>
  
          </div>
        ))}
      </div>
    );
  };
  

function AboutSection() {
  return (
    <section id='about' className='lg:h-screen overflow-hidden bg-linear-to-b from-soft-cream via-20% via-cream to-80% to-secondary '>
        <div className="flex flex-col justify-center items-center gap-12 p-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-36 w-full md:w-3/4">
                <div className="min-w-47.25  flex justify-start items-start scale-75 md:scale-100 animate-soft-float">
                    <img src="/about/about.png" alt="about-img" width={200} height={320}/>
                </div>
                <div className="flex flex-col md:items-end md:w-1/2 scale-90 sm:scale-100">
                    <h2 className='header-primary-2 text-center md:text-end'>Kenapa PAPin Ada?</h2>
                    <p className='fonts-sm md:text-lg text-center max-w-125.5 sm:text-end lg:text-end'>Hubungan tidak selalu menjauh karena hal besar. Kadang, jarak tumbuh dari kebiasaan kecil yang perlahan terlewat. PAPin hadir untuk menemani pasangan menjaga kedekatan lewat momen sederhana, setiap hari.</p>
                </div>
            </div>
            <div className="flex flex-col items-center min-w-94.2 max-w-263.75 gap-6 md:scale-75 scale-100 lg:scale-90">
                <h1 className='header-white-1 text-center'>Alur Kerja</h1>
                <div className="text-center flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6">
                    <p className='fonts-lg w-78.75 items-start text-gray lg:text-end hovered-anim '>Tidak rumit. Tidak menuntut. PAPin bekerja dengan cara yang tenang dan konsisten.</p>
                    <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6">
                        <div className="border-4 rounded-xl min-h-95 min-w-95 max-w-150 max-h-150 border-light-blue bg-white p-2.75">
                            <RenderWorkflow data={steps}/>
                        </div>
                        <p className='fonts-lg w-78.75 text-gray lg:text-start hovered-anim '>PAPin tidak meminta kesempurnaan. Hanya kehadiran kecil yang dilakukan bersama, setiap hari.</p>
                    </div>
                </div>
                <div className="">
                  <Link href='/workflow' className="btn btn-third-solid">Lihat cara kerjanya</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection