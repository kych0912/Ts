class UserP{
    // name:string; 에러
    
    //same
    //public name:string;
    //constructor(name:string){
    //    this.name = name;
    //}

    constructor(public name:string){

    }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

}

