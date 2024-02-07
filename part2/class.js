"use strict";
var UserP = /** @class */ (function () {
    // name:string; 에러
    function UserP(name) {
        this.name = name;
    }
    UserP.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.name));
    };
    return UserP;
}());
