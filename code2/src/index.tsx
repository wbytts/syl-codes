import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './App-useState';
import App from './App-useEffect';

ReactDOM.render(
  <React.StrictMode>
    {/* 加入 name 属性 */}
    <App name="test name" />
  </React.StrictMode>,
  document.getElementById('root'),
)

