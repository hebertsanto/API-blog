import { MissingParamError } from '../errors/index.';
import bcrypt from 'bcrypt';

export class Encrypter {
  async compare(value: string, hash: string) {
    if (!value) {
      throw new MissingParamError('value');
    }
    if (!hash) {
      throw new MissingParamError('hash');
    }
    const isValidPassword = await bcrypt.compare(value, hash);
    return isValidPassword;
  }
}
