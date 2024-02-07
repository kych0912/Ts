"use strict";
var UserP = /** @class */ (function () {
    // name:string; 에러
    //same
    //public name:string;
    //constructor(name:string){
    //    this.name = name;
    //}
    function UserP(name) {
        this.name = name;
    }
    UserP.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.name));
    };
    return UserP;
}());
