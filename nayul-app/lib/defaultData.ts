import { RoadmapData } from './types';

export const defaultData: RoadmapData = {
  darkMode: false,
  lastUpdated: new Date().toISOString(),
  phases: [
    /* ─────────────────────────────────────────────
       Phase 00 — 출발선
    ───────────────────────────────────────────── */
    {
      id: 'phase-00',
      tabLabel: '지금',
      tabYear: '2025',
      title: '출발선',
      titleItalic: 'The Starting Line',
      period: '2025',
      description:
        '독일어 공부를 시작하기 전, 2년의 투자가 의미 있는지 먼저 확인해야 해요. LMU 입학처 공식 서면 확인이 가장 먼저예요.',
      stats: [],
      notes: '',
      milestones: [
        {
          id: 'm00-01',
          date: '이번 주',
          text: 'LMU 입학처 이메일 발송 — 전문대(H+/-) 산업디자인 졸업자의 Kunstgeschichte 지원 유관전공 인정 여부 공식 확인',
          tag: '핵심',
          completed: false,
        },
        {
          id: 'm00-02',
          date: '이번 주',
          text: '재학생과 이메일 초안 검토',
          tag: '핵심',
          completed: false,
        },
        {
          id: 'm00-03',
          date: '이번 달',
          text: '독일어 학습 방법 결정 (어학원 vs 과외 vs 앱 조합)',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm00-04',
          date: '이번 달',
          text: 'nayul-portfolio 정리 시작',
          tag: '포트폴리오',
          completed: false,
        },
        {
          id: 'm00-05',
          date: '이번 달',
          text: '영어 미술사 원서 입문 — Gombrich 《The Story of Art》',
          tag: '학업',
          completed: false,
        },
      ],
    },

    /* ─────────────────────────────────────────────
       Phase 01 — 독일어
    ───────────────────────────────────────────── */
    {
      id: 'phase-01',
      tabLabel: '독일어',
      tabYear: '2025–2026',
      title: '독일어',
      titleItalic: 'Language as Gateway',
      period: '2025–2026',
      description:
        '독일어가 유일한 병목이에요. 언어에 70%, 나머지 커리어 자산 구축에 30% 에너지 배분이 기준이에요.',
      stats: [
        { id: 's01-01', value: '18개월', label: 'A1→B2 예상' },
        { id: 's01-02', value: '3–4h', label: '일일 학습' },
        { id: 's01-03', value: 'B2', label: '조건부 입학 요건' },
        { id: 's01-04', value: 'C1', label: '최종 목표' },
      ],
      notes: '',
      langLevels: [
        { level: 'A1', done: false },
        { level: 'A2', done: false },
        { level: 'B1', done: false },
        { level: 'B2', done: false, target: '2026 하반기' },
        { level: 'C1', done: false, target: '2027 초' },
      ],
      milestones: [
        {
          id: 'm01-01',
          date: '2025. 7',
          text: 'A1 수료',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm01-02',
          date: '2025. 10',
          text: 'A2 달성 / Goethe A2 시험 응시',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm01-03',
          date: '2026. 3',
          text: 'B1 달성',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm01-04',
          date: '2026. 상반기',
          text: 'nayul-portfolio 완성',
          tag: '포트폴리오',
          completed: false,
        },
        {
          id: 'm01-05',
          date: '2026. 하반기',
          text: 'B2 시험 응시 및 취득',
          tag: '핵심',
          completed: false,
        },
      ],
    },

    /* ─────────────────────────────────────────────
       Phase 02 — 지원 준비
    ───────────────────────────────────────────── */
    {
      id: 'phase-02',
      tabLabel: '지원 준비',
      tabYear: '2026–2027',
      title: '지원 준비',
      titleItalic: 'The Final Push',
      period: '2026–2027',
      description:
        'B2로 조건부 입학을 노리면서 C1을 마무리하는 시기예요. 7월이 최종 마감선이에요.',
      stats: [
        { id: 's02-01', value: '2027.5', label: '지원서 제출' },
        { id: 's02-02', value: '2027.7', label: 'C1 제출 마감' },
        { id: 's02-03', value: '2027.10', label: '입학 예정' },
      ],
      notes: '',
      milestones: [
        {
          id: 'm02-01',
          date: '2027. 1',
          text: 'TestDaF / DSH C1 시험 응시',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm02-02',
          date: '2027. 3',
          text: 'C1 취득 확인',
          tag: '핵심',
          completed: false,
        },
        {
          id: 'm02-03',
          date: '2027. 4',
          text: 'uni-assist 등록 및 서류 완비',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm02-04',
          date: '2027. 5',
          text: 'LMU 지원서 제출',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm02-05',
          date: '2027. 6',
          text: '온라인 전공 적합성 테스트 제출',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm02-06',
          date: '2027. 7',
          text: 'C1 증명서 제출 → 조건부 입학 확정',
          tag: '핵심',
          completed: false,
        },
        {
          id: 'm02-07',
          date: '2027. 8–9',
          text: '뮌헨 이주 준비 (비자, 주거, 보험, 은행)',
          tag: '생활',
          completed: false,
        },
      ],
    },

    /* ─────────────────────────────────────────────
       Phase 03 — LMU 학사
    ───────────────────────────────────────────── */
    {
      id: 'phase-03',
      tabLabel: 'LMU 학사',
      tabYear: '2027–2031',
      title: 'LMU 학사',
      titleItalic: 'Building the Foundation',
      period: '2027–2031',
      description:
        '학위 자체도 중요하지만, 이 4년 안에 영어 학술 글쓰기 능력과 국제 인턴십 네트워크를 동시에 쌓는 것이 핵심이에요.',
      stats: [
        { id: 's03-01', value: '4년', label: '학업' },
        { id: 's03-02', value: '무료', label: '학비' },
        { id: 's03-03', value: 'QS 64위', label: 'LMU' },
        { id: 's03-04', value: '3개', label: '목표 언어' },
      ],
      notes: '',
      milestones: [
        {
          id: 'm03-01',
          date: '1학년',
          text: '뮌헨 적응 + 기초 과목 이수',
          tag: '학업',
          completed: false,
        },
        {
          id: 'm03-02',
          date: '2학년',
          text: '첫 인턴십 (Pinakothek / 갤러리)',
          tag: '실무',
          completed: false,
        },
        {
          id: 'm03-03',
          date: '3학년',
          text: '교환학생 1학기 (Courtauld / 소르본 / 비엔나)',
          tag: '학업',
          completed: false,
        },
        {
          id: 'm03-04',
          date: '3–4학년',
          text: 'UNESCO 인턴십 준비 시작',
          tag: '실무',
          completed: false,
        },
        {
          id: 'm03-05',
          date: '4학년',
          text: '졸업논문 (Bachelorarbeit) + 대학원 지원 준비',
          tag: '핵심',
          completed: false,
        },
        {
          id: 'm03-06',
          date: '2031',
          text: 'B.A. 졸업 🎓',
          tag: '핵심',
          completed: false,
        },
      ],
    },

    /* ─────────────────────────────────────────────
       Phase 04 — 영미권 석사
    ───────────────────────────────────────────── */
    {
      id: 'phase-04',
      tabLabel: '영미권 석사',
      tabYear: '2031–2033',
      title: '영미권 석사',
      titleItalic: 'The International Turn',
      period: '2031–2033',
      description:
        'LMU 학부 + 독일어 능통 = 영미권 미술사 대학원에서 희소한 프로필. 독일어권 1차 사료에 접근 가능한 연구자.',
      stats: [
        { id: 's04-01', value: 'Courtauld', label: '1순위 · 런던' },
        { id: 's04-02', value: 'NYU IFA', label: '미국' },
        { id: 's04-03', value: 'Columbia', label: 'UNESCO 연결' },
        { id: 's04-04', value: 'KCL', label: 'Arts Mgmt' },
      ],
      notes: '',
      milestones: [
        {
          id: 'm04-01',
          date: '4학년',
          text: 'Writing Sample 준비 (영어 학술 논문 10–20p)',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm04-02',
          date: '4학년',
          text: '교수 추천서 3인 확보',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm04-03',
          date: '4학년',
          text: 'TOEFL / IELTS 최고점 목표 응시',
          tag: '언어',
          completed: false,
        },
        {
          id: 'm04-04',
          date: '2031',
          text: '영미권 석사 지원서 3–5개 대학 제출',
          tag: '지원',
          completed: false,
        },
        {
          id: 'm04-05',
          date: '2031',
          text: '석사 입학 🎓',
          tag: '핵심',
          completed: false,
        },
      ],
    },

    /* ─────────────────────────────────────────────
       Phase 05 — 커리어 분기
    ───────────────────────────────────────────── */
    {
      id: 'phase-05',
      tabLabel: '커리어 분기',
      tabYear: '2033+',
      title: '커리어 분기',
      titleItalic: 'The Divergence',
      period: '2033+',
      description:
        '이것은 택일이 아니에요. 여러 트랙을 동시에 살리면서 가장 강하게 끌리는 방향으로 무게를 옮겨가는 거예요.',
      stats: [],
      notes: '',
      milestones: [],
      tracks: [
        {
          id: 'track-01',
          number: '01',
          name: 'UNESCO / 문화정책',
          tag: '국제기구',
          color: 'rose',
          steps: [
            { year: '2033', text: '석사 졸업 직후 JPO 지원' },
            { year: '2034', text: 'UNESCO 문화다양성·창의경제 포지션' },
            { year: '2036', text: '국제기구 중급 담당관' },
            { year: '2040', text: '문화정책 시니어 전문가' },
          ],
          strength: '4개국어 + LMU 학부 + 실무 경험이 만드는 희소 조합',
        },
        {
          id: 'track-02',
          number: '02',
          name: '교수직 / 큐레이터',
          tag: '학계',
          color: 'sage',
          steps: [
            { year: '2033', text: 'Funded PhD 지원 시작' },
            { year: '2035', text: 'PhD 과정 + TA' },
            { year: '2039', text: '포스닥 또는 조교수 지원' },
            { year: '2041', text: '테뉴어 트랙 교수직' },
          ],
          strength: '실무 이력 있는 박사는 현장 없는 이론가와 완전히 다른 경쟁력',
        },
        {
          id: 'track-03',
          number: '03',
          name: '브랜드 / 크리에이티브 디렉션',
          tag: '업계',
          color: 'gold',
          steps: [
            { year: '2033', text: '럭셔리 브랜드 전략가 취업' },
            { year: '2035', text: '크리에이티브 디렉터 포지션' },
            { year: '2038', text: '독립 컨설팅 런칭' },
            { year: '2041', text: 'Nayul Studio 글로벌' },
          ],
          strength: 'LVMH · Kering — 이론과 미감을 동시에 가진 아시아 크리에이터',
        },
        {
          id: 'track-04',
          number: '04',
          name: '기업가정신 / 인플루언서',
          tag: '사업',
          color: 'mauve',
          steps: [
            { year: '2033', text: 'Nayul 브랜드 본격 수익화' },
            { year: '2035', text: '첫 자체 브랜드·스튜디오 런칭' },
            { year: '2038', text: '투자 유치 또는 파트너십 확장' },
            { year: '2041', text: '다중 수입원 완성' },
          ],
          strength: '삶 자체가 콘텐츠이자 브랜드인 사람 — Lovely Intellect',
        },
      ],
    },
  ],
};
