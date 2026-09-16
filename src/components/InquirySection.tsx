import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, ArrowUpRight, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../data/content';

interface InquirySectionProps {
  initialServices?: string[];
  initialBudget?: string;
  initialTimeline?: string;
  referenceProject?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  initialServices = ['Spatial Architecture & Pavilions'],
  initialBudget = '€25,000 – €50,000',
  initialTimeline = 'Standard Studio Pace',
  referenceProject = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Architecture & Spatial',
    budget: initialBudget,
    timeline: initialTimeline,
    services: initialServices,
    message: referenceProject
      ? `Referencing commission study: ${referenceProject}.\nWe are interested in discussing...`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionDossier, setSubmissionDossier] = useState<any>(null);

  const availableServices = [
    'Spatial Architecture & Pavilions',
    'Digital Systems & Archival Platforms',
    'Editorial Identity & Type Design',
    'Tactile Objects & Seating Commissions',
  ];

  const budgetOptions = [
    '€15,000 – €25,000',
    '€25,000 – €50,000',
    '€50,000 – €100,000',
    '€100,000+ (Masterplan Scope)',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const refCode = 'AV-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionDossier({
      ...formData,
      referenceCode: refCode,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#e7e5e4] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
              Commission Dossier &bull; Direct Studio Intake
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917]">
              Initiate a Commission
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            We partner with discerning patrons, institutions, and founders worldwide. 
            All submissions are reviewed by our lead partners in Paris and Kyoto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Form Column */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div
                id="inquiry-success-panel"
                className="p-8 sm:p-12 bg-[#f4f2eb] border border-[#1c1917] space-y-6"
              >
                <div className="flex items-center space-x-3 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Commission Dossier Received
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl text-[#1c1917]">
                    Thank you, {submissionDossier.name}.
                  </h3>
                  <p className="mt-3 text-sm text-[#57534e] leading-relaxed">
                    Your brief has been assigned reference ID{' '}
                    <span className="font-mono font-semibold text-[#1c1917]">
                      {submissionDossier.referenceCode}
                    </span>
                    . Our partners review project feasibility and material commitments weekly. 
                    You will receive an initial feasibility assessment within two business days.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e7e5e4] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#78716c] block">DIRECT CONTACT</span>
                    <span className="text-[#1c1917] font-medium">{submissionDossier.email}</span>
                  </div>
                  <div>
                    <span className="text-[#78716c] block">INDICATIVE TIER</span>
                    <span className="text-[#1c1917] font-medium">{submissionDossier.budget}</span>
                  </div>
                  <div>
                    <span className="text-[#78716c] block">SELECTED DISCIPLINES</span>
                    <span className="text-[#1c1917]">
                      {submissionDossier.services.length > 0
                        ? submissionDossier.services.join(', ')
                        : 'General Consultation'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#78716c] block">REVIEW STATUS</span>
                    <span className="text-emerald-700 font-semibold">Under Partner Appraisal</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmissionDossier(null);
                    }}
                    className="px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#1c1917] border border-[#1c1917] hover:bg-[#faf9f5] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="commission-inquiry-form" onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-2 font-medium"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f4f2eb] border border-[#e7e5e4] px-4 py-3 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1c1917]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-2 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="eleanor@foundation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f4f2eb] border border-[#e7e5e4] px-4 py-3 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1c1917]"
                    />
                  </div>
                </div>

                {/* Organization & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-org"
                      className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-2 font-medium"
                    >
                      Organization / Patronage (Optional)
                    </label>
                    <input
                      id="client-org"
                      type="text"
                      placeholder="Vance Heritage Trust"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#f4f2eb] border border-[#e7e5e4] px-4 py-3 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1c1917]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-2 font-medium"
                    >
                      Primary Project Type
                    </label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#f4f2eb] border border-[#e7e5e4] px-4 py-3 text-sm text-[#1c1917] focus:outline-none focus:border-[#1c1917]"
                    >
                      <option value="Architecture & Spatial">Private Sanctuary or Residential</option>
                      <option value="Cultural Pavilion">Cultural Pavilion or Gallery</option>
                      <option value="Digital Platform">Archival Digital System / Software</option>
                      <option value="Brand Identity">Monographic Brand & Typeface</option>
                      <option value="Bespoke Furniture">Tactile Furniture / Limited Edition</option>
                      <option value="Multi-Disciplinary">Integrated Architecture & Digital</option>
                    </select>
                  </div>
                </div>

                {/* Disciplines Required */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-3 font-medium">
                    Requested Disciplines
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableServices.map((service) => {
                      const isChecked = formData.services.includes(service);
                      return (
                        <div
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`p-3 border text-xs font-mono flex items-center space-x-3 cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-[#1c1917] text-[#faf9f5] border-[#1c1917]'
                              : 'bg-[#f4f2eb] text-[#44403c] border-[#e7e5e4] hover:bg-[#e7e5e4]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                              isChecked ? 'border-[#faf9f5]' : 'border-[#78716c]'
                            }`}
                          >
                            {isChecked && <span className="w-2 h-2 bg-[#faf9f5]" />}
                          </div>
                          <span className="truncate">{service}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Bracket */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-3 font-medium">
                    Estimated Investment Bracket
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`px-3 py-2 text-xs font-mono border transition-colors cursor-pointer text-center ${
                          formData.budget === opt
                            ? 'bg-[#1c1917] text-[#faf9f5] border-[#1c1917]'
                            : 'bg-[#f4f2eb] text-[#44403c] border-[#e7e5e4] hover:bg-[#e7e5e4]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Brief / Message */}
                <div>
                  <label
                    htmlFor="project-brief"
                    className="block text-xs font-mono uppercase tracking-wider text-[#1c1917] mb-2 font-medium"
                  >
                    Project Overview &amp; Site / Platform Context *
                  </label>
                  <textarea
                    id="project-brief"
                    required
                    rows={4}
                    placeholder="Describe your site, timeline constraints, aesthetic intentions, or digital ambitions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f4f2eb] border border-[#e7e5e4] p-4 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#1c1917]"
                  />
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    id="inquiry-submit-btn"
                    type="submit"
                    className="inline-flex items-center space-x-2 px-8 py-4 text-xs font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer"
                  >
                    <span>Transmit Commission Dossier</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <span className="ml-4 text-xs font-mono text-[#78716c]">
                    Zero automated spam &bull; Confidentiality preserved
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Direct Studio Coordinates Column */}
          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-[#e7e5e4] lg:pl-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
                DIRECT INTAKE
              </span>
              <h3 className="font-serif text-2xl text-[#1c1917]">
                Atelier Communications
              </h3>
              <p className="text-sm text-[#57534e] mt-2 leading-relaxed">
                For urgent curatorial inquiries, architectural press requests, or academic lectures:
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono text-[#44403c]">
              <div className="p-4 bg-[#f4f2eb] border border-[#e7e5e4]">
                <div className="flex items-center space-x-2 text-[#1c1917] font-semibold mb-1">
                  <Mail className="w-4 h-4" />
                  <span>COMMISSIONS DESK</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-[#1c1917] hover:underline"
                >
                  {STUDIO_INFO.email}
                </a>
              </div>

              <div className="p-4 bg-[#f4f2eb] border border-[#e7e5e4]">
                <div className="flex items-center space-x-2 text-[#1c1917] font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>PARIS BUREAU</span>
                </div>
                <p>14 Rue de Turenne, 75003 Paris, France</p>
                <p className="text-[#78716c] mt-1">Visits strictly by scheduled invitation.</p>
              </div>

              <div className="p-4 bg-[#f4f2eb] border border-[#e7e5e4]">
                <div className="flex items-center space-x-2 text-[#1c1917] font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>KYOTO BUREAU</span>
                </div>
                <p>82 Jodoji Shinnyo-cho, Sakyo-ku, Kyoto, Japan</p>
                <p className="text-[#78716c] mt-1">Joinery &amp; garden study atelier.</p>
              </div>
            </div>

            <div className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#1c1917] mb-2 font-semibold">
                <Clock className="w-4 h-4" />
                <span>COMMISSION CALENDAR</span>
              </div>
              <p className="text-xs text-[#57534e] leading-relaxed">
                We deliberately limit concurrent architectural engagements to three active sites 
                per calendar year to ensure uncompromised artisan supervision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
