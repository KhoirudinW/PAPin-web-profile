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
  massage?: string;
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
            'Reaction Preset(1x / pasangan)'
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
            'Mood Harian',
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
            'Timeline perjalanan lengkap',
            'Widget',
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
        { name: 'Pap tidak terbatas', included: false, massage:"10x / pasangan"},
        { name: 'Fitur streak', included: true },
        { name: 'Download tanpa border', included: false},
        { name: 'Preset Custom', included: false, massage:"1x / pasangan" },
        { name: 'Fitur mood harian', included: false },
        { name: 'Fitur widget', included: false },
      ],
      buttonText: 'Get Start',
    },
    {
      name: 'Simpel',
      price: 15000,
      originalPrice: 25000,
      features: [
          { name: 'Pap tidak terbatas', included: true },
          { name: 'Fitur streak', included: true },
          { name: 'Download tanpa border', included: false },
          { name: 'Preset Custom', included: false },
          { name: 'Fitur mood harian', included: true },
          { name: 'Fitur widget', included: false },
        ],
      buttonText: 'Upgrade Now',
      highlighted: true,
    },
    {
      name: 'Pro',
      price: 50000,
      originalPrice: 80000,
      features: [
        { name: 'Pap tidak terbatas', included: true },
        { name: 'Fitur streak', included: true },
        { name: 'Download tanpa border', included: true },
        { name: 'Preset Custom', included: true },
        { name: 'Fitur mood harian', included: true },
        { name: 'Fitur widget', included: true },
      ],
      buttonText: 'Upgrade Now',
    },
  ];
