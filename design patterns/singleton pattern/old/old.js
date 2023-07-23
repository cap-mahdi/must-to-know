import FirstUse from "./FirstUse";
import SecondUse from "./SecondUse";

const firstUse = new FirstUse();
const secondUse = new SecondUse();

firstUse.use();
secondUse.use();

/*
output:
0 logs
FANCY: First use
1 Logs
0 logs
FANCY: Second use
1 Logs
*/

/*
This is a problem because we have two instances of FancyLogger. We want to have only one instance of FancyLogger.
This is where the singleton pattern comes in.
*/
