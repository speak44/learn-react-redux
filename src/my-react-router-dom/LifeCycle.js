import React, { Component } from 'react'

export default class LifeCycle extends Component {
  // 挂载
  componentDidMount(){
    // 当前的方法都定义在this里面，
    console.log('componentDidMount',this)
    if(this.props.onMount){
      this.props.onMount.call(this,this)
    }
  }
  // 取消挂载
  componentWillUnmount(){
    console.log('componentWillUnmount', this)
    if(this.props.onUnmount){
      this.props.onUnmount.call(this,this)
    }
  }
  render() {
    return null
  }
}
