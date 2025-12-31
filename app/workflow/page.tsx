import React from 'react';
import { steps } from '@/data/workflow';


const WorkflowPage: React.FC = () => {
 

  return (
    <div className="min-h-screen bg-linear-to-b from-cream to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-400 mb-3">Workflow</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit.</p>
        </div>

        {/* Workflow Container */}
        <div className="flex gap-8">
          {/* Kolom 1: Images - Layout ke bawah */}
          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={`img-${step.id}`} className="w-32 h-40 bg-linear-to-br from-pink-300 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Kolom 2: Garis Penanda dengan Circle Numbers */}
          <div className="relative flex flex-col items-center">
            {/* Garis Putus-Putus Kontinu */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-0.5 border-l-2 border-dotted border-pink-300"></div>
            
            {/* Circle Numbers */}
            {steps.map((step, index) => (
              <div key={`line-${step.id}`} className="relative h-40 flex items-start justify-center" style={{ marginBottom: index < steps.length - 1 ? '3rem' : '0' }}>
                <div className="w-12 h-12 bg-white border-4 border-pink-300 rounded-full flex items-center justify-center shadow-md z-10">
                  <span className="text-xl font-bold text-pink-400">{step.id}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom 3: Text Content */}
          <div className="flex-1 flex flex-col gap-12">
            {steps.map((step) => (
              <div key={`text-${step.id}`} className="h-40 flex flex-col justify-start">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowPage;