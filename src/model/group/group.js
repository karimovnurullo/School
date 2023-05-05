"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(groupName) {
        this.groupName = groupName;
    }
    ;
    Group.prototype.getID = function () {
        return this.id;
    };
    Group.prototype.setID = function (value) {
        this.id = value;
    };
    return Group;
}());
exports.Group = Group;
