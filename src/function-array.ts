"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019.06.06
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

function abcCoolFunction() {
    if (arguments.length == 2 && Array.isArray(arguments[1])) {
        let f = arguments[0];
        let arr = arguments[1];
        // ...
        f(`hello world!`);
        console.log(`arr =`, arr);
    } else {
        let f2 = arguments[0];
        console.log(`arguments =`, arguments, typeof (arguments));
        // object
        // let arr2 = arguments.slice(1);
        // [...arguments.shift()];
        // [...arguments].shift();
        // let arr2 = arguments;
        // ...
        f2(`hello ts!`);
        // console.log(`arr2 =`, arr2);
    }
}

abcCoolFunction(function (x) { console.log(x) }, [1, 2, 3, 4]);
abcCoolFunction(function (x) { console.log(x) }, 1, 2, 3, 4);


/*

http://www.typescriptlang.org/play/index.html

noImplicitAny
Trigger an error if TypeScript uses 'any' whenever it can't infer a type.

strictNullChecks
Makes types non-nullable by default, catching a broad class of errors.

strictFunctionTypes
Disable bivariant parameter checking for function types.

strictPropertyInitialization
Ensure non-undefined class properties are initialized in the constructor.

noImplicitThis
Flag locations where the type of a 'this' expression implicitly has the type 'any'.

noImplicitReturns
Error on functions which do not return from every branch.

*/

/*

https://www.runoob.com/js/js-void.html

void()

<a href="javascript:void(0)">单击此处什么也不会发生</a>
<a href="javascript:void(alert('Warning!!!'))">点我!</a>

function getValue(){
   var a,b,c;
   a = void( b = 5, c = 7 );
   document.write('a = ' + a + ' b = ' + b +' c = ' + c );
}
// a = undefined b = 5 c = 7



## VS Code

Shift + Alt + A === Block Commnets

Ctrl + / === line Commnets

*/


// overloads
function xyzCoolFunction(f: (x: number) => void, nums: number[]): void;
function xyzCoolFunction(f: (x: number) => void, ...nums: number[]): void;

function xyzCoolFunction() {
    if (arguments.length == 2 && Array.isArray(arguments[1])) {
        let f = arguments[0];
        let arr = arguments[1];
        // array
        f(`hello world!`);
        console.log(`arr =`, arr);
    } else {
        // console.log(`arguments =`, arguments, typeof (arguments));
        let f2 = arguments[0];
        let arr2 = arguments[1];
        // ...nums
        // let arr2 = ...arguments;// ???
        f2(`hello ts!`);
        console.log(`arr2 =`, arr2);
    }
    // ...
}

xyzCoolFunction(
    function (x) {
        console.log(x);
    },
    [1, 2, 3, 4],
);
xyzCoolFunction(
    function (x) {
        console.log(x);
    },
    1,
    2,
    3,
    4,
);

