import React,{Component} from 'react'
import { RouterContext } from './Context';
import matchPath from './matchPath';

export default class Route extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <RouterContext.Consumer>
        {
          context=>{
            // 这个是Router 使用contex传进来的参数
            const {location} = context
            // 这个是组建调用传进来的参数
            // computedMatch 是从Switch里面传进来的，用来match判断，优先使用
            const {path,component,children,render,computedMatch} =this.props
            // 用来判断，筛选到的路由进行展示
            // match：首先判断computedMatch  在判断path是否存在？
            //   存在使用matchPath来进行正则匹配，两个参数一个是：location.path、 this.props
            //   不存在 使用顶层传进来的默认的match，context中的。 
            const match= computedMatch
            ?computedMatch
            :path
            ? matchPath(location.pathname,this.props)
            :context.match
            // console.log('route-match', match)
            // 将props 进行一个组合为的是更好的传递参数
            const props={
              ...context,
              location,
              match
            } 
            
            // match 匹配到：优先级-children>component>render|| null
            // match 不匹配到： children是function形式 || null
            return(
              <RouterContext.Provider value={props}>
                {
                  match?
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
              </RouterContext.Provider>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}