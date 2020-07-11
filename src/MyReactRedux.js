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

// 使用的方法const num = useSelector(state => state) 
// 先将参数传进来
export function useSelector(selector){ // 首先要获取到store；用自定义的方法来获取context的值；用useContext
  // 最终需要实现的是getState
  //1.获取到store
  const store =useStore()
  //2.从store中获取到 getState
  console.log('useSelector的store', store)
  const {getState,subscribe} = store
  const selectState = selector(getState()) //getState()的执行，是返回当前的state
  // 定义 forceUpdate
  const [ignored, forceUpdate] = useReducer(x=>x+1,0)
  // 当 store 修改的时候，调用useLayoutEffect；
  useLayoutEffect(() => {
    const unsubscribe =subscribe(()=>{
      forceUpdate()
    })
    return () => {
      if(unsubscribe){
        unsubscribe()
      }
    };
  },[store])
  // 获取到state 进行返回；selector传进来的是一个函数 ‘state => state’；getState()将作为selector函数的参数进行返回
  console.log('selectState:',selectState)
  return selectState
}
// 我们的使用方式：const dispatch = useDispatch()
export function useDispatch(){
  // 目标是返回一个dispatch方法
  // 1.先获取dispatch
    const store =useStore()
    // 直接返回
    return store.dispatch
}
// 自定义hook，来获取state
export function useStore(){ // hook的定义方法，需要use开头，大写字母
  const store =useContext(Context)
  return store
}

// 自定义hook的好处就是可以共享逻辑，实现逻辑的复用 还需要注意hook方法只能用到hook方法当中去或者是函数组建中。自己写一个函数去使用hook是不可以的；