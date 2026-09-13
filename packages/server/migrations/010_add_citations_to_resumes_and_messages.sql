ALTER TABLE resumes ADD COLUMN IF NOT EXISTS citations JSONB DEFAULT '[]'::jsonb;
ALTER TABLE resume_messages ADD COLUMN IF NOT EXISTS citations JSONB DEFAULT '[]'::jsonb;
