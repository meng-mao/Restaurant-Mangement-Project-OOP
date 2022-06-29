"use strict";
exports.__esModule = true;
exports.TableManager = void 0;
var TableManager = /** @class */ (function () {
    function TableManager() {
        this.tables = [];
    }
    TableManager.prototype.addTable = function () {
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = this.tables.concat(table);
    };
    return TableManager;
}());
exports.TableManager = TableManager;
