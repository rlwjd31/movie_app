import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potatoa from './Potato';


ReactDOM.render(
  <React.StrictMode>
    {/* 밑에 <App />는 우리가 component를 사용하고자 할 때, component의 형태이다. */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// React는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
// js와 HTML 사이의 이러한 조합을 jsx라고 한다. <App />

// react application이 하나의 component만을 rendering해야한다. 이것이 App이다.