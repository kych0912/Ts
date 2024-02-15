//tuple type 위치 고려한 타입지정 가능
let x: [string, number?] = ["hello", 10];
x = ["hello"];

//error
// x = [10, "hello"];

//error
// let error:[string, number?,string] = ["hello"];

function tuple(...x : number[]){
    return x;
}

tuple(1,2,3,4,5,6,7,8,9,10);

function tuple2(...x:[number,string]){
    return x;
}

tuple2(1,"2");

let arrtuple = [1,2,3];
//이것도 spread operator
let arrtuple2:[number,number,...number[]] = [4,5,...arrtuple];