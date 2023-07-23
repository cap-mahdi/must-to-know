import logger from "./FancyLogger";
class SecondUse {
  useMethod() {
    logger.printLogCount();
    logger.log("Second use");
    logger.printLogCount();
  }
}

export default SecondUse;
