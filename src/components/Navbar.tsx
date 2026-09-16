import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeParis, setTimeParis] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeParis(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Works', href: '#works' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#e7e5e4]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Studio Moniker */}
        <a
          id="brand-logo"
          href="#"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif tracking-wider text-xl font-medium text-[#1c1917] group-hover:text-[#44403c] transition-colors">
            {STUDIO_INFO.name}
          </span>
          <span className="text-[11px] font-mono text-[#78716c] uppercase tracking-widest">
            Paris &bull; Kyoto &bull; Est. 2019
          </span>
        </a>

        {/* Live Studio Status & Telemetry (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 text-xs font-mono text-[#78716c] border-x border-[#e7e5e4] px-6 py-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse inline-block" />
            <span className="text-[#1c1917] font-medium">Paris {timeParis} CET</span>
          </div>
          <span className="text-[#a8a29e]">&bull;</span>
          <span className="text-[#44403c]">Accepting Autumn 2026 Commissions</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#44403c]">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#1c1917] transition-colors cursor-pointer focus:outline-none"
            >
              {link.name}
            </button>
          ))}
          <button
            id="nav-inquire-btn"
            onClick={onOpenInquiry}
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer rounded-none"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1c1917] hover:text-[#44403c] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#faf9f5] border-b border-[#e7e5e4] px-6 py-8 space-y-6"
        >
          <div className="text-xs font-mono text-[#78716c] pb-4 border-b border-[#e7e5e4]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>Studio Active: Paris {timeParis} CET</span>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-serif text-[#1c1917] hover:text-[#78716c] transition-colors focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full text-center px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer"
          >
            Initiate Project Commission
          </button>
        </div>
      )}
    </header>
  );
};
