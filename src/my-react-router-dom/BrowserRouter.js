// BrowserRouter ,组建复合，我们在使用的时候，也是在其中进行children。
import React,{Component} from 'react'
import {createBrowserHistory} from 'history' // 安装了 react-router-dom ；就不需要在安装history了；已经涵盖
import Router from './Router'
// BrowserRouter 是基于Router来进行实现的
export default class BrowserRouter extends Component{
  constructor(props){
    super(props)
    this.history = createBrowserHistory()
  }
  render() {
    return(
      <div>
        <Router children={this.props.children}  history={this.history}/>
      </div>
    )
  }
} 