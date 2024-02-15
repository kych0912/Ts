class UserP{
    // name:string; 에러

    public name:string;
    protected age:number;
    //UserP만 사용할 수 있고 자식에게 안물려준다.
    public static count:number = 0;

    constructor(name:string,age:number){
       this.name = name;
       this.age=age;
    }
    //same
    // constructor(public name:string){

    // }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

}

let 자식 = new UserP('홍길동',30);
//console.log(자식.count); error!
console.log(UserP.count);


//class 복사
class NewUser extends UserP{
    constructor(name:string,age:number){
        super(name,age);

    }

    doThis(){
        console.log(this.age);
    }

}

class UserTest {
    static skill = "js";
    intro = UserTest.skill + "전문가";
}

let 철수  = new UserTest();



