import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onCommissionSimilar: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onCommissionSimilar,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentGallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1c1917]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      <div
        id="project-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#faf9f5] border border-[#e7e5e4] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#e7e5e4] bg-[#f4f2eb]">
          <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-[#78716c]">
            <span className="text-[#1c1917] font-semibold">{project.category}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#1c1917] hover:bg-[#e7e5e4] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#1c1917] leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-lg text-[#57534e] font-serif italic">
              {project.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-[#78716c] pt-4 border-t border-[#e7e5e4]">
              <div>
                <span className="text-[#a8a29e]">CLIENT: </span>
                <span className="text-[#1c1917]">{project.client}</span>
              </div>
              <div>
                <span className="text-[#a8a29e]">DURATION: </span>
                <span className="text-[#1c1917]">{project.duration}</span>
              </div>
              <div>
                <span className="text-[#a8a29e]">LOCATION: </span>
                <span className="text-[#1c1917]">{project.location}</span>
              </div>
            </div>
          </div>

          {/* Gallery Viewer */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f4f2eb] border border-[#e7e5e4]">
              <img
                src={currentGallery[activeImageIndex]}
                alt={`${project.title} view ${activeImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {currentGallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {currentGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#1c1917] ring-1 ring-[#1c1917]'
                        : 'border-[#e7e5e4] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Narrative: Summary, Challenge, Solution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-[#e7e5e4]">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#78716c] mb-2">
                  Project Narrative
                </h3>
                <p className="text-base sm:text-lg text-[#1c1917] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#f4f2eb] p-6 border border-[#e7e5e4]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-2">
                    Site &amp; Architectural Challenge
                  </h4>
                  <p className="text-sm text-[#57534e] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-[#f4f2eb] p-6 border border-[#e7e5e4]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-2">
                    Deliberate Execution
                  </h4>
                  <p className="text-sm text-[#57534e] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-6 border-l-2 border-[#1c1917] bg-[#f4f2eb]/60 my-6">
                  <Quote className="w-5 h-5 text-[#a8a29e] mb-2" />
                  <p className="font-serif italic text-lg text-[#1c1917]">
                    "{project.testimonial.quote}"
                  </p>
                  <p className="mt-3 text-xs font-mono text-[#78716c]">
                    &mdash; {project.testimonial.author}, {project.testimonial.role}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Details: Deliverables, Materials & Metrics */}
            <div className="md:col-span-4 space-y-6 md:border-l md:border-[#e7e5e4] md:pl-8">
              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
                  Scope Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-[#44403c]">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              {project.materials && project.materials.length > 0 && (
                <div className="pt-4 border-t border-[#e7e5e4]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
                    Material Specification
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 bg-[#f4f2eb] border border-[#e7e5e4] text-[#1c1917]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="pt-4 border-t border-[#e7e5e4]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
                    Key Outcomes
                  </h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between text-xs font-mono">
                        <span className="text-[#78716c]">{metric.label}</span>
                        <span className="text-[#1c1917] font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer with Action */}
        <div className="p-6 sm:px-10 py-4 bg-[#f4f2eb] border-t border-[#e7e5e4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#78716c]">
            Commission Inquiry &bull; Reference Code: {project.id.toUpperCase()}
          </div>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#78716c] hover:text-[#1c1917] cursor-pointer"
            >
              Back to Catalog
            </button>
            <button
              id="modal-commission-btn"
              onClick={() => {
                onCommissionSimilar(project);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer"
            >
              <span>Inquire About Similar Commission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
