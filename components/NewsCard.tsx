'use client'
import React, { useEffect, useState } from 'react'
import { generateSlug } from '@/helpers/GenerateSlug';
import {  User, Clock, Heart, Eye, ChevronRight } from 'lucide-react';

function NewsCard({id, title, image, description} : any) {
    const [likes, setLikes] = useState<number>(0);
    const [views, setViews] = useState<number>(0);
    useEffect(()=>{
        setLikes(Math.floor(Math.random() * 100) + 10);
        setViews(Math.floor(Math.random() * 1000) + 100);
    }, [])
  return (
    <div>
        <a
            href={`/news/${generateSlug(title)}`}
            key={id}
            className="bg-white max-h-full rounded-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row md:items-center shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex flex-col md:flex-row">
                <div className="w-full h-60 md:w-48 md:min-h-20 md:max-h-100 shrink-0">
                    <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                    />
                </div>
                
                <div className="flex-1 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6 ">
                        <div className="flex items-center space-x-2">
                            <User size={20} className="text-pink-400" />
                            <span>Admin</span> {/* Placeholder author */}
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock size={20} className="text-orange-400" />
                            <span>{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Placeholder date */}
                        </div>
                        <div
                            className={`flex items-center p-2 space-x-2`}
                        >
                            <Heart size={24} className="text-pink-400" fill='currentColor' />
                            <span>{likes} Likes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <Eye size={24} />
                            <span>{views} Views</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="">
                <button className="hidden size-10 mr-2 rounded-full bg-linear-to-b from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 md:flex items-center justify-center transition-colors">
                    <ChevronRight className="text-white" size={24} />
                </button>
                <div className="px-2 py-5 md:hidden flex justify-center">
                    <button className="btn btn-primary-solid">Pelajari lebih lanjut</button>
                </div>
            </div>
        </a>
    </div>
  )
}

export default NewsCard