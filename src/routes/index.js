import express from 'express';
import fs from 'fs';
import config from '../config';

const supportedMethods = ['get', 'post', 'put', 'delete'];

const configureRouter = (app) => {
  const router = express.Router();
  
  const { prefix = '' } = config;
  let routes = [];

  fs.readdirSync(__dirname)
    .filter(f => !f.includes('index.js'))
    .forEach(filename => {
      routes = [
        ...routes,
        ...require(`./${filename}`).default
      ]
    });
  
  routes.forEach(route => {
    const method = route.method.toLowerCase();
    const version = route.version || 'v1';

    /* Check if method is supported */
    if (!supportedMethods.includes(method)) {
      throw new Error({
        message: `Method ${method} is not supported`
      });
    }

    router[method].apply(router, [`/${version}/${route.path}`, route.action]);
    /* Use default prefix from config if router doesn't provide one */
    app.use(`${route.prefix || prefix}`, router);
  });
};

export default function(app) {
  configureRouter(app);
}