// 枚举类型
// 枚举也是十分常见的类型。该类型的变量只能取限制范围内的值。如方向只能选上下左右。
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const d: Direction = Direction.Up

// 联合类型
// 如果我们希望变量具有多种类型，如变量可以是 number 也可以是 string，则可用联合类型实现。各个类型之间用 | 分隔。
let value: number | string
value = 1
value = 'string'

// 交叉类型
// 如果我们希望将多个类型组合在一起，如变量的类型是多个接口的组合，则可用交叉类型实现，各个类型之间用 & 分割。
interface Human {
    name: string
    lifetime: number
}

interface Identifier {
    id: number
}

const p: Human & Identifier = {
    id: 1,
    name: 'xxx',
    lifetime: 100,
}


// 泛型
// 我们使用 T 代表类型（泛型名字可以是其他任意字符串），在实际调用函数时再传入参数的类型作为约束。
// 泛型可以应用于函数，接口，类型别名，类等常见类型。
function foo1<T>(...list: T[]): string {
    return list.join(',')
}

// 只能输入 string 类型变量
foo1('str1', 'str2', 'str3', 'str4')

// 只能输入 number 类型变量
foo1(1, 2, 3, 4)






