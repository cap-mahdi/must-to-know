class Shape {
  getArea() {
    // To be implemented by subclasses
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  setSideLength(sideLength) {
    this.sideLength = sideLength;
  }

  getArea() {
    return this.sideLength * this.sideLength;
  }
}

function printArea(shape) {
  console.log(shape.getArea());
}

const rectangle = new Rectangle(3, 4);
const square = new Square(3);

printArea(rectangle); // Output: 12
printArea(square); // Output: 9

// In this updated example, we introduce a Shape superclass that defines the getArea() method. Both Rectangle and Square inherit from Shape and provide their own implementations of getArea(). Now, Rectangle and Square are separate and independent classes, each with its own behavior specific to its shape.

// By decoupling Square from Rectangle, we avoid the violation of the Liskov Substitution Principle. The printArea() function can now accept any object that inherits from Shape and correctly call its getArea() method, without making any assumptions about the object's specific shape.
