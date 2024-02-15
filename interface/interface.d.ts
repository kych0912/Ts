declare let 네모: {
    color: string;
    width: number;
};
type Square = {
    color: string;
    width: number;
};
interface 네모 {
    color: string;
    width: number;
}
interface Student {
    name: string;
}
interface Student {
    age: number;
}
interface Teacher extends Student {
    age: number;
}
declare let 선생님: Teacher;
