import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar"
import BackToTop from "@/components/BackToTop"
import FooterSection from "@/sections/landing/FooterSection"
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://papin.biz.id"),

  title: {
    default: "PAPin — Menjaga Kehadiran Setiap Hari",
    template: "%s | PAPin — Menjaga Kehadiran Setiap Hari",
  },

  description:
    "PAPin membantu pasangan tetap terhubung melalui rutinitas harian sederhana—berbagi foto, waktu, dan pesan penuh perhatian. Ruang privat untuk dua orang, aman dan penuh makna.",

  keywords: [
    "papin",
    "aplikasi pasangan",
    "aplikasi couple",
    "hubungan jarak jauh",
    "ldr couple app",
    "daily photo couple",
    "aplikasi hubungan",
    "diary pasangan",
  ],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://papin.biz.id",
    siteName: "PAPin",
    title: "PAPin — Menjaga Kehadiran Setiap Hari",
    description:
      "Ruang privat untuk dua orang, berbagi rutinitas harian sederhana yang penuh makna.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PAPin - Menjaga Kehadiran Setiap Hari",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PAPin — Menjaga Kehadiran Setiap Hari",
    description:
      "Aplikasi privat untuk pasangan agar tetap terhubung setiap hari.",
    images: ["/og-image.png"],
  },
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
