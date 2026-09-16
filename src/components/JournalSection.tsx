import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/content';
import { JournalArticle } from '../types';
import { ArrowRight, BookOpen, X, Clock, Calendar } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#e7e5e4] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
              Atelier Field Notes &bull; Monograph Series
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917]">
              Writings &amp; Architectural Discourse
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            Essays on spatial silence, organic materials, typographic architecture, 
            and the preservation of tactile dignity in a synthetic era.
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-[#e7e5e4] pt-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`journal-article-${article.id}`}
              onClick={() => setActiveArticle(article)}
              className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 cursor-pointer hover:bg-[#f4f2eb]/60 transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-3 space-y-1 text-xs font-mono text-[#78716c]">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#1c1917] font-medium">{article.category}</span>
                  <span>&bull;</span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] group-hover:text-[#44403c] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[#57534e] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="md:col-span-2 flex items-center md:justify-end">
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#1c1917] group-hover:translate-x-1 transition-transform">
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div
            id="article-reader-modal"
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-[#1c1917]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#faf9f5] border border-[#e7e5e4] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-12 shadow-2xl relative"
            >
              {/* Top controls */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e7e5e4] text-xs font-mono text-[#78716c]">
                <div className="flex items-center space-x-3">
                  <span>{activeArticle.category}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.date}</span>
                  <span>&bull;</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <button
                  id="close-article-reader-btn"
                  onClick={() => setActiveArticle(null)}
                  className="p-1 hover:bg-[#e7e5e4] text-[#1c1917] cursor-pointer"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Body */}
              <div className="py-8 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-medium leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="p-4 bg-[#f4f2eb] border-l-2 border-[#1c1917] font-serif italic text-[#44403c]">
                  {activeArticle.excerpt}
                </div>

                <div className="space-y-4 pt-4 text-base sm:text-lg text-[#292524] font-serif leading-relaxed">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono text-[#78716c]">
                <span>Published by Atelier Véricourt Publications</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-[#1c1917] font-semibold underline cursor-pointer hover:text-[#57534e]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
