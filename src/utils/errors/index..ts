export class MissingParamError extends Error {
  constructor(params: string) {
    super(`Missing parameter ${params}`);
    this.name = 'MissingParamError';
  }
}

export class PasswordDoesNotMatch extends Error {
  constructor() {
    super('password does not match');
  }
}

export class UserAlreadyExistError extends Error {
  constructor() {
    super('user already exists');
  }
}

export class TokenWasNoProviderError extends Error {
  constructor() {
    super('token was not provider on request');
  }
}

export class ParamDoesNotExist extends Error {
  constructor(params: string) {
    super(`this ${params} does not exist`);
  }
}
