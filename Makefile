# paths
ESLINT = ./node_modules/eslint/bin/eslint.js
MOCHA = ./node_modules/mocha/bin/_mocha
BROWSERIFY = ./node_modules/browserify/bin/cmd.js
ISTANBUL = ./node_modules/istanbul/lib/cli.js
COVERALLS=./node_modules/coveralls/bin/coveralls.js
KARMA=./node_modules/karma/bin/karma

# test
test: eslint mocha cov karma

# eslint
eslint:
	$(ESLINT) -c ./.eslintrc src/scripts/ test

# mocha
mocha:
	$(MOCHA) ./test/module/ --compilers es6:babel/register

# karma
karma:
	$(KARMA) start

# Tests for TravisCI
travistest: eslint mocha cov
	$(KARMA) start --single-run

# build
build: browserify riot

# browserify
browserify:
	$(BROWSERIFY) src/scripts/content_script.js -t babelify --outfile app/scripts/content_script.js
	cp src/scripts/event_page.js app/scripts/event_page.js
	cp src/scripts/popup.js app/scripts/popup.js

# riot
riot:
	riot src/scripts/view app/scripts/view/all.js

# pack
pack:
	zip -r mata-tag-analyzer.zip app/ manifest.json

# coveralls
coveralls:
	cat ./coverage/lcov.info | $(COVERALLS)

# coverage
cov:
	$(ISTANBUL) cover $(MOCHA) -- --compilers js:babel/register test/module/*
