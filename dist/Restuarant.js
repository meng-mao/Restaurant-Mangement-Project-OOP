"use strict";
exports.__esModule = true;
exports.Restuarant = void 0;
var TableManager_1 = require("./Table/TableManager");
var HumanManager_1 = require("./Human/HumanManager");
var FoodManager_1 = require("./Food/FoodManager");
var Restuarant = /** @class */ (function () {
    function Restuarant(name, address, openTime, closeTime) {
        this.name = name;
        this.address = address;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.rooms = new TableManager_1.TableManager();
        this.humans = new HumanManager_1.HumanManager();
        this.foods = new FoodManager_1.FoodManager();
    }
    return Restuarant;
}());
exports.Restuarant = Restuarant;
