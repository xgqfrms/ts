"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-08-31
 * @modified
 *
 * @description vanilla js customize bind this
 * @augments
 * @example
 * @link
 *
 */

let log = console.log;

let obj = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

// The function gets invoked at the global scope
let unboundGetX = obj.getX;
log(unboundGetX());
// undefined

let boundGetX = unboundGetX.bind(obj);
log(boundGetX());
// 42

Function.prototype.customizeBind = function() {
    let func = this;
    let _this = arguments[0];
    let args = slice(arguments, 1);
    log(`func =`, func);
    log(`_this =`, _this);
    log(`args =`, args);
    if (typeof thatFunc !== 'function') {
        return function() {
            let allArgs = args.concat(slice(arguments));
            log(`allArgs =`, allArgs);
            return func.apply(_this, allArgs);
        };
    } else {
        throw new Error(`Function.prototype.customizeBind - what is you trying to be bound is not callable!`);
    }
};


let customizeBoundGetX = unboundGetX.customizeBind(obj);
log(customizeBoundGetX());

