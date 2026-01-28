import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
    maxWidth?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, badge, maxWidth = "max-w-4xl" }) => {
    // Extracting the last word for the italic primary color effect
    const titleWords = title.split(' ');
    const lastWord = titleWords.pop();
    const firstPart = titleWords.join(' ');

    return (
        <div className="relative text-center mb-16">
            {/* Background Decorative Blobs (Local to Header for consistency) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-visible pointer-events-none -z-10">
                <div className="absolute top-[-50px] left-[-20%] w-[140%] h-[300px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-0 left-[10%] w-[30%] h-[150px] bg-secondary/10 rounded-full blur-[80px]" />
                <div className="absolute top-[-20px] right-[10%] w-[25%] h-[120px] bg-light-blue/10 rounded-full blur-[60px]" />
            </div>

            {badge && (
                <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-6 inline-block animate-fade-up">
                    {badge}
                </span>
            )}
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 animate-fade-up delay-1">
                {firstPart}{' '}
                <span className="text-primary italic relative">
                    {lastWord}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full blur-sm" />
                </span>
            </h1>
            
            <p className={`text-gray-500 text-lg md:text-xl ${maxWidth} mx-auto leading-relaxed animate-fade-up delay-2`}>
                {subtitle}
            </p>
        </div>
    );
};

export default Header;
