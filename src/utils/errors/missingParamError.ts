export class MissingParamError extends Error {
  constructor(params: string) {
    super(`Missing parameter ${params}`);
    this.name = 'MissingParamError';
  }
}
