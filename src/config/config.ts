export default {
  port: process.env.PORT || 3000,
  ip: process.env.HOST || '0.0.0.0',
  jwtSecret: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237',
  prefixUrl: process.env.API_PREFIX
};
