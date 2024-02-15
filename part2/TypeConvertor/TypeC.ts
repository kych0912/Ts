//타입 변환기
let obj={
    name:'kim',
    age:30
}

Object.keys(obj).forEach((key)=>{
    console.log(key)
})

interface PersonObj{
    age:number,
    name:string
}

//'age'|'name'
//keyof는 key값을 전부 가져온다.
type PersonKeys = keyof PersonObj;
let aObj:PersonKeys = 'age';

interface PersonSignatures{
    [key:string]:string|number
}

//'string'|'number'
type PersonKeys2 = keyof PersonSignatures;

type CarObj = {
    color:boolean,
    model:boolean,
    price:boolean|number
}

//타입 변환기
//P in keyof T
//T는 "color"|"model"|"price"
//P값 안에 위의 union타입이 있을 때 string으로 지정해라 
type TypeChanger<T> = {
    [P in keyof T]:string
}

type 새로운타입 = TypeChanger<CarObj>;

//조건부 type
//T가 string이면 string, 아니면 number
type AgePar<T> = T extends string ? string : number;
let Par : AgePar<string>;
let ParNum : AgePar<number>;

type FirstItem<T> = T extends any[]?T[0]:any;
let item:FirstItem<[string,number]> = '10';

//infer
//T가 배열이면 배열의 아이템을 추출
//infer는 타입을 왼쪽에서 추출해줌
//ex string[]가 T 이고 (infer U)[]가 T이면 U는 string
type ArrayItem<T> = T extends (infer U)[]?U:never;
let item2:ArrayItem<[string,number]> = 10;
let item3:ArrayItem<string[]> = '10';

//avoid는 string
type 타입추출<T> = T extends (()=>infer U)?U:never;
type avoid = 타입추출<()=>string>;