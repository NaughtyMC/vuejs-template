/* eslint no-console: 0 */
const path = require('path');
const { exec } = require('child_process');
const { apiPort } = require('../config').dev;

const runDocker = exec(`docker run -d -p ${apiPort}:3000 api`, {
	cwd: path.join(__dirname, '../../backend-clojure'),
});

runDocker.stdout.on('data', (data) => {
	console.log(data);
});

runDocker.stderr.on('data', (data) => {
	console.log(`ERROR: ${data}`);
});

runDocker.on('close', (code) => {
	if (code === 0) {
		console.log(`API started on port ${apiPort}!`);
	} else {
		console.log('API failed to start!');
	}
});
