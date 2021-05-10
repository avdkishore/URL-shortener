import chai from 'chai';

chai.should();

describe('find API', () => {
  it('should return 200 and message', async () => {
    const res = await request.get('/v1/healthz');

    res.statusCode.should.equal(200);
    res.body.should.be.an('object').with.keys(['message']);
    res.body.message.should.be.a('string');
  });
});