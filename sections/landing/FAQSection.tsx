'use client'
import { useState } from "react";
import FAQitem from "@/components/FAQitem";

const FAQ_DATA = [
    {
      id: 1,
      question: 'Apa itu PAPin?',
      answer:
        'PAPin adalah ruang privat untuk pasangan berbagi momen harian secara sederhana melalui foto yang dibagikan, dengan waktu dan pesan yang dibuat tanpa tekanan untuk terlihat sempurna.'
    },

    {
      id: 2,
      question: 'Apakah data dan foto kami aman?',
      answer:
        'Ya. PAPin dirancang dengan enkripsi di setiap foto yang dikirim. Semua data disimpan secara aman dan hanya dapat diakses oleh pasangan yang saling terhubung.'
    },
    {
      id: 3,
      question: 'Apakah PAPin harus digunakan setiap hari?',
      answer:
        'Tidak ada kewajiban. PAPin hadir untuk menemani usaha kecil dalam hubungan. Satu hari terlewat bukan kegagalan karena yang terpenting adalah niat untuk hadir.'
    },
    {
      id: 4,
      question: 'Apakah PAPin gratis?',
      answer:
        'PAPin dapat digunakan secara gratis dengan fitur dasar. Beberapa fitur tambahan mungkin tersedia sebagai opsi premium di masa mendatang.'
    }
  ];
  
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#FFFDFB] py-32 overflow-hidden px-6">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full mx-auto space-y-20">
        <div className="text-center space-y-6 animate-fade-up">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
                Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Pertanyaan yang <span className="text-primary italic">Sering Ditanyakan</span>
            </h2>
        </div>

        <div className="flex flex-col gap-6 animate-fade-up delay-1 lg:w-1/2 mx-auto">
          {FAQ_DATA.map((item, index) => (
            <FAQitem 
              key={item.id} 
              question={item.question} 
              answer={item.answer}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
