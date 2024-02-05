import jwt from 'jsonwebtoken';

export class TokenGenerator {
  //eslint-disable-next-line
  async generateToken(id: any) {
    const secret = process.env.SECRET_JWT as string;
    const token = jwt.sign({ id }, secret, { expiresIn: '1d' });
    return token;
  }
}
