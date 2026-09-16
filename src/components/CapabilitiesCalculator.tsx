import React, { useState, useMemo } from 'react';
import { SERVICES } from '../data/content';
import { Check, ArrowRight, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { ServiceOffering } from '../types';

interface CapabilitiesCalculatorProps {
  onTransferScope: (selectedServices: string[], budgetTier: string, timeline: string) => void;
}

export const CapabilitiesCalculator: React.FC<CapabilitiesCalculatorProps> = ({
  onTransferScope,
}) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'spatial-design',
  ]);
  const [scale, setScale] = useState<'compact' | 'standard' | 'masterplan'>('standard');
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const scaleMultipliers = {
    compact: 0.7,
    standard: 1.0,
    masterplan: 1.8,
  };

  const calculation = useMemo(() => {
    const selectedObjects = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
    const baseBudgetTotal = selectedObjects.reduce((acc, curr) => acc + curr.estimatedBudget, 0);
    const scaledBudget = Math.round(baseBudgetTotal * scaleMultipliers[scale]);
    
    // Estimate timeline weeks
    let weeksMin = 6;
    let weeksMax = 16;
    if (selectedServiceIds.includes('spatial-design')) {
      weeksMin = scale === 'compact' ? 24 : scale === 'standard' ? 48 : 72;
      weeksMax = scale === 'compact' ? 36 : scale === 'standard' ? 64 : 96;
    } else {
      weeksMin = scale === 'compact' ? 4 : scale === 'standard' ? 8 : 16;
      weeksMax = scale === 'compact' ? 8 : scale === 'standard' ? 16 : 28;
    }

    if (urgency === 'expedited') {
      weeksMin = Math.max(3, Math.round(weeksMin * 0.75));
      weeksMax = Math.max(5, Math.round(weeksMax * 0.75));
    }

    let budgetTierString = '€25,000 – €50,000';
    if (scaledBudget < 25000) budgetTierString = '€15,000 – €25,000';
    else if (scaledBudget < 50000) budgetTierString = '€25,000 – €50,000';
    else if (scaledBudget < 100000) budgetTierString = '€50,000 – €100,000';
    else budgetTierString = '€100,000+ (Masterplan)';

    return {
      selectedObjects,
      scaledBudget,
      budgetTierString,
      timelineString: `${weeksMin} to ${weeksMax} Weeks`,
    };
  }, [selectedServiceIds, scale, urgency]);

  const handleApply = () => {
    const selectedTitles = SERVICES.filter((s) =>
      selectedServiceIds.includes(s.id)
    ).map((s) => s.name);

    onTransferScope(selectedTitles, calculation.budgetTierString, calculation.timelineString);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" className="py-24 border-b border-[#e7e5e4] bg-[#f4f2eb]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#e7e5e4] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716c] block mb-2">
              Bespoke Engagements &bull; Interactive Planner
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917]">
              Capabilities &amp; Scope Architect
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            Select the required studio disciplines and project parameters to estimate 
            engagement scope, craft milestones, and indicative investment.
          </p>
        </div>

        {/* Interactive Scope Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
          {/* Discipline Selector (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-4">
                1. Select Engagement Disciplines (Multiple Allowed)
              </h3>
              <div className="space-y-4">
                {SERVICES.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      id={`calc-service-${service.id}`}
                      onClick={() => toggleService(service.id)}
                      className={`p-6 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#faf9f5] border-[#1c1917] shadow-xs'
                          : 'bg-[#faf9f5]/60 border-[#e7e5e4] hover:border-[#a8a29e]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-5 h-5 flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'bg-[#1c1917] border-[#1c1917] text-[#faf9f5]'
                                : 'border-[#a8a29e]'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <h4 className="font-serif text-xl text-[#1c1917] font-medium">
                            {service.name}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-[#78716c]">
                          From €{service.estimatedBudget.toLocaleString()}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-[#57534e] pl-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-4 pl-8 flex flex-wrap gap-2">
                        {service.deliverables.slice(0, 3).map((del, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono text-[#78716c] bg-[#f4f2eb] px-2 py-0.5 border border-[#e7e5e4]"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scope Scale & Timeline controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Project Scale */}
              <div className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
                  2. Project Scale
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'compact', label: 'Compact / Specific Study', desc: 'Targeted single space or digital feature' },
                    { id: 'standard', label: 'Dedicated Comprehensive Scope', desc: 'Full building, system, or complete brand suite' },
                    { id: 'masterplan', label: 'Multi-Phase Masterplan', desc: 'Campus, museum, or enterprise multi-year program' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id as any)}
                      className={`w-full text-left p-2.5 border text-xs font-mono transition-colors cursor-pointer ${
                        scale === s.id
                          ? 'bg-[#1c1917] text-[#faf9f5] border-[#1c1917]'
                          : 'bg-[#f4f2eb] text-[#44403c] border-[#e7e5e4] hover:bg-[#e7e5e4]'
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="text-[10px] opacity-80">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cadence / Urgency */}
              <div className="p-6 bg-[#faf9f5] border border-[#e7e5e4]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716c] mb-3">
                  3. Production Cadence
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'standard', label: 'Deliberate Studio Pace', desc: 'Recommended for exhaustive research & material curing' },
                    { id: 'expedited', label: 'Prioritized Dedicated Track', desc: 'Accelerated milestone deliveries with reserved artisans' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setUrgency(u.id as any)}
                      className={`w-full text-left p-2.5 border text-xs font-mono transition-colors cursor-pointer ${
                        urgency === u.id
                          ? 'bg-[#1c1917] text-[#faf9f5] border-[#1c1917]'
                          : 'bg-[#f4f2eb] text-[#44403c] border-[#e7e5e4] hover:bg-[#e7e5e4]'
                      }`}
                    >
                      <div className="font-semibold">{u.label}</div>
                      <div className="text-[10px] opacity-80">{u.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scope Synthesis Summary (Right) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#faf9f5] border border-[#1c1917] p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#e7e5e4]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#78716c]">
                  INDICATIVE ESTIMATION
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Custom Guild Team
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#78716c] block mb-1">
                  RECOMMENDED BUDGET BRACKET
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-medium text-[#1c1917]">
                  {calculation.budgetTierString}
                </div>
                <p className="text-[11px] font-mono text-[#78716c] mt-1">
                  Includes preliminary site analysis, prototyping, artisan fees &amp; documentation.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e7e5e4]">
                <span className="text-xs font-mono text-[#78716c] block mb-1">
                  ESTIMATED ENGAGEMENT TIMELINE
                </span>
                <div className="flex items-center space-x-2 text-xl font-serif text-[#1c1917]">
                  <Clock className="w-4 h-4 text-[#78716c]" />
                  <span>{calculation.timelineString}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e7e5e4]">
                <span className="text-xs font-mono text-[#78716c] block mb-2">
                  SELECTED DISCIPLINES ({calculation.selectedObjects.length})
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-[#44403c]">
                  {calculation.selectedObjects.map((s) => (
                    <li key={s.id} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#1c1917] rounded-full inline-block" />
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#e7e5e4]">
                <button
                  id="calc-transfer-scope-btn"
                  onClick={handleApply}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#faf9f5] bg-[#1c1917] hover:bg-[#292524] transition-colors cursor-pointer"
                >
                  <span>Apply Scope to Inquiry Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] font-mono text-[#78716c] mt-3">
                  Populates contact brief with your selected scope parameters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
