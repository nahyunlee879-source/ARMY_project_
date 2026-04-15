export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Milestone {
  id: string;
  date: string;
  text: string;
  tag: TagType;
  completed: boolean;
}

export type TagType =
  | '언어'
  | '지원'
  | '포트폴리오'
  | '학업'
  | '실무'
  | '핵심'
  | '생활';

export interface LangLevel {
  level: string;
  done: boolean;
  target?: string;
}

export interface TrackStep {
  year: string;
  text: string;
}

export type TrackColor = 'rose' | 'sage' | 'gold' | 'mauve';

export interface Track {
  id: string;
  number: string;
  name: string;
  tag: string;
  color: TrackColor;
  steps: TrackStep[];
  strength: string;
}

export interface Phase {
  id: string;
  tabLabel: string;
  tabYear: string;
  title: string;
  titleItalic: string;
  period: string;
  description: string;
  stats: Stat[];
  milestones: Milestone[];
  notes: string;
  langLevels?: LangLevel[];
  tracks?: Track[];
}

export interface RoadmapData {
  phases: Phase[];
  lastUpdated: string;
  darkMode: boolean;
}
