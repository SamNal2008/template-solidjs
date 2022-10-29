.DEFAULT_GOAL := start

.PHONY: start new-component test lint

#######################################
############# FILE UTILS ##############
#######################################

new-component:
	@echo "Creating new component 🚀"
	@./scripts/create-component.sh $(name)

#######################################
############# NODE UTILS ##############
#######################################

start: node_modules
	npm run dev

test: node_modules
	npm test


lint: node_modules
    npm run prettier:format

node_modules: package.json
	npm install
