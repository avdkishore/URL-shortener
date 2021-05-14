import validUrl from 'valid-url';
import { nanoid } from 'nanoid';
import config from '../config';
import Redis from '../services/Redis';

const urlMap = {};

/**
 * Shorten Controller
 *
 * @description :: Sole purpose of this controller is to shorten a url
 */

export default {
	retrieve: async (req, res) => {
		const url = req.query.url;

		try {
			const value = await Redis.find({ key: url });

			if (!value) {
				return res.status(404).send();
			} 

			return res.status(200).json({ url: value });
		} catch (e) {
			console.log('error => ', e);
			return res.status(500).json({ message: 'Something went wrong'});
		}
	},

	find: async (req, res) => {
		const urlQuery = req.query;

		if (urlQuery && !urlQuery.url) return res.status(400).json({ message: 'Invalid request' });

		const { url } = urlQuery;

		if (!validUrl.isWebUri(url)) {
			return res.status(400).json({ message: 'url is invalid' });
		}
		
		try {
			console.log('redis => ', Redis);
			const value = await Redis.find({ key: url });

			if (value) {
				const shortenUrl = `${config.BASE_URL}/${value}`;

				return res.status(200).json({ shortenUrl });
			}

			const id = nanoid(10);
			const shortenUrl = `${config.BASE_URL}/${id}`;

			await Redis.create({
				key: url,
				value: id
			});

			await Redis.create({
				key: shortenUrl,
				value: url 
			});

			return res.status(200).json({ shortenUrl });
		} catch (e) {
			console.log('error => ', e);
			return res.status(500).json({ message: 'Something went wrong'});
		}
	}
};