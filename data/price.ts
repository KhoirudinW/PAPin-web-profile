import Free from 'pub/pricelist/free.png';
import Simple from 'pub/pricelist/simple.png';
import Pro from 'pub/pricelist/pro.png';
import { StaticImageData } from "next/image";

type CardPriceProps = {
    id: number,
    title: string;
    desc: string;
    price: number;
    realPrice?: number;
    benefit: string[];
    isPink?: boolean;
    recomended?: boolean;
    logo: StaticImageData;
};

interface Feature {
  name: string;
  included: boolean;
  message?: string;
}

interface PricingTier {
  name: string;
  price: number;
  originalPrice?: number;
  features: Feature[];
  buttonText: string;
  highlighted?: boolean;
}
  

export const PriceData: CardPriceProps[] = [
    {
        id: 1,
        title: 'Gratis',
        logo: Free,
        price: 0,
        desc: 'Untuk memulai kebiasaan kecil dan mencoba PAPin bersama.',
        benefit: [
            'Daily PAP (10x / hari)',
            'Mood Tracking (Tidak tersedia)',
            'Reaction Preset (1x / permanent)'
        ],
        isPink: false,
        recomended: false,
    },
    {
        id: 2,
        title: 'Simpel',
        logo: Simple,
        realPrice: 25000,
        price: 15000,
        desc: 'Pilihan paling nyaman untuk pasangan yang ingin berbagi tanpa batas, tanpa fitur yang berlebihan.',
        benefit: [
            'Unlimited PAP',
            'Mood Tracking',
            'Reaction Preset (1x / permanent)'
        ],
        isPink: true,
        recomended: true,
    },
    {
        id: 3,
        title: 'Pro',
        logo: Pro,
        realPrice: 80000,
        price: 50000,
        desc: 'Untuk pasangan yang ingin menyimpan seluruh perjalanan dan kenangan dalam jangka panjang.',
        benefit: [
            'Semua fitur Simple',
            'Unlimited Reaction Preset',
            'Download tanpa border',
            'Mood Analytics & Advanced Dashboard',
        ],
        isPink: false,
        recomended: false,
    },
]


export const detailedPricingData: PricingTier[] = [
    {
      name: 'Gratis',
      price: 0,
      features: [
        { name: 'Daily PAP (unlimited)', included: false, message: "10 per hari" },
        { name: 'Mood Tracking', included: false },
        { name: 'Reaction Preset', included: false, message: "1 preset" },
        { name: 'Download Foto (With Border)', included: false },
        { name: 'Analytics Dashboard', included: false, message: "Basic" },
        { name: 'Storage Limit', included: false, message: "500" },
      ],
      buttonText: 'Mulai Sekarang',
    },
    {
      name: 'Simpel',
      price: 15000,
      originalPrice: 25000,
      features: [
        { name: 'Daily PAP (unlimited)', included: true, message: "Unlimited" },
        { name: 'Mood Tracking', included: true },
        { name: 'Reaction Preset', included: false, message: "1 preset" },
        { name: 'Download Foto (With Border)', included: false },
        { name: 'Analytics Dashboard', included: true},
        { name: 'Mood Analytics', included: true },
        { name: 'Storage Limit', included: false, message: "500" },
      ],
      buttonText: 'Upgrade Sekarang',
      highlighted: true,
    },
    {
      name: 'Pro',
      price: 50000,
      originalPrice: 80000,
      features: [
        { name: 'Daily PAP (unlimited)', included: true, message: "Unlimited" },
        { name: 'Mood Tracking', included: true },
        { name: 'Reaction Preset', included: true, message: "Unlimited" },
        { name: 'Download Foto (Without Border)', included: true },
        { name: 'Analytics Dashboard', included: true, message: "Advanced" },
        { name: 'Storage Limit', included: true, message: "Unlimited" },
      ],
      buttonText: 'Upgrade Sekarang',
    },
  ];
