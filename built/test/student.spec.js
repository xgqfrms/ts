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
log(student_1.sayHello(student));
