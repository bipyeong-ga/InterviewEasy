ALTER TABLE resume_messages ADD COLUMN IF NOT EXISTS recommended_jobs JSONB DEFAULT '[]'::jsonb;
