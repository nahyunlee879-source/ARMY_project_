'use client';

import { useState, useEffect } from 'react';

const WELCOMED_KEY = 'nayul-welcomed';

/** First-visit welcome toast. Shows once, then never again (localStorage flag). */
export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(WELCOMED_KEY)) return;

    // Delay slightly so the page has settled before showing
    const show = setTimeout(() => {
      setVisible(true);
      localStorage.setItem(WELCOMED_KEY, '1');
    }, 900);

    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const startFade = setTimeout(() => setFading(true), 5000);
    const hide = setTimeout(() => setVisible(false), 5700);

    return () => {
      clearTimeout(startFade);
      clearTimeout(hide);
    };
  }, [visible]);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 500);
  };

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`
        fixed bottom-6 right-6 z-[9000]
        bg-ivory dark:bg-[#232018] border border-gold/35
        px-5 pt-4 pb-4 w-72 shadow-[0_4px_24px_rgba(0,0,0,0.07)]
        transition-all duration-500 ease-out
        ${fading ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}
      `}
    >
      {/* Dismiss */}
      <button
        onClick={dismiss}
        className="absolute top-2.5 right-3 text-muted/30 hover:text-muted/60 text-xs leading-none transition-colors"
        aria-label="닫기"
      >
        ✕
      </button>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/40" />

      {/* Content */}
      <p className="font-serif italic text-[15px] text-ink dark:text-ivory leading-tight mb-1.5 pr-4">
        데이터가 저장됩니다
      </p>
      <p className="text-[11px] text-muted font-light leading-relaxed">
        브라우저를 닫아도 유지돼요.
        <br />
        <span className="opacity-60">모든 편집은 자동 저장됩니다.</span>
      </p>

      {/* Progress bar that counts down */}
      <div className="mt-3 h-px bg-ink/8 dark:bg-ivory/8 overflow-hidden">
        <div
          className="h-full bg-gold/40 origin-left"
          style={{ animation: 'toastProgress 5s linear forwards' }}
        />
      </div>

      <style>{`
        @keyframes toastProgress {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
    </div>
  );
}
