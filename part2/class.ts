class UserP{
    // name:string; 에러
    

    constructor(public name:string){

    }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

}

