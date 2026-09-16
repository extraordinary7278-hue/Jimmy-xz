import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Filter, Search } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project, ProjectCategory } from '../types';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'architecture', label: 'Architecture & Pavilions' },
    { id: 'digital', label: 'Digital Systems' },
    { id: 'brand', label: 'Brand & Identity' },
    { id: 'furniture', label: 'Spatial Objects' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="works" className="py-24 border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#e7e5e4] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
              Selected Works &bull; 2024–2026
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917]">
              Built Structures &amp; Digital Manifests
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            A curated portfolio spanning physical architecture, archival software, 
            monographic branding, and hand-sculpted objects of utility.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="py-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#e7e5e4]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center text-xs font-mono text-[#78716c] mr-2">
              <Filter className="w-3.5 h-3.5 mr-1.5" />
              <span>Discipline:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-mono px-3.5 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#1c1917] text-[#faf9f5]'
                    : 'bg-[#f4f2eb] text-[#44403c] hover:bg-[#e7e5e4] border border-[#e7e5e4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716c]" />
            <input
              id="project-search-input"
              type="text"
              placeholder="Search by client, material, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f4f2eb] border border-[#e7e5e4] pl-9 pr-4 py-1.5 text-xs font-mono text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1c1917]"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-xl text-[#78716c]">No works match the selected criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-mono uppercase tracking-wider text-[#1c1917] underline hover:text-[#57534e]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col bg-[#faf9f5] border border-[#e7e5e4] hover:border-[#1c1917] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f2eb] border-b border-[#e7e5e4]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#faf9f5]/90 backdrop-blur-xs text-[#1c1917] px-2 py-1 border border-[#e7e5e4] whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center space-x-1 text-xs font-mono bg-[#1c1917] text-[#faf9f5] px-2.5 py-1 whitespace-nowrap">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#78716c] mb-2">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#1c1917] font-medium group-hover:text-[#44403c] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#78716c] font-mono">
                      Client: {project.client}
                    </p>

                    <p className="mt-3 text-sm text-[#57534e] line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Footer tags / metrics preview */}
                  <div className="mt-6 pt-4 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono text-[#78716c]">
                    <span>Duration: {project.duration}</span>
                    <span className="text-[#1c1917] group-hover:underline">Explore &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
