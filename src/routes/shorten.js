import controllers from '../controllers'; 

export default [
	{
		version: 'v1',
		path: 'shorten',
		method: 'get',
		action: controllers.shorten.find
	}
];