import logger, { httpLogger } from './utils/logger';
import express from 'express';
import routes from './routers';
import config from './config';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(httpLogger);
app.use('/api', routes);

app.listen(config.port, () => {
  logger.info(`🚀 Server is running on http://localhost:${config.port}`);
});
