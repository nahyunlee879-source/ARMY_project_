'use client';

import { Phase } from '@/lib/types';
import EditableText from './EditableText';
import ProgressBar from './ProgressBar';
import StatCard from './StatCard';
import MilestoneList from './MilestoneList';
import LangBar from './LangBar';
import TrackCard from './TrackCard';
import NotesArea from './NotesArea';

interface PhasePanelProps {
  phase: Phase;
  phaseIndex: number;
  onUpdate: (p: Phase) => void;
}

export default function PhasePanel({ phase, phaseIndex, onUpdate }: PhasePanelProps) {
  const completed = phase.milestones.filter((m) => m.completed).length;

  return (
    <div className="animate-fade-up">
      {/* ── Phase header ─────────────────────────── */}
      <div className="mb-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold font-light mb-1">
              Phase {String(phaseIndex).padStart(2, '0')}
            </p>
            <EditableText
              value={phase.title}
              onChange={(title) => onUpdate({ ...phase, title })}
              as="h1"
              className="font-serif italic text-5xl md:text-6xl xl:text-7xl leading-[0.95] text-ink dark:text-ivory"
              placeholder="Phase Title"
            />
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="inline-block border border-ink/15 dark:border-ivory/15 px-3 py-1.5 text-[11px] font-light text-muted tracking-wider">
              {phase.period}
            </span>
          </div>
        </div>

        {/* Italic subtitle */}
        <p className="font-serif italic text-lg text-muted mb-4">
          <EditableText
            value={phase.titleItalic}
            onChange={(titleItalic) => onUpdate({ ...phase, titleItalic })}
            placeholder="Subtitle"
          />
        </p>

        {/* Description */}
        <EditableText
          value={phase.description}
          onChange={(description) => onUpdate({ ...phase, description })}
          multiline
          className="text-sm font-light leading-relaxed text-ink/70 dark:text-ivory/60 max-w-2xl"
          placeholder="이 단계를 설명하세요..."
        />
      </div>

      {/* Thin rule */}
      <div className="border-t border-ink/8 dark:border-ivory/8 mb-10" />

      {/* ── Progress bar ─────────────────────────── */}
      {phase.milestones.length > 0 && (
        <ProgressBar completed={completed} total={phase.milestones.length} />
      )}

      {/* ── Stat cards ───────────────────────────── */}
      {phase.stats.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {phase.stats.map((stat, i) => (
            <StatCard
              key={stat.id}
              stat={stat}
              onUpdate={(updated) => {
                const stats = phase.stats.map((s, j) => (j === i ? updated : s));
                onUpdate({ ...phase, stats });
              }}
            />
          ))}
        </div>
      )}

      {/* ── Language bar (Phase 01 only) ─────────── */}
      {phase.langLevels && (
        <LangBar
          levels={phase.langLevels}
          onUpdate={(langLevels) => onUpdate({ ...phase, langLevels })}
        />
      )}

      {/* ── Milestones ───────────────────────────── */}
      <MilestoneList
        milestones={phase.milestones}
        onUpdate={(milestones) => onUpdate({ ...phase, milestones })}
      />

      {/* ── Career tracks (Phase 05 only) ────────── */}
      {phase.tracks && phase.tracks.length > 0 && (
        <div className="mb-10">
          <h3 className="font-serif italic text-lg text-ink dark:text-ivory mb-4">
            커리어 트랙
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phase.tracks.map((track, i) => (
              <TrackCard
                key={track.id}
                track={track}
                onUpdate={(updated) => {
                  const tracks = phase.tracks!.map((t, j) => (j === i ? updated : t));
                  onUpdate({ ...phase, tracks });
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Notes ────────────────────────────────── */}
      <NotesArea
        value={phase.notes}
        onChange={(notes) => onUpdate({ ...phase, notes })}
      />
    </div>
  );
}
