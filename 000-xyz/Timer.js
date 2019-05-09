"use strict";
exports.__esModule = true;
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
var Timers;
(function (Timers) {
    var App = /** @class */ (function () {
        function App(e) {
            this.el = e;
            this.el.innerHTML = "bengin time: ";
            this.span = document.createElement("span");
            this.el.appendChild(this.span);
            this.span.innerText = new Date().toTimeString();
        }
        App.prototype.start = function () {
            var _this = this;
            this.timer = setInterval(function () {
                _this.span.innerText = new Date().toTimeString();
            }, 500);
        };
        App.prototype.stop = function () {
            clearInterval(this.timer);
        };
        return App;
    }());
    Timers.App = App;
})(Timers || (Timers = {}));
exports.Timers = Timers;
var TS_Timer = function (datas, debug) {
    if (datas === void 0) { datas = []; }
    if (debug === void 0) { debug = false; }
    var result = "";
    // do something...
    return result;
};
exports.TS_Timer = TS_Timer;
exports["default"] = TS_Timer;
