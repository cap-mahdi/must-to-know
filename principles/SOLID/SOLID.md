
## SOLID: The First 5 Principles of Object Oriented Design
#Ressources: https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design

### Single Responsibility Principle
Single-responsibility Principle (SRP) states:
A class should have one and only one reason to change, meaning that a class should have only one job.

We should aim to break our code down into modules,classes,files and functions that each address a single concern.

### Open-Closed Principle
Open-closed Principle (OCP) states:
Objects or entities should be open for extension but closed for modification.

This means that a class should be extendable without modifying the class itself.
The closed part of the principle means that we cannot change the behavior of the class.
The open part states that we can extend the behavior by making new classes.

### Liskov Substitution Principle
Liskov Substitution Principle (LSP) states:
Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

This means that every subclass or derived class should be substitutable for their base or parent class.

### Interface Segregation Principle
Interface Segregation Principle (ISP) states:
A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

This means that we should break up interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.

### Dependency Inversion Principle
Dependency Inversion Principle (DIP) states:
Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

This means that we must decouple our objects from each other in such a way that no object should require the knowledge of internal details of other objects in order to function. Instead, they should depend on some interface or abstraction of those objects in order to talk to them.