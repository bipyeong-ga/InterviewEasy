FROM node:22-alpine AS base

# Install necessary tools for node-gyp and pnpm
RUN apk add --no-cache python3 make g++ libc6-compat
RUN corepack enable && corepack prepare pnpm@10.31.0 --activate

WORKDIR /app

# Copy root configurations
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy package configurations
COPY packages/client/package.json ./packages/client/
COPY packages/server/package.json ./packages/server/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# ==========================================
# DEVELOPMENT STAGES
# ==========================================

# -- Server Dev Image --
FROM base AS server-dev
ENV NODE_ENV=development
EXPOSE 3000
CMD ["pnpm", "run", "dev:s"]

# -- Client Dev Image --
FROM base AS client-dev
ENV NODE_ENV=development
EXPOSE 5173
CMD ["pnpm", "run", "dev:c"]

# ==========================================
# PRODUCTION STAGES
# ==========================================

# -- Server Production Image --
FROM base AS server-prod
ENV NODE_ENV=production
RUN pnpm run build:s
EXPOSE 3000
CMD ["pnpm", "--prefix", "packages/server", "run", "start:dev"]

# -- Client Production Image --
FROM base AS client-prod
ENV NODE_ENV=production
RUN pnpm run build:c
EXPOSE 3000
CMD ["pnpm", "--prefix", "packages/client", "run", "start"]
