# OAuth Setup (Google / GitHub)

This project supports social login via Google and GitHub.

Required environment variables (set in `.env`):

- `GITHUB_CLIENT_ID` - GitHub OAuth App Client ID
- `GITHUB_CLIENT_SECRET` - GitHub OAuth App Client Secret
- `GOOGLE_CLIENT_ID` - Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth Client Secret
- `FRONTEND_URL` - Frontend origin, e.g. `http://localhost:5173`

Callback URLs to register in provider apps (adjust host/port as needed):

- GitHub: `http://localhost:3000/api/auth/oauth/github/callback`
- Google: `http://localhost:3000/api/auth/oauth/google/callback`

Quick test:

1. Start server: `pnpm --filter server dev` (or run server start command)
2. Start client: `pnpm --filter client dev`
3. Open the login page and click `Google로 로그인` or `Github로 로그인`.
4. After authorizing, you will be redirected back to `/oauth/success?token=...` and the token will be stored in `localStorage`.

Security notes:

- The implementation redirects with the token in the URL for convenience. Consider exchanging the token via a secure HttpOnly cookie flow if you require stronger CSRF protections.
