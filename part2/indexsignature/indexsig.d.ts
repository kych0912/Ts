interface StringOnly {
    [key: string]: string | number;
}
declare let user: StringOnly;
interface Number {
    [key: number]: number;
}
interface MyType {
    'font-size': {
        'font-size': {
            'font-size': string;
        };
    };
}
declare let css: MyType2;
interface MyType2 {
    'font-size': MyType2 | string;
}
