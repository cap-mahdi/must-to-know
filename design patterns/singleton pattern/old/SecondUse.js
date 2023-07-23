import FancyLogger from "./FancyLogger";
const logger = new FancyLogger();
class SecondUse {
  useMethod() {
    logger.printLogCount();
    logger.log("Second use");
    logger.printLogCount();
  }
}

export default SecondUse;
