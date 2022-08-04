// TS 接口类型和类型别名

/*
JS 中的对象是十分常见的数据类型，
在前面提到过 object 类型就能够用来表示对象类型，
但是使用 object 时并没有很好的类型检查和属性提示。
在 TS 中有类型 interfce 用来定义对象的类型。

interface 的功能是对对象进行结构规范和类型检查，
官网解释是 focuses on the shape that values have。
*/
interface SelfIntro {
    name: string
    age: number
    location: {
        city: string
        post: string
    }
}

const me: SelfIntro = {
    name: 'me',
    age: 12,
    location: {
        city: 'chengdu',
        post: '000000',
    },
}

// 一旦使用 interface 定义的变量，编辑器就能提供很好的属性提示，就像在写静态语言一样。

/*
可选属性
    有时候，并不是接口中的所有属性都需要，此时可以用可选属性来表示非必需的属性，
    使用方式很简单，在属性名的结尾加上 ?
*/
interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({ color: 'black' })


/*
只读属性
    如果我们期望对象的属性在被创建后就不能在更改，此时就可以用只读属性，即在属性名前加上 readonly。
*/
interface User {
    readonly id: number
    name: string
}

const userVal: User = { id: 1, name: 'xxx' }

/*
可索引属性
    数组可以使用 [] 形式访问下标，如 a[10]。
    接口可用可索引属性实现相同的效果。
    可索引属性形如 [key:string | number]: any。
*/
interface StringArray {
    [index: number]: string
}
const myArray: StringArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

/*
前面提到的 interface 规范对象结构，并且赋值时，要和所声明的结构一一对应，不能多也不能少。
但是有时，除了必需属性，我们希望接口还能支持其他任意符合规范的字段，用可索引属性可以做到。
*/

// 假如，有一个接口用来描述淘宝收货地址，默认有一个主地址，但是其他收货地址并不确定是多少个。
interface TaobaoAddress {
    primaryAddress: string
    [name: string]: string
}

const address: TaobaoAddress = { primaryAddress: 'xxxx' }
address['secondAddress'] = 'xxxxx'
address['thirdAddress'] = 'xxxxx'

/*
接口继承
    在面向对象的语言中，子类可以继承父类的属性。接口也继承另一个接口。
    通过 extends 关键字。并且可以多继承。
*/
interface Animal {
    lifetime: number
}

interface Human extends Animal {
    name: string
}

const human: Human = { lifetime: 100, name: 'me' }

// 可继承多个接口
interface RunFn {
    run(): void
}

interface Runner extends Human, RunFn { }

const runner: Runner = {
    lifetime: 100,
    name: 'me',
    run() {
        console.log('running man')
    },
}


/*
类型别名
    类名别名使用 type 关键字定义类型，除此之外和 interface 特性几乎相同。
*/
type Basis = {
    name: string
}


