"use strict";

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

import {
    Student,
    sayHello,
    // Person,
} from "../src/student";

let log = console.log;

let student = new Student("xgqfrms", "X.", "webgeeker");

log(student.firstName);
log(student.middleInitial);
log(student.lastName);

log(student.fullName);

log(sayHello(student));

// document.body.innerHTML = sayHello(student);
