function sayHello(person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    var firstName = person.firstName, lastName = person.lastName;
    return "Hello, " + firstName + " " + lastName;
}
var person = {
    firstName: "Jane",
    lastName: "User"
};
// document.body.innerHTML = sayHello();
// Expected 1 arguments, but got 0.ts(2554)
// person.ts(6, 19): An argument for 'person' was not provided.
// document.body.innerHTML = sayHello("person");
// Argument of type '"person"' is not assignable to parameter of type 'Person'.
document.body.innerHTML = sayHello(person);
