-- Add columns to store the PDF binary file and its original filename
ALTER TABLE resumes ADD COLUMN IF NOT EXISTS pdf_file BYTEA;
ALTER TABLE resumes ADD COLUMN IF NOT EXISTS pdf_name VARCHAR(255);
