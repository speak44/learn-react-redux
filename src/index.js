import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRedux from './pages/ReactReduxPage'
import  HookPage2 from './pages/HookPage2'
// import ReactRreduxHookPage from './pages/ReactRreduxHookPage'
// import {Provider}  from 'react-redux'
import {Provider} from './MyReactRedux'
import store from './store'

ReactDOM.render(
  // <HookPage2 />
  <Provider store={store}>
    <ReactRedux />
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
