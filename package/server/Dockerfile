FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY src ./src
COPY migrations ./migrations
COPY tsconfig.json ./

EXPOSE 3000

CMD ["pnpm", "start:dev"]
