let 이름 : {name?:string} = {name:"kim"};

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

let 이름4:any = 회원들[0];
