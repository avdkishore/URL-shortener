import supertest from 'supertest';
import app from '../app';

process.env.NODE_ENV = 'test';

const request = supertest(app);

global.request = request;
