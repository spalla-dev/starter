import { H3Error } from 'h3';

export declare class AppError extends H3Error {}

export function createAppError(message: string, code: number) {
  const error = new AppError();
  error.statusMessage = message;
  error.statusCode = code;
  error.stack = '';
  return error;
}
