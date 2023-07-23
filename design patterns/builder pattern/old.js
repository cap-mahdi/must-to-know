class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
//setting up a user with all the properties
const user = new User(
  "John",
  30,
  "123456789",
  new Address("12345", "123 St. New York")
);
//setting up a user with only name and address
//Imagine if we have 10 properties and we want to set only 2 of them
//It will be a pain to set all the properties to undefined (we will have to learn the position of each property)
//This is where builder pattern comes in (it is a BEHAVIORAL pattern)
const user2 = new User(
  "Jane",
  undefined,
  undefined,
  new Address("12345", "123 St. New York")
);
