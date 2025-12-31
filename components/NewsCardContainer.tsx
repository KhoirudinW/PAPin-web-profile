'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsData, NewsItem } from '@/data/news'
import { generateSlug } from '@/helpers/GenerateSlug';
import NewsCard from './NewsCard';

function NewsCardContainer() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 10;
    const totalPages: number = Math.ceil(newsData.length / itemsPerPage);
  
    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const currentNews: NewsItem[] = newsData.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePrevPage = (): void => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = (): void => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
  return (
    <>
        <div className="w-full h-150 overflow-hidden overflow-y-scroll no-scrollbar mb-6">
            <div className="space-y-4 select-none">
                {currentNews.map((news) => (
                  <NewsCard key={news.id} id={news.id} title={news.title} image={news.image} description={news.description}/>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <div className="px-6 py-2 bg-white border border-gray-200 rounded-full">
            <span className="font-medium text-gray-900">{currentPage}</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-gray-600">{totalPages}</span>
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
    </>
  )
}

export default NewsCardContainer