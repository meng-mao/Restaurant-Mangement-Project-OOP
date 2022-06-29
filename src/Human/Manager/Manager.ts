
import { Customer } from "../Customer/Customer";
import {Gender, Person} from "../Person";
import { Staff, StaffCategory } from "../Staff/Staff";
export class Manager extends Person{
    private staffList:Staff[]=[];
    constructor(name:string,age:number,gender:Gender,private totalBudget:number){
        super(name,age,gender);
    }
    
}