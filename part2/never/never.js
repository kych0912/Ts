"use strict";
function never함수() {
    //return X
    //endpoint X
    while (true) {
        //do something
    }
    throw new Error('에러가 발생했습니다.');
}
function never함수2(x) {
    //narrowing 필요?
    if (typeof x === 'string') {
        x;
    }
    else {
        //여기서 never는 있을 수 없다 라는 뜻
        x;
    }
}
//never type
var 함수never = function () {
    throw new Error('에러가 발생했습니다.');
};
