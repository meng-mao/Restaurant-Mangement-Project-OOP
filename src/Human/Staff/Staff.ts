import { Gender, Person } from "../Person";

export enum StaffCategory {
  Chef = "Chef",
  Waiter = "Waiter",
  Waitress = "Waitress",
  Cleaner = "Cleaner",
  Chashier = "Chashier",
  SecurityMeasures = "SecurityMeasures",
}

/**
 * A staff is a person of the restuarant with a salary
 */
export class Staff extends Person {

  constructor(
    protected category: StaffCategory,
    name: string,
    age: number,
    gender: Gender,
    protected phone: number,
    protected salary: number
  ) {
    super(name, age, gender);
  }
  getSalary() {
    return this.salary;
  }
  getPhone() {
    return this.phone;
  }
  getPosition(){
    return this.category;
  }
  setSalary(numSalary:number){
    return this.salary = numSalary;
  }
}
