"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//tuple type 위치 고려한 타입지정 가능
var x = ["hello", 10];
x = ["hello"];
//error
// x = [10, "hello"];
//error
// let error:[string, number?,string] = ["hello"];
function tuple() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x;
}
tuple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function tuple2() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x;
}
tuple2(1, "2");
var arrtuple = [1, 2, 3];
//이것도 spread operator
var arrtuple2 = __spreadArray([4, 5], arrtuple, true);
