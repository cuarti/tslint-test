
// import * as data from './data.json';
// import data = require('./data.json');
const data = require('./data.json');


// export module Module {
//
// }

// declare module DeclaredModule {
//
// }

// export namespace Namespace {
//
// }

declare namespace DeclaredNamespace {

}

// TSLINT: typedef (call-signature)
// function funcWithReturn1() {
//     return 'foo';
// }

function funcWithReturn2():string {
    return 'foo';
}

// TSLINT: typedef (arrow-call-signature)
// let arrowWithReturn1 = () => {
//     return 'foo';
// };

let arrowWithReturn2 = (): string => {
    return 'foo';
};

// TSLINT: typedef (parameter)
// function funcWithParam1(param): void {
//     console.log(param);
// }

function funcWithParam2(param: string): void {
    console.log(param);
}

// TSLINT: typedef (arrow-parameter)
// let arrowWithParam1 = (param): void => {
//     console.log(param);
// };

let arrowWithParam2 = (param: string):void => {
    console.log(param);
};

// TSLINT: typedef (property-declaration)
// interface Interface1 {
//     name;
// }

interface Interface2 {
    name: string;
}

// TSLINT: typedef (member-variable-declaration)
// class Class1 {
//     public name;
// }

class Class2 {
    public name: string;
}

let obj: {[key: string]: string} = {};
