import React from 'react'
import { RouterContext } from './Context';
import LifeCycle from './LifeCycle'
// 接收两个参数
// when 是一个Boolean
// message 是一个String|| function
export default function Prompt({when=true,message}){
  // 我们需要用到histroy，path来判断跳转，所以用到context
  return(
    <RouterContext.Consumer>{
      context=>{
        // 当首次进来时，when是true；history.block方法已经挂载在组建上。
        // 当设置为false的时候，history.block还会执行们因为没有卸载。所以还需要在LifeCycle中进行卸载
        if(!when){
          return null
        }
        const method = context.history.block
        console.log('method:',method)
        // render返回组件必须是<Component/>，所以不能直接写 return context.history.block；需要用到LifeCycle
        //在这里假设可以接收到LifeCycle的this，参数self，
        return <LifeCycle onMount={
          (self)=>{
            //设置一个方法release，
            self.release=method(message)
          }}
          onUnmount={(self)=>{
            self.release()
          }}
        ></LifeCycle>
      }
    }</RouterContext.Consumer>
  )
}

