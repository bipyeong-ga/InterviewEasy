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
        companyName: "넥슨코리아",
        companyLogo:
            "https://i.namu.wiki/i/bwHvn15_5PxWUjsyA62vEeDR-oIIaj8qBThQ2DQjoXLcwo5PAeU0thy81ntbFCG4wPu7DeVHXUn7z11hUHYmsQ.svg",
        title: "[프로젝트DC] 서버 프로그래머",
        location: "경기",
        district: "성남시",
        jobCategory: "게임 프로그래밍",
        techStack: ["C++", "UE5", "CommonUI"],
        deadline: "채용 완료 시",
        experience: "경력 무관",
        employmentType: "정규직",
        salary: "회사 내규에 따름",
        description: `빈딕투스: 디파잉 페이트는 마비노기 영웅전 IP를 활용하여 개발 중인 실사풍 중세 판타지 3D액션RPG 프로젝트입니다.

마비노기 시리즈와는 별개로 완전히 독립된 게임으로서, PC/콘솔 시장 진출을 목표로 하여 언리얼 엔진5를 기반으로 개발하고 있습니다.



저희가 만들고자 하는 게임은, 싱글 플레이를 바탕으로 다양한 캐릭터가 펼치는 고유의 액션 색깔과 재미를 추구하는 게임입니다.

멀티 플레이 기능은 취향에 따른 재미 요소인 게임, 밝지 않고 무겁지만 흥미진진한 이야기를 풀어가는 게임,

액션과 조작의 재미가 중요한 게임이며, 세계 최고의 액션 게임 대열에 서는 것을 목표하고 있습니다.



게임이란 것을 접하고 좋아하게 되면서, 언젠가 만들고 싶은 게임에 대한 꿈을 꾸신 적 있으신가요?

저희는 그 꿈을 기억하고, 오랜 시간이 걸렸지만 이제는 꿈을 이루기 위해 나아가고 있습니다.



그리고 그 꿈에 함께 하실 분들을 모집하고 있습니다.

`,
        responsibilities: [
            "UE5 를 이용한 컨텐츠 개발",
            "서버 통신을 통한 데이터 관리 및 조회 기능 구현",
            "UI 시스템 유지 보수",
            "기존 컨텐츠용 시스템 유지 보수",
        ],
        requirements: [
            "C++에 대한 깊은 이해와 능숙한 활용 능력을 갖추신 분",
            "자료구조, 알고리즘 등 컴퓨터 공학에 대한 탄탄한 기본 지식을 갖추신 분",
            "복잡한 기술 문제를 주도적으로 분석하고 해결하는 능력을 갖추신 분",
            "기획, 아트 등 다양한 직군과 원활하게 소통하고 협업 할 수 있는 능력을 갖추신 분",
        ],
        preferredRequirements: [
            "CommonUI를 활용한 게임패드 내비게이션을 직접 구현한 경험이 있으며, 관련 구조에 대한 이해도가 높으신 분",
            "UMG와 Slate의 차이를 명확히 이해하고, 요구사항에 맞는 Slate 위젯을 직접 구현하여 재사용 가능한 형태로 모듈화할 수 있으신 분",
            "UI 전반의 프레임워크를 직접 설계하고 실제 서비스에 적용해 본 경험이 있으신 분",
            "PC/콘솔 플랫폼 게임 출시 및 라이브 서비스 경험이 있으신 분",
            "액션 게임에 대한 관심이 많으신 분",
            "회사원' 이전에 '게이머'이신 분, '개발자' 이자 '게이머'이신 분",
        ],
        benefits: [],
        bookmarked: false,
    },
    {
        id: 2,
        companyName: "데브캣",
        companyLogo:
            "https://thumb.wikimedia.org/wikipedia/ko/thumb/0/02/%EB%8D%B0%EB%B8%8C%EC%BA%A3_%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4_%EB%A1%9C%EA%B3%A0.svg/1280px-%EB%8D%B0%EB%B8%8C%EC%BA%A3_%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4_%EB%A1%9C%EA%B3%A0.svg.png?utm_source=ko.wikipedia.org&utm_campaign=index&utm_content=thumbnail&_=20180703155744",
        title: "[마비노기 모바일] 게임 프레임워크 프로그래머",
        location: "서울",
        district: "강남구",
        jobCategory: "게임 프로그래밍",
        techStack: [],
        deadline: "채용 완료 시",
        experience: "경력",
        employmentType: "정규직",
        salary: "회사 내규에 따름",
        description: `
`,
        responsibilities: [
            "마비노기 모바일의 게임 기반 시스템 코드를 작성하고 유지보수합니다.",
            "시스템 개선 및 자동화를 통해 예측할 수 있는 작업 환경을 만들고 유지보수합니다.",
            "성능, 안정성, 작업 편의성에서의 기술적인 문제를 분석하고 비효율적인 부분을 개선합니다.",
        ],
        requirements: [
            "컴퓨터공학 전공 또는 그에 상응하는 개발 지식과 경험을 보유하신 분",
            "게임 클라이언트와 서버 구조, 그리고 네트워크 동기화에 대한 이해가 있는 분",
            "복잡한 기술적 문제를 분석하고 창의적인 해결 방안을 도출할 수 있는 분",
            "요구사항을 파악하고 이를 글로 명확하게 정리하여 개발에 반영할 수 있는 분",
            "기술적 문제 해결을 위한 건설적인 논의를 즐기시는 분",
            "본인이 이해한 바를 잘 설명할 수 있고, 이해하지 못한 것에 대해서는 적절하게 질문할 수 있는 커뮤니케이션 스킬을 가지신 분",
        ],
        preferredRequirements: [
            "마비노기 모바일을 즐겁게 플레이하고 있는 분",
            "프로젝트의 주요 엔지니어링 문제를 주도적으로 해결한 경험이 있는 분",
            "설계 리뷰, 코드 리뷰, 테스트 작성, 자동화를 통해 예측할 수 있는 개발을 지향하시는 분",
            "주어진 요구사항이 나온 배경 및 의도를 이해하고, 그에 맞춰 비용이나 효과 면에서 더 나은 해결책을 제안할 수 있는 분",
            "낯선 플랫폼이나 환경에 대한 두려움이 없고, 새롭게 알게 된 내용을 공유해 조직 전체의 발전에 긍정적인 영향을 미칠 수 있는 분",
            "CI/CD와 같은 DevOps 관련 개발 및 관리 경험이 있으신 분",
            "프로파일링을 통해 최적화 문제를 해결해 본 경험이 있으신 분",
            "안드로이드, iOS 유니티 네이티브 플러그인 개발 경험이 있으신 분",
        ],
        benefits: [],
        bookmarked: false,
    },
]

export * from "./regions"
