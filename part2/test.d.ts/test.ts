let 이름test : string = "kim";
type AgeD = number;

//자동으로 test.d.ts 파일이 생성됨
//d.ts파일은 타입 정리 파일
//readonly

//d.ts파일은 로컬 모듈
//ts은 기본적으로 전역 모듈
//export 사용해야 사용 가능

//전역모듈 사용
let 나이d:AgeDtype = 10;

//nodemodule 사용시 자동으로 전역임
//typeRoots 사용시에는 node_modules/@types 추가해야함