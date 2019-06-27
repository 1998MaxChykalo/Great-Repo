import { Injectable } from '@angular/core';

export enum LogType {
  default,
  warning,
  error
}
export const interface ILogger {
  // log: funciton
}
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logFunctions = {
    [LogType.error]: console.error,
    [LogType.warning]: console.warn,
    [LogType.default]: console.log,
  };
  public log = (message: any, logType: LogType = LogType.default) => this.logFunctions[logType](message);
}
