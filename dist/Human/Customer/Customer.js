"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Customer = exports.RateCustomer = void 0;
var Person_1 = require("../Person");
var RateCustomer;
(function (RateCustomer) {
    RateCustomer["rate1"] = "This food is very bad, I can not eat it";
    RateCustomer["rate2"] = "Oh! I don't like it, its taste so awful";
    RateCustomer["rate3"] = "Hmm!! it's not bad, but I won't eat it ";
    RateCustomer["rate4"] = "it's okay, but sorry, I could go home";
    RateCustomer["rate5"] = "That's okay";
    RateCustomer["rate6"] = "Yes, it's good taste";
    RateCustomer["rate7"] = "Oh !! I like it";
    RateCustomer["rate8"] = "OMG very great food";
    RateCustomer["rate9"] = "Oh No!! amazing dish!! please add more ";
    RateCustomer["rate10"] = "Oh!! is it really?? the best food that I love to eat";
})(RateCustomer = exports.RateCustomer || (exports.RateCustomer = {}));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name, age, gender, money) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.money = money;
        return _this;
    }
    Customer.prototype.orderAndPaymentFood = function (foods) {
        var totalPrice = 0;
        var tax = 0;
        var paid = 0;
        for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
            var food = foods_1[_i];
            tax += 1;
            totalPrice += food.price;
        }
        if (totalPrice <= this.money && foods.length !== 0) {
            var cusMoney = this.money;
            paid = cusMoney - totalPrice;
            this.money = cusMoney - (totalPrice + (tax * 0.25) + 2);
            return "\n" + "_____Ordered Successfully_____" + "\n"
                + "  __Meng Sopheap Restaurant__" + "\n"
                + "\n" + " Order ID : " + "\n" + " Ordered In :.......... " + " 1.15 PM" +
                "\n" + " Server :.......... " + " 6/28/2022" + "\n" +
                " Quantity : " + foods.length + " packages" + "\n"
                + "\n" + " ==> SubTotal :......... " + totalPrice + "$" + "\n" +
                " ==> Tax :.............. " + (tax * 0.25) + "$" + "\n" +
                " ==> Delivery :.......... " + 2 + "$" + "\n" +
                " ==> Total Price :.......... " + (totalPrice + (tax * 0.25) + 2 + "$");
        }
        else {
            return "Sorry, Please try to order again!!";
        }
    };
    Customer.prototype.rateCustomer = function (number) {
        var rate = "";
        if (number === 1) {
            rate = RateCustomer.rate1;
        }
        if (number === 2) {
            rate = RateCustomer.rate2;
        }
        if (number === 3) {
            rate = RateCustomer.rate3;
        }
        if (number === 4) {
            rate = RateCustomer.rate4;
        }
        if (number === 5) {
            rate = RateCustomer.rate5;
        }
        if (number === 6) {
            rate = RateCustomer.rate6;
        }
        if (number === 7) {
            rate = RateCustomer.rate7;
        }
        if (number === 8) {
            rate = RateCustomer.rate8;
        }
        if (number === 9) {
            rate = RateCustomer.rate9;
        }
        if (number === 10) {
            rate = RateCustomer.rate10;
        }
        return rate;
    };
    Customer.prototype.buyFood = function (food) {
        if (food.price <= this.money) {
            return "You buy successfully";
        }
        else {
            return "You don't have enough money";
        }
    };
    Customer.prototype.eatFood = function (food, chair) {
        if (food.price <= this.money && chair.hasCustomer() === false) {
            return "Welcome to eat food in the restaurant";
        }
        else {
            return "Sorry You can not eat food in the restaurant!";
        }
    };
    return Customer;
}(Person_1.Person));
exports.Customer = Customer;
