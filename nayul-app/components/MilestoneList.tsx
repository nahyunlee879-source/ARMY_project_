'use client';

import { Milestone, TagType } from '@/lib/types';
import EditableText from './EditableText';

const TAGS: TagType[] = ['언어', '지원', '포트폴리오', '학업', '실무', '핵심', '생활'];

const TAG_STYLES: Record<TagType, string> = {
  언어: 'text-slate border-slate/30',
  지원: 'text-rose border-rose/30',
  포트폴리오: 'text-mauve border-mauve/30',
  학업: 'text-sage border-sage/30',
  실무: 'text-gold border-gold/30',
  핵심: 'text-rose border-rose/50 font-medium',
  생활: 'text-muted border-muted/30',
};

interface MilestoneListProps {
  milestones: Milestone[];
  onUpdate: (m: Milestone[]) => void;
}

function newMilestone(): Milestone {
  return {
    id: crypto.randomUUID(),
    date: '',
    text: '새 마일스톤',
    tag: '학업',
    completed: false,
  };
}

export default function MilestoneList({ milestones, onUpdate }: MilestoneListProps) {
  const patch = (id: string, update: Partial<Milestone>) =>
    onUpdate(milestones.map((m) => (m.id === id ? { ...m, ...update } : m)));

  const remove = (id: string) => onUpdate(milestones.filter((m) => m.id !== id));

  const add = () => onUpdate([...milestones, newMilestone()]);

  if (milestones.length === 0) {
    return (
      <div className="mb-10">
        <SectionHeading milestones={milestones} />
        <button
          onClick={add}
          className="w-full py-5 border border-dashed border-ink/15 dark:border-ivory/15 text-xs text-muted hover:border-gold/40 hover:text-gold transition-colors font-light tracking-wider uppercase"
        >
          + 마일스톤 추가
        </button>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <SectionHeading milestones={milestones} />

      <div className="border border-ink/8 dark:border-ivory/8">
        {milestones.map((m, i) => (
          <MilestoneRow
            key={m.id}
            milestone={m}
            isLast={i === milestones.length - 1}
            onPatch={(u) => patch(m.id, u)}
            onDelete={() => remove(m.id)}
          />
        ))}
      </div>

      <button
        onClick={add}
        className="mt-2 w-full py-2.5 border border-dashed border-ink/15 dark:border-ivory/15 text-[11px] text-muted hover:border-gold/40 hover:text-gold transition-colors font-light tracking-wider uppercase"
      >
        + 마일스톤 추가
      </button>
    </div>
  );
}

function SectionHeading({ milestones }: { milestones: Milestone[] }) {
  const done = milestones.filter((m) => m.completed).length;
  return (
    <div className="flex items-baseline gap-2 mb-3">
      <h3 className="font-serif italic text-lg text-ink dark:text-ivory">마일스톤</h3>
      {milestones.length > 0 && (
        <span className="text-[11px] text-muted font-light">
          {done}/{milestones.length}
        </span>
      )}
    </div>
  );
}

interface RowProps {
  milestone: Milestone;
  isLast: boolean;
  onPatch: (u: Partial<Milestone>) => void;
  onDelete: () => void;
}

function MilestoneRow({ milestone: m, isLast, onPatch, onDelete }: RowProps) {
  return (
    <div
      className={`
        group flex items-start gap-3 px-4 py-3
        hover:bg-gold/[0.03] dark:hover:bg-gold/[0.05] transition-colors
        ${!isLast ? 'border-b border-ink/5 dark:border-ivory/5' : ''}
        ${m.completed ? 'opacity-50' : ''}
      `}
    >
      {/* Checkbox */}
      <button
        onClick={() => onPatch({ completed: !m.completed })}
        className={`
          mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center
          transition-all duration-200
          ${
            m.completed
              ? 'bg-sage border-sage'
              : 'border-muted/30 hover:border-gold dark:border-ivory/20'
          }
        `}
        aria-label={m.completed ? '완료 취소' : '완료 표시'}
      >
        {m.completed && (
          <span className="text-ivory text-[7px] leading-none">✓</span>
        )}
      </button>

      {/* Date */}
      <div className="w-20 flex-shrink-0 pt-px">
        <EditableText
          value={m.date}
          onChange={(date) => onPatch({ date })}
          className="text-[11px] text-muted font-light"
          placeholder="날짜"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 pt-px">
        <EditableText
          value={m.text}
          onChange={(text) => onPatch({ text })}
          className={`text-sm font-light leading-snug ${m.completed ? 'line-through decoration-muted/40' : ''}`}
          placeholder="마일스톤 내용"
        />
      </div>

      {/* Tag selector */}
      <div className="flex-shrink-0">
        <select
          value={m.tag}
          onChange={(e) => onPatch({ tag: e.target.value as TagType })}
          className={`
            text-[10px] bg-transparent border px-2 py-0.5 font-light
            focus:outline-none cursor-pointer
            ${TAG_STYLES[m.tag as TagType] ?? 'text-muted border-muted/30'}
          `}
        >
          {TAGS.map((t) => (
            <option key={t} value={t} className="bg-ivory dark:bg-ink text-ink dark:text-ivory">
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Delete */}
      <button
        onClick={onDelete}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-rose/50 hover:text-rose transition-all text-sm leading-none mt-px"
        aria-label="삭제"
      >
        ✕
      </button>
    </div>
  );
}
