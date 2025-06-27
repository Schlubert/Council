import React from 'react';
import type { Policy, Reference, GalleryImage, ContactInfo } from './types';

const ScaleIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52c2.62.352 4.908.842 6.75 1.472m-18.75.952a48.416 48.416 0 0 1 6.75-1.472m6.75 1.472L5.25 12m13.5 0L12 5.25m0 6.75l-5.25 5.25m5.25-5.25l5.25 5.25" />
  </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
  </svg>
);

const BuildingLibraryIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>
);

const GlobeAltIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);


export const CANDIDATE_DATA = {
    name: "Johnathan Miller",
    slogan: "Principled Leadership for a Brighter Future",
    imageUrl: "https://picsum.photos/seed/candidate/500/500",
    bio: "Johnathan Miller has dedicated his life to public service, championing fiscal responsibility and community values. With a background in local business and city council, he understands the challenges our district faces and has a proven track record of creating practical, common-sense solutions. He believes in a government that is efficient, accountable, and works for the people. A family man and long-time resident, Johnathan is committed to preserving our way of life while paving the way for a prosperous future for generations to come."
};

export const POLICIES: Policy[] = [
    {
        icon: ScaleIcon,
        title: "Fiscal Responsibility",
        description: "Championing balanced budgets, cutting wasteful spending, and ensuring taxpayer dollars are used wisely to foster economic stability and growth."
    },
    {
        icon: ShieldCheckIcon,
        title: "Community Safety",
        description: "Supporting our law enforcement with the resources they need and promoting community-based programs to ensure our neighborhoods are safe for every family."
    },
    {
        icon: BuildingLibraryIcon,
        title: "Local Infrastructure",
        description: "Investing in our roads, bridges, and public spaces to build a stronger foundation for our community's future and improve quality of life."
    },
    {
        icon: GlobeAltIcon,
        title: "Economic Opportunity",
        description: "Creating a business-friendly environment that encourages job growth, supports small businesses, and attracts new investment to our district."
    }
];

export const REFERENCES: Reference[] = [
    {
        quote: "Johnathan's dedication to fiscal conservatism and his common-sense approach to governance are exactly what we need. He's a true leader.",
        name: "Eleanor Vance",
        title: "Former Mayor & Business Leader",
        imageUrl: "https://picsum.photos/seed/person1/100/100"
    },
    {
        quote: "I've worked alongside Johnathan for years. His integrity is unmatched, and he always puts the needs of the community first.",
        name: "Marcus Thorne",
        title: "President, Local Chamber of Commerce",
        imageUrl: "https://picsum.photos/seed/person2/100/100"
    },
    {
        quote: "He doesn't just talk; he listens. Johnathan Miller has a genuine desire to serve the people and the principles he stands for.",
        name: "Samantha Reed",
        title: "Community Organizer",
        imageUrl: "https://picsum.photos/seed/person3/100/100"
    }
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { src: "https://picsum.photos/seed/gallery1/600/400", alt: "Candidate speaking at a town hall" },
    { src: "https://picsum.photos/seed/gallery2/600/400", alt: "Candidate meeting with local business owners" },
    { src: "https://picsum.photos/seed/gallery3/600/400", alt: "Candidate at a community event" },
    { src: "https://picsum.photos/seed/gallery4/600/400", alt: "Scenic view of the district" },
];


const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.5 19.5h1.5l-8.25-10.875h-1.65l8.4 10.875z"></path></svg>);
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>);

export const CONTACT_INFO: ContactInfo = {
    email: "contact@millerforoffice.com",
    phone: "(555) 123-4567",
    socials: [
        { name: "Twitter", url: "#", icon: TwitterIcon },
        { name: "Facebook", url: "#", icon: FacebookIcon },
        { name: "Instagram", url: "#", icon: InstagramIcon }
    ]
};