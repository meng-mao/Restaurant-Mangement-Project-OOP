import { Customer } from "./Customer/Customer";
import { Staff } from "./Staff/Staff";
import { Manager } from "./Manager/Manager";


export class HumanManager {
    private manager: Manager;
    private staffs: Staff[] = [];
    private customers: Customer[] = [];

    adddCustomer(...customer: Customer[]) {
        this.customers = this.customers.concat(customer);
    }

    getCustomers() {
        return this.customers;
    }
    getNumberOfCustomers() {
        return this.customers.length;
    }

    addStaff(...staff: Staff[]) {
        this.staffs = this.staffs.concat(staff);
    }

    getStaffs() {
        return this.staffs;
    }

    getNumberOfStaff() {
        return this.staffs.length;
    }
    
    setManager(manager: Manager) {
        return this.manager = manager;
    }
}