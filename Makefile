.PHONY: build

build:
	npm run build

publish:
	npm run build
	date > build/date.txt
	git rev-parse --short HEAD > build/commit.txt
	cd build
	git add --all
	git commit -m "$(git rev-parse --short HEAD)"
	git push gh-pages --force

serve:
	npm run start