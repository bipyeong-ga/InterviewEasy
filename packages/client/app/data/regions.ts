import type { Post } from "./mockPosts"

export type District = {
    name: string
    count: number
}

export type Region = {
    name: string
    count: number
    districts: District[]
}

export interface BaseRegion {
    name: string
    districts: string[]
}

export const BASE_REGIONS: BaseRegion[] = [
    {
        name: "서울",
        districts: [
            "강남구",
            "강동구",
            "강북구",
            "강서구",
            "관악구",
            "광진구",
            "구로구",
            "금천구",
            "노원구",
            "도봉구",
            "동대문구",
            "동작구",
            "마포구",
            "서대문구",
            "서초구",
            "성동구",
            "성북구",
            "송파구",
            "양천구",
            "영등포구",
            "용산구",
            "은평구",
            "종로구",
            "중구",
            "중랑구",
        ],
    },
    {
        name: "경기",
        districts: [
            "수원시",
            "성남시",
            "용인시",
            "고양시",
            "부천시",
            "안산시",
            "남양주시",
            "안양시",
            "화성시",
            "평택시",
            "의정부시",
            "파주시",
            "시흥시",
            "김포시",
            "광명시",
            "광주시",
            "군포시",
            "이천시",
            "오산시",
            "하남시",
            "양주시",
            "구리시",
            "안성시",
            "포천시",
            "의왕시",
            "여주시",
        ],
    },
    {
        name: "인천",
        districts: [
            "남동구",
            "부평구",
            "연수구",
            "서구",
            "미추홀구",
            "계양구",
            "중구",
            "동구",
            "강화군",
            "옹진군",
        ],
    },
    {
        name: "부산",
        districts: [
            "해운대구",
            "부산진구",
            "동래구",
            "남구",
            "북구",
            "사상구",
            "사하구",
            "금정구",
            "연제구",
            "수영구",
            "기장군",
            "중구",
            "서구",
            "동구",
            "영도구",
            "강서구",
        ],
    },
    {
        name: "대구",
        districts: [
            "달서구",
            "수성구",
            "북구",
            "중구",
            "동구",
            "서구",
            "남구",
            "달성군",
            "군위군",
        ],
    },
    {
        name: "대전",
        districts: ["유성구", "서구", "중구", "동구", "대덕구"],
    },
    {
        name: "광주",
        districts: ["서구", "북구", "광산구", "남구", "동구"],
    },
    {
        name: "울산",
        districts: ["남구", "울주군", "북구", "중구", "동구"],
    },
    {
        name: "세종",
        districts: [],
    },
    {
        name: "강원",
        districts: ["춘천시", "원주시", "강릉시", "동해시", "속초시", "삼척시"],
    },
    {
        name: "경남",
        districts: [
            "창원시",
            "김해시",
            "진주시",
            "양산시",
            "거제시",
            "통영시",
            "사천시",
            "밀양시",
        ],
    },
    {
        name: "경북",
        districts: [
            "포항시",
            "구미시",
            "경주시",
            "안동시",
            "김천시",
            "영주시",
            "영천시",
            "상주시",
            "문경시",
            "경산시",
        ],
    },
    {
        name: "전남",
        districts: ["여수시", "순천시", "목포시", "광양시", "나주시"],
    },
    {
        name: "전북",
        districts: ["전주시", "익산시", "군산시", "정읍시", "남원시", "김제시"],
    },
]

/**
 * 공고 목록을 기반으로 지역별 및 세부 구/군별 공고 수를 실시간으로 자동 계산하여 반환합니다.
 */
export function getRegionsWithCounts(
    posts: Array<{ location?: string; district?: string }> = [],
): Region[] {
    return BASE_REGIONS.map((base) => {
        // 해당 지역 전체에 속한 공고 수
        const regionPosts = posts.filter(
            (p) => p.location && p.location.includes(base.name),
        )

        // 세부 구/군 목록 생성 (첫 번째 항목은 항상 '{지역}전체')
        const districts: District[] = [
            {
                name: `${base.name}전체`,
                count: regionPosts.length,
            },
        ]

        // 기본 등록된 구/군별 카운트 계산
        for (const distName of base.districts) {
            const count = regionPosts.filter(
                (p) => p.district && p.district.includes(distName),
            ).length
            districts.push({
                name: distName,
                count,
            })
        }

        // 공고 데이터에 기본 목록 외의 새로운 district가 있다면 동적으로 추가
        for (const p of regionPosts) {
            if (
                p.district &&
                !districts.some(
                    (d) => d.name === p.district || p.district.includes(d.name),
                )
            ) {
                const count = regionPosts.filter(
                    (item) => item.district === p.district,
                ).length
                districts.push({
                    name: p.district,
                    count,
                })
            }
        }

        return {
            name: base.name,
            count: regionPosts.length,
            districts,
        }
    })
}

export const REGIONS: Region[] = getRegionsWithCounts()

export const JOB_CATEGORIES = [
    {
        name: "IT개발·데이터",
        sub: [
            "서버/백엔드",
            "프론트엔드",
            "풀스택",
            "Android",
            "iOS",
            "AI/ML",
            "데이터분석",
            "DevOps",
            "QA",
            "보안",
        ],
    },
    {
        name: "게임개발",
        sub: ["게임클라이언트", "게임서버", "게임기획", "그래픽스"],
    },
    { name: "기획·전략", sub: ["서비스기획", "경영기획", "사업개발"] },
    {
        name: "마케팅·광고",
        sub: ["디지털마케팅", "브랜드마케팅", "콘텐츠마케팅"],
    },
    { name: "디자인", sub: ["UI/UX", "그래픽디자인", "영상/모션"] },
    { name: "경영·비즈니스", sub: ["인사/HR", "재무/회계", "법무"] },
]
