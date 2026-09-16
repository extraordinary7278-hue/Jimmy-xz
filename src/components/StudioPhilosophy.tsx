import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/content';
import { Compass, PenTool, Sparkles, Box } from 'lucide-react';

export const StudioPhilosophy: React.FC = () => {
  const materials = [
    {
      category: 'Organic Fiber & Timber',
      items: ['Reclaimed Hinoki Cypress', 'Fumed French Oak', 'Vegetable-Tanned Saddle Leather', 'Organic Flax Linens'],
      note: 'Finished strictly with cold-pressed natural linseed oil and beeswax.'
    },
    {
      category: 'Mineral & Geo Mass',
      items: ['Board-formed River Concrete', 'Parisian Lutetian Limestone', 'Basalt Volcanic Aggregate', 'Natural Hydraulic Lime'],
      note: 'Zero synthetic bonding polymers or artificial gloss coatings.'
    },
    {
      category: 'Structural Metallurgy',
      items: ['Grade 5 Brushed Titanium', 'Cast Architectural Bronze', 'Blackened Steel Dowels', 'Unlacquered Brass'],
      note: 'Exposed joinery engineered for thermal expansion and disassemblability.'
    },
    {
      category: 'Digital Medium & Code',
      items: ['Clean Vector Grids', 'System Baseline Typography', 'Zero Bloat Architecture', 'Accessible Semantic HTML'],
      note: 'Software designed like horology—fluid, lightweight, and durable.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#e7e5e4] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
              Studio Methodology &amp; Ethics
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917]">
              The Discipline of Restraint
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            We reject the disposable velocity of the modern trend cycle. Our dual 
            heritage informs an architecture of stillness, longevity, and tactile truth.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 sm:p-10 bg-[#faf9f5] border border-[#e7e5e4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#78716c] pb-4 border-b border-[#e7e5e4]">
                  <span>PRINCIPLE {pillar.number}</span>
                  <span>ATELIER MANDATE</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] mt-6 font-medium">
                  {pillar.title}
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#57534e] mt-2">
                  "{pillar.statement}"
                </p>
                <p className="text-sm text-[#57534e] mt-6 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono text-[#78716c]">
                <span>Applied to: Physical &amp; Digital</span>
                <span className="text-[#1c1917]">Rigorous &bull; Non-Negotiable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Atelier Dual-City Culture */}
        <div className="mt-16 bg-[#f4f2eb] border border-[#e7e5e4] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
                Dual Geographic Ateliers
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917]">
                Parisian Rigor meets Kyoto Quietude
              </h3>
              <p className="text-sm text-[#57534e] mt-4 leading-relaxed">
                Our twin studios work synchronously. Paris brings classical proportion, 
                architectural typology, and Cartesian clarity. Kyoto brings wabi-sabi, 
                material reverence, and the acute celebration of shifting shadow.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716c] pb-2 border-b border-[#e7e5e4]">
                  <span className="font-semibold text-[#1c1917]">PARIS ATELIER</span>
                  <span>48.8566° N, 2.3522° E</span>
                </div>
                <p className="text-xs font-mono text-[#78716c] mt-3">Rue de Turenne, 3e Arrondissement</p>
                <p className="text-sm text-[#57534e] mt-3 leading-relaxed">
                  Focuses on spatial masterplanning, structural stone engineering, digital interface architecture, and typography direction.
                </p>
              </div>

              <div className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716c] pb-2 border-b border-[#e7e5e4]">
                  <span className="font-semibold text-[#1c1917]">KYOTO ATELIER</span>
                  <span>35.0116° N, 135.7681° E</span>
                </div>
                <p className="text-xs font-mono text-[#78716c] mt-3">Sakyo-ku, Near Ginkaku-ji</p>
                <p className="text-sm text-[#57534e] mt-3 leading-relaxed">
                  Dedicated to natural timber sourcing, joinery prototyping, moss landscape integration, and tactile object studies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Material & Code Palette Specification */}
        <div className="mt-16">
          <div className="pb-6 border-b border-[#e7e5e4] flex items-center justify-between">
            <h3 className="font-serif text-2xl text-[#1c1917]">
              Material Specification Manifesto
            </h3>
            <span className="text-xs font-mono text-[#78716c]">
              Strict Zero-Synthetic Policy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {materials.map((mat, i) => (
              <div key={i} className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#1c1917] font-semibold mb-3">
                  {mat.category}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#57534e] font-mono">
                  {mat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="w-1 h-1 bg-[#1c1917] rounded-full inline-block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 pt-4 border-t border-[#e7e5e4] text-[11px] text-[#78716c] italic">
                  {mat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
