import validUrl from 'valid-url';
import { nanoid } from 'nanoid';
import config from '../config';

const urlMap = {};

/**
 * Shorten Controller
 *
 * @description :: Sole purpose of this controller is to shorten a url
 */

export default {
	find: (req, res) => {
		const urlQuery = req.query;

		if (urlQuery && !urlQuery.url) return res.status(400).json({ message: 'Invalid request' });

		const { url } = urlQuery;

		if (!validUrl.isWebUri(url)) {
			return res.status(400).json({ message: 'url is invalid' });
		}

		if (urlMap[url]) {
			const shortenUrl = `${config.BASE_URL}/${urlMap[url]}`;

			return res.status(200).json({ shortenUrl });
		}

		const id = nanoid(10);
		const shortenUrl = `${config.BASE_URL}/${id}`;
		urlMap[url] = id;

		return res.status(200).json({ shortenUrl });
	}
};