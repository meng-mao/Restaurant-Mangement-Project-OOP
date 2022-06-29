import { Customer } from "../Human/Customer/Customer";

export class Chair {
  private customer?: Customer = undefined; // not customer in chair

  constructor(private id: number) {}

  // Customer Chair ----------------------------------------------
  setCustomer(theCustomer: Customer) {
    if(this.customer ===undefined){
      this.customer = theCustomer;
    }
    else{
      return "This chair not free";
    }
  }

  hasCustomer() {
    return this.customer !== undefined;
  }

  getCustomer() {
    return this.customer;
  }
}
