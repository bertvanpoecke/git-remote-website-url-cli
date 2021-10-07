#!/usr/bin/env node

const GitUrlParse = require("git-url-parse");
const yargs = require("yargs");

const options = yargs
	.usage("Usage: provide URIs as arguments")
	.demandCommand()
	.argv;

for (let x of options._) {
	var parsedURI = GitUrlParse(x);
	console.log("https://"+parsedURI.resource+"/"+parsedURI.full_name);
}