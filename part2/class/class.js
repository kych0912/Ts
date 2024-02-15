"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserP = /** @class */ (function () {
    function UserP(name, age) {
        this.name = name;
        this.age = age;
    }
    //same
    // constructor(public name:string){
    // }
    UserP.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.name));
    };
    //UserP만 사용할 수 있고 자식에게 안물려준다.
    UserP.count = 0;
    return UserP;
}());
var 자식 = new UserP('홍길동', 30);
//console.log(자식.count); error!
console.log(UserP.count);
//class 복사
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser(name, age) {
        return _super.call(this, name, age) || this;
    }
    NewUser.prototype.doThis = function () {
        console.log(this.age);
    };
    return NewUser;
}(UserP));
var UserTest = /** @class */ (function () {
    function UserTest() {
        this.intro = UserTest.skill + "전문가";
    }
    UserTest.skill = "js";
    return UserTest;
}());
var 철수 = new UserTest();
