import React from 'react'
import ReactDOM from 'react-dom'
// import Reducer from './Reducer'
import Reducer from './Reducer-useContext'
import Ref from './useRef'
import Memo from './Memo'

ReactDOM.render(
  <React.StrictMode>
    <Reducer />
    <Ref />
    <Memo />
  </React.StrictMode>,
  document.getElementById('root'),
)






