class Calculator {
  constructor() {
    this.value = 0;
  }

  add(valueToAdd) {
    this.value += valueToAdd;
  }

  subtract(valueToSubtract) {
    this.value -= valueToSubtract;
  }

  multiply(valueToMultiply) {
    this.value *= valueToMultiply;
  }

  divide(valueToDivide) {
    this.value /= valueToDivide;
  }
}

const calculator = new Calculator();
calculator.add(10);
calculator.subtract(5);
calculator.multiply(10);
calculator.divide(2);
console.log(calculator.value); // 25

/*
If we want to undo the operations, we need to keep track of the operations that we perform.
In this example the command are not so complex, but in a real world application, the commands can be very complex and we really need an execute and undo method.
That's when the command pattern comes in handy.

Another problem with this approach is that we have to know the exact operations that we want to perform on the calculator.
If we want to add a new operation, we need to modify the Calculator class.

*/
