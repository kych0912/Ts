function 함수narrowing(a:string|undefined){


    // if(typeof a === "string"){
    //     return a.length;
    // } else{
    //     
    // }

    //same
    if(a&&typeof a === "string"){
        return a.length;
    } 
}

type Fish = {
    swim:string
}
type Bird = {
    fly:string
}

function 동물함수(동물:Fish|Bird){
    //typeof 사용 불가
    if("swim" in 동물){
        return 동물.swim;
    }
    return 동물.fly;
}

//오브젝트 instanceof 부모class

type Car = {
    wheel:'4개',
    color:string
}

type Bike = {
    wheel:'2개',
    color:string
}

function 차함수(차:Car|Bike){
    //in 키워드 사용 불가능
    if(차.wheel === "4개"){
        return 차.color;
    }
    return 차.color;
}
    