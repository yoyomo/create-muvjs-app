#!/usr/bin/env node

const exec = require('child_process').exec;

const usage = "Usage: npm init muvjs-app my-app [--typescript]";

const arguments = process.argv
const app = arguments[2];
const option = arguments[3];

if(!app){
	console.log(usage)
	return
}

if(option) {
	switch(option) {
		case "--typescript":

		console.log("Using typescript");

		break;

		default:

		console.log("Unknown option", option)
		console.log(usage);

		return;

		break;

	}
}


create = exec(`git clone https://github.com/yoyomo/muvjs-example ${app};
	cd ${app};
	${option === "--typescript" ? "git checkout ts;" : ""}
	rm -rf .git .gitignore
	git remote rm origin;
	npm install;

	echo "Now run:";
	echo "  cd ${app}";
	echo "  npm dev";`);

create.stdout.on('data', function (data) {
	console.log(data.toString());
});

create.stderr.on('data', function (data) {
	console.log(data.toString());
});
