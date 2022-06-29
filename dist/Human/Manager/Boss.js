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
exports.Boss = void 0;
var Person_1 = require("../../Human/Person");
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(name, age, gender, totalBudget) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.totalBudget = totalBudget;
        return _this;
    }
    return Boss;
}(Person_1.Person));
exports.Boss = Boss;
