// 别忘了引入 FC 以及 useState 类型
import React, { FC, useState } from 'react'
import './App.css'

interface AppProps {
    name: string
}

// FC 是 FunctionComponent 的简称，包含一个 children 属性，它只有一个泛型类型，代表该组件的 props 类型
const App: FC<AppProps> = ({ name }) => {
    // 使用 useState 存储状态，下文会详细讲解
    // count是状态
    // setCount是修改状态的方法，在调用 setCount 后会更新该组件，效果同 class 组件的 setState
    const [count, setCount] = useState(0)
    // 如果初始值需要经过一些计算才能得到，那么也可以向 useState 传入一个函数作为参数，函数执行后的返回值会作为初始状态。
    /*
      const [count, setCount] = useState(() => {
          // 各种逻辑
          return 0
      })
    */

    /*
      不管是直接传入初始值还是初始函数，useState 的初始化操作只会在组件首次渲染时执行，
      后续组件更新时不会再进行初始化操作，而是使用已存在的状态值。
    */

    /*
      useState 也可以接受一个泛型类型，用于指定 state 的类型；
      如果不指定，TS 也会根据初始值进行推断，大多数情况下这个推断是准确的
    */

    /*
      useState 所返回的状态修改函数也可以接受一个函数，用于在以前的值的基础上做修改，
      类似于 class 组件中 setState 接受一个函数的效果。
    */

    /*
      注意：
          需要注意的是，useState 所返回的修改函数所接收的值可以是任何类型，
          而每次赋值后，状态值会变成所传入的值，
          而不是将传入的值和已有的值合并后作为更新后的值（与 class 组件的 setState 部分更新不同）。
      
      技巧： 可以使用 @ts-ignore 注解关闭 TS 类型提示
    */

    const onClick = () => {
        // 使用 setCount 更新状态
        // setCount(count + 1)
        setCount(x => x + 1)
    }

    return (
        <div className="App">
            <div>name: {name}</div>
            <div>count: {count}</div>
            <button onClick={onClick}>+</button>
        </div>
    )
}

export default App