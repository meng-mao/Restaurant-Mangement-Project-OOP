"use strict";
exports.__esModule = true;
exports.StockFood = void 0;
var StockFood = /** @class */ (function () {
    function StockFood(foods) {
        if (foods === void 0) { foods = []; }
        this.foods = foods;
    }
    StockFood.prototype.addFood = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        this.foods = this.foods.concat(food);
    };
    StockFood.prototype.hasFood = function () {
        return this.foods.length !== 0;
    };
    StockFood.prototype.numberCategory = function (food) {
        var numCategory = 0;
        for (var _i = 0, _a = this.foods; _i < _a.length; _i++) {
            var categoy = _a[_i];
            if (categoy.category === food.category) {
                numCategory += 1;
            }
        }
        return numCategory;
    };
    return StockFood;
}());
exports.StockFood = StockFood;
