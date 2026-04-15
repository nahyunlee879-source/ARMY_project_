'use client';

interface ProgressBarProps {
  completed: number;
  total: number;
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] uppercase tracking-widest text-muted font-light">
          Progress
        </span>
        <span className="text-[11px] text-muted font-light tabular-nums">
          {completed} / {total} 완료&ensp;·&ensp;{pct}%
        </span>
      </div>
      <div className="h-px bg-ink/10 dark:bg-ivory/10 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gold transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
