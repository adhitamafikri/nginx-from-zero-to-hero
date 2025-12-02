FROM oven/bun:1.2.23-slim AS base

WORKDIR /app

COPY bun.lock .
COPY package.json .

RUN bun install

COPY . .

EXPOSE 8000

CMD ["bun", "run", "dev"]
