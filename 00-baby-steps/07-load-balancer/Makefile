.PHONY: up
up:
	docker compose up -d --build

.PHONY: down
down:
	 docker compose down -v

.PHONY: ps
ps:
	docker compose ps

.PHONY: load-test
load-test:
	docker compose run --rm k6
