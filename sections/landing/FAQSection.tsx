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
  return (
    <section className="bg-white pb-20">
      <div className="max-w-155 mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Pertanyaan yang sering ditanyakan
        </h2>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, index) => (
            <FAQitem key={item.id} index={index} question={item.question} answer={item.answer}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
