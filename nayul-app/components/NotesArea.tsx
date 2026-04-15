'use client';

import { useState, useEffect, useRef } from 'react';

interface NotesAreaProps {
  value: string;
  onChange: (v: string) => void;
}

export default function NotesArea({ value, onChange }: NotesAreaProps) {
  const [local, setLocal] = useState(value);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setLocal(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setLocal(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => onChange(v), 600);
  };

  return (
    <div className="mt-10 pt-8 border-t border-ink/8 dark:border-ivory/8">
      <label className="text-[11px] uppercase tracking-widest text-muted block mb-3 font-light">
        메모
      </label>
      <textarea
        value={local}
        onChange={handleChange}
        placeholder="이 단계에 대한 메모, 생각, 링크..."
        rows={5}
        className="
          w-full bg-transparent border border-ink/10 dark:border-ivory/10
          p-4 text-sm font-light leading-relaxed resize-none
          focus:outline-none focus:border-gold/40
          placeholder:text-muted/30 placeholder:italic
          transition-colors
        "
      />
    </div>
  );
}
