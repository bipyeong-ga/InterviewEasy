ALTER TABLE resumes ADD COLUMN IF NOT EXISTS recommended_jobs JSONB DEFAULT '[]'::jsonb;

CREATE TABLE IF NOT EXISTS liked_jobs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    job_title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    link VARCHAR(255),
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, job_title, company)
);
