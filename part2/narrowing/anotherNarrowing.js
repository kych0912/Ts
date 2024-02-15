"use strict";
function 함수narrowing(a) {
    // if(typeof a === "string"){
    //     return a.length;
    // } else{
    //     
    // }
    //same
    if (a && typeof a === "string") {
        return a.length;
    }
}
function 동물함수(동물) {
    //typeof 사용 불가
    if ("swim" in 동물) {
        return 동물.swim;
    }
    return 동물.fly;
}
function 차함수(차) {
    //in 키워드 사용 불가능
    if (차.wheel === "4개") {
        return 차.color;
    }
    return 차.color;
}
