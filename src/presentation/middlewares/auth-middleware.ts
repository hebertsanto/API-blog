import { NextFunction, Request, Response } from 'express';
import { TokenIsNotValidError, TokenWasNoProviderError } from '../../utils/errors/index.';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization'];
  const token = header?.split(' ')[1];
  const secret = config.jwtSecret;

  try {
    if (!token) {
      throw new TokenWasNoProviderError();
    }
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        throw new TokenIsNotValidError();
      }
      next();
      return decoded;
    });
  } catch (error) {
    if (error instanceof TokenWasNoProviderError) {
      return res.status(400).json({
        msg: 'token was not provider in header req',
      });
    }
    if (error instanceof TokenIsNotValidError) {
      return res.status(400).json({
        msg: 'token is not valid',
      });
    }
  }
};
