//다른곳에 정의되어 있으니 에러내지 마라
//html파일에 첨부되어 있으니
declare let data:number;

console.log(data);

//모든 ts파일은 ambient module로 글로벌 모듈이다
//datats에서 export를 안해도 다른 ts파일에서 사용가능
console.log(datats);

//만약 전역변수로 만들고 싶지 않으면 import 또는 export가 파일에 포함되어 있으면 자동으로 로컬모듈로 취급한다
export {}
let a:number = 10;

//글로벌 변수 만들고 싶을땐 declare global 사용
declare global{
    let bglobal:number;
}



