"use strict";
function Generic(x) {
    return x[0];
}
//Generic 함수
function Generic2(x) {
    return x[0];
}
var arr = [1, 2, 3];
var a = Generic2(arr);
var b = ["1", "2", "3"];
var c = Generic2(b);
//타입 변환
var d = Generic2(b);
//error
// function minusGeneric<T>(a:T){
//     return a-1;
// }
//그래서 타입 파라미터 제한두기
//number만 가능
function minusGeneric(a) {
    return a - 1;
}
var e = minusGeneric(10);
