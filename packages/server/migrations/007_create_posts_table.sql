CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    company_logo TEXT,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    district VARCHAR(255),
    job_category VARCHAR(255),
    tech_stack JSONB DEFAULT '[]'::jsonb,
    deadline VARCHAR(255),
    experience VARCHAR(255),
    employment_type VARCHAR(255),
    salary VARCHAR(255),
    description TEXT,
    responsibilities JSONB DEFAULT '[]'::jsonb,
    requirements JSONB DEFAULT '[]'::jsonb,
    preferred_requirements JSONB DEFAULT '[]'::jsonb,
    benefits JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post_bookmarks (
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, post_id)
);
