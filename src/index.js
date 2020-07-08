import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ReactRedux from './pages/ReactReduxPage'
import  HookPage from './pages/HookPage'
import ReactRreduxHookPage from './pages/ReactRreduxHookPage'
import {Provider}  from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HookPage />
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
