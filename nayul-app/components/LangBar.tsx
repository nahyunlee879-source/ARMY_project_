'use client';

import { LangLevel } from '@/lib/types';

interface LangBarProps {
  levels: LangLevel[];
  onUpdate: (levels: LangLevel[]) => void;
}

const COLORS = {
  done: 'bg-sage border-sage text-ivory',
  current: 'bg-gold border-gold text-ivory',
  future: 'bg-transparent border-muted/30 text-muted border-dashed',
};

export default function LangBar({ levels, onUpdate }: LangBarProps) {
  const firstUndone = levels.findIndex((l) => !l.done);

  const toggle = (idx: number) => {
    const next = levels.map((l, i) => {
      // Clicking a done level marks it + all after as undone
      if (levels[idx].done) {
        return { ...l, done: i < idx };
      }
      // Clicking an undone level marks it + all before as done
      return { ...l, done: i <= idx };
    });
    onUpdate(next);
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif italic text-lg text-ink dark:text-ivory">
          독일어 학습 경로
        </h3>
        <span className="text-[11px] text-muted font-light">
          레벨을 클릭해 완료 표시
        </span>
      </div>

      {/* Progress track */}
      <div className="relative flex items-center mb-5">
        <div className="absolute inset-x-0 h-px bg-ink/10 dark:bg-ivory/10 top-1/2 -translate-y-1/2" />
        <div
          className="absolute left-0 h-px bg-sage transition-all duration-500"
          style={{
            width: `${
              firstUndone === -1
                ? 100
                : (firstUndone / (levels.length - 1)) * 100
            }%`,
          }}
        />
        <div className="relative flex w-full justify-between">
          {levels.map((lv, i) => {
            const status =
              lv.done ? 'done' : i === firstUndone ? 'current' : 'future';
            return (
              <button
                key={lv.level}
                onClick={() => toggle(i)}
                className={`
                  w-8 h-8 rounded-full border flex items-center justify-center
                  text-xs font-medium transition-all duration-300
                  ${COLORS[status]}
                  ${status === 'current' ? 'ring-2 ring-gold/30 ring-offset-2 ring-offset-ivory dark:ring-offset-ink' : ''}
                  ${status === 'future' ? 'bg-ivory dark:bg-ink' : ''}
                `}
                title={`${lv.level}${lv.done ? ' (완료)' : status === 'current' ? ' (진행 중)' : ' (예정)'}`}
              >
                {lv.done ? '✓' : lv.level.slice(-1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Level labels row */}
      <div className="flex justify-between">
        {levels.map((lv) => (
          <div key={lv.level} className="text-center flex-1">
            <p
              className={`text-[11px] font-medium uppercase tracking-wider ${
                lv.done ? 'text-sage' : 'text-muted'
              }`}
            >
              {lv.level}
            </p>
            {lv.target && (
              <p className="text-[10px] text-muted/60 font-light mt-0.5">
                {lv.target}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
