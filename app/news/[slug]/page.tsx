'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { User, Clock, Heart, Eye } from 'lucide-react';
import { newsData, NewsItem } from '@/data/news'; // Assuming newsData is exported from '@/data/news'
import { generateSlug } from '@/helpers/GenerateSlug';
import NewsCard from '@/components/NewsCard';
import Breadcrumb from '@/components/Breadcrumb';

// Extend NewsItem with slug (computed)
interface NewsItemWithSlug extends NewsItem {
  slug: string;
}

// Precompute slugs for all news items
const newsDataWithSlugs: NewsItemWithSlug[] = newsData.map((item) => ({
  ...item,
  slug: generateSlug(item.title),
}));




const DetailedNewsPage = () => {
  const params = useParams();
  const { slug } = params;

  const BCItems = [
    {label: 'Home', href: '/'},
    {label: 'Berita', href: '/news'},
    {label: slug as string},
  ]

  
  const [newsItem, setNewsItem] = useState<NewsItemWithSlug | null>(null);
  const [likes, setLikes] = useState<number>(0);
  const [views, setViews] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<NewsItemWithSlug[]>([]);

  useEffect(() => {
    // Find the news item based on slug
    const item = newsDataWithSlugs.find((news) => news.slug === slug);
    if (item) {
      setNewsItem(item);
      // Simulate initial likes and views
      setLikes(Math.floor(Math.random() * 100) + 10);
      setViews(Math.floor(Math.random() * 1000) + 100);
    }

    // Generate 3 random suggestions excluding current slug
    const filteredNews = newsDataWithSlugs.filter((news) => news.slug !== slug);
    const randomSuggestions = filteredNews.sort(() => 0.5 - Math.random()).slice(0, 3);
    setSuggestions(randomSuggestions);
  }, [slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  
  if (!newsItem) {
    return <div className="min-h-screen flex items-center justify-center">News not found</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-secondary to-white p-8">
      <Breadcrumb items={BCItems}/>
      <div className="max-w-7xl mx-auto">
        {/* Main News Card */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-12">
          {/* Image */}
          <div className="w-full h-96">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              {newsItem.title}
            </h1>

            {/* Subtitle (Description) */}
            <p className="text-gray text-sm mb-6">{newsItem.description}</p>

            {/* Author and Date Info */}
            <div className="flex items-center text-gray-500 mb-6 space-x-6">
              <div className="flex items-center space-x-2">
                <User size={20} className="text-pink-400" />
                <span>Admin</span> {/* Placeholder author */}
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-orange-400" />
                <span>{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span> {/* Placeholder date */}
              </div>
            </div>

            {/* Content (2 Lorem Paragraphs) */}
            <div className="prose prose-lg text-gray-700">
              <p className='indent-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at elementum dui lacinia sed. Donec dignissim lorem risus, at fringilla
                lectus mattis ac. Mauris tincidunt risus ut nisi consequat tempus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <br />
              <p className='indent-10'>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium
                tincidunt lacus. Nulla gravida orci a odio tincidunt varius. Sed aliquet, nunc ut commodo pellentesque,
                nisl nisi lobortis sapien, vel malesuada velit leo vel nunc.
              </p>
            </div>

            <div className="flex items-center text-gray-500 mt-6 space-x-6">              
              <button
                onClick={handleLike}
                className={`flex items-center rounded-md  border-2  p-2 space-x-2 transition-colors ${isLiked ? 'text-white bg-primary border-white' : 'text-gray-500 bg-soft-cream border-light-blue'}`}
              >
                <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
                <span>{likes} Likes</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-500">
                <Eye size={24} />
                <span>{views} Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Sugesti Berita Lainnya
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {suggestions.map((suggestion) => (
            <NewsCard key={suggestion.id} id={suggestion.id} image={suggestion.image} title={suggestion.title} description={suggestion.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedNewsPage;