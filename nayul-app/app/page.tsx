'use client';

import { useState, useEffect, useCallback } from 'react';
import { RoadmapData, Phase } from '@/lib/types';
import { loadData, saveData, exportData, resetData } from '@/lib/storage';
import PhaseNav from '@/components/PhaseNav';
import PhasePanel from '@/components/PhasePanel';

/* ── Spinner shown before hydration ──────────────────────── */
function Loader() {
  return (
    <div className="min-h-screen bg-ivory dark:bg-ink flex items-center justify-center">
      <span className="font-serif italic text-2xl text-muted animate-pulse">
        Nayul
      </span>
    </div>
  );
}

/* ── Main app ─────────────────────────────────────────────── */
export default function Home() {
  const [data, setData] = useState<RoadmapData | null>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);

  /* Load from localStorage after mount */
  useEffect(() => {
    setData(loadData());
    setMounted(true);
  }, []);

  /* Sync dark mode class on <html> */
  useEffect(() => {
    if (!data) return;
    document.documentElement.classList.toggle('dark', data.darkMode);
  }, [data?.darkMode]);

  const update = useCallback(
    (next: RoadmapData) => {
      setData(next);
      saveData(next);
    },
    []
  );

  const updatePhase = useCallback(
    (idx: number, p: Phase) => {
      setData((prev) => {
        if (!prev) return prev;
        const phases = prev.phases.map((ph, i) => (i === idx ? p : ph));
        const next = { ...prev, phases };
        saveData(next);
        return next;
      });
    },
    []
  );

  const handlePhaseChange = (i: number) => {
    setActivePhase(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (!resetConfirm) {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 3000);
      return;
    }
    resetData();
    setData(loadData());
    setResetConfirm(false);
  };

  if (!mounted || !data) return <Loader />;

  const totalMilestones = data.phases.reduce((s, p) => s + p.milestones.length, 0);
  const doneMilestones = data.phases.reduce(
    (s, p) => s + p.milestones.filter((m) => m.completed).length,
    0
  );

  return (
    <div className="min-h-screen bg-ivory dark:bg-ink text-ink dark:text-ivory font-sans transition-colors duration-300">

      {/* ── Sticky header + nav ───────────────────── */}
      <header className="sticky top-0 z-50 border-b border-ink/8 dark:border-ivory/8 bg-ivory/92 dark:bg-ink/92 backdrop-blur-md">

        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-13 gap-4 py-3">
          {/* Brand */}
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl leading-none text-ink dark:text-ivory">
              Nayul
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-light hidden sm:inline">
              Lovely Intellect
            </span>
          </div>

          {/* Global progress pip */}
          {totalMilestones > 0 && (
            <div className="hidden md:flex items-center gap-2 text-[10px] text-muted font-light">
              <div className="w-24 h-px bg-ink/10 dark:bg-ivory/10 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{
                    width: `${Math.round((doneMilestones / totalMilestones) * 100)}%`,
                  }}
                />
              </div>
              <span className="tabular-nums">
                {doneMilestones}/{totalMilestones}
              </span>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2">
            {data.lastUpdated && (
              <span className="text-[10px] text-muted/50 font-light hidden lg:inline tabular-nums">
                {new Date(data.lastUpdated).toLocaleDateString('ko-KR', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            )}

            <button
              onClick={() => exportData(data)}
              className="text-[11px] border border-ink/15 dark:border-ivory/15 px-3 py-1.5 font-light tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              내보내기
            </button>

            <button
              onClick={handleReset}
              className={`text-[11px] border px-3 py-1.5 font-light tracking-wide transition-colors ${
                resetConfirm
                  ? 'border-rose text-rose'
                  : 'border-ink/10 dark:border-ivory/10 text-muted/50 hover:border-rose/40 hover:text-rose/70'
              }`}
              title="데이터 초기화"
            >
              {resetConfirm ? '확인?' : '초기화'}
            </button>

            {/* Dark / Light toggle */}
            <button
              onClick={() => update({ ...data, darkMode: !data.darkMode })}
              className="w-8 h-8 border border-ink/15 dark:border-ivory/15 flex items-center justify-center text-sm hover:border-gold hover:text-gold transition-colors"
              aria-label="다크 모드 전환"
            >
              {data.darkMode ? '☀' : '☾'}
            </button>
          </div>
        </div>

        {/* Phase tabs */}
        <PhaseNav
          phases={data.phases}
          activePhase={activePhase}
          onPhaseChange={handlePhaseChange}
        />
      </header>

      {/* ── Main content ─────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-14">
        <PhasePanel
          key={activePhase}                          /* remount → triggers fade-up */
          phase={data.phases[activePhase]}
          phaseIndex={activePhase}
          onUpdate={(p) => updatePhase(activePhase, p)}
        />
      </main>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="border-t border-ink/6 dark:border-ivory/6 py-10 text-center">
        <p className="font-serif italic text-3xl text-ink/20 dark:text-ivory/15 mb-1">
          Lovely Intellect
        </p>
        <p className="text-[10px] uppercase tracking-widest text-muted/40 font-light">
          Nayul · 나연 · 2004
        </p>
      </footer>
    </div>
  );
}
