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

$ cd ../../

$ tsc --pretty
```

noImplicitReturns
noFallthroughCasesInSwitch

allowUnreachableCode
allowUnusedLabels

noEmitOnError

noImplicitAny

http://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks

## webapck

```sh
$ npm i -D awesome-typescript-loader source-map-loader

```

http://www.typescriptlang.org/docs/handbook/react-&-webpack.html

https://github.com/TypeStrong/ts-loader

https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader

http://www.typescriptlang.org/play/index.html

> .tsignore

https://github.com/Microsoft/TypeScript/issues/19573

## module type

> "commonjs", "amd", "umd", "system", "es6", "es2015", "esnext", "none"

* commonjs, amd, system, umd

```js
// For Node/CommonJS
declare function require(path: string): any;

// For RequireJS/AMD
declare function define(...args: any[]): any;

```

```js
// Node/CommonJS

var foo = require("foo");
foo.doStuff();

// RequireJS/AMD

define(["foo"], function(foo) {
    foo.doStuff();
})

// TypeScript

import foo = require("foo");
foo.doStuff();

```

## Getting Declaration Files

```sh
$ npm install -S @types/lodash

```
