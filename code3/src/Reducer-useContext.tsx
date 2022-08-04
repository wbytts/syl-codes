import React, { FC, createContext, useReducer, useContext, Dispatch } from "react";

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


// 使用类型断言，暂时将默认的 context 赋值为 undefined，因为后续 Provider 提供的值才是真实被使用的值
const Context = createContext<{ dispatch: Dispatch<string> }>(undefined as any);

const Reducer: FC = () => {
    const [count, dispatch] = useReducer(reducer, defaultState);
    return (
      // 通过 Provider 组件传递 dispatch
      <Context.Provider value={{ dispatch }}>
        <div>
          count: {count}
          <Child />
        </div>
      </Context.Provider>
    );
};


// 其他部分不变，只需要改变 GrandChild
const GrandChild: FC = () => {
    // 注意 useContext 接收的是 Context，不是 Context.Consumer。它的返回值就是 Context.Provider 所传递的 value
    const { dispatch } = useContext(Context)
    return (
        <div>
            <button onClick={() => dispatch('increment')}>Add</button>
            <button onClick={() => dispatch('decrement')}>Minus</button>
        </div>
    )
}

const Child: FC = () => {
    return <GrandChild />;
};


export default Reducer