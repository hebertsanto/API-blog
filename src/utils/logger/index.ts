export class Logger {
  private static PID = process.pid;

  private static getTimeStamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');

    return `${hours}:${minutes}:${seconds}-${ms}`;
  }

  static info(message: string) {
    const pid = this.PID;

    const timestemp = this.getTimeStamp();
    console.info(
      `[${timestemp}] - \x1b[32mINFO\x1b[0m - (${pid}): \x1b[38;5;10m${message}`,
    );
  }

  static error(message: string, error?: Error) {
    const pid = this.PID;
    const timestemp = this.getTimeStamp();

    console.error(
      `\x1b[31m[${timestemp}]\x1b[0m - \x1b[31mERROR\x1b[0m - (${pid}): \x1b[31m${message}\x1b[0m`,
    );

    if (error) {
      console.error(`error name : ${error.name} - stack : ${error.stack}`);
    }
  }

  static warn(message: string) {
    const pid = this.PID;
    const timestemp = this.getTimeStamp();
    console.warn(
      `[\x1b[33m${timestemp}]\x1b[0m  - \x1b[33mWARN\x1b[0m - (${pid}): \x1b[33m${message}\x1b[0m`,
    );
  }
  static logs(message: string) {
    const pid = this.PID;
    console.log(`[LOGS] (${pid}): ${message}`);
  }
}
