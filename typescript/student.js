// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function hello(person: Person) {
//     // return "Hello, " + person.firstName + " " + person.lastName;
//     let {
//         firstName,
//         lastName,
//     } = person;
//     return `Hello, ${firstName} ${lastName}`;
// }
// let student = new Student("xgqfrms", "X.", "webgeeker");
// let log = console.log;
// log(student.firstName);
// log(student.middleInitial);
// log(student.lastName);
// log(hello(student));
// document.body.innerHTML = hello(student);
// class Student {
//     fullName: string;
//     firstName: string;
//     middleInitial: string;
//     lastName: string;
//     /// no public & undefined bug
//     constructor(firstName: string, middleInitial: string, lastName: string) {
//         // this.firstName = firstName;
//         // this.middleInitial = middleInitial;
//         // this.lastName = lastName;
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function hello(person: Person) {
//     // return "Hello, " + person.firstName + " " + person.lastName;
//     let {
//         firstName,
//         lastName,
//     } = person;
//     return `Hello, ${firstName} ${lastName}`;
// }
// let student = new Student("xgqfrms", "X.", "webgeeker");
// let log = console.log;
// log(student.firstName);
// log(student.middleInitial);
// log(student.lastName);
// log(hello(student));
// document.body.innerHTML = hello(student);
var Student = /** @class */ (function () {
    /// no public
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function hello(person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    var firstName = person.firstName, lastName = person.lastName;
    return "Hello, " + firstName + " " + lastName;
}
var student = new Student("xgqfrms", "X.", "webgeeker");
var log = console.log;
log(student.firstName);
log(student.middleInitial);
log(student.lastName);
log(hello(student));
// document.body.innerHTML = hello(student);
