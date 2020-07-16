import React,{Component} from 'react'
import { RouterContext } from './Context';

export default class Route extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <RouterContext.Consumer>
        {
          context=>{
            const {location} = context
            const {path,component,children,render} =this.props
            // 用来判断，筛选到的路由进行展示
            // 如果用 window.location；只会首次渲染，只有state发生改变的时候才会重新render            
            const match= location.pathname === path
            console.log('route-match', match)
            // 将props 进行一个组合为的是更好的传递参数
            const props={
              ...context,
              location,
              match
            } 
            
            // match 匹配到：优先级-children>component>render|| null
            // match 不匹配到： children是function形式 || null
            return match?
              children?
                (typeof children==='function'?
                  // 是函数就直接执行
                  children(props)
                  // 组建复合
                  :children 
                )
                :
                (component?
                  (React.createElement(component,props))
                  :(render?render(props):null)
                )
            :
            (typeof children==='function'? children(props) : null)
          }
        }
      </RouterContext.Consumer>
    )
  }
}