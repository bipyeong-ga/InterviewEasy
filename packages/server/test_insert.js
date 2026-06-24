import pg from 'pg';
const { Client } = pg;
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'user',
  password: '1234',
  database: 'interview'
});

async function run() {
  await client.connect();
  try {
    const res = await client.query('INSERT INTO liked_jobs (user_id, job_title, company, link, reason) VALUES ($1, $2, $3, $4, $5) RETURNING *', [1, 'Test Title', 'Test Company', null, null]);
    console.log(res.rows[0]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
