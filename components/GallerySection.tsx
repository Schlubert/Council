import React from 'react';
import type { GalleryImage } from '../types';
import { Section } from './Section';

interface GallerySectionProps {
  images: GalleryImage[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  return (
    <Section title="On the Campaign Trail" id="gallery">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover aspect-video transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};