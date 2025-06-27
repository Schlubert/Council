import type { ReactElement, ComponentType } from 'react';

export interface Policy {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Reference {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  socials: {
    name: string;
    url: string;
    icon: ComponentType<{ className?: string }>;
  }[];
}