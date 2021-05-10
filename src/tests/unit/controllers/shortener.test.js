import chai from 'chai';
import qs from 'querystring';

chai.should();

describe('shorten API', () => {
	let shortenUrl;

	it('should return 400 if no url is provided', async () => {
		const res = await request.get('/v1/shorten');

		res.statusCode.should.equal(400);
		res.body.should.be.an('object').with.keys(['message']);
		res.body.message.should.be.a('string');
	});

	it('should return 400 if bad url is provided', async () => {
		const url = 'someinvalidurl';

		const query = qs.stringify({ url });

		const res = await request.get(`/v1/shorten?${query}`);

		res.statusCode.should.equal(400);
		res.body.should.be.an('object').with.keys(['message']);
		res.body.message.should.be.a('string');
	});

	it('should return 201 and shortenUrl', async () => {
		const url = 'https://avdkishore.dev';

		const query = qs.stringify({ url });

		const res = await request.get(`/v1/shorten?${query}`);

		res.statusCode.should.equal(200);
		res.body.should.be.an('object').with.keys(['shortenUrl']);
		res.body.shortenUrl.should.be.a('string');
		shortenUrl = res.body.shortenUrl;
	});

	it('should return 200 and shortenUrl', async () => {
		const url = 'https://avdkishore.dev';

		const query = qs.stringify({ url });

		const res = await request.get(`/v1/shorten?${query}`);

		res.statusCode.should.equal(200);
		res.body.should.be.an('object').with.keys(['shortenUrl']);
		res.body.shortenUrl.should.be.a('string');

		res.body.shortenUrl.should.equal(shortenUrl);
	});
});