'use client';

import { Phase } from '@/lib/types';

interface PhaseNavProps {
  phases: Phase[];
  activePhase: number;
  onPhaseChange: (i: number) => void;
}

export default function PhaseNav({ phases, activePhase, onPhaseChange }: PhaseNavProps) {
  return (
    <nav className="border-b border-ink/8 dark:border-ivory/8 overflow-x-auto scrollbar-hide">
      <div className="flex min-w-max">
        {phases.map((phase, i) => {
          const active = i === activePhase;
          return (
            <button
              key={phase.id}
              onClick={() => onPhaseChange(i)}
              className={`
                relative flex flex-col items-start px-6 py-4 border-r border-ink/6 dark:border-ivory/6
                last:border-r-0 transition-colors flex-shrink-0 text-left
                ${active
                  ? 'bg-gold/5 dark:bg-gold/8'
                  : 'hover:bg-ink/[0.02] dark:hover:bg-ivory/[0.02]'
                }
              `}
            >
              {/* Active indicator */}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
              )}

              <span
                className={`
                  block text-[10px] uppercase tracking-widest font-light mb-0.5
                  ${active ? 'text-gold' : 'text-muted/60'}
                `}
              >
                Phase {String(i).padStart(2, '0')}
              </span>
              <span
                className={`
                  block text-sm font-medium leading-tight
                  ${active ? 'text-ink dark:text-ivory' : 'text-muted'}
                `}
              >
                {phase.tabLabel}
              </span>
              <span className="block text-[10px] font-light text-muted/50 mt-0.5">
                {phase.tabYear}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
