var 이름 = { grade: "A" };
var 이름2 = 123;
var 이름3 = 123;
function 함수(x) {
    return x * 2;
}
var john = [123, true, "john"];
var john2 = { name: "kim", age: 20, 123: "abc" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 회원들 = ["kim", "park", "lee", 123, 456, 789];
var 이름4 = 회원들[0]; //typescript에서는 any를 사용하지 않는 것이 좋다. (typescript 해제)
var 이름5 = 회원들[0]; //unknown은 any보다는 좋다.
//naraawing : 타입을 정확하게 명시할 수 없을 때 사용한다.
function 내함수(x) {
    if (typeof x === "number") {
        return x * 2;
    }
    else {
        return x + "hi";
    }
}
function 내함수assertion(x) {
    var array = [];
    array[0] = x;
}
//assertion 사용 용도
//1. Narrowing
//2. 무슨 타입이 들어오는지 100% 확신할 때
//상관없음
내함수assertion('123');
//평소 사용X 비상용
var 동물;
var 동물1 = {
    name: "dog",
    age: 3
};
//const 는 재할당만 막는 역할. 수정은 가능 
var 출생지역 = { region: "seoul", country: "korea" };
출생지역.region = "busan";
var 여친 = { name: "kim" };
