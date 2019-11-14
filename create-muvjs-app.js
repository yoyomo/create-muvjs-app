#!/usr/bin/env node

const exec = require('child_process').exec;

const arguments = process.argv
const app = arguments[2];

if(!app){
	console.log("Usage: npm init muvjs-app my-app")
	return
}



create = exec(`git clone https://github.com/yoyomo/muvjs-example ${app};
	cd ${app};
	git remote rm origin;
	npm install;

	echo "Now run:";
	echo "  cd ${app}";
	echo "  npm start";`);

create.stdout.on('data', function (data) {
	console.log(data.toString());
});

create.stderr.on('data', function (data) {
	console.log(data.toString());
});
