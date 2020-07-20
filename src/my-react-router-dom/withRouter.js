// 高阶组建
import React from 'react'
import {RouterContext} from './Context'
const withRouter= WrappendComponent=>props=>{ 
  // 需要用到context 可以传递location match 等参数；因为在context中有记录
  return <RouterContext.Consumer>
      {context=><WrappendComponent {...props} {...context}></WrappendComponent>}      
    </RouterContext.Consumer>
}

export default withRouter
    