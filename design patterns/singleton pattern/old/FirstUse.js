import FancyLogger from "./FancyLogger";
const logger = new FancyLogger();
class FirstUse {
  useMethod() {
    logger.printLogCount();
    logger.log("First use");
    logger.printLogCount();
  }
}

export default FirstUse;
