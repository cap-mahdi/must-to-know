/*
Implementing the builder pattern the traditional way
useful when we have a lot of properties
*/
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

const user = new UserBuilder("John")
  .setAge(30)
  .setPhone("123456789")
  .setAddress(new Address("12345", "123 St. New York"));

//setting up a user with only name and address
const user2 = new UserBuilder("Jane").setAddress(
  new Address("12345", "123 St. New York")
);

//Cleaner coode
//We know how to add each property by calling the method setProperty
