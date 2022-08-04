import React, { FC, useRef } from 'react'

const Ref: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    // 使用 countRef 记录点击次数，初始值为 0
    const countRef = useRef(0)

    const onClear = () => {
        // 每次点击后，把数量加 1，并输出到控制台
        countRef.current++
        console.log('click count: ', countRef.current)
        // DOM 节点的引用放在 current 属性中，所以我们需要先判断是否已经拿到了 DOM 节点再使用
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    // 在每次渲染时打印日志
    // 可以看到 countRef 值的改变确实没有引起组件的重新渲染。
    console.log('render...')

    return (
        <div>
            {/* 和 class 组件一样，通过 ref 属性获取 DOM 节点*/}
            <input type="text" ref={inputRef} />
            <button onClick={onClear}>clear</button>
        </div>
    )
}

export default Ref