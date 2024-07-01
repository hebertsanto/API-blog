import { HttpStatusCode } from '../helpers/http-status';

export class MissingParamError extends Error {
  code: number;
  constructor(params: string) {
    super(`Missing parameter ${params}`);
    this.name = 'MissingParamError';
    this.code = HttpStatusCode.NotFound;
  }
}

export class PasswordDoesNotMatch extends Error {
  constructor() {
    super('password/email invalid');
  }
}

export class UserAlreadyExistError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super();
    this.code = code;
    this.message = message;
  }
}

export class TokenIsNotValidError extends Error {
  constructor() {
    super('token is not valid');
  }
}

export class TokenWasNoProviderError extends Error {
  constructor() {
    super('token was not provider on request');
  }
}

export class ParamDoesNotExist extends Error {
  constructor(params: string) {
    super(`${params} does not exist`);
  }
}

export class UserNotExist extends Error {
  constructor() {
    super('user not exit');
  }
}

export class AppError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super();
    this.code = code;
    this.message = message;
  }
}
