class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

let logger = new FancyLogger();
Object.freeze(logger); // This is the key idea behind the singleton pattern. We freeze the object so that it cannot be changed.
//This means that we cannot add new properties to the object, we cannot delete properties from the object, and we cannot change the values of the properties of the object.

export default logger;
