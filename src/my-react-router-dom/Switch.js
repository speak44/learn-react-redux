import React, { Component } from 'react'
import matchPath from './matchPath';
import { RouterContext } from './Context';

export default class Switch extends Component {
  render() {
    return (<RouterContext.Consumer>
      {context=> {
        const {location} =context
        console.log('Switch=====location',location)
        let match; // 找到匹配的元素，match设置为true
        let element; // 匹配的元素，没有匹配到就没有初始值

        const {children}= this.props
        // 还需要做的是查找到匹配到的元素
        React.Children.forEach(children, child=>{
          // if条件 ：match 我们最上面定义是undefined，所以用==；&& 有有效的element元素
          if(match==null &&React.isValidElement(child)){
            element= child
            const {path}= child.props
            // path路径匹配到 ? matchPath(location, ...),这块就需要用到Conetxt: 不匹配就用传下来的默认match
            match = path? matchPath(location.pathname, child.props):context.match
          }
        })
        // 在Switch这块，element 这块已经是一个元素了。
        // 如果找到匹配的元素 ？就显示elment，克隆一下是待会儿会加属性 ： null
        // React.cloneElement(element,{}) {}空出来，是要放match，给route用；
        return match? React.cloneElement(element,{
          computedMatch:match
        }):null
        }
      }
    </RouterContext.Consumer>)
  }
}
