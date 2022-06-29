"use strict";
exports.__esModule = true;
exports.Food = exports.FoodCategory = void 0;
var FoodCategory;
(function (FoodCategory) {
    FoodCategory["Fried"] = "Fried";
    FoodCategory["Soup"] = "Soup";
    FoodCategory["Boil"] = "Boil";
    FoodCategory["Mix"] = "Mix";
    FoodCategory["Drink"] = "Drink";
    FoodCategory["Vegetale"] = "Vegetable";
    FoodCategory["Fruit"] = "Fruit";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
var Food = /** @class */ (function () {
    function Food(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Food;
}());
exports.Food = Food;
