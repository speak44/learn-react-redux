import React,{useReducer,useEffect} from 'react'
const creatReduce=(state,{type,payload=1})=>{
  switch (type) {
    case 'ADD':
      return state+payload
      case 'MINUS':
      return state-payload
      case 'reset':
        return init(payload)
    default:
      return new Error()
  }
}


function init(payload) {
  console.log('payload',payload);  
  return payload;	
}
export default function HookPage2(){
  const [state, dispatch] = useReducer(creatReduce, 0, init)
  // console.log(creatReduce,'creatReduce')
  useEffect(() => {
    console.log('useEffect',state)
  }, [state])
  return(
    <div>
      <h3>
        HookPage2
      </h3>
      <div>
        {state}
      </div>
      <button onClick={()=>{dispatch({type:'ADD'})}}>点击增加</button>
      <button onClick={()=>{dispatch({type:'reset' ,payload:6})}}>重置state</button>
    </div>
  )
}