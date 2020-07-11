import React,{useContext,useReducer,useLayoutEffect} from  'react'
import {bindActionCreators} from './MybindActionCreators'
const Context= React.createContext()
export const connect=(
  mapStateToProps=state=>state,
  mapDispatchToProps
)=>WrappedComponent=>props=>{
  
  // useContext 读取当前的Context；
  const store = useContext(Context);
  // 从store中去获取store
  const {getState, dispatch, subscribe} =store

  // 首先要获取到传递进来的stateProps
  // state的获取是从mapStateToProps而来的
  const stateProps = mapStateToProps(getState()) //mapStateToProps 是一个函数传进来一个state，导出一个state；

  let  dispatchProps={ // 定义变成let，下面会根据mapDispatchToProps来进行重复赋植
    dispatch
  }
  // console.log('dispatchProps',dispatchProps);
  // console.log('mapDispatchToProps',mapDispatchToProps)
  // 首先进行类型的判断
   if (typeof mapDispatchToProps === 'function') {
     // 如果是函数，就将diapatch传进去，之后执行函数在返回
      dispatchProps =mapDispatchToProps(dispatch)
   } else if (typeof mapDispatchToProps === 'object'){
     // 如果是对象，就调用bindActionCreators，将对象进行封装返回
     dispatchProps =bindActionCreators(mapDispatchToProps,dispatch)
   }

  const [ignored, forceUpdate] = useReducer(x=>x+1,0)
  useLayoutEffect(() => {  // 相当于 componentDidMount；useLayoutEffect要比useEffect要提前执行
    // 订阅
    // console.log('useLayoutEffect')
    const unsubscribe =subscribe(()=>{ 
      forceUpdate()// 刷新状态
    })
    return () => { // 相当于 componentWillUnmount
      // 取消订阅
      if(unsubscribe){ 
        unsubscribe()
      }
    }
  }, [store]) // 关联store变化时触发
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

export function Provider({children, store}){
 return <Context.Provider value={store}>{children}</Context.Provider>
}