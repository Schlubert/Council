import React from 'react';

interface HeaderProps {
    name: string;
    slogan: string;
    imageUrl: string;
    bio: string;
}

export const Header: React.FC<HeaderProps> = ({ name, slogan, imageUrl, bio }) => {
  return (
    <header className="bg-navy-900 text-white pt-20 pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src={imageUrl} 
              alt={name}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto border-4 border-navy-700 shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">{name}</h1>
            <p className="text-xl text-blue-200 mt-2 mb-6 text-center md:text-left">{slogan}</p>
            <p className="text-base text-blue-100 leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};