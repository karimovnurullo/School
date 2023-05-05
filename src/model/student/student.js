"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firsName, lastName, age, phoneNumber) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    ;
    Student.prototype.getFullName = function () {
        return this.lastName + ' ' + this.firsName;
    };
    Student.prototype.getID = function () {
        return this.id;
    };
    Student.prototype.setID = function (id) {
        this.id = id;
    };
    return Student;
}());
exports.Student = Student;
