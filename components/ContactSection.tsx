import React from 'react';
import type { ContactInfo } from '../types';
import { Section } from './Section';

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  return (
    <Section title="Get In Touch" id="contact">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-lg text-slate-600 mb-6">Have questions or want to get involved? Reach out to the campaign.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-navy-800 hover:text-navy-600 transition-colors">
                <MailIcon className="w-6 h-6"/>
                <span className="text-lg">{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-navy-800 hover:text-navy-600 transition-colors">
                <PhoneIcon className="w-6 h-6"/>
                <span className="text-lg">{contactInfo.phone}</span>
            </a>
        </div>
        <div className="flex justify-center items-center gap-6">
            {contactInfo.socials.map(social => {
                const Icon = social.icon;
                return (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group bg-slate-200 hover:bg-navy-800 rounded-full p-3 transition-colors">
                        <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                );
            })}
        </div>
      </div>
    </Section>
  );
};