class PersonClass{
    name: string;
    constructor(){
        this.name="kim";
    }

    함수(){
        console.log("함수");
    }

}

PersonClass.prototype.함수 = function(){
    console.log("함수");
}

let 사람1 = new PersonClass();
let 사람2 = new PersonClass();

console.log(사람1.name);