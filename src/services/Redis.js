import redis from 'redis';

const client = redis.createClient({
	host: 'localhost',
	port: 6379
});

client.on('error', function(error) {
	console.error(error);
});

export default {
	create: ({
		key,
		value
	}) => {
		return new Promise((resolve, reject) => {
			return client.set(key, value, (err) => {
				if (err) return reject(err);

				return resolve();
			});
		}) ;
	},

	find: ({
		key 
	}) => {
		return new Promise((resolve, reject) => {
			return client.get(key, (err, value) => {
				if (err) return reject(err);

				return resolve(value);
			});
		}) ;
	}
};