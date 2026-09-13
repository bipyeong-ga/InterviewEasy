import { MOCK_POSTS } from "../../client/app/data/mockPosts"
import pool from "../src/db"

async function seedPosts() {
    try {
        console.log("Starting seed sync...")
        await pool.query("BEGIN")

        const mockIds = MOCK_POSTS.map((p) => p.id).filter((id) => id !== undefined && id !== null)

        // 1. mockPosts에서 제거된 공고는 DB에서 삭제
        if (mockIds.length > 0) {
            const placeholders = mockIds.map((_, i) => `$${i + 1}`).join(", ")
            const deleteResult = await pool.query(
                `DELETE FROM posts WHERE id NOT IN (${placeholders}) RETURNING id`,
                mockIds
            )
            console.log(`Deleted ${deleteResult.rowCount} removed posts.`)
        } else {
            const deleteResult = await pool.query("DELETE FROM posts RETURNING id")
            console.log(`Deleted all ${deleteResult.rowCount} posts as mock list is empty.`)
        }

        // 2. mockPosts 데이터 UPSERT (신규 추가 및 기존 내용 업데이트)
        let upsertedCount = 0
        for (const post of MOCK_POSTS) {
            await pool.query(
                `INSERT INTO posts (
                    id, company_name, company_logo, title, location, district, job_category, 
                    tech_stack, deadline, experience, employment_type, salary, description, 
                    responsibilities, requirements, preferred_requirements, benefits
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
                ON CONFLICT (id) DO UPDATE SET
                    company_name = EXCLUDED.company_name,
                    company_logo = EXCLUDED.company_logo,
                    title = EXCLUDED.title,
                    location = EXCLUDED.location,
                    district = EXCLUDED.district,
                    job_category = EXCLUDED.job_category,
                    tech_stack = EXCLUDED.tech_stack,
                    deadline = EXCLUDED.deadline,
                    experience = EXCLUDED.experience,
                    employment_type = EXCLUDED.employment_type,
                    salary = EXCLUDED.salary,
                    description = EXCLUDED.description,
                    responsibilities = EXCLUDED.responsibilities,
                    requirements = EXCLUDED.requirements,
                    preferred_requirements = EXCLUDED.preferred_requirements,
                    benefits = EXCLUDED.benefits,
                    updated_at = CURRENT_TIMESTAMP`,
                [
                    post.id,
                    post.companyName,
                    post.companyLogo,
                    post.title,
                    post.location,
                    post.district,
                    post.jobCategory,
                    JSON.stringify(post.techStack || []),
                    post.deadline,
                    post.experience,
                    post.employmentType,
                    post.salary,
                    post.description,
                    JSON.stringify(post.responsibilities || []),
                    JSON.stringify(post.requirements || []),
                    JSON.stringify(post.preferredRequirements || []),
                    JSON.stringify(post.benefits || []),
                ]
            )
            upsertedCount++
        }

        // 3. PostgreSQL 자동 증가 ID 시퀀스를 최댓값에 맞게 갱신
        await pool.query(
            "SELECT setval('posts_id_seq', COALESCE((SELECT MAX(id) FROM posts), 1), (SELECT MAX(id) FROM posts) IS NOT NULL)"
        )

        await pool.query("COMMIT")
        console.log(`Successfully synced ${upsertedCount} posts with database.`)
        process.exit(0)
    } catch (err) {
        await pool.query("ROLLBACK")
        console.error("Error seeding posts:", err)
        process.exit(1)
    }
}

seedPosts()
