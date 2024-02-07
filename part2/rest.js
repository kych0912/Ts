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
function 함수32() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    //rest parameter는 array로 받음
    console.log(a);
}
함수32(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //[1,2,3,4,5,6,7,8,9,10]
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr123 = __spreadArray(__spreadArray(__spreadArray([0], arr1, true), arr2, true), arr3, true);
//destructuring
var _a = ['hello', 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
function 함수3(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수3({ student: true, age: 20 });
