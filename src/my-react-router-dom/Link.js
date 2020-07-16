import React,{Component} from 'react'
import { RouterContext } from './Context';

export default class Link extends Component{
  // 引用
  static contextType = RouterContext
  constructor(){
    super()
  }
  handleClick=(e)=>{
    e.preventDefault();
    // 跳转
    console.log('跳转')
    this.context.history.push(this.props.to)
  }
  render(){
    const {to, children, ...restProps} = this.props
    return(
      <a href={to} {...restProps} onClick={this.handleClick}>{children}</a>
    )
  }
}