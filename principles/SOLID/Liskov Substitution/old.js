class Rectangle {
  constructor(width, height) {
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

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function printArea(rectangle) {
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  console.log(rectangle.getArea());
}

const rectangle = new Rectangle(3, 4);
const square = new Square(3, 4);

printArea(rectangle); // Output: 20
printArea(square); // Output: 25

// In this example, we have a Rectangle class and a Square class that extends it. According to the Liskov Substitution Principle, objects of a superclass should be substitutable by objects of its subclasses without altering the correctness of the program. However, the Square class violates this principle becauese it changes the behavior of its superclass.

// The Square class overrides the setWidth() and setHeight() methods to ensure that both the width and height of the square are always equal. While this makes sense for a square, it breaks the LSP because it changes the behavior of the base class. In the printArea() function, when we pass a Square object, it produces an incorrect result because the setWidth() and setHeight() methods don't work as expected for a rectangle.

// This violation occurs because the Square class restricts the behavior of its superclass (Rectangle) by enforcing equal width and height, which is not a requirement for a general rectangle. As a result, the program's correctness is compromised, leading to unexpected behavior.
