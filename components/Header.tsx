import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-300"
  >
    {children}
  </a>
);

const Header: React.FC = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#achievements', label: 'Who am I?' },
    { href: '#vision', label: 'My Vision' },
    { href: '#principles', label: 'Principles' },
    { href: '#faqs', label: 'Q&A' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = (label: string) => {
    setIsOpen(false);
    if (label === 'Q&A') {
      props.setShowFAQ(true);
    } else {
      props.setShowFAQ(false);
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors">
              Kevin Gilbert
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={() => closeMenu(link.label)}>{link.label}</NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-sky-50 inline-flex items-center justify-center p-2 rounded-md text-sky-600 hover:text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-100 focus:ring-sky-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;