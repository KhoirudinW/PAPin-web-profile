import { CustomerServices } from "@/data/socialmedia";
import Image from "next/image";

    export const metadata = {
        title: 'Hubungi Kami',
        description:
        'Punya pertanyaan? Hubungi tim support kami melalui email atau form kontak.',
    };
  
  export default function ContactPage() {
    return (
      <main className="bg-linear-to-b from-cream to-white px-6 pt-10 pb-20">
        <section className="max-w-7xl mx-auto flex flex-col gap-4">
  
          {/* Header */}
          <div className="text-center">
            <h1 className="header-primary-2 mb-4">
              Hubungi Kami
            </h1>
            <p className="fonts-sm text-gray leading-relaxed">
              Jika kamu punya pertanyaan, masukan, atau sekadar ingin berbagi cerita,
              kami akan dengan senang hati membacanya.
            </p>
          </div>
  
          {/* Contact Info */}
          <div className="bg-white max-w-95 mx-auto rounded-xl shadow-md shadow-primary p-6 flex flex-col gap-6">
            {CustomerServices.map((sosmed, index) => {return(
                <div key={index}>
                    <div className="flex flex-row items-center gap-3 py-2">
                        <Image src={sosmed.logo} alt={`${sosmed.name.toLowerCase()}-icon`} width={50} height={50} className="bg-primary rounded-full p-1 size-10"/>
                        <h3 className="header-primary-5 mb-1">{sosmed.name}</h3>
                    </div>
                    <p className="fonts-sm text-gray">
                        {sosmed.content}
                    </p>
                </div>
            )})}
  
            <div>
              <h3 className="header-primary-5 mb-1">Waktu Respon</h3>
              <p className="fonts-sm text-gray">
                Kami biasanya membalas dalam 1–2 hari kerja.
              </p>
            </div>
          </div>
  
          {/* Gentle Note */}
          <div className="text-center">
            <p className="fonts-xs text-gray">
              PAPin bukan layanan darurat. Jika kamu membutuhkan bantuan profesional
              atau dukungan emosional mendesak, kami mendorongmu untuk mencari
              bantuan yang tepat.
            </p>
          </div>
  
        </section>
      </main>
    );
  }
  