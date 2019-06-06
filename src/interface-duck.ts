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
 * @link https://jameshenry.blog/typescript-classes-vs-interfaces/
 *
 */

/*

    An interface is only used by TypeScript at compile time, and is then removed.
    Interfaces do not end up in our final JavaScript output.

    接口仅在编译时由TypeScript使用，然后被删除。
    接口最终不会出现在我们的最终JavaScript输出中。

 */


// A duck must have...
interface Duck {
    // ...a `hasWings` property with the value `true` (boolean literal type)
    hasWings: true
    // ...a `noOfFeet` property with the value `2` (number literal type)
    noOfFeet: 2
    // ...a `quack` method which does not return anything
    quack(): void
}

// This would pass type-checking!
const duck: Duck = {
    hasWings: true,
    noOfFeet: 2,
    quack() {
        console.log('Quack!')
    },
};

// This would not pass type-checking as it does not correctly implement the Duck interface.
const notADuck: Duck = {};
// Type '{}' is missing the following properties from type 'Duck': hasWings, noOfFeet, quack
