"use strict";
// import { Group } from "../../model/group/group";
// import { Student } from "../../model/student/student";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
var GroupService = /** @class */ (function () {
    function GroupService() {
        // private groups: { [key: string]: Student[] } = {};
        this.groups = {};
        this.idCounter = 0;
    }
    GroupService.prototype.isExist = function (id) {
        for (var _i = 0, _a = Object.keys(this.groups); _i < _a.length; _i++) {
            var groupKey = _a[_i];
            var groupArray = this.groups[groupKey];
            for (var _b = 0, groupArray_1 = groupArray; _b < groupArray_1.length; _b++) {
                var group = groupArray_1[_b];
                if (group.getID() === id)
                    return true;
            }
        }
        return false;
    };
    GroupService.prototype.addGroup = function (group) {
        if (this.isExist(group.getID()))
            throw new Error("Group ".concat(group.getID(), " already exists"));
        group.setID(++this.idCounter);
        this.groups[group.groupName] = [];
    };
    GroupService.prototype.getAllGroups = function () {
        return this.groups;
    };
    //   addStudent(groupName: string, ...students: Student[]) {
    //     if (!this.groups[groupName]) {
    //       throw new Error(`Group ${groupName} does not exist`);
    //     }
    //     this.groups[groupName].push(...students);
    //   }
    // addStudent(groupName: string, ...students: Student[]) {
    //    if (!this.groups[groupName]) {
    //       throw new Error(`Group ${groupName} does not exist`);
    //    }
    //    const group = this.groups[groupName];
    //    students.forEach((student) => {
    //       if (group.includes(student.phoneNumber)) {
    //          throw new Error(`Student ${student.getFullName()} is already in group ${group.groupName}`);
    //       }
    //       group.push(student);
    //    });
    // }
    GroupService.prototype.addStudent = function (groupName) {
        var students = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            students[_i - 1] = arguments[_i];
        }
        if (!this.groups[groupName]) {
            throw new Error("Group ".concat(groupName, " does not exist"));
        }
        var group = this.groups[groupName];
        if (students.length === 0) {
            throw new Error("No students provided for group ".concat(groupName));
        }
        students.forEach(function (student) {
            if (group.some(function (existingStudent) { return existingStudent.phoneNumber === student.phoneNumber; })) {
                throw new Error("Student ".concat(student.getFullName(), " is already in group ").concat(groupName));
            }
            group.push(student);
        });
    };
    return GroupService;
}());
exports.GroupService = GroupService;
