declare function 함수narrowing(a: string | undefined): number | undefined;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function 동물함수(동물: Fish | Bird): string;
type Car = {
    wheel: '4개';
    color: string;
};
type Bike = {
    wheel: '2개';
    color: string;
};
declare function 차함수(차: Car | Bike): string;
