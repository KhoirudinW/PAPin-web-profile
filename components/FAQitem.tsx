'use client'
import { useState } from 'react';

type FAQtype = {
  index: number | null ,
  question: string,
  answer: string
}

function FAQitem({index, question, answer} : FAQtype) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number | null ) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        <div
              className="bg-cream rounded-xl shadow-md shadow-primary border border-primary/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-base">
                  {question}
                </span>
                <span className="text-xl font-medium text-primary">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {answer}
                </div>
              )}
            </div>
    )
}

export default FAQitem