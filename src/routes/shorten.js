import controllers from '../controllers'; 

export default [
	{
		version: 'v1',
		path: 'shorten',
		method: 'get',
		action: controllers.shorten.find
	},
	{
		version: 'v1',
		path: 'retrieve',
		method: 'get',
		action: controllers.shorten.retrieve
	}
];