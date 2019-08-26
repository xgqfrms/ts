// "use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-08-26
 *
 * @description arrow-function-this-context
 * @augments
 * @example
 * @link https://reactjs.org/docs/faq-functions.html#class-properties-stage-3-proposal (# Class Properties)
 *
 */

let log = console.log;

class App {
    constructor(args) {
        this.args = args;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Click happened');
    }
    // Note: this syntax is experimental and not standardized yet.
    // handleClick = () => {
    //     console.log('Click happened');
    // }
    // Class Properties
    // ArrowFunction = () => {
    //     log(`ES6 Arrow Function this =`, this);
    // }
    // ES5Function = function () {
    //     log(`ES5 Function this`, this);
    // }
    ES5NormalFunction() {
        log(`ES5 Normal Function this`, this);
        // App { args: [ 1, 2, 3 ], handleClick: [Function: bound handleClick] }
    }
    // static
    static StaticFunction() {
        log(`StaticFunction this`, this);
        // class App {...}
    }
    get getArgs() {
        log(`\nget this`, this);
        // App { args: [ 1, 2, 3 ], handleClick: [Function: bound handleClick] }
        log(`get this.args`, this.args);
        // [ 1, 2, 3 ]
        return this.args;
    }
    set setArgs(args) {
        log(`\n set this`, this);
        // App { args: [ 1, 2, 3 ], handleClick: [Function: bound handleClick] }
        log(`set args`, args);
        // [ 'a', 'b', 'c' ]
        log(`old this.args`, this.args);
        // [ 1, 2, 3 ]
        this.args = args
        log(`new this.args`, this.args);
        //  [ 'a', 'b', 'c' ]
    }
}

log(`global this`, this);
// {}

(() => {
    log(`IIFE this`, this);
    // {}
    App.StaticFunction();
    // class App
    let app = new App([1, 2, 3]);
    // app.ArrowFunction();
    // app.ES5Function();
    app.ES5NormalFunction();
    // App { args: [ 1, 2, 3 ], handleClick: [Function: bound handleClick] }
    let args = app.getArgs;
    log(`app args =`, args);
    // [ 1, 2, 3 ]
    app.setArgs = ["a", "b", "c"];
})();

