// function xyzCoolFunction() {
//     if (arguments.length == 2 && !Array.isArray(arguments[1])) {
//         var f = arguments[0];
//         var arr = arguments[1];
//         // ...
//     }
//     // ...
// }
function xyzCoolFunction() {
    if (arguments.length == 2 && !Array.isArray(arguments[1])) {
        var f = arguments[0];
        var arr = arguments[1];
        // ...
    }
    // ...
}
xyzCoolFunction(function (x) {
    console.log(x);
}, [1, 2, 3, 4]);
xyzCoolFunction(function (x) {
    console.log(x);
}, 1, 2, 3, 4);
//# sourceMappingURL=function-array.js.map