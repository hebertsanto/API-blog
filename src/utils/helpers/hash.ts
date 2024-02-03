import bcrypt from 'bcrypt';
import { MissingParamError } from '../errors/missingParamError';

export class HashPassword {
  async hash(password: string) {
    if (!password) {
      throw new MissingParamError('password');
    }
    const passwordhash = await bcrypt.hash(password, 10);
    return passwordhash;
  }
}
