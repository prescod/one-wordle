.PHONY: build

build:
	npm run build

publish:
	npm run build
	date > build/date.txt
	git rev-parse --short HEAD > build/commit.txt
	git add build/*
	git commit build/* --message "Build"
	git subtree push --prefix build origin gh-pages

serve:
	npm run start