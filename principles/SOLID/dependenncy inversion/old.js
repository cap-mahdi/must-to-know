class Store {
  constructor(user) {
    // this.user = user;
    // this.paypal = new Paypal();
    this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    // this.paypal.makePayment(this.user, 200 * quantity);
    this.stripe.makePayment(200 * quantity * 100);
  }
  purchaseHelmet(quantity) {
    // this.paypal.makePayment(this.user, 15 * quantity);
    this.stripe.makePayment(15 * quantity * 100);
  }
}

//we assume that Stripe is a third party library that we cannot modify
class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

//we assume that Paypal is a third party library that we cannot modify
class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${this.user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);

//if we want to use Paypal instead of Stripe, we have to modify the Store class (a lot of code needs to be changed in a real world application)
//the modification are the commented lines

//What we did violates the dependency inversion principle beacause:
//We should not depend on low level modules. We should depend on abstractions.
//we should not depend on Stripe or Paypal. We should depend on an abstraction that can be implemented by Stripe or Paypal.
