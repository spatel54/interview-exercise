.PHONY: install dev build start test lint typecheck verify clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

test:
	npm run test

lint:
	npm run lint

typecheck:
	npm run typecheck

verify: typecheck lint test

clean:
	rm -rf .next node_modules coverage
