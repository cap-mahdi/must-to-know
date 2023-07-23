import FirstUse from "./FirstUse";
import SecondUse from "./SecondUse";

const firstUse = new FirstUse();
const secondUse = new SecondUse();

firstUse.use();
secondUse.use();

/*
the below ouput can be done using static methods and properties
just to show an implementation of singleton pattern
*/
/*
output:
0 logs
FANCY: First use
1 Logs
1 logs
FANCY: Second use
2 Logs
*/

/*
Singleton pattern is a CREATIONAL pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
We use it when we want to have only one instance of a class.(database connection,etc)
This patterns can generate the race condition problem which is when two or more threads can access shared data and they try to change it at the same time.(this singleton instance is like a shared data)
*/
