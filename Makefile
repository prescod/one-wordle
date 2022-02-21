.PHONY: build

build:
	npm run build

publish:
	git add build/*
	git commit build/* --message "Build"
	git subtree push --prefix build origin gh-pages

