import express from 'express';
import cors from 'cors';

import config from './config';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors(config.cors));

routes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res) => {
  console.error(error);

  res.status(error.status || 500);
  res.json({
    message: "Oops! Couldn't perform this action at the moment. Please try again",
    error
  });
});

export default app;