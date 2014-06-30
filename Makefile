
MOCHA_OPTS = --check-leaks
REPORTER = spec
REGISTRY = --registry=http://registry.npm.taobao.org

install:
	@npm install $(REGISTRY) --disturl=http://npm.taobao.org/dist

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

debug:
	@DEBUG=* NODE_ENV=development node index.js

jshint:
	@./node_modules/.bin/jshint ./

.PHONY: install test jshint
