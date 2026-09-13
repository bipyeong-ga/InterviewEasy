import { MOCK_POSTS } from "../../client/app/data/mockPosts"
import pool from "../src/db"

async function seedPosts() {
    try {
        console.log("Starting seed sync...")
        await pool.query("BEGIN")

        await pool.query("DELETE FROM posts")

        let upsertedCount = 0
        for (const post of MOCK_POSTS) {
            await pool.query(
                `INSERT INTO posts (
                    id, company_name, company_logo, title, location, district, job_category, 
                    tech_stack, deadline, experience, employment_type, salary, description, 
                    responsibilities, requirements, preferred_requirements, benefits
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
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
                ],
            )
            upsertedCount++
        }

        await pool.query(
            "SELECT setval('posts_id_seq', COALESCE((SELECT MAX(id) FROM posts), 1), (SELECT MAX(id) FROM posts) IS NOT NULL)",
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
