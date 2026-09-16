import React from 'react';
import { ArrowDown, ArrowRight, Compass, Layers } from 'lucide-react';
import { STUDIO_INFO, PROJECTS } from '../data/content';
import { Project } from '../types';

interface HeroProps {
  onSelectProject: (project: Project) => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject, onOpenCalculator }) => {
  const featuredProject = PROJECTS[0]; // Kyoto Moss Pavilion

  const handleScrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Bureau Moniker & Geographic Coordinates */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#e7e5e4] gap-4">
          <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-[#78716c]">
            <Compass className="w-4 h-4 text-[#1c1917]" />
            <span>Dual Practice Bureau</span>
            <span className="text-[#d6d3d1]">&bull;</span>
            <span>Paris 3e &bull; Kyoto Sakyo-Ku</span>
          </div>
          <div className="text-xs font-mono text-[#78716c]">
            <span>Archive Index Vol. VII &bull; 2026</span>
          </div>
        </div>

        {/* Primary Editorial Display Heading */}
        <div className="py-12 md:py-16 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.12] tracking-tight text-[#1c1917]">
            Sanctuaries of stone and timber. <br />
            <span className="italic font-light text-[#44403c]">Tactile objects</span> and quiet digital systems.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#57534e] max-w-2xl leading-relaxed font-normal">
            Atelier Véricourt is an architectural, spatial, and digital design studio. 
            We build physical spaces, archival web software, and bespoke objects rooted in restraint, 
            enduring materials, and quiet contemplation.
          </p>

          {/* Action CTAs: 2x horizontal-to-vertical padding */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              id="hero-explore-works-btn"
              onClick={handleScrollToWorks}
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              id="hero-scope-planner-btn"
              onClick={onOpenCalculator}
              className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-mono uppercase tracking-wider text-[#1c1917] border border-[#1c1917] hover:bg-[#f4f2eb] transition-colors cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Project Scope Calculator</span>
            </button>
          </div>
        </div>

        {/* Featured Showcase Project Banner */}
        <div className="mt-6 pt-6 border-t border-[#e7e5e4]">
          <div className="group relative overflow-hidden bg-[#f4f2eb] border border-[#e7e5e4]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image visual */}
              <div className="lg:col-span-8 overflow-hidden aspect-[16/9] lg:aspect-auto min-h-[360px] lg:min-h-[500px]">
                <img
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project Metadata & In-depth summary */}
              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#e7e5e4] bg-[#faf9f5]">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#78716c] mb-3">
                    <span>Featured Architecture</span>
                    <span>{featuredProject.year}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1917] font-medium leading-snug">
                    {featuredProject.title}
                  </h2>
                  <p className="text-xs font-mono text-[#78716c] mt-1 mb-6">
                    {featuredProject.location} &bull; {featuredProject.client}
                  </p>
                  <p className="text-sm text-[#57534e] leading-relaxed line-clamp-4">
                    {featuredProject.summary}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#e7e5e4] space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#78716c] block">
                      Core Materials
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.materials?.slice(0, 3).map((mat) => (
                        <span
                          key={mat}
                          className="text-xs px-2.5 py-1 bg-[#f4f2eb] border border-[#e7e5e4] text-[#44403c] font-mono whitespace-nowrap"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id="hero-featured-view-btn"
                    onClick={() => onSelectProject(featuredProject)}
                    className="w-full inline-flex items-center justify-between px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#1c1917] bg-[#f4f2eb] hover:bg-[#e7e5e4] transition-colors border border-[#e7e5e4] cursor-pointer"
                  >
                    <span>Inspect Case Study & Materials</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Telemetry Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#e7e5e4] text-xs font-mono">
          <div>
            <span className="text-[#78716c] block mb-1">DISCIPLINES</span>
            <span className="text-[#1c1917] font-medium">Architecture &bull; Spatial &bull; Digital &bull; Objects</span>
          </div>
          <div>
            <span className="text-[#78716c] block mb-1">ATELIER BASE</span>
            <span className="text-[#1c1917] font-medium">Paris (FR) & Kyoto (JP)</span>
          </div>
          <div>
            <span className="text-[#78716c] block mb-1">CURRENT STATUS</span>
            <span className="text-emerald-700 font-medium">Accepting Commissions</span>
          </div>
          <div>
            <span className="text-[#78716c] block mb-1">MATERIAL PLEDGE</span>
            <span className="text-[#1c1917] font-medium">100% Unlacquered & Honest</span>
          </div>
        </div>
      </div>
    </section>
  );
};
