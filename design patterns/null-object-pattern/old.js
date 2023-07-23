class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello " + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

/*
This code needs the null object pointer.
This code is bad because:
- It is not extensible: If we add a new property to the User class, we have to modify the printUser() function to check for null before accessing the new property.
- A lot of boilerplate code: We have to check for null every time we access a property or call a method on the user object.
- If we want to change the default values of a class, we have to modify it in the whole code.
*/
