let 이름 : {name?:string,grade:string} = {grade:"A"};

let 이름2:string|number = 123;

type Name = string|number;
let 이름3:Name = 123;

function 함수(x:number) :number{
    return x*2;
}

type Member = [number,boolean,string];
let john:Member = [123,true,"john"];

type Member2 = {
    [key:string]:string|number
}

let john2:Member2 = {name:"kim",age:20,123:"abc"};

class User{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

let 회원들 = ["kim","park","lee",123,456,789];

let 이름4:any = 회원들[0]; //typescript에서는 any를 사용하지 않는 것이 좋다. (typescript 해제)
let 이름5:unknown = 회원들[0] //unknown은 any보다는 좋다.

//naraawing : 타입을 정확하게 명시할 수 없을 때 사용한다.
function 내함수(x:number|string){
    if(typeof x === "number"){
        return x*2;
    }else{
        return x+"hi";
    }
}

function 내함수assertion(x:number|string){
    let array :number[] = [];
    array[0] = x as number;
}
//assertion 사용 용도
//1. Narrowing
//2. 무슨 타입이 들어오는지 100% 확신할 때

//상관없음
내함수assertion('123');

//평소 사용X 비상용

let 동물 :string|number|undefined;

type Animal = string|number|undefined;

type Animal2 = {name:string,age:number}|undefined;
let 동물1 : Animal2 = {
    name:"dog",
    age:3
};

//const 는 재할당만 막는 역할. 수정은 가능 
const 출생지역 = {region:"seoul",country:"korea"};
출생지역.region = "busan";

type Girlfriend = {
    //읽기 전용
    readonly name:string,
}

const 여친:Girlfriend = {name:"kim"};
//여친.name = "park"; Error!

type Name1 = string;
type Age = number;
type Person = Name|Age;

type PositionX = {x:number};
//type PositionX = number Error!
type PositionY = {y:number};

//object 타입 합치기
type NewType = PositionX&PositionY;

//literal type
//kim만 들어올 수 있음
let 이름1:'kim';
let 이름12:'kim'|'park'|'lee';
이름1 = 'kim';

let array:("가위"| "바위" | "보")[] //union type

//literal type 은 const 변수 업글버전
//const에 여러개 저장
const 가위바위보:"가위"|"바위"|"보" = "가위";

var 자료 = {
    name:"kim",
}

function 내함수2(x:"kim"){
    return x;
}

//내함수2(자료.name); Error!
내함수2(자료.name as "kim");

//as const는 자료를 완전히 잠근다.
//readonly, object value를 literal type으로 변환
var 자료2 = {
    name:"kim",
} as const;
 
