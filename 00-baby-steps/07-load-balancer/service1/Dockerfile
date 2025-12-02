FROM oven/bun:1.2.23

WORKDIR /app

COPY bun.lock .
COPY package.json .

RUN bun install

COPY . .

EXPOSE 3001

CMD ["bun", "run", "dev"]