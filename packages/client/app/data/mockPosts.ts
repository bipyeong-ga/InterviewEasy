export type Post = {
    id: number
    companyName: string
    companyLogo: string
    title: string
    location: string
    district: string
    jobCategory: string
    techStack: string[]
    deadline: string
    experience: string
    employmentType: string
    salary: string
    description: string
    responsibilities: string[]
    requirements: string[]
    preferredRequirements: string[]
    benefits: string[]
    bookmarked: boolean
}

export const MOCK_POSTS: Post[] = [
    {
        "id": 1,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[토스뱅크 뱅킹플랫폼팀] 프론트엔드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "비바리퍼블리카(토스) 토스뱅크 뱅킹플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 뱅킹플랫폼팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Zustand 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 2,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[토스증권 WTS 프론트엔드팀] 프론트엔드 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "SCSS"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "비바리퍼블리카(토스) 토스증권 WTS 프론트엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스증권 WTS 프론트엔드팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Nuxt.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Pinia 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 3,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[페이먼트 코어 셀] 프론트엔드 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "React Query",
            "Redux Toolkit",
            "Emotion"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "비바리퍼블리카(토스) 페이먼트 코어 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "페이먼트 코어 셀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, React Query 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redux Toolkit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 4,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[고객경험 UI/UX 실] 프론트엔드 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Svelte",
            "SvelteKit",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "비바리퍼블리카(토스) 고객경험 UI/UX 실에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "고객경험 UI/UX 실 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Svelte, SvelteKit, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 5,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[디자인시스템 파트] 프론트엔드 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "GraphQL",
            "Styled-Components"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "비바리퍼블리카(토스) 디자인시스템 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "디자인시스템 파트 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 6,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[카카오톡 탭프론트엔드팀] 프론트엔드 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "WebRTC",
            "RxJS",
            "Canvas API"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "비바리퍼블리카(토스) 카카오톡 탭프론트엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오톡 탭프론트엔드팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "RxJS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 7,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[카카오페이 자산관리 셀] 프론트엔드 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Micro Frontends",
            "Module Federation",
            "TypeScript",
            "Webpack"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "비바리퍼블리카(토스) 카카오페이 자산관리 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오페이 자산관리 셀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, Micro Frontends, Module Federation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 8,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[카카오커머스 웹개발 파트] 프론트엔드 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "Storybook",
            "Jest",
            "Playwright"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "비바리퍼블리카(토스) 카카오커머스 웹개발 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오커머스 웹개발 파트 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React, TypeScript, Storybook 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Jest 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 9,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[카카오모빌리티 UI셀] 프론트엔드 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Next.js App Router",
            "React Server Components",
            "TypeScript",
            "Tailwind CSS"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "비바리퍼블리카(토스) 카카오모빌리티 UI셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오모빌리티 UI셀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js App Router, React Server Components, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 10,
        "companyName": "비바리퍼블리카(토스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        "title": "[카카오엔터 웹플랫폼팀] 프론트엔드 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "PWA",
            "Service Worker",
            "IndexedDB"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "비바리퍼블리카(토스) 카카오엔터 웹플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오엔터 웹플랫폼팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, PWA 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Service Worker 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 11,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[네이버 검색 FE셀] 프론트엔드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "카카오 네이버 검색 FE셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 검색 FE셀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Zustand 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 12,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[네이버 쇼핑 서비스 개발팀] 프론트엔드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "SCSS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "카카오 네이버 쇼핑 서비스 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 쇼핑 서비스 개발팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Nuxt.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Pinia 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 13,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[네이버 웹툰 글로벌 FE팀] 프론트엔드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "React Query",
            "Redux Toolkit",
            "Emotion"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "카카오 네이버 웹툰 글로벌 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 웹툰 글로벌 FE팀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, React Query 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redux Toolkit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 14,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[네이버 치지직 스트리밍 파트] 프론트엔드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Svelte",
            "SvelteKit",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "카카오 네이버 치지직 스트리밍 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 치지직 스트리밍 파트 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Svelte, SvelteKit, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 15,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[네이버클라우드 파이프라인팀] 프론트엔드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "GraphQL",
            "Styled-Components"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "카카오 네이버클라우드 파이프라인팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버클라우드 파이프라인팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 16,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[당근 중고거래 FE팀] 프론트엔드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "WebRTC",
            "RxJS",
            "Canvas API"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "카카오 당근 중고거래 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 중고거래 FE팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "RxJS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 17,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[당근알바 웹서비스 파트] 프론트엔드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Micro Frontends",
            "Module Federation",
            "TypeScript",
            "Webpack"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "카카오 당근알바 웹서비스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근알바 웹서비스 파트 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, Micro Frontends, Module Federation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 18,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[당근페이 클라이언트팀] 프론트엔드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "Storybook",
            "Jest",
            "Playwright"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "카카오 당근페이 클라이언트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근페이 클라이언트팀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React, TypeScript, Storybook 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Jest 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 19,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[당근 로컬 커머스 셀] 프론트엔드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Next.js App Router",
            "React Server Components",
            "TypeScript",
            "Tailwind CSS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "카카오 당근 로컬 커머스 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 커머스 셀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js App Router, React Server Components, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 20,
        "companyName": "카카오",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        "title": "[당근 광고플랫폼 FE팀] 프론트엔드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "PWA",
            "Service Worker",
            "IndexedDB"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "카카오 당근 광고플랫폼 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 광고플랫폼 FE팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, PWA 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Service Worker 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 21,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[쿠팡 로켓배송 주문웹 파트] 프론트엔드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "네이버 쿠팡 로켓배송 주문웹 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 로켓배송 주문웹 파트 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Zustand 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 22,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[쿠팡이츠 파트너웹팀] 프론트엔드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "SCSS"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "네이버 쿠팡이츠 파트너웹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡이츠 파트너웹팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Nuxt.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Pinia 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 23,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[쿠팡 Play 웹플랫폼 파트] 프론트엔드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "React Query",
            "Redux Toolkit",
            "Emotion"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "네이버 쿠팡 Play 웹플랫폼 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 Play 웹플랫폼 파트 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, React Query 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redux Toolkit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 24,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[쿠팡 글로벌 셀러웹팀] 프론트엔드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Svelte",
            "SvelteKit",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "네이버 쿠팡 글로벌 셀러웹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 글로벌 셀러웹팀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Svelte, SvelteKit, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 25,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[쿠팡 결제 FE셀] 프론트엔드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "GraphQL",
            "Styled-Components"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "네이버 쿠팡 결제 FE셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 결제 FE셀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 26,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[토스뱅크 뱅킹플랫폼팀] 프론트엔드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "WebRTC",
            "RxJS",
            "Canvas API"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "네이버 토스뱅크 뱅킹플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 뱅킹플랫폼팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "RxJS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 27,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[토스증권 WTS 프론트엔드팀] 프론트엔드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Micro Frontends",
            "Module Federation",
            "TypeScript",
            "Webpack"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "네이버 토스증권 WTS 프론트엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스증권 WTS 프론트엔드팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, Micro Frontends, Module Federation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 28,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[페이먼트 코어 셀] 프론트엔드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "Storybook",
            "Jest",
            "Playwright"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "네이버 페이먼트 코어 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "페이먼트 코어 셀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React, TypeScript, Storybook 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Jest 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 29,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[고객경험 UI/UX 실] 프론트엔드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Next.js App Router",
            "React Server Components",
            "TypeScript",
            "Tailwind CSS"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "네이버 고객경험 UI/UX 실에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "고객경험 UI/UX 실 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js App Router, React Server Components, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 30,
        "companyName": "네이버",
        "companyLogo": "https://www.google.com/s2/favicons?domain=navercorp.com&sz=128",
        "title": "[디자인시스템 파트] 프론트엔드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "PWA",
            "Service Worker",
            "IndexedDB"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "네이버 디자인시스템 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "디자인시스템 파트 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, PWA 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Service Worker 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 31,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[카카오톡 탭프론트엔드팀] 프론트엔드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근 카카오톡 탭프론트엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오톡 탭프론트엔드팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Zustand 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 32,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[카카오페이 자산관리 셀] 프론트엔드 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "SCSS"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근 카카오페이 자산관리 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오페이 자산관리 셀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Nuxt.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Pinia 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 33,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[카카오커머스 웹개발 파트] 프론트엔드 리드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "React Query",
            "Redux Toolkit",
            "Emotion"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근 카카오커머스 웹개발 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오커머스 웹개발 파트 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, React Query 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redux Toolkit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 34,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[카카오모빌리티 UI셀] 프론트엔드 전문가",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Svelte",
            "SvelteKit",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근 카카오모빌리티 UI셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오모빌리티 UI셀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Svelte, SvelteKit, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 35,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[카카오엔터 웹플랫폼팀] 프론트엔드 코어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "GraphQL",
            "Styled-Components"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근 카카오엔터 웹플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "카카오엔터 웹플랫폼팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 36,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[네이버 검색 FE셀] 프론트엔드 수석 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "WebRTC",
            "RxJS",
            "Canvas API"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근 네이버 검색 FE셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 검색 FE셀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "RxJS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 37,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[네이버 쇼핑 서비스 개발팀] 프론트엔드 테크 리드",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Micro Frontends",
            "Module Federation",
            "TypeScript",
            "Webpack"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근 네이버 쇼핑 서비스 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 쇼핑 서비스 개발팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, Micro Frontends, Module Federation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 38,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[네이버 웹툰 글로벌 FE팀] 프론트엔드 담당자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "Storybook",
            "Jest",
            "Playwright"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근 네이버 웹툰 글로벌 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 웹툰 글로벌 FE팀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React, TypeScript, Storybook 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Jest 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 39,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[네이버 치지직 스트리밍 파트] 프론트엔드 아키텍트",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Next.js App Router",
            "React Server Components",
            "TypeScript",
            "Tailwind CSS"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근 네이버 치지직 스트리밍 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버 치지직 스트리밍 파트 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js App Router, React Server Components, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 40,
        "companyName": "당근",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[네이버클라우드 파이프라인팀] 프론트엔드 플랫폼 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "PWA",
            "Service Worker",
            "IndexedDB"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근 네이버클라우드 파이프라인팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "네이버클라우드 파이프라인팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, PWA 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Service Worker 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 41,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[당근 중고거래 FE팀] 프론트엔드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쿠팡 당근 중고거래 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 중고거래 FE팀 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Zustand 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 42,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[당근알바 웹서비스 파트] 프론트엔드 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "SCSS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쿠팡 당근알바 웹서비스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근알바 웹서비스 파트 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Nuxt.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Pinia 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 43,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[당근페이 클라이언트팀] 프론트엔드 리드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "React Query",
            "Redux Toolkit",
            "Emotion"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쿠팡 당근페이 클라이언트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근페이 클라이언트팀 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, React Query 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redux Toolkit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 44,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[당근 로컬 커머스 셀] 프론트엔드 전문가",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Svelte",
            "SvelteKit",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쿠팡 당근 로컬 커머스 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 커머스 셀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Svelte, SvelteKit, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 45,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[당근 광고플랫폼 FE팀] 프론트엔드 코어 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Next.js",
            "TypeScript",
            "GraphQL",
            "Styled-Components"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쿠팡 당근 광고플랫폼 FE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 광고플랫폼 FE팀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 46,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[쿠팡 로켓배송 주문웹 파트] 프론트엔드 수석 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "WebRTC",
            "RxJS",
            "Canvas API"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쿠팡 쿠팡 로켓배송 주문웹 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 로켓배송 주문웹 파트 소속으로 실시간 금융 트랜잭션 및 차트 UI 모듈 개발",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화 및 관련 코어 시스템 유지보수",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "RxJS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 47,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[쿠팡이츠 파트너웹팀] 프론트엔드 테크 리드",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "Micro Frontends",
            "Module Federation",
            "TypeScript",
            "Webpack"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쿠팡 쿠팡이츠 파트너웹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡이츠 파트너웹팀 소속으로 공통 디자인 시스템 컴포넌트 설계 및 토큰 관리",
            "Micro Frontend 아키텍처 기반 독립 배포 환경 구축 및 관련 코어 시스템 유지보수",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, Micro Frontends, Module Federation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 48,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[쿠팡 Play 웹플랫폼 파트] 프론트엔드 담당자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "Storybook",
            "Jest",
            "Playwright"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쿠팡 쿠팡 Play 웹플랫폼 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 Play 웹플랫폼 파트 소속으로 WebRTC 기반 실시간 비디오/오디오 스트리밍 웹 인터페이스 개발",
            "서버 사이드 렌더링(SSR) 전환으로 초기 로딩 속도(LCP) 40% 개선 및 관련 코어 시스템 유지보수",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React, TypeScript, Storybook 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Jest 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 49,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[쿠팡 글로벌 셀러웹팀] 프론트엔드 아키텍트",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "Next.js App Router",
            "React Server Components",
            "TypeScript",
            "Tailwind CSS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쿠팡 쿠팡 글로벌 셀러웹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 글로벌 셀러웹팀 소속으로 웹 접근성(WCAG 2.1) 표준 준수 및 스크린 리더 호환성 확보",
            "PWA 기술을 활용한 오프라인 대응 및 모바일 웹 경험 극대화 및 관련 코어 시스템 유지보수",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js App Router, React Server Components, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tailwind CSS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 50,
        "companyName": "쿠팡",
        "companyLogo": "https://www.google.com/s2/favicons?domain=coupang.com&sz=128",
        "title": "[쿠팡 결제 FE셀] 프론트엔드 플랫폼 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "프론트엔드",
        "techStack": [
            "React",
            "TypeScript",
            "PWA",
            "Service Worker",
            "IndexedDB"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쿠팡 쿠팡 결제 FE셀에서 혁신적인 서비스를 함께 만들어갈 우수한 프론트엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠팡 결제 FE셀 소속으로 Storybook 기반 인터랙티브 문서화 및 UI 자동화 테스트 구축",
            "GraphQL 및 WebSocket을 이용한 실시간 반응형 데이터 처리 및 관련 코어 시스템 유지보수",
            "초당 수천 건의 요청을 견디는 웹 렌더링 성능 최적화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "프론트엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, PWA 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Service Worker 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 51,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[배민 주문/결제 시스템팀] 백엔드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 17",
            "Spring Boot 3",
            "MySQL",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "우아한형제들 배민 주문/결제 시스템팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 주문/결제 시스템팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 17, Spring Boot 3, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 52,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[배민 라이더 배차 코어셀] 백엔드 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Spring WebFlux",
            "PostgreSQL",
            "R2DBC",
            "gRPC"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "우아한형제들 배민 라이더 배차 코어셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 라이더 배차 코어셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Spring WebFlux, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "R2DBC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 53,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[배민상회 플랫폼 개발팀] 백엔드 리드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Go",
            "Gin",
            "PostgreSQL",
            "Redis",
            "NATS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "우아한형제들 배민상회 플랫폼 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민상회 플랫폼 개발팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Go, Gin, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 54,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[배민 라이브커머스 백엔드 파트] 백엔드 전문가",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Node.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "RabbitMQ"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "우아한형제들 배민 라이브커머스 백엔드 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 라이브커머스 백엔드 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Node.js, NestJS, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MongoDB 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 55,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[우아한 데이터플랫폼팀] 백엔드 코어 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 21",
            "Spring Cloud",
            "Oracle",
            "Redis Cluster",
            "ActiveMQ"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "우아한형제들 우아한 데이터플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "우아한 데이터플랫폼팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 21, Spring Cloud, Oracle 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis Cluster 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 56,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[LINE 메세징 코어 서버팀] 백엔드 수석 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Celery"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "우아한형제들 LINE 메세징 코어 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 메세징 코어 서버팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, FastAPI, SQLAlchemy 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PostgreSQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 57,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[LINE Pay 결제 엔진셀] 백엔드 테크 리드",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "C++",
            "Java",
            "MySQL",
            "Redis",
            "Protobuf"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "우아한형제들 LINE Pay 결제 엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE Pay 결제 엔진셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Java, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 58,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[LINE 타임라인 추천서버 파트] 백엔드 담당자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Ktor",
            "DynamoDB",
            "Kafka",
            "AWS Lambda"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "우아한형제들 LINE 타임라인 추천서버 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 타임라인 추천서버 파트 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Ktor, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Kafka 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 59,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[LINE 스티커/아이템 플랫폼] 백엔드 아키텍트",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java",
            "Spring Boot",
            "Elasticsearch",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "우아한형제들 LINE 스티커/아이템 플랫폼에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 스티커/아이템 플랫폼 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java, Spring Boot, Elasticsearch 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 60,
        "companyName": "우아한형제들",
        "companyLogo": "https://www.google.com/s2/favicons?domain=woowahan.com&sz=128",
        "title": "[LINE 글로벌 인프라 백엔드팀] 백엔드 플랫폼 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "백엔드",
        "techStack": [
            "Rust",
            "Actix-web",
            "PostgreSQL",
            "Redis",
            "gRPC"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "우아한형제들 LINE 글로벌 인프라 백엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 글로벌 인프라 백엔드팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Rust, Actix-web, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 61,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[마비노기 모바일 서버팀] 백엔드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 17",
            "Spring Boot 3",
            "MySQL",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "라인플러스 마비노기 모바일 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "마비노기 모바일 서버팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 17, Spring Boot 3, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 62,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[메이플스토리 플랫폼 인프라셀] 백엔드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Spring WebFlux",
            "PostgreSQL",
            "R2DBC",
            "gRPC"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "라인플러스 메이플스토리 플랫폼 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메이플스토리 플랫폼 인프라셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Spring WebFlux, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "R2DBC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 63,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[던전앤파이터 결제 및 계정팀] 백엔드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Go",
            "Gin",
            "PostgreSQL",
            "Redis",
            "NATS"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "라인플러스 던전앤파이터 결제 및 계정팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "던전앤파이터 결제 및 계정팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Go, Gin, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 64,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[NEXON 글로벌 통합회원 파트] 백엔드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Node.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "RabbitMQ"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "라인플러스 NEXON 글로벌 통합회원 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NEXON 글로벌 통합회원 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Node.js, NestJS, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MongoDB 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 65,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[프로젝트 MOD 서버팀] 백엔드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 21",
            "Spring Cloud",
            "Oracle",
            "Redis Cluster",
            "ActiveMQ"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "라인플러스 프로젝트 MOD 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "프로젝트 MOD 서버팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 21, Spring Cloud, Oracle 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis Cluster 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 66,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[리니지W 서버 파트] 백엔드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Celery"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "라인플러스 리니지W 서버 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리니지W 서버 파트 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, FastAPI, SQLAlchemy 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PostgreSQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 67,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[TL(Throne and Liberty) 코어엔진셀] 백엔드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "C++",
            "Java",
            "MySQL",
            "Redis",
            "Protobuf"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "라인플러스 TL(Throne and Liberty) 코어엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "TL(Throne and Liberty) 코어엔진셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Java, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 68,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[NC 클라우드 게임 플랫폼팀] 백엔드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Ktor",
            "DynamoDB",
            "Kafka",
            "AWS Lambda"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "라인플러스 NC 클라우드 게임 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC 클라우드 게임 플랫폼팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Ktor, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Kafka 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 69,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[NC 데이터플랫폼 파트] 백엔드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java",
            "Spring Boot",
            "Elasticsearch",
            "Redis",
            "Kafka"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "라인플러스 NC 데이터플랫폼 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC 데이터플랫폼 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java, Spring Boot, Elasticsearch 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 70,
        "companyName": "라인플러스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=linecorp.com&sz=128",
        "title": "[NC AI 매칭 서버팀] 백엔드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Rust",
            "Actix-web",
            "PostgreSQL",
            "Redis",
            "gRPC"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "라인플러스 NC AI 매칭 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC AI 매칭 서버팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Rust, Actix-web, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 71,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[야놀자 숙박/레저 예약엔진팀] 백엔드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 17",
            "Spring Boot 3",
            "MySQL",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넥슨코리아 야놀자 숙박/레저 예약엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 숙박/레저 예약엔진팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 17, Spring Boot 3, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 72,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[야놀자 글로벌 결제 파트] 백엔드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Spring WebFlux",
            "PostgreSQL",
            "R2DBC",
            "gRPC"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넥슨코리아 야놀자 글로벌 결제 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 글로벌 결제 파트 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Spring WebFlux, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "R2DBC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 73,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[야놀자 클라우드 PMS 개발셀] 백엔드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Go",
            "Gin",
            "PostgreSQL",
            "Redis",
            "NATS"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넥슨코리아 야놀자 클라우드 PMS 개발셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 클라우드 PMS 개발셀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Go, Gin, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 74,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[야놀자 항공/교통 연동팀] 백엔드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Node.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "RabbitMQ"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넥슨코리아 야놀자 항공/교통 연동팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 항공/교통 연동팀 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Node.js, NestJS, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MongoDB 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 75,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[야놀자 멤버십/포인트 파트] 백엔드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 21",
            "Spring Cloud",
            "Oracle",
            "Redis Cluster",
            "ActiveMQ"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넥슨코리아 야놀자 멤버십/포인트 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 멤버십/포인트 파트 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 21, Spring Cloud, Oracle 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis Cluster 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 76,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[배민 주문/결제 시스템팀] 백엔드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Celery"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넥슨코리아 배민 주문/결제 시스템팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 주문/결제 시스템팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, FastAPI, SQLAlchemy 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PostgreSQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 77,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[배민 라이더 배차 코어셀] 백엔드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "C++",
            "Java",
            "MySQL",
            "Redis",
            "Protobuf"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넥슨코리아 배민 라이더 배차 코어셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 라이더 배차 코어셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Java, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 78,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[배민상회 플랫폼 개발팀] 백엔드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Ktor",
            "DynamoDB",
            "Kafka",
            "AWS Lambda"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넥슨코리아 배민상회 플랫폼 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민상회 플랫폼 개발팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Ktor, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Kafka 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 79,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[배민 라이브커머스 백엔드 파트] 백엔드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java",
            "Spring Boot",
            "Elasticsearch",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넥슨코리아 배민 라이브커머스 백엔드 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "배민 라이브커머스 백엔드 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java, Spring Boot, Elasticsearch 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 80,
        "companyName": "넥슨코리아",
        "companyLogo": "https://www.google.com/s2/favicons?domain=nexon.com&sz=128",
        "title": "[우아한 데이터플랫폼팀] 백엔드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Rust",
            "Actix-web",
            "PostgreSQL",
            "Redis",
            "gRPC"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넥슨코리아 우아한 데이터플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "우아한 데이터플랫폼팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Rust, Actix-web, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 81,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[LINE 메세징 코어 서버팀] 백엔드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 17",
            "Spring Boot 3",
            "MySQL",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "엔씨소프트 LINE 메세징 코어 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 메세징 코어 서버팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 17, Spring Boot 3, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 82,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[LINE Pay 결제 엔진셀] 백엔드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Spring WebFlux",
            "PostgreSQL",
            "R2DBC",
            "gRPC"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "엔씨소프트 LINE Pay 결제 엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE Pay 결제 엔진셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Spring WebFlux, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "R2DBC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 83,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[LINE 타임라인 추천서버 파트] 백엔드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Go",
            "Gin",
            "PostgreSQL",
            "Redis",
            "NATS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "엔씨소프트 LINE 타임라인 추천서버 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 타임라인 추천서버 파트 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Go, Gin, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 84,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[LINE 스티커/아이템 플랫폼] 백엔드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Node.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "RabbitMQ"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "엔씨소프트 LINE 스티커/아이템 플랫폼에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 스티커/아이템 플랫폼 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Node.js, NestJS, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MongoDB 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 85,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[LINE 글로벌 인프라 백엔드팀] 백엔드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 21",
            "Spring Cloud",
            "Oracle",
            "Redis Cluster",
            "ActiveMQ"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "엔씨소프트 LINE 글로벌 인프라 백엔드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LINE 글로벌 인프라 백엔드팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 21, Spring Cloud, Oracle 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis Cluster 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 86,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[마비노기 모바일 서버팀] 백엔드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Celery"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "엔씨소프트 마비노기 모바일 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "마비노기 모바일 서버팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, FastAPI, SQLAlchemy 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PostgreSQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 87,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[메이플스토리 플랫폼 인프라셀] 백엔드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "C++",
            "Java",
            "MySQL",
            "Redis",
            "Protobuf"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "엔씨소프트 메이플스토리 플랫폼 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메이플스토리 플랫폼 인프라셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Java, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 88,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[던전앤파이터 결제 및 계정팀] 백엔드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Ktor",
            "DynamoDB",
            "Kafka",
            "AWS Lambda"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "엔씨소프트 던전앤파이터 결제 및 계정팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "던전앤파이터 결제 및 계정팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Ktor, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Kafka 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 89,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[NEXON 글로벌 통합회원 파트] 백엔드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Java",
            "Spring Boot",
            "Elasticsearch",
            "Redis",
            "Kafka"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "엔씨소프트 NEXON 글로벌 통합회원 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NEXON 글로벌 통합회원 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java, Spring Boot, Elasticsearch 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 90,
        "companyName": "엔씨소프트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ncsoft.com&sz=128",
        "title": "[프로젝트 MOD 서버팀] 백엔드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "백엔드",
        "techStack": [
            "Rust",
            "Actix-web",
            "PostgreSQL",
            "Redis",
            "gRPC"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "엔씨소프트 프로젝트 MOD 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "프로젝트 MOD 서버팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Rust, Actix-web, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 91,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[리니지W 서버 파트] 백엔드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 17",
            "Spring Boot 3",
            "MySQL",
            "Redis",
            "Kafka"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "야놀자 리니지W 서버 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리니지W 서버 파트 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 17, Spring Boot 3, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 92,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[TL(Throne and Liberty) 코어엔진셀] 백엔드 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Spring WebFlux",
            "PostgreSQL",
            "R2DBC",
            "gRPC"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "야놀자 TL(Throne and Liberty) 코어엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "TL(Throne and Liberty) 코어엔진셀 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Spring WebFlux, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "R2DBC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 93,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[NC 클라우드 게임 플랫폼팀] 백엔드 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Go",
            "Gin",
            "PostgreSQL",
            "Redis",
            "NATS"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "야놀자 NC 클라우드 게임 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC 클라우드 게임 플랫폼팀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Go, Gin, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 94,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[NC 데이터플랫폼 파트] 백엔드 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Node.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "RabbitMQ"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "야놀자 NC 데이터플랫폼 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC 데이터플랫폼 파트 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Node.js, NestJS, TypeScript 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MongoDB 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 95,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[NC AI 매칭 서버팀] 백엔드 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java 21",
            "Spring Cloud",
            "Oracle",
            "Redis Cluster",
            "ActiveMQ"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "야놀자 NC AI 매칭 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "NC AI 매칭 서버팀 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java 21, Spring Cloud, Oracle 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis Cluster 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 96,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[야놀자 숙박/레저 예약엔진팀] 백엔드 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Celery"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "야놀자 야놀자 숙박/레저 예약엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 숙박/레저 예약엔진팀 소속으로 초당 10만 RPS 이상의 대용량 트랜잭션 수용 코어 엔진 개발",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축 및 관련 코어 시스템 유지보수",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, FastAPI, SQLAlchemy 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PostgreSQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 97,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[야놀자 글로벌 결제 파트] 백엔드 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "C++",
            "Java",
            "MySQL",
            "Redis",
            "Protobuf"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "야놀자 야놀자 글로벌 결제 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 글로벌 결제 파트 소속으로 Redis 분산 락(Redlock)을 활용한 동시성 제어 및 주문 처리",
            "gRPC 기반의 고성능 내부 마이크로서비스(MSA) 통신 레이어 구현 및 관련 코어 시스템 유지보수",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Java, MySQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 98,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[야놀자 클라우드 PMS 개발셀] 백엔드 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Kotlin",
            "Ktor",
            "DynamoDB",
            "Kafka",
            "AWS Lambda"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "야놀자 야놀자 클라우드 PMS 개발셀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 클라우드 PMS 개발셀 소속으로 Elasticsearch 기반 억 단위 데이터 실시간 분산 검색 인덱싱 최적화",
            "Spring WebFlux 기반 비동기 Non-blocking 서버 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Ktor, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Kafka 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 99,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[야놀자 항공/교통 연동팀] 백엔드 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Java",
            "Spring Boot",
            "Elasticsearch",
            "Redis",
            "Kafka"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "야놀자 야놀자 항공/교통 연동팀에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 항공/교통 연동팀 소속으로 외부 결제 PG사 연동 및 안전한 정산/회계 자동화 파이프라인 수립",
            "데이터베이스 Sharding 및 Read/Write 분리를 통한 입출력 튜닝 및 관련 코어 시스템 유지보수",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Java, Spring Boot, Elasticsearch 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 100,
        "companyName": "야놀자",
        "companyLogo": "https://www.google.com/s2/favicons?domain=yanolja.com&sz=128",
        "title": "[야놀자 멤버십/포인트 파트] 백엔드 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "백엔드",
        "techStack": [
            "Rust",
            "Actix-web",
            "PostgreSQL",
            "Redis",
            "gRPC"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "야놀자 야놀자 멤버십/포인트 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 백엔드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "야놀자 멤버십/포인트 파트 소속으로 Zero Downtime(무중단) DB 스키마 마이그레이션 전략 설계",
            "OAuth 2.0 / OIDC 기반 글로벌 싱글 사인온(SSO) 인증 서버 개발 및 관련 코어 시스템 유지보수",
            "Kafka 기반 Event-Driven Architecture 아키텍처 설계 및 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "백엔드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Rust, Actix-web, PostgreSQL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 101,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[채널톡 메신저 풀스택팀] 풀스택 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "채널코퍼레이션 채널톡 메신저 풀스택팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 메신저 풀스택팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Express 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 102,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[채널톡 AI 챗봇 셀] 풀스택 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Vue.js",
            "Python",
            "Django",
            "TypeScript",
            "MySQL",
            "AWS"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "채널코퍼레이션 채널톡 AI 챗봇 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 AI 챗봇 셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Python, Django 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 103,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[채널톡 고객관리 CRM 파트] 풀스택 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "NestJS",
            "TypeORM",
            "Redis",
            "Docker"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "채널코퍼레이션 채널톡 고객관리 CRM 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 고객관리 CRM 파트 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, NestJS 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeORM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 104,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[채널톡 글로벌 마케팅 파트] 풀스택 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Python",
            "FastAPI",
            "TypeScript",
            "MongoDB",
            "GCP"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "채널코퍼레이션 채널톡 글로벌 마케팅 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 글로벌 마케팅 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Next.js, Python, FastAPI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 105,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[채널톡 어드민 개발팀] 풀스택 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Go",
            "Gin",
            "PostgreSQL",
            "Kubernetes"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "채널코퍼레이션 채널톡 어드민 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 어드민 개발팀 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, TypeScript, Go 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Gin 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 106,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[리디셀렉트 풀스택 파트] 풀스택 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Svelte",
            "Node.js",
            "Koa",
            "TypeScript",
            "DynamoDB",
            "AWS Lambda"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "채널코퍼레이션 리디셀렉트 풀스택 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디셀렉트 풀스택 파트 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Svelte, Node.js, Koa 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 107,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[리디북스 뷰어플랫폼팀] 풀스택 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Redis"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "채널코퍼레이션 리디북스 뷰어플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디북스 뷰어플랫폼팀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, Java 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 108,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[리디 만화/웹툰 서비스셀] 풀스택 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React Native",
            "Next.js",
            "Node.js",
            "GraphQL",
            "PostgreSQL"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "채널코퍼레이션 리디 만화/웹툰 서비스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 만화/웹툰 서비스셀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 109,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[리디 글로벌 딜라이트팀] 풀스택 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Prisma",
            "TRPC",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "채널코퍼레이션 리디 글로벌 딜라이트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 글로벌 딜라이트팀 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js, Prisma, TRPC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 110,
        "companyName": "채널코퍼레이션",
        "companyLogo": "https://www.google.com/s2/favicons?domain=channel.io&sz=128",
        "title": "[리디 결제/구독 파트] 풀스택 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "채널코퍼레이션 리디 결제/구독 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 결제/구독 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, Kotlin 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 111,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[몰로코 애드텍 콘솔팀] 풀스택 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "리디 몰로코 애드텍 콘솔팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 애드텍 콘솔팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Express 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 112,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[몰로코 데이터 대시보드셀] 풀스택 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Vue.js",
            "Python",
            "Django",
            "TypeScript",
            "MySQL",
            "AWS"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "리디 몰로코 데이터 대시보드셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 데이터 대시보드셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Python, Django 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 113,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[몰로코 머신러닝 모니터링팀] 풀스택 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "NestJS",
            "TypeORM",
            "Redis",
            "Docker"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "리디 몰로코 머신러닝 모니터링팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 머신러닝 모니터링팀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, NestJS 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeORM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 114,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[몰로코 글로벌 딜러 파트] 풀스택 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Python",
            "FastAPI",
            "TypeScript",
            "MongoDB",
            "GCP"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "리디 몰로코 글로벌 딜러 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 글로벌 딜러 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Next.js, Python, FastAPI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 115,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[몰로코 애널리틱스 파트] 풀스택 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Go",
            "Gin",
            "PostgreSQL",
            "Kubernetes"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "리디 몰로코 애널리틱스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 애널리틱스 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, TypeScript, Go 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Gin 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 116,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[오늘의집 3D 인테리어팀] 풀스택 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Svelte",
            "Node.js",
            "Koa",
            "TypeScript",
            "DynamoDB",
            "AWS Lambda"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "리디 오늘의집 3D 인테리어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 3D 인테리어팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Svelte, Node.js, Koa 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 117,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[오늘의집 시공/커머스 셀] 풀스택 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Redis"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "리디 오늘의집 시공/커머스 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 시공/커머스 셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, Java 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 118,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[오늘의집 커뮤니티 파트] 풀스택 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React Native",
            "Next.js",
            "Node.js",
            "GraphQL",
            "PostgreSQL"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "리디 오늘의집 커뮤니티 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 커뮤니티 파트 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 119,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[오늘의집 물류 풀스택팀] 풀스택 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Prisma",
            "TRPC",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "리디 오늘의집 물류 풀스택팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 물류 풀스택팀 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js, Prisma, TRPC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 120,
        "companyName": "리디",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ridi.com&sz=128",
        "title": "[오늘의집 파트너센터 파트] 풀스택 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "리디 오늘의집 파트너센터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 파트너센터 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, Kotlin 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 121,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[직방 3D 단지투어 파트] 풀스택 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "몰로코 직방 3D 단지투어 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 3D 단지투어 파트 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Express 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 122,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[직방 부동산 중개플랫폼팀] 풀스택 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Vue.js",
            "Python",
            "Django",
            "TypeScript",
            "MySQL",
            "AWS"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "몰로코 직방 부동산 중개플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 부동산 중개플랫폼팀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Python, Django 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 123,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[직방 스마트홈 IoT 셀] 풀스택 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "NestJS",
            "TypeORM",
            "Redis",
            "Docker"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "몰로코 직방 스마트홈 IoT 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 스마트홈 IoT 셀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, NestJS 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeORM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 124,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[직방 분양/투자 파트] 풀스택 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Python",
            "FastAPI",
            "TypeScript",
            "MongoDB",
            "GCP"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "몰로코 직방 분양/투자 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 분양/투자 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Next.js, Python, FastAPI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 125,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[직방 계약자동화 파트] 풀스택 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Go",
            "Gin",
            "PostgreSQL",
            "Kubernetes"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "몰로코 직방 계약자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 계약자동화 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, TypeScript, Go 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Gin 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 126,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[채널톡 메신저 풀스택팀] 풀스택 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Svelte",
            "Node.js",
            "Koa",
            "TypeScript",
            "DynamoDB",
            "AWS Lambda"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "몰로코 채널톡 메신저 풀스택팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 메신저 풀스택팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Svelte, Node.js, Koa 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 127,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[채널톡 AI 챗봇 셀] 풀스택 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Redis"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "몰로코 채널톡 AI 챗봇 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 AI 챗봇 셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, Java 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 128,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[채널톡 고객관리 CRM 파트] 풀스택 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React Native",
            "Next.js",
            "Node.js",
            "GraphQL",
            "PostgreSQL"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "몰로코 채널톡 고객관리 CRM 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 고객관리 CRM 파트 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 129,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[채널톡 글로벌 마케팅 파트] 풀스택 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Prisma",
            "TRPC",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "몰로코 채널톡 글로벌 마케팅 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 글로벌 마케팅 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js, Prisma, TRPC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 130,
        "companyName": "몰로코",
        "companyLogo": "https://www.google.com/s2/favicons?domain=moloco.com&sz=128",
        "title": "[채널톡 어드민 개발팀] 풀스택 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "몰로코 채널톡 어드민 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "채널톡 어드민 개발팀 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, Kotlin 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 131,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[리디셀렉트 풀스택 파트] 풀스택 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "오늘의집(버킷플레이스) 리디셀렉트 풀스택 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디셀렉트 풀스택 파트 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Express 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 132,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[리디북스 뷰어플랫폼팀] 풀스택 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "Vue.js",
            "Python",
            "Django",
            "TypeScript",
            "MySQL",
            "AWS"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "오늘의집(버킷플레이스) 리디북스 뷰어플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디북스 뷰어플랫폼팀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Python, Django 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 133,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[리디 만화/웹툰 서비스셀] 풀스택 리드 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "NestJS",
            "TypeORM",
            "Redis",
            "Docker"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "오늘의집(버킷플레이스) 리디 만화/웹툰 서비스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 만화/웹툰 서비스셀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, NestJS 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeORM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 134,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[리디 글로벌 딜라이트팀] 풀스택 전문가",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Python",
            "FastAPI",
            "TypeScript",
            "MongoDB",
            "GCP"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "오늘의집(버킷플레이스) 리디 글로벌 딜라이트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 글로벌 딜라이트팀 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Next.js, Python, FastAPI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 135,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[리디 결제/구독 파트] 풀스택 코어 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Go",
            "Gin",
            "PostgreSQL",
            "Kubernetes"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "오늘의집(버킷플레이스) 리디 결제/구독 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "리디 결제/구독 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, TypeScript, Go 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Gin 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 136,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[몰로코 애드텍 콘솔팀] 풀스택 수석 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "Svelte",
            "Node.js",
            "Koa",
            "TypeScript",
            "DynamoDB",
            "AWS Lambda"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "오늘의집(버킷플레이스) 몰로코 애드텍 콘솔팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 애드텍 콘솔팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Svelte, Node.js, Koa 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 137,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[몰로코 데이터 대시보드셀] 풀스택 테크 리드",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Redis"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "오늘의집(버킷플레이스) 몰로코 데이터 대시보드셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 데이터 대시보드셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, Java 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 138,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[몰로코 머신러닝 모니터링팀] 풀스택 담당자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React Native",
            "Next.js",
            "Node.js",
            "GraphQL",
            "PostgreSQL"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "오늘의집(버킷플레이스) 몰로코 머신러닝 모니터링팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 머신러닝 모니터링팀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 139,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[몰로코 글로벌 딜러 파트] 풀스택 아키텍트",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Prisma",
            "TRPC",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "오늘의집(버킷플레이스) 몰로코 글로벌 딜러 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 글로벌 딜러 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js, Prisma, TRPC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 140,
        "companyName": "오늘의집(버킷플레이스)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bucketplace.co.kr&sz=128",
        "title": "[몰로코 애널리틱스 파트] 풀스택 플랫폼 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "오늘의집(버킷플레이스) 몰로코 애널리틱스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "몰로코 애널리틱스 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, Kotlin 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 141,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[오늘의집 3D 인테리어팀] 풀스택 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "TypeScript",
            "PostgreSQL"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "직방 오늘의집 3D 인테리어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 3D 인테리어팀 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Express 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 142,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[오늘의집 시공/커머스 셀] 풀스택 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Vue.js",
            "Python",
            "Django",
            "TypeScript",
            "MySQL",
            "AWS"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "직방 오늘의집 시공/커머스 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 시공/커머스 셀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Vue.js, Python, Django 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 143,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[오늘의집 커뮤니티 파트] 풀스택 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "NestJS",
            "TypeORM",
            "Redis",
            "Docker"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "직방 오늘의집 커뮤니티 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 커뮤니티 파트 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, NestJS 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeORM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 144,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[오늘의집 물류 풀스택팀] 풀스택 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Python",
            "FastAPI",
            "TypeScript",
            "MongoDB",
            "GCP"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "직방 오늘의집 물류 풀스택팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 물류 풀스택팀 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Next.js, Python, FastAPI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 145,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[오늘의집 파트너센터 파트] 풀스택 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Go",
            "Gin",
            "PostgreSQL",
            "Kubernetes"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "직방 오늘의집 파트너센터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "오늘의집 파트너센터 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "React, TypeScript, Go 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Gin 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 146,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[직방 3D 단지투어 파트] 풀스택 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Svelte",
            "Node.js",
            "Koa",
            "TypeScript",
            "DynamoDB",
            "AWS Lambda"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "직방 직방 3D 단지투어 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 3D 단지투어 파트 소속으로 웹 컴포넌트 프론트엔드와 백엔드 REST/GraphQL API엔드포인트 전체 통합 개발",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증 및 관련 코어 시스템 유지보수",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Svelte, Node.js, Koa 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 147,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[직방 부동산 중개플랫폼팀] 풀스택 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "MySQL",
            "Redis"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "직방 직방 부동산 중개플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 부동산 중개플랫폼팀 소속으로 실시간 데이터 동기화를 위한 WebSocket 및 백엔드 이벤트 핸들러 구축",
            "사용자 어드민 제어판 및 비즈니스 모니터링 대시보드 완결 제작 및 관련 코어 시스템 유지보수",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 4년 이상 보유하신 분",
            "React, TypeScript, Java 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 148,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[직방 스마트홈 IoT 셀] 풀스택 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React Native",
            "Next.js",
            "Node.js",
            "GraphQL",
            "PostgreSQL"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "직방 직방 스마트홈 IoT 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 스마트홈 IoT 셀 소속으로 프론트엔드 상태 구조와 백엔드 DB 스키마 간의 최적화된 타입 체계 구축",
            "외부 제3자 SaaS API 및 OAuth 통합 결제/인증 파이프라인 개발 및 관련 코어 시스템 유지보수",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, Next.js, Node.js 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "GraphQL 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 149,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[직방 분양/투자 파트] 풀스택 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "Next.js",
            "Prisma",
            "TRPC",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "직방 직방 분양/투자 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 분양/투자 파트 소속으로 Docker 컨테이너화 및 AWS ECS/Lambda 기반 풀스택 자동 배포 파이프라인",
            "Single Page Application(SPA)의 UX 개선 및 백엔드 쿼리 처리 병목 개선 및 관련 코어 시스템 유지보수",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Next.js, Prisma, TRPC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "TypeScript 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 150,
        "companyName": "직방",
        "companyLogo": "https://www.google.com/s2/favicons?domain=zigbang.com&sz=128",
        "title": "[직방 계약자동화 파트] 풀스택 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "풀스택",
        "techStack": [
            "React",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "직방 직방 계약자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 풀스택 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "직방 계약자동화 파트 소속으로 React 기반 3D 웹 인터랙션 및 백엔드 3D 렌더링 씬(Scene) 데이터 처리",
            "데이터 폼 검증부터 서버 사이드 데이터 파싱 및 안전한 처리 로직 전담 및 관련 코어 시스템 유지보수",
            "Next.js 및 Serverless 아키텍처를 통한 엔드투엔드 MVP 빠른 런칭 및 검증를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "풀스택 분야 관련 실무 경험 3년 이상 보유하신 분",
            "React, TypeScript, Kotlin 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Spring Boot 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 151,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[Upstage LLM 코어모델팀] ML 엔지니어 엔지니어",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "Triton",
            "Ray"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "업스테이지 Upstage LLM 코어모델팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage LLM 코어모델팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Transformers 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "vLLM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 152,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[Upstage Solar 파인튜닝셀] ML 엔지니어 개발자",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "HuggingFace",
            "LangChain",
            "Faiss",
            "FastAPI"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "업스테이지 Upstage Solar 파인튜닝셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage Solar 파인튜닝셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, HuggingFace 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "LangChain 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 153,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[Upstage Document AI 파트] ML 엔지니어 리드 엔지니어",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TorchVision",
            "OpenCV",
            "TensorRT",
            "CUDA"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "업스테이지 Upstage Document AI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage Document AI 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, TorchVision 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenCV 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 154,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[Upstage RAG 엔진 파트] ML 엔지니어 전문가",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "TensorFlow",
            "Keras",
            "ONNX",
            "Docker",
            "Kubeflow"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "업스테이지 Upstage RAG 엔진 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage RAG 엔진 파트 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, TensorFlow, Keras 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ONNX 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 155,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[Upstage MLOps 플랫폼팀] ML 엔지니어 코어 개발자",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "DeepSpeed",
            "Megatron-LM",
            "MLflow",
            "Kubernetes"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "업스테이지 Upstage MLOps 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage MLOps 플랫폼팀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, DeepSpeed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Megatron-LM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 156,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[뤼튼 생성형 AI 에이전트팀] ML 엔지니어 수석 엔지니어",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "MMDetection",
            "YOLOv8",
            "TensorRT",
            "C++"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "업스테이지 뤼튼 생성형 AI 에이전트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 생성형 AI 에이전트팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, MMDetection 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "YOLOv8 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 157,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[뤼튼 Prompt Engineering 파트] ML 엔지니어 테크 리드",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "LlamaIndex",
            "Qdrant",
            "ChromaDB",
            "FastAPI"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "업스테이지 뤼튼 Prompt Engineering 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 Prompt Engineering 파트 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, LlamaIndex 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Qdrant 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 158,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[뤼튼 멀티모달 모델 파트] ML 엔지니어 담당자",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Whisper",
            "Torchaudio",
            "Triton Server"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "업스테이지 뤼튼 멀티모달 모델 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 멀티모달 모델 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, PyTorch, Whisper 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Torchaudio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 159,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[뤼튼 검색엔진 연동셀] ML 엔지니어 아키텍트",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Optuna",
            "Weights & Biases",
            "Docker",
            "AWS SageMaker"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "업스테이지 뤼튼 검색엔진 연동셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 검색엔진 연동셀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Optuna 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Weights & Biases 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 160,
        "companyName": "업스테이지",
        "companyLogo": "https://www.google.com/s2/favicons?domain=upstage.ai&sz=128",
        "title": "[뤼튼 AI 서빙 파트] ML 엔지니어 플랫폼 엔지니어",
        "location": "경기",
        "district": "용인시",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TVM",
            "OpenVINO",
            "Edge AI",
            "C++"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "업스테이지 뤼튼 AI 서빙 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 AI 서빙 파트 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, TVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenVINO 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 161,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[Lunit INSIGHT 흉부분석팀] ML 엔지니어 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "Triton",
            "Ray"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뤼튼테크놀로지스 Lunit INSIGHT 흉부분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit INSIGHT 흉부분석팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Transformers 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "vLLM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 162,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[Lunit SCOPE 면역항암 AI셀] ML 엔지니어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "HuggingFace",
            "LangChain",
            "Faiss",
            "FastAPI"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뤼튼테크놀로지스 Lunit SCOPE 면역항암 AI셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit SCOPE 면역항암 AI셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, HuggingFace 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "LangChain 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 163,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[Lunit 3D 의료영상 엔진팀] ML 엔지니어 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TorchVision",
            "OpenCV",
            "TensorRT",
            "CUDA"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뤼튼테크놀로지스 Lunit 3D 의료영상 엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit 3D 의료영상 엔진팀 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, TorchVision 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenCV 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 164,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[Lunit MLOps 파이프라인 파트] ML 엔지니어 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "TensorFlow",
            "Keras",
            "ONNX",
            "Docker",
            "Kubeflow"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뤼튼테크놀로지스 Lunit MLOps 파이프라인 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit MLOps 파이프라인 파트 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, TensorFlow, Keras 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ONNX 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 165,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[Lunit AI 가속화셀] ML 엔지니어 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "DeepSpeed",
            "Megatron-LM",
            "MLflow",
            "Kubernetes"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뤼튼테크놀로지스 Lunit AI 가속화셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit AI 가속화셀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, DeepSpeed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Megatron-LM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 166,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[VUNO Med-DeepBrain 팀] ML 엔지니어 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "MMDetection",
            "YOLOv8",
            "TensorRT",
            "C++"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뤼튼테크놀로지스 VUNO Med-DeepBrain 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO Med-DeepBrain 팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, MMDetection 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "YOLOv8 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 167,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[VUNO 심혈관 AI 파트] ML 엔지니어 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "LlamaIndex",
            "Qdrant",
            "ChromaDB",
            "FastAPI"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뤼튼테크놀로지스 VUNO 심혈관 AI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 심혈관 AI 파트 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, LlamaIndex 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Qdrant 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 168,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[VUNO 생체신호 분석셀] ML 엔지니어 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Whisper",
            "Torchaudio",
            "Triton Server"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뤼튼테크놀로지스 VUNO 생체신호 분석셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 생체신호 분석셀 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, PyTorch, Whisper 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Torchaudio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 169,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[VUNO AI 모델 경량화팀] ML 엔지니어 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Optuna",
            "Weights & Biases",
            "Docker",
            "AWS SageMaker"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뤼튼테크놀로지스 VUNO AI 모델 경량화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO AI 모델 경량화팀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Optuna 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Weights & Biases 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 170,
        "companyName": "뤼튼테크놀로지스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128",
        "title": "[VUNO 클라우드 AI 서빙 파트] ML 엔지니어 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TVM",
            "OpenVINO",
            "Edge AI",
            "C++"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뤼튼테크놀로지스 VUNO 클라우드 AI 서빙 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 클라우드 AI 서빙 파트 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, TVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenVINO 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 171,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[딥노이드 뇌질환 AI 검출팀] ML 엔지니어 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "Triton",
            "Ray"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "루닛 딥노이드 뇌질환 AI 검출팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 뇌질환 AI 검출팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Transformers 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "vLLM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 172,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[딥노이드 산업용 AI 비전셀] ML 엔지니어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "HuggingFace",
            "LangChain",
            "Faiss",
            "FastAPI"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "루닛 딥노이드 산업용 AI 비전셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 산업용 AI 비전셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, HuggingFace 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "LangChain 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 173,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[딥노이드 데이터 라벨링 자동화 파트] ML 엔지니어 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TorchVision",
            "OpenCV",
            "TensorRT",
            "CUDA"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "루닛 딥노이드 데이터 라벨링 자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 데이터 라벨링 자동화 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, TorchVision 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenCV 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 174,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[딥노이드 딥러닝 코어팀] ML 엔지니어 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "TensorFlow",
            "Keras",
            "ONNX",
            "Docker",
            "Kubeflow"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "루닛 딥노이드 딥러닝 코어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 딥러닝 코어팀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, TensorFlow, Keras 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ONNX 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 175,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[딥노이드 AI Edge 디바이스팀] ML 엔지니어 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "DeepSpeed",
            "Megatron-LM",
            "MLflow",
            "Kubernetes"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "루닛 딥노이드 AI Edge 디바이스팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 AI Edge 디바이스팀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, DeepSpeed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Megatron-LM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 176,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[Upstage LLM 코어모델팀] ML 엔지니어 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "MMDetection",
            "YOLOv8",
            "TensorRT",
            "C++"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "루닛 Upstage LLM 코어모델팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage LLM 코어모델팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, MMDetection 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "YOLOv8 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 177,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[Upstage Solar 파인튜닝셀] ML 엔지니어 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "LlamaIndex",
            "Qdrant",
            "ChromaDB",
            "FastAPI"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "루닛 Upstage Solar 파인튜닝셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage Solar 파인튜닝셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, LlamaIndex 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Qdrant 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 178,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[Upstage Document AI 파트] ML 엔지니어 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Whisper",
            "Torchaudio",
            "Triton Server"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "루닛 Upstage Document AI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage Document AI 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, PyTorch, Whisper 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Torchaudio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 179,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[Upstage RAG 엔진 파트] ML 엔지니어 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Optuna",
            "Weights & Biases",
            "Docker",
            "AWS SageMaker"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "루닛 Upstage RAG 엔진 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage RAG 엔진 파트 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Optuna 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Weights & Biases 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 180,
        "companyName": "루닛",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lunit.io&sz=128",
        "title": "[Upstage MLOps 플랫폼팀] ML 엔지니어 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TVM",
            "OpenVINO",
            "Edge AI",
            "C++"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "루닛 Upstage MLOps 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Upstage MLOps 플랫폼팀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, TVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenVINO 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 181,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[뤼튼 생성형 AI 에이전트팀] ML 엔지니어 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "Triton",
            "Ray"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뷰노 뤼튼 생성형 AI 에이전트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 생성형 AI 에이전트팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Transformers 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "vLLM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 182,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[뤼튼 Prompt Engineering 파트] ML 엔지니어 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "HuggingFace",
            "LangChain",
            "Faiss",
            "FastAPI"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뷰노 뤼튼 Prompt Engineering 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 Prompt Engineering 파트 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, HuggingFace 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "LangChain 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 183,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[뤼튼 멀티모달 모델 파트] ML 엔지니어 리드 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TorchVision",
            "OpenCV",
            "TensorRT",
            "CUDA"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뷰노 뤼튼 멀티모달 모델 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 멀티모달 모델 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, TorchVision 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenCV 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 184,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[뤼튼 검색엔진 연동셀] ML 엔지니어 전문가",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "TensorFlow",
            "Keras",
            "ONNX",
            "Docker",
            "Kubeflow"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뷰노 뤼튼 검색엔진 연동셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 검색엔진 연동셀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, TensorFlow, Keras 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ONNX 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 185,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[뤼튼 AI 서빙 파트] ML 엔지니어 코어 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "DeepSpeed",
            "Megatron-LM",
            "MLflow",
            "Kubernetes"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뷰노 뤼튼 AI 서빙 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뤼튼 AI 서빙 파트 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, DeepSpeed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Megatron-LM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 186,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[Lunit INSIGHT 흉부분석팀] ML 엔지니어 수석 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "MMDetection",
            "YOLOv8",
            "TensorRT",
            "C++"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뷰노 Lunit INSIGHT 흉부분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit INSIGHT 흉부분석팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, MMDetection 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "YOLOv8 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 187,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[Lunit SCOPE 면역항암 AI셀] ML 엔지니어 테크 리드",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "LlamaIndex",
            "Qdrant",
            "ChromaDB",
            "FastAPI"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뷰노 Lunit SCOPE 면역항암 AI셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit SCOPE 면역항암 AI셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, LlamaIndex 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Qdrant 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 188,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[Lunit 3D 의료영상 엔진팀] ML 엔지니어 담당자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Whisper",
            "Torchaudio",
            "Triton Server"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뷰노 Lunit 3D 의료영상 엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit 3D 의료영상 엔진팀 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, PyTorch, Whisper 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Torchaudio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 189,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[Lunit MLOps 파이프라인 파트] ML 엔지니어 아키텍트",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Optuna",
            "Weights & Biases",
            "Docker",
            "AWS SageMaker"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뷰노 Lunit MLOps 파이프라인 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit MLOps 파이프라인 파트 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Optuna 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Weights & Biases 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 190,
        "companyName": "뷰노",
        "companyLogo": "https://www.google.com/s2/favicons?domain=vuno.co&sz=128",
        "title": "[Lunit AI 가속화셀] ML 엔지니어 플랫폼 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TVM",
            "OpenVINO",
            "Edge AI",
            "C++"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뷰노 Lunit AI 가속화셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "Lunit AI 가속화셀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, TVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenVINO 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 191,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[VUNO Med-DeepBrain 팀] ML 엔지니어 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Transformers",
            "vLLM",
            "Triton",
            "Ray"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "딥노이드 VUNO Med-DeepBrain 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO Med-DeepBrain 팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Transformers 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "vLLM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 192,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[VUNO 심혈관 AI 파트] ML 엔지니어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "HuggingFace",
            "LangChain",
            "Faiss",
            "FastAPI"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "딥노이드 VUNO 심혈관 AI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 심혈관 AI 파트 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, HuggingFace 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "LangChain 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 193,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[VUNO 생체신호 분석셀] ML 엔지니어 리드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TorchVision",
            "OpenCV",
            "TensorRT",
            "CUDA"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "딥노이드 VUNO 생체신호 분석셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 생체신호 분석셀 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, TorchVision 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenCV 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 194,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[VUNO AI 모델 경량화팀] ML 엔지니어 전문가",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "TensorFlow",
            "Keras",
            "ONNX",
            "Docker",
            "Kubeflow"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "딥노이드 VUNO AI 모델 경량화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO AI 모델 경량화팀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, TensorFlow, Keras 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ONNX 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 195,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[VUNO 클라우드 AI 서빙 파트] ML 엔지니어 코어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "DeepSpeed",
            "Megatron-LM",
            "MLflow",
            "Kubernetes"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "딥노이드 VUNO 클라우드 AI 서빙 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "VUNO 클라우드 AI 서빙 파트 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, DeepSpeed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Megatron-LM 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 196,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[딥노이드 뇌질환 AI 검출팀] ML 엔지니어 수석 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "MMDetection",
            "YOLOv8",
            "TensorRT",
            "C++"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "딥노이드 딥노이드 뇌질환 AI 검출팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 뇌질환 AI 검출팀 소속으로 7B~70B 대규모 언어 모델(LLM)의 SFT(도메인 특화 파인튜닝) 및 DPO 학습",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축 및 관련 코어 시스템 유지보수",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, MMDetection 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "YOLOv8 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 197,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[딥노이드 산업용 AI 비전셀] ML 엔지니어 테크 리드",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "LlamaIndex",
            "Qdrant",
            "ChromaDB",
            "FastAPI"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "딥노이드 딥노이드 산업용 AI 비전셀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 산업용 AI 비전셀 소속으로 vLLM / TensorRT-LLM 기반 대형 모델 Inference Latency 50% 단축",
            "CT/MRI 3D 의료 영상 데이터의 딥러닝 Segmentation & Classification 및 관련 코어 시스템 유지보수",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Python, PyTorch, LlamaIndex 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Qdrant 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 198,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[딥노이드 데이터 라벨링 자동화 파트] ML 엔지니어 담당자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Whisper",
            "Torchaudio",
            "Triton Server"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "딥노이드 딥노이드 데이터 라벨링 자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 데이터 라벨링 자동화 파트 소속으로 멀티 GPU(H100/A100) 분산 학습 파이프라인 구축 및 DeepSpeed 최적화",
            "실시간 비디오 스트리밍 타겟 객체 검출(Object Detection) 및 Tracking 및 관련 코어 시스템 유지보수",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, PyTorch, Whisper 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Torchaudio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 199,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[딥노이드 딥러닝 코어팀] ML 엔지니어 아키텍트",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "Optuna",
            "Weights & Biases",
            "Docker",
            "AWS SageMaker"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "딥노이드 딥노이드 딥러닝 코어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 딥러닝 코어팀 소속으로 Triton Inference Server 기반 고가용성 AI 서빙 아키텍처 구축",
            "AI 모델 Quantization(INT8/FP4) 및 TensorRT 경량화 파이프라인 설계 및 관련 코어 시스템 유지보수",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Python, PyTorch, Optuna 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Weights & Biases 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 200,
        "companyName": "딥노이드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=deepnoid.com&sz=128",
        "title": "[딥노이드 AI Edge 디바이스팀] ML 엔지니어 플랫폼 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "ML 엔지니어",
        "techStack": [
            "Python",
            "PyTorch",
            "TVM",
            "OpenVINO",
            "Edge AI",
            "C++"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "딥노이드 딥노이드 AI Edge 디바이스팀에서 혁신적인 서비스를 함께 만들어갈 우수한 ML 엔지니어 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "딥노이드 AI Edge 디바이스팀 소속으로 MLflow / Kubeflow 기반 데이터 수집부터 모델 평가 및 배포 자동화(MLOps)",
            "생성형 AI Prompt 튜닝 및 에이전트 오케스트레이션 메커니즘 수립 및 관련 코어 시스템 유지보수",
            "Vector Database 및 Hybrid Search 기반 고성능 RAG(검색증강생성) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "ML 엔지니어 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, PyTorch, TVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenVINO 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 201,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[무신사 블랙프라이데이 인프라셀] DevOps 엔지니어",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Docker",
            "Terraform",
            "ArgoCD",
            "AWS",
            "Datadog"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "무신사 무신사 블랙프라이데이 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 블랙프라이데이 인프라셀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Docker, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 202,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[무신사 플랫폼 SRE팀] DevOps 개발자",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Helm",
            "Github Actions",
            "Prometheus",
            "Grafana",
            "GCP"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "무신사 무신사 플랫폼 SRE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 플랫폼 SRE팀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Helm, Github Actions 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Prometheus 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 203,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[무신사 CI/CD 자동화 파트] DevOps 리드 엔지니어",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Terraform",
            "Ansible",
            "Jenkins",
            "AWS EKS",
            "Istio",
            "Python"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "무신사 무신사 CI/CD 자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 CI/CD 자동화 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Terraform, Ansible, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS EKS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 204,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[무신사 코어 네트워크팀] DevOps 전문가",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Crossplane",
            "Argo Rollouts",
            "Datadog",
            "PagerDuty",
            "AWS"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "무신사 무신사 코어 네트워크팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 코어 네트워크팀 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kubernetes, Crossplane, Argo Rollouts 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Datadog 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 205,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[무신사 클라우드보안 파트] DevOps 코어 개발자",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "Terraform",
            "GitLab CI",
            "OpenSearch",
            "FluentBit",
            "KEDA"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "무신사 무신사 클라우드보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 클라우드보안 파트 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, GitLab CI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenSearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 206,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[여기어때 클라우드 인프라팀] DevOps 수석 엔지니어",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Cilium",
            "Terraform",
            "Vault",
            "Consul",
            "AWS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "무신사 여기어때 클라우드 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 클라우드 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Cilium, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vault 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 207,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[여기어때 SRE 엔지니어링셀] DevOps 테크 리드",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "GCP",
            "Kubernetes",
            "Spinnaker",
            "Cloud Monitoring",
            "Terraform"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "무신사 여기어때 SRE 엔지니어링셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 SRE 엔지니어링셀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "GCP, Kubernetes, Spinnaker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Cloud Monitoring 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 208,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[여기어때 데이타베이스 Ops 파트] DevOps 담당자",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "CloudFormation",
            "Jenkins",
            "Elasticsearch",
            "Logstash",
            "Kibana"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "무신사 여기어때 데이타베이스 Ops 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 데이타베이스 Ops 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, CloudFormation, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Elasticsearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 209,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[여기어때 트래픽제어 파트] DevOps 아키텍트",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Karpenter",
            "Terraform",
            "ArgoCD",
            "NewRelic",
            "AWS"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "무신사 여기어때 트래픽제어 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 트래픽제어 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Karpenter, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 210,
        "companyName": "무신사",
        "companyLogo": "https://www.google.com/s2/favicons?domain=musinsa.com&sz=128",
        "title": "[여기어때 모니터링 셀] DevOps 플랫폼 엔지니어",
        "location": "서울",
        "district": "성남시",
        "jobCategory": "DevOps",
        "techStack": [
            "Docker",
            "Podman",
            "Buildpacks",
            "Tekton",
            "Harbor",
            "Kubernetes"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "무신사 여기어때 모니터링 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 모니터링 셀 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Docker, Podman, Buildpacks 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tekton 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 211,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[쏘카 차량 IoT 인프라팀] DevOps 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Docker",
            "Terraform",
            "ArgoCD",
            "AWS",
            "Datadog"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "여기어때 쏘카 차량 IoT 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 차량 IoT 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Docker, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 212,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[쏘카 클라우드 아키텍처셀] DevOps 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Helm",
            "Github Actions",
            "Prometheus",
            "Grafana",
            "GCP"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "여기어때 쏘카 클라우드 아키텍처셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 클라우드 아키텍처셀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Helm, Github Actions 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Prometheus 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 213,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[쏘카 서비스 SRE 파트] DevOps 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Terraform",
            "Ansible",
            "Jenkins",
            "AWS EKS",
            "Istio",
            "Python"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "여기어때 쏘카 서비스 SRE 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 서비스 SRE 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Terraform, Ansible, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS EKS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 214,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[쏘카 쿠버네티스 파트너팀] DevOps 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Crossplane",
            "Argo Rollouts",
            "Datadog",
            "PagerDuty",
            "AWS"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "여기어때 쏘카 쿠버네티스 파트너팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 쿠버네티스 파트너팀 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kubernetes, Crossplane, Argo Rollouts 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Datadog 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 215,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[쏘카 비용최적화 TaskForce] DevOps 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "Terraform",
            "GitLab CI",
            "OpenSearch",
            "FluentBit",
            "KEDA"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "여기어때 쏘카 비용최적화 TaskForce에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 비용최적화 TaskForce 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, GitLab CI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenSearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 216,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[당근 로컬 인프라 파트] DevOps 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Cilium",
            "Terraform",
            "Vault",
            "Consul",
            "AWS"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "여기어때 당근 로컬 인프라 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 인프라 파트 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Cilium, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vault 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 217,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[당근 SRE 개발실] DevOps 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "GCP",
            "Kubernetes",
            "Spinnaker",
            "Cloud Monitoring",
            "Terraform"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "여기어때 당근 SRE 개발실에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 SRE 개발실 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "GCP, Kubernetes, Spinnaker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Cloud Monitoring 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 218,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[당근 글로벌 데브옵스셀] DevOps 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "CloudFormation",
            "Jenkins",
            "Elasticsearch",
            "Logstash",
            "Kibana"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "여기어때 당근 글로벌 데브옵스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 글로벌 데브옵스셀 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, CloudFormation, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Elasticsearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 219,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[당근 서비스 메시 파트] DevOps 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Karpenter",
            "Terraform",
            "ArgoCD",
            "NewRelic",
            "AWS"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "여기어때 당근 서비스 메시 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 서비스 메시 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Karpenter, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 220,
        "companyName": "여기어때",
        "companyLogo": "https://www.google.com/s2/favicons?domain=goodchoice.kr&sz=128",
        "title": "[당근 데이터인프라 Ops] DevOps 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Docker",
            "Podman",
            "Buildpacks",
            "Tekton",
            "Harbor",
            "Kubernetes"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "여기어때 당근 데이터인프라 Ops에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 데이터인프라 Ops 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Docker, Podman, Buildpacks 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tekton 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 221,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[지그재그 코어 인프라팀] DevOps 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Docker",
            "Terraform",
            "ArgoCD",
            "AWS",
            "Datadog"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쏘카 지그재그 코어 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 코어 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Docker, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 222,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[지그재그 SRE 파트] DevOps 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Helm",
            "Github Actions",
            "Prometheus",
            "Grafana",
            "GCP"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쏘카 지그재그 SRE 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 SRE 파트 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Helm, Github Actions 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Prometheus 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 223,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[지그재그 배포자동화 셀] DevOps 리드 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Terraform",
            "Ansible",
            "Jenkins",
            "AWS EKS",
            "Istio",
            "Python"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쏘카 지그재그 배포자동화 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 배포자동화 셀 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Terraform, Ansible, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS EKS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 224,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[지그재그 모니터링 파트] DevOps 전문가",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Crossplane",
            "Argo Rollouts",
            "Datadog",
            "PagerDuty",
            "AWS"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쏘카 지그재그 모니터링 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 모니터링 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kubernetes, Crossplane, Argo Rollouts 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Datadog 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 225,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[지그재그 클라우드 가속팀] DevOps 코어 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "Terraform",
            "GitLab CI",
            "OpenSearch",
            "FluentBit",
            "KEDA"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쏘카 지그재그 클라우드 가속팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 클라우드 가속팀 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, GitLab CI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenSearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 226,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[무신사 블랙프라이데이 인프라셀] DevOps 수석 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Cilium",
            "Terraform",
            "Vault",
            "Consul",
            "AWS"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쏘카 무신사 블랙프라이데이 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 블랙프라이데이 인프라셀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Cilium, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vault 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 227,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[무신사 플랫폼 SRE팀] DevOps 테크 리드",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "GCP",
            "Kubernetes",
            "Spinnaker",
            "Cloud Monitoring",
            "Terraform"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쏘카 무신사 플랫폼 SRE팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 플랫폼 SRE팀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "GCP, Kubernetes, Spinnaker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Cloud Monitoring 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 228,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[무신사 CI/CD 자동화 파트] DevOps 담당자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "CloudFormation",
            "Jenkins",
            "Elasticsearch",
            "Logstash",
            "Kibana"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "쏘카 무신사 CI/CD 자동화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 CI/CD 자동화 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, CloudFormation, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Elasticsearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 229,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[무신사 코어 네트워크팀] DevOps 아키텍트",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Karpenter",
            "Terraform",
            "ArgoCD",
            "NewRelic",
            "AWS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "쏘카 무신사 코어 네트워크팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 코어 네트워크팀 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Karpenter, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 230,
        "companyName": "쏘카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=socar.kr&sz=128",
        "title": "[무신사 클라우드보안 파트] DevOps 플랫폼 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "DevOps",
        "techStack": [
            "Docker",
            "Podman",
            "Buildpacks",
            "Tekton",
            "Harbor",
            "Kubernetes"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "쏘카 무신사 클라우드보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "무신사 클라우드보안 파트 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Docker, Podman, Buildpacks 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tekton 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 231,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[여기어때 클라우드 인프라팀] DevOps 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Docker",
            "Terraform",
            "ArgoCD",
            "AWS",
            "Datadog"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근알바 여기어때 클라우드 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 클라우드 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Docker, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 232,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[여기어때 SRE 엔지니어링셀] DevOps 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Helm",
            "Github Actions",
            "Prometheus",
            "Grafana",
            "GCP"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근알바 여기어때 SRE 엔지니어링셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 SRE 엔지니어링셀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Helm, Github Actions 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Prometheus 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 233,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[여기어때 데이타베이스 Ops 파트] DevOps 리드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Terraform",
            "Ansible",
            "Jenkins",
            "AWS EKS",
            "Istio",
            "Python"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근알바 여기어때 데이타베이스 Ops 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 데이타베이스 Ops 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Terraform, Ansible, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS EKS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 234,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[여기어때 트래픽제어 파트] DevOps 전문가",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Crossplane",
            "Argo Rollouts",
            "Datadog",
            "PagerDuty",
            "AWS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근알바 여기어때 트래픽제어 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 트래픽제어 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kubernetes, Crossplane, Argo Rollouts 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Datadog 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 235,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[여기어때 모니터링 셀] DevOps 코어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "Terraform",
            "GitLab CI",
            "OpenSearch",
            "FluentBit",
            "KEDA"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근알바 여기어때 모니터링 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "여기어때 모니터링 셀 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, GitLab CI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenSearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 236,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[쏘카 차량 IoT 인프라팀] DevOps 수석 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Cilium",
            "Terraform",
            "Vault",
            "Consul",
            "AWS"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근알바 쏘카 차량 IoT 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 차량 IoT 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Cilium, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vault 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 237,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[쏘카 클라우드 아키텍처셀] DevOps 테크 리드",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "GCP",
            "Kubernetes",
            "Spinnaker",
            "Cloud Monitoring",
            "Terraform"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근알바 쏘카 클라우드 아키텍처셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 클라우드 아키텍처셀 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "GCP, Kubernetes, Spinnaker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Cloud Monitoring 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 238,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[쏘카 서비스 SRE 파트] DevOps 담당자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "CloudFormation",
            "Jenkins",
            "Elasticsearch",
            "Logstash",
            "Kibana"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근알바 쏘카 서비스 SRE 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 서비스 SRE 파트 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, CloudFormation, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Elasticsearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 239,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[쏘카 쿠버네티스 파트너팀] DevOps 아키텍트",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Karpenter",
            "Terraform",
            "ArgoCD",
            "NewRelic",
            "AWS"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근알바 쏘카 쿠버네티스 파트너팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 쿠버네티스 파트너팀 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Karpenter, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 240,
        "companyName": "당근알바",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[쏘카 비용최적화 TaskForce] DevOps 플랫폼 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "DevOps",
        "techStack": [
            "Docker",
            "Podman",
            "Buildpacks",
            "Tekton",
            "Harbor",
            "Kubernetes"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근알바 쏘카 비용최적화 TaskForce에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쏘카 비용최적화 TaskForce 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Docker, Podman, Buildpacks 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tekton 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 241,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[당근 로컬 인프라 파트] DevOps 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Docker",
            "Terraform",
            "ArgoCD",
            "AWS",
            "Datadog"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "지그재그(카카오스타일) 당근 로컬 인프라 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 인프라 파트 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Docker, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 242,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[당근 SRE 개발실] DevOps 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Helm",
            "Github Actions",
            "Prometheus",
            "Grafana",
            "GCP"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "지그재그(카카오스타일) 당근 SRE 개발실에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 SRE 개발실 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Helm, Github Actions 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Prometheus 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 243,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[당근 글로벌 데브옵스셀] DevOps 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Terraform",
            "Ansible",
            "Jenkins",
            "AWS EKS",
            "Istio",
            "Python"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "지그재그(카카오스타일) 당근 글로벌 데브옵스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 글로벌 데브옵스셀 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Terraform, Ansible, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS EKS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 244,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[당근 서비스 메시 파트] DevOps 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Crossplane",
            "Argo Rollouts",
            "Datadog",
            "PagerDuty",
            "AWS"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "지그재그(카카오스타일) 당근 서비스 메시 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 서비스 메시 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kubernetes, Crossplane, Argo Rollouts 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Datadog 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 245,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[당근 데이터인프라 Ops] DevOps 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "Terraform",
            "GitLab CI",
            "OpenSearch",
            "FluentBit",
            "KEDA"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "지그재그(카카오스타일) 당근 데이터인프라 Ops에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 데이터인프라 Ops 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, GitLab CI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenSearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 246,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[지그재그 코어 인프라팀] DevOps 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Cilium",
            "Terraform",
            "Vault",
            "Consul",
            "AWS"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "지그재그(카카오스타일) 지그재그 코어 인프라팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 코어 인프라팀 소속으로 EKS/GKE 기반 대규모 멀티 클러스터 쿠버네티스 환경 설계 및 운영",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화 및 관련 코어 시스템 유지보수",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kubernetes, Cilium, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vault 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 247,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[지그재그 SRE 파트] DevOps 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "GCP",
            "Kubernetes",
            "Spinnaker",
            "Cloud Monitoring",
            "Terraform"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "지그재그(카카오스타일) 지그재그 SRE 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 SRE 파트 소속으로 ArgoCD & GitHub Actions 기반 무중단(Blue/Green, Canary) 배포 파이프라인",
            "Prometheus, Grafana, OpenTelemetry 기반 풀스택 관측 가능성(Observability) 구축 및 관련 코어 시스템 유지보수",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 4년 이상 보유하신 분",
            "GCP, Kubernetes, Spinnaker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Cloud Monitoring 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 248,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[지그재그 배포자동화 셀] DevOps 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "AWS",
            "CloudFormation",
            "Jenkins",
            "Elasticsearch",
            "Logstash",
            "Kibana"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "지그재그(카카오스타일) 지그재그 배포자동화 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 배포자동화 셀 소속으로 Istio / Linkerd 서비스 메시(Service Mesh) 도입으로 마이크로서비스 라우팅 제어",
            "Karpenter 및 KEDA 활용 인프라 오토스케일링 최적화로 클라우드 비용 30% 감축 및 관련 코어 시스템 유지보수",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, CloudFormation, Jenkins 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Elasticsearch 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 249,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[지그재그 모니터링 파트] DevOps 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Kubernetes",
            "Karpenter",
            "Terraform",
            "ArgoCD",
            "NewRelic",
            "AWS"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "지그재그(카카오스타일) 지그재그 모니터링 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 모니터링 파트 소속으로 HashiCorp Vault 기반 시크릿 관리 및 IAM 최소 권한 정책 체계 적용",
            "대규모 블랙프라이데이 부하 대응 트래픽 스파이크 대비 성능 테스트 및 SRE 가이딩 및 관련 코어 시스템 유지보수",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Kubernetes, Karpenter, Terraform 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ArgoCD 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 250,
        "companyName": "지그재그(카카오스타일)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kakaostyle.com&sz=128",
        "title": "[지그재그 클라우드 가속팀] DevOps 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "DevOps",
        "techStack": [
            "Docker",
            "Podman",
            "Buildpacks",
            "Tekton",
            "Harbor",
            "Kubernetes"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "지그재그(카카오스타일) 지그재그 클라우드 가속팀에서 혁신적인 서비스를 함께 만들어갈 우수한 DevOps 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "지그재그 클라우드 가속팀 소속으로 Cilium eBPF 기반 고성능 클러스터 CNI 네트워크 및 보안 정책 수립",
            "장애 발생 시 PagerDuty 연동 온콜(On-call) 응답 및 Root Cause Analysis(RCA) 보고서 작성 및 관련 코어 시스템 유지보수",
            "Terraform 및 Terragrunt 기반 Infrastructure as Code(IaC) 자동화를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "DevOps 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Docker, Podman, Buildpacks 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Tekton 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 251,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[메가존 AWS 아키텍처 센터] 클라우드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Terraform",
            "Python",
            "DirectConnect",
            "AWS Transit Gateway"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "메가존클라우드 메가존 AWS 아키텍처 센터에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 AWS 아키텍처 센터 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, Python 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectConnect 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 252,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[메가존 GCP 마이그레이션팀] 클라우드 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "GCP",
            "Google Cloud Architecture",
            "Anthos",
            "Terraform",
            "BigQuery"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "메가존클라우드 메가존 GCP 마이그레이션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 GCP 마이그레이션팀 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "GCP, Google Cloud Architecture, Anthos 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 253,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[메가존 FinOps 컨설팅셀] 클라우드 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "Microsoft Azure",
            "ARM Templates",
            "Azure ExpressRoute",
            "Powershell"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "메가존클라우드 메가존 FinOps 컨설팅셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 FinOps 컨설팅셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Microsoft Azure, ARM Templates, Azure ExpressRoute 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Powershell 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 254,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[메가존 클라우드 보안센터] 클라우드 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "Microsoft Azure",
            "Multi-Cloud",
            "FinOps",
            "Cost Explorer"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "메가존클라우드 메가존 클라우드 보안센터에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 클라우드 보안센터 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, GCP, Microsoft Azure 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Multi-Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 255,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[메가존 MSP 운영 파트] 클라우드 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Native",
            "Lambda",
            "DynamoDB",
            "API Gateway",
            "CDK"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "메가존클라우드 메가존 MSP 운영 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 MSP 운영 파트 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS Native, Lambda, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "API Gateway 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 256,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[베스핀 OpsNow 개발팀] 클라우드 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "OpenStack",
            "Ceph",
            "KVM",
            "Linux",
            "Python Scripting"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "메가존클라우드 베스핀 OpsNow 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 OpsNow 개발팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "OpenStack, Ceph, KVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Linux 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 257,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[베스핀 멀티클라우드 아키텍처 파트] 클라우드 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Kubernetes",
            "Helm",
            "Istio",
            "CloudFront"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "메가존클라우드 베스핀 멀티클라우드 아키텍처 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 멀티클라우드 아키텍처 파트 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "AWS, Kubernetes, Helm 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Istio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 258,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[베스핀 하이브리드 인프라셀] 클라우드 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "Azure",
            "Kubernetes (AKS)",
            "Azure DevOps",
            "Bicep",
            "KeyVault"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "메가존클라우드 베스핀 하이브리드 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 하이브리드 인프라셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Azure, Kubernetes (AKS), Azure DevOps 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Bicep 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 259,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[베스핀 글로벌 마이그레이션팀] 클라우드 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "VMware Cloud",
            "Hybrid Cloud",
            "NSX-T"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "메가존클라우드 베스핀 글로벌 마이그레이션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 글로벌 마이그레이션팀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, GCP, VMware Cloud 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hybrid Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 260,
        "companyName": "메가존클라우드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=megazone.com&sz=128",
        "title": "[베스핀 클라우드 네트워크팀] 클라우드 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Security Hub",
            "GuardDuty",
            "IAM",
            "KMS",
            "Terraform"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "메가존클라우드 베스핀 클라우드 네트워크팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 클라우드 네트워크팀 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "AWS Security Hub, GuardDuty, IAM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "KMS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 261,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[삼성SDS SCP 클라우드 개발팀] 클라우드 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Terraform",
            "Python",
            "DirectConnect",
            "AWS Transit Gateway"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "베스핀글로벌 삼성SDS SCP 클라우드 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS SCP 클라우드 개발팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, Python 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectConnect 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 262,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[삼성SDS 금융 클라우드 컨설팅파목] 클라우드 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "GCP",
            "Google Cloud Architecture",
            "Anthos",
            "Terraform",
            "BigQuery"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "베스핀글로벌 삼성SDS 금융 클라우드 컨설팅파목에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 금융 클라우드 컨설팅파목 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "GCP, Google Cloud Architecture, Anthos 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 263,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[삼성SDS 글로벌 인프라 파트] 클라우드 리드 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "Microsoft Azure",
            "ARM Templates",
            "Azure ExpressRoute",
            "Powershell"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "베스핀글로벌 삼성SDS 글로벌 인프라 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 글로벌 인프라 파트 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Microsoft Azure, ARM Templates, Azure ExpressRoute 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Powershell 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 264,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[삼성SDS 클라우드 네이티브셀] 클라우드 전문가",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "Microsoft Azure",
            "Multi-Cloud",
            "FinOps",
            "Cost Explorer"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "베스핀글로벌 삼성SDS 클라우드 네이티브셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 클라우드 네이티브셀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, GCP, Microsoft Azure 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Multi-Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 265,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[삼성SDS MSP 기술지원팀] 클라우드 코어 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Native",
            "Lambda",
            "DynamoDB",
            "API Gateway",
            "CDK"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "베스핀글로벌 삼성SDS MSP 기술지원팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS MSP 기술지원팀 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS Native, Lambda, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "API Gateway 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 266,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[LG CNS 엔터프라이즈 클라우드팀] 클라우드 수석 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "OpenStack",
            "Ceph",
            "KVM",
            "Linux",
            "Python Scripting"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "베스핀글로벌 LG CNS 엔터프라이즈 클라우드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 엔터프라이즈 클라우드팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "OpenStack, Ceph, KVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Linux 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 267,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[LG CNS AM(App Modernization) 파트] 클라우드 테크 리드",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Kubernetes",
            "Helm",
            "Istio",
            "CloudFront"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "베스핀글로벌 LG CNS AM(App Modernization) 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS AM(App Modernization) 파트 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "AWS, Kubernetes, Helm 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Istio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 268,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[LG CNS 클라우드 거버넌스셀] 클라우드 담당자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "Azure",
            "Kubernetes (AKS)",
            "Azure DevOps",
            "Bicep",
            "KeyVault"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "베스핀글로벌 LG CNS 클라우드 거버넌스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 클라우드 거버넌스셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Azure, Kubernetes (AKS), Azure DevOps 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Bicep 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 269,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[LG CNS 스마트팩토리 클라우드팀] 클라우드 아키텍트",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "VMware Cloud",
            "Hybrid Cloud",
            "NSX-T"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "베스핀글로벌 LG CNS 스마트팩토리 클라우드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 스마트팩토리 클라우드팀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, GCP, VMware Cloud 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hybrid Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 270,
        "companyName": "베스핀글로벌",
        "companyLogo": "https://www.google.com/s2/favicons?domain=bespinglobal.com&sz=128",
        "title": "[LG CNS 데이터클라우드 파트] 클라우드 플랫폼 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Security Hub",
            "GuardDuty",
            "IAM",
            "KMS",
            "Terraform"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "베스핀글로벌 LG CNS 데이터클라우드 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 데이터클라우드 파트 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "AWS Security Hub, GuardDuty, IAM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "KMS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 271,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[SK C&C Cloud Z 아키텍처팀] 클라우드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Terraform",
            "Python",
            "DirectConnect",
            "AWS Transit Gateway"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "삼성SDS SK C&C Cloud Z 아키텍처팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C Cloud Z 아키텍처팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, Python 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectConnect 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 272,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[SK C&C 클라우드 마이그레이션셀] 클라우드 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "GCP",
            "Google Cloud Architecture",
            "Anthos",
            "Terraform",
            "BigQuery"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "삼성SDS SK C&C 클라우드 마이그레이션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 클라우드 마이그레이션셀 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "GCP, Google Cloud Architecture, Anthos 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 273,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[SK C&C 컨테이너 플랫폼팀] 클라우드 리드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "Microsoft Azure",
            "ARM Templates",
            "Azure ExpressRoute",
            "Powershell"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "삼성SDS SK C&C 컨테이너 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 컨테이너 플랫폼팀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Microsoft Azure, ARM Templates, Azure ExpressRoute 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Powershell 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 274,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[SK C&C 클라우드 보안 파트] 클라우드 전문가",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "Microsoft Azure",
            "Multi-Cloud",
            "FinOps",
            "Cost Explorer"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "삼성SDS SK C&C 클라우드 보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 클라우드 보안 파트 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, GCP, Microsoft Azure 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Multi-Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 275,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[SK C&C 금융 테크엔지니어링] 클라우드 코어 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Native",
            "Lambda",
            "DynamoDB",
            "API Gateway",
            "CDK"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "삼성SDS SK C&C 금융 테크엔지니어링에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 금융 테크엔지니어링 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS Native, Lambda, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "API Gateway 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 276,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[메가존 AWS 아키텍처 센터] 클라우드 수석 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "OpenStack",
            "Ceph",
            "KVM",
            "Linux",
            "Python Scripting"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "삼성SDS 메가존 AWS 아키텍처 센터에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 AWS 아키텍처 센터 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "OpenStack, Ceph, KVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Linux 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 277,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[메가존 GCP 마이그레이션팀] 클라우드 테크 리드",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Kubernetes",
            "Helm",
            "Istio",
            "CloudFront"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "삼성SDS 메가존 GCP 마이그레이션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 GCP 마이그레이션팀 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "AWS, Kubernetes, Helm 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Istio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 278,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[메가존 FinOps 컨설팅셀] 클라우드 담당자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "Azure",
            "Kubernetes (AKS)",
            "Azure DevOps",
            "Bicep",
            "KeyVault"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "삼성SDS 메가존 FinOps 컨설팅셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 FinOps 컨설팅셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Azure, Kubernetes (AKS), Azure DevOps 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Bicep 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 279,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[메가존 클라우드 보안센터] 클라우드 아키텍트",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "VMware Cloud",
            "Hybrid Cloud",
            "NSX-T"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "삼성SDS 메가존 클라우드 보안센터에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 클라우드 보안센터 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, GCP, VMware Cloud 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hybrid Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 280,
        "companyName": "삼성SDS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=samsungsds.com&sz=128",
        "title": "[메가존 MSP 운영 파트] 클라우드 플랫폼 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Security Hub",
            "GuardDuty",
            "IAM",
            "KMS",
            "Terraform"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "삼성SDS 메가존 MSP 운영 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "메가존 MSP 운영 파트 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "AWS Security Hub, GuardDuty, IAM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "KMS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 281,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[베스핀 OpsNow 개발팀] 클라우드 엔지니어",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Terraform",
            "Python",
            "DirectConnect",
            "AWS Transit Gateway"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "LG CNS 베스핀 OpsNow 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 OpsNow 개발팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, Python 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectConnect 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 282,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[베스핀 멀티클라우드 아키텍처 파트] 클라우드 개발자",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "GCP",
            "Google Cloud Architecture",
            "Anthos",
            "Terraform",
            "BigQuery"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "LG CNS 베스핀 멀티클라우드 아키텍처 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 멀티클라우드 아키텍처 파트 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "GCP, Google Cloud Architecture, Anthos 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 283,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[베스핀 하이브리드 인프라셀] 클라우드 리드 엔지니어",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "Microsoft Azure",
            "ARM Templates",
            "Azure ExpressRoute",
            "Powershell"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "LG CNS 베스핀 하이브리드 인프라셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 하이브리드 인프라셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Microsoft Azure, ARM Templates, Azure ExpressRoute 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Powershell 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 284,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[베스핀 글로벌 마이그레이션팀] 클라우드 전문가",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "Microsoft Azure",
            "Multi-Cloud",
            "FinOps",
            "Cost Explorer"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "LG CNS 베스핀 글로벌 마이그레이션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 글로벌 마이그레이션팀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, GCP, Microsoft Azure 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Multi-Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 285,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[베스핀 클라우드 네트워크팀] 클라우드 코어 개발자",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Native",
            "Lambda",
            "DynamoDB",
            "API Gateway",
            "CDK"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "LG CNS 베스핀 클라우드 네트워크팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "베스핀 클라우드 네트워크팀 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS Native, Lambda, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "API Gateway 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 286,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[삼성SDS SCP 클라우드 개발팀] 클라우드 수석 엔지니어",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "OpenStack",
            "Ceph",
            "KVM",
            "Linux",
            "Python Scripting"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "LG CNS 삼성SDS SCP 클라우드 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS SCP 클라우드 개발팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "OpenStack, Ceph, KVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Linux 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 287,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[삼성SDS 금융 클라우드 컨설팅파목] 클라우드 테크 리드",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Kubernetes",
            "Helm",
            "Istio",
            "CloudFront"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "LG CNS 삼성SDS 금융 클라우드 컨설팅파목에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 금융 클라우드 컨설팅파목 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "AWS, Kubernetes, Helm 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Istio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 288,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[삼성SDS 글로벌 인프라 파트] 클라우드 담당자",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "Azure",
            "Kubernetes (AKS)",
            "Azure DevOps",
            "Bicep",
            "KeyVault"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "LG CNS 삼성SDS 글로벌 인프라 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 글로벌 인프라 파트 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Azure, Kubernetes (AKS), Azure DevOps 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Bicep 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 289,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[삼성SDS 클라우드 네이티브셀] 클라우드 아키텍트",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "VMware Cloud",
            "Hybrid Cloud",
            "NSX-T"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "LG CNS 삼성SDS 클라우드 네이티브셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS 클라우드 네이티브셀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, GCP, VMware Cloud 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hybrid Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 290,
        "companyName": "LG CNS",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lgcns.com&sz=128",
        "title": "[삼성SDS MSP 기술지원팀] 클라우드 플랫폼 엔지니어",
        "location": "서울",
        "district": "강서구",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Security Hub",
            "GuardDuty",
            "IAM",
            "KMS",
            "Terraform"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "LG CNS 삼성SDS MSP 기술지원팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "삼성SDS MSP 기술지원팀 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "AWS Security Hub, GuardDuty, IAM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "KMS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 291,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[LG CNS 엔터프라이즈 클라우드팀] 클라우드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Terraform",
            "Python",
            "DirectConnect",
            "AWS Transit Gateway"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK C&C LG CNS 엔터프라이즈 클라우드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 엔터프라이즈 클라우드팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, Terraform, Python 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectConnect 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 292,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[LG CNS AM(App Modernization) 파트] 클라우드 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "GCP",
            "Google Cloud Architecture",
            "Anthos",
            "Terraform",
            "BigQuery"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK C&C LG CNS AM(App Modernization) 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS AM(App Modernization) 파트 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "GCP, Google Cloud Architecture, Anthos 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 293,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[LG CNS 클라우드 거버넌스셀] 클라우드 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "Microsoft Azure",
            "ARM Templates",
            "Azure ExpressRoute",
            "Powershell"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK C&C LG CNS 클라우드 거버넌스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 클라우드 거버넌스셀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Microsoft Azure, ARM Templates, Azure ExpressRoute 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Powershell 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 294,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[LG CNS 스마트팩토리 클라우드팀] 클라우드 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "Microsoft Azure",
            "Multi-Cloud",
            "FinOps",
            "Cost Explorer"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK C&C LG CNS 스마트팩토리 클라우드팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 스마트팩토리 클라우드팀 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS, GCP, Microsoft Azure 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Multi-Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 295,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[LG CNS 데이터클라우드 파트] 클라우드 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Native",
            "Lambda",
            "DynamoDB",
            "API Gateway",
            "CDK"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK C&C LG CNS 데이터클라우드 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "LG CNS 데이터클라우드 파트 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS Native, Lambda, DynamoDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "API Gateway 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 296,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[SK C&C Cloud Z 아키텍처팀] 클라우드 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "OpenStack",
            "Ceph",
            "KVM",
            "Linux",
            "Python Scripting"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK C&C SK C&C Cloud Z 아키텍처팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C Cloud Z 아키텍처팀 소속으로 금융 및 대기업 온프레미스 레거시 데이터센터의 클라우드 리프트 앤 시프트 마이그레이션",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계 및 관련 코어 시스템 유지보수",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "OpenStack, Ceph, KVM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Linux 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 297,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[SK C&C 클라우드 마이그레이션셀] 클라우드 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "Kubernetes",
            "Helm",
            "Istio",
            "CloudFront"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK C&C SK C&C 클라우드 마이그레이션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 클라우드 마이그레이션셀 소속으로 FinOps 관점에서의 클라우드 자원 사용량 종합 모니터링 및 절감 전략 집행",
            "Serverless 아키텍처(Lambda, API Gateway) 기반의 Cloud-Native 앱 디자인 및 관련 코어 시스템 유지보수",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 4년 이상 보유하신 분",
            "AWS, Kubernetes, Helm 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Istio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 298,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[SK C&C 컨테이너 플랫폼팀] 클라우드 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "Azure",
            "Kubernetes (AKS)",
            "Azure DevOps",
            "Bicep",
            "KeyVault"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK C&C SK C&C 컨테이너 플랫폼팀에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 컨테이너 플랫폼팀 소속으로 Multi-Cloud (AWS + GCP) 간의 가용성 고도화 및 재해 복구(DR) 시나리오 구축",
            "클라우드 보안 규정(ISMS-P, HIPAA) 준수를 위한 랜딩존(Landing Zone) 구축 및 관련 코어 시스템 유지보수",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Azure, Kubernetes (AKS), Azure DevOps 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Bicep 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 299,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[SK C&C 클라우드 보안 파트] 클라우드 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS",
            "GCP",
            "VMware Cloud",
            "Hybrid Cloud",
            "NSX-T"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK C&C SK C&C 클라우드 보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 클라우드 보안 파트 소속으로 AWS CDK / Azure Bicep 기반의 클라우드 리소스 코드화 배포 자동화",
            "VMware 환경의 하이브리드 클라우드 연결 및 워크로드 분산 아키텍처 수립 및 관련 코어 시스템 유지보수",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 2년 이상 보유하신 분",
            "AWS, GCP, VMware Cloud 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hybrid Cloud 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 300,
        "companyName": "SK C&C",
        "companyLogo": "https://www.google.com/s2/favicons?domain=sk.co.kr&sz=128",
        "title": "[SK C&C 금융 테크엔지니어링] 클라우드 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "클라우드",
        "techStack": [
            "AWS Security Hub",
            "GuardDuty",
            "IAM",
            "KMS",
            "Terraform"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK C&C SK C&C 금융 테크엔지니어링에서 혁신적인 서비스를 함께 만들어갈 우수한 클라우드 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK C&C 금융 테크엔지니어링 소속으로 엔터프라이즈 통합 IAM 정책 체계 및 SSO(Single Sign-On) 계정 통합 연동",
            "고성능 컴퓨팅(HPC) 요구사항에 맞춘 클라우드 인스턴스 튜닝 및 Storage 구성 및 관련 코어 시스템 유지보수",
            "AWS Transit Gateway 기반 복잡한 멀티 VPC 네트워크 및 DirectConnect 전용선 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "클라우드 분야 관련 실무 경험 3년 이상 보유하신 분",
            "AWS Security Hub, GuardDuty, IAM 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "KMS 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 301,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[AhnLab V3 코어엔진팀] 보안 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "C/C++",
            "Reverse Engineering",
            "IDA Pro",
            "x64dbg",
            "Python"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "안랩 AhnLab V3 코어엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab V3 코어엔진팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C/C++, Reverse Engineering, IDA Pro 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "x64dbg 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 302,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[AhnLab ASEC 악성코드분석팀] 보안 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Web Security"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "안랩 AhnLab ASEC 악성코드분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab ASEC 악성코드분석팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Burp Suite, Metasploit 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Nmap 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 303,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[AhnLab 모의해킹 컨설팅셀] 보안 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Splunk",
            "SIEM",
            "Wireshark",
            "Suricata",
            "Snort",
            "Linux"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "안랩 AhnLab 모의해킹 컨설팅셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 모의해킹 컨설팅셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Splunk, SIEM, Wireshark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Suricata 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 304,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[AhnLab 침해대응 CERT팀] 보안 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "AWS Security",
            "GuardDuty",
            "WAF",
            "Terraform",
            "Python"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "안랩 AhnLab 침해대응 CERT팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 침해대응 CERT팀 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS Security, GuardDuty, WAF 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 305,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[AhnLab 클라우드보안개발] 보안 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "C++",
            "Windows Kernel",
            "Driver Development",
            "System Internal"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "안랩 AhnLab 클라우드보안개발에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 클라우드보안개발 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Windows Kernel, Driver Development 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "System Internal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 306,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[이스트시큐리티 알약 엔진개발팀] 보안 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "YARA",
            "Volatility",
            "Ghidra",
            "Assembly"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "안랩 이스트시큐리티 알약 엔진개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 알약 엔진개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, YARA, Volatility 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Ghidra 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 307,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[이스트시큐리티 랜섬웨어 대응센터] 보안 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Java",
            "Spring Boot",
            "Cryptography",
            "PKI",
            "DRM"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "안랩 이스트시큐리티 랜섬웨어 대응센터에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 랜섬웨어 대응센터 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Java, Spring Boot, Cryptography 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PKI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 308,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[이스트시큐리티 악성URL 분석파목] 보안 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Go",
            "Docker",
            "SAST",
            "DAST",
            "Semgrep"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "안랩 이스트시큐리티 악성URL 분석파목에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 악성URL 분석파목 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, Go, Docker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SAST 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 309,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[이스트시큐리티 보안SW 셀] 보안 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Wireshark",
            "Tcpdump",
            "BGP",
            "OpenFlow",
            "Network Security"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "안랩 이스트시큐리티 보안SW 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 보안SW 셀 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Wireshark, Tcpdump, BGP 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenFlow 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 310,
        "companyName": "안랩",
        "companyLogo": "https://www.google.com/s2/favicons?domain=ahnlab.com&sz=128",
        "title": "[이스트시큐리티 모바일보안 파트] 보안 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Bash",
            "ISMS-P",
            "ISO27001",
            "Compliance Tool"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "안랩 이스트시큐리티 모바일보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 모바일보안 파트 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Bash, ISMS-P 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ISO27001 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 311,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[SK실더스 RedTeam 모의해킹실] 보안 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "C/C++",
            "Reverse Engineering",
            "IDA Pro",
            "x64dbg",
            "Python"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "이스트시큐리티 SK실더스 RedTeam 모의해킹실에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 RedTeam 모의해킹실 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C/C++, Reverse Engineering, IDA Pro 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "x64dbg 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 312,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[SK실더스 Top-CERT 분석팀] 보안 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Web Security"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "이스트시큐리티 SK실더스 Top-CERT 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 Top-CERT 분석팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Burp Suite, Metasploit 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Nmap 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 313,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[SK실더스 클라우드 보안관제셀] 보안 리드 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Splunk",
            "SIEM",
            "Wireshark",
            "Suricata",
            "Snort",
            "Linux"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "이스트시큐리티 SK실더스 클라우드 보안관제셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 클라우드 보안관제셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Splunk, SIEM, Wireshark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Suricata 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 314,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[SK실더스 보안아키텍처 파트] 보안 전문가",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "AWS Security",
            "GuardDuty",
            "WAF",
            "Terraform",
            "Python"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "이스트시큐리티 SK실더스 보안아키텍처 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 보안아키텍처 파트 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS Security, GuardDuty, WAF 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 315,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[SK실더스 정보보호 컨설팅팀] 보안 코어 개발자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "C++",
            "Windows Kernel",
            "Driver Development",
            "System Internal"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "이스트시큐리티 SK실더스 정보보호 컨설팅팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 정보보호 컨설팅팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Windows Kernel, Driver Development 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "System Internal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 316,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[파수 DRM 코어개발팀] 보안 수석 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "YARA",
            "Volatility",
            "Ghidra",
            "Assembly"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "이스트시큐리티 파수 DRM 코어개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 DRM 코어개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, YARA, Volatility 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Ghidra 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 317,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[파수 데이터식별 기술팀] 보안 테크 리드",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Java",
            "Spring Boot",
            "Cryptography",
            "PKI",
            "DRM"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "이스트시큐리티 파수 데이터식별 기술팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 데이터식별 기술팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Java, Spring Boot, Cryptography 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PKI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 318,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[파수 개인정보보호 솔루션셀] 보안 담당자",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Go",
            "Docker",
            "SAST",
            "DAST",
            "Semgrep"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "이스트시큐리티 파수 개인정보보호 솔루션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 개인정보보호 솔루션셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, Go, Docker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SAST 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 319,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[파수 소스코드 취약점진단 파트] 보안 아키텍트",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Wireshark",
            "Tcpdump",
            "BGP",
            "OpenFlow",
            "Network Security"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "이스트시큐리티 파수 소스코드 취약점진단 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 소스코드 취약점진단 파트 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Wireshark, Tcpdump, BGP 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenFlow 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 320,
        "companyName": "이스트시큐리티",
        "companyLogo": "https://www.google.com/s2/favicons?domain=estsecurity.seoul.kr&sz=128",
        "title": "[파수 보안지식그래프 팀] 보안 플랫폼 엔지니어",
        "location": "서울",
        "district": "서초구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Bash",
            "ISMS-P",
            "ISO27001",
            "Compliance Tool"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "이스트시큐리티 파수 보안지식그래프 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 보안지식그래프 팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Bash, ISMS-P 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ISO27001 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 321,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[윈스 SNIPER IPS/IDS 개발팀] 보안 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "C/C++",
            "Reverse Engineering",
            "IDA Pro",
            "x64dbg",
            "Python"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK실더스 윈스 SNIPER IPS/IDS 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 SNIPER IPS/IDS 개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C/C++, Reverse Engineering, IDA Pro 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "x64dbg 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 322,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[윈스 DDoS 공격대응 연구소] 보안 개발자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Web Security"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK실더스 윈스 DDoS 공격대응 연구소에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 DDoS 공격대응 연구소 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Burp Suite, Metasploit 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Nmap 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 323,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[윈스 5G 네트워크 보안셀] 보안 리드 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Splunk",
            "SIEM",
            "Wireshark",
            "Suricata",
            "Snort",
            "Linux"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK실더스 윈스 5G 네트워크 보안셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 5G 네트워크 보안셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Splunk, SIEM, Wireshark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Suricata 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 324,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[윈스 보안관제 센터(SOC)] 보안 전문가",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "AWS Security",
            "GuardDuty",
            "WAF",
            "Terraform",
            "Python"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK실더스 윈스 보안관제 센터(SOC)에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 보안관제 센터(SOC) 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS Security, GuardDuty, WAF 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 325,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[윈스 커널 드라이버 분석팀] 보안 코어 개발자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "C++",
            "Windows Kernel",
            "Driver Development",
            "System Internal"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK실더스 윈스 커널 드라이버 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 커널 드라이버 분석팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Windows Kernel, Driver Development 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "System Internal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 326,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[AhnLab V3 코어엔진팀] 보안 수석 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "YARA",
            "Volatility",
            "Ghidra",
            "Assembly"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK실더스 AhnLab V3 코어엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab V3 코어엔진팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, YARA, Volatility 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Ghidra 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 327,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[AhnLab ASEC 악성코드분석팀] 보안 테크 리드",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Java",
            "Spring Boot",
            "Cryptography",
            "PKI",
            "DRM"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK실더스 AhnLab ASEC 악성코드분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab ASEC 악성코드분석팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Java, Spring Boot, Cryptography 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PKI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 328,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[AhnLab 모의해킹 컨설팅셀] 보안 담당자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Go",
            "Docker",
            "SAST",
            "DAST",
            "Semgrep"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "SK실더스 AhnLab 모의해킹 컨설팅셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 모의해킹 컨설팅셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, Go, Docker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SAST 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 329,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[AhnLab 침해대응 CERT팀] 보안 아키텍트",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Wireshark",
            "Tcpdump",
            "BGP",
            "OpenFlow",
            "Network Security"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "SK실더스 AhnLab 침해대응 CERT팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 침해대응 CERT팀 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Wireshark, Tcpdump, BGP 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenFlow 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 330,
        "companyName": "SK실더스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=skshieldus.com&sz=128",
        "title": "[AhnLab 클라우드보안개발] 보안 플랫폼 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Bash",
            "ISMS-P",
            "ISO27001",
            "Compliance Tool"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "SK실더스 AhnLab 클라우드보안개발에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "AhnLab 클라우드보안개발 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Bash, ISMS-P 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ISO27001 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 331,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[이스트시큐리티 알약 엔진개발팀] 보안 엔지니어",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "C/C++",
            "Reverse Engineering",
            "IDA Pro",
            "x64dbg",
            "Python"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "파수 이스트시큐리티 알약 엔진개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 알약 엔진개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C/C++, Reverse Engineering, IDA Pro 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "x64dbg 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 332,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[이스트시큐리티 랜섬웨어 대응센터] 보안 개발자",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Web Security"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "파수 이스트시큐리티 랜섬웨어 대응센터에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 랜섬웨어 대응센터 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Burp Suite, Metasploit 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Nmap 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 333,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[이스트시큐리티 악성URL 분석파목] 보안 리드 엔지니어",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Splunk",
            "SIEM",
            "Wireshark",
            "Suricata",
            "Snort",
            "Linux"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "파수 이스트시큐리티 악성URL 분석파목에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 악성URL 분석파목 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Splunk, SIEM, Wireshark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Suricata 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 334,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[이스트시큐리티 보안SW 셀] 보안 전문가",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "AWS Security",
            "GuardDuty",
            "WAF",
            "Terraform",
            "Python"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "파수 이스트시큐리티 보안SW 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 보안SW 셀 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS Security, GuardDuty, WAF 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 335,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[이스트시큐리티 모바일보안 파트] 보안 코어 개발자",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "C++",
            "Windows Kernel",
            "Driver Development",
            "System Internal"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "파수 이스트시큐리티 모바일보안 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "이스트시큐리티 모바일보안 파트 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Windows Kernel, Driver Development 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "System Internal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 336,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[SK실더스 RedTeam 모의해킹실] 보안 수석 엔지니어",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "YARA",
            "Volatility",
            "Ghidra",
            "Assembly"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "파수 SK실더스 RedTeam 모의해킹실에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 RedTeam 모의해킹실 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, YARA, Volatility 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Ghidra 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 337,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[SK실더스 Top-CERT 분석팀] 보안 테크 리드",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Java",
            "Spring Boot",
            "Cryptography",
            "PKI",
            "DRM"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "파수 SK실더스 Top-CERT 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 Top-CERT 분석팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Java, Spring Boot, Cryptography 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PKI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 338,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[SK실더스 클라우드 보안관제셀] 보안 담당자",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Go",
            "Docker",
            "SAST",
            "DAST",
            "Semgrep"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "파수 SK실더스 클라우드 보안관제셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 클라우드 보안관제셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, Go, Docker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SAST 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 339,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[SK실더스 보안아키텍처 파트] 보안 아키텍트",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Wireshark",
            "Tcpdump",
            "BGP",
            "OpenFlow",
            "Network Security"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "파수 SK실더스 보안아키텍처 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 보안아키텍처 파트 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Wireshark, Tcpdump, BGP 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenFlow 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 340,
        "companyName": "파수",
        "companyLogo": "https://www.google.com/s2/favicons?domain=fasoo.com&sz=128",
        "title": "[SK실더스 정보보호 컨설팅팀] 보안 플랫폼 엔지니어",
        "location": "서울",
        "district": "마포구",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Bash",
            "ISMS-P",
            "ISO27001",
            "Compliance Tool"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "파수 SK실더스 정보보호 컨설팅팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "SK실더스 정보보호 컨설팅팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Bash, ISMS-P 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ISO27001 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 341,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[파수 DRM 코어개발팀] 보안 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "C/C++",
            "Reverse Engineering",
            "IDA Pro",
            "x64dbg",
            "Python"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "윈스 파수 DRM 코어개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 DRM 코어개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C/C++, Reverse Engineering, IDA Pro 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "x64dbg 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 342,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[파수 데이터식별 기술팀] 보안 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Web Security"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "윈스 파수 데이터식별 기술팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 데이터식별 기술팀 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Burp Suite, Metasploit 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Nmap 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 343,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[파수 개인정보보호 솔루션셀] 보안 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Splunk",
            "SIEM",
            "Wireshark",
            "Suricata",
            "Snort",
            "Linux"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "윈스 파수 개인정보보호 솔루션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 개인정보보호 솔루션셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Splunk, SIEM, Wireshark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Suricata 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 344,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[파수 소스코드 취약점진단 파트] 보안 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "AWS Security",
            "GuardDuty",
            "WAF",
            "Terraform",
            "Python"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "윈스 파수 소스코드 취약점진단 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 소스코드 취약점진단 파트 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "AWS Security, GuardDuty, WAF 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Terraform 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 345,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[파수 보안지식그래프 팀] 보안 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "C++",
            "Windows Kernel",
            "Driver Development",
            "System Internal"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "윈스 파수 보안지식그래프 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "파수 보안지식그래프 팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Windows Kernel, Driver Development 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "System Internal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 346,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[윈스 SNIPER IPS/IDS 개발팀] 보안 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "YARA",
            "Volatility",
            "Ghidra",
            "Assembly"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "윈스 윈스 SNIPER IPS/IDS 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 SNIPER IPS/IDS 개발팀 소속으로 신종 악성코드 바이너리 정적/동적 역공학(Reverse Engineering) 및 백신 패턴 제작",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행 및 관련 코어 시스템 유지보수",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, YARA, Volatility 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Ghidra 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 347,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[윈스 DDoS 공격대응 연구소] 보안 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Java",
            "Spring Boot",
            "Cryptography",
            "PKI",
            "DRM"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "윈스 윈스 DDoS 공격대응 연구소에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 DDoS 공격대응 연구소 소속으로 침해사고(Incident Response) 발생 시 포렌식 분석 및 C2 서버 IP 차단 대응",
            "SIEM 솔루션(Splunk) 기반 실시간 보안 이벤트 분석 및 룰셋 튜닝 및 관련 코어 시스템 유지보수",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Java, Spring Boot, Cryptography 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "PKI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 348,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[윈스 5G 네트워크 보안셀] 보안 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Go",
            "Docker",
            "SAST",
            "DAST",
            "Semgrep"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "윈스 윈스 5G 네트워크 보안셀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 5G 네트워크 보안셀 소속으로 커널 레벨 드라이버 개발 및 메모리 보호 / DRM 암호화 엔진 제작",
            "DevSecOps 파이프라인 구축을 위한 SAST/DAST 자동화 도구 CI 연동 및 관련 코어 시스템 유지보수",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Python, Go, Docker 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SAST 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 349,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[윈스 보안관제 센터(SOC)] 보안 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Wireshark",
            "Tcpdump",
            "BGP",
            "OpenFlow",
            "Network Security"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "윈스 윈스 보안관제 센터(SOC)에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 보안관제 센터(SOC) 소속으로 Zero Trust 아키텍처 기반의 SDP(Software Defined Perimeter) 구축",
            "대용량 DDoS 타격 시 패킷 레이어 3/4/7 실시간 분석 및 방어 필터 적용 및 관련 코어 시스템 유지보수",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Wireshark, Tcpdump, BGP 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "OpenFlow 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 350,
        "companyName": "윈스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=wins21.co.kr&sz=128",
        "title": "[윈스 커널 드라이버 분석팀] 보안 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "보안",
        "techStack": [
            "Python",
            "Bash",
            "ISMS-P",
            "ISO27001",
            "Compliance Tool"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "윈스 윈스 커널 드라이버 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 보안 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "윈스 커널 드라이버 분석팀 소속으로 ISMS-P, ISO27001 등 국내외 보안 인증 요구사항 및 기술적 컴플라이언스 진단",
            "클라우드 보안 자원 관리(CSPM) 및 가상 네트워크 취약점 상시 점검 및 관련 코어 시스템 유지보수",
            "웹 애플리케이션, 모바일 앱 및 API 대상 레드팀(Red Team) 모의해킹 수행를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "보안 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Python, Bash, ISMS-P 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "ISO27001 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 351,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[PUBG 슈팅 액션팀] 게임 개발 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "HLSL",
            "DirectX 12",
            "PhysX"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "크래프톤 PUBG 슈팅 액션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 슈팅 액션팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, HLSL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectX 12 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 352,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[PUBG 차세대 그래픽스셀] 게임 개발 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 3D",
            "Shader Graph",
            "Universal Render Pipeline",
            "DOTS"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "크래프톤 PUBG 차세대 그래픽스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 차세대 그래픽스셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity 3D, Shader Graph 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Universal Render Pipeline 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 353,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[PUBG 렌더링 파이프라인팀] 게임 개발 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Custom Game Engine",
            "DirectX 12",
            "Vulkan",
            "RenderDoc"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "크래프톤 PUBG 렌더링 파이프라인팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 렌더링 파이프라인팀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Custom Game Engine, DirectX 12 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vulkan 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 354,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[PUBG 안티치트 서버팀] 게임 개발 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Java",
            "Netty",
            "Redis",
            "MySQL",
            "IOCP Server"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "크래프톤 PUBG 안티치트 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 안티치트 서버팀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Java, Netty 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 355,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[PUBG UI/UX 클라이언트 파트] 게임 개발 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "CommonUI",
            "UMG",
            "Slate"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "크래프톤 PUBG UI/UX 클라이언트 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG UI/UX 클라이언트 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, CommonUI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UMG 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 356,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[로스트아크 레이드 전투팀] 게임 개발 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity",
            "Photon",
            "UniTask",
            "Memory Profiler"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "크래프톤 로스트아크 레이드 전투팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 레이드 전투팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity, Photon 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UniTask 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 357,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[로스트아크 서버 아키텍처셀] 게임 개발 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Behavior Tree",
            "NavMesh",
            "Game AI",
            "Unreal Engine 5"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "크래프톤 로스트아크 서버 아키텍처셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 서버 아키텍처셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Behavior Tree, NavMesh 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Game AI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 358,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[로스트아크 Slate UI 파트] 게임 개발 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Python",
            "Assembly",
            "Anti-Cheat",
            "Kernel Driver"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "크래프톤 로스트아크 Slate UI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 Slate UI 파트 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Python, Assembly 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Anti-Cheat 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 359,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[로스트아크 엔진 최적화팀] 게임 개발 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 2D",
            "Spine 2D",
            "Addressables",
            "FMOD"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "크래프톤 로스트아크 엔진 최적화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 엔진 최적화팀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C#, Unity 2D, Spine 2D 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Addressables 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 360,
        "companyName": "크래프톤",
        "companyLogo": "https://www.google.com/s2/favicons?domain=krafton.com&sz=128",
        "title": "[로스트아크 멀티콘솔 파트] 게임 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "Chaos Physics",
            "Control Rig",
            "Niagara VFX"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "크래프톤 로스트아크 멀티콘솔 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 멀티콘솔 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C++, Unreal Engine 5, Chaos Physics 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Control Rig 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 361,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[붉은사막 자체엔진 파트] 게임 개발 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "HLSL",
            "DirectX 12",
            "PhysX"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "스마일게이트 붉은사막 자체엔진 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 자체엔진 파트 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, HLSL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectX 12 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 362,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[붉은사막 물리 시뮬레이션셀] 게임 개발 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 3D",
            "Shader Graph",
            "Universal Render Pipeline",
            "DOTS"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "스마일게이트 붉은사막 물리 시뮬레이션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 물리 시뮬레이션셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity 3D, Shader Graph 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Universal Render Pipeline 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 363,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[붉은사막 3D 그래픽스 파트] 게임 개발 리드 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Custom Game Engine",
            "DirectX 12",
            "Vulkan",
            "RenderDoc"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "스마일게이트 붉은사막 3D 그래픽스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 3D 그래픽스 파트 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Custom Game Engine, DirectX 12 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vulkan 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 364,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[붉은사막 AI NPC 파트] 게임 개발 전문가",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Java",
            "Netty",
            "Redis",
            "MySQL",
            "IOCP Server"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "스마일게이트 붉은사막 AI NPC 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 AI NPC 파트 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Java, Netty 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 365,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[검은사막 모바일 클라이언트팀] 게임 개발 코어 개발자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "CommonUI",
            "UMG",
            "Slate"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "스마일게이트 검은사막 모바일 클라이언트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "검은사막 모바일 클라이언트팀 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, CommonUI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UMG 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 366,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[세븐나이츠 RE:BOOT 개발팀] 게임 개발 수석 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity",
            "Photon",
            "UniTask",
            "Memory Profiler"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "스마일게이트 세븐나이츠 RE:BOOT 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "세븐나이츠 RE:BOOT 개발팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity, Photon 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UniTask 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 367,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[넷마블 Monster Studio 셀] 게임 개발 테크 리드",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Behavior Tree",
            "NavMesh",
            "Game AI",
            "Unreal Engine 5"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "스마일게이트 넷마블 Monster Studio 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 Monster Studio 셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Behavior Tree, NavMesh 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Game AI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 368,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[넷마블 언리얼 5 액션팀] 게임 개발 담당자",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Python",
            "Assembly",
            "Anti-Cheat",
            "Kernel Driver"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "스마일게이트 넷마블 언리얼 5 액션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 언리얼 5 액션팀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Python, Assembly 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Anti-Cheat 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 369,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[넷마블 글로벌 캐주얼 게임셀] 게임 개발 아키텍트",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 2D",
            "Spine 2D",
            "Addressables",
            "FMOD"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "스마일게이트 넷마블 글로벌 캐주얼 게임셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 글로벌 캐주얼 게임셀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C#, Unity 2D, Spine 2D 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Addressables 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 370,
        "companyName": "스마일게이트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=smilegate.com&sz=128",
        "title": "[넷마블 서버 최적화 파트] 게임 개발 플랫폼 엔지니어",
        "location": "경기",
        "district": "성남시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "Chaos Physics",
            "Control Rig",
            "Niagara VFX"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "스마일게이트 넷마블 서버 최적화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 서버 최적화 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C++, Unreal Engine 5, Chaos Physics 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Control Rig 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 371,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[쿠키런: 오븐브레이크 클라이언트] 게임 개발 엔지니어",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "HLSL",
            "DirectX 12",
            "PhysX"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "펄어비스 쿠키런: 오븐브레이크 클라이언트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런: 오븐브레이크 클라이언트 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, HLSL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectX 12 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 372,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[쿠키런: 킹덤 엔진팀] 게임 개발 개발자",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 3D",
            "Shader Graph",
            "Universal Render Pipeline",
            "DOTS"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "펄어비스 쿠키런: 킹덤 엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런: 킹덤 엔진팀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity 3D, Shader Graph 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Universal Render Pipeline 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 373,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[쿠키런 실시간 동기화셀] 게임 개발 리드 엔지니어",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Custom Game Engine",
            "DirectX 12",
            "Vulkan",
            "RenderDoc"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "펄어비스 쿠키런 실시간 동기화셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런 실시간 동기화셀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Custom Game Engine, DirectX 12 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vulkan 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 374,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[데브시스터즈 3D 그래픽스 파트] 게임 개발 전문가",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Java",
            "Netty",
            "Redis",
            "MySQL",
            "IOCP Server"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "펄어비스 데브시스터즈 3D 그래픽스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "데브시스터즈 3D 그래픽스 파트 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Java, Netty 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 375,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[데브시스터즈 캐주얼 UX셀] 게임 개발 코어 개발자",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "CommonUI",
            "UMG",
            "Slate"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "펄어비스 데브시스터즈 캐주얼 UX셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "데브시스터즈 캐주얼 UX셀 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, CommonUI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UMG 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 376,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[PUBG 슈팅 액션팀] 게임 개발 수석 엔지니어",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity",
            "Photon",
            "UniTask",
            "Memory Profiler"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "펄어비스 PUBG 슈팅 액션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 슈팅 액션팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity, Photon 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UniTask 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 377,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[PUBG 차세대 그래픽스셀] 게임 개발 테크 리드",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Behavior Tree",
            "NavMesh",
            "Game AI",
            "Unreal Engine 5"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "펄어비스 PUBG 차세대 그래픽스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 차세대 그래픽스셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Behavior Tree, NavMesh 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Game AI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 378,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[PUBG 렌더링 파이프라인팀] 게임 개발 담당자",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Python",
            "Assembly",
            "Anti-Cheat",
            "Kernel Driver"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "펄어비스 PUBG 렌더링 파이프라인팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 렌더링 파이프라인팀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Python, Assembly 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Anti-Cheat 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 379,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[PUBG 안티치트 서버팀] 게임 개발 아키텍트",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 2D",
            "Spine 2D",
            "Addressables",
            "FMOD"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "펄어비스 PUBG 안티치트 서버팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG 안티치트 서버팀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C#, Unity 2D, Spine 2D 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Addressables 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 380,
        "companyName": "펄어비스",
        "companyLogo": "https://www.google.com/s2/favicons?domain=pearlabyss.com&sz=128",
        "title": "[PUBG UI/UX 클라이언트 파트] 게임 개발 플랫폼 엔지니어",
        "location": "경기",
        "district": "안양시",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "Chaos Physics",
            "Control Rig",
            "Niagara VFX"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "펄어비스 PUBG UI/UX 클라이언트 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "PUBG UI/UX 클라이언트 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C++, Unreal Engine 5, Chaos Physics 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Control Rig 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 381,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[로스트아크 레이드 전투팀] 게임 개발 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "HLSL",
            "DirectX 12",
            "PhysX"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넷마블 로스트아크 레이드 전투팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 레이드 전투팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, HLSL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectX 12 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 382,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[로스트아크 서버 아키텍처셀] 게임 개발 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 3D",
            "Shader Graph",
            "Universal Render Pipeline",
            "DOTS"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넷마블 로스트아크 서버 아키텍처셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 서버 아키텍처셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity 3D, Shader Graph 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Universal Render Pipeline 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 383,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[로스트아크 Slate UI 파트] 게임 개발 리드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Custom Game Engine",
            "DirectX 12",
            "Vulkan",
            "RenderDoc"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넷마블 로스트아크 Slate UI 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 Slate UI 파트 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Custom Game Engine, DirectX 12 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vulkan 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 384,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[로스트아크 엔진 최적화팀] 게임 개발 전문가",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Java",
            "Netty",
            "Redis",
            "MySQL",
            "IOCP Server"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넷마블 로스트아크 엔진 최적화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 엔진 최적화팀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Java, Netty 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 385,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[로스트아크 멀티콘솔 파트] 게임 개발 코어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "CommonUI",
            "UMG",
            "Slate"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넷마블 로스트아크 멀티콘솔 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "로스트아크 멀티콘솔 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, CommonUI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UMG 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 386,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[붉은사막 자체엔진 파트] 게임 개발 수석 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity",
            "Photon",
            "UniTask",
            "Memory Profiler"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넷마블 붉은사막 자체엔진 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 자체엔진 파트 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity, Photon 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UniTask 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 387,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[붉은사막 물리 시뮬레이션셀] 게임 개발 테크 리드",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Behavior Tree",
            "NavMesh",
            "Game AI",
            "Unreal Engine 5"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넷마블 붉은사막 물리 시뮬레이션셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 물리 시뮬레이션셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Behavior Tree, NavMesh 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Game AI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 388,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[붉은사막 3D 그래픽스 파트] 게임 개발 담당자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Python",
            "Assembly",
            "Anti-Cheat",
            "Kernel Driver"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "넷마블 붉은사막 3D 그래픽스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 3D 그래픽스 파트 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Python, Assembly 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Anti-Cheat 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 389,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[붉은사막 AI NPC 파트] 게임 개발 아키텍트",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 2D",
            "Spine 2D",
            "Addressables",
            "FMOD"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "넷마블 붉은사막 AI NPC 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "붉은사막 AI NPC 파트 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C#, Unity 2D, Spine 2D 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Addressables 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 390,
        "companyName": "넷마블",
        "companyLogo": "https://www.google.com/s2/favicons?domain=netmarble.com&sz=128",
        "title": "[검은사막 모바일 클라이언트팀] 게임 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "Chaos Physics",
            "Control Rig",
            "Niagara VFX"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "넷마블 검은사막 모바일 클라이언트팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "검은사막 모바일 클라이언트팀 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C++, Unreal Engine 5, Chaos Physics 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Control Rig 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 391,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[세븐나이츠 RE:BOOT 개발팀] 게임 개발 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "HLSL",
            "DirectX 12",
            "PhysX"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "데브시스터즈 세븐나이츠 RE:BOOT 개발팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "세븐나이츠 RE:BOOT 개발팀 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, HLSL 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "DirectX 12 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 392,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[넷마블 Monster Studio 셀] 게임 개발 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 3D",
            "Shader Graph",
            "Universal Render Pipeline",
            "DOTS"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "데브시스터즈 넷마블 Monster Studio 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 Monster Studio 셀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity 3D, Shader Graph 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Universal Render Pipeline 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 393,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[넷마블 언리얼 5 액션팀] 게임 개발 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Custom Game Engine",
            "DirectX 12",
            "Vulkan",
            "RenderDoc"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "데브시스터즈 넷마블 언리얼 5 액션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 언리얼 5 액션팀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Custom Game Engine, DirectX 12 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Vulkan 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 394,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[넷마블 글로벌 캐주얼 게임셀] 게임 개발 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Java",
            "Netty",
            "Redis",
            "MySQL",
            "IOCP Server"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "데브시스터즈 넷마블 글로벌 캐주얼 게임셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 글로벌 캐주얼 게임셀 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Java, Netty 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Redis 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 395,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[넷마블 서버 최적화 파트] 게임 개발 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "CommonUI",
            "UMG",
            "Slate"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "데브시스터즈 넷마블 서버 최적화 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "넷마블 서버 최적화 파트 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C++, Unreal Engine 5, CommonUI 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UMG 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 396,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[쿠키런: 오븐브레이크 클라이언트] 게임 개발 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity",
            "Photon",
            "UniTask",
            "Memory Profiler"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "데브시스터즈 쿠키런: 오븐브레이크 클라이언트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런: 오븐브레이크 클라이언트 소속으로 Unreal Engine 5 기반 대규모 실시간 슈팅 & 액션 게임 클라이언트 로직 구현",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀 및 관련 코어 시스템 유지보수",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C#, Unity, Photon 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "UniTask 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 397,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[쿠키런: 킹덤 엔진팀] 게임 개발 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Behavior Tree",
            "NavMesh",
            "Game AI",
            "Unreal Engine 5"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "데브시스터즈 쿠키런: 킹덤 엔진팀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런: 킹덤 엔진팀 소속으로 초당 수천 건의 액션 패킷을 처리하는 IOCP 기반 고성능 C++ 게임 서버 개발",
            "HLSL 커스텀 셰이더 제작 및 RenderDoc을 활용한 GPU 프레임 드롭 타격 지점 프로파일링 및 관련 코어 시스템 유지보수",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "C++, Behavior Tree, NavMesh 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Game AI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 398,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[쿠키런 실시간 동기화셀] 게임 개발 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Python",
            "Assembly",
            "Anti-Cheat",
            "Kernel Driver"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "데브시스터즈 쿠키런 실시간 동기화셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "쿠키런 실시간 동기화셀 소속으로 CommonUI 및 Slate 파이프라인을 활용한 PC/Console Cross-Platform UI 인터페이스 제작",
            "NavMesh 및 Behavior Tree 구조를 활용한 고도화된 적 Monster AI 패턴 설계 및 관련 코어 시스템 유지보수",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "C++, Python, Assembly 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Anti-Cheat 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 399,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[데브시스터즈 3D 그래픽스 파트] 게임 개발 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C#",
            "Unity 2D",
            "Spine 2D",
            "Addressables",
            "FMOD"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "데브시스터즈 데브시스터즈 3D 그래픽스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "데브시스터즈 3D 그래픽스 파트 소속으로 메모리 누수 방지 및 안드로이드/iOS 유니티 모바일 빌드 용량 감축 튜닝",
            "Spine 2D 및 Niagara VFX 시스템 연동을 통한 화려한 스킬 및 연출 효과 구현 및 관련 코어 시스템 유지보수",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "C#, Unity 2D, Spine 2D 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Addressables 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 400,
        "companyName": "데브시스터즈",
        "companyLogo": "https://www.google.com/s2/favicons?domain=devsisters.com&sz=128",
        "title": "[데브시스터즈 캐주얼 UX셀] 게임 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "게임 개발",
        "techStack": [
            "C++",
            "Unreal Engine 5",
            "Chaos Physics",
            "Control Rig",
            "Niagara VFX"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "데브시스터즈 데브시스터즈 캐주얼 UX셀에서 혁신적인 서비스를 함께 만들어갈 우수한 게임 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "데브시스터즈 캐주얼 UX셀 소속으로 게임 내 악성 메모리 조작 및 헥 방지를 위한 보안 안티치트(Anti-Cheat) 파이프라인 구축",
            "Chaos Physics 및 Ragdoll 물리 시뮬레이션 시스템 최적화 적용 및 관련 코어 시스템 유지보수",
            "자체 개발 3D 게임 엔진 최적화 및 DirectX 12/Vulkan 그래픽 파이프라인 커스텀를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "게임 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "C++, Unreal Engine 5, Chaos Physics 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Control Rig 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 401,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[당근 iOS 중고거래팀] 앱 개발 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "Combine",
            "MVVM-C",
            "Tuist"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근마켓 당근 iOS 중고거래팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 iOS 중고거래팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, SwiftUI, Combine 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MVVM-C 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 402,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[당근 Android 동네생활셀] 앱 개발 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "Coroutines",
            "Hilt",
            "Clean Architecture"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근마켓 당근 Android 동네생활셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 Android 동네생활셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, Coroutines 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hilt 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 403,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[당근 Flutter 모바일팀] 앱 개발 리드 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Provider",
            "Riverpod",
            "Bloc"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근마켓 당근 Flutter 모바일팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 Flutter 모바일팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Flutter, Dart, Provider 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Riverpod 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 404,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[당근 로컬 커머스 앱 파트] 앱 개발 전문가",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "React Native",
            "TypeScript",
            "React Navigation",
            "Reanimated",
            "Redux"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근마켓 당근 로컬 커머스 앱 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 커머스 앱 파트 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, TypeScript, React Navigation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Reanimated 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 405,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[당근 모바일 디자인시스템실] 앱 개발 코어 개발자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "UIKit",
            "RxSwift",
            "VIPER",
            "Alamofire"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근마켓 당근 모바일 디자인시스템실에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 모바일 디자인시스템실 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, UIKit, RxSwift 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "VIPER 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 406,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[토스뱅크 iOS 코어뱅킹팀] 앱 개발 수석 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Android SDK",
            "RxJava",
            "Dagger2",
            "Room"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근마켓 토스뱅크 iOS 코어뱅킹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 iOS 코어뱅킹팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Android SDK, RxJava 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dagger2 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 407,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[토스뱅크 Android 여신/수신셀] 앱 개발 테크 리드",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "WebRTC",
            "Metal",
            "CoreData"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근마켓 토스뱅크 Android 여신/수신셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 Android 여신/수신셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Swift, SwiftUI, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Metal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 408,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[토스뱅크 모바일 보안셀] 앱 개발 담당자",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "C++ NDK",
            "WebRTC",
            "OpenGL ES"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "당근마켓 토스뱅크 모바일 보안셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 모바일 보안셀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, C++ NDK 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "WebRTC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 409,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[토스뱅크 모바일 아키텍처팀] 앱 개발 아키텍트",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Freezed",
            "Dio",
            "GraphQL"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "당근마켓 토스뱅크 모바일 아키텍처팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 모바일 아키텍처팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Flutter, Dart, Freezed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 410,
        "companyName": "당근마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        "title": "[토스뱅크 UI 반응형 파트] 앱 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "구로구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "Kotlin",
            "KMP (Kotlin Multiplatform)",
            "SwiftUI",
            "Compose"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "당근마켓 토스뱅크 UI 반응형 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 UI 반응형 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Swift, Kotlin, KMP (Kotlin Multiplatform) 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SwiftUI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 411,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[뱅크샐러드 iOS 자산관리팀] 앱 개발 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "Combine",
            "MVVM-C",
            "Tuist"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "토스뱅크 뱅크샐러드 iOS 자산관리팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 iOS 자산관리팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, SwiftUI, Combine 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MVVM-C 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 412,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[뱅크샐러드 Android 금융지표셀] 앱 개발 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "Coroutines",
            "Hilt",
            "Clean Architecture"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "토스뱅크 뱅크샐러드 Android 금융지표셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 Android 금융지표셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, Coroutines 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hilt 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 413,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[뱅크샐러드 모바일 성능최적화팀] 앱 개발 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Provider",
            "Riverpod",
            "Bloc"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "토스뱅크 뱅크샐러드 모바일 성능최적화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 모바일 성능최적화팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Flutter, Dart, Provider 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Riverpod 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 414,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[뱅크샐러드 하이브리드 앱 파트] 앱 개발 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "React Native",
            "TypeScript",
            "React Navigation",
            "Reanimated",
            "Redux"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "토스뱅크 뱅크샐러드 하이브리드 앱 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 하이브리드 앱 파트 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, TypeScript, React Navigation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Reanimated 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 415,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[뱅크샐러드 데이터비주얼 모바일] 앱 개발 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "UIKit",
            "RxSwift",
            "VIPER",
            "Alamofire"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "토스뱅크 뱅크샐러드 데이터비주얼 모바일에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 데이터비주얼 모바일 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, UIKit, RxSwift 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "VIPER 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 416,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[아자르(Azar) iOS 비디오팀] 앱 개발 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Android SDK",
            "RxJava",
            "Dagger2",
            "Room"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "토스뱅크 아자르(Azar) iOS 비디오팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "아자르(Azar) iOS 비디오팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Android SDK, RxJava 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dagger2 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 417,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[아자르 Android RTC엔진셀] 앱 개발 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "WebRTC",
            "Metal",
            "CoreData"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "토스뱅크 아자르 Android RTC엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "아자르 Android RTC엔진셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Swift, SwiftUI, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Metal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 418,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[하이퍼커넥트 모바일 AI비전팀] 앱 개발 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "C++ NDK",
            "WebRTC",
            "OpenGL ES"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "토스뱅크 하이퍼커넥트 모바일 AI비전팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 모바일 AI비전팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, C++ NDK 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "WebRTC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 419,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[하이퍼커넥트 Flutter 글로벌팀] 앱 개발 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Freezed",
            "Dio",
            "GraphQL"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "토스뱅크 하이퍼커넥트 Flutter 글로벌팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 Flutter 글로벌팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Flutter, Dart, Freezed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 420,
        "companyName": "토스뱅크",
        "companyLogo": "https://www.google.com/s2/favicons?domain=tossbank.com&sz=128",
        "title": "[하이퍼커넥트 모바일 렌더링 파트] 앱 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "Kotlin",
            "KMP (Kotlin Multiplatform)",
            "SwiftUI",
            "Compose"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "토스뱅크 하이퍼커넥트 모바일 렌더링 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 모바일 렌더링 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Swift, Kotlin, KMP (Kotlin Multiplatform) 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SwiftUI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 421,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[29CM iOS 커머스 파트] 앱 개발 엔지니어",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "Combine",
            "MVVM-C",
            "Tuist"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뱅크샐러드 29CM iOS 커머스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM iOS 커머스 파트 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, SwiftUI, Combine 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MVVM-C 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 422,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[29CM Android 스토어셀] 앱 개발 개발자",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "Coroutines",
            "Hilt",
            "Clean Architecture"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뱅크샐러드 29CM Android 스토어셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM Android 스토어셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, Coroutines 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hilt 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 423,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[29CM React Native 모바일팀] 앱 개발 리드 엔지니어",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Provider",
            "Riverpod",
            "Bloc"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뱅크샐러드 29CM React Native 모바일팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM React Native 모바일팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Flutter, Dart, Provider 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Riverpod 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 424,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[29CM 모바일 UX 모션팀] 앱 개발 전문가",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "React Native",
            "TypeScript",
            "React Navigation",
            "Reanimated",
            "Redux"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뱅크샐러드 29CM 모바일 UX 모션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM 모바일 UX 모션팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, TypeScript, React Navigation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Reanimated 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 425,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[29CM 모바일 앱결제 파트] 앱 개발 코어 개발자",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "UIKit",
            "RxSwift",
            "VIPER",
            "Alamofire"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뱅크샐러드 29CM 모바일 앱결제 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM 모바일 앱결제 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, UIKit, RxSwift 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "VIPER 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 426,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[당근 iOS 중고거래팀] 앱 개발 수석 엔지니어",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Android SDK",
            "RxJava",
            "Dagger2",
            "Room"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뱅크샐러드 당근 iOS 중고거래팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 iOS 중고거래팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Android SDK, RxJava 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dagger2 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 427,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[당근 Android 동네생활셀] 앱 개발 테크 리드",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "WebRTC",
            "Metal",
            "CoreData"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뱅크샐러드 당근 Android 동네생활셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 Android 동네생활셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Swift, SwiftUI, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Metal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 428,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[당근 Flutter 모바일팀] 앱 개발 담당자",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "C++ NDK",
            "WebRTC",
            "OpenGL ES"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "뱅크샐러드 당근 Flutter 모바일팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 Flutter 모바일팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, C++ NDK 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "WebRTC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 429,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[당근 로컬 커머스 앱 파트] 앱 개발 아키텍트",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Freezed",
            "Dio",
            "GraphQL"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "뱅크샐러드 당근 로컬 커머스 앱 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 로컬 커머스 앱 파트 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Flutter, Dart, Freezed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 430,
        "companyName": "뱅크샐러드",
        "companyLogo": "https://www.google.com/s2/favicons?domain=banksalad.com&sz=128",
        "title": "[당근 모바일 디자인시스템실] 앱 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "여의도",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "Kotlin",
            "KMP (Kotlin Multiplatform)",
            "SwiftUI",
            "Compose"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "뱅크샐러드 당근 모바일 디자인시스템실에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "당근 모바일 디자인시스템실 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Swift, Kotlin, KMP (Kotlin Multiplatform) 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SwiftUI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 431,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[토스뱅크 iOS 코어뱅킹팀] 앱 개발 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "Combine",
            "MVVM-C",
            "Tuist"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "하이퍼커넥트 토스뱅크 iOS 코어뱅킹팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 iOS 코어뱅킹팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, SwiftUI, Combine 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MVVM-C 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 432,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[토스뱅크 Android 여신/수신셀] 앱 개발 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "Coroutines",
            "Hilt",
            "Clean Architecture"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "하이퍼커넥트 토스뱅크 Android 여신/수신셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 Android 여신/수신셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, Coroutines 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hilt 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 433,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[토스뱅크 모바일 보안셀] 앱 개발 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Provider",
            "Riverpod",
            "Bloc"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "하이퍼커넥트 토스뱅크 모바일 보안셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 모바일 보안셀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Flutter, Dart, Provider 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Riverpod 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 434,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[토스뱅크 모바일 아키텍처팀] 앱 개발 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "React Native",
            "TypeScript",
            "React Navigation",
            "Reanimated",
            "Redux"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "하이퍼커넥트 토스뱅크 모바일 아키텍처팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 모바일 아키텍처팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, TypeScript, React Navigation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Reanimated 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 435,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[토스뱅크 UI 반응형 파트] 앱 개발 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "UIKit",
            "RxSwift",
            "VIPER",
            "Alamofire"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "하이퍼커넥트 토스뱅크 UI 반응형 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "토스뱅크 UI 반응형 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, UIKit, RxSwift 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "VIPER 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 436,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[뱅크샐러드 iOS 자산관리팀] 앱 개발 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Android SDK",
            "RxJava",
            "Dagger2",
            "Room"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "하이퍼커넥트 뱅크샐러드 iOS 자산관리팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 iOS 자산관리팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Android SDK, RxJava 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dagger2 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 437,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[뱅크샐러드 Android 금융지표셀] 앱 개발 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "WebRTC",
            "Metal",
            "CoreData"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "하이퍼커넥트 뱅크샐러드 Android 금융지표셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 Android 금융지표셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Swift, SwiftUI, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Metal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 438,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[뱅크샐러드 모바일 성능최적화팀] 앱 개발 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "C++ NDK",
            "WebRTC",
            "OpenGL ES"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "하이퍼커넥트 뱅크샐러드 모바일 성능최적화팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 모바일 성능최적화팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, C++ NDK 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "WebRTC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 439,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[뱅크샐러드 하이브리드 앱 파트] 앱 개발 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Freezed",
            "Dio",
            "GraphQL"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "하이퍼커넥트 뱅크샐러드 하이브리드 앱 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 하이브리드 앱 파트 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Flutter, Dart, Freezed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 440,
        "companyName": "하이퍼커넥트",
        "companyLogo": "https://www.google.com/s2/favicons?domain=hyperconnect.com&sz=128",
        "title": "[뱅크샐러드 데이터비주얼 모바일] 앱 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "Kotlin",
            "KMP (Kotlin Multiplatform)",
            "SwiftUI",
            "Compose"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "하이퍼커넥트 뱅크샐러드 데이터비주얼 모바일에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "뱅크샐러드 데이터비주얼 모바일 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Swift, Kotlin, KMP (Kotlin Multiplatform) 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SwiftUI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 441,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[아자르(Azar) iOS 비디오팀] 앱 개발 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "Combine",
            "MVVM-C",
            "Tuist"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "29CM(무신사) 아자르(Azar) iOS 비디오팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "아자르(Azar) iOS 비디오팀 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, SwiftUI, Combine 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "MVVM-C 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 442,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[아자르 Android RTC엔진셀] 앱 개발 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "Coroutines",
            "Hilt",
            "Clean Architecture"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "29CM(무신사) 아자르 Android RTC엔진셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "아자르 Android RTC엔진셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, Coroutines 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hilt 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 443,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[하이퍼커넥트 모바일 AI비전팀] 앱 개발 리드 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Provider",
            "Riverpod",
            "Bloc"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "29CM(무신사) 하이퍼커넥트 모바일 AI비전팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 모바일 AI비전팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Flutter, Dart, Provider 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Riverpod 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 444,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[하이퍼커넥트 Flutter 글로벌팀] 앱 개발 전문가",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "React Native",
            "TypeScript",
            "React Navigation",
            "Reanimated",
            "Redux"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "29CM(무신사) 하이퍼커넥트 Flutter 글로벌팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 Flutter 글로벌팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "React Native, TypeScript, React Navigation 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Reanimated 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 445,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[하이퍼커넥트 모바일 렌더링 파트] 앱 개발 코어 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "UIKit",
            "RxSwift",
            "VIPER",
            "Alamofire"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "29CM(무신사) 하이퍼커넥트 모바일 렌더링 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "하이퍼커넥트 모바일 렌더링 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Swift, UIKit, RxSwift 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "VIPER 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 446,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[29CM iOS 커머스 파트] 앱 개발 수석 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Android SDK",
            "RxJava",
            "Dagger2",
            "Room"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "29CM(무신사) 29CM iOS 커머스 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM iOS 커머스 파트 소속으로 SwiftUI 및 Jetpack Compose 기반 모던 반응형 앱 UI 레이아웃 설계",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축 및 관련 코어 시스템 유지보수",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Kotlin, Android SDK, RxJava 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dagger2 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 447,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[29CM Android 스토어셀] 앱 개발 테크 리드",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "SwiftUI",
            "WebRTC",
            "Metal",
            "CoreData"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "29CM(무신사) 29CM Android 스토어셀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM Android 스토어셀 소속으로 Tuist 모듈러 아키텍처 도입을 통해 앱 클린 아키텍처 설계 및 빌드 시간 50% 단축",
            "Flutter 크로스 플랫폼을 활용한 iOS & Android 단일 코드베이스 앱 전파 및 관련 코어 시스템 유지보수",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 4년 이상 보유하신 분",
            "Swift, SwiftUI, WebRTC 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Metal 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 448,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[29CM React Native 모바일팀] 앱 개발 담당자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Kotlin",
            "Jetpack Compose",
            "C++ NDK",
            "WebRTC",
            "OpenGL ES"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "29CM(무신사) 29CM React Native 모바일팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM React Native 모바일팀 소속으로 React Native 및 Reanimated 3를 이용한 60fps 고성능 애니메이션 UI 구현",
            "앱 메모리 누수 방지, ANR(Application Not Responding) 감축 및 앱 실행(Cold Start) 속도 개선 및 관련 코어 시스템 유지보수",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 5년 이상 보유하신 분",
            "Kotlin, Jetpack Compose, C++ NDK 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "WebRTC 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 449,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[29CM 모바일 UX 모션팀] 앱 개발 아키텍트",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Flutter",
            "Dart",
            "Freezed",
            "Dio",
            "GraphQL"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "29CM(무신사) 29CM 모바일 UX 모션팀에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM 모바일 UX 모션팀 소속으로 Biometric(지문/FaceID) 및 Secure Enclave 연동을 통한 안전한 금융 인증 구현",
            "Fastlane 및 GitHub Actions 기반 App Store & Play Store 자동 배포 자동화 파이프라인 구축 및 관련 코어 시스템 유지보수",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 2년 이상 보유하신 분",
            "Flutter, Dart, Freezed 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Dio 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 450,
        "companyName": "29CM(무신사)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=29cm.co.kr&sz=128",
        "title": "[29CM 모바일 앱결제 파트] 앱 개발 플랫폼 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "앱 개발",
        "techStack": [
            "Swift",
            "Kotlin",
            "KMP (Kotlin Multiplatform)",
            "SwiftUI",
            "Compose"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "29CM(무신사) 29CM 모바일 앱결제 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 앱 개발 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "29CM 모바일 앱결제 파트 소속으로 Kotlin Multiplatform(KMP)을 도입하여 모바일 비즈니스 로직 단일화 및 공통화",
            "SQLite / Room / CoreData 기반 로컬 캐시 레이어 구축 및 오프라인 모드 대응 및 관련 코어 시스템 유지보수",
            "WebRTC 및 Native C++ NDK 모듈 연동을 통한 실시간 고화질 영상 통화 기능 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "앱 개발 분야 관련 실무 경험 3년 이상 보유하신 분",
            "Swift, Kotlin, KMP (Kotlin Multiplatform) 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "SwiftUI 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 451,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[그린카 차량 관제 데이터팀] 데이터 분석 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Pandas",
            "BigQuery",
            "Tableau",
            "GA4"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "그린카 그린카 차량 관제 데이터팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 차량 관제 데이터팀 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Pandas 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 452,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[그린카 수요 예측 애널리틱스셀] 데이터 분석 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "PySpark",
            "Snowflake",
            "Amplitude",
            "Redshift"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "그린카 그린카 수요 예측 애널리틱스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 수요 예측 애널리틱스셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, PySpark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Snowflake 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 453,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[그린카 고객 LTV 분석 파트] 데이터 분석 리드 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "ggplot2",
            "Databricks",
            "PowerBI",
            "Statsmodels"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "그린카 그린카 고객 LTV 분석 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 고객 LTV 분석 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, R, ggplot2 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Databricks 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 454,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[그린카 요금 최적화 팀] 데이터 분석 전문가",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Airflow",
            "BigQuery",
            "Looker",
            "dbt"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "그린카 그린카 요금 최적화 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 요금 최적화 팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, Python, Airflow 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 455,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[그린카 데이터 파이프라인셀] 데이터 분석 코어 개발자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Scikit-Learn",
            "Presto",
            "Superset",
            "Mixpanel"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "그린카 그린카 데이터 파이프라인셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 데이터 파이프라인셀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Scikit-Learn 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Presto 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 456,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[11번가 커머스 데이터 파트] 데이터 분석 수석 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Athena",
            "AWS Glue",
            "Tableau",
            "Metabase"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "그린카 11번가 커머스 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 커머스 데이터 파트 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Athena 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS Glue 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 457,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[11번가 프로모션 A/B실험셀] 데이터 분석 테크 리드",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "ClickHouse",
            "Grafana",
            "GA4",
            "Dataform"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "그린카 11번가 프로모션 A/B실험셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 프로모션 A/B실험셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, Python, ClickHouse 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Grafana 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 458,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[11번가 고객 행동분석팀] 데이터 분석 담당자",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "Optimizely",
            "BigQuery",
            "Tableau",
            "Scipy"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "그린카 11번가 고객 행동분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 고객 행동분석팀 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, R, Optimizely 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 459,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[11번가 검색지표 애널리틱스] 데이터 분석 아키텍트",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "DuckDB",
            "Streamlit",
            "Plotly",
            "PostgreSQL"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "그린카 11번가 검색지표 애널리틱스에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 검색지표 애널리틱스 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, DuckDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Streamlit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 460,
        "companyName": "그린카",
        "companyLogo": "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128",
        "title": "[11번가 정산 데이터 파트] 데이터 분석 플랫폼 엔지니어",
        "location": "서울",
        "district": "성동구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Hadoop",
            "Hive",
            "Redshift",
            "Tableau"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "그린카 11번가 정산 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 정산 데이터 파트 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Hadoop 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hive 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 461,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[G마켓 빅데이터 분석실] 데이터 분석 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Pandas",
            "BigQuery",
            "Tableau",
            "GA4"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "11번가 G마켓 빅데이터 분석실에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 빅데이터 분석실 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Pandas 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 462,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[G마켓 구매 전환율(CVR)셀] 데이터 분석 개발자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "PySpark",
            "Snowflake",
            "Amplitude",
            "Redshift"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "11번가 G마켓 구매 전환율(CVR)셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 구매 전환율(CVR)셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, PySpark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Snowflake 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 463,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[G마켓 광고 데이터 파트] 데이터 분석 리드 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "ggplot2",
            "Databricks",
            "PowerBI",
            "Statsmodels"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "11번가 G마켓 광고 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 광고 데이터 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, R, ggplot2 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Databricks 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 464,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[G마켓 서치 지표팀] 데이터 분석 전문가",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Airflow",
            "BigQuery",
            "Looker",
            "dbt"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "11번가 G마켓 서치 지표팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 서치 지표팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, Python, Airflow 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 465,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[G마켓 고객 코호트 셀] 데이터 분석 코어 개발자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Scikit-Learn",
            "Presto",
            "Superset",
            "Mixpanel"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "11번가 G마켓 고객 코호트 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 고객 코호트 셀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Scikit-Learn 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Presto 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 466,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[롯데온 통합 데이터 애널리틱스] 데이터 분석 수석 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Athena",
            "AWS Glue",
            "Tableau",
            "Metabase"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "11번가 롯데온 통합 데이터 애널리틱스에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 통합 데이터 애널리틱스 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Athena 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS Glue 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 467,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[롯데온 유저 퍼널 분석팀] 데이터 분석 테크 리드",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "ClickHouse",
            "Grafana",
            "GA4",
            "Dataform"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "11번가 롯데온 유저 퍼널 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 유저 퍼널 분석팀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, Python, ClickHouse 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Grafana 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 468,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[롯데온 물류 지표 파트] 데이터 분석 담당자",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "Optimizely",
            "BigQuery",
            "Tableau",
            "Scipy"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "11번가 롯데온 물류 지표 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 물류 지표 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, R, Optimizely 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 469,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[롯데온 VIP Retention 셀] 데이터 분석 아키텍트",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "DuckDB",
            "Streamlit",
            "Plotly",
            "PostgreSQL"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "11번가 롯데온 VIP Retention 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 VIP Retention 셀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, DuckDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Streamlit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 470,
        "companyName": "11번가",
        "companyLogo": "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128",
        "title": "[롯데온 BI 대시보드 팀] 데이터 분석 플랫폼 엔지니어",
        "location": "서울",
        "district": "중구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Hadoop",
            "Hive",
            "Redshift",
            "Tableau"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "11번가 롯데온 BI 대시보드 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 BI 대시보드 팀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Hadoop 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hive 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 471,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[컬리 수요예측 데이터셀] 데이터 분석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Pandas",
            "BigQuery",
            "Tableau",
            "GA4"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "G마켓 컬리 수요예측 데이터셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 수요예측 데이터셀 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Pandas 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 472,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[컬리 신선식품 재고 분석팀] 데이터 분석 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "PySpark",
            "Snowflake",
            "Amplitude",
            "Redshift"
        ],
        "deadline": "2026-12-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "G마켓 컬리 신선식품 재고 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 신선식품 재고 분석팀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, PySpark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Snowflake 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 473,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[컬리 물류동선 데이터 파트] 데이터 분석 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "ggplot2",
            "Databricks",
            "PowerBI",
            "Statsmodels"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "G마켓 컬리 물류동선 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 물류동선 데이터 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, R, ggplot2 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Databricks 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 474,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[컬리 장바구니 전환팀] 데이터 분석 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Airflow",
            "BigQuery",
            "Looker",
            "dbt"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "G마켓 컬리 장바구니 전환팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 장바구니 전환팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, Python, Airflow 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 475,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[컬리 A/B 테스트 코어팀] 데이터 분석 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Scikit-Learn",
            "Presto",
            "Superset",
            "Mixpanel"
        ],
        "deadline": "2026-11-30",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "G마켓 컬리 A/B 테스트 코어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 A/B 테스트 코어팀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Scikit-Learn 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Presto 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 476,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[그린카 차량 관제 데이터팀] 데이터 분석 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Athena",
            "AWS Glue",
            "Tableau",
            "Metabase"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "G마켓 그린카 차량 관제 데이터팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 차량 관제 데이터팀 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Athena 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS Glue 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 477,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[그린카 수요 예측 애널리틱스셀] 데이터 분석 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "ClickHouse",
            "Grafana",
            "GA4",
            "Dataform"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "G마켓 그린카 수요 예측 애널리틱스셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 수요 예측 애널리틱스셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, Python, ClickHouse 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Grafana 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 478,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[그린카 고객 LTV 분석 파트] 데이터 분석 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "Optimizely",
            "BigQuery",
            "Tableau",
            "Scipy"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "G마켓 그린카 고객 LTV 분석 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 고객 LTV 분석 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, R, Optimizely 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 479,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[그린카 요금 최적화 팀] 데이터 분석 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "DuckDB",
            "Streamlit",
            "Plotly",
            "PostgreSQL"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "G마켓 그린카 요금 최적화 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 요금 최적화 팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, DuckDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Streamlit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 480,
        "companyName": "G마켓",
        "companyLogo": "https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=128",
        "title": "[그린카 데이터 파이프라인셀] 데이터 분석 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Hadoop",
            "Hive",
            "Redshift",
            "Tableau"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "G마켓 그린카 데이터 파이프라인셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "그린카 데이터 파이프라인셀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Hadoop 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hive 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 481,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[11번가 커머스 데이터 파트] 데이터 분석 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Pandas",
            "BigQuery",
            "Tableau",
            "GA4"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "롯데온 11번가 커머스 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 커머스 데이터 파트 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Pandas 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 482,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[11번가 프로모션 A/B실험셀] 데이터 분석 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "PySpark",
            "Snowflake",
            "Amplitude",
            "Redshift"
        ],
        "deadline": "상시 채용",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "롯데온 11번가 프로모션 A/B실험셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 프로모션 A/B실험셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, PySpark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Snowflake 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 483,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[11번가 고객 행동분석팀] 데이터 분석 리드 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "ggplot2",
            "Databricks",
            "PowerBI",
            "Statsmodels"
        ],
        "deadline": "2026-10-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "롯데온 11번가 고객 행동분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 고객 행동분석팀 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, R, ggplot2 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Databricks 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 484,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[11번가 검색지표 애널리틱스] 데이터 분석 전문가",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Airflow",
            "BigQuery",
            "Looker",
            "dbt"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "롯데온 11번가 검색지표 애널리틱스에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 검색지표 애널리틱스 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, Python, Airflow 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 485,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[11번가 정산 데이터 파트] 데이터 분석 코어 개발자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Scikit-Learn",
            "Presto",
            "Superset",
            "Mixpanel"
        ],
        "deadline": "채용 완료 시",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "롯데온 11번가 정산 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "11번가 정산 데이터 파트 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Scikit-Learn 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Presto 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 486,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[G마켓 빅데이터 분석실] 데이터 분석 수석 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Athena",
            "AWS Glue",
            "Tableau",
            "Metabase"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "롯데온 G마켓 빅데이터 분석실에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 빅데이터 분석실 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Athena 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS Glue 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 487,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[G마켓 구매 전환율(CVR)셀] 데이터 분석 테크 리드",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "ClickHouse",
            "Grafana",
            "GA4",
            "Dataform"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "롯데온 G마켓 구매 전환율(CVR)셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 구매 전환율(CVR)셀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, Python, ClickHouse 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Grafana 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 488,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[G마켓 광고 데이터 파트] 데이터 분석 담당자",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "Optimizely",
            "BigQuery",
            "Tableau",
            "Scipy"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "롯데온 G마켓 광고 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 광고 데이터 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, R, Optimizely 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 489,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[G마켓 서치 지표팀] 데이터 분석 아키텍트",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "DuckDB",
            "Streamlit",
            "Plotly",
            "PostgreSQL"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "롯데온 G마켓 서치 지표팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 서치 지표팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, DuckDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Streamlit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 490,
        "companyName": "롯데온",
        "companyLogo": "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128",
        "title": "[G마켓 고객 코호트 셀] 데이터 분석 플랫폼 엔지니어",
        "location": "서울",
        "district": "송파구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Hadoop",
            "Hive",
            "Redshift",
            "Tableau"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "롯데온 G마켓 고객 코호트 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "G마켓 고객 코호트 셀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Hadoop 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hive 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 491,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[롯데온 통합 데이터 애널리틱스] 데이터 분석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Pandas",
            "BigQuery",
            "Tableau",
            "GA4"
        ],
        "deadline": "2026-10-15",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "컬리(마켓컬리) 롯데온 통합 데이터 애널리틱스에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 통합 데이터 애널리틱스 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Pandas 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 492,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[롯데온 유저 퍼널 분석팀] 데이터 분석 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "PySpark",
            "Snowflake",
            "Amplitude",
            "Redshift"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "컬리(마켓컬리) 롯데온 유저 퍼널 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 유저 퍼널 분석팀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, PySpark 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Snowflake 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 493,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[롯데온 물류 지표 파트] 데이터 분석 리드 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "ggplot2",
            "Databricks",
            "PowerBI",
            "Statsmodels"
        ],
        "deadline": "2026-12-31",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "컬리(마켓컬리) 롯데온 물류 지표 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 물류 지표 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, R, ggplot2 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Databricks 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 494,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[롯데온 VIP Retention 셀] 데이터 분석 전문가",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Airflow",
            "BigQuery",
            "Looker",
            "dbt"
        ],
        "deadline": "상시 채용",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "컬리(마켓컬리) 롯데온 VIP Retention 셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 VIP Retention 셀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, Python, Airflow 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 495,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[롯데온 BI 대시보드 팀] 데이터 분석 코어 개발자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Scikit-Learn",
            "Presto",
            "Superset",
            "Mixpanel"
        ],
        "deadline": "2026-10-31",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "컬리(마켓컬리) 롯데온 BI 대시보드 팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "롯데온 BI 대시보드 팀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, Scikit-Learn 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Presto 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 496,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[컬리 수요예측 데이터셀] 데이터 분석 수석 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Athena",
            "AWS Glue",
            "Tableau",
            "Metabase"
        ],
        "deadline": "2026-12-15",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "컬리(마켓컬리) 컬리 수요예측 데이터셀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 수요예측 데이터셀 소속으로 SQL 기반 억 단위 빅데이터 정밀 조율 및 비즈니스 핵심 KPI 대시보드 구축",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출 및 관련 코어 시스템 유지보수",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Athena 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "AWS Glue 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 497,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[컬리 신선식품 재고 분석팀] 데이터 분석 테크 리드",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "ClickHouse",
            "Grafana",
            "GA4",
            "Dataform"
        ],
        "deadline": "채용 완료 시",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "컬리(마켓컬리) 컬리 신선식품 재고 분석팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 신선식품 재고 분석팀 소속으로 구매 유저 퍼널(Funnel) 분석 및 코호트(Cohort) 이탈율 감소 전략 수립",
            "Airflow & dbt 기반 데이터 웨어하우스(BigQuery/Snowflake) 데이터 마트 구축 및 관련 코어 시스템 유지보수",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 4년 이상 보유하신 분",
            "SQL, Python, ClickHouse 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Grafana 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 498,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[컬리 물류동선 데이터 파트] 데이터 분석 담당자",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "R",
            "Optimizely",
            "BigQuery",
            "Tableau",
            "Scipy"
        ],
        "deadline": "2026-10-15",
        "experience": "경력 (3년 이상)",
        "employmentType": "정규직",
        "salary": "5,500 ~ 8,000만원",
        "description": "컬리(마켓컬리) 컬리 물류동선 데이터 파트에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 물류동선 데이터 파트 소속으로 물류 이동 동선 데이터 및 수요 예측 머신러닝 시계열 모델(Prophet/XGBoost) 분석",
            "고객 LTV(Life Time Value) 산출 및 RFM 모델링 기반 세그먼트 마케팅 추출 및 관련 코어 시스템 유지보수",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 5년 이상 보유하신 분",
            "SQL, R, Optimizely 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "BigQuery 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 499,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[컬리 장바구니 전환팀] 데이터 분석 아키텍트",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "DuckDB",
            "Streamlit",
            "Plotly",
            "PostgreSQL"
        ],
        "deadline": "2026-11-30",
        "experience": "경력 (7년 이상)",
        "employmentType": "정규직",
        "salary": "7,500 ~ 12,000만원",
        "description": "컬리(마켓컬리) 컬리 장바구니 전환팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 장바구니 전환팀 소속으로 Tableau 및 Looker 기반의 인터랙티브 경영진 데이터 리포팅 제작",
            "프로모션 가격 탄력성 분석 및 알고리즘 기반 가변 가격(Dynamic Pricing) 제안 및 관련 코어 시스템 유지보수",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 2년 이상 보유하신 분",
            "SQL, Python, DuckDB 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Streamlit 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    },
    {
        "id": 500,
        "companyName": "컬리(마켓컬리)",
        "companyLogo": "https://www.google.com/s2/favicons?domain=kurly.com&sz=128",
        "title": "[컬리 A/B 테스트 코어팀] 데이터 분석 플랫폼 엔지니어",
        "location": "서울",
        "district": "강남구",
        "jobCategory": "데이터 분석",
        "techStack": [
            "SQL",
            "Python",
            "Hadoop",
            "Hive",
            "Redshift",
            "Tableau"
        ],
        "deadline": "2026-12-31",
        "experience": "신입",
        "employmentType": "정규직",
        "salary": "회사 내규에 따름",
        "description": "컬리(마켓컬리) 컬리 A/B 테스트 코어팀에서 혁신적인 서비스를 함께 만들어갈 우수한 데이터 분석 인재를 모십니다.\n\n우리는 사용자의 삶을 더욱 가치 있게 변화시키는 기술을 끊임없이 연구하고 적용하고 있습니다. 뛰어난 동료들과 자유롭게 의사소통하며 기술적 성장을 이뤄낼 수 있는 환경을 제공합니다.",
        "responsibilities": [
            "컬리 A/B 테스트 코어팀 소속으로 검색어별 클릭률(CTR) 및 구매 전환율(CVR) 데이터 분석을 통한 검색 UX 개선",
            "유저 로그 파이프라인 설계 및 이벤드 트래킹 택소노미(Taxonomy) 수립 및 관련 코어 시스템 유지보수",
            "Optimizely / Amplitude 기반 A/B 테스트 실험 설계, 통계적 가설 검정 및 지표 산출를 통한 서비스 수준 협약(SLA) 개선"
        ],
        "requirements": [
            "데이터 분석 분야 관련 실무 경험 3년 이상 보유하신 분",
            "SQL, Python, Hadoop 기술 스택에 대한 철저한 원리 이해 및 실무 활용 능력을 갖추신 분",
            "복잡한 기술 문제를 논리적으로 분해하고 주도적으로 해결할 수 있는 능력이 있으신 분",
            "다양한 직군(기획, 디자인, 데이터 등)과 유연하고 원활하게 소통할 수 있으신 분"
        ],
        "preferredRequirements": [
            "Hive 기반 대규모 대용량 서비스 운영 및 배포 경험",
            "관련 분야 최신 기술 트렌드 수용 및 팀 내 모범 사례(Best Practice) 전파 경험",
            "단위 테스트(Unit Test) 및 자동화 CI/CD 환경 구축 경험 보유자",
            "대규모 서비스 트래픽 대응 및 코드 최적화 프로젝트 성공 사례 보유자"
        ],
        "benefits": [
            "최첨단 사양 개발 장비(MacBook Pro M3 Max 등) 및 모니터 전폭 지원",
            "시차 출퇴근제 (8시~11시 자율 출근) 및 유연한 근무 환경",
            "자기개발비(도서, 강의, 세미나, 자격증) 연간 300만원 지원",
            "무제한 구내 식당, 고급 스낵바 및 간식/음료 무료 제공",
            "본인 및 가족 종합 건강검진 지원 및 단체 상해보험 가입"
        ],
        "bookmarked": false
    }
]

export * from "./regions"
