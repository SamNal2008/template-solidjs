import { DateBuilder } from "./dater";
import { isStringDefined } from "./validators";

enum ELoggerMethod {
  LOG = "log",
  DEBUG = "debug",
  WARN = "warn",
  ERROR = "error",
}

class _Logger {
  private readonly caller: string;

  constructor(caller: string) {
    this.caller = caller;
  }

  // Funny javascript
  private execute(method: ELoggerMethod, message: any): void {
    if (isStringDefined(message) && typeof message !== "string") message = JSON.stringify(message);
    console[method](
      `[${method.toUpperCase()} - FIDELITY - ${DateBuilder.full()} - ${this.caller}]: ${message as string}`
    );
  }

  public log(message: any): void {
    Logger.execute(ELoggerMethod.LOG, message);
  }

  public debug(message: any): void {
    Logger.execute(ELoggerMethod.DEBUG, message);
  }

  public warn(message: any): void {
    Logger.execute(ELoggerMethod.WARN, message);
  }

  public error(message: any): void {
    Logger.execute(ELoggerMethod.ERROR, message);
  }

  public table(object: any): void {
    console.log(`[TABLE - FIDELITY - ${DateBuilder.full()}]:`);
    console.table(object);
  }
}

export const Logger = new _Logger("GLOBAL");
