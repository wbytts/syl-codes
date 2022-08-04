// 别忘了还需要引入 useEffect 哟
import React, { FC, useState, useEffect } from 'react'

interface AppProps {
  name: string
}

const App: FC<AppProps> = ({ name }) => {
  // count 包含两个属性： a 和 b
  const [count, setCount] = useState({ a: 0, b: 0 })

  const onClickA = () => {
    // 使用解构获取 count 中所有属性，然后在用新的 a 值覆盖已有的 a 值
    setCount({ ...count, a: count.a + 1 })
  }

  const onClickB = () => {
    setCount({ ...count, b: count.b + 1 })
  }

  // 添加 useEffec
  // 在每次 App 组件的 name prop 更新时，该 useEffect 也会执行
  /*
    如果我们希望仅仅在 count 更新时才执行该副作用，
    那么我们可以在 useEffect 中传入第二个参数，作为该副作用的依赖。
    该副作用只有在相关依赖发生改变时才会执行
    
    内部使用 === 进行判断是否有更新操作
  */
  useEffect(() => {
    console.log('count:', count)

    const timer = setInterval(() => {
      setCount((prev) => ({ ...prev, a: prev.a + 1 }))
    }, 500)

    // 该函数会在每次执行副作用时，先执行清理工作，再生成新的 timer
    // 返回的这个函数作为下一次更新的副作用
    // 即，下一次更新时，限制性上一次返回的那个清理函数，再执行定义的副作用逻辑，并返回一个新的清理函数
    // 以此类推
    // 并且，当组件销毁的时候，也会执行最近一次返回的清理函数
    return () => {
      clearInterval(timer)
    }

  })

  return (
    <div className="App">
      <div>name: {name}</div>
      <div>countA: {count.a}</div>
      <div>countB: {count.b}</div>
      <button onClick={onClickA}>+A</button>
      <button onClick={onClickB}>+B</button>
    </div>
  )
}

export default App