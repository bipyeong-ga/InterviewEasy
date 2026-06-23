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
        id: 1,
        companyName: "(주) 네오플",
        companyLogo: "https://www.neople.co.kr/images/neople/CI.png",
        title: "[프로젝트DC] 서버 프로그래머",
        location: "서울",
        district: "강남구",
        jobCategory: "Game Programming",
        techStack: ["C++", "Linux", "TCP/IP"],
        deadline: "채용 완료 시",
        experience: "경력 무관",
        employmentType: "정규직",
        salary: "회사 내규에 따름",
        description: "던전앤파이터 PC/모바일 프로젝트의 서버 개발을 담당할 프로그래머를 모집합니다. 대규모 온라인 게임 서버의 개발 및 운영 경험을 가진 분을 찾습니다.",
        responsibilities: [
            "던전앤파이터 PC/모바일 서버 개발 및 유지보수",
            "게임 서버 아키텍처 설계 및 성능 최적화",
            "대용량 트래픽 처리 시스템 개발",
            "서버 안정성 향상 및 장애 대응",
        ],
        requirements: [
            "C/C++ 프로그래밍 능숙자",
            "Linux 서버 개발 경험",
            "네트워크 프로그래밍 (TCP/IP) 이해",
            "RDBMS 사용 경험 (MySQL, Oracle 등)",
        ],
        preferredRequirements: [
            "온라인 게임 서버 개발 경험",
            "대용량 분산 시스템 개발 경험",
            "성능 최적화 경험",
        ],
        benefits: [
            "자유로운 복장",
            "유연 근무제",
            "사내 카페테리아 운영",
            "각종 건강검진 지원",
            "자기개발비 지원",
        ],
        bookmarked: false,
    },
    {
        id: 2,
        companyName: "카카오게임즈",
        companyLogo: "data:image/png;base64,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",
        title: "[게임개발] 클라이언트 프로그래머",
        location: "경기",
        district: "성남시",
        jobCategory: "Game Programming",
        techStack: ["Unity", "C#", "Photon"],
        deadline: "2026-07-31",
        experience: "경력 3년 이상",
        employmentType: "정규직",
        salary: "5,000만원 ~ 8,000만원",
        description: "카카오게임즈에서 모바일 게임 클라이언트 개발을 담당할 프로그래머를 모집합니다.",
        responsibilities: [
            "모바일 게임 클라이언트 개발",
            "Unity 엔진 기반 게임 콘텐츠 구현",
            "성능 최적화 및 메모리 관리",
            "기술 문서 작성",
        ],
        requirements: [
            "Unity 개발 경험 3년 이상",
            "C# 프로그래밍 능숙자",
            "모바일 게임 런칭 경험",
        ],
        preferredRequirements: [
            "Photon 네트워크 사용 경험",
            "대규모 프로젝트 경험",
        ],
        benefits: [
            "스톡옵션 제공",
            "원격근무 가능",
            "해외 컨퍼런스 지원",
        ],
        bookmarked: true,
    },
    {
        id: 3,
        companyName: "넥슨코리아",
        companyLogo: "https://i.namu.wiki/i/txJ15z-bQJoVywjFJfJ3Y-mJVSitjl9Jol9YkTBuqN9YnOIR19buPdaAOiYxcks8I3uFfMMaFDOLkFbuf6gCCg.svg",
        title: "웹 프론트엔드 개발자",
        location: "서울",
        district: "강동구",
        jobCategory: "Web Frontend",
        techStack: ["React", "TypeScript", "Next.js"],
        deadline: "2026-08-15",
        experience: "경력 2년 이상",
        employmentType: "정규직",
        salary: "4,500만원 ~ 7,000만원",
        description: "넥슨의 공식 웹사이트 및 게임 포털 서비스 개발을 담당할 프론트엔드 개발자를 모집합니다.",
        responsibilities: [
            "게임 포털 웹사이트 개발 및 유지보수",
            "UI/UX 개선 작업",
            "성능 최적화",
            "백엔드 API 연동",
        ],
        requirements: [
            "React 개발 경험 2년 이상",
            "TypeScript 사용 경험",
            "HTML/CSS에 대한 깊은 이해",
        ],
        preferredRequirements: [
            "Next.js 사용 경험",
            "게임 관련 서비스 개발 경험",
        ],
        benefits: [
            "자유로운 복장",
            "사내 헬스장",
            "식대 지원",
        ],
        bookmarked: false,
    },
    {
        id: 4,
        companyName: "크래프톤",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Krafton_Logo.png",
        title: "AI/ML 엔지니어",
        location: "서울",
        district: "서초구",
        jobCategory: "AI/ML",
        techStack: ["Python", "PyTorch", "TensorFlow"],
        deadline: "채용 완료 시",
        experience: "경력 4년 이상",
        employmentType: "정규직",
        salary: "8,000만원 ~ 1억 2,000만원",
        description: "배틀그라운드의 AI 봇 및 게임 내 AI 시스템 개발을 담당할 엔지니어를 모집합니다.",
        responsibilities: [
            "게임 AI 시스템 연구 및 개발",
            "머신러닝 모델 설계 및 구현",
            "AI 성능 최적화",
            "연구 결과 논문 발표",
        ],
        requirements: [
            "딥러닝/강화학습 분야 석사 이상",
            "PyTorch 또는 TensorFlow 사용 경험",
            "Python 프로그래밍 능숙",
        ],
        preferredRequirements: [
            "게임 AI 개발 경험",
            "관련 논문 발표 실적",
        ],
        benefits: [
            "연구비 지원",
            "논문 투고 지원",
            "해외 학회 참가 지원",
        ],
        bookmarked: false,
    },
    {
        id: 5,
        companyName: "엔씨소프트",
        companyLogo: "https://i.namu.wiki/i/0dE7VTIYOz_4g2XpjHnoAg2AEiK6RwjwvLTr1oXlZ3QEWlKO68YfE2FjpsdmLezUTz7DHLnnVmgyvO0PDzebJA.svg",
        title: "백엔드 개발자 (Java/Spring)",
        location: "경기",
        district: "성남시",
        jobCategory: "Backend",
        techStack: ["Java", "Spring Boot", "MySQL"],
        deadline: "2026-09-30",
        experience: "경력 3년 이상",
        employmentType: "정규직",
        salary: "5,500만원 ~ 8,500만원",
        description: "리니지 시리즈의 백엔드 서버 개발을 담당할 개발자를 모집합니다.",
        responsibilities: [
            "게임 서버 REST API 개발",
            "데이터베이스 설계 및 최적화",
            "대용량 트래픽 처리",
            "마이크로서비스 아키텍처 구현",
        ],
        requirements: [
            "Java/Spring Boot 경험 3년 이상",
            "MySQL 사용 경험",
            "REST API 설계 경험",
        ],
        preferredRequirements: [
            "MSA 경험",
            "Kafka/RabbitMQ 사용 경험",
            "AWS 경험",
        ],
        benefits: [
            "탄력 근무제",
            "사내 어린이집",
            "의료비 지원",
        ],
        bookmarked: true,
    },
    {
        id: 6,
        companyName: "스마일게이트",
        companyLogo: "https://i.namu.wiki/i/EIMRA8Wb3JgsS-2EQV2zNQ62JNWaQKnqGtL3na9hAIDPWhpJ88ikwhMeothBSpi70pPTfExsY921OmvlrUOXZg.svg",
        title: "DevOps 엔지니어",
        location: "서울",
        district: "강남구",
        jobCategory: "DevOps",
        techStack: ["Kubernetes", "Docker", "AWS"],
        deadline: "2026-07-15",
        experience: "경력 5년 이상",
        employmentType: "정규직",
        salary: "7,000만원 ~ 1억",
        description: "로스트아크, 에픽세븐 등 서비스의 인프라 구축 및 운영을 담당할 DevOps 엔지니어를 모집합니다.",
        responsibilities: [
            "클라우드 인프라 설계 및 구축",
            "CI/CD 파이프라인 구축",
            "컨테이너 오케스트레이션",
            "모니터링 시스템 구축",
        ],
        requirements: [
            "Kubernetes 운영 경험 3년 이상",
            "AWS 또는 GCP 경험",
            "Docker 사용 경험",
        ],
        preferredRequirements: [
            "Terraform 사용 경험",
            "대규모 서비스 인프라 운영 경험",
        ],
        benefits: [
            "자기개발비 지원",
            "재택근무 가능",
            "점심식사 제공",
        ],
        bookmarked: false,
    },
    {
        id: 7,
        companyName: "컴투스",
        companyLogo: "https://i.namu.wiki/i/dTbr8b3kWTYntSReVIHJf4LhuMaHcjOA97xi3bUD8Pnq6YU6x1OJaDTC8xLwY654MpOm03aeCh07J2uP6EQPig.svg",
        title: "iOS 앱 개발자",
        location: "서울",
        district: "마포구",
        jobCategory: "Mobile",
        techStack: ["Swift", "Xcode", "SwiftUI"],
        deadline: "채용 완료 시",
        experience: "경력 2년 이상",
        employmentType: "정규직",
        salary: "4,000만원 ~ 6,000만원",
        description: "서머너즈워 등 인기 모바일 게임의 iOS 앱 개발을 담당할 개발자를 모집합니다.",
        responsibilities: [
            "iOS 게임 앱 개발 및 유지보수",
            "신규 기능 개발",
            "앱 성능 최적화",
            "App Store 출시 관리",
        ],
        requirements: [
            "Swift 개발 경험 2년 이상",
            "iOS SDK 이해",
            "앱 출시 경험",
        ],
        preferredRequirements: [
            "게임 개발 경험",
            "SwiftUI 사용 경험",
        ],
        benefits: [
            "유연 근무제",
            "최신 장비 지원",
            "교육비 지원",
        ],
        bookmarked: false,
    },

    {
        id: 8,
        companyName: "라인게임즈",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/LINE_Games_CI.png",
        title: "QA 엔지니어",
        location: "서울",
        district: "중구",
        jobCategory: "QA",
        techStack: ["Selenium", "Python", "Appium"],
        deadline: "2026-07-20",
        experience: "경력 2년 이상",
        employmentType: "정규직",
        salary: "3,500만원 ~ 5,000만원",
        description: "라인게임즈의 모바일 및 PC 게임 QA 업무를 담당할 엔지니어를 모집합니다.",
        responsibilities: [
            "게임 품질 테스트 계획 및 실행",
            "자동화 테스트 스크립트 개발",
            "버그 리포트 및 추적",
            "회귀 테스트 수행",
        ],
        requirements: [
            "게임 QA 경험 2년 이상",
            "테스트 자동화 경험",
            "버그 추적 시스템 사용 경험",
        ],
        preferredRequirements: [
            "Selenium/Appium 사용 경험",
            "Python 스크립트 작성 가능",
        ],
        benefits: [
            "자유로운 복장",
            "게임 아이템 지원",
            "식대 지원",
        ],
        bookmarked: false,
    },
    {
        id: 9,
        companyName: "넷마블",
        companyLogo: "https://daoift3qrrnil.cloudfront.net/company_groups/images/000/014/924/original/netmarble_BI_%EC%84%B8%EB%A1%9C%ED%98%95.png?1698124061",
        title: "UI/UX 디자이너",
        location: "서울",
        district: "구로구",
        jobCategory: "Design",
        techStack: ["Figma", "Adobe XD", "Photoshop"],
        deadline: "2026-09-15",
        experience: "경력 3년 이상",
        employmentType: "정규직",
        salary: "4,000만원 ~ 6,500만원",
        description: "일곱개의 대죄, BTS World 등 인기 모바일 게임의 UI/UX 디자인을 담당할 디자이너를 모집합니다.",
        responsibilities: [
            "모바일 게임 UI/UX 디자인",
            "사용자 인터페이스 프로토타입 제작",
            "디자인 시스템 구축",
            "개발팀과 협업",
        ],
        requirements: [
            "게임 UI/UX 디자인 경험 3년 이상",
            "Figma 능숙",
            "포트폴리오 제출 필수",
        ],
        preferredRequirements: [
            "모바일 게임 런칭 경험",
            "애니메이션 디자인 경험",
        ],
        benefits: [
            "사내 디자인 워크샵",
            "도서 지원",
            "유연 근무제",
        ],
        bookmarked: false,
    },

]

export type District = { name: string; count: number }
export type Region = { name: string; count: number; districts: District[] }

export const REGIONS: Region[] = [
    {
        name: "서울", count: 64517,
        districts: [
            { name: "서울전체", count: 64517 },
            { name: "강남구", count: 20163 },
            { name: "강서구", count: 782 },
            { name: "관악구", count: 2197 },
            { name: "광진구", count: 1715 },
            { name: "구로구", count: 3485 },
            { name: "금천구", count: 4513 },
            { name: "노원구", count: 952 },
            { name: "도봉구", count: 487 },
            { name: "동대문구", count: 1432 },
            { name: "동작구", count: 1451 },
            { name: "마포구", count: 4520 },
            { name: "서대문구", count: 1181 },
            { name: "서초구", count: 8133 },
            { name: "성동구", count: 4274 },
            { name: "성북구", count: 829 },
            { name: "송파구", count: 5969 },
            { name: "양천구", count: 1232 },
            { name: "영등포구", count: 5245 },
            { name: "용산구", count: 2416 },
            { name: "은평구", count: 903 },
            { name: "종로구", count: 2230 },
            { name: "중구", count: 4059 },
            { name: "중랑구", count: 835 },
            { name: "강동구", count: 2066 },
            { name: "강북구", count: 760 },
        ],
    },
    {
        name: "경기", count: 54495,
        districts: [
            { name: "경기전체", count: 54495 },
            { name: "수원시", count: 8200 },
            { name: "성남시", count: 7100 },
            { name: "용인시", count: 6300 },
            { name: "고양시", count: 5400 },
            { name: "부천시", count: 4200 },
            { name: "안산시", count: 3800 },
            { name: "남양주시", count: 3100 },
            { name: "안양시", count: 2900 },
            { name: "화성시", count: 2600 },
            { name: "평택시", count: 2300 },
            { name: "의정부시", count: 1900 },
        ],
    },
    {
        name: "인천", count: 9452,
        districts: [
            { name: "인천전체", count: 9452 },
            { name: "남동구", count: 2800 },
            { name: "부평구", count: 2300 },
            { name: "연수구", count: 1900 },
            { name: "서구", count: 1500 },
            { name: "미추홀구", count: 952 },
        ],
    },
    {
        name: "부산", count: 14300,
        districts: [
            { name: "부산전체", count: 14300 },
            { name: "해운대구", count: 4100 },
            { name: "부산진구", count: 3200 },
            { name: "동래구", count: 2400 },
            { name: "남구", count: 1800 },
            { name: "북구", count: 1200 },
            { name: "사상구", count: 1600 },
        ],
    },
    {
        name: "대구", count: 8860,
        districts: [
            { name: "대구전체", count: 8860 },
            { name: "달서구", count: 2900 },
            { name: "수성구", count: 2200 },
            { name: "북구", count: 1600 },
            { name: "중구", count: 1300 },
            { name: "동구", count: 860 },
        ],
    },
    {
        name: "대전", count: 4985,
        districts: [
            { name: "대전전체", count: 4985 },
            { name: "유성구", count: 1800 },
            { name: "서구", count: 1500 },
            { name: "중구", count: 900 },
            { name: "동구", count: 785 },
        ],
    },
    {
        name: "광주", count: 3916,
        districts: [
            { name: "광주전체", count: 3916 },
            { name: "서구", count: 1200 },
            { name: "북구", count: 1000 },
            { name: "광산구", count: 900 },
            { name: "남구", count: 816 },
        ],
    },
    {
        name: "울산", count: 3556,
        districts: [
            { name: "울산전체", count: 3556 },
            { name: "남구", count: 1200 },
            { name: "울주군", count: 950 },
            { name: "북구", count: 800 },
            { name: "중구", count: 606 },
        ],
    },
    {
        name: "세종", count: 1593,
        districts: [
            { name: "세종전체", count: 1593 },
        ],
    },
    {
        name: "강원", count: 2040,
        districts: [
            { name: "강원전체", count: 2040 },
            { name: "춘천시", count: 700 },
            { name: "원주시", count: 850 },
            { name: "강릉시", count: 490 },
        ],
    },
    {
        name: "경남", count: 12814,
        districts: [
            { name: "경남전체", count: 12814 },
            { name: "창원시", count: 5200 },
            { name: "김해시", count: 2800 },
            { name: "진주시", count: 1900 },
            { name: "양산시", count: 1600 },
            { name: "거제시", count: 1314 },
        ],
    },
    {
        name: "경북", count: 9050,
        districts: [
            { name: "경북전체", count: 9050 },
            { name: "포항시", count: 3200 },
            { name: "구미시", count: 2900 },
            { name: "경주시", count: 1500 },
            { name: "안동시", count: 900 },
            { name: "김천시", count: 550 },
        ],
    },
    {
        name: "전남", count: 4044,
        districts: [
            { name: "전남전체", count: 4044 },
            { name: "여수시", count: 1400 },
            { name: "순천시", count: 1100 },
            { name: "목포시", count: 900 },
            { name: "광양시", count: 644 },
        ],
    },
    {
        name: "전북", count: 5254,
        districts: [
            { name: "전북전체", count: 5254 },
            { name: "전주시", count: 2500 },
            { name: "익산시", count: 1200 },
            { name: "군산시", count: 1000 },
            { name: "정읍시", count: 554 },
        ],
    },
]

export const JOB_CATEGORIES = [
    { name: "IT개발·데이터", sub: ["서버/백엔드", "프론트엔드", "풀스택", "Android", "iOS", "AI/ML", "데이터분석", "DevOps", "QA", "보안"] },
    { name: "게임개발", sub: ["게임클라이언트", "게임서버", "게임기획", "그래픽스"] },
    { name: "기획·전략", sub: ["서비스기획", "경영기획", "사업개발"] },
    { name: "마케팅·광고", sub: ["디지털마케팅", "브랜드마케팅", "콘텐츠마케팅"] },
    { name: "디자인", sub: ["UI/UX", "그래픽디자인", "영상/모션"] },
    { name: "경영·비즈니스", sub: ["인사/HR", "재무/회계", "법무"] },
]
