declare let 이름: {
    name?: string;
    grade: string;
};
declare let 이름2: string | number;
type Name = string | number;
declare let 이름3: Name;
declare function 함수(x: number): number;
type Member = [number, boolean, string];
declare let john: Member;
type Member2 = {
    [key: string]: string | number;
};
declare let john2: Member2;
declare class User {
    name: string;
    constructor(name: string);
}
declare let 회원들: (string | number)[];
declare let 이름4: any;
declare let 이름5: unknown;
declare function 내함수(x: number | string): string | number;
declare function 내함수assertion(x: number | string): void;
declare let 동물: string | number | undefined;
type Animal = string | number | undefined;
type Animal2 = {
    name: string;
    age: number;
} | undefined;
declare let 동물1: Animal2;
declare const 출생지역: {
    region: string;
    country: string;
};
type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
type Name1 = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
declare let 이름1: 'kim';
declare let 이름12: 'kim' | 'park' | 'lee';
declare let array: ("가위" | "바위" | "보")[];
declare const 가위바위보: "가위" | "바위" | "보";
declare var 자료: {
    name: string;
};
declare function 내함수2(x: "kim"): "kim";
declare var 자료2: {
    readonly name: "kim";
};
