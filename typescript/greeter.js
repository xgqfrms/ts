// function greeter(person) {
//     return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.innerHTML = greeter(user);
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.innerHTML = greeter(user);
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = [0, 1, 2];
// document.body.innerHTML = greeter(user);
// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = [0, 1, 2];
// document.body.innerHTML = greeter();
// Expected 1 arguments, but got 0
// An argument for 'person' was not provided.
function greeter(person) {
    if (person === void 0) { person = "xgqfrms"; }
    return "Hello, " + person;
}
var user = "xgqfrms";
document.body.innerHTML = greeter();
