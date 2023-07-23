// Single Responsibility Principle
// A class should have only one reason to change

class calorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log("Max calories exceeded");
  }
}

const calorieTracker = new calorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

// This class is doing too much. It is tracking calories and logging them.
// this violates the single responsibility principle.
//this class has two reasons to change.(if we want to change the way we track calories or the way we log them)
// We can separate the logging functionality into a separate class.
