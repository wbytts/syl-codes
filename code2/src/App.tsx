import React, { Component } from 'react'
import './App.css'

interface AppProps {
  name: string
}

interface AppState {
  count: number
}
// Component 泛型的第一个参数代表该组件的 props 类型，第二个参数代表该组件的 state 类型
class App extends Component<AppProps, AppState> {
  // 注意，在此时 state 赋值时，也还是需要指定 state 类型，保证类型提示正确
  state: AppState = { count: 0 }

  onClick = () => {
    // 使用函数形式，保证每一次点击是在上一次的基础上增加 1
    this.setState((prev) => ({
      count: prev.count + 1,
    }))
  }
  render() {
    return (
      <div className="App">
        <div>name: {this.props.name}</div>
        <div>count: {this.state.count}</div>
        <button onClick={this.onClick}>+</button>
      </div>
    )
  }
}

export default App