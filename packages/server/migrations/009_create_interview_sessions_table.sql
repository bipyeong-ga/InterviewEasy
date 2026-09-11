CREATE TABLE IF NOT EXISTS interview_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    video_data BYTEA NOT NULL,
    video_mime_type VARCHAR(50) NOT NULL DEFAULT 'video/webm',
    chapters JSONB NOT NULL DEFAULT '[]'::jsonb,
    report_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_interview_sessions_user_id ON interview_sessions(user_id);
