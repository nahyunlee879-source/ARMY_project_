'use client';

import { Track, TrackColor } from '@/lib/types';
import EditableText from './EditableText';

interface TrackCardProps {
  track: Track;
  onUpdate: (t: Track) => void;
}

const PALETTE: Record<TrackColor, { border: string; num: string; tag: string; bar: string }> = {
  rose:  { border: 'border-rose/50',  num: 'text-rose',  tag: 'border-rose/30 text-rose',  bar: 'bg-rose/20'  },
  sage:  { border: 'border-sage/50',  num: 'text-sage',  tag: 'border-sage/30 text-sage',  bar: 'bg-sage/20'  },
  gold:  { border: 'border-gold/50',  num: 'text-gold',  tag: 'border-gold/30 text-gold',  bar: 'bg-gold/20'  },
  mauve: { border: 'border-mauve/50', num: 'text-mauve', tag: 'border-mauve/30 text-mauve', bar: 'bg-mauve/20' },
};

export default function TrackCard({ track, onUpdate }: TrackCardProps) {
  const c = PALETTE[track.color];

  const patchStep = (i: number, field: 'year' | 'text', val: string) => {
    const steps = track.steps.map((s, idx) =>
      idx === i ? { ...s, [field]: val } : s
    );
    onUpdate({ ...track, steps });
  };

  return (
    <div
      className={`
        border border-ink/8 dark:border-ivory/8 border-t-2 ${c.border}
        p-6 flex flex-col gap-4
        hover:border-opacity-100 transition-colors
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`font-serif italic text-5xl leading-none font-light opacity-20 ${c.num}`}
        >
          {track.number}
        </span>
        <span
          className={`text-[10px] border px-2 py-0.5 tracking-widest uppercase font-light ${c.tag}`}
        >
          <EditableText
            value={track.tag}
            onChange={(tag) => onUpdate({ ...track, tag })}
            className="inline"
            placeholder="태그"
          />
        </span>
      </div>

      {/* Track name */}
      <EditableText
        value={track.name}
        onChange={(name) => onUpdate({ ...track, name })}
        as="h3"
        className="font-serif italic text-xl leading-tight text-ink dark:text-ivory"
        placeholder="트랙 이름"
      />

      {/* Steps */}
      <div className="space-y-2.5">
        {track.steps.map((step, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-10 flex-shrink-0">
              <EditableText
                value={step.year}
                onChange={(v) => patchStep(i, 'year', v)}
                className="text-[11px] text-muted font-light tabular-nums"
                placeholder="연도"
              />
            </div>
            <div
              className={`w-px self-stretch flex-shrink-0 mt-1 ${c.bar}`}
              aria-hidden
            />
            <div className="flex-1">
              <EditableText
                value={step.text}
                onChange={(v) => patchStep(i, 'text', v)}
                className="text-sm font-light leading-snug"
                placeholder="설명"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Strength */}
      <div className="pt-4 border-t border-ink/6 dark:border-ivory/6">
        <EditableText
          value={track.strength}
          onChange={(strength) => onUpdate({ ...track, strength })}
          className="font-serif italic text-sm text-muted leading-snug"
          placeholder="핵심 강점..."
          multiline
        />
      </div>
    </div>
  );
}
