class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    //Define default values
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    //Default behavior
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser(); //Return the null object instead of null
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  console.log("Hello " + user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

/*
The code becomes cleaner and more extensible.
All default values and behaviors are defined in one place.
No more checking for null every time we access a property or call a method on the user object.
THIS IS THE USE CASE OF THIS PATTERN.
!! we could have used an actual object instead of the class.(const obj = {id: -1, name: "Guest", hasAccess: () => false}
*/
