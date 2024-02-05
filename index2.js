"use strict";
var 제목 = document.querySelector("#title");
if (제목 !== null) {
    제목.innerHTML = "Hello";
}
//narrowing 2
if (제목 instanceof Element) {
    제목.innerHTML = "Hello";
}
//narrowing 3
//Element type으로 확정
//사용 안하는게 나음
var 제목1 = document.querySelector("#title");
//제목이 있으면 실행
//없으면 undefined 반환
if ((제목1 === null || 제목1 === void 0 ? void 0 : 제목1.innerHTML) !== undefined) {
    제목1.innerHTML = "Hello";
}
//Element 중 HTMLAnchorElement로 정확히 지정
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "kakao.com";
}
var 버튼 = document.querySelector(".button");
//버튼에 addEventListener가 있으면 실행
//없으면 undefined 반환
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    console.log("click");
});
