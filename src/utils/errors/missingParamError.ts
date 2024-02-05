export class MissingParamError extends Error {
  constructor(params: string) {
    super(`Missing parameter ${params}`);
    this.name = 'MissingParamError';
  }
}

export class PasswordDoesNotMatch extends Error {
  constructor() {
    super('password invalid');
  }
}
export class UserDoesNotExists extends Error {
  constructor() {
    super('user not found on database');
  }
}

export class TokenWasNoProviderError extends Error {
  constructor() {
    super('token was not provider');
  }
}

export class TokenIsNotValidError extends Error {
  constructor() {
    super('token was no valid');
  }
}
