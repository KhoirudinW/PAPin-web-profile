import Link from "next/link";
import { steps, WorkflowStep } from "@/data/workflow";

type RenderWFProps = {
  data: WorkflowStep[];
};

const RenderWorkflow = ({ data }: RenderWFProps) => {
    return (
      <div className="flex flex-col justify-center items-center mt-2 space-y-2">
        {data.map((wf, index) => (
          <div key={index} className="flex flex-row gap-4 items-start w-full group">
            
            {/* ICON + CONNECTOR */}
            <div className="flex flex-col items-center w-12 shrink-0">
                <div className="relative">
                    <img
                        src="/about/bulet.png"
                        alt="bulet"
                        className="size-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-gray-800'>{wf.id}.</p>
                </div>
  
              {index !== data.length - 1 && (
                <div className="h-12 w-0.5 bg-dashed-primary opacity-30"></div>
              )}
            </div>
  
            {/* TEXT */}
            <div className="flex flex-col py-1 flex-1 text-start">
              <p className="text-gray-800 font-bold group-hover:text-primary transition-colors">
                {wf.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
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
    <section id='about' className='relative min-h-screen py-24 overflow-hidden bg-[#FFFDFB] px-6'>
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-8xl  mx-auto flex flex-col items-center gap-24">
            {/* Intro Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                <div className="relative group animate-fade-up">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img 
                      src="/about/about.png" 
                      alt="about-img" 
                      className="relative z-10 w-full max-w-1/2 lg:max-w-1/4 mx-auto drop-shadow-2xl animate-soft-float"
                    />
                </div>
                
                <div className="space-y-6 md:text-start text-center animate-fade-up delay-1">
                    <h2 className='text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight'>
                      Kenapa PAPin <span className="text-primary italic">Ada?</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium lg:w-3/4">
                      Banyak hubungan tidak rusak karena satu kesalahan besar, tapi karena perhatian kecil yang berhenti dilakukan. PAPin membantu pasangan kembali saling hadir, lewat momen sederhana yang dijaga setiap hari.
                    </p>
                </div>
            </div>

            {/* Workflow Section (Preserved logic, updated UI) */}
            <div className="w-full flex flex-col items-center gap-12">
                <div className="text-center space-y-4 max-w-7xl animate-fade-up transition-all">
                    <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
                        Bagaimana Kami Bekerja
                    </span>
                    <h1 className='text-4xl md:text-6xl font-black text-gray-900 tracking-tight'>
                        Alur <span className="text-primary italic">Kerja</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full items-stretch animate-fade-up delay-1">
                    <div className="text-center lg:text-end space-y-4 order-1 lg:order-1 self-start lg:mt-20">
                        <p className='text-gray-500 lg:max-w-[50%] lg:ml-auto text-lg font-medium leading-relaxed italic'>
                          "Tidak rumit. Tidak menuntut. PAPin bekerja dengan cara yang tenang dan konsisten."
                        </p>
                    </div>

                    <div className="lg:order-2 order-1 flex justify-center">
                      <div className="bg-white/40 backdrop-blur-xl border-2 border-primary/60 rounded-[40px] p-10 shadow-2xl relative overflow-hidden w-full">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                          <RenderWorkflow data={steps}/>
                      </div>
                    </div>

                    <div className="text-center lg:text-start space-y-4 order-3 lg:order-3 self-start lg:mt-20">
                        <p className='text-gray-500 lg:max-w-[50%] text-lg font-medium leading-relaxed italic'>
                          "Cukup satu notifikasi, satu foto, dan satu momen yang tersimpan selamanya."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
