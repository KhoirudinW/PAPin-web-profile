import React from 'react';
import { Check, X } from 'lucide-react';
import { detailedPricingData } from '@/data/price';
import { rupiah } from '@/helpers/ConvertRupiah';
import Header from '@/components/Header';
import PricingButton from '@/components/PricingButton';

const PricingTable: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFDFB] py-16 px-4 overflow-hidden select-none">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] left-[70%] w-[25%] h-[25%] bg-light-blue/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Header 
          title="Investasi untuk Kenangan Abadi"
          subtitle="Pilih paket yang paling pas untuk merayakan perjalanan cinta kalian. Tanpa biaya tersembunyi."
          badge="Transparent Pricing"
          maxWidth="max-w-6xl"
        />

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] shadow-2xl overflow-hidden p-8">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-6 text-left w-1/4">
                    <h3 className="text-2xl font-bold text-gray-800">Perbandingan Fitur</h3>
                  </th>
                  {detailedPricingData.map((tier, index) => (
                    <th key={index} className="p-6 text-center">
                      <div className={`relative p-8 rounded-3xl transition-all duration-500 ${
                        tier.name === 'Simpel' 
                          ? 'bg-primary text-white scale-105 shadow-[0_15px_40px_rgba(255,175,204,0.4)]' 
                          : 'bg-white/40 text-gray-800'
                      }`}>
                        {tier.name === 'Simpel' && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black px-4 py-1 rounded-full shadow-md uppercase tracking-widest border border-primary/10 whitespace-nowrap">
                            Paling Populer
                          </div>
                        )}
                        <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-sm font-medium opacity-80">Rp</span>
                          <span className="text-3xl font-black">{rupiah(tier.price)}</span>
                          <span className="text-xs font-medium opacity-60">/bln</span>
                        </div>
                        {tier.originalPrice && (
                          <p className="text-xs line-through opacity-50 mt-1">Rp {rupiah(tier.originalPrice)}</p>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {detailedPricingData[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="group hover:bg-white/50 transition-colors">
                    <td className="py-6 px-6">
                      <span className="text-gray-700 font-semibold group-hover:text-primary transition-colors">
                        {detailedPricingData[0].features[featureIndex].name}
                      </span>
                    </td>
                    {detailedPricingData.map((tier, tierIndex) => (
                      <td key={tierIndex} className="py-6 px-4 text-center">
                        {tier.features[featureIndex].included ? (
                          <div className={`inline-flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary`}>
                            <Check className="size-5 stroke-[3]" />
                          </div>
                        ) : tier.features[featureIndex].message ? (
                          <span className={`text-sm font-bold ${
                            tier.name === 'Simpel' ? 'text-primary' : 'text-primary'
                          }`}>
                            {tier.features[featureIndex].message}
                          </span>
                        ) : (
                          <div className="inline-flex items-center justify-center size-8 rounded-full bg-gray-100/50 text-gray-300">
                            <X className="size-5 stroke-[3]" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-6"></td>
                  {detailedPricingData.map((tier, index) => (
                    <td key={index} className="p-6">
                      <PricingButton 
                        tierName={tier.name} 
                        buttonText={tier.buttonText} 
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-8">
          {detailedPricingData.map((tier, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[40px] p-8 transition-all duration-500 ${
                tier.name === 'Simpel'
                  ? 'bg-primary text-white shadow-[0_20px_50px_rgba(255,175,204,0.4)] scale-[1.02]'
                  : 'bg-white/40 backdrop-blur-xl border border-white/60 text-gray-800'
              }`}
            >
              {tier.name === 'Simpel' && (
                <div className="absolute top-6 right-8 bg-white text-primary text-[10px] font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-widest border border-primary/10">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-medium opacity-80">Rp</span>
                  <span className="text-5xl font-black">{rupiah(tier.price)}</span>
                  <span className="text-sm font-medium opacity-60">/bulan</span>
                </div>
                {tier.originalPrice && (
                  <p className="text-sm line-through opacity-50 mt-1">Mulai dari Rp {rupiah(tier.originalPrice)}</p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="text-sm font-semibold opacity-90">{feature.name}</span>
                    {feature.included ? (
                      <Check className={`size-6 ${tier.name === 'Simpel' ? 'text-white' : 'text-primary'}`} />
                    ) : feature.message ? (
                      <span className="text-sm font-black">{feature.message}</span>
                    ) : (
                      <X className="size-6 opacity-30" />
                    )}
                  </div>
                ))}
              </div>

              <PricingButton 
                tierName={tier.name} 
                buttonText={tier.buttonText} 
                variant="mobile" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;