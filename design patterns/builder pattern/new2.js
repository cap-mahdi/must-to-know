/*
Implementing the builder pattern the javascript way (destructuring)
useful when we have small number of properties and we want to set default values
*/
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone = "654654", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
//setting up a user with all the properties
const user = new User("John", {
  age: 30,
  phone: "123456789",
  address: new Address("12345", "123 St. New York"),
});
//setting up a user with only name and address(phone will be set to default value)
const user2 = new User("Jane", {
  address: new Address("12345", "123 St. New York"),
});
