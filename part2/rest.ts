function 함수2(...a:number[]){
    //rest parameter는 array로 받음
    console.log(a);
}

함수2(1,2,3,4,5,6,7,8,9,10); //[1,2,3,4,5,6,7,8,9,10]

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
let arr123 = [0,...arr1,...arr2,...arr3];

//destructuring
let [변수1 ,변수2] = ['hello',100];
let {student:student,age} = {student:true,age:20};

function 함수({student,age}:{student:boolean,age:number}){
    console.log(student,age);
}

함수({student:true,age:20});