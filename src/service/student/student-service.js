"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.idCounter = 0;
        this.list = [];
        this.groups = [];
        // addGroup(...students: Student[]){
        //    for(const student of students){
        //       this.groups.push(student);
        //    }
        // }
    }
    StudentService.prototype.isExsist = function (phoneNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    };
    StudentService.prototype.add = function (newStudent) {
        if (this.isExsist(newStudent.phoneNumber))
            throw new Error("".concat(newStudent.phoneNumber, " already added"));
        newStudent.setID(++this.idCounter);
        this.list.push(newStudent);
    };
    StudentService.prototype.getList = function () {
        return this.list;
    };
    return StudentService;
}());
exports.StudentService = StudentService;
