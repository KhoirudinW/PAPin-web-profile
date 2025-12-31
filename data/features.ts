import { StaticImageData } from 'next/image';
import kamera from 'pub/feature/kamera.png';
import fire from 'pub/feature/fire.png';
import history from 'pub/feature/history.png';
import chain from 'pub/feature/chain.png';
import pen from 'pub/feature/pen.png';

type FeatureItem = {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  description: string;
  points?: string[];
  logo: StaticImageData;
};

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Daily PAP',
    subtitle: 'Satu Momen, Sejuta Makna',
    desc: 'Berbagi satu foto setiap hari sebagai tanda kehadiran. Tidak perlu sempurna—cukup satu momen kecil yang berarti bagi kalian.',
    description:
      'Ini bukan tentang estetika atau pamer kepada dunia. Daily PAP adalah sebuah sapaan tanpa suara. Cukup satu foto sederhana, satu pesan tulus, dan satu niat untuk berkata, "Aku di sini, dan aku memikirkanmu." Karena terkadang, satu potret saat makan siang lebih berarti daripada ribuan kata tanpa kehadiran.',
    logo: kamera
  },
  {
    id: 2,
    title: 'Streak System', 
    subtitle: 'Penanda Hangat Kebiasaan Kita',
    desc: 'Menjaga konsistensi bersama. Streak bukan soal angka, tapi kebiasaan kecil yang terus dijaga dari hari ke hari.',
    description:
       'Di sini, angka bukanlah sebuah kompetisi atau beban. Streak adalah jejak kaki kecil yang kalian tinggalkan setiap hari. Ia menjadi pengingat lembut bahwa di tengah badai kesibukan, kalian tetap memilih untuk saling menjaga dan tidak pernah membiarkan satu hari pun berlalu tanpa saling menyapa.',
    logo: fire
  },
  {
    id: 3,
    title: 'Timeline',
    subtitle: 'Album Kenangan yang Bertumbuh',
    desc: 'Semua momen tersusun rapi dalam satu garis waktu. Tempat melihat kembali perjalanan yang pernah kalian jaga bersama.',
    description:
      'Setiap momen yang kamu bagikan akan tersusun rapi dalam sebuah Timeline pribadi. Kami percaya bahwa hari-hari biasa—yang mungkin terasa membosankan bagi orang lain—adalah harta karun yang patut dikenang kembali di masa depan. Sebuah perjalanan yang terajut dari detik demi detik kejujuran.',
    logo: history
  },
  {
    id: 4,
    title: 'Pair System',
    subtitle: 'Dunia Hanya Milik Berdua',
    desc: 'PAPin hanya untuk dua orang. Sistem pasangan dirancang privat, tanpa ruang publik dan tanpa gangguan dari luar.',
    description:
      'PAPin adalah sebuah rumah, bukan panggung sandiwara. Melalui Pair System, ruang ini hanya tersedia bagi kalian berdua lewat kode privat. Tanpa hiruk-pikuk komentar orang asing, tanpa tuntutan jempol dari orang lain. Hanya ada kamu, dia, dan kenyamanan yang utuh.',
    logo: chain
  },
  {
    id: 5,
    title: 'Caption & Pesan',
    subtitle: 'Ketulusan dalam Kesederhanaan',
    desc: 'Tambahkan pesan kecil atau caption sederhana—kata-kata yang mungkin tak besar, tapi berarti bagi hubungan kalian.',
    description:
      'Kamu tidak perlu menjadi puitis untuk menyampaikan cinta. Melalui fitur Caption, setiap kata-kata kecil—seperti "Hati-hati di jalan" atau "Semangat ya!"—mendapatkan ruang yang istimewa. Karena seringkali, kalimat paling sederhana adalah yang paling dalam menyentuh hati.',
    logo: pen
  },
];
