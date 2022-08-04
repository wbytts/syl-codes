// 记得引入 FC 和 useReducer
import React, { FC, useReducer } from 'react'

// 默认状态值
const defaultState = 0

// 处理逻辑的 reducer 函数，第一个参数是当前最新状态值，第二个参数是 action
const reducer = (state: number, action: string) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

const Reducer: FC = () => {
    // useReducer 接收两个参数，分别是 reducer 函数，和初始状态值，并且返回最新状态和修改状态的 dispatch 方法
    const [count, dispatch] = useReducer(reducer, defaultState)

    /*
        useReducer的流程：
             xxx -> action -> store -> reducer
                    reducer -> store -> React
                    React -> action
    */

    /*
        action的一般结构：
            interface Action<T = undefined> {
                type: string // type 表明该 action 的类型
                payload?: T // payload 是附加数据
            }
        如果是这种类型的 action，相应 reducer 函数中的 switch 判断语句也需要修改：switch (action.type) 
    */

    /*
        useState 在更新时，源码中调用的方法叫做 updateReducer，
        而在 useReducer 的实现中，也调用了同样的方法。
        这说明其实 useState 的实现方式和 useReducer 是一致的。
    */

    return (
        <div>
            count: {count}
            <div>
                {/* 在点击时，调用 dispatch 方法，并传入需要的 action，就能达到更改状态的目的 */}
                <button onClick={() => dispatch('increment')}>Add</button>
                <button onClick={() => dispatch('decrement')}>Minus</button>
            </div>
        </div>
    )
}

export default Reducer