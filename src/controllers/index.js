import fs from 'fs';

let controllers = {};

fs.readdirSync(__dirname)
	.filter(f => !f.includes('index.js'))
	.forEach(filename => {
		controllers = {
			...controllers,
			[filename.split('.')[0]]: require(`./${filename}`).default
		};
	});

export default controllers;