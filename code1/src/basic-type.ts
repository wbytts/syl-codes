// 与 JS 相同，TS 的原始类型包括布尔值、数值、字符串、undefined、null、object 以及 symbol。


// 布尔类型
// 布尔类型是最基础的数据类型，只包含 true 和 false 的值，使用 boolean 表示该类型。
const isDone: boolean = true
const isLoading: boolean = false

// 数值类型
// TS 中的所有数字都是浮点数，其类型为 number，并且支持十进制、二进制、八进制、十六进制。
const decimalNumber: number = 6 // 十进制
const binaryNumber: number = 0b11 // 二进制
const octalNumber: number = 0o11 // 八进制
const hexNumber: number = 0xfff // 十六进制
// 除此之外，number 类型的变量还可以被赋值 NaN 和 Infinity。
const nanNumber: number = NaN
const positiveInfiniteNumber: number = Infinity
const negativeInfiniteNumber: number = -Infinity


// 字符串类型
// TS 使用 string 表示字符串，并且支持模板字符串格式。
const str1: string = 'blue'
const str2: string = `${str1}, yellow, red`


// Object
// object 代表任何不是 boolean，number，string，symbol，undefined，null 类型的值。
const obj: object = {}
const array: object = []

// Symbol
// 注意：使用 symbol 时，需要在 tsconfig.json 文件中添加 ES2015 编译辅助库。
const s: symbol = Symbol()

// Undefined and Null
// 在 TS 中，undefined 和 null 都有各自对应的类型，分别叫做 undefined 和 null。
/*
本身类型的作用并不大。但是 undefined 和 null 是所有类型的子类型，
就这意味着它们可以赋值给其他所有类型，如 number 类型的变量可以赋值为 undefined。
这通常不是我们所期望的，在正式项目开发中，建议开启 strictNullChecks。
    {
        "compilerOptions": {
            "strictNullChecks": true
        }
    }
开启后，undefined 和 null 只能赋值给 any 类型的变量，或者它们自身的类型。
*/
const u: undefined = undefined
const n: null = null


// Void 
// 在 JS 中没有空值（ void ）的概念，在 TS 中可用 void 表示没有返回值的函数，该类型本身没有什么用。
// 因为它只能赋值为 undefined 或 null。
// const v1: void = null // 如果开启 strictNullChecks, void 类型变量只能被赋值为 undefined。
const v2: void = undefined

function foo(): void {
    // 注意：使用 console.log 函数时，需要在 tsconfig.json 文件中添加 DOM 编译辅助库。
    console.log('foo')
}


// Any
// TS 中用 any 表示任意类型，即 any 类型变量的使用方法和 JS 中的变量一模一样。
// 在引用一些 JS 所写的第三方库时，或者开发时还不清楚当前变量的具体类型时，都可以用 any 类型的变量。
/*
    过度使用 any 类型会把 TypeScript 变成 AnyScript，这样会失去类型保护的意义。
    通常情况下，不应该使用 any。
*/
let val: any = true
val = 'string'
val = 1

// Unknown
/*
在 3.0 新引入了 unknown，它相当于是 any 对应的安全类型。与 any 的主要区别：
    * any 类型的变量可以赋值给其他类型的变量，unknown 只能赋值给 unknown 或者 any（在未做类型断言前）；
    * 在对 unknown 变量进行操作前，必须进行类型断言，而 any 不需要。
*/
let unknown1: unknown
const unknown2: unknown = unknown1
const any1: any = unknown1

if (typeof unknown1 === 'string') {
    unknown1.toUpperCase()
}


// Never
/*
never 表示永不存在的值，它是任何类型的子类型，即可以赋值给任意类型。
然而，没有任何类型是它的子类型，这意味着没有任何类型的值可以赋值给 never（它自身除外）。
该类型本身没什么作用，实际开发业务也很少用到，多用于类型编程中。
*/
// 函数抛出错误，没有任何返回值
function error(message: string): never {
    throw new Error(message)
}

// 永远不会终止的函数
function infiniteLoop(): never {
    while (true) { }
}






