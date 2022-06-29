"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
/**
 * Any person in the restuarant - common attributes
 */
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
exports.Person = Person;
