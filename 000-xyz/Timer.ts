"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019.05.09
 *
 * @description TS_Timer
 * @augments
 * @example
 *
 */

module Timers {
    export class App {
        el: HTMLElement;
        span: HTMLElement;
        timer: number;
        constructor(e: HTMLElement) {
            this.el = e;
            this.el.innerHTML = "bengin time: ";
            this.span = document.createElement("span");
            this.el.appendChild(this.span);
            this.span.innerText = new Date().toTimeString();
        }
        start() {
            this.timer = setInterval(() => {
                this.span.innerText = new Date().toTimeString();
            }, 500);
        }
        stop() {
            clearInterval(this.timer);
        }
    }
}

const TS_Timer = (datas = [], debug = false) => {
    let result = ``;
    // do something...
    return result;
};

export default TS_Timer;

export {
    TS_Timer,
    Timers,
};
