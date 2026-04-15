'use client';

import { useState, useRef, useEffect, ElementType } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
  as?: ElementType;
}

export default function EditableText({
  value,
  onChange,
  multiline = false,
  className = '',
  placeholder = '클릭해서 편집',
  as: Tag = 'span',
}: EditableTextProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  // Sync external changes while not editing
  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      if ('setSelectionRange' in ref.current) {
        const len = ref.current.value.length;
        ref.current.setSelectionRange(len, len);
      }
    }
  }, [editing]);

  const commit = () => {
    setEditing(false);
    if (draft !== value) onChange(draft);
  };

  const cancel = () => {
    setEditing(false);
    setDraft(value);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) { e.preventDefault(); commit(); }
    if (e.key === 'Escape') cancel();
  };

  if (editing) {
    const shared =
      'bg-transparent outline-none border-b border-gold/60 focus:border-gold w-full transition-colors placeholder:text-muted/40 ' +
      className;

    return multiline ? (
      <textarea
        ref={ref}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={handleKey}
        placeholder={placeholder}
        rows={3}
        className={shared + ' resize-none'}
      />
    ) : (
      <input
        ref={ref}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={handleKey}
        placeholder={placeholder}
        className={shared}
      />
    );
  }

  return (
    <Tag
      className={
        'group/editable relative cursor-text select-none hover:opacity-75 transition-opacity ' +
        className
      }
      onClick={() => setEditing(true)}
      title="클릭해서 편집"
    >
      {value || <span className="opacity-30 italic">{placeholder}</span>}
      <span className="ml-1.5 inline-block opacity-0 group-hover/editable:opacity-30 text-[10px] transition-opacity">
        ✏
      </span>
    </Tag>
  );
}
