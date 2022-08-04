import React, { FC, useMemo, useState, useCallback, useEffect } from 'react'

// 自定义 Hook
// 使用 use 开头
const useTimer = (str: string) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(str)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
}


/*
    useMemo 用于缓存回调计算结果，它接收两个参数，
    第一个是回调函数，第二个是该函数的依赖项，
    当依赖项发生改变时，会重新触发回调计算。
*/


const Memo: FC = () => {
    useTimer('this is Memo component')

    const [end, setEnd] = useState(0)
    // 增加 Memo 组件被更新的影响因素
    const [other, setOther] = useState(0)

    // 逻辑和之前一致
    const sum = useMemo(() => {
        console.log('recalculated number:', end)

        let result = 0
        for (let i = 0; i <= end; i++) {
            result += i
        }

        return result
        // 只在 end 改变时才重新触发计算操作
    }, [end])

    // 只在 end 改变时，使用新的回调函数
    const onClickEnd = useCallback(() => setEnd(end + 1), [end])
    // 只在 other 改变时，使用新的回调函数
    const onClickOther = useCallback(() => setOther(other + 1), [other])


    return (
        <div>
            end:{end} other: {other}
            <div>
                {/* <button onClick={() => setEnd(end + 1)}>+End</button>
        <button onClick={() => setOther(other + 1)}>+Other</button> */}
                {/* 使用 useCallback */}
                <button onClick={onClickEnd}>+End</button>
                <button onClick={onClickOther}>+Other</button>
            </div>
            <div>result: {sum}</div>
        </div>
    )
}

export default Memo