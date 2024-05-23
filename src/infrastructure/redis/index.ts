import { Redis } from 'ioredis';
import { logger } from '../logger';

export const redis = new Redis();

redis.on('connect', () => {
  logger.info('Connected in redis');
});

redis.on('error', () => {
  logger.error('Some error has been ocurred trying connect in redis');
});
