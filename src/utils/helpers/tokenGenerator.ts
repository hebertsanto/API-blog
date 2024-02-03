import jwt from 'jsonwebtoken';

export class TokenGenerator {
  //eslint-disable-next-line
  async generateToken(id: any) {
    const token = jwt.sign(id, 'fdaojfjdiasjfijfijaijfidsncvinannuaiuru');
    return token;
  }
}
