import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

const SocialLink: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = (props) => (
  <a {...props} className="text-slate-500 hover:text-sky-400 transition-colors duration-300">
    {props.children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-slate-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          <p className="mt-2 text-slate-400">Have questions or want to get involved? I'd love to hear from you.</p>
          <div className="mt-6">
            <a href="mailto:kevingilbertdunedin@gmail.com" className="inline-block bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300 shadow-md">
              kevingilbertdunedin@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-6">
          <SocialLink href="https://www.facebook.com/profile.php?id=61579643667332" aria-label="Facebook"><FacebookIcon /></SocialLink>
          <SocialLink href="http://www.linkedin.com/in/kevingilbertnzl" aria-label="LinkedIn"><LinkedInIcon /></SocialLink>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Authorized by the campaign for Kevin Gilbert, Dunedin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;