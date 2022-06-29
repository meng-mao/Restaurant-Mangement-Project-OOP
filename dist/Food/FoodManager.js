"use strict";
exports.__esModule = true;
exports.FoodManager = void 0;
var FoodManager = /** @class */ (function () {
    function FoodManager() {
        this.foods = [];
    }
    FoodManager.prototype.addFood = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        this.foods = this.foods.concat(food);
    };
    return FoodManager;
}());
exports.FoodManager = FoodManager;
