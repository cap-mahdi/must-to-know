import logger from "./FancyLogger";
class FirstUse {
  useMethod() {
    logger.printLogCount();
    logger.log("First use");
    logger.printLogCount();
  }
}

export default FirstUse;
