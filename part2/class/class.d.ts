declare class UserP {
    name: string;
    protected age: number;
    static count: number;
    constructor(name: string, age: number);
    greet(): void;
}
declare let 자식: UserP;
declare class NewUser extends UserP {
    constructor(name: string, age: number);
    doThis(): void;
}
declare class UserTest {
    static skill: string;
    intro: string;
}
declare let 철수: UserTest;
