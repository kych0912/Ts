interface StringOnly{
    //모든 속성은 string
    //value도 string
    [key:string]:string|number,
}

let user:StringOnly = {
    name: 'kim',
    age: 30,
}

interface Number{
    [key:number]:number,
}

interface MyType{
    'font-size': {
        'font-size': {
            'font-size': string;
        };
    };
}

let css:MyType2={
    'font-size':{
        'font-size':{
            'font-size':'16px'
        }
    }
}

//recursive type
interface MyType2{
    'font-size': MyType2|string
}