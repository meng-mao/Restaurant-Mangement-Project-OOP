"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var Chair = /** @class */ (function () {
    function Chair(id) {
        this.id = id;
        this.customer = undefined; // not customer in chair
    }
    // Customer Chair ----------------------------------------------
    Chair.prototype.setCustomer = function (theCustomer) {
        if (this.customer === undefined) {
            this.customer = theCustomer;
        }
        else {
            return "This chair not free";
        }
    };
    Chair.prototype.hasCustomer = function () {
        return this.customer !== undefined;
    };
    Chair.prototype.getCustomer = function () {
        return this.customer;
    };
    return Chair;
}());
exports.Chair = Chair;
