import { Injectable } from "@angular/core";

export enum LogLevel {
  default,
  warning,
  error
}
@Injectable({
  providedIn: "root"
})
export class LoggerService {
  private logFunctions = {
    [LogLevel.error]: console.error,
    [LogLevel.warning]: console.warn,
    [LogLevel.default]: console.log
  };
  public log = (logLevel: LogLevel = LogLevel.default) => (message: any) =>
    this.logFunctions[logLevel](message);
  public logError = this.log(LogLevel.error);
  public logWarning = this.log(LogLevel.warning);
  public logInfo = this.log(LogLevel.default);
}
