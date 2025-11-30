.PHONY: up
up:
	docker compose -f infra/docker-compose.yml up -d --build
	docker compose -f infra/docker-compose.yml ps

.PHONY: down
down:
	docker compose -f infra/docker-compose.yml ps
	docker compose -f infra/docker-compose.yml down -v

.PHONY: restart
restart:
	docker compose -f infra/docker-compose.yml restart

.PHONY: build
build:
	bun run build

