import { RoadmapData } from './types';
import { defaultData } from './defaultData';

const STORAGE_KEY = 'nayul-roadmap-data';

export function loadData(): RoadmapData {
  if (typeof window === 'undefined') return defaultData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultData;
    const parsed = JSON.parse(stored) as RoadmapData;
    // Merge with defaultData to handle new phases added to defaultData
    return {
      ...defaultData,
      ...parsed,
      darkMode: parsed.darkMode ?? false,
    };
  } catch {
    return defaultData;
  }
}

export function saveData(data: RoadmapData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...data, lastUpdated: new Date().toISOString() })
    );
  } catch {
    // Storage quota exceeded or unavailable
  }
}

export function exportData(data: RoadmapData): void {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `nayul-roadmap-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function resetData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
