import React,{Component} from 'react'
import {RouterContext} from './Context'
export default class Router extends Component{
  constructor(props){
    super(props)
    // 用于路由变化匹配path用的参数
    this.state={
      location: props.history.location
    }
    // 监听history
    props.history.listen(location=>{
      // 改变了就修改location
      this.setState({location})
    })
  }
  render(){
    const{ history, children} =this.props
    // 主要目的是返回children
    return  <RouterContext.Provider value={{history, location:this.state.location}}>
          {children}
      </RouterContext.Provider>
    ;
  }
}