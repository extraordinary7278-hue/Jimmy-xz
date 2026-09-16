import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeParis, setTimeParis] = useState('');
  const [timeKyoto, setTimeKyoto] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimeParis(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now)
      );
      setTimeKyoto(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now)
      );
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#f4f2eb] text-[#1c1917] pt-20 pb-12 border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#e7e5e4]">
          {/* Studio Moniker & Mission */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif tracking-wider text-2xl font-medium text-[#1c1917] block">
              {STUDIO_INFO.name}
            </span>
            <p className="text-sm text-[#57534e] max-w-sm leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>
            <div className="pt-2 text-xs font-mono text-[#78716c]">
              Coordinates: {STUDIO_INFO.coordinates}
            </div>
          </div>

          {/* Dual Clocks & Studio Outposts */}
          <div className="md:col-span-3 space-y-4 text-xs font-mono">
            <span className="text-[#78716c] uppercase tracking-widest block font-medium">
              Synchronous Ateliers
            </span>
            <div className="p-3 bg-[#faf9f5] border border-[#e7e5e4] space-y-1">
              <div className="flex justify-between text-[#1c1917] font-semibold">
                <span>PARIS</span>
                <span>{timeParis} CET</span>
              </div>
              <p className="text-[#78716c]">3e Arrondissement &bull; Architecture &amp; Type</p>
            </div>
            <div className="p-3 bg-[#faf9f5] border border-[#e7e5e4] space-y-1">
              <div className="flex justify-between text-[#1c1917] font-semibold">
                <span>KYOTO</span>
                <span>{timeKyoto} JST</span>
              </div>
              <p className="text-[#78716c]">Sakyo-ku &bull; Joinery &amp; Landscape</p>
            </div>
          </div>

          {/* Newsletter Monograph Subscription */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#78716c] uppercase tracking-widest block font-medium">
              Annual Monograph &amp; Gazette
            </span>
            <p className="text-sm text-[#57534e] leading-relaxed">
              Receive our yearly published compendium of material studies, structural drawings, and architectural essays. No marketing newsletters.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#faf9f5] border border-emerald-700 text-emerald-800 text-xs font-mono flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to Gazette Monograph.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center space-x-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="name@institution.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#faf9f5] border border-[#e7e5e4] px-4 py-2 text-xs font-mono text-[#1c1917] placeholder-[#a8a29e] flex-1 focus:outline-none focus:border-[#1c1917]"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-4 py-2 bg-[#1c1917] text-[#faf9f5] text-xs font-mono uppercase tracking-wider hover:bg-[#292524] cursor-pointer whitespace-nowrap"
                >
                  Join Gazette
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78716c] gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Atelier V&eacute;ricourt Bureau.</span>
            <span>All rights reserved.</span>
            <span>Colophon: Newsreader &bull; Plus Jakarta Sans &bull; JetBrains Mono.</span>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 hover:text-[#1c1917] transition-colors cursor-pointer"
          >
            <span>Return to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
