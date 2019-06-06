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

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

const sayHello = (person: Person) => {
    let {
        firstName,
        lastName,
    } = person;
    return `Hello, ${firstName} ${lastName}`;
};

export default Student;

export {
    Student,
    Person,
    sayHello,
};
