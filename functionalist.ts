//type alias
type 함수타입 = (a:string) => number;


let 함수1:함수타입 = function(){
    return 3;
}

let 회원정보 = {
    name:'kim',
    plusOne(a:number){
        return a+1;
    }
}