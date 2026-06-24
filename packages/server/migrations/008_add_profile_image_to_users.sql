ALTER TABLE users ADD COLUMN IF NOT EXISTS profile_image bytea;
ALTER TABLE users ADD COLUMN IF NOT EXISTS profile_image_type varchar(50);
