'use client'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  
    const isOpen = activeIndex === index;

    return (
        <div className={`transition-all duration-500 rounded-[32px] overflow-hidden border-2 ${
          isOpen 
            ? 'bg-white/60 backdrop-blur-2xl border-primary shadow-2xl shadow-primary/5 -translate-y-1' 
            : 'bg-white/30 backdrop-blur-md border-primary/20 hover:bg-white/50 hover:border-primary/60'
        }`}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-8 py-6 text-left group"
            >
              <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                {question}
              </span>
              <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                <ChevronDown className="size-6 transition-all" />
              </div>
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
                {answer}
              </div>
            </div>
        </div>
    )
}

export default FAQitem;