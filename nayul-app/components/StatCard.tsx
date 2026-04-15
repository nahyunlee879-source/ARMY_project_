'use client';

import { Stat } from '@/lib/types';
import EditableText from './EditableText';

interface StatCardProps {
  stat: Stat;
  onUpdate: (s: Stat) => void;
}

export default function StatCard({ stat, onUpdate }: StatCardProps) {
  return (
    <div className="border border-ink/8 dark:border-ivory/8 p-4 bg-ivory/40 dark:bg-ivory/4 hover:border-gold/30 transition-colors group">
      <EditableText
        value={stat.value}
        onChange={(value) => onUpdate({ ...stat, value })}
        className="font-serif italic text-2xl text-gold leading-none block mb-1.5"
        placeholder="값"
      />
      <EditableText
        value={stat.label}
        onChange={(label) => onUpdate({ ...stat, label })}
        className="text-[11px] text-muted font-light uppercase tracking-wider block"
        placeholder="레이블"
      />
    </div>
  );
}
