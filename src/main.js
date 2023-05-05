"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var group_service_1 = require("./service/group/group-service");
var student_service_1 = require("./service/student/student-service");
var Main = /** @class */ (function () {
    function Main() {
        this.studentService = new student_service_1.StudentService();
        this.groupService = new group_service_1.GroupService;
    }
    Main.prototype.getStudentsList = function () {
        return this.studentService.getList();
    };
    Main.prototype.addStudents = function () {
        var students = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            students[_i] = arguments[_i];
        }
        for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
            var student = students_1[_a];
            this.studentService.add(student);
        }
    };
    Main.prototype.getStudentById = function (id) {
        for (var _i = 0, _a = this.getStudentsList(); _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.getID() === id)
                return student;
        }
        throw new Error("Student ".concat(id, " not found"));
    };
    Main.prototype.getStudentByPhoneNumber = function (phoneNumber) {
        for (var _i = 0, _a = this.getStudentsList(); _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.phoneNumber === phoneNumber)
                return student;
        }
        throw new Error("Student ".concat(phoneNumber, " not found"));
    };
    Main.prototype.addStudentToGroup = function () {
        var students = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            students[_i] = arguments[_i];
        }
        for (var _a = 0, students_2 = students; _a < students_2.length; _a++) {
            var student = students_2[_a];
        }
    };
    return Main;
}());
exports.Main = Main;
