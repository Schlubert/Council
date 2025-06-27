import React from 'react';
import { Header } from './components/Header';
import { PolicySection } from './components/PolicySection';
import { GallerySection } from './components/GallerySection';
import { ReferenceSection } from './components/ReferenceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CANDIDATE_DATA, POLICIES, REFERENCES, GALLERY_IMAGES, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 text-slate-800 font-sans leading-normal tracking-normal">
      <Header 
        name={CANDIDATE_DATA.name}
        slogan={CANDIDATE_DATA.slogan}
        imageUrl={CANDIDATE_DATA.imageUrl}
        bio={CANDIDATE_DATA.bio}
      />

      <main className="container mx-auto max-w-5xl py-8 px-4">
        <PolicySection policies={POLICIES} />
        <GallerySection images={GALLERY_IMAGES} />
        <ReferenceSection references={REFERENCES} />
        <ContactSection contactInfo={CONTACT_INFO} />
      </main>

      <Footer name={CANDIDATE_DATA.name} />
    </div>
  );
};

export default App;