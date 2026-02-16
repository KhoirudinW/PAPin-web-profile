import type { Metadata } from "next";
import NewsCardContainer from "@/components/NewsCardContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { buildPageMetadata } from "@/helpers/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Artikel PAPin",
  description:
    "Halaman artikel PAPin sedang disusun agar sepenuhnya relevan untuk kebutuhan hubungan dan pasangan.",
  path: "/news",
  noIndex: true,
});

export default function NewsPage() {
    const BCItems =[
        {label: "Home", href: "/"},
        {label: "Berita"}
    ]
    return (
        <div className="min-h-screen bg-linear-to-b from-cream to-white p-8 pt-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text ">
                    Berita
                </h1>
                <p></p>
                <Breadcrumb items={BCItems}/>
                <NewsCardContainer/>
            </div>
        </div>
    );
}
