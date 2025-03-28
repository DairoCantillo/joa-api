import pino from 'pino';
import pinoHttp from 'pino-http';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
      levelFirst: true,
      messageFormat: '{msg}',
    },
  },
});

export const httpLogger = pinoHttp({
  logger,
  serializers: {
    req(req) {
      return {
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query,
        params: req.params,
        body: req.raw.body,
      };
    },
    res(res) {
      return {
        statusCode: res.statusCode,
        responseTime: `${res.responseTime}ms`,
      };
    },
  },
});

export default logger;
