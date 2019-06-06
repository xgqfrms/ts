(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     * @author xgqfrms
     * @license MIT
     * @copyright xgqfrms
     * @created 2019.01.01
     *
     * @description
     * @augments
     * @example
     * @link
     *
     */
    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    exports.Student = Student;
    var sayHello = function (person) {
        var firstName = person.firstName, lastName = person.lastName;
        return "Hello, " + firstName + " " + lastName;
    };
    exports.sayHello = sayHello;
    exports.default = Student;
});
//# sourceMappingURL=student.js.map