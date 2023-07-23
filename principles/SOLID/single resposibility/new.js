import Logger from "./logger.js";

class calorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      Logger.log("Max calories exceeded");
    }
  }
}

//Now if we want to change the way we log calories, we can do it in the logger class.
//this class has only one reason to change.
//this class has only one responsibility which is tracking calories.

//SO ALWAYS TRY TO SEPARATE THE FUNCTIONALITY INTO SEPARATE CLASSES,FILES,MODULES,FUNCTIONS (SOFTWARE ENTITIES)
