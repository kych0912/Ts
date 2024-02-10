function Generic(x:unknown[]){
    return x[0];
}

//Generic 함수
function Generic2<T>(x:T[]):T{
    return x[0];
}

let arr = [1,2,3];
let a = Generic2<number>(arr);

let b = ["1","2","3"];
let c = Generic2<string>(b);
//타입 변환
let d = Generic2(b);

//error
// function minusGeneric<T>(a:T){
//     return a-1;
// }

//그래서 타입 파라미터 제한두기
//number만 가능
function minusGeneric<T extends number>(a:T){
    return a-1;
}

let e = minusGeneric<number>(10);