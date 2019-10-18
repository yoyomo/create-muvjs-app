const util = require('util');
const exec = util.promisify(require('child_process').exec);

const arguments = process.argv
const app = arguments[2] || "";

let finished = false;

async function createMuvJSApp() {
	let stdout;
	let stderr;
	try{
		({stdout, stderr } = await exec(`sh create-muvjs-app ${app}`));

	}catch(e){
		stderr = e.stderr;
		stdout = e.stdout;
	}finally{
		console.log('\n');
		if(stderr) console.error('stderr:\n', stderr);
		if(stdout) console.log('stdout:\n', stdout);
		finished = true;
	}
}


createMuvJSApp();

process.stdout.write(`Creating muvjs app ${app}`);
const loading = () => {
	if(!finished){
		process.stdout.write('.');
		setTimeout(loading,1000);
	} 
}
setTimeout(loading,1000);
