import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar"
import BackToTop from "@/components/BackToTop"
import FooterSection from "@/sections/landing/FooterSection"

export const metadata = {
  title: {
    default: 'Homepage | PAPin — Menjaga Kehadiran Setiap Hari',
    template: '%s | PAPin — Menjaga Kehadiran Setiap Hari', // %s akan diganti dengan title di halaman spesifik
  },
  description: 'PAPin membantu pasangan tetap terhubung melalui rutinitas harian sederhana—berbagi foto, waktu, lokasi, dan pesan penuh perhatian. Ruang privat untuk dua orang, aman dan penuh makna.',
  keyword: "papin, aplikasi pasangan, aplikasi couple, hubungan jarak jauh, ldr couple app, daily photo couple, aplikasi hubungan, diary pasangan",
  // openGraph: {
  //   type: 'website',
  //   locale: 'id_ID',
  //   url: 'https://namabrand.com',
  //   siteName: 'NamaBrand',
  // },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased pt-22`}
      >
        <Navbar/>
        {children}
        <BackToTop />
        <FooterSection/>

      </body>
    </html>
  );
}
