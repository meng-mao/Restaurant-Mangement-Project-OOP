"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.staffs = [];
        this.customers = [];
    }
    HumanManager.prototype.adddCustomer = function () {
        var customer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            customer[_i] = arguments[_i];
        }
        this.customers = this.customers.concat(customer);
    };
    HumanManager.prototype.getCustomers = function () {
        return this.customers;
    };
    HumanManager.prototype.getNumberOfCustomers = function () {
        return this.customers.length;
    };
    HumanManager.prototype.addStaff = function () {
        var staff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            staff[_i] = arguments[_i];
        }
        this.staffs = this.staffs.concat(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    HumanManager.prototype.getNumberOfStaff = function () {
        return this.staffs.length;
    };
    HumanManager.prototype.setManager = function (manager) {
        return this.manager = manager;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
