.DEFAULT_GOAL := help

.PHONY: help install dev build start test lint typecheck verify clean

help:
	@printf '%s\n' \
		'install     Install dependencies' \
		'dev         Start the Next.js dev server' \
		'verify      Typecheck, lint, and test' \
		'build       Production build' \
		'clean       Remove build artifacts and node_modules'

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
