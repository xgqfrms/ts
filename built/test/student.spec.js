(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../student"], factory);
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
    var student_1 = require("../student");
    var log = console.log;
    var student = new student_1.Student("xgqfrms", "X.", "webgeeker");
    log(student.firstName);
    log(student.middleInitial);
    log(student.lastName);
    log(student.fullName);
    log(student_1.sayHello(student));
});
// document.body.innerHTML = sayHello(student);
//# sourceMappingURL=student.spec.js.map