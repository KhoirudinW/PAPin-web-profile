import { CustomerServices } from "@/data/socialmedia";
import Image from "next/image";
import Header from '@/components/Header';

export const metadata = {
    title: 'Hubungi Kami',
    description: 'Punya pertanyaan? Hubungi tim support kami melalui email atau form kontak.',
};

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-[#FFFDFB] px-6 py-20 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <section className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16 items-center">
                <Header 
                    title="Hubungi Kami"
                    subtitle="Jika kamu punya pertanyaan, masukan, atau sekadar ingin berbagi cerita, kami akan dengan senang hati membacanya."
                    badge="Contact Us"
                />

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-10 shadow-2xl space-y-8 flex flex-col justify-center">
                        {CustomerServices.map((sosmed, index) => (
                            <div key={index} className="flex items-center gap-6 group">
                                <div className="bg-primary/10 p-4 rounded-3xl group-hover:bg-primary/20 transition-colors">
                                    <Image 
                                        src={sosmed.logo} 
                                        alt={`${sosmed.name.toLowerCase()}-icon`} 
                                        width={32} 
                                        height={32} 
                                        className="size-8"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-0.5">{sosmed.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{sosmed.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[40px] p-10 shadow-2xl flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 size-32 bg-secondary/20 rounded-full blur-3xl" />
                        
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Waktu <span className="text-primary italic">Respon</span></h3>
                            <p className="text-gray-500 leading-relaxed font-medium mb-8">
                                Kami percaya bahwa setiap pesan adalah awal dari cerita. Kami biasanya akan membalas dalam <span className="text-primary font-bold">1–2 hari kerja</span>.
                            </p>
                            
                            <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                                <p className="text-xs text-primary leading-relaxed font-semibold italic">
                                    "PAPin bukan layanan darurat. Jika kamu membutuhkan bantuan profesional mendesak, kami mendorongmu untuk mencari bantuan yang tepat."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
  