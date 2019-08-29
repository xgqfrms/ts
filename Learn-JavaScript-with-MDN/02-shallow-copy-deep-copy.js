"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-08-29
 * @modified
 *
 * @description 数组(深拷贝 / 浅拷贝) shallow-copy deep-copy
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

const shallowCopy = () => {
    const arr = [1, 2, 3];
    const arrNested = [[1, 2, 3], {key: "value"}];
    let arrShallowCopy = arr;
    let arrNestedShallowCopy = arrNested;
    log(`arr =`, arr);
    log(`arrNested =`, arrNested);
    log(`arrShallowCopy =`, arrShallowCopy);
    log(`arrNestedShallowCopy =`, arrNestedShallowCopy);
    // compare to pointer
    log(`shallowCopy`, arrShallowCopy === arr);
    log(`shallowCopy Nested`, arrNestedShallowCopy === arrNested);
    // modify arr
    arr[0] = "A";
    log(`arr =`, arr);
    log(`arrShallowCopy =`, arrShallowCopy);
    // modify arr copy
    arrNestedShallowCopy[1] = ["a", "b", "c"];
    log(`arrNested =`, arrNested);
    log(`arrNestedShallowCopy =`, arrNestedShallowCopy);
};

shallowCopy();
// true
// true

// [ 'A', 2, 3 ]
// [ 'A', 2, 3 ]

// [ [ 1, 2, 3 ], [ 'a', 'b', 'c' ] ]
// [ [ 1, 2, 3 ], [ 'a', 'b', 'c' ] ]


function recursiveClone(val) {
    return Array.isArray(val) ? Array.from(val, recursiveClone) : val;
}

const deepCopy = () => {
    const arr = [1, 2, 3];
    const arrNested = [[1, 2, 3], {key: "value"}];
    let arrDeepCopy = recursiveClone(arr);
    let arrNestedDeepCopy = recursiveClone(arrNested);
    log(`arr =`, arr);
    log(`arrNested =`, arrNested);
    log(`deepCopy`, arrDeepCopy);
    log(`deepCopy Nested`, arrNestedDeepCopy);
    // compare to pointer
    log(`deepCopy`, arrDeepCopy === arr);
    log(`deepCopy Nested`, arrNestedDeepCopy === arrNested);
    // modify arr
    arr[0] = "A";
    log(`arr =`, arr);
    log(`deepCopy`, arrDeepCopy);
    // modify arr copy
    arrNestedDeepCopy[1] = ["a", "b", "c"];
    log(`arrNested =`, arrNested);
    log(`deepCopy Nested`, arrNestedDeepCopy);
};

deepCopy();
// false
// false

// [ 'A', 2, 3 ]
// [ 1, 2, 3 ]

// [ [ 1, 2, 3 ], { key: 'value' } ]
// [ [ 1, 2, 3 ], [ 'a', 'b', 'c' ] ]
