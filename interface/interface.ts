let 네모 = {
    color:'red',
    width:100,
}

type Square = {
    color:string;
    width:number;
}
//same
interface 네모{
    color:string;
    width:number;
}


//interface는 중복 가능 
//type은 중복속성 에러 안남
interface Student{
    name:string;
}

interface Student{
    age:number;
}

interface Teacher extends Student{
    age:number;
}

let 선생님:Teacher = {
    name:"kim",
    age:30
}

