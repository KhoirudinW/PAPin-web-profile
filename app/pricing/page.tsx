import React from 'react';
import { Check, X } from 'lucide-react';
import { detailedPricingData } from '@/data/price';
import { rupiah } from '@/helpers/ConvertRupiah';

const PricingTable: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 md:mb-8 text-center">
              Pricing Table
            </h2>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-300 p-6 bg-orange-50 text-left">
                      <span className="text-2xl font-bold text-purple-900">
                        Pricing Table
                      </span>
                    </th>
                    {detailedPricingData.map((tier, index) => (
                      <th
                        key={index}
                        className={`border-2 border-gray-300 p-6 ${
                          tier.name === 'Gratis'
                            ? 'bg-pink-400'
                            : 'bg-fuchsia-600'
                        } ${tier.highlighted ? 'shadow-lg' : ''}`}
                      >
                        <div className="text-white text-2xl font-bold">
                          {tier.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                  <tr>
                    <th className="border-2 border-gray-300 p-4 bg-orange-50"></th>
                    {detailedPricingData.map((tier, index) => (
                      <th
                        key={index}
                        className="border-2 border-gray-300 p-6 bg-orange-50"
                      >
                        {tier.originalPrice && (
                          <div className="flex items-center justify-center mb-2">
                            <span className="text-base text-gray-500 line-through decoration-red-600 decoration-1">
                              Rp. {rupiah(tier.originalPrice)}
                            </span>
                          </div>
                        )}
                        <div className="flex items-start justify-center">
                          <span className="text-xl text-gray-700 font-semibold mt-1">
                            Rp.
                          </span>
                          <span className="text-3xl font-bold text-purple-900">
                            {rupiah(tier.price)}
                          </span>
                          <span className="text-base text-gray-700 mt-2 ml-1">
                            /mo
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detailedPricingData[0].features.map((_, featureIndex) => (
                    <tr key={featureIndex} className="hover:bg-orange-50">
                      <td className="border-2 border-gray-300 p-4 text-left">
                        <span className="text-purple-900 font-medium">
                          {detailedPricingData[0].features[featureIndex].name}
                        </span>
                      </td>
                      {detailedPricingData.map((tier, tierIndex) => (
                        <td
                          key={tierIndex}
                          className="border-2 border-gray-300 p-4 text-center"
                        >
                          {tier.features[featureIndex].included ? (
                            <div className="flex justify-center">
                              <Check className="w-8 h-8 text-green-500" />
                            </div>
                          ) : tier.features[featureIndex].massage ? (
                            <div className="text-sm text-purple-900 font-medium">
                              {tier.features[featureIndex].massage}
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <X className="w-8 h-8 text-red-500" />
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="border-2 border-gray-300 p-4 bg-orange-50"></td>
                    {detailedPricingData.map((tier, index) => (
                      <td
                        key={index}
                        className="border-2 border-gray-300 p-6 bg-orange-50"
                      >
                        <button
                          className={`w-full py-3 px-6 rounded-full text-white font-bold text-base transition-all hover:shadow-lg ${
                            tier.name === 'Gratis'
                              ? 'bg-pink-300 hover:bg-pink-400'
                              : 'bg-fuchsia-500 hover:bg-fuchsia-600'
                          }`}
                        >
                          {tier.buttonText}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-6">
              {detailedPricingData.map((tier, tierIndex) => (
                <div
                  key={tierIndex}
                  className={`border-2 rounded-xl overflow-hidden ${
                    tier.highlighted
                      ? 'border-fuchsia-600 shadow-lg'
                      : 'border-gray-300'
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`py-4 px-6 text-center ${
                      tier.name === 'Gratis' ? 'bg-pink-400' : 'bg-fuchsia-600'
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="py-6 px-6 text-center bg-orange-50">
                    {tier.originalPrice && (
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-sm text-gray-500 line-through">
                          Rp. {rupiah(tier.originalPrice)}
                        </span>
                      </div>
                    )}
                    <div className="flex items-start justify-center">
                      <span className="text-lg text-gray-700 font-semibold mt-1">
                        Rp.
                      </span>
                      <span className="text-4xl font-bold text-purple-900">
                        {rupiah(tier.price)}
                      </span>
                      <span className="text-sm text-gray-700 mt-2 ml-1">
                        /mo
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-4 py-4 space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
                      >
                        <span className="text-sm text-purple-900 font-medium">
                          {feature.name}
                        </span>
                        <div className="flex items-center">
                          {feature.included ? (
                            <Check className="w-6 h-6 text-green-500" />
                          ) : feature.massage ? (
                            <span className="text-xs text-purple-900 font-medium">
                              {feature.massage}
                            </span>
                          ) : (
                            <X className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="p-4 bg-orange-50">
                    <button
                      className={`w-full py-3 px-6 rounded-full text-white font-bold text-base transition-all hover:shadow-lg ${
                        tier.name === 'Gratis'
                          ? 'bg-pink-300 hover:bg-pink-400'
                          : 'bg-fuchsia-500 hover:bg-fuchsia-600'
                      }`}
                    >
                      {tier.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;