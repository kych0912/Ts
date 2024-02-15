declare let obj: {
    name: string;
    age: number;
};
interface PersonObj {
    age: number;
    name: string;
}
type PersonKeys = keyof PersonObj;
declare let aObj: PersonKeys;
interface PersonSignatures {
    [key: string]: string | number;
}
type PersonKeys2 = keyof PersonSignatures;
type CarObj = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<T> = {
    [P in keyof T]: string;
};
type 새로운타입 = TypeChanger<CarObj>;
type AgePar<T> = T extends string ? string : number;
declare let Par: AgePar<string>;
declare let ParNum: AgePar<number>;
type FirstItem<T> = T extends any[] ? T[0] : any;
declare let item: FirstItem<[string, number]>;
type ArrayItem<T> = T extends (infer U)[] ? U : never;
declare let item2: ArrayItem<[string, number]>;
declare let item3: ArrayItem<string[]>;
type 타입추출<T> = T extends (() => infer U) ? U : never;
type avoid = 타입추출<() => string>;
