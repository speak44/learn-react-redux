import React,{Component} from 'react'
import {RouterContext} from './Context'
export default class Router extends Component{
  // 默认match
  // 不写match的情况下，默认返回 path：'/' 的对象
  // 这一段是直接从源码中抄的
  static computeRootMatch(pathname){
    return {path:'/',url:'/',params:{}, isExact: pathname==='/'}
  }
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
    return  <RouterContext.Provider value={{
      history, 
      location:this.state.location,
      match:Router.computeRootMatch(this.state.location.pathname)
      }}>
        {children}
      </RouterContext.Provider>
    ;
  }
}