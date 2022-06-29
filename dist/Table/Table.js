"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(chairs) {
        if (chairs === void 0) { chairs = []; }
        this.chairs = chairs;
    }
    Table.prototype.addChair = function () {
        var chair = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chair[_i] = arguments[_i];
        }
        this.chairs = this.chairs.concat(chair);
    };
    return Table;
}());
exports.Table = Table;
