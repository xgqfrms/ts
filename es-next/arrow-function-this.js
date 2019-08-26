// "use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-08-26
 *
 * @description arrow-function-this
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

const ArrowFunction = () => {
    log(`ES6 Arrow Function this =`, this);
};

function ES5Function() {
    // log(`ES5 Function this`, this);
    // Object [global]
}

log(`global this`, this);

(() => {
    log(`IIFE this`, this);
    ArrowFunction();
    ES5Function();
})();

