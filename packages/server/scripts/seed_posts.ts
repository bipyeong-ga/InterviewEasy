import { MOCK_POSTS } from "../../client/app/data/mockPosts"
import pool from "../src/db"

async function seedPosts() {
    try {
        console.log("Starting seed...")
        const checkResult = await pool.query("SELECT COUNT(*) FROM posts")
        const count = parseInt(checkResult.rows[0].count)

        if (count > 0) {
            console.log(`Posts already seeded (${count} posts found). Skipping.`)
            process.exit(0)
        }

        let insertedCount = 0
        for (const post of MOCK_POSTS) {
            await pool.query(
                `INSERT INTO posts (
                    company_name, company_logo, title, location, district, job_category, 
                    tech_stack, deadline, experience, employment_type, salary, description, 
                    responsibilities, requirements, preferred_requirements, benefits
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
                [
                    post.companyName,
                    post.companyLogo,
                    post.title,
                    post.location,
                    post.district,
                    post.jobCategory,
                    JSON.stringify(post.techStack),
                    post.deadline,
                    post.experience,
                    post.employmentType,
                    post.salary,
                    post.description,
                    JSON.stringify(post.responsibilities),
                    JSON.stringify(post.requirements),
                    JSON.stringify(post.preferredRequirements),
                    JSON.stringify(post.benefits)
                ]
            )
            insertedCount++
        }
        console.log(`Successfully seeded ${insertedCount} posts.`)
        process.exit(0)
    } catch (err) {
        console.error("Error seeding posts:", err)
        process.exit(1)
    }
}

seedPosts()
