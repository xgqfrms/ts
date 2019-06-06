# ts

> TypeScript 是一个可以编译成简洁JavaScript的JavaScript超集！


## install

```sh

$ npm i -g typescript

$ tsc -v
# Version 3.4.5

```

## demos

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

> app.ts

```ts
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

```

```sh
# 编译
$ tsc app.ts

```

### Type annotations

```ts
function greeter(person: string) {
    return "Hello, " + person;
}

// OK: String
let user = "Jane User";
document.body.innerHTML = greeter(user);

```

```ts
function greeter(person: string) {
    return "Hello, " + person;
}

// Error: Array, Number
let user = [0, 1, 2];
document.body.innerHTML = greeter(user);

```

### Interfaces

```ts

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {
    firstName: "Jane",
    lastName: "User",
};

document.body.innerHTML = greeter(user);

```
### Classes

```ts
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

```
### docs


https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html

https://www.typescriptlang.org/docs/handbook/basic-types.html

https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html



```ts

```
###

```ts

```
###

```ts

```

## JS to TS

http://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide

```sh
# build
$ tsc

# testing
$ cd built/test && node student.spec.js
```
