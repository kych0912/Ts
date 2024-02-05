"use strict";
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        this.name = "kim";
    }
    PersonClass.prototype.함수 = function () {
        console.log("함수");
    };
    return PersonClass;
}());
PersonClass.prototype.함수 = function () {
    console.log("함수");
};
var 사람1 = new PersonClass();
var 사람2 = new PersonClass();
console.log(사람1.name);
