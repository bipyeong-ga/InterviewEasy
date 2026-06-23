-- Add PDF columns to resumes table
ALTER TABLE resumes ADD COLUMN IF NOT EXISTS raw_text TEXT DEFAULT '';
ALTER TABLE resumes ADD COLUMN IF NOT EXISTS summary TEXT DEFAULT '';
ALTER TABLE resumes ADD COLUMN IF NOT EXISTS improvements TEXT DEFAULT '';

-- Create resume messages table for chat history
CREATE TABLE IF NOT EXISTS resume_messages (
    id SERIAL PRIMARY KEY,
    resume_id INTEGER NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
    sender VARCHAR(50) NOT NULL, -- 'user' or 'assistant'
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_resume_messages_resume_id ON resume_messages(resume_id);
